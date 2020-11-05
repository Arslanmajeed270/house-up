import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import * as actions from '../store/actions';

class header extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      user: {},
      dropDownShow: false
     };
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

  dropDownHandler = () => {
    this.setState({
      dropDownShow: !this.state.dropDownShow
    });
  }
  
    render() { 
      const animateHeader = this.props.animateHeader;
      const { user, dropDownShow } = this.state;
        return ( 
            <React.Fragment>
              <div className={"pxp-header fixed-top " + ( animateHeader ? "pxp-animate" : "pxp-full" ) }>
                <div className="wrapper">
                  <div className="row align-items-center">
                    <div className="col-5 col-md-3">
                      <Link to={ user && user.profilePictureUrl ? "/index" : "" } className="pxp-logo text-decoration-none">
                        {animateHeader ? 
                        <>
                        <img className="img black-logo" src="assets/images/ic_logo_black.svg" alt="logo" />
                        <img className="img white-logo" src="assets/images/ic_logo_white.svg" alt="logo"/>
                        </>
                        :
                        <img className="img" src="assets/images/logo.png" alt="logo" /> 
                        }
                        
                      </Link>
                      <Link to="#">
                        <img src={require('../assets/images/ic_address.svg')} />
                      Street# 32, Canada
                      </Link>
                    </div>
                    <div className="col-2 col-md-8">
                      <div className="flex-center-nav pr-8">
                        <ul className="pxp-nav list-inline for-pad">
                          {/* <li className="list-inline-item">
                            <Link to="/home">Home</Link>
                          </li> */}
                          <li className="list-inline-item">
                            <Link to="/properties">Find a Home</Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="/add-property">List a Property</Link>

                          </li>
                          <li className="list-inline-item">
                            <Link to="/professionals">Find a Professional</Link>
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
                        {
                          animateHeader ? '' :
                          <div className="form-group has-search mb-0">
                          {/* <span className="fa fa-search form-control-feedback" /> */}
                          <input type="text" className="form-control w-100" placeholder="Search Location" />
                          <img src={require('../assets/images/ic_search.svg')} alt="" />
                        </div> 
                        }
                        
                      </div>
                    </div>
                    <div className="col-5 col-md-1 text-right">
                      <Link to="#" className="pxp-header-nav-trigger"><span className="fa fa-bars" /></Link>
                      { user && user.profilePictureUrl ?
                        <div to="#" className={`pxp-header-user pxp-signin-trigger ${ animateHeader ? '' : 'forborder'}`} 
                        style={{ width: "44px", height: "44px", backgroundSize: "cover",  backgroundImage: `url(${ user && user.profilePictureUrl ? user.profilePictureUrl  : 'assets/images/ic_profile_placeholder.png'})`}}
                        onClick={this.dropDownHandler}
                        >
                          {dropDownShow ? 
                              <div className="profile_header_dropdown">
                              <ul>
                                <li onClick={this.props.onLogout} className="profile_header_dropdown_li">Logout</li>
                              </ul>
                            </div>
                            :
                            "" 
                        }
                        </div>
                        :
                        <Link to="#" className={`pxp-header-user pxp-signin-trigger ${ animateHeader ? '' : 'forborder'}`} 
                          onClick={() => this.props.modelHanlder('phoneSignin')}
                          >
                            {/* <span className="far fa-user" /> */}
                            <img src={require('../assets/images/ic_profile.svg')} alt="" />
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

const mapDispatchToProps = dispatch => {
  return {
      onLogout: () => dispatch(actions.logoutUser())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(header);