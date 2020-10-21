import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


class signupSelection extends Component {
    render() {
        return (
                <Modal 
                    show={this.props.signupSelectionState}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton  onClick={this.props.signupSelectionPopupHandler} >
                    </Modal.Header>
                    <Modal.Body >
                    <Link >
                    <div className="signupCards">
                        <div className="dashboard-newsfeed-content">
                            <Link to="#">
                                <img  className="vendor-img" src="assets/images/user.png" alt=""  />
                                <div class="text-center user">Users</div>
                                <div class="text-center user-description">List home for sale, rental,browse vendors,buy&sell</div>                              
                            </Link>
                        </div>
                    </div>
                    </Link>
                    <Link>
                    <div className="signupCards">
                        <div className="dashboard-newsfeed-content">
                            <Link to="#">
                                <img className="vendor-img" src="assets/images/vendor.png" alt="" />
                                <div class="text-center user ">Vendors</div>
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