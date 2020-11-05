import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class cardSelection extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Modal 
                    show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    // onHide={() => this.props.closeCodelHanlder('cardSelection')}
                    onClick={() => this.props.closeCodelHanlder}
                    centered
                    >
                    <Modal.Body >
                        
                    <Link >
                    <div className="card-selection" style={{borderBottom:'1px solid #DEE2F2'}}>
                        <div className="dashboard-newsfeed-content"
                        >
                            <Link to="#">
                                <div className="row">
                                    <div className="col-md-3 logo-modal">
                                        <img  src={require("../../assets/images/icons/ic_monthly.svg")} alt=""  style={{height:'60px'}}/>
                                    </div>
                                    <div className="col-md-9">
                                        <div class="card ">VISA Card</div>
                                        <div class="card-description"> **** **** **** 4545 </div>
                                        <img src={require('../../assets/images/ic_check_sel.svg')} alt="" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </Link>
                    <Link>
                    <div className="card-selection">
                        <div className="dashboard-newsfeed-content"
                        >
                            <Link to="#">
                                <div className="row">
                                    <div className="col-md-3 logo-modal">
                                        <img  src={require("../../assets/images/icons/ic_annul.svg")} alt=""  style={{height:'60px'}}/>
                                    </div>
                                    <div className="col-md-9">
                                        <div class="card">Master Card</div>
                                        <div class="card-description"> **** **** **** 4545 </div>
                                        <img src={require('../../assets/images/ic_check_sel.svg')} alt="" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </Link>
                    <Link>
                    <div >
                        <div className="dashboard-newsfeed-content dashed-button"
                        >
                            <Link to="#">
                                <button className="btn btn-lg"  onClick={() => this.props.cardDetailsHandler('cardDetails') } > ADD NEW CARD</button>   
                            </Link>
                        </div>
                    </div>
                    </Link>
                    <button className="btn btn-primary card-btn" type="submit">
                        Submit
                    </button>
                   
                    </Modal.Body>
                </Modal>  
        
            </React.Fragment>
         );
    }
}
 
export default cardSelection;