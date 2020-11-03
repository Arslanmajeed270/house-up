import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

class contactPopup extends Component {
    render() {
        return (
                <Modal 
                    show={this.props.postConatctPopup ? this.props.postConatctPopup : this.props.propertyContactPopup}
                    aria-labelledby="contained-modal-title-vcenter"
                    dialogClassName="modal-width"
                    centered
                >
                    <Modal.Header closeButton >
                    </Modal.Header>
                    <Modal.Body >
                        <h5 className="modal-title" id="pxpContactAgentModal">
                            Contact Information
                        </h5>
                        <form className="mt-4">
                            <div className="form-group">
                                <label htmlFor="pxp-contact-agent-name">Name</label>
                                <input type="text" className="form-control" id="pxp-contact-agent-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pxp-contact-agent-email">Email</label>
                                <input type="text" className="form-control" id="pxp-contact-agent-email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pxp-contact-agent-phone">Phone</label>
                                <input type="text" className="form-control" id="pxp-contact-agent-phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pxp-contact-agent-message">Message</label>
                                <textarea className="form-control" id="pxp-contact-agent-message" rows={4} defaultValue="" />
                            </div>
                            <div className="form-group mt-4">
                                <Link to="" className="pxp-agent-contact-modal-btn">Send Message</Link>
                            </div>
                            </form>
                    </Modal.Body>
                </Modal> 
        )
    }
}
export default contactPopup;