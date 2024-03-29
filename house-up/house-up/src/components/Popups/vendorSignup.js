import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import cloneDeep from 'lodash/cloneDeep';
import fileUpload from 'fuctbase64';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import { checkValidURL , checkDate } from '../../utils/regex';

import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class vendorSignup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			loading: false,
			profileImage: '',
			imagePreview: null,
			firstName: '',
			lastName: '',
			userName: '',
			emailAddress: '',
			confirmPassword: '',
			password: '',
			professionId: '',
			businessSupportingDocument: '',
			businessRegistrationDocument: '',
			keywordDescriptYourBusiness: '',
			countryId: '',
			provinceId: '',
			websiteLink: '',
			cityId: '',
			unit: '',
			businessName: '',
			qualification: '',
			zipCode: '',
			streetAddress: '',
			aboutBusiness: '',
			businessStartDate: '',
			registerVendor: false,
			countries: [],
			professionList: [],
			states: [],
			cities: [],
			imagePreviewForSupport: [],
			imagePreviewForRegister: [],
			viewPass: false,
			viewConfirmPass: false,
			currentLocation: {},
			unitOther: '',
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
		const page = props.page;
		const auth = props.auth;
		let stateChanged = false;
		let changedState = {};

		if (
			auth &&
			JSON.stringify(state.registerVendor) !==
				JSON.stringify(auth.registerVendor)
		) {
			changedState.registerVendor = auth.registerVendor;
			if (changedState.registerVendor === true) {
				props.onFalseRegisterVendor();
				props.congratulationHandler('congratulationModel');
			}
			stateChanged = true;
		}

		if (
			page &&
			page.countries &&
			JSON.stringify(state.countries) !== JSON.stringify(page.countries)
		) {
			changedState.countries = page.countries;
			stateChanged = true;
			let states = [];
			states = cloneDeep(changedState.countries[0]);
			changedState.states = states.states;
		}
		if (
			page &&
			page.professionList &&
			JSON.stringify(state.professionList) !==
				JSON.stringify(page.professionList)
		) {
			changedState.professionList = page.professionList;
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

	componentDidMount() {
		this.props.onGetCountries();
		this.props.onGetProfessionDetailAPI();
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
		} else if (e.target.name === 'businessSupportingDocument') {
			let imagePreviewForSupport = e.target.files[0];
			fileUpload(e).then((data) => {
				this.setState({
					imagePreviewForSupport: imagePreviewForSupport,
					businessSupportingDocument: data.base64,
				});
			});
		} else if (e.target.name === 'businessRegistrationDocument') {
			let imagePreviewForRegister = e.target.files[0];
			fileUpload(e).then((data) => {
				this.setState({
					imagePreviewForRegister: imagePreviewForRegister,
					businessRegistrationDocument: data.base64,
				});
			});
		} else if (e.target.name === 'countryId') {
			let index = 0;
			let states = [];
			if (e.target.value !== '') {
				index =
					this.state.countries &&
					this.state.countries.findIndex((x) => `${x.id}` === e.target.value);
				states = cloneDeep(this.state.countries[index]);
			}
			this.setState({
				[e.target.name]: e.target.value,
				states: states.states,
			});
		} else if (e.target.name === 'provinceId') {
			let ind = 0;
			let cities = [];
			let prId = '';
			if (e.target.value !== '') {
				prId = e.target.value.split(',')[0];
				ind =
					this.state.states &&
					this.state.states.findIndex((x) => `${x.id}` === prId);
				cities = cloneDeep(this.state.states[ind]);
			}
			this.setState({
				[e.target.name]: e.target.value,
				cities: cities.cities,
			});
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	};
	onSubmit = (e) => {
		e.preventDefault();
		const {
			profileImage,
			firstName,
			lastName,
			userName,
			emailAddress,
			confirmPassword,
			password,
			professionId,
			businessSupportingDocument,
			businessRegistrationDocument,
			keywordDescriptYourBusiness,
			provinceId,
			cityId,
			zipCode,
			streetAddress,
			businessName,
			websiteLink,
			qualification,
			aboutBusiness,
			businessStartDate,
			unitOther,
		} = this.state;
		const city = cityId.split(',')[1];
		const cId = cityId.split(',')[0];

		const province = provinceId.split(',')[1];
		const pId = provinceId.split(',')[0];
		if (password !== confirmPassword) {
			this.props.onErrorSet('Password not matched!');
			return;
		} else if (profileImage === '') {
			this.props.onErrorSet('Profile Picture is Missing');
			return;
		} else if (!checkValidURL(websiteLink)) {
			this.props.onErrorSet('Please Enter Valid URL!');
			return;
		}
		else if (!checkDate(businessStartDate)) {
			this.props.onErrorSet('Please Enter Valid Date Date Must Be In The Past!');
			return;
		}
		 else {
			const userData = {
				profileImage: profileImage,
				firstName: firstName,
				lastName: lastName,
				userName: userName,
				businessName: businessName,
				emailAddress: emailAddress,
				confirmPassword: confirmPassword,
				password: password,
				professionId: professionId,
				businessSupportingDocument: businessSupportingDocument,
				businessRegistrationDocument: businessRegistrationDocument,
				keywordsDescribeYourBusiness: keywordDescriptYourBusiness,
				countryId: 1,
				provinceId: pId,
				cityId: cId,
				zipCode: zipCode,
				streetAddress: streetAddress,
				websiteLink: websiteLink,
				qualification: qualification,
				aboutBusiness: aboutBusiness,
				businessStartDate: businessStartDate,
				currencyId: 1,
				userTypeId: 2,
				aboutYourSelf: '',
				phoneNumber: this.props.phNumber,
				streetAddress1: streetAddress,
				address: `${streetAddress}, ${city}, ${province},Canada`,
				stateId: pId,
				houseAppartmentSuiteNumber: unitOther,
				postalCode: zipCode,
				channel: 'web',
				country: 'Canada',
				state: province,
				city: city,
			};
			this.props.onCreateVendor(userData);
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
			emailAddress,
			confirmPassword,
			password,
			professionId,
			keywordDescriptYourBusiness,
			provinceId,
			cityId,
			zipCode,
			streetAddress,
			businessName,
			websiteLink,
			qualification,
			aboutBusiness,
			businessStartDate,
			professionList,
			states,
			cities,
			imagePreviewForRegister,
			imagePreviewForSupport,
			unitOther,
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
				size='lg'
				// dialogClassName="modal-width"
				onHide={() => this.props.closeCodelHanlder('vendorSignupModel')}
			>
				<Modal.Header
					onClick={() => this.props.closeCodelHanlder('vendorSignupModel')}
				></Modal.Header>
				<Modal.Body>
					<form className='mt-4' onSubmit={this.onSubmit}>
						<div className='register-form-content-body'>
							{errors && errors.message && (
								<Alert variant='danger'>
									<strong>Error!</strong> {errors.message}
								</Alert>
							)}

							<div className='form-group logo-modal'>
								<input
									type='file'
									accept='image/*'
									className='profile-pic'
									id='profileImage'
									name='profileImage'
									onChange={this.onChange}
									style={{ display: 'none' }}
								/>
								<label for='profileImage' className='profile-pic-professional'>
									<img
										id='imagePreviewVendor'
										src={
											imagePreview
												? imagePreview
												: require('../../assets/images/ic_profile_placeholder.png')
										}
										alt=''
										style={{ height: '98px', borderRadius: '5px' }}
									/>
								</label>
							</div>
							<div className='row' style={{ padding: '0px 15px' }}>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '12px' }}
								>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='pxp-signin-email'
											placeholder='First Name'
											name='firstName'
											value={firstName}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '7px' }}
								>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='pxp-signin-email'
											placeholder='lastName'
											name='lastName'
											value={lastName}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
							</div>

							<div className='row' style={{ padding: '0px 15px' }}>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '12px' }}
								>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='pxp-signin-email'
											placeholder='Email'
											name='emailAddress'
											value={emailAddress}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '7px' }}
								>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='pxp-signin-email'
											placeholder='Create UserName'
											name='userName'
											value={userName}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
							</div>

							<div className='row' style={{ padding: '0px 15px' }}>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '12px' }}
								>
									<div className='form-group'>
										<select
											className='custom-select drop-down'
											onChange={this.onChange}
											name='professionId'
											value={professionId}
											required
										>
											<option value=''> Please select profession </option>
											{professionList && professionList.length
												? professionList.map((profession, idx) => (
														<option key={idx} value={profession.professionId}>
															{' '}
															{profession.professionDesc}
														</option>
												  ))
												: ''}
										</select>
									</div>
								</div>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '7px' }}
								>
									<div
										className='form-group input-file'
										style={{ height: '46px', borderRadius: '4px' }}
									>
										<input
											type='file'
											className='form-control'
											id='file'
											accept='image/*'
											placeholder='Business regigration Document'
											onChange={this.onChange}
											name='businessRegistrationDocument'
											required
										/>
										<label for='file' className='btn-2'>
											{' '}
											{imagePreviewForRegister && imagePreviewForRegister.name
												? imagePreviewForRegister.name
												: 'Business registration document'}
											<div style={{ textAlign: 'right', float: 'right' }}>
												<img
													src={require('../../assets/images/icons/ic_upload.svg')}
													alt=''
												/>
											</div>
										</label>
									</div>
								</div>
							</div>

							<div className='row' style={{ padding: '0px 15px' }}>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '12px' }}
								>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='pxp-signin-pass'
											placeholder='Business Name'
											name='businessName'
											value={businessName}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '7px' }}
								>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='pxp-signin-pass'
											placeholder='Website lnk (optional)'
											name='websiteLink'
											value={websiteLink}
											onChange={this.onChange}
										/>
									</div>
								</div>
							</div>

							<div className='row' style={{ padding: '0px 15px' }}>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '12px' }}
								>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='pxp-signin-pass'
											placeholder='Qualifications'
											name='qualification'
											value={qualification}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '7px' }}
								>
									<div className='form-group'>
										<input
											type='date'
											className='form-control'
											id='calender'
											placeholder='Business Start Date'
											name='businessStartDate'
											value={businessStartDate}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
							</div>
							<div className='row' style={{ padding: '0px 15px' }}>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '12px' }}
								>
									<div
										className='form-group input-file'
										style={{
											paddingRight: '7px',
											heihgt: '46px',
											borderRadius: '4px',
										}}
									>
										<input
											type='file'
											className='form-control'
											accept='image/*'
											id='support-file'
											onChange={this.onChange}
											placeholder='Supporting Documents (Optional)'
											name='businessSupportingDocument'
										/>
										<label for='support-file' className='btn-2'>
											{' '}
											{imagePreviewForSupport && imagePreviewForSupport.name
												? imagePreviewForSupport.name
												: 'Support document (optional)'}{' '}
											<div style={{ textAlign: 'right', float: 'right' }}>
												<img
													src={require('../../assets/images/icons/ic_upload.svg')}
													alt=''
												/>
											</div>
										</label>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='pxp-signin-pass'
											placeholder='KeyWord Describe Your Business'
											name='keywordDescriptYourBusiness'
											value={keywordDescriptYourBusiness}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '7px' }}
								>
									<div className='form-group'>
										<textarea
											typeof='text'
											style={{ height: '111px' }}
											className='form-control'
											placeholder='About Business'
											name='aboutBusiness'
											value={aboutBusiness}
											onChange={this.onChange}
											required
										/>
									</div>
								</div>
							</div>
							<div className='row' style={{ padding: '0px 15px' }}>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '12px' }}
								>
									<div className='row'>
										<div className='col-md-6'>
											<div
												className='form-group'
												style={{ marginBottom: '9px' }}
											>
												<select
													className='custom-select'
													style={{ height: '42px' }}
													placeholder='City'
													name='provinceId'
													value={provinceId}
													onChange={this.onChange}
												>
													<option value=''> Province / state </option>
													{states && states.length
														? states.map((state, idx) => (
																<option
																	key={idx}
																	value={`${state.id},${state.name}`}
																>
																	{' '}
																	{state.name}
																</option>
														  ))
														: ''}
												</select>
											</div>
										</div>
										<div className='col-md-6'>
											<div
												className='form-group'
												style={{ marginBottom: '9px' }}
											>
												<select
													className='custom-select'
													style={{ height: '42px' }}
													placeholder='Prov/State'
													name='cityId'
													required
													value={cityId}
													onChange={this.onChange}
												>
													<option value=''> City </option>
													{cities && cities.length
														? cities.map((city, idx) => (
																<option
																	key={idx}
																	value={`${city.id},${city.name}`}
																>
																	{' '}
																	{city.name}
																</option>
														  ))
														: ''}
												</select>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<input
												className='form-control'
												placeholder='Unit Or Other'
												name='unitOther'
												value={unitOther}
												onChange={this.onChange}
											/>
										</div>
										<div className='col-md-6'>
											<input
												className='form-control'
												placeholder='Postal or zip'
												name='zipCode'
												value={zipCode}
												onChange={this.onChange}
												required
											/>
										</div>
									</div>
								</div>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '7px' }}
								>
									<div className='form-group'>
										<textarea
											typeof='text'
											className='form-control'
											style={{ height: '97px' }}
											placeholder='Street name & number'
											name='streetAddress'
											value={streetAddress}
											onChange={this.onChange}
										/>
									</div>
								</div>
							</div>
							<div className='row' style={{ padding: '0px 15px' }}>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '12px' }}
								>
									<div className='form-group'>
										<input
											type={viewPass ? 'text' : 'password'}
											className={`form-control ${
												errors && errors.message ? 'customError' : ''
											}`}
											id='pxp-signin-email'
											placeholder='Password'
											name='password'
											value={password}
											onChange={this.onChange}
											required
										/>
										<span
											className='pass-vendorSignup'
											onClick={this.viewPassword}
										>
											<img
												src={require('../../assets/images/icons/ic_view_password.png')}
												alt=''
											/>
										</span>
									</div>
								</div>
								<div
									className='col-md-6'
									style={{ padding: '0px', paddingRight: '7px' }}
								>
									<div className='form-group'>
										<input
											type={viewConfirmPass ? 'text' : 'password'}
											className={`form-control ${
												errors && errors.message ? 'customError' : ''
											}`}
											id='pxp-signin-email'
											placeholder='Confirm Password'
											name='confirmPassword'
											value={confirmPassword}
											onChange={this.onChange}
											required
										/>
										<span
											className='pass-vendorSignup'
											onClick={this.viewConfirmPassword}
										>
											<img
												src={require('../../assets/images/icons/ic_view_password.png')}
												alt=''
											/>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div
							className='form-group'
							style={{ paddingTop: '15px', height: '56px' }}
						>
							<button className='pxp-agent-contact-modal-btn' type='submit'>
								Sign up
							</button>
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
		onFalseRegisterVendor: () =>
			dispatch({ type: actionTypes.REGISTER_VENDOR_FAIL }),
		onGetCountries: () => dispatch(actions.GetCountries()),
		onGetProfessionDetailAPI: () => dispatch(actions.GetProfessionDetailAPI()),
		onCreateVendor: (userData) => dispatch(actions.createVendor(userData)),
		onErrorSet: (msg) =>
			dispatch({ type: actionTypes.SET_ERRORS, payload: { message: msg } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(vendorSignup);
