import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';

// importing actions
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class OptUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			loading: false,
			otp: '',
			otpAuthenticate: false,
		};
	}

	static getDerivedStateFromProps(props, state) {
		const otpAuthenticate = props.otpAuthenticate;
		let errors = props.errors;
		let page = props.page;

		let stateChanged = false;
		let changedState = {};


		if (
			(otpAuthenticate || otpAuthenticate === false) &&
			state.otpAuthenticate !== otpAuthenticate
		) {
			changedState.otpAuthenticate = otpAuthenticate;
			if (changedState.otpAuthenticate === true) {
				props.onFalseOtpAutheticate();
				props.userSignupHandler('userSignupModel');
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
		return null;
	}
	handleChange = (otp) => {
		this.setState({ otp });
		if (otp.length === 4) {
			let data = {
				msisdn: this.props.phNumber,
				channel: 'HouseUp',
				pin: otp,
			};
			this.props.onVerifyPin(data);
		}
	};

	resendPin = (num) => {
		const data = {
			msisdn: num,
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
		let phoneNumber = '';
		if (this.props.phNumber) {
			phoneNumber = this.props.phNumber;
		}
		return (
			<Modal
				show={this.props.show}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				// size="md"
				dialogClassName='modal-width'
				onHide={() => this.props.closeCodelHanlder('optUserModel')}
			>
				<Modal.Body>
					<div className='form-group'>
						{errors && errors.message && (
							<Alert variant='danger'>
								<strong>Error!</strong> {errors.message}
							</Alert>
						)}
						<div
							className='text-center'
							style={{ fontSize: '22px', fontWeight: '500', color: '#000' }}
						>
							We sent you a code to{' '}
						</div>
						<div
							className='text-center'
							style={{ fontSize: '22px', fontWeight: '500', color: '#000' }}
						>
							verify your phone number
						</div>
					</div>
					<div className='form-group'>
						<div
							class='text-center'
							style={{
								fontSize: '20px',
								marginBottom: '15px',
								color: '#8E8E93',
							}}
						>
							sent to {phoneNumber}{' '}
						</div>
						<div style={{ marginLeft: '14%', marginBottom: '15px' }}>
							<OtpInput
								value={this.state.otp}
								onChange={this.handleChange}
								numInputs={4}
								hasErrored={errors && errors.message ? true : false}
								errorStyle={{ border: '1px solid #721c24' }}
								separator={<span>&nbsp; &nbsp; &nbsp;</span>}
								inputStyle={{
									width: '50px',
									height: '50px',
									borderRadius: '8px',
									border: '1px solid black',
								}}
							/>
						</div>
					</div>
					<div
						className='text-center'
						style={{ marginBottom: '10px', color: '#8E8E93' }}
					>
						I didn't receeive a code!
						<Link to='#' onClick={() => this.resendPin(phoneNumber)}>
							Resend
						</Link>
					</div>
					{pageContent}
				</Modal.Body>
			</Modal>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		page: state.page,
		otpAuthenticate: state.auth.otpAuthenticate,
		errors: state.errors,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFalseOtpAutheticate: () =>
			dispatch({ type: actionTypes.OTP_AUTHENTICATE_FAIL }),
		onVerifyPin: (data) => dispatch(actions.verifyPin(data)),
		onGeneratePin: (data) => dispatch(actions.generatePin(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(OptUser);
