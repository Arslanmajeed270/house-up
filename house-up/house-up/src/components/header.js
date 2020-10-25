import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class header extends Component {
  
    render() { 
      const animateHeader = this.props.animateHeader;
        return ( 
            <React.Fragment>
              <div className={"pxp-header fixed-top " + ( animateHeader ? "pxp-animate" : "pxp-full" ) }>
                <div className="wrapper">
                  <div className="row align-items-center">
                    <div className="col-5 col-md-2">
                      <Link to="/index" className="pxp-logo text-decoration-none">
                        {animateHeader ? 
                        <>
                        <img class="img black-logo" src="assets/images/ic_logo_black.svg" />
                        <img class="img white-logo" src="assets/images/ic_logo_white.svg" />
                        </>
                        :
                        {/* <img className="img" src="assets/images/logo.png" alt="logo" /> */}
                        }
                        
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
                            <Link to="/professionals">Professionals</Link>
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
                        onClick={() => this.props.modelHanlder('phoneSignin')}
                        ><span className="far fa-user" /></Link> 
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
         );
    }
}
 
export default header;

