import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import * as actionTypes from '../../store/actions/actionTypes';
import { Link } from 'react-router-dom';

import { checkPawwordPattern } from '../../utils/regex';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
import{ Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class emailSignin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            password: '',
            viewPass: false,
            errors: {},
          loading : false,
        };
    }
    static getDerivedStateFromProps(props, state) {
        const errors = props.errors;
        const page = props.page; 
        let stateChanged = false;
        let changedState = {};
    
        if( page && JSON.stringify(state.showPopUp) !== JSON.stringify(page.showPopUp) ){
          changedState.showPopUp = page.showPopUp;  
          if( changedState.showPopUp === true ){
            props.onHidePopUp();
            props.closeCodelHanlder('phoneSignin');
          }
          stateChanged = true;
        }
    
        if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
            changedState.errors = errors;
            stateChanged = true;
        }
          
        if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
          changedState.loading = page.loading;
          stateChanged = true;            
        }
        
        if(stateChanged){
          return changedState;
        }
        return null;
      }
      
    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      viewPassword = () => {
          this.setState({ viewPass : !this.state.viewPass });
      }
      
      
       onSubmit = e => {
        console.log('checking click handler');
             e.preventDefault();
             
            if(!checkPawwordPattern(this.state.password)){
               this.props.onErrorSet("Password should be at least 1 special character, 1 capital letter, 1 lowercase,1 intiger and minmum length 6");
               return;
           }
            const userData = {
                msisdn:"",
                emailAddress: this.state.emailAddress,
                password:this.state.password,
                channel:"HouseUp",
                loginBy:"emailAddress"
               };
            //    console.log(userData);
      
             this.props.onLogin(userData, this.props.history);
         }
    render() {
        const {viewPass , emailAddress , password,errors , loading } = this.state;
        // console.log("checking this.props.show: ", this.props.show);
        return ( 
            <Modal 
            show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    // size="md"
                    dialogClassName="modal-width"
                    onHide={() => this.props.closeCodelHanlder('emailSignin')}
                    >
                    <Modal.Header closeButton onClick={() => this.props.closeCodelHanlder('emailSignin')} >
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <div className="logo-modal" >

                            </div>
                            <div className="form-group">
                                <Link to="#" style={{float:'right', marginBottom:'3px'}} onClick={() => this.props.phoneSigninHandler('phoneSignin')}>Login with mobile</Link>
                            </div>
                            <form  onSubmit={this.onSubmit}>
                            {errors && errors.message &&
                                <Alert variant='danger'  style={{marginTop:'15px'}}>
                                <strong>Error!</strong> { errors.message }
                                </Alert>
                            }
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control"
                                        id="email" 
                                        placeholder="Enter Your Email"
                                        onChange={this.onChange}
                                        name="emailAddress"
                                        value={emailAddress} 
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                    className="form-control" 
                                    type={ viewPass ? "text" : "password" }
                                    id="pass" 
                                    placeholder="Enter your password"
                                    onChange={this.onChange}
                                    name="password"
                                    value={password} 
                                    required 
                                    />
                                    <span className="viewPassword-login" onClick={this.viewPassword}><img src={require('../../assets/images/icons/ic_view_password.png')} alt="" /></span>
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                       <button to="#" className="pxp-agent-contact-modal-btn" type="submit" >Sign In</button>
                                    </div>
                                    <div className="form-group " style={{textAlign:'right'}}>
                                        <Link to="#" className="pxp-modal-link" onClick={() => this.props.phoneNoForgotHandler('phoneNoForgotPass')}>Forgot password</Link>
                                    </div>
                                    <div className="text-center pxp-modal-small"> 
                                        <Link to="#" 
                                        className="pxp-modal-link pxp-signup-trigger" style={{fontWeight:"bold"}}
                                        onClick={() => this.props.signupSelectionHandler('signupSelectionModel') }
                                        >Create an account</Link>
                                    </div>
                                </div> 
                            </form> 
                        </div>
                { loading ? <Spinner /> : "" }

                    </Modal.Body>
                </Modal> 
         );
    }
}
 
const mapStateToProps = state => {
    return {
      auth: state.auth,
      errors: state.errors
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, history) => dispatch(actions.loginUser(email, history)),
        onErrorSet: (msg) =>  dispatch({type: actionTypes.SET_ERRORS, payload: { message: msg }}),
        onHidePopUp: () => dispatch({type: actionTypes.HIDE_POP_UP }),
   
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(emailSignin);