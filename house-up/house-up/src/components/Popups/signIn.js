import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';


import SignUpPopup from './signUp';
import PhoneNumber from './phoneNumber';
class signInPopup extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            userName:'',
            email: '',
            confirmPassword:'',
            password: '',
            yourself:''
        };
    }
    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      onSubmit = e => {
        console.log('checking click handler');
      
             e.preventDefault();
      
             const userData = {
                  emailAddress: this.state.email,
                  password: this.state.password,
                  channel: "HouseUp"
             };
      
             this.props.onLogin(userData, this.props.history);
         }
          state = {  }


    render() {
      const {firstName, lastName, userName, email, password, confirmPassword,yourself} = this.state;

        return (
            <Modal 
            show={this.props.loginState}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton onClick={this.props.loginPopupHanldern}>
            </Modal.Header>
            <Modal.Body >
            <h5 className="modal-title" id="pxpSigninModal">Welcome back!</h5>
                <form className="mt-4">
                    <div className="form-group">
                        <label for="pxp-signin-email">Email</label>
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="First Name" 
                            name="firstName"
                            value={firstName}
                            onChange={this.onChange}
                         />
                         </div>
                    <div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Last Name" 
                            name="lastName"
                            value={lastName}
                            onChange={this.onChange}
                         />
</div>
<div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Create UserName" 
                            name="userName"
                            value={userName}
                            onChange={this.onChange}
                         />
</div>
<div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Enter Your Email" 
                            name="email"
                            value={email}
                            onChange={this.onChange}
                         />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Enter your password" 
                            name="password"
                            value={password}
                            onChange={this.onChange}     
                        />
</div>
                    <div className="form-group">

                        <input type="password" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Confirm password" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.onChange}     
                        />
      </div>
      <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Describe Yourself" 
                            name="yourself"
                            value={yourself}
                            onChange={this.onChange}     
                        />

                    </div>
                    <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            onClick={this.onSubmit}
                            
                            >Sign In</button>
                    </div>
                    <div className="form-group mt-4 text-center pxp-modal-small">
                        <Link to="#" className="pxp-modal-link">Forgot password</Link>
                    </div>
                    <div className="text-center pxp-modal-small">
                        New to HouseUP? <Link to="#" className="pxp-modal-link pxp-signup-trigger" onClick={this.props.signupPopupHanlder}>
                            {/* {this.props.signupState ? <PhoneNumber
                            signupState = {this.props.signupState}
                            loginState = {this.props.loginState}
                            signupPopupHanlder = {this.props.signupPopupHanlder}
                            loginPopupHanldern = {this.props.loginPopupHanldern}
                            /> : null} */}
                            Create an account</Link>
                    </div>
                </form>
            </Modal.Body>
        </Modal>             
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
        onLogin: (email, history) => dispatch(actions.loginUser(email, history)),
        
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(signInPopup);


