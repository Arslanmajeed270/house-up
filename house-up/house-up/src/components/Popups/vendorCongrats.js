import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


class vendorCongrats extends Component {
    state = {  }
    render() { 
        return ( 
            <Modal 
                show={this.props.show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                // size="md"
                dialogClassName="modal-width"
                onHide={() => this.props.closeCodelHanlder('vendorCongrats')}
            >
                <Modal.Header onClick={() => this.props.closeCodelHanlder('vendorCongrats')}>
                </Modal.Header>
                <Modal.Body >
                    <div className="form-group">
                        <div class="text-center" style={{fontSize: '30px',fontWeight: '500',padding: '20px'}}>CONGRATULATIONS!</div>
                    </div>
                    <div className="form-group">
                        <div class="text-center" style={{fontSize: '30px'}}>You are Successfully Registered.</div> 
                    </div>
                    <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            onClick={() => this.props.closeCodelHanlder('vendorCongrats')}
                            >Okay</button>
                    </div>
                </Modal.Body>
            </Modal>             
         );
    }
}
 
export default vendorCongrats;