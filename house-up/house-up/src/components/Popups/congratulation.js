import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


class congrationPopup extends Component {
    state = {  }
    render() { 
        return ( 
            <Modal 
                show={this.props.show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                // size="md"
                dialogClassName="modal-width"
                onHide={() => this.props.closeCodelHanlder('congratulationModel')}
            >
                
                <Modal.Body onClick={this.props.congratulationPopupHandler}>
                    <div className="form-group">
                        <div class="text-center" style={{fontSize: '25px',color:'#1082FF',fontWeight: '500',padding: '12px'}}>CONGRATULATIONS!</div>
                    </div>
                    <div className="form-group">
                        <div class="text-center" style={{fontSize: '20px'}}>Your account has been </div>
                        <div class="text-center" style={{fontSize: '20px'}}> successfully created.</div> 
                    </div>
                    <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            onClick={() => this.props.closeCodelHanlder('congratulationModel')}
                            >Okay</button>
                    </div>
                </Modal.Body>
            </Modal>             
         );
    }
}
 
export default congrationPopup;