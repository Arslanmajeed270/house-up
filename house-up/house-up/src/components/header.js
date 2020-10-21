import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PhoneNumber from './Popups/phoneNumber';
import UserSignup from'./Popups/userSignup';
import CongrationPopup from './Popups/congratulation';
import SignIn from './Popups/signIn';
import SignupSelection from './Popups/signupSelection';
import VendorSignup from './Popups/vendorSignup';

class header extends Component {

constructor(props) {
    super(props);
    this.state = {
      loginState : false,
      signupSelectionState : false,
      phoneNoState:false,
      userSignupState:false,
      congratulationState:false,
      vendorSignupState:false
    };
  }

  loginPopupHandler = () =>
  {
    console.log('clicked');
    this.setState({
      loginState : !this.state.loginState
    });
  }
  signupSelectionPopupHandler =()=>{
    console.log('selection Clicked');
    this.setState({
      signupSelectionState:!this.state.signupSelectionState,
    });
  }
  phoneNoVerificationPopupHandler =()=>{
    this.setState({
      phoneNoState:!this.state.phoneNoState,
    });
  }
  userSignupPopupHandler =()=>{
    this.setState({
      userSignupState:!this.state.userSignupState,
    });
  }
  congratulationPopupHandler =()=>{
    this.setState({
      congratulationState:!this.state.congratulationState,
    });
  }

  vendorSignupPopupHandler =() =>{
    this.setState({
      vendorSignupState:!this.state.vendorSignupState,
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
                        onClick={this.userSignupPopupHandler}
                        ><span className="far fa-user" /></Link> 
                        {
                          this.state.userSignupState ? <UserSignup 
                          userSignupState ={this.state.userSignupState}
                          userSignupPopupHandler = {this.userSignupPopupHandler}
                          /> : null
                        }
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
         );
    }
}
 
export default header;

