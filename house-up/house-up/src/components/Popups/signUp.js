import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

class signUpPopup extends Component {
    render() {
        return (
                <Modal 
                    show={this.props.signupState}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body >
                    <h5 class="modal-title" id="pxpSignupModal">Create an account</h5>
                        <form class="mt-4">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="pxp-signup-firstname">First Name</label>
                                        <input type="text" class="form-control" id="pxp-signup-firstname" placeholder="Enter first name" />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="pxp-signup-lastname">Last Name</label>
                                        <input type="text" class="form-control" id="pxp-signup-lastname" placeholder="Enter last name" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="pxp-signup-email">Email</label>
                                <input type="text" class="form-control" id="pxp-signup-email" placeholder="Enter your email address" />
                            </div>
                            <div class="form-group">
                                <label for="pxp-signup-pass">Password</label>
                                <input type="password" class="form-control" id="pxp-signup-pass" placeholder="Create a password" />
                            </div>
                            <div class="form-group">
                                <Link to="#" class="pxp-agent-contact-modal-btn">Sign Up</Link>
                            </div>
                            <div class="text-center mt-4 pxp-modal-small">
                                Already have an account? <Link to="" class="pxp-modal-link pxp-signin-trigger">Sign in</Link>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>  
        )
    }
}
export default signUpPopup;