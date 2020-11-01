import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';



class cardSelection extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Modal 
                    show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => this.props.closeCodelHanlder('cardDetails')}
                    centered
                    >
                    <Modal.Body >
                    <div className="row">
                        <div className="col-md-12" style={{margin:'15px 0px'}}>
                            <input type="text"
                                className="form-control"
                                placeholder="Card Number" 
                                required
                            />
                        </div>
                        <div className="col-md-6" style={{margin:'15px 0px'}}>
                            <input type="text"
                                className="form-control"
                                placeholder="Expire Date" 
                                required
                            />
                        </div>
                        <div className="col-md-6" style={{margin:'15px 0px'}}>
                            <input type="text"
                                className="form-control"
                                placeholder="CVV" 
                                required
                            />
                        </div>
                    </div>    
                    <button className="btn btn-primary card-btn">
                        Submit
                    </button>
                   
                    </Modal.Body>
                </Modal>  
        
            </React.Fragment>
         );
    }
}
 
export default cardSelection;