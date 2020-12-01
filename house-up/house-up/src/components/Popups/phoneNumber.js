import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class phoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loading: false,
      number: '',
      showPopUp: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    let errors = props.errors;
    let page = props.page;

    let stateChanged = false;
    let changedState = {};
    if (JSON.stringify(state.showPopUp) !== JSON.stringify(page.showPopUp)) {
      changedState.showPopUp = page.showPopUp;
      if (changedState.showPopUp) {
        props.onHidePopUp();
        props.optUserHandler('optUserModel');
      }
      stateChanged = true;
    }

    if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
      changedState.errors = errors;
      stateChanged = true;
    }

    if (
      page &&
      JSON.stringify(state.loading) !== JSON.stringify(page.loading)
    ) {
      changedState.loading = page.loading;
      stateChanged = true;
    }

    if (stateChanged) {
      return changedState;
    }
  }
  onChange = (e) => {
    if (e.target.value >= 0) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    let number = '+' + 1 + this.state.number;
    this.props.phoneNumberHandler(number);
    let data = {
      msisdn: number,
      channel: 'HouseUp',
      type: 'LOGIN_PIN_SMS',
    };
    this.props.onGeneratePin(data);
  };
  render() {
    const { errors, loading } = this.state;

    let pageContent = '';

    if (loading) {
      pageContent = <Spinner />;
    } else {
      pageContent = '';
    }

    return (
      <Modal
        show={this.props.show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // size="sm"
        dialogClassName="modal-width"
        onHide={() => this.props.closeCodelHanlder('phoneNumberModel')}
      >
        <Modal.Header
          closeButton
          onClick={() => this.props.closeCodelHanlder('phoneNumberModel')}
        ></Modal.Header>
        <Modal.Body style={{ paddingTop: '20px' }}>
          {errors && errors.message && (
            <Alert variant="danger">
              <strong>Error!</strong> {errors.message}
            </Alert>
          )}
          <div className="logo-modal img-large">
            <img
              src={require('../../assets/images/icons/ic_logo.svg')}
              alt=""
              className="logo-signupModal"
              style={{ marginBottom: '20px' }}
            />
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                style={{ paddingLeft: '59px' }}
                className="phone-number"
                id="pxp-signin-email"
                placeholder="416 123-4567"
                onChange={this.onChange}
                name="number"
                value={this.state.number}
                minLength="9"
                maxLength="10"
                required
              />
              <span className="country-code">
                <img
                  src="assets/images/053-canada.svg"
                  alt=""
                  style={{ marginLeft: '-23px', marginBottom: '-68px' }}
                />
              </span>
              <span className="country-code-user-page"> +1</span>
            </div>
            <div className="form-group">
              <button className="pxp-agent-contact-modal-btn" type="submit">
                NEXT
              </button>
              <div style={{ textAlign: 'center', paddingTop: '10px' }}>
                <Link
                  to="#"
                  className="pxp-modal-link pxp-signup-trigger text-center"
                  style={{ fontWeight: 'bold' }}
                  onClick={() =>
                    this.props.alreadyHaveAccountHandler('alreadyHaveAccount')
                  }
                >
                  Already have an account
                </Link>
              </div>
            </div>
          </form>
          {pageContent}
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGeneratePin: (data) => dispatch(actions.generatePin(data)),
    onHidePopUp: () => dispatch({ type: actionTypes.HIDE_POP_UP }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(phoneNumber);
