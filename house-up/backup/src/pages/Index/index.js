import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

import StoryPrevivew from '../../components/Popups/storyPrevivew';
import Contact from '../../components/Popups/contactUsPopup';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			loading: false,
			indexPageData: {},
			user: {},
			contactUsPop: false,
			countryName: '',
			stateName: '',
			cityName: '',
			commentText: '',
			userId: '',
			vendorId: '',
			postId: '',
			storyImageId: '',
			propertyId: '',
			category: '',
			storyToggle: false,
			imageIndex: '',
			activeCommentId: '',
			contactModalState: false,
		};
	}

	componentDidMount() {
		const userId =
			this.state.user && this.state.user.userId ? this.state.user.userId : null;
		const country = this.props.match.params.country;
		const state = this.props.match.params.state;
		const city = this.props.match.params.city;

		this.setState({
			countryName: country,
			stateName: state,
			cityName: city,
			userId: userId,
		});

		const data = {
			state: state,
			channel: 'web',
			lat: 43.787083,
			lng: -79.497369,
			city: city,
			limit: 10,
			offset: 0,
			loggedInuserId: userId,
			country: country,
		};

		const userData = {
			country: country,
			city: city,
			province: state,
		};
		if (!this.state.indexPageData.vendorPostPropertiesList) {
			this.props.onGetIndexPageData(data);
		}
		setTimeout(() => {
			this.props.onUpdateCurrentLocaiton(userData);
		}, 3000);
	}

	static getDerivedStateFromProps(props, state) {
		const auth = props.auth;
		const errors = props.errors;
		const page = props.page;

		let stateChanged = false;
		let changedState = {};

		if (
			page &&
			JSON.stringify(state.indexPageData) !== JSON.stringify(page.indexPageData)
		) {
			changedState.indexPageData = page.indexPageData;
			stateChanged = true;
		}

		if (auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)) {
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
	addLike = (type, index, like, postId, propertId, vendorId) => {
		const userId =
			this.state.user && this.state.user.userId ? this.state.user.userId : null;
		const userName =
			this.state.user && this.state.user.userName
				? this.state.user.userName
				: null;
		let data = {
			vendorId: vendorId,
			postId: postId,
			category: type,
			propertyId: propertId,
			userId: userId,
			action: `${like ? 'Unlike' : 'Like'}`,
		};
		const { user } = this.state;
		if (
			user.userStatusDesc === 'Inactive' ||
			user.userStatusDesc === 'Rejected' ||
			user.userStatusDesc === 'In Review'
		) {
			this.props.modelHanlder(
				'alertPopup',
				`Your Account is been ${
					user.userStatusDesc === 'Inactive'
						? `${user.userStatusDesc} for 7 days `
						: `${user.userStatusDesc}`
				} due to ${user.rejectionReason}`
			);
		} else {
			this.props.onLikedPostOrProperty(data, index, userName);
		}
	};

	onChange = (e) => {
		if (e.target.name.indexOf('commentText') >= 0) {
			const activeCommentId = Number(e.target.name.split(',')[1]);
			this.setState({
				activeCommentId: activeCommentId,
				commentText: e.target.value,
			});
		} else {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}
	};
	AddComment = (id, typeCategory, index) => {
		const userName =
			this.state.user && this.state.user.userName
				? this.state.user.userName
				: null;
		let {
			userId,
			commentText,
			propertyId,
			postId,
			storyImageId,
			vendorId,
			user,
		} = this.state;
		if (typeCategory === 'Post') {
			postId = id;
		} else if (typeCategory === 'Property') {
			propertyId = id;
		} else if (typeCategory === 'Vendor') {
			vendorId = id;
		}

		const data = {
			postId: Number(postId),
			category: typeCategory,
			storyImageId: Number(storyImageId),
			propertyId: Number(propertyId),
			commentText: commentText,
			userId: userId,
			vendorId: vendorId,
			phoneNo: user.msisdn,
			channel: 'web',
		};
		const date = moment(Date()).format('YYYY-MM-DD hh:mm:ss');
		const profilePictureUrl =
			user && user.profilePictureUrl ? user.profilePictureUrl : null;
		const userFullName = `${user.firstName} ${user.lastName}`;
		this.setState({
			commentText: '',
			activeCommentId: '',
		});
		if (
			user.userStatusDesc === 'Inactive' ||
			user.userStatusDesc === 'Rejected' ||
			user.userStatusDesc === 'In Review'
		) {
			this.props.modelHanlder(
				'alertPopup',
				`Your Account is been ${
					user.userStatusDesc === 'Inactive'
						? `${user.userStatusDesc} for 7 days `
						: `${user.userStatusDesc}`
				} due to ${user.rejectionReason}`
			);
		} else {
			this.props.onCommentAdded(
				data,
				index,
				userFullName,
				userName,
				profilePictureUrl,
				date
			);
		}
	};

	followUnfollwProfessionals = (id, index, follow, val) => (e) => {
		e.preventDefault();
		const userId =
			this.state.user && this.state.user.userId ? this.state.user.userId : null;
		let data = {
			category: 'Vendor',
			userId: userId,
			action: `${follow ? 'Unfollow' : 'Follow'}`,
			followUnfollowId: `${follow ? '2' : '1'}`,
			vendorId: id,
		};
		const type = val;
		const { user } = this.state;
		if (
			user.userStatusDesc === 'Inactive' ||
			user.userStatusDesc === 'Rejected' ||
			user.userStatusDesc === 'In Review'
		) {
			this.props.modelHanlder(
				'alertPopup',
				`Your Account is been ${
					user.userStatusDesc === 'Inactive'
						? `${user.userStatusDesc} for 7 days `
						: `${user.userStatusDesc}`
				} due to ${user.rejectionReason}`
			);
		} else {
			this.props.onFollowUnfollowProfessionals(data, index, type);
		}
	};

	limitWordHandler = (str) => {
		const arrayString = str.split(' ');
		let paragraph = '';
		const limit = arrayString.length < 30 ? arrayString.length : 30;
		for (let i = 0; i < limit; i++) {
			paragraph += arrayString[i] + ' ';
		}
		if (arrayString.length >= 30) {
			paragraph += '...';
		}
		return paragraph;
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
	storyHandler = () => {
		this.setState({ storyToggle: !this.state.storyToggle });
	};

	handleDragStart = (e) => {
		e.preventDefault();
	};

	ProfessionalRenderer = (indexData) => {
		let professionalRender = [];
		if (indexData && indexData.vendors) {
			indexData.vendors.map((data, index) => {
				if (
					data &&
					data.userStatusDesc === 'Active' &&
					professionalRender.length < 6
				) {
					professionalRender.push(
						<div key={index} className='suggested-vendors-list'>
							<div className='mb-md-3'>
								<div className='row'>
									<div className='col-md-2 col-lg-2 col-sm-2'>
										<Link to={`/single-vendor-${data && data.userId}`}>
											<div className='suggested-vendor-img'>
												<img
													src={
														data && data.profilePictureUrl
															? data.profilePictureUrl
															: 'assets/images/dashboard/ic_profile_placeholder.png'
													}
													alt=''
												/>
											</div>
										</Link>
									</div>
									<div className='col-md-7 col-lg-7 col-sm-7 col-nopadd'>
										<div className='suggested-vendor-name'>
											<p>
												{data && data.firstName ? data.firstName : ''}{' '}
												{data && data.lastName ? data.lastName : ''}
											</p>
											<span>
												{data &&
												data.professionDesc &&
												data.professionDesc !== 'null'
													? data.professionDesc
													: ''}
											</span>
										</div>
									</div>
									<div className='col-md-3 col-lg-3 col-sm-3'>
										<div className='suggested-vendor-follow text-right'>
											{this.state.user.userId === data.userId ? (
												''
											) : (
												<Link
													to='#'
													onClick={this.followUnfollwProfessionals(
														data && data.userId && data.userId,
														index,
														data && data.isUserFollowedByLoggedInUser,
														'VendorsRight'
													)}
												>
													{' '}
													{data && data.isUserFollowedByLoggedInUser === true
														? 'Unfollow'
														: 'Follow'}{' '}
												</Link>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}
				return data;
			});
		}
		return professionalRender;
	};

	render() {
		let {
			errors,
			loading,
			indexPageData,
			user,
			cityName,
			countryName,
			stateName,
			commentText,
			storyToggle,
			activeCommentId,
		} = this.state;
		let pageContent = '';

		const items = [];

		if (
			indexPageData &&
			indexPageData.userStories &&
			indexPageData.userStories.length
		) {
			for (let i = 0; i < indexPageData.userStories.length; i++) {
				let item = (
					<Link to='#' onClick={this.storyHandler}>
						<div style={{ width: '80px' }}>
							<div
								className='pxp-prop-card-dashboard'
								style={{
									backgroundImage: `url(${
										indexPageData &&
										indexPageData.userStories[i] &&
										indexPageData.userStories[i].stories[0] &&
										indexPageData.userStories[i].stories[0].storyImages[0] &&
										indexPageData.userStories[i].stories[0].storyImages[0]
											.storyImageURL
									})`,
								}}
							/>
							<span className='dashboard-user-name'>
								{indexPageData.userStories[i].user.firstName}
							</span>
							<span className='dashboard-user-name withPropertyDealer'>
								{indexPageData.userStories[i].user.professionDesc}
							</span>
						</div>
					</Link>
				);
				items.push(item);
			}
		}

		const locationItems = [];
		if (
			indexPageData &&
			indexPageData.propertyCounts &&
			indexPageData.propertyCounts.length
		) {
			for (let i = 0; i < indexPageData.propertyCounts.length; i++) {
				let locationItem = (
					<div className='neighbourhoods_slider'>
						<div onDoubleClick={() => this.props.history.push('/properties')}>
							<div
								className='pxp-prop-card-explore'
								style={{
									backgroundImage: `url(${
										indexPageData.propertyCounts[i] &&
										indexPageData.propertyCounts[i].properties[0] &&
										indexPageData.propertyCounts[i].properties[0]
											.imageList[0] &&
										indexPageData.propertyCounts[i].properties[0].imageList[0]
											.imageURL
											? indexPageData.propertyCounts[i].properties[0]
													.imageList[0].imageURL
											: require('../../assets/images/dashboard/ottawa.png')
									})`,
								}}
							>
								<div className='d-table w-100 '>
									<div className='d-table-cell va-bottom neighbours-height paddg'>
										<h2>
											{indexPageData.propertyCounts[i] &&
												indexPageData.propertyCounts[i].cityName}
										</h2>
										<p>
											{indexPageData.propertyCounts[i].propertyCount} Properties
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
				locationItems.push(locationItem);
			}
		}

		if (loading) {
			pageContent = <Spinner />;
		} else {
			pageContent = (
				<React.Fragment>
					{this.state.contactModalState ? (
						<Contact
							show={this.state.contactModalState}
							closeCodelHanlder={this.closeCodelHanlder}
							vendorId={this.state.vendorId}
						/>
					) : (
						''
					)}

					{!loading && (
						<main>
							<div className='container'>
								{errors && errors.message && (
									<Alert variant='danger'>
										<strong>Error!</strong> {errors.message}
									</Alert>
								)}
								<div className='row'>
									<div className='col-lg-7 col-md-12'>
										<div className='newsfeed'>
											<div className='container'>
												<div className='row'>
													<div className='col-md-12 col-lg-12'>
														<div className='container-fluid pxp-props-carousel-right mt-100 mtpx-100'>
															<div className='pxp-props-carousel-right-container mt-4'>
																<div className='owl-carousel pxp-props-carousel-right-stage-2'>
																	<AliceCarousel
																		mouseTracking
																		disableButtonsControls={true}
																		items={items}
																		responsive={responsive}
																	/>
																	{storyToggle ? (
																		<StoryPrevivew
																			show={this.state.storyToggle}
																			close={this.storyHandler}
																			storys={
																				indexPageData &&
																				indexPageData.userStories
																			}
																		/>
																	) : (
																		''
																	)}
																</div>
															</div>
														</div>
													</div>
												</div>
												<div key={index} className='sort-by'>
													{indexPageData &&
													indexPageData.vendorPostPropertiesList &&
													indexPageData.vendorPostPropertiesList.length
														? indexPageData.vendorPostPropertiesList.map(
																(data, index) => (
																	<React.Fragment key={index}>
																		{index === 0 && (
																			<div className='explore-our-neighbours'>
																				<div className='row'>
																					<div className='col-md-12 col-lg-12 col-sm-12'>
																						<div className='container-fluid pxp-props-carousel-right'>
																							<div className='pxp-props-carousel-right-container'>
																								<h2 className='explore-our-neighbours-heading'>
																									Explore Our Neighbourhoods
																								</h2>
																								<div className='pxp-props-carousel-right-stage-3'>
																									<div>
																										<AliceCarousel
																											mouseTracking
																											disableButtonsControls={
																												true
																											}
																											items={locationItems}
																											responsive={
																												locationResponcive
																											}
																										/>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		)}

																		{(data.category &&
																			data.category === 'Post') ||
																		(data &&
																			data.category === 'Property' &&
																			data.object.propertyStatusDesc ===
																				'Approved') ? (
																			<div className='dashboard-newsfeed'>
																				<div className='dashboard-newsfeed-content'>
																					<ul className='news-feed-user-ul'>
																						<li>
																							<Link
																								to={`/single-vendor-${
																									data &&
																									data.object &&
																									data.object.user &&
																									data.object.user.userId
																								}`}
																							>
																								<span
																									className={
																										data &&
																										data.object &&
																										data.object.user &&
																										data.object.user
																											.userTypeId === 2
																											? 'news-feed-user-img'
																											: 'news-feed-user-imgs'
																									}
																								>
																									<img
																										style={{ height: '60px' }}
																										src={
																											data &&
																											data.object &&
																											data.object.user &&
																											data.object.user
																												.profilePictureUrl
																												? data.object.user
																														.profilePictureUrl
																												: 'assets/images/dashboard/ic_profile_placeholder.png'
																										}
																										alt=''
																									/>
																								</span>
																							</Link>
																							<span
																								style={{
																									fontSize: '20px',
																									padding: '0px 7px 0px 10px',
																								}}
																								className='news-feed-user-name'
																							>
																								<Link
																									style={{ color: 'black' }}
																									to={`/single-vendor-${
																										data &&
																										data.object &&
																										data.object.user &&
																										data.object.user.userId
																									}`}
																								>
																									<span>
																										{data &&
																											data.object &&
																											data.object.user &&
																											data.object.user
																												.firstName}{' '}
																										{data &&
																											data.object &&
																											data.object.user &&
																											data.object.user
																												.lastName}{' '}
																									</span>
																								</Link>
																								.
																								{user.userId !==
																								data.object.user.userId ? (
																									<Link
																										to=''
																										onClick={this.followUnfollwProfessionals(
																											data &&
																												data.object &&
																												data.object.user &&
																												data.object.user
																													.userId &&
																												data.object.user.userId,
																											index,
																											data.object &&
																												data.object.user &&
																												data.object.user
																													.isUserFollowedByLoggedInUser,
																											'PostandProperty'
																										)}
																									>
																										{' '}
																										{data.object &&
																										data.object.user &&
																										data.object.user
																											.isUserFollowedByLoggedInUser ===
																											true
																											? 'Unfollow'
																											: 'Follow'}{' '}
																									</Link>
																								) : (
																									''
																								)}
																								<h2
																									style={{ fontSize: '20px' }}
																								>
																									{data &&
																									data.object &&
																									data.object.city
																										? data.object.city
																										: ' '}{' '}
																									.{' '}
																									{data &&
																										data.object &&
																										data.object
																											.createDateAndTime}{' '}
																								</h2>
																							</span>
																						</li>
																					</ul>
																					{data.category &&
																					data.category === 'Post' ? (
																						<>
																							{data.object &&
																							data.object.postImages[0] &&
																							data.object.postImages[0]
																								.imageURL ? (
																								<div
																									className='dashboard-newsfeed-img'
																									style={{
																										backgroundImage: `url( ${
																											data.object &&
																											data.object
																												.postImages[0] &&
																											data.object.postImages[0]
																												.imageURL
																												? data.object
																														.postImages[0]
																														.imageURL
																												: ''
																										}  )`,
																									}}
																								></div>
																							) : (
																								''
																							)}

																							<div className='dashboard-newsfeed-details'>
																								{data &&
																								data.category === 'Post'
																									? data &&
																									  data.object &&
																									  this.limitWordHandler(
																											data.object.postText
																									  )
																									: data.object &&
																									  this.limitWordHandler(
																											data.object.description
																									  )}
																							</div>

																							<div className='row custom-row-styles'>
																								<div className='col-12 post-navbar'>
																									<div className='navWrap'>
																										<span
																											style={{
																												cursor: 'pointer',
																											}}
																											onClick={() =>
																												this.addLike(
																													data && data.category,
																													index,
																													data.object &&
																														data.object
																															.isPostLikedByLoggedInUser,
																													data &&
																														data.object &&
																														data.object
																															.postId &&
																														data.object.postId,
																													0,
																													0
																												)
																											}
																										>
																											<i
																												className={
																													data.object &&
																													data.object
																														.isPostLikedByLoggedInUser ===
																														true
																														? 'fas fa-heart post-navbar-items'
																														: 'far fa-heart post-navbar-items'
																												}
																											/>
																										</span>
																										<Link
																											className='post-navbar-items'
																											to={`/comments-${
																												data &&
																												data.object &&
																												data.object.postId &&
																												data.object.postId
																											}&${
																												data && data.category
																											}&${index}&${cityName}&${stateName}&${countryName}`}
																											style={{
																												color: '#706666',
																											}}
																										>
																											<img
																												src={require('../../assets/images/ic_timeline_comment.png')}
																												alt=''
																											/>
																										</Link>
																										<Link to='#'>
																											<img
																												src={require('../../assets/images/ic_timeline_share.svg')}
																												alt=''
																											/>{' '}
																										</Link>
																										{data.object.user.userId ===
																										user.userId ? (
																											''
																										) : (
																											<button
																												className='dashboard-newsfeed-contact nodecor'
																												data-toggle='modal'
																												data-target=''
																												onClick={
																													user.userStatusDesc ===
																														'Inactive' ||
																													user.userStatusDesc ===
																														'Rejected' ||
																													user.userStatusDesc ===
																														'In Review'
																														? () =>
																																this.props.modelHanlder(
																																	'alertPopup',
																																	`Your Account is been ${
																																		user.userStatusDesc ===
																																		'Inactive'
																																			? `${user.userStatusDesc} for 7 days `
																																			: `${user.userStatusDesc}`
																																	} due to ${
																																		user.rejectionReason
																																	}`
																																)
																														: () =>
																																this.modelHanlder(
																																	'contactModalState',
																																	data &&
																																		data.object &&
																																		data.object
																																			.user &&
																																		data.object
																																			.user
																																			.userId
																																)
																												}
																											>
																												Contact us
																											</button>
																										)}
																									</div>
																									{data &&
																									data.object &&
																									data.object.postLikes &&
																									data.object.postLikes
																										.length &&
																									data.object.postLikes
																										.length >= 1 ? (
																										<div className='likedByText'>
																											{' '}
																											Liked by{' '}
																											{data.object.postLikes[
																												data.object.postLikes
																													.length - 1
																											].userName +
																												(data.object.postLikes
																													.length <= 1
																													? ''
																													: `and ${
																															data.object
																																.postLikes
																																.length - 1
																													  } others `)}{' '}
																										</div>
																									) : (
																										''
																									)}
																									{data &&
																									data.object &&
																									data.object.postComments &&
																									data.object.postComments
																										.length &&
																									data.object.postComments
																										.length >= 1 ? (
																										<div className='personintroinfo'>
																											<span className='personSingleName'>
																												{' '}
																												{
																													data.object
																														.postComments[
																														data.object
																															.postComments
																															.length - 1
																													].userName
																												}{' '}
																												&nbsp;
																											</span>
																											{
																												data.object
																													.postComments[
																													data.object
																														.postComments
																														.length - 1
																												].commentText
																											}{' '}
																										</div>
																									) : (
																										''
																									)}
																									{data &&
																									data.object &&
																									data.object.postComments &&
																									data.object.postComments
																										.length >= 1 ? (
																										<Link
																											className='viewCommentLight'
																											to={`/comments-${
																												data &&
																												data.object &&
																												data.object.postId &&
																												data.object.postId
																											}&${
																												data && data.category
																											}&${index}&${cityName}&${stateName}&${countryName}`}
																										>
																											View all{' '}
																											{
																												data.object.postComments
																													.length
																											}{' '}
																											comments
																										</Link>
																									) : (
																										''
																									)}

																									<div className='comment-send-btn'>
																										<Link
																											style={{ width: '36px' }}
																											to={`/single-vendor-${
																												user && user.userId
																											}`}
																										>
																											<span
																												className={
																													user &&
																													user.userTypeId === 2
																														? 'news-feed-user-img'
																														: 'news-feed-user-imgs'
																												}
																											>
																												<img
																													style={{
																														width: '100%',
																													}}
																													alt=''
																													src={
																														user &&
																														user.profilePictureUrl
																															? user.profilePictureUrl
																															: 'assets/images/dashboard/ic_profile_placeholder.png'
																													}
																												/>
																											</span>
																										</Link>
																										<div className='comment-input-pointer'>
																											<input
																												className='form-control'
																												placeholder='Write your review here...'
																												style={{
																													height: '35px',
																												}}
																												name={`commentText,${index}`}
																												value={
																													activeCommentId ===
																													index
																														? commentText
																														: ''
																												}
																												onChange={this.onChange}
																											/>
																											<button
																												className=''
																												onClick={() =>
																													this.AddComment(
																														data &&
																															data.object &&
																															data.object
																																.postId,
																														data &&
																															data.category,
																														index
																													)
																												}
																											>
																												<img
																													src={require('../../assets/images/ic_sent.svg')}
																													alt=''
																												/>
																											</button>
																										</div>
																									</div>
																								</div>
																							</div>
																						</>
																					) : data.category &&
																					  data.category === 'Property' &&
																					  data.object.propertyStatusDesc ===
																							'Approved' ? (
																						<>
																							<Link
																								to={`/single-prop-${
																									data &&
																									data.object &&
																									data.object.propertId
																								}`}
																							>
																								<div
																									className='pxp-prop-card-featured'
																									style={{
																										backgroundImage: `url(${
																											data &&
																											data.object &&
																											data.object
																												.imageList[0] &&
																											data.object.imageList[0]
																												.imageURL
																												? data.object
																														.imageList[0]
																														.imageURL
																												: ''
																										} )`,
																									}}
																								>
																									<div className='d-table w-100 '>
																										<div className='d-table-cell va-bottom featured-height'></div>
																									</div>
																								</div>
																							</Link>
																							<div className='for-rent'>
																								{data.object &&
																								data.object.adTitle
																									? data.object.adTitle
																									: ''}
																							</div>
																							<div className='row'>
																								<div className='col-md-6 col-sm-6 col-6'>
																									<div className='dashboard-newsfeed-details'>
																										{' '}
																										Property Type:{' '}
																										{data.object &&
																											data.object.propertyType}
																									</div>
																								</div>
																								<div className='col-md-6 col-sm-6 col-6'>
																									<div
																										className='feature-head'
																										style={{
																											textAlign: 'right',
																											paddingRight: '20px',
																											fontSize: '20px',
																											fontFamily: 'Condensed',
																										}}
																									>
																										<span>
																											<b>
																												{' '}
																												{data.object &&
																												data.object.price
																													? `${
																															data.object
																																.currency &&
																															data.object
																																.currency.symbol
																																? data.object
																																		.currency
																																		.symbol
																																: '$'
																													  }${data.object.price.toLocaleString()}.00`
																													: '0'}
																											</b>
																										</span>
																									</div>
																								</div>
																							</div>
																							<div className='dashboard-newsfeed-details'>
																								{data &&
																								data.category === 'Post'
																									? data &&
																									  data.object &&
																									  this.limitWordHandler(
																											data.object.postText
																									  )
																									: data.object &&
																									  this.limitWordHandler(
																											data.object.description
																									  )}
																							</div>

																							<div
																								className='row custom-row-styles'
																								style={{ bottom: '0px' }}
																							>
																								<div
																									className='col-12 post-navbar'
																									style={{ marginTop: '0px' }}
																								>
																									<div className='navWrap'>
																										<span
																											style={{
																												cursor: 'pointer',
																											}}
																											onClick={() =>
																												this.addLike(
																													data && data.category,
																													index,
																													data.object &&
																														data.object
																															.isPropertyLikedByLoggedInUser,
																													0,
																													data &&
																														data.object &&
																														data.object
																															.propertId &&
																														data.object
																															.propertId,
																													0
																												)
																											}
																										>
																											<i
																												className={
																													data.object &&
																													data.object
																														.isPropertyLikedByLoggedInUser ===
																														true
																														? 'fas fa-heart post-navbar-items'
																														: 'far fa-heart post-navbar-items'
																												}
																											/>
																										</span>
																										<Link
																											className='post-navbar-items'
																											to={`/comments-${
																												data &&
																												data.object &&
																												data.object.propertId &&
																												data.object.propertId
																											}&${
																												data && data.category
																											}&${index}&${cityName}&${stateName}&${countryName}`}
																											style={{
																												color: '#706666',
																											}}
																										>
																											<img
																												src={require('../../assets/images/ic_timeline_comment.png')}
																												alt=''
																											/>
																										</Link>
																										<Link to='#'>
																											<img
																												src={require('../../assets/images/ic_timeline_share.svg')}
																												alt=''
																											/>{' '}
																										</Link>
																										{data.object.user.userId ===
																										user.userId ? (
																											''
																										) : (
																											<button
																												className='dashboard-newsfeed-contact nodecor'
																												data-toggle='modal'
																												data-target=''
																												onClick={
																													user.userStatusDesc ===
																														'Inactive' ||
																													user.userStatusDesc ===
																														'Rejected' ||
																													user.userStatusDesc ===
																														'In Review'
																														? () =>
																																this.props.modelHanlder(
																																	'alertPopup',
																																	`Your Account is been ${
																																		user.userStatusDesc ===
																																		'Inactive'
																																			? `${user.userStatusDesc} for 7 days `
																																			: `${user.userStatusDesc}`
																																	} due to ${
																																		user.rejectionReason
																																	}`
																																)
																														: () =>
																																this.modelHanlder(
																																	'contactModalState',
																																	data &&
																																		data.object &&
																																		data.object
																																			.user &&
																																		data.object
																																			.user
																																			.userId
																																)
																												}
																											>
																												Contact us
																											</button>
																										)}
																									</div>
																									{data &&
																									data.object &&
																									data.object.propertyLikes &&
																									data.object.propertyLikes
																										.length &&
																									data.object.propertyLikes
																										.length >= 1 ? (
																										<div className='likedByText'>
																											{' '}
																											Liked by{' '}
																											{data.object
																												.propertyLikes[
																												data.object
																													.propertyLikes
																													.length - 1
																											].userName +
																												(data.object
																													.propertyLikes
																													.length <= 1
																													? ''
																													: `and ${
																															data.object
																																.propertyLikes
																																.length - 1
																													  } others`)}{' '}
																										</div>
																									) : (
																										''
																									)}
																									{data &&
																									data.object &&
																									data.object
																										.propertyComments &&
																									data.object.propertyComments
																										.length &&
																									data.object.propertyComments
																										.length >= 1 ? (
																										<div className='personintroinfo'>
																											<span className='personSingleName'>
																												{' '}
																												{
																													data.object
																														.propertyComments[
																														data.object
																															.propertyComments
																															.length - 1
																													].userName
																												}{' '}
																												&nbsp;
																											</span>
																											{
																												data.object
																													.propertyComments[
																													data.object
																														.propertyComments
																														.length - 1
																												].commentText
																											}{' '}
																										</div>
																									) : (
																										''
																									)}
																									{data &&
																									data.object &&
																									data.object
																										.propertyComments &&
																									data.object.propertyComments
																										.length >= 1 ? (
																										<Link
																											className='viewCommentLight'
																											to={`/comments-${
																												data &&
																												data.object &&
																												data.object.propertId &&
																												data.object.propertId
																											}&${
																												data && data.category
																											}&${index}&${cityName}&${stateName}&${countryName}`}
																										>
																											View all{' '}
																											{
																												data.object
																													.propertyComments
																													.length
																											}{' '}
																											comments
																										</Link>
																									) : (
																										''
																									)}

																									<div className='comment-send-btn'>
																										<Link
																											style={{ width: '36px' }}
																											to={`/single-vendor-${
																												user && user.userId
																											}`}
																										>
																											<span
																												className={
																													user &&
																													user.userTypeId === 2
																														? 'news-feed-user-img'
																														: 'news-feed-user-imgs'
																												}
																											>
																												<img
																													style={{
																														width: '100%',
																													}}
																													alt=''
																													src={
																														user &&
																														user.profilePictureUrl
																															? user.profilePictureUrl
																															: 'assets/images/dashboard/ic_profile_placeholder.png'
																													}
																												/>
																											</span>
																										</Link>
																										<div className='comment-input-pointer'>
																											<input
																												className='form-control'
																												placeholder='Write your review here...'
																												style={{
																													height: '35px',
																												}}
																												name={`commentText,${index}`}
																												value={
																													activeCommentId ===
																													index
																														? commentText
																														: ''
																												}
																												onChange={this.onChange}
																											/>
																											<button
																												className=''
																												onClick={() =>
																													this.AddComment(
																														data &&
																															data.object &&
																															data.object
																																.propertId,
																														data &&
																															data.category,
																														index
																													)
																												}
																											>
																												<img
																													src={require('../../assets/images/ic_sent.svg')}
																													alt=''
																												/>
																											</button>
																										</div>
																									</div>
																								</div>
																							</div>
																						</>
																					) : (
																						''
																					)}
																				</div>
																			</div>
																		) : data.category &&
																		  data.category === 'Vendor' ? (
																			<>
																				<div className='vendor-box'>
																					<Link
																						key={index}
																						to={`/single-vendor-${
																							data &&
																							data.object.userId &&
																							data.object.userId
																						}`}
																					>
																						<div className='row'>
																							<div className='col-md-9 col-sm-9 col-8'>
																								<div className='vendor-detail'>
																									<span
																										className='news-feed-user-name'
																										style={{
																											fontSize: '20px',
																											padding:
																												'0px 7px 0px 0px',
																											display: 'block',
																											marginBottom: '5px',
																										}}
																									>
																										{data &&
																										data.object.firstName
																											? data.object.firstName
																											: ''}{' '}
																										{data &&
																										data.object.lastName
																											? data.object.lastName
																											: ''}
																										{data &&
																										data.object.userId !==
																											user.userId ? (
																											<>
																												.
																												<div
																													to=''
																													onClick={this.followUnfollwProfessionals(
																														data &&
																															data.object &&
																															data.object
																																.userId,
																														index,
																														data.object &&
																															data.object &&
																															data.object
																																.isUserFollowedByLoggedInUser,
																														'Vendors'
																													)}
																												>
																													{' '}
																													{data.object &&
																													data.object
																														.isUserFollowedByLoggedInUser ===
																														true
																														? 'Unfollow'
																														: 'Follow'}{' '}
																												</div>
																											</>
																										) : (
																											''
																										)}
																									</span>

																									<p>
																										<span>
																											{data &&
																											data.object &&
																											data.object
																												.professionDesc &&
																											data.object
																												.professionDesc !==
																												'null'
																												? data.object
																														.professionDesc
																												: ' '}{' '}
																											.
																											{data &&
																											data.object &&
																											data.object
																												.createDateAndTime
																												? data.object
																														.createDateAndTime
																												: ''}
																										</span>
																									</p>
																									<span className='address-span'>
																										{data && data.object.address
																											? data.object.address
																											: ''}
																									</span>
																								</div>
																							</div>
																							<div className='col-md-3 col-sm-3 col-4'>
																								<div
																									className='vendor-img'
																									style={{
																										backgroundImage: `url(${
																											data &&
																											data.object
																												.profilePictureUrl
																												? data.object
																														.profilePictureUrl
																												: 'assets/images/ic_profile_placeholder.png'
																										})`,
																									}}
																								/>
																							</div>
																						</div>
																					</Link>

																					<div
																						className='custom-row-styles'
																						style={{
																							bottom: '0px',
																							padding: '0px',
																						}}
																					>
																						<div className='col-12 vendor-navbar'>
																							<div className='navWrap'>
																								<span
																									style={{ cursor: 'pointer' }}
																									onClick={() =>
																										this.addLike(
																											data && data.category,
																											index,
																											data.object &&
																												data.object
																													.isUserLikedByLoggedInUser,
																											0,
																											0,
																											data &&
																												data.object &&
																												data.object.userId &&
																												data.object.userId
																										)
																									}
																								>
																									<i
																										className={
																											data.object &&
																											data.object
																												.isUserLikedByLoggedInUser ===
																												true
																												? 'fas fa-heart post-navbar-items'
																												: 'far fa-heart post-navbar-items'
																										}
																									/>
																								</span>
																								<Link
																									className='post-navbar-items'
																									to={`/comments-${
																										data &&
																										data.object &&
																										data.object.userId &&
																										data.object.userId
																									}&${
																										data && data.category
																									}&${index}&${cityName}&${stateName}&${countryName}`}
																									style={{ color: '#706666' }}
																								>
																									<img
																										src={require('../../assets/images/ic_timeline_comment.png')}
																										alt=''
																									/>
																								</Link>
																								<Link to='#'>
																									<img
																										src={require('../../assets/images/ic_timeline_share.svg')}
																										alt=''
																									/>{' '}
																								</Link>
																								{user.userId ===
																								data.object.userId ? (
																									''
																								) : (
																									<button
																										className='dashboard-newsfeed-contact nodecor'
																										data-toggle='modal'
																										data-target=''
																										onClick={
																											user.userStatusDesc ===
																												'Inactive' ||
																											user.userStatusDesc ===
																												'Rejected' ||
																											user.userStatusDesc ===
																												'In Review'
																												? () =>
																														this.props.modelHanlder(
																															'alertPopup',
																															`Your Account is been ${
																																user.userStatusDesc ===
																																'Inactive'
																																	? `${user.userStatusDesc} for 7 days `
																																	: `${user.userStatusDesc}`
																															} due to ${
																																user.rejectionReason
																															}`
																														)
																												: () =>
																														this.modelHanlder(
																															'contactModalState',
																															data &&
																																data.object &&
																																data.object
																																	.userId
																														)
																										}
																									>
																										Contact us
																									</button>
																								)}
																							</div>

																							{data &&
																							data.object &&
																							data.object.vendorLikes &&
																							data.object.vendorLikes.length &&
																							data.object.vendorLikes.length >=
																								1 ? (
																								<div className='likedByText'>
																									{' '}
																									Liked by{' '}
																									{data.object.vendorLikes[
																										data.object.vendorLikes
																											.length - 1
																									].userName +
																										(data.object.vendorLikes
																											.length <= 1
																											? ''
																											: ` and ${
																													data.object
																														.vendorLikes
																														.length - 1
																											  } others `)}{' '}
																								</div>
																							) : (
																								''
																							)}
																							{data &&
																							data.object &&
																							data.object.vendorComments &&
																							data.object.vendorComments
																								.length &&
																							data.object.vendorComments
																								.length >= 1 ? (
																								<div className='personintroinfo'>
																									<span className='personSingleName'>
																										{' '}
																										{
																											data.object
																												.vendorComments[
																												data.object
																													.vendorComments
																													.length - 1
																											].userName
																										}{' '}
																										&nbsp;
																									</span>
																									{
																										data.object.vendorComments[
																											data.object.vendorComments
																												.length - 1
																										].commentText
																									}{' '}
																								</div>
																							) : (
																								''
																							)}
																							{data &&
																							data.object &&
																							data.object.vendorComments &&
																							data.object.vendorComments
																								.length >= 1 ? (
																								<Link
																									className='viewCommentLight'
																									to={`/comments-${
																										data &&
																										data.object &&
																										data.object.userId &&
																										data.object.userId
																									}&${
																										data && data.category
																									}&${index}&${cityName}&${stateName}&${countryName}`}
																								>
																									View all{' '}
																									{
																										data.object.vendorComments
																											.length
																									}{' '}
																									comments
																								</Link>
																							) : (
																								''
																							)}
																							<div className='comment-send-btn'>
																								<Link
																									style={{ width: '36px' }}
																									to={`/single-vendor-${
																										user && user.userId
																									}`}
																								>
																									<span
																										className={
																											user &&
																											user.userTypeId === 2
																												? 'news-feed-user-img'
																												: 'news-feed-user-imgs'
																										}
																									>
																										<img
																											style={{ width: '100%' }}
																											alt=''
																											src={
																												user &&
																												user.profilePictureUrl
																													? user.profilePictureUrl
																													: 'assets/images/dashboard/ic_profile_placeholder.png'
																											}
																										/>
																									</span>
																								</Link>
																								<div className='comment-input-pointer'>
																									<input
																										className='form-control'
																										placeholder='Write your review here...'
																										style={{ height: '35px' }}
																										name={`commentText,${index}`}
																										value={
																											activeCommentId === index
																												? commentText
																												: ''
																										}
																										onChange={this.onChange}
																									/>

																									<button
																										className=''
																										onClick={() =>
																											this.AddComment(
																												data &&
																													data.object &&
																													data.object.userId,
																												data && data.category,
																												index
																											)
																										}
																									>
																										<img
																											src={require('../../assets/images/ic_sent.svg')}
																											alt=''
																										/>
																									</button>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</>
																		) : (
																			''
																		)}
																	</React.Fragment>
																)
														  )
														: null}
												</div>
											</div>
										</div>
									</div>
									<div className='col-lg-1' />
									<div className='col-lg-4 sidebar-fixed-index-property'>
										<div className='side-bar-user mt-100'>
											<div className='main-user'>
												<div className='row'>
													{indexPageData && indexPageData.vendors ? (
														<div className='col-md-3 col-lg-3 col-sm-3'>
															<div
																className='min-user-img'
																style={{
																	backgroundImage: `url(${
																		user && user.profilePictureUrl
																			? user.profilePictureUrl
																			: 'assets/images/ic_profile_placeholder.png'
																	})`,
																}}
															/>
														</div>
													) : null}
													<div className='col-md-9 col-lg-9 col-sm-9  col-nopadd'>
														<div className='main-user-content'>
															<p>
																{user && user.firstName ? user.firstName : ''}{' '}
																{user && user.lastName ? user.lastName : ''}
															</p>
															<span>
																{user && user.userName
																	? `@ ${user.userName}`
																	: ''}
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className='suggested-vendors mt-4 mt-md-4 mb-md-3'>
												{indexPageData && indexPageData.vendors ? (
													<div className='row'>
														<div className='col-md-8 col-lg-8 col-sm-8'>
															<div className='suggested-p'>
																<p>Suggested Professionals For You</p>
															</div>
														</div>
														<div className='col-md-4 col-lg-4 col-sm-4'>
															<div className='suggested-span text-right'>
																<Link to='/professionals'>See ALL</Link>
															</div>
														</div>
													</div>
												) : null}
											</div>
											{this.ProfessionalRenderer(indexPageData).map(
												(data) => data
											)}
										</div>
									</div>
								</div>
							</div>
						</main>
					)}
				</React.Fragment>
			);
		}

		return pageContent;
	}
}
const responsive = {
	0: { items: 2 },
	568: { items: 4 },
	1024: { items: 6.5 },
};

const locationResponcive = {
	0: { items: 1 },
	568: { items: 1 },
	1024: { items: 1.3 },
};
const mapStateToProps = (state) => {
	return {
		page: state.page,
		auth: state.auth,
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
				actions.AddComments(
					data,
					index,
					userFullName,
					userName,
					profilePictureUrl,
					date
				)
			),
		onGetIndexPageData: (userId) => dispatch(actions.getIndexPageData(userId)),
		onFollowUnfollowProfessionals: (data, index, type) =>
			dispatch(actions.followProfessionals(data, index, type)),
		onLikedPostOrProperty: (data, index, userName) =>
			dispatch(actions.AddLike(data, index, userName)),
		onUpdateCurrentLocaiton: (data) =>
			dispatch({ type: actionTypes.SET_CURRENT_LOCATION, payload: data }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
