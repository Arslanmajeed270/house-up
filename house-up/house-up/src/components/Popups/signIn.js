import React, { Component } from 'react';

class signIn extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="modal fade" id="pxp-signin-modal" tabhome={-1} role="dialog" aria-labelledby="pxpSigninModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
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
                                New to HouseUP? <Link to="" className="pxp-modal-link pxp-signup-trigger">Create an account</Link>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                
            </React.Fragment>
        )
    }
}
export default signIn;
