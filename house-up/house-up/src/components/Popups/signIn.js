import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import SignUpPopup from './signUp';
class signInPopup extends Component {
    render() {
        return (
            <Modal 
            show={this.props.loginState}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body >
            <h5 class="modal-title" id="pxpSigninModal">Welcome back!</h5>
                <form class="mt-4">
                    <div class="form-group">
                        <label for="pxp-signin-email">Email</label>
                        <input type="text" class="form-control" id="pxp-signin-email" placeholder="Enter your email address" />
                    </div>
                    <div class="form-group">
                        <label for="pxp-signin-pass">Password</label>
                        <input type="password" class="form-control" id="pxp-signin-pass" placeholder="Enter your password" />
                    </div>
                    <div class="form-group">
                        <Link to="#" class="pxp-agent-contact-modal-btn">Sign In</Link>
                    </div>
                    <div class="form-group mt-4 text-center pxp-modal-small">
                        <Link to="#" class="pxp-modal-link">Forgot password</Link>
                    </div>
                    <div class="text-center pxp-modal-small">
                        New to HouseUP? <Link to="#" class="pxp-modal-link pxp-signup-trigger" onClick={this.props.signupPopupHanlder}>
                            {this.props.signupState ? <SignUpPopup 
                            signupState = {this.props.signupState}
                            signupPopupHanlder = {this.props.signupPopupHanlder}
                            /> : null}
                            Create an account</Link>
                    </div>
                </form>
            </Modal.Body>
        </Modal>             
        )
    }
}
export default signInPopup;


