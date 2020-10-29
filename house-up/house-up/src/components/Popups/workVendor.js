import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

class workPopup extends Component {
    render() { 
        return ( 
            
            <Modal 
            show={this.props.workModalState}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-width"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body >
            <h5 className="modal-title" id="pxpWorkWithModal">Work with Erika Tillman</h5>
                        <form className="mt-4">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label for="pxp-work-with-firstname">First Name</label>
                                        <input type="text" className="form-control" id="pxp-work-with-firstname" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label for="pxp-work-with-lastname">Last Name</label>
                                        <input type="text" className="form-control" id="pxp-work-with-lastname" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="pxp-work-with-email">Email</label>
                                <input type="text" className="form-control" id="pxp-work-with-email" />
                            </div>
                            <div className="form-group">
                                <label for="pxp-work-with-phone">Phone (optional)</label>
                                <input type="text" className="form-control" id="pxp-work-with-phone" />
                            </div>
                            <div className="form-group">
                                <label for="pxp-work-with-interest">I am interested in</label>
                                <select className="custom-select" id="pxp-work-with-interest">
                                    <option value="" selected="selected">Sell</option>
                                    <option value="">Buy</option>
                                    <option value="">Rent</option>
                                </select>
                            </div>
                            <div className="form-group mt-4">
                                <Link to="" className="pxp-agent-contact-modal-btn">Submit</Link>
                            </div>
                        </form>
            </Modal.Body>
        </Modal> 
         );
    }
}
 
export default workPopup;