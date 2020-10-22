import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class phoneSignIn extends Component {
 
    render() {
        console.log("checking this.props.show: ", this.props.show);
        return ( 
            <Modal 
            show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    size="md"
                    onHide={() => this.props.closeCodelHanlder('phoneSignin')}
                    >
                    <Modal.Header closeButton onClick={() => this.props.closeCodelHanlder('phoneSignin')} >
                    </Modal.Header>
                    <Modal.Body>
                        <Link>
                        <div className="logo-modal">
                            <img src="assets/images/icons/logo.png" alt="" style={{width: '143px'}} />
                            </div>
                            <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <Link to="#"  style={{float:'right', marginBottom:'3px'}} onClick={() => this.props.emailSigninHandler('emailSignin')}>Login with email</Link>
                            </div>
                                <div className="form-group">
                                    <input type="text" 
                                        className="phone-number"
                                        id="pxp-signin-email" 
                                        placeholder="Phone Number"
                                        onChange={this.onChange}
                                        // name="number"
                                        // value={this.state.number} 
                                        required
                                    />
                                    <span className="country-code-login-page"><img src="assets/images/053-canada.svg" alt="" style={{marginLeft:'-23px', marginBottom:'-41px'}}/> +1</span>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="pxp-signin-pass" placeholder="Enter your password" />
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                       <Link to="#" className="pxp-agent-contact-modal-btn">Sign In</Link>
                                    </div>
                                    <div className="form-group ">
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
 
export default phoneSignIn;