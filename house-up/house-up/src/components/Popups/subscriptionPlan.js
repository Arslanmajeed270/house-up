import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class subscriptionPlan extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Modal 
                    show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => this.props.closeCodelHanlder('subscriptionPlan')}
                    centered
                    >
                    <Modal.Body >
                        
                    <Link >
                    <div className="subscription-card" style={{borderBottom:'1px solid #DEE2F2'}}>
                        <div className="dashboard-newsfeed-content"
                        onClick={() => this.props.cardSelectionHandler('cardSelection') }
                        >
                            <Link to="#">
                                <div className="row">
                                    <div className="col-md-3 logo-modal">
                                        <img  src={require("../../assets/images/icons/ic_monthly.svg")} alt=""  style={{height:'60px'}}/>
                                    </div>
                                    <div className="col-md-9">
                                        <div class="user ">MONTHLY</div>
                                        <div class="user-description">$19.99 fist month & $29.99 per month</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </Link>
                    <Link>
                    <div className="subscription-card">
                        <div className="dashboard-newsfeed-content"
                        onClick={() => this.props.cardSelectionHandler('cardSelection') }
                        >
                            <Link to="#">
                                <div className="row">
                                    <div className="col-md-3 logo-modal">
                                        <img  src={require("../../assets/images/icons/ic_annul.svg")} alt=""  style={{height:'60px'}}/>
                                    </div>
                                    <div className="col-md-9">
                                        <div class="user">ANNUAL</div>
                                        <div class="user-description">$299.99 per year</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </Link>
                    </Modal.Body>
                </Modal>  
        
            </React.Fragment>
         );
    }
}
 
export default subscriptionPlan;