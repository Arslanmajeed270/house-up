import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { checkPawwordPattern } from '../../utils/regex';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';

class emailSignin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            password: '',
            viewPass: false
        };
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
               console.log(userData);
      
             this.props.onLogin(userData, this.props.history);
         }
    render() {
        const {viewPass , emailAddress , password } = this.state;
        console.log("checking this.props.show: ", this.props.show);
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
                            <img src={require("../../assets/images/icons/ic_logo.svg")} alt="" />
                            </div>
                            <form  onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <Link to="#" style={{float:'right', marginBottom:'3px'}} onClick={() => this.props.phoneSigninHandler('phoneSignin')}>Login with mobile</Link>
                            </div>
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
                    </Modal.Body>
                </Modal> 
         );
    }
}
 
const mapStateToProps = state => {
    return {
      auth: state.auth,
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onLogin: (email, history) => dispatch(actions.loginUser(email, history)),
        
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(emailSignin);