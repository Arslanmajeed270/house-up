import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
import * as actionTypes from '../../store/actions/actionTypes';

import{Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class phoneSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            loading : false,
            msisdn: '',
            password: '',
            viewPass: false,
            showPopUp: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        const errors = props.errors;
        const page = props.page; 
        let stateChanged = false;
        let changedState = {};

        console.log("checkig state.regiserUser: ", state.regiserUser);
      
        if( page && JSON.stringify(state.showPopUp) !== JSON.stringify(page.showPopUp) ){
          changedState.showPopUp = page.showPopUp;  
        console.log("checkig changedState.showPopUp: ", changedState.showPopUp);
          if( changedState.showPopUp === true ){
            props.onHidePopUp();
            this.props.closeCodelHanlder('phoneSignin')
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
        let msisdn = ('+' +1) + (this.state.msisdn);
      
             e.preventDefault();
             if(this.state.password.length < 6 ){
                this.props.onErrorSet("Password length must be atleast 6 !");
                return;
            }
      
            const userData = {
                msisdn:msisdn,
                emailAddress: "",
                password:this.state.password,
                channel:"HouseUp",
                loginBy:"msisdn"
               };
               console.log(userData);
             this.props.onLogin(userData, this.props.history);
         }
 
    render() {
        const { errors , loading, viewPass, msisdn , password } = this.state;
        console.log("checking this.props.show: ", this.props.show);
        let pageContent = '';

        if(loading){
          pageContent = <Spinner />
        }
        else{
          pageContent = "";
        }
        return ( 
            <Modal 
            show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    // size="md"
                    dialogClassName="modal-width"
                    onHide={() => this.props.closeCodelHanlder('phoneSignin')}
                    >
                    
                    <Modal.Body>
                        <Link to="#">
                        <div className="logo-modal">
                            <img src={require("../../assets/images/icons/ic_logo.svg")} alt="" />
                            </div>
                            <form >
                            {errors && errors.message &&
                                <Alert variant='danger'>
                                <strong>Error!</strong> { errors.message }
                                </Alert>
                            }
                            <div className="form-group">
                                <Link to="#"  style={{float:'right', marginBottom:'3px'}} onClick={() => this.props.emailSigninHandler('emailSignin')}>Login with email</Link>
                            </div>
                                <div className="form-group">
                                    <input type="text" style={{paddingLeft:'58px'}}
                                        className="phone-number"
                                        id="pxp-signin-email" 
                                        placeholder="416 123-4567"
                                        onChange={this.onChange}
                                        name="msisdn"
                                        value={msisdn} 
                                        required
                                    />
                                    <span className="country-image-login-page"><img src="assets/images/053-canada.svg" alt="" style={{marginLeft:'-23px', marginBottom:'-46px',height:'25px'}}/></span>
                                    <span className="country-code-login-page"> +1</span>
                                </div>
                                <div className="form-group">
                                    <input type={ viewPass ? "text" : "password" } name="password" value={password} onChange={this.onChange} className="form-control" id="pxp-signin-pass" placeholder="Enter your password" />
                                    <span className="viewPassword-login" onClick={this.viewPassword}><img src={require('../../assets/images/icons/ic_view_password.png')} alt="" /></span>
                                
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                       <Link to="#" className="pxp-agent-contact-modal-btn" onClick={this.onSubmit}>Sign In</Link>
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
                        </Link>
                    { pageContent }
                    </Modal.Body>
                </Modal> 
         );
    }
}
 
const mapStateToProps = state => {
    return {
        page: state.page,
        errors: state.errors
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, history) => dispatch(actions.loginUser(email, history)),
        onHidePopUp: () => dispatch({type: actionTypes.HIDE_POP_UP }),
        onErrorSet: (msg) =>  dispatch({type: actionTypes.SET_ERRORS, payload: { message: msg }})
        
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(phoneSignIn);