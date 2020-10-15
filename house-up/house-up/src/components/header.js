import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class header extends Component {
    render() { 
        return ( 
            <React.Fragment>
              <div className="pxp-header pxp-full fixed-top">
                <div className="wrapper">
                  <div className="row align-items-center">
                    <div className="col-5 col-md-2">
                      <Link to="/index" className="pxp-logo text-decoration-none">
                        <img className="img" src="assets/images/logo.png" alt="logo" />
                      </Link>
                    </div>
                    <div className="col-2 col-md-9">
                      <div className="flex-center-nav pr-8">
                        <ul className="pxp-nav list-inline for-pad">
                          <li className="list-inline-item">
                            <Link to="/home">Home</Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="/properties">Listing</Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="/add-new-prop">Sell</Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="/vendors">Vendors</Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="/blogs">Resources</Link>
                          </li>
                          <li className="list-inline-item pxp-has-btns">
                            <div className="pxp-user-btns">
                              <Link to="" className="pxp-user-btns-signup pxp-signup-trigger">Sign Up</Link>
                              <Link to="" className="pxp-user-btns-login pxp-signin-trigger">Sign In</Link>
                            </div>
                          </li>
                        </ul>
                        <div className="form-group has-search mb-0">
                          <span className="fa fa-search form-control-feedback" />
                          <input type="text" className="form-control w-100" placeholder="Search" />
                        </div>
                      </div>
                    </div>
                    <div className="col-5 col-md-1 text-right">
                      <Link to="" className="pxp-header-nav-trigger"><span className="fa fa-bars" /></Link>
                      <Link to="" className="pxp-header-user pxp-signin-trigger forborder" ><span className="far fa-user" /></Link>
                    </div>
                  </div>
                </div>
              </div>

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
         );
    }
}
 
export default header;