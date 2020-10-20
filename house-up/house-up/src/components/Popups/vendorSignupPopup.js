import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Modal} from 'react-bootstrap';


class vendorSignupPopup extends Component {
    state = {  }
    render() { 
        return ( 
            <Modal 
            show={this.props.vendorSignupState}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton onClick={this.props.loginPopupHanldern}>
            </Modal.Header>
            <Modal.Body >
                <div className="row">
                    <div className="col-md-6">
                    <h5 className="modal-title" id="pxpSigninModal">Welcome back!</h5>
                <form className="mt-4">
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="First Name" 
                            name="firstName"
                            
                            onChange={this.onChange}
                         />
                         </div>
                    <div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Last Name" 
                            name="lastName"
                            
                            onChange={this.onChange}
                         />
</div>
<div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Create UserName" 
                            name="userName"
                            
                            onChange={this.onChange}
                         />
</div>
<div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Enter Your Email" 
                            name="email"
                            
                            onChange={this.onChange}
                         />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Enter your password" 
                            name="password"
                            
                            onChange={this.onChange}     
                        />
</div>
                    <div className="form-group">

                        <input type="password" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Confirm password" 
                            name="confirmPassword"
                            
                            onChange={this.onChange}     
                        />
      </div>
      <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Describe Yourself" 
                            name="yourself"
                            
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
               
                    </div>
                    <div className="col-md-6">
                    <h5 className="modal-title" id="pxpSigninModal">Welcome back!</h5>
                <form className="mt-4">
                    <div className="form-group">
                        <label for="pxp-signin-email">Email</label>
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="First Name" 
                            name="firstName"
                            
                            onChange={this.onChange}
                         />
                         </div>
                    <div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Last Name" 
                            name="lastName"
                            
                            onChange={this.onChange}
                         />
</div>
<div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Create UserName" 
                            name="userName"
                            
                            onChange={this.onChange}
                         />
</div>
<div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Enter Your Email" 
                            name="email"
                            
                            onChange={this.onChange}
                         />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Enter your password" 
                            name="password"
                            
                            onChange={this.onChange}     
                        />
</div>
                    <div className="form-group">

                        <input type="password" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Confirm password" 
                            name="confirmPassword"
                            
                            onChange={this.onChange}     
                        />
      </div>
      <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Describe Yourself" 
                            name="yourself"
                            
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
               
                    </div>
            
             </div>
            </Modal.Body>
        </Modal>             
       
         );
    }
}
 
export default vendorSignupPopup;