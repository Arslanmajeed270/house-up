import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


class congrationPopup extends Component {
    state = {  }
    render() { 
        return ( 
            <Modal 
            show={this.props.congrationPopup}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton onClick={this.props.congrationPopupHanlder}>
            </Modal.Header>
            <Modal.Body >
            <div className="form-group">

            <div class="text-center">Users</div>
</div>
<div className="form-group">

            <div class="text-center">jdsfhsdkf kdrj d kdf riodk fikd huif</div> 
</div>
            <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            onClick={this.onSubmit}
                            
                            >Okay</button>
                    </div>
            </Modal.Body>
        </Modal>             

         );
    }
}
 
export default congrationPopup;