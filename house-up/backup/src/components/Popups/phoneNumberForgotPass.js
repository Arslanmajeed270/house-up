import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import { Alert } from 'react-bootstrap';

class phonenumberForgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      number: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    let errors = props.errors;

    let stateChanged = false;
    let changedState = {};

    if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
      changedState.errors = errors;
      stateChanged = true;
    }

    if (stateChanged) {
      return changedState;
    }
  }

  componentDidMount(){
    this.props.onHideError()
  }

  onChange = (e) => {
    if (e.target.value >= 0) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  onSubmit = () => {
    let number = '+' + 1 + this.state.number;
    this.props.phoneNumberHandler(number);
    let data = {
      msisdn: number,
      action: 'forget',
      type: 'LOGIN_PIN_SMS',
    };
    this.props.onGeneratePin(data);
    this.props.optForgotPassHandler('optForgotPass');
  };
  render() {
    const { errors } = this.state;

    return (
      <Modal
        show={this.props.show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // size="sm"
        dialogClassName="modal-width"
        onHide={() => this.props.closeCodelHanlder('phoneNoForgotPass')}
      >
        <Modal.Header
          closeButton
          onClick={() => this.props.closeCodelHanlder('phoneNoForgotPass')}
        ></Modal.Header>
        <Modal.Body style={{ padding: '20px 15px 5px' }}>
          {errors && errors.message && (
            <Alert variant="danger">
              <strong>Error!</strong> {errors.message}
            </Alert>
          )}
          <div className="logo-modal img-large">
            <img
              src={require('../../assets/images/icons/ic_logo.svg')}
              alt=""
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
              <span className="country-code-forgotPass">
                <img
                  src="assets/images/053-canada.svg"
                  alt=""
                  style={{ marginLeft: '-23px', marginBottom: '-82px' }}
                />
              </span>
              <span className="country-code-forgot-page"> +1</span>
            </div>
            <div className="form-group">
              <button className="pxp-agent-contact-modal-btn" type="submit">
                Next
              </button>
            </div>
            <div
              className="text-center pxp-modal-small"
              style={{ marginBottom: '10px' }}
            >
              <a
                className="pxp-modal-link pxp-signup-trigger"
                href="/home"
                style={{ fontWeight: 'bold' }}
              >
                Create an account
              </a>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGeneratePin: (data) => dispatch(actions.generatePin(data)),
    onHideError: () => dispatch({ type: actionTypes.CLEAR_ERRORS }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(phonenumberForgotPass);
