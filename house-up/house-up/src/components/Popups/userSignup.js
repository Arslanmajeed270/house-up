import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import fileUpload from 'fuctbase64';
import cloneDeep from 'lodash/cloneDeep';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
import * as actionTypes from '../../store/actions/actionTypes';

import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class userSignup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			loading: false,
			profileImage: '',
			profileImageDefault: '',
			imagePreview: null,
			firstName: '',
			lastName: '',
			userName: '',
			emailAddress: '',
			confirmPassword: '',
			password: '',
			regiserUser: false,
			viewPass: false,
			viewConfirmPass: false,
			currentLocation: {},
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
		let errors = props.errors;
		let page = props.page;
		const auth = props.auth;
		let stateChanged = false;
		let changedState = {};
		if (
			auth &&
			JSON.stringify(state.regiserUser) !== JSON.stringify(auth.regiserUser)
		) {
			changedState.regiserUser = auth.regiserUser;
			if (changedState.regiserUser === true) {
				props.onFalseRegisterUser();
				props.congratulationHandler('congratulationModel');
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
		}
		if (
			auth &&
			auth.user &&
			JSON.stringify(state.user) !== JSON.stringify(auth.user)
		) {
			changedState.user = auth.user;
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

	componentDidMount(){
		const userData = cloneDeep(this.props.userData)
		
		this.setState({
			profileImage: userData ? userData.profilePictureUrl : this.state.profileImage,
			firstName: userData ? userData.firstName : this.state.firstName ,
			lastName: userData ? userData.lastName : this.state.lastName,
			userName: userData ? userData.userName : this.state.userName,
			email: userData ? userData.emailAddress : this.state.email,
		});
	}



	onChange = (e) => {
		if (e.target.name === 'profileImage') {
			let imagePreview = URL.createObjectURL(e.target.files[0]);
			fileUpload(e).then((data) => {
				this.setState({
					imagePreview: imagePreview,
					profileImage: data.base64,
				});
			});
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	updateProfile = (e) => {
		e.preventDefault();
		const {
			firstName,
			lastName,
			profileImage,
			emailAddress,
			profileImageDefault,
			password,
			user,
			confirmPassword,
		} = this.state;
		if (password !== confirmPassword) {
			this.props.onErrorSet('Password not matched!');
			return;
		}
		if (profileImage === '') {
			this.props.onErrorSet('Profile Picture is Missing');
			return;
		}
		else {
			const userData = {
				userId: user && user.userId, 
				firstName: firstName, 
				lastName: lastName, 
				phoneNumber: user && user.msisdn, 
				address: "", 
				currencyId: 1, 
				aboutYourSelf: "", 
				professionId: null ,  
				businessName: "", 
				websiteLink: "", 
				qualification: "", 
				businessStartDate: "", 
				keywordsDescribeYourBusiness: "", 
				houseAppartmentSuiteNumber: "",  
				countryId: null, 
				provinceId: null, 
				stateId: null, 
				cityId: null, 
				city: "", 
				state: "", 
				country: "", 
				countyId: null,
				streetAddress: "", 
				streetAddress1: "", 
				postalCode: "", 
				zipCode: "", 
				businessRegistrationDocument: "", 
				businessSupportingDocument: "", 
				profileImage: profileImage === profileImageDefault ? "" : profileImage, 
				userTypeId: 1 
			};
			this.props.onUpdateUser(userData , this.props.history);
		}
	};

	onSubmit = (e) => {
		e.preventDefault();
		const {
			profileImage,
			password,
			confirmPassword,
		} = this.state;
		if (password !== confirmPassword) {
			this.props.onErrorSet('Password not matched!');
			return;
		}
		if (profileImage === '') {
			this.props.onErrorSet('Profile Picture is Missing');
			return;
		}
		else {
			const userData = {
				profileImage: this.state.profileImage,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				userName: this.state.userName,
				emailAddress: this.state.email,
				confirmPassword: this.state.confirmPassword,
				password: this.state.password,
				currencyId: 1,
				userTypeId: 1,
				aboutYourSelf: '',
				phoneNumber: this.props.phNumber,
				address: '',
				country: this.state.currentLocation.country,
				state: this.state.currentLocation.province,
				city: this.state.currentLocation.city,
				channel: 'web',
			};
			this.props.onCreateUser(userData);
		}
	};
	render() {
		const {
			viewPass,
			viewConfirmPass,
			errors,
			loading,
			imagePreview,
			firstName,
			lastName,
			userName,
			email,
			password,
			confirmPassword,
		} = this.state;
		let pageContent = '';

		if (loading) {
			pageContent = <Spinner />;
		} else {
			pageContent = '';
		}
		return (
			<Modal
				show={this.props.show}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				dialogClassName='modal-width'
				onHide={() => this.props.closeCodelHanlder('userSignupModel')}
			>
				<Modal.Header
					onClick={() => this.props.closeCodelHanlder('userSignupModel')}
				></Modal.Header>

				<Modal.Body>
					<form className='mt-2' onSubmit={this.onSubmit}>
						<div className='userSignup-content-t'>
							{errors && errors.message && (
								<Alert variant='danger'>
									<strong>Error!</strong> {errors.message}
								</Alert>
							)}
							<div
								className='form-group'
								style={{ textAlign: '-webkit-center' }}
							>
								<input
									type='file'
									accept='image/*'
									className='profile-pic'
									id='profileImage'
									name='profileImage'
									onChange={this.onChange}
									style={{ display: 'none' }}
								/>
								<label for='profileImage' className='profile-pic-user'>
									<img
										id='imagePreview'
										src={
											
											imagePreview
												? imagePreview
												: this.props.userData ? this.state.profileImage : require('../../assets/images/ic_profile_placeholder.png')
										}
										alt=''
										style={{ height: '98px', borderRadius: '50px' }}
									/>
								</label>
							</div>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									id={firstName}
									placeholder='First Name'
									name='firstName'
									value={firstName}
									onChange={this.onChange}
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									id={lastName}
									placeholder='Last Name'
									name='lastName'
									value={lastName}
									onChange={this.onChange}
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									id={userName}
									placeholder='Create UserName'
									name='userName'
									value={userName}
									onChange={this.onChange}
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type='text'
									className='form-control'
									id={email}
									placeholder='Enter Your Email'
									name='email'
									value={email}
									onChange={this.onChange}
									required
								/>
							</div>
							<div className='form-group'>
								<input
									type={viewPass ? 'text' : 'password'}
									className={`form-control ${
										errors && errors.message ? 'customError' : ''
									}`}
									id={password}
									placeholder='Enter your password'
									name='password'
									value={password}
									onChange={this.onChange}
									required
								/>
								<span className='pass-userSignup' onClick={this.viewPassword}>
									<img
										src={require('../../assets/images/icons/ic_view_password.png')}
										alt=''
									/>
								</span>
							</div>
							<div className='form-group'>
								<input
									type={viewConfirmPass ? 'text' : 'password'}
									className={`form-control ${
										errors && errors.message ? 'customError' : ''
									}`}
									id={confirmPassword}
									placeholder='Confirm password'
									name='confirmPassword'
									value={confirmPassword}
									onChange={this.onChange}
									required
								/>
								<span
									className='confirmPass-userSignup'
									onClick={this.viewConfirmPassword}
								>
									<img
										src={require('../../assets/images/icons/ic_view_password.png')}
										alt=''
									/>
								</span>
							</div>
						</div>
						<div className='form-group'>
							{
								this.props.userData ? 
									<button className='pxp-agent-contact-modal-btn' onClick={this.updateProfile}>
										Update Profile
									</button>
								:
									<button className='pxp-agent-contact-modal-btn' type='submit'>
										Submit
									</button>
							}
							
						</div>
						{pageContent}
					</form>
				</Modal.Body>
			</Modal>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		page: state.page,
		errors: state.errors,
		auth: state.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFalseRegisterUser: () =>
			dispatch({ type: actionTypes.REGISTER_USER_FAIL }),
		onCreateUser: (userData) => dispatch(actions.createUser(userData)),
		onErrorSet: (msg) =>
			dispatch({ type: actionTypes.SET_ERRORS, payload: { message: msg } }),
		onUpdateUser: (userData , history) => dispatch(actions.updateUser(userData , history)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(userSignup);
