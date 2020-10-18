import React, { Component } from 'react';

class signUp extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="modal fade" id="pxp-signup-modal" tabhome={-1} role="dialog" aria-labelledby="pxpSignupModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5 className="modal-title" id="pxpSignupModal">Create an account</h5>
                        <form className="mt-4">
                        <div className="row">
                            <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="pxp-signup-firstname">First Name</label>
                                <input type="text" className="form-control" id="pxp-signup-firstname" placeholder="Enter first name" />
                            </div>
                            </div>
                            <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="pxp-signup-lastname">Last Name</label>
                                <input type="text" className="form-control" id="pxp-signup-lastname" placeholder="Enter last name" />
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pxp-signup-email">Email</label>
                            <input type="text" className="form-control" id="pxp-signup-email" placeholder="Enter your email address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pxp-signup-pass">Password</label>
                            <input type="password" className="form-control" id="pxp-signup-pass" placeholder="Create a password" />
                        </div>
                        <div className="form-group">
                            <Link to="#" className="pxp-agent-contact-modal-btn">Sign Up</Link>
                        </div>
                        <div className="text-center mt-4 pxp-modal-small">
                            Already have an account? <Link to="" className="pxp-modal-link pxp-signin-trigger">Sign in</Link>
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
export default signUp;