import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import { checkDateFuture } from '../../utils/regex';

import * as actionTypes from '../../store/actions/actionTypes';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import * as actions from '../../store/actions/pageActions';

class contacUsPopup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			user: {},
			propertyId: 0,
			postId: 0,
			vendorId: 0,
			userId: 0,
			name: '',
			phoneNumber: 0,
			email: '',
			meetingDate: '',
			subject: '',
			detail: '',
			vendorId:'',
			contactPopup:false
		};
	}

	static getDerivedStateFromProps(props, state) {
		const auth = props.auth ? props.auth : {};
		const errors = props.errors;

		let stateChanged = false;
		let changedState = {};

		if (
			auth &&
			auth.user &&
			JSON.stringify(state.user) !== JSON.stringify(auth.user)
		) {
			changedState.user = auth.user;
			stateChanged = true;
		}
		if (
			auth &&
			JSON.stringify(state.contactPopup) !==
				JSON.stringify(auth.contactPopup)
		) {
			changedState.contactPopup = auth.contactPopup;
			if (changedState.contactPopup === true) {
				props.onFalseRegisterVendor();
				props.closeCodelHanlder('contactModalState');
			}
			stateChanged = true;
		}
			if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
			changedState.errors = errors;
			stateChanged = true;
		}


		if (stateChanged) {
			return changedState;
		}

		return null;
	}

	componentDidMount() {
		const { user, email, phoneNumber, name, userId , vendorId} = this.state;
		const contactEmail = user.emailAddress ? user.emailAddress : '';
		const firstName = user.firstName ? user.firstName : '';
		const lastName = user.lastName ? user.lastName : '';
		const contactName = `${firstName} ${lastName}`;
		const contactNumber = user.msisdn ? user.msisdn : '';
		const id = user.userId ? user.userId : '';

		this.setState({
			email: contactEmail,
			name: contactName,
			phoneNumber: contactNumber,
			userId: id,
			vendorId : this.props.vendorId
		});

		console.log('checking values:', email);
		console.log('checking values:', name);
		console.log('checking values:', phoneNumber);
		console.log('checking values:', userId);
		console.log('vendor id', vendorId)
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
	e.preventDefault();
		const {
			name,
			phoneNumber,
			email,
			subject,
			detail,
			meetingDate,
			userId,
			vendorId
		} = this.state;

		if (!checkDateFuture(meetingDate)) {
			console.log('hello')
			this.props.onErrorSet('Please Enter Valid Date Date Must Be In The Future!');
			return;
		}

		const userData = {
			propertyId: 0,
			postId: 0,
			vendorId,
			userId,
			name,
			phoneNumber,
			email,
			meetingDate,
			subject,
			detail,
		};
		console.log(userData)
		this.props.onContactUs(userData);
	};

	render() {
		const {
			name,
			phoneNumber,
			email,
			subject,
			detail,
			meetingDate,
			errors
		} = this.state;
		return (
			<Modal
				show={this.props.show}
				aria-labelledby='contained-modal-title-vcenter'
				dialogClassName='modal-width'
				centered
				onHide={() =>this.props.closeCodelHanlder('contactModalState')}
			>
				<Modal.Body>
					<h5 className='modal-title'>Share your Details</h5>
					<form onSubmit={this.onSubmit} className='mt-4'>
						{errors && errors.message && (
								<Alert variant='danger'>
									<strong>Error!</strong> {errors.message}
								</Alert>
							)}
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								name='name'
								value={name}
								onChange={this.onChange}
								required
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								name='phoneNumber'
								value={phoneNumber}
								onChange={this.onChange}
								required
							/>
							<span className='country-image-contact-page'>
								<img
									src='assets/images/053-canada.svg'
									alt=''
									style={{
										// marginLeft: '-23px',
										// marginBottom: '192px',
										// height: '25px',
									}}
								/>
							</span>
						</div>
						<div className='form-group'>
							<input
								type='text'
								className='form-control'
								name='email'
								value={email}
								onChange={this.onChange}
								required
							/>
						</div>
						<div className='form-group'>
							<input
								type='text'
								placeholder='Subject'
								className='form-control'
								name='subject'
								value={subject}
								onChange={this.onChange}
								required
							/>
						</div>
						<div className='form-group'>
										<input
											type='date'
											className='form-control'
											id='calender'
											placeholder='Business Start Date'
											name='meetingDate'
											value={meetingDate}
											onChange={this.onChange}
											required
										/>
									</div>
						<div className='form-group'>
							<textarea
								className='form-control'
								placeholder='Details'
								rows={4}
								name='detail'
								value={detail}
								onChange={this.onChange}
								required
							/>
						</div>
						<div className='form-group mt-4'>
							<button type='submit' className='pxp-agent-contact-modal-btn'>
								SUBMIT
							</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => { 
	return {
		auth: state.auth,
		errors:state.errors
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onContactUs: (data) => dispatch(actions.contactUs(data)),
		onErrorSet: (msg) =>
			dispatch({ type: actionTypes.SET_ERRORS, payload: { message: msg } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(contacUsPopup);
