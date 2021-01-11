import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ContactUsPopUp from '../../components/Popups/others/contactUsPopup';
import Spinner from '../../components/common/Spinner';
import EditProfileRenderer from './components/editProfileRenderer';

class singleVendor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			singleVendorData: {},
			id: null,
			contactModalState: false,
			singleVendorsPropertiesData: {},
			commentText: '',
			user: {},
			hideContact: true,
			showPropertyPackage: false,
		};
	}

	static getDerivedStateFromProps(props, state) {
		const {vendor,auth, page } = props;

		let stateChanged = false;
		let changedState = {};

		if (
			vendor &&
			JSON.stringify(state.singleVendorData) !==
				JSON.stringify(vendor.singleVendorData)
		) {
			changedState.singleVendorData = vendor.singleVendorData;
			stateChanged = true;
		}
		if (
			vendor &&
			JSON.stringify(state.singleVendorData) !==
				JSON.stringify(vendor.singleVendorData)
		) {
			changedState.singleVendorData = vendor.singleVendorData;
			stateChanged = true;
			if (
				changedState.singleVendorData &&
				changedState.singleVendorData.vendorComments &&
				changedState.singleVendorData.vendorComments.length
			) {
				changedState.comments = changedState.singleVendorData.vendorComments;
			}
		}

		if (
			vendor &&
			JSON.stringify(state.singleVendorsPropertiesData) !==
				JSON.stringify(vendor.singleVendorsPropertiesData)
		) {
			changedState.singleVendorsPropertiesData =
				vendor.singleVendorsPropertiesData;
			stateChanged = true;
		}
		if (auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)) {
			changedState.user = auth.user;
			stateChanged = true;
		}
		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
		}

		if (stateChanged) {
			return changedState;
		}
		return null;
	}

	componentDidMount() {
		const uId = this.props.match.params.id;
		this.setState({
			id: uId,
		});

		let userData = {
			userId: uId,
		};
		this.props.onGetSingleVendorsData(userData);

		const data = {
			offset: '0',
			lat: '43.787083',
			userId: uId,
			channel: 'web',
			lng: '-79.497369',
			limit: '10',
			showPropertyPackage:
				Number(this.state.user.userId) !== Number(uId) ? false : true,
		};
		this.props.onGetSingleVendorsPropertiesData(data);
	}

	workPopupHanlder = () => {
		this.setState({
			workModalState: !this.state.workModalState,
		});
	};

	closeCodelHanlder = () => {
		this.setState({
			workModalState: false,
		});
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	contactHandler = () => {
		this.setState({ hideContact: !this.state.hideContact });
	};

	modelHanlder = (model, id) => {
		this.setState({
			[model]: !this.state[model],
			vendorId: id,
		});
	};

	closeCodelHanlder = (model) => {
		this.setState({
			[model]: false,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { id, commentText, userId, user } = this.state;

		const data = {
			postId: 0,
			category: 'Vendor',
			storyImageId: 0,
			propertyId: 0,
			commentText: commentText,
			userId: user.userId,
			vendorId: Number(id),
			phoneNo: user.msisdn,
			channel: 'web',
		};
		const indexValue = '';
		const userFullName = `${user.firstName} ${user.lastName}`;
		const userName = user.userName;
		const profilePictureUrl = user.profilePictureUrl;
		const date = moment(Date()).format('YYYY-MM-DD hh:mm:ss');
		if (
			user.userStatusDesc === 'Inactive' ||
			user.userStatusDesc === 'Rejected' ||
			user.userStatusDesc === 'In Review'
		) {
			this.props.modelHanlder(
				'alertPopup',
				`Your Account is been ${
					user.userStatusDesc === 'Inactive'
						? `${user.userStatusDesc} for 7 days`
						: `${user.userStatusDesc}`
				} due to ${user.rejectionReason}`
			);
		} else {
			this.setState({
				commentText: '',
			});
			this.props.onCommentAdded(
				data,
				indexValue,
				userFullName,
				userName,
				profilePictureUrl,
				date
			);
		}
	};


	render() {
		const {
			loading,
			singleVendorData,
			singleVendorsPropertiesData,
			commentText,
			hideContact,
			user,
		} = this.state;

		let pageContent = "";
		if(loading){
			pageContent = <Spinner />;
		}
		else {
			pageContent = (<React.Fragment>
				<div className='pxp-content'>
					<div className='pxp-agents mt-100'>
						<div className='container'>
							<div className='row'>
								<div className='col-sm-12 col-lg-8'>
									<h1 className='pxp-page-header'>
										{singleVendorData && singleVendorData.firstName}{' '}
										{singleVendorData && singleVendorData.lastName}{' '}
									</h1>
									<div className='clearfix' />
									{singleVendorData && singleVendorData.userTypeId === 2 ? (
										<div>
											<h5 style={{ fontSize: '18px', padding: '10px 0px' }}>
												{singleVendorData && singleVendorData.businessName}
											</h5>
											<h5
												style={{
													fontSize: '18px',
													padding: '0px 0px 15px',
													color: '#000',
												}}
											>
												{singleVendorData && singleVendorData.address}
											</h5>
										</div>
									) : (
										<div className='row'>
											<div className='col-md-6'>
												<p>Phone number</p>
											</div>
											<div className='col-md-6'>
												{hideContact ? (
													<Link onClick={this.contactHandler}>
														click to show
													</Link>
												) : (
													<p>{singleVendorData && singleVendorData.msisdn}</p>
												)}
											</div>
											<div className='col-md-6'>
												<p>Email address</p>
											</div>
											<div className='col-md-6'>
												<p>
													{singleVendorData && singleVendorData.emailAddress}
												</p>
											</div>
											{singleVendorData &&
											singleVendorData.userStatusDesc === 'Inactive' ? (
												<div className='col-md-12'>
													<p className='text-danger'>
														Your Account is been Inactive for 7 days due to{' '}
														{singleVendorData.rejectionReason}.
													</p>
												</div>
											) : (
												''
											)}
										</div>
									)}
									{user.userId !== singleVendorData.userId ? (
										<div className=''>
											<button
												to='#pxp-work-with'
												className='pxp-agent-contact-btn'
												data-toggle='modal'
												data-target='#pxp-work-with'
												onClick={
													user.userStatusDesc === 'Inactive' ||
													user.userStatusDesc === 'Rejected' ||
													user.userStatusDesc === 'In Review'
														? () =>
																this.props.modelHanlder(
																	'alertPopup',
																	`Your Account is been ${
																		user.userStatusDesc === 'Inactive'
																			? `${user.userStatusDesc} for 7 days`
																			: `${user.userStatusDesc}`
																	} due to ${user.rejectionReason}`
																)
														: user && user.profilePictureUrl
														? () =>
																this.modelHanlder(
																	'contactModalState',
																	singleVendorData.userId
																)
														: () => this.props.modelHanlder('phoneSignin')
												}
											>
												CONTACT US{' '}
											</button>
											{this.state.contactModalState ? (
												<ContactUsPopUp
													show={this.state.contactModalState}
													closeCodelHanlder={this.closeCodelHanlder}
													vendorId={this.state.vendorId}
												/>
											) : null}
										</div>
									) : (
										''
									)}
								</div>

								<div className='col-sm-12 offset-lg-1 col-lg-3'>
									<EditProfileRenderer 
										user={user} 
										singleVendorData={singleVendorData} 
										modelHanlder={this.props.modelHanlder} 
									/>
									<div
										className={
											singleVendorData && singleVendorData.userTypeId === 1
												? 'pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0 user-Profile'
												: 'pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0'
										}
										style={{
											backgroundImage: `url(${
												singleVendorData && singleVendorData.profilePictureUrl
													? singleVendorData.profilePictureUrl
													: 'assets/images/ic_profile_placeholder.png'
											})`,
											backgroundPosition: '50% 0%',
										}}
									/>
								</div>
							</div>
							{singleVendorData && singleVendorData.userTypeId === 2 ? (
								<div className='row sm-t-4'>
									<div className='col-sm-12 col-lg-8'>
										<div className='pxp-agent-section'>
											<h3>
												About {singleVendorData && singleVendorData.firstName}{' '}
												{singleVendorData && singleVendorData.lastName}{' '}
											</h3>
											<div className='mt-3 mt-md-4'>
												<p>
													{singleVendorData && singleVendorData.aboutBusiness}
												</p>
											</div>
										</div>
									</div>

									<div className='col-sm-12 col-lg-3 offset-lg-1'>
										<div className='pxp-agent-section user-full-details row'>
											<div className='col-6 quality'>
												<p>Specialities</p>
											</div>
											<div className='col-6 detail-info'>
												<p>
													{singleVendorData && singleVendorData.professionDesc}
												</p>
											</div>
											<div className='col-6 quality'>
												<p>Busniess start</p>
											</div>
											<div className='col-6 detail-info'>
												<p>
													{singleVendorData &&
														singleVendorData.businessStartDate}
												</p>
											</div>
											<div className='col-6 quality'>
												<p>Phone number</p>
											</div>
											<div className='col-6 detail-info'>
												{hideContact ? (
													<Link
														onClick={(e) => {
															e.preventDefault();
															this.contactHandler();
														}}
													>
														click to show
													</Link>
												) : (
													<p>{singleVendorData && singleVendorData.msisdn}</p>
												)}
											</div>
											<div className='col-6 quality'>
												<p>Account status</p>
											</div>
											<div className='col-6 detail-info status-red'>
												<p>
													{singleVendorData && singleVendorData.userStatusDesc}
												</p>
											</div>
											{singleVendorData &&
											singleVendorData.packageSubscribed ? (
												<>
													<div className='col-md-6'>
														<p>Package</p>
													</div>
													<div className='col-md-6'>
														<p>
															{singleVendorData &&
																singleVendorData.packageSubscribed &&
																singleVendorData.packageSubscribed
																	.packageDetail &&
																singleVendorData.packageSubscribed.packageDetail
																	.packageName}
														</p>
													</div>
												</>
											) : (
												''
											)}
										</div>
									</div>
								</div>
							) : (
								''
							)}
							{singleVendorsPropertiesData &&
							singleVendorsPropertiesData.length ? (
								<h2 className='pxp-section-h2 mt-100'>
									Listings by {singleVendorData && singleVendorData.firstName}{' '}
									{singleVendorData && singleVendorData.lastName}{' '}
								</h2>
							) : (
								''
							)}
							<div className='row mt-4 mt-md-5'>
								{singleVendorsPropertiesData &&
								singleVendorsPropertiesData.length
									? singleVendorsPropertiesData.map(
											(data, idx) =>
												data &&
												data.category === 'Property' &&
												data.object.propertyStatusDesc === 'Approved' && (
													<>
														<div
															key={idx}
															className='col-sm-12 col-md-6 col-lg-4'
														>
															<Link
																to={`/single-prop-${
																	data && data.object && data.object.propertId
																}`}
																className='pxp-prop-card-1 rounded-lg mb-4'
															>
																<div
																	className='pxp-prop-card-1-fig pxp-cover'
																	style={{
																		backgroundImage: `url(${
																			data &&
																			data.object.imageList &&
																			data &&
																			data.object.imageList.length
																				? data.object.imageList[0] &&
																				  data.object.imageList[0].imageURL
																				: ''
																		})`,
																	}}
																/>
																<div className='pxp-prop-card-1-gradient pxp-animate' />
																<div className='pxp-prop-card-1-details'>
																	<div className='pxp-prop-card-1-details-title'>
																		{data && data.object && data.object.adTitle}
																	</div>
																	<div className='pxp-prop-card-1-details-price'>
																		{' '}
																		{data &&
																			data.object &&
																			data.object.currency &&
																			data.object.currency.symbol}{' '}
																		{data &&
																			data.object &&
																			data.object.price &&
																			data.object.price.toLocaleString()}
																	</div>
																	<div className='pxp-prop-card-1-details-features text-uppercase'>
																		{data &&
																			data.object &&
																			data.object.noOfBedrooms}{' '}
																		BD <span>|</span>{' '}
																		{data &&
																			data.object &&
																			data.object.noOfBathroomsValue}{' '}
																		BA <span>|</span>{' '}
																		{data &&
																			data.object &&
																			data.object.finishedSqftArea}{' '}
																		SF
																	</div>
																</div>
																<div className='pxp-prop-card-1-details-cta text-uppercase'>
																	View Details
																</div>
															</Link>
														</div>
													</>
												)
									  )
									: ''}
							</div>
							{/* <ul className='pagination pxp-paginantion mt-3 mt-md-4'>
								<li className='page-item active'>
									<Link className='page-link' to='#'>
										1
									</Link>
								</li>
								<li className='page-item'>
									<Link className='page-link' to='#'>
										2
									</Link>
								</li>
								<li className='page-item'>
									<Link className='page-link' to='#'>
										3
									</Link>
								</li>
								<li className='page-item'>
									<Link className='page-link' to='#'>
										Next <span className='fa fa-angle-right' />
									</Link>
								</li>
							</ul> */}
							<div className='row mt-100'>
								<div className='col-12 col-lg-6'>
									<div className='pxp-agent-block'>
										<div className='pxp-agent-comments'>
											{singleVendorData &&
											singleVendorData.vendorComments &&
											singleVendorData.vendorComments.length
												? singleVendorData.vendorComments.map((data, index) => (
														<div key={index} className='media mt-2 mt-md-3'>
															<img
																src={data && data.profilePictureUrl}
																className='mr-3'
																alt='...'
															/>
															<div className='media-body'>
																<h5>{data && data.userFullName}</h5>
																<div className='pxp-agent-comments-date'>
																	{data && data.createDateTime}
																</div>
																<p>{data && data.commentText}</p>
															</div>
														</div>
												  ))
												: ''}
											{user && user.profilePictureUrl ? (
												<form
													action='/single-vendor'
													className='pxp-agent-comments-form mt-3 mt-md-4'
													onSubmit={this.onSubmit}
												>
													<div className='row'>
														<div className='col-sm-12 col-md-6'></div>
													</div>
													<div className='form-group comment-send-btn'>
														<input
															className='form-control'
															placeholder='Write your review here...'
															name='commentText'
															value={commentText}
															onChange={this.onChange}
														/>
														<span
															className='send-btn-single-property'
															onClick={this.onSubmit}
														>
															<img
																src={require('../../assets/images/ic_sent.svg')}
																alt=''
															/>
														</span>
													</div>
												</form>
											) : (
												''
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
		}

		return pageContent;
	}
}

const mapStateToProps = (state) => {
	return {
		vendor: state.vendor,
		auth: state.auth,
		page: state.page,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCommentAdded: (
			data,
			index,
			userFullName,
			userName,
			profilePictureUrl,
			date
		) =>
			dispatch(
				actions.AddCommentsUserProp(
					data,
					index,
					userFullName,
					userName,
					profilePictureUrl,
					date
				)
			),
		onGetSingleVendorsData: (userData) =>
			dispatch(actions.getSingleVendorData(userData)),
		onGetSingleVendorsPropertiesData: (data) =>
			dispatch(actions.getSingleVendorsPropertyData(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(singleVendor);
