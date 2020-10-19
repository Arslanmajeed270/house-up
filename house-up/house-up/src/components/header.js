import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignInPopup from './Popups/signIn';

class header extends Component {

constructor(props) {
    super(props);
    this.state = {
      loginState : false,
      signupState : false
    };
  }


  loginPopupHanlder = () =>{
    this.setState({
      loginState : !this.state.loginState
    });
  }

  signupPopupHanlder = () =>{
    this.setState({
      signupState : !this.state.signupState
    });
  }

    render() { 
      const animateHeader = this.props.animateHeader;
        return ( 
            <React.Fragment>
              <div className={"pxp-header fixed-top " + ( animateHeader ? "pxp-animate" : "pxp-full" ) }>
                <div className="wrapper">
                  <div className="row align-items-center">
                    <div className="col-5 col-md-2">
                      <Link to="/" className="pxp-logo text-decoration-none">
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
                            <Link to="/add-property">Sell</Link>
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
                      <Link to="#" className="pxp-header-nav-trigger"><span className="fa fa-bars" /></Link>
                      <Link to="#" className="pxp-header-user pxp-signin-trigger forborder" 
                        onClick={this.loginPopupHanlder} ><span className="far fa-user" /></Link>
                      {this.state.loginState ? <SignInPopup  
                        loginState = {this.state.loginState}
                        signupState = {this.state.signupState}
                        loginPopupHanldern = {this.loginPopupHanlder}
                        signupPopupHanlder = {this.signupPopupHanlder}
                      />
                    : null
                    }
                      
                    </div>
                  </div>
                </div>
              </div>

               <div className="modal fade show" id="pxp-signin-modal" tabhome={-1} role="dialog" aria-labelledby="pxpSigninModal" aria-modal="true" >
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
         );
    }
}
 
export default header;

