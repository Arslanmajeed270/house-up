import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
class phoneSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msisdn: '',
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
        let msisdn = ('+' +1) + (this.state.msisdn);
      
             e.preventDefault();
      
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
        const { viewPass, msisdn , password } = this.state;
        console.log("checking this.props.show: ", this.props.show);
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
                                    <span className="viewPassword-login" onClick={this.viewPassword}><img src={require('../../assets/images/icons/ic_view_password.png')} /></span>
                                
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(phoneSignIn);