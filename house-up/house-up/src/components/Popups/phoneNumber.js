import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class phoneNumber extends Component {
    state = {  }
    render() { 
        return ( 
            <Modal 
            show={this.props.phoneNumberState}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="sm"
            >
            <Modal.Header >
            </Modal.Header>
            <Modal.Body >
                <img src="assets/icons/logo.png" alt="" className="logo-signupModal" />
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Enter your email address" 
                            name="email"
                         />
                    </div> <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            >Sign In</button>
                    </div>
             </Modal.Body>
        </Modal>  

         );
    }
}
 
export default phoneNumber;