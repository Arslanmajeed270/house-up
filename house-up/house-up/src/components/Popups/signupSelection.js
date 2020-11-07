import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


class signupSelection extends Component {
    render() {
        return (
                <Modal 
                    show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    onHide={() => this.props.closeCodelHanlder('signupSelectionModel')}
                    >
                    <Modal.Header closeButton  onClick={() => this.props.closeCodelHanlder("signupSelectionModel")} >
                    </Modal.Header>
                    <Modal.Body style={{paddingBottom:'15px', paddingTop:'15px'}}>
                        
                    <Link >
                    <div className="signupCards">
                        <div className="dashboard-newsfeed-content"
                        onClick={() => this.props.phoneNumberHandler('phoneNumberModel') }
                        >
                            <Link to="#">
                                <div className="logo-modal">
                                    <img className="vendor-img" src={require("../../assets/images/icons/ic_user_account.svg")} alt=""  />
                                </div>
                                <div class="text-center user">Users</div>
                                <div class="text-center user-description">List home for sale, rental</div>
                                <div class="text-center user-description"> browse Professionals,buy&sell</div>                              
                            </Link>
                        </div>
                    </div>
                    </Link>
                    <Link>
                    <div className="signupCards">
                        <div className="dashboard-newsfeed-content"
                        onClick={() => this.props.phoneNumberHandler('phoneNumberVendorModel') }
                        >
                            <Link to="#">
                            <div className="logo-modal">
                                <img className="vendor-img" src={require("../../assets/images/icons/ic_business_account.svg")} alt="" />
                                </div>
                                <div class="text-center user ">Professionals</div>
                                <div class="text-center user-description ">Promote your business, find customers, </div> 
                                <div class="text-center user-description">network, post product & services</div>
                            </Link>
                        </div>
                    </div>
                    </Link>
                     </Modal.Body>
                </Modal>  
        )
    }
}
export default signupSelection;