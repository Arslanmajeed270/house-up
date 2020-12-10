import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
import * as actionTypes from '../../store/actions/actionTypes';

import Spinner from '../../components/common/Spinner';

import { Alert } from 'react-bootstrap';

class forgotPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userDetails: {},
      confirmPassword: '',
      newPassword: '',
      viewPass: false,
      viewConfirmPass: false,
    };
  }
  viewPassword = () => {
    this.setState({
      viewPass: !this.state.viewPass,
    });
  };
  viewConfirmPassword = () => {
    this.setState({
      viewConfirmPass: !this.state.viewConfirmPass,
    });
  };
  static getDerivedStateFromProps(props, state) {
    const errors = props.errors;
    const auth = props.auth;

    let stateChanged = false;
    let changedState = {};

    if (
      auth &&
      JSON.stringify(state.userDetails) !== JSON.stringify(auth.userDetails)
    ) {
      changedState.userDetails = auth.userDetails;
      stateChanged = true;
    }
    if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
      changedState.errors = errors;
      stateChanged = true;
    }
    if (
      auth &&
      JSON.stringify(state.loading) !== JSON.stringify(auth.loading)
    ) {
      changedState.loading = auth.loading;
      stateChanged = true;
    }
    if (stateChanged) {
      return changedState;
    }
    return null;
  }
  componentDidMount() {
    this.props.onHideError()
    let data = {
      emailAddress: '',
      msisdn: this.props.phNumber,
      searchBy: 'msisdn',
      channel: 'web',
    };
    this.props.onGetUserDetails(data);
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.newPassword !== this.state.confirmPassword) {
      this.props.onErrorSet('Password not matched!');
      return;
    }
    let userId =
      this.state.userDetails && this.state.userDetails.userId
        ? this.state.userDetails.userId
        : '';
    const userData = {
      userId: userId,
      confirmPassword: this.state.confirmPassword,
      newPassword: this.state.newPassword,
    };

    this.props.onResetUserPassword(userData);
    this.props.forgotPassCongratsHandler('forgotPassCongrats');
  };

  render() {
    const {
      viewPass,
      viewConfirmPass,
      newPassword,
      confirmPassword,
      errors,
      loading,
    } = this.state;

    return (
      <Modal
        show={this.props.show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // size="md"
        dialogClassName="modal-width"
        onHide={() => this.props.closeCodelHanlder('forgotPass')}
      >
        <Modal.Body style={{ padding: '20px 15px 5px' }}>
          <Link to="#">
            <form>
              <div
                className="form-group text-center"
                style={{
                  fontSize: '18px',
                  marginBottom: '0px',
                  fontWeight: 'bold',
                  color: 'black',
                  lineHeight: '20px;',
                }}
              >
                Please Set Your New
              </div>
              <div
                className="form-group text-center"
                style={{
                  fontSize: '18px',
                  color: 'black',
                  fontWeight: 'bold',
                  lineHeight: '20px;',
                }}
              >
                Password And Submit
              </div>
              <div className="form-group">
                {errors && errors.message && (
                  <Alert variant="danger" style={{ marginTop: '15px' }}>
                    <strong>Error!</strong> {errors.message}
                  </Alert>
                )}
                <input
                  type={viewPass ? 'text' : 'password'}
                  className={`form-control ${
                    errors && errors.message ? 'customError' : ''
                  }`}
                  id="password"
                  placeholder="New Password"
                  name="newPassword"
                  value={newPassword}
                  onChange={this.changeHandler}
                  required
                />
                <span
                  className="password-forgotPass"
                  onClick={this.viewPassword}
                >
                  <img
                    src={require('../../assets/images/icons/ic_view_password.png')}
                    alt=""
                  />
                </span>
              </div>
              <div className="form-group">
                <input
                  type={viewConfirmPass ? 'text' : 'password'}
                  className={`form-control ${
                    errors && errors.message ? 'customError' : ''
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={this.changeHandler}
                  required
                />
                <span
                  className="confirmPass-forgotPass"
                  onClick={this.viewConfirmPassword}
                >
                  <img
                    src={require('../../assets/images/icons/ic_view_password.png')}
                    alt=""
                  />
                </span>
              </div>
              <div className="form-group">
                <button
                  className="pxp-agent-contact-modal-btn"
                  type="submit"
                  onClick={this.onSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </Link>
          {loading ? <Spinner /> : ''}
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetUserDetails: (data) => dispatch(actions.getUserDeatils(data)),
    onResetUserPassword: (data) => dispatch(actions.resetUserPassword(data)),
    onErrorSet: (msg) =>
      dispatch({ type: actionTypes.SET_ERRORS, payload: { message: msg } }),
    onHideError: () => dispatch({ type: actionTypes.CLEAR_ERRORS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(forgotPass);
