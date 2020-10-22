import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class signIn extends Component {
 
    render() {
        console.log("checking this.props.show: ", this.props.show);
        return ( 
            <Modal 
            show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    ClassName="signUp-modal"
                    size="md"
                    onHide={() => this.props.closeCodelHanlder('loginModel')}
                    >
                    <Modal.Header closeButton onClick={() => this.props.closeCodelHanlder('loginModel')} >
                    </Modal.Header>
                    <Modal.Body>
                    <Link>
                        <h5 className="modal-title" id="pxpSigninModal">Welcome back!</h5>
                        <form className="mt-4">
                            <div className="form-group">
                                <label htmlFor="pxp-signin-email">Email</label>
                                <input type="text" className="form-control" id="pxp-signin-email" placeholder="Enter your email address" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pxp-signin-pass">Password</label>
                                <input type="password" className="form-control" id="pxp-signin-pass" placeholder="Enter your password" />
                            </div>
                            <div className="form-group">
                                <Link to="#" className="pxp-agent-contact-modal-btn">Sign In</Link>
                            </div>
                            <div className="form-group mt-4 text-center pxp-modal-small">
                                <Link to="#" className="pxp-modal-link">Forgot password</Link>
                            </div>
                            <div className="text-center pxp-modal-small">
                                New to HouseUP? 
                                <Link to="#" 
                                className="pxp-modal-link pxp-signup-trigger"
                                onClick={() => this.props.signupSelectionHandler('signupSelectionModel') }
                                >Create an account</Link>
                            </div>
                        </form>
                    </Link>
                     </Modal.Body>
                </Modal> 
         );
    }
}
 
export default signIn;