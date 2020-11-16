import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
import * as actionTypes from '../../store/actions/actionTypes';

import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';
import cloneDeep from 'lodash/cloneDeep';

class phoneSignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			loading: false,
			msisdn: '',
			password: '',
			viewPass: false,
			showPopUp: false,
			currentLocation: {},
		};
	}

	static getDerivedStateFromProps(props, state) {
		const errors = props.errors;
		const page = props.page;
		let stateChanged = false;
		let changedState = {};

		if (
			page &&
			JSON.stringify(state.showPopUp) !== JSON.stringify(page.showPopUp)
		) {
			changedState.showPopUp = page.showPopUp;
			if (changedState.showPopUp === true) {
				props.onHidePopUp();
				props.closeCodelHanlder('phoneSignin');
			}
			stateChanged = true;
		}

		if (
			page &&
			page.currentLocation &&
			JSON.stringify(state.currentLocation) !==
				JSON.stringify(page.currentLocation)
		) {
			changedState.currentLocation = page.currentLocation;
			stateChanged = true;
			let currentLocation = [];
			currentLocation = cloneDeep(changedState.currentLocation);
			changedState.currentLocation = currentLocation;
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
		return null;
	}

	onChange = (e) => {
		if (e.target.name === 'msisdn') {
			if (e.target.value >= 0) {
				this.setState({ [e.target.name]: e.target.value });
			}
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	viewPassword = () => {
		this.setState({ viewPass: !this.state.viewPass });
	};

	onSubmit = (e) => {
		e.preventDefault();
		let msisdn = '+' + 1 + this.state.msisdn;
		const userData = {
			msisdn: msisdn,
			emailAddress: '',
			password: this.state.password,
			channel: 'HouseUp',
			loginBy: 'msisdn',
		};
		this.props.onLogin(
			userData,
			this.state.currentLocation,
			this.props.history
		);
	};

	render() {
		const { errors, loading, viewPass, msisdn, password } = this.state;
		return (
			<Modal
				show={this.props.show}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				dialogClassName='modal-width'
				onHide={() => this.props.closeCodelHanlder('phoneSignin')}
			>
				<Modal.Body style={{ paddingTop: '0px' }}>
					<div>
						<div className='logo-modal'></div>
						<div className='form-group'>
							<Link
								to='#'
								style={{ float: 'right', marginBottom: '3px' }}
								onClick={() => this.props.emailSigninHandler('emailSignin')}
							>
								Login with email
							</Link>
						</div>
						<form onSubmit={this.onSubmit}>
							{errors && errors.message && (
								<Alert variant='danger' style={{ marginTop: '15px' }}>
									<strong>Error!</strong> {errors.message}
								</Alert>
							)}
							<div>
								<div className='form-group'>
									<input
										type='tel'
										style={{ paddingLeft: '58px' }}
										className='phone-number'
										id='pxp-signin-email'
										placeholder='416 123-4567'
										onChange={this.onChange}
										name='msisdn'
										minLength='9'
										maxLength='10'
										value={msisdn}
										required
									/>
									<span className='country-image-login-page'>
										<img
											src='assets/images/053-canada.svg'
											alt=''
											style={{
												marginLeft: '-23px',
												marginBottom: '192px',
												height: '25px',
											}}
										/>
									</span>
									<span className='country-code-login-page'> +1</span>
								</div>
							</div>
							<div className='form-group'>
								<input
									type={viewPass ? 'text' : 'password'}
									name='password'
									value={password}
									onChange={this.onChange}
									className='form-control'
									id='pxp-signin-pass'
									placeholder='Enter your password'
									minLength='6'
								/>
								<span
									className='viewPassword-login'
									onClick={this.viewPassword}
								>
									<img
										src={require('../../assets/images/icons/ic_view_password.png')}
										alt=''
									/>
								</span>
							</div>
							<div className='form-group'>
								<div className='form-group'>
									<button type='submit' className='pxp-agent-contact-modal-btn'>
										Sign In
									</button>
								</div>
								<div className='form-group ' style={{ textAlign: 'right' }}>
									<Link
										to='#'
										className='pxp-modal-link'
										onClick={() =>
											this.props.phoneNoForgotHandler('phoneNoForgotPass')
										}
									>
										Forgot password
									</Link>
								</div>
								<div className='text-center pxp-modal-small'>
									<Link
										to='#'
										className='pxp-modal-link pxp-signup-trigger'
										style={{ fontWeight: 'bold' }}
										onClick={() =>
											this.props.signupSelectionHandler('signupSelectionModel')
										}
									>
										Create an account
									</Link>
								</div>
								{/* <div className="text-center pxp-modal-small"> 
                      <Link to="#" 
                      className="pxp-modal-link pxp-signup-trigger" style={{fontWeight:"bold"}}
                      onClick={() => this.props.subscriptionPlanHandler('subscriptionPlan') }
                      >Upgrade Acoount</Link>
                  </div> */}
							</div>
						</form>
					</div>
					{loading ? <Spinner /> : ''}
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
		onLogin: (email, currentLocation, history) =>
			dispatch(actions.loginUser(email, currentLocation, history)),
		onHidePopUp: () => dispatch({ type: actionTypes.HIDE_POP_UP }),
		onErrorSet: (msg) =>
			dispatch({ type: actionTypes.SET_ERRORS, payload: { message: msg } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(phoneSignIn);
