import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class phoneNumber extends Component {
    state = {  }
    render() { 
        return ( 
            <Modal 
            show={this.props.phoneNoState}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="sm"
            >
            <Modal.Header closeButton onClick={this.props.phoneNoVerificationPopupHandler}>
            </Modal.Header>
            <Modal.Body >
                <img src="assets/images/icons/logo.png" alt="" className="logo-signupModal" />
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Phone Number" 
                         />
                        </div> 
                        <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            >Sign In
                        </button>
                    </div>
             </Modal.Body>
        </Modal>  

         );
    }
}
 
export default phoneNumber;