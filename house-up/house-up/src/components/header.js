import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

class header extends Component {

  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  static getDerivedStateFromProps(props, state) {
  
    const auth = props.auth ? props.auth : {};

  
    let stateChanged = false;
      let changedState = {};
  
  
    if(auth && auth.user && JSON.stringify(state.user) !== JSON.stringify(auth.user)){
      changedState.user= auth.user;
      stateChanged = true;
  }

  if(stateChanged){
      return changedState;
  }
  
    return null;
  }
  
    render() { 
      const animateHeader = this.props.animateHeader;
      const { user } = this.state;
        return ( 
            <React.Fragment>
              <div className={"pxp-header fixed-top " + ( animateHeader ? "pxp-animate" : "pxp-full" ) }>
                <div className="wrapper">
                  <div className="row align-items-center">
                    <div className="col-5 col-md-2">
                      <Link to={ user && user.profilePictureUrl ? "/index" : "#" } className="pxp-logo text-decoration-none">
                        {animateHeader ? 
                        <>
                        <img className="img black-logo" src="assets/images/ic_logo_black.svg" alt="logo" />
                        <img className="img white-logo" src="assets/images/ic_logo_white.svg" alt="logo"/>
                        </>
                        :
                        <img className="img" src="assets/images/logo.png" alt="logo" /> 
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
                            <Link to="#">add Listing</Link>
                            <ul>
                              <li>
                                <Link to="/add-property">Property</Link>
                              </li>
                              <li>
                                <Link to="/add-product">Product</Link>
                              </li>
                              <li>
                                <Link to="/add-coupon">Coupon</Link>
                              </li>
                            </ul>
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
                      { user && user.profilePictureUrl ?
                        <div to="#" className={`pxp-header-user pxp-signin-trigger ${ animateHeader ? '' : 'forborder'}`} 
                        style={{ width: "44px", height: "44px", backgroundImage: `url(${ user && user.profilePictureUrl ? user.profilePictureUrl  : 'assets/images/ic_profile_placeholder.png'})`}}
                        >
                        </div>
                        :
                        <Link to="#" className={`pxp-header-user pxp-signin-trigger ${ animateHeader ? '' : 'forborder'}`} 
                          onClick={() => this.props.modelHanlder('phoneSignin')}
                          >
                            <span className="far fa-user" />
                        </Link>
                      } 
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
         );
    }
}
 

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
};


export default connect(mapStateToProps, null)(header);