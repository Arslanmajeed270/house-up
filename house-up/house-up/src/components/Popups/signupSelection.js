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
                    onHide={() => this.props.closeCodelHanlder('signupSelection')}
                    >
                    <Modal.Header closeButton  onClick={() => this.props.closeCodelHanlder("signupSelection")} >
                    </Modal.Header>
                    <Modal.Body >
                    <Link >
                    <div className="signupCards">
                        <div className="dashboard-newsfeed-content"
                        onClick={() => this.props.phoneNumberHandler('phoneNumberModel') }
                        >
                            <Link to="#">
                                <div className="logo-modal">
                                    <img className="vendor-img" src="assets/images/icons/ic_user_account.png" alt=""  />
                                </div>
                                <div class="text-center user">Users</div>
                                <div class="text-center user-description">List home for sale, rental,browse vendors,buy&sell</div>                              
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
                                <img className="vendor-img" src="assets/images//icons/ic_business_account.png" alt="" />
                                </div>
                                <div class="text-center user ">Professionals</div>
                                <div class="text-center user-description ">Promote your business, find customers, network, post product & services</div>
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