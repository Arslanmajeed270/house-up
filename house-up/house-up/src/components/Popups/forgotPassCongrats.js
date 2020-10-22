import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';


class forgotPassCongrats extends Component {
    state = {  }
    render() { 
        return ( 
            <Modal 
                show={this.props.show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                size="md"
                onHide={() => this.props.closeCodelHanlder('forgotPassCongrats')}
            >
                <Modal.Header onClick={() => this.props.closeCodelHanlder('forgotPassCongrats')}>
                </Modal.Header>
                <Modal.Body >
                    <div className="form-group">
                        <div class="text-center" style={{fontSize: '30px',fontWeight: '500',padding: '20px'}}>CONGRATULATIONS!</div>
                    </div>
                    <div className="form-group">
                        <div class="text-center" style={{fontSize: '30px'}}>Your Password is Successfully Changed.</div> 
                    </div>
                    <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            onClick={() => this.props.closeCodelHanlder('forgotPassCongrats')}
                            >Okay</button>
                    </div>
                </Modal.Body>
            </Modal>             
         );
    }
}
 
export default forgotPassCongrats;