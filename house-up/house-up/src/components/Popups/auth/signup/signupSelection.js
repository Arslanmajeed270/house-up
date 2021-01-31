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
        <Modal.Header
          closeButton
          onClick={() => this.props.closeCodelHanlder('signupSelectionModel')}
        ></Modal.Header>
        <Modal.Body style={{ paddingBottom: '20px', paddingTop: '20px' }}>
          <div>
            <p
              style={{
                color: '#000',
                textTransform: 'uppercase',
                fontSize: '16px',
                padding: '0px 0px 8px',
                fontWeight:'bold'
              }}
            >
              Register As
            </p>
            <div className="signupCards">
              <div
                className="dashboard-newsfeed-content"
                onClick={() =>
                  this.props.phoneNumberHandler('phoneNumberModel')
                }
              >
                <Link to="#">
                  <div className="logo-modal">
                    <img
                      className="vendor-img"
                      src={require('../../../../assets/images/icons/ic_user_account.svg')}
                      alt=""
                    />
                  </div>
                  <div className="text-center user">Users</div>
                  <div className="text-center user-description">
                    List home for sale, rental
                  </div>
                  <div className="text-center user-description">
                    {' '}
                    browse Professionals,buy&sell
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="signupCards">
              <div
                className="dashboard-newsfeed-content"
                onClick={() =>
                  this.props.phoneNumberHandler('phoneNumberVendorModel')
                }
              >
                <Link to="#">
                  <div className="logo-modal">
                    <img
                      className="vendor-img"
                      src={require('../../../../assets/images/icons/ic_business_account.svg')}
                      alt=""
                    />
                  </div>
                  <div className="text-center user ">Professionals</div>
                  <div className="text-center user-description ">
                    Promote your business, find customers,{' '}
                  </div>
                  <div className="text-center user-description">
                    network, post product & services
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default signupSelection;
