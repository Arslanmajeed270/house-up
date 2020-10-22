import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class emailSignin extends Component {
 
    render() {
        console.log("checking this.props.show: ", this.props.show);
        return ( 
            <Modal 
            show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    size="md"
                    onHide={() => this.props.closeCodelHanlder('emailSignin')}
                    >
                    <Modal.Header closeButton onClick={() => this.props.closeCodelHanlder('emailSignin')} >
                    </Modal.Header>
                    <Modal.Body>
                        <Link>
                        <div className="logo-modal" >
                            <img src="assets/images/icons/logo.png" alt="" />
                            </div>
                            <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <Link to="#" style={{float:'right', marginBottom:'3px'}} onClick={() => this.props.phoneSigninHandler('phoneSignin')}>Login with mobile</Link>
                            </div>
                                <div className="form-group">
                                    <input type="text" 
                                        className="form-control"
                                        id="pxp-signin-email" 
                                        placeholder="email"
                                        onChange={this.onChange}
                                        // name="number"
                                        // value={this.state.number} 
                                        required
                                    />
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
 
export default emailSignin;