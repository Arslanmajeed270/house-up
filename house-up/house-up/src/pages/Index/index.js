import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';
import ContactPopup from '../../components/Popups/contactUsPopup';
import StoryPrevivew from '../../components/Popups/storyPrevivew';

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
			imageIndex:''
		};
	}

	componentDidMount() {
		console.log('indexPage componenet did mount');
		const userId =
			this.state.user && this.state.user.userId ? this.state.user.userId : null;
		const country = this.props.match.params.country;
		const state = this.props.match.params.state;
		const city = this.props.match.params.city;

		console.log('checking country: ', country);
		console.log('checking state: ', state);
		console.log('checking city: ', city);
		this.setState({
			countryName: country,
			stateName: state,
			cityName: city,
			userId: userId,
		});
		console.log('country from params', country);
		console.log('state from params', state);
		console.log('city from params', city);

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

		console.log('checking data pakage', data);
		const userData = {
			country: country,
			city: city,
			province: state,
		};
		this.props.onGetIndexPageData(data);
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
		console.log('value of type', type);
		console.log('value of index', index);
		console.log('checking index: ', like);
		console.log('value of postId', postId);
		console.log('value of propertId', propertId);
		const userId =
			this.state.user && this.state.user.userId ? this.state.user.userId : null;
		let data = {
			vendorId: vendorId,
			postId: postId,
			category: type,
			propertyId: propertId,
			userId: userId,
			action: `${like ? 'Unlike' : 'Like'}`,
		};
		console.log(data, index);
		this.props.onLikedPostOrProperty(data, index);
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	AddComment = (id, typeCategory) => {
		console.log('called');
		let {
			userId,
			commentText,
			propertyId,
			postId,
			storyImageId,
			vendorId,
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
		};
		console.log('data pakage of comment api', data);
		this.props.onCommentAdded(data);
	};

	followUnfollwProfessionals = (id, index, follow, val) => (e) => {
		e.preventDefault();
		console.log('checking index: ', index);
		console.log(follow);
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
		console.log('Type of category', type);
		console.log('checking followUnfollwProfessionals data: ', data);
		this.props.onFollowUnfollowProfessionals(data, index, type);
	};

	contactUsPopHandler = () => {
		this.setState({
			contactUsPop: !this.state.contactUsPop,
		});
		console.log('clicked');
	};

	storyHandler = () => {
		this.setState({ storyToggle: !this.state.storyToggle });
	};

	render() {
		let {
			errors,
			loading,
			indexPageData,
			user,
			commentText,
			propertyId,
			storyToggle,
			category,
			imageIndex
		} = this.state;

		console.log('checking this.state: ', this.state);

		let pageContent = '';

		if (loading) {
			pageContent = <Spinner />;
		} else {
			pageContent = '';
		}

		const items = [];

		if (
			indexPageData &&
			indexPageData.userStories &&
			indexPageData.userStories.length
		) 
		{
			for (let i = 0; i < indexPageData.userStories.length; i++) {
			imageIndex = i
				let item = (
					<Link onClick={this.storyHandler}>
						<div style={{ width: '80px' }}>
							<div
								className='pxp-prop-card-dashboard'
								style={{
									backgroundImage: `url(${
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
					<Link to='/properties'>
						<div className='neighbourhoods_slider'>
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
					</Link>
				);
				locationItems.push(locationItem);
			}
		}
		return (
			<React.Fragment>
				<ContactPopup
					show={this.state.contactUsPop}
					contactUsPopHandler={this.contactUsPopHandler}
				/>
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
														<div className='pxp-props-carousel-right-container mt-4 mt-md-5'>
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
																			indexPageData && indexPageData.userStories[imageIndex]
																		}
																	/>
																) : ''
																}
															</div>
														</div>
													</div>
												</div>
											</div>
											<div key={index} className='sort-by'>
												<div
													className='sort-heading mt-4'
													style={{ marginBottom: '10px' }}
												>
													<div className='row'>
														<div className='col-lg-6 col-md-6 col-sm-6 col-6'>
															<div className='sort-by-heading hhhsize'></div>
														</div>
													</div>
												</div>
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
																	(data && data.category === 'Property') ? (
																		<div className='dashboard-newsfeed'>
																			<div className='dashboard-newsfeed-content'>
																				<ul className='news-feed-user-ul'>
																					<li>
																						<span
																							className={
																								data &&
																								data.object &&
																								data.object.user &&
																								data.object.user.userTypeId ===
																									2
																									? 'news-feed-user-img'
																									: 'news-feed-user-imgs'
																							}
																							style={{
																								backgroundImage: `url(${
																									data &&
																									data.object &&
																									data.object.user &&
																									data.object.user
																										.profilePictureUrl
																										? data.object.user
																												.profilePictureUrl
																										: 'assets/images/dashboard/ic_profile_placeholder.png'
																								} )`,
																							}}
																						/>
																						<span
																							style={{
																								fontSize: '20px',
																								padding: '0px 7px 0px 10px',
																							}}
																							className='news-feed-user-name'
																						>
																							{data &&
																								data.object &&
																								data.object.user &&
																								data.object.user.firstName}{' '}
																							{data &&
																								data.object &&
																								data.object.user &&
																								data.object.user.lastName}{' '}
																							.
																							<Link
																								to=''
																								onClick={this.followUnfollwProfessionals(
																									data &&
																										data.object &&
																										data.object.user &&
																										data.object.user.userId &&
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
																							<h2 style={{ fontSize: '20px' }}>
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
																										data.object.postImages[0] &&
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
																							{data && data.category === 'Post'
																								? data &&
																								  data.object &&
																								  data.object.postText
																								: data.object &&
																								  data.object.description}
																						</div>
																						<button
																							onClick={this.contactUsPopHandler}
																							className='dashboard-newsfeed-contact nodecor'
																							data-toggle='modal'
																							data-target=''
																						>
																							Contact us
																						</button>
																						<div className='row custom-row-styles'>
																							<div className='col-12 post-navbar'>
																								<span
																									style={{ cursor: 'pointer' }}
																									onClick={() =>
																										this.addLike(
																											data && data.category,
																											index,
																											data.object &&
																												data.object
																													.isPostLikedByLoggedInUser,
																											data &&
																												data.object &&
																												data.object.postId &&
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
																									}&${data && data.category}&${index}`}
																									style={{ color: '#706666' }}
																								>
																									<img
																										src={require('../../assets/images/ic_timeline_comment.png')}
																										alt=''
																									/>
																								</Link>
																								<Link>
																									<img
																										src={require('../../assets/images/ic_timeline_share.svg')}
																										alt=''
																									/>{' '}
																								</Link>
																								{data &&
																								data.object &&
																								data.object.postLikes &&
																								data.object.postLikes.length &&
																								data.object.postLikes.length >=
																									1 ? (
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
																											data.object.postComments[
																												data.object.postComments
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
																										}&${data && data.category}&${index}`}
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
																											src={
																												user &&
																												user.profilePictureUrl
																													? user.profilePictureUrl
																													: 'assets/images/dashboard/ic_profile_placeholder.png'
																											}
																										/>
																									</span>
																									<div className='comment-input-pointer'>
																										<input
																											className='form-control'
																											placeholder='Write your review here...'
																											style={{ height: '35px' }}
																											name='commentText'
																											value={commentText}
																											onChange={this.onChange}
																										/>

																										<span
																											className=''
																											onClick={() =>
																												this.AddComment(
																													data &&
																														data.object &&
																														data.object.postId,
																													data && data.category
																												)
																											}
																										>
																											<img
																												src={require('../../assets/images/ic_sent.svg')}
																												alt=''
																											/>
																										</span>
																									</div>
																								</div>
																							</div>
																						</div>
																					</>
																				) : data.category &&
																				  data.category === 'Property' ? (
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
																										data.object.imageList[0] &&
																										data.object.imageList[0]
																											.imageURL
																											? data.object.imageList[0]
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
																									style={{ textAlign: 'right' }}
																								>
																									<span>
																										<b>
																											{' '}
																											{data.object &&
																											data.object.price
																												? `${
																														data.object
																															.currency &&
																														data.object.currency
																															.symbol
																															? data.object
																																	.currency
																																	.symbol
																															: '$'
																												  }${
																														data.object.price
																												  }.00`
																												: '0'}
																										</b>
																									</span>
																								</div>
																							</div>
																						</div>
																						<div className='dashboard-newsfeed-details'>
																							{data && data.category === 'Post'
																								? data &&
																								  data.object &&
																								  data.object.postText
																								: data.object &&
																								  data.object.description}
																						</div>
																						<button
																							onClick={this.contactUsPopHandler}
																							className='dashboard-newsfeed-contact nodecor'
																							data-toggle='modal'
																							data-target=''
																							onClick={
																								this.PropertyConatctPopupHanlder
																							}
																						>
																							Contact us
																						</button>
																						<div className='row custom-row-styles'>
																							<div className='col-12 post-navbar'>
																								<span
																									style={{ cursor: 'pointer' }}
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
																												data.object.propertId &&
																												data.object.propertId,
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
																									}&${data && data.category}&${index}`}
																									style={{ color: '#706666' }}
																								>
																									<img
																										src={require('../../assets/images/ic_timeline_comment.png')}
																										alt=''
																									/>
																								</Link>
																								<Link>
																									<img
																										src={require('../../assets/images/ic_timeline_share.svg')}
																										alt=''
																									/>{' '}
																								</Link>
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
																										{data.object.propertyLikes[
																											data.object.propertyLikes
																												.length - 1
																										].userName +
																											(data.object.propertyLikes
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
																								data.object.propertyComments &&
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
																								data.object.propertyComments &&
																								data.object.propertyComments
																									.length >= 1 ? (
																									<Link
																										className='viewCommentLight'
																										to={`/comments-${
																											data &&
																											data.object &&
																											data.object.propertId &&
																											data.object.propertId
																										}&${data && data.category}&${index}`}
																									>
																										View all{' '}
																										{
																											data.object
																												.propertyComments.length
																										}{' '}
																										comments
																									</Link>
																								) : (
																									''
																								)}

																								<div className='comment-send-btn'>
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
																											src={
																												user &&
																												user.profilePictureUrl
																													? user.profilePictureUrl
																													: 'assets/images/dashboard/ic_profile_placeholder.png'
																											}
																										/>
																									</span>
																									<div className='comment-input-pointer'>
																										<input
																											className='form-control'
																											placeholder='Write your review here...'
																											style={{ height: '35px' }}
																											name='commentText'
																											value={`${propertyId}${category}${commentText}`}
																											onChange={this.onChange}
																										/>

																										<span
																											className=''
																											onClick={() =>
																												this.AddComment(
																													data &&
																														data.object &&
																														data.object
																															.propertId,
																													data && data.category
																												)
																											}
																										>
																											<img
																												src={require('../../assets/images/ic_sent.svg')}
																												alt=''
																											/>
																										</span>
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
																					{console.log('i am into vendor')}
																					<div className='row'>
																						<div className='col-md-9 col-sm-9 col-8'>
																							<div className='vendor-detail'>
																								<span>
																									{data && data.object.firstName
																										? data.object.firstName
																										: ''}{' '}
																									{data && data.object.lastName
																										? data.object.lastName
																										: ''}{' '}
																									.
																									<Link
																										to=''
																										onClick={this.followUnfollwProfessionals(
																											data &&
																												data.object &&
																												data.object.userId,
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
																									</Link>
																								</span>
																								<p>
																									<span>
																										{data &&
																										data.object &&
																										data.object
																											.professionDesc &&
																										data.object
																											.professionDesc !== 'null'
																											? data.object
																													.professionDesc
																											: ' '}
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
																				<Link
																					to='#'
																					className='dashboard-newsfeed-contact nodecor'
																					data-toggle='modal'
																					data-target=''
																					onClick={this.postConatctPopupHanlder}
																				>
																					{this.state.postConatctPopup ? (
																						<ContactPopup
																							postConatctPopup={
																								this.state.postConatctPopup
																							}
																						/>
																					) : null}
																					Contact us
																				</Link>
																				<div className='row custom-row-styles'>
																					<div className='col-12 post-navbar'>
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
																							}&${data && data.category}&${index}`}
																							style={{ color: '#706666' }}
																						>
																							<img
																								src={require('../../assets/images/ic_timeline_comment.png')}
																								alt=''
																							/>
																						</Link>
																						<Link>
																							<img
																								src={require('../../assets/images/ic_timeline_share.svg')}
																								alt=''
																							/>{' '}
																						</Link>
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
																										: `and ${
																												data.object.vendorLikes
																													.length - 1
																										  } others `)}{' '}
																							</div>
																						) : (
																							''
																						)}
																						{data &&
																						data.object &&
																						data.object.vendorComments &&
																						data.object.vendorComments.length &&
																						data.object.vendorComments.length >=
																							1 ? (
																							<div className='personintroinfo'>
																								<span className='personSingleName'>
																									{' '}
																									{
																										data.object.vendorComments[
																											data.object.vendorComments
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
																						data.object.vendorComments.length >=
																							1 ? (
																							<Link
																								className='viewCommentLight'
																								to={`/comments-${
																									data &&
																									data.object &&
																									data.object.userId &&
																									data.object.userId
																								}&${data && data.category}&${index}`}
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
																							<span
																								className={
																									user && user.userTypeId === 2
																										? 'news-feed-user-img'
																										: 'news-feed-user-imgs'
																								}
																							>
																								<img
																									style={{ width: '100%' }}
																									src={
																										user &&
																										user.profilePictureUrl
																											? user.profilePictureUrl
																											: 'assets/images/dashboard/ic_profile_placeholder.png'
																									}
																								/>
																							</span>
																							<div className='comment-input-pointer'>
																								<input
																									className='form-control'
																									placeholder='Write your review here...'
																									style={{ height: '35px' }}
																									name='commentText'
																									value={commentText}
																									onChange={this.onChange}
																								/>

																								<span
																									className=''
																									onClick={() =>
																										this.AddComment(
																											data &&
																												data.object &&
																												data.object.userId,
																											data && data.category
																										)
																									}
																								>
																									<img
																										src={require('../../assets/images/ic_sent.svg')}
																										alt=''
																									/>
																								</span>
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
										{indexPageData &&
											indexPageData.vendors &&
											indexPageData.vendors.map(
												(data, index) =>
													index < 6 && (
														<div
															key={index}
															className='suggested-vendors-list '
														>
															<div className='mb-md-3'>
																<div className='row'>
																	<div className='col-md-2 col-lg-2 col-sm-2'>
																		<Link
																			to={`/single-vendor-${
																				data && data.userId
																			}`}
																		>
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
																				{data && data.firstName
																					? data.firstName
																					: ''}{' '}
																				{data && data.lastName
																					? data.lastName
																					: ''}
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
																			<Link
																				to='#'
																				onClick={this.followUnfollwProfessionals(
																					data && data.userId && data.userId,
																					index,
																					data &&
																						data.isUserFollowedByLoggedInUser,
																					'VendorsRight'
																				)}
																			>
																				{' '}
																				{data &&
																				data.isUserFollowedByLoggedInUser ===
																					true
																					? 'Unfollow'
																					: 'Follow'}{' '}
																			</Link>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													)
												// : " "
											)}
									</div>
								</div>
							</div>
						</div>
					</main>
				)}
				{pageContent}
			</React.Fragment>
		);
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
		onCommentAdded: (data) => dispatch(actions.AddComments(data)),
		onGetIndexPageData: (userId) => dispatch(actions.getIndexPageData(userId)),
		onFollowUnfollowProfessionals: (data, index, type) =>
			dispatch(actions.followProfessionals(data, index, type)),
		onLikedPostOrProperty: (data, index) =>
			dispatch(actions.AddLike(data, index)),
		onUpdateCurrentLocaiton: (data) =>
			dispatch({ type: actionTypes.SET_CURRENT_LOCATION, payload: data }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
