import React, { Component } from 'react';
import moment from 'moment';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/common/Spinner';

class comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			indexPageData: {},
			user: {},
			contactEmail: '',
			userFullName: '',
			commentText: '',
			userId: '',
			postId: '',
			storyImageId: '',
			propertyId: '',
			vendorId: '',
			category: '',
			data: [],
			loading: false,
			comments: [],
			indexValue: '',
			commentData: {},
			cityName: '',
			stateName: '',
			countryName: '',
			commentedOnUserId:''
		};
	}

	static getDerivedStateFromProps(props, state) {
		const auth = props.auth ? props.auth : {};
		const errors = props.errors;
		const page = props.page;

		let stateChanged = false;
		let changedState = {};

		if (
			page &&
			JSON.stringify(state.loading) !== JSON.stringify(page.loading)
		) {
			changedState.loading = page.loading;
			stateChanged = true;
		}

		if (
			page &&
			JSON.stringify(state.indexPageData) !== JSON.stringify(page.indexPageData)
		) {
			changedState.indexPageData = page.indexPageData;
			stateChanged = true;
			if (
				changedState.indexPageData &&
				changedState.indexPageData &&
				changedState.indexPageData.vendorPostPropertiesList.length
			) {
				changedState.indexPageData.vendorPostPropertiesList.map((data) => {
					if (
						state.category === 'Property' &&
						data.category === state.category &&
						data.object &&
						data.object.propertId &&
						data.object.propertId === state.propertId
					) {
						changedState.comments = data.object.propertyComments
							? data.object.propertyComments
							: [];
					}
					if (
						state.category === 'Post' &&
						data.category === state.category &&
						data.object &&
						data.object.postId &&
						data.object.postId === state.postId
					) {
						changedState.comments = data.object.postComments
							? data.object.postComments
							: [];
					}
					return data;
				});
			}
		}

		if (auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)) {
			changedState.user = auth.user;
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
		const { user, countryName, stateName, cityName ,commentedOnUserId } = this.state;
		const contactEmail = user.emailAddress ? user.emailAddress : '';
		const firstName = user.firstName ? user.firstName : '';
		const lastName = user.lastName ? user.lastName : '';
		const userFullName = `${firstName} ${lastName}`;
		const userId = user.userId ? user.userId : '';

		this.setState({
			contactEmail,
			userFullName,
			userId,
		});

		const id = this.props.match.params.id;
		const category = this.props.match.params.category;
		const indexValue = this.props.match.params.indexValue;
		const city = this.props.match.params.city;
		const state = this.props.match.params.state;
		const country = this.props.match.params.country;

		this.setState({
			id: id,
			category: category,
			indexValue: indexValue,
		});

		if (category === 'Post') {
			this.setState({ postId: id });
		} else if (category === 'Property') {
			this.setState({ propertyId: id });
		} else if (category === 'Vendor') {
			this.setState({ vendorId: id });
		}
		if (!this.state.indexPageData.vendorPostPropertiesList) {
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
			this.props.onGetIndexPageData(data);
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const profilePictureUrl =
			this.state.user && this.state.user.profilePictureUrl
				? this.state.user.profilePictureUrl
				: null;

		const {
			userId,
			commentText,
			propertyId,
			postId,
			indexValue,
			storyImageId,
			vendorId,
			category,
			userFullName,
			commentedOnUserId
		} = this.state;

		const data = {
			postId: Number(postId),
			category: category,
			storyImageId: Number(storyImageId),
			propertyId: Number(propertyId),
			commentText: commentText,
			userId: userId,
			vendorId: Number(vendorId),
			commentedOnUserId:this.props.match.params.commentedOnUserId,
			channel:'web',
			phoneNo:this.state.user.msisdn
		};
		const userName = this.state.user.userName;
		const date = moment(Date()).format('YYYY-MM-DD hh:mm:ss');
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
				} for 7 days due to ${user.rejectionReason}`
			);
		} else {
			this.props.onCommentAdded(
				data,
				indexValue,
				userFullName,
				userName,
				profilePictureUrl,
				date
			);
		}
		this.setState({
			commentText: ""
		  });
	};

	render() {
		let {
			loading,
			data,
			indexPageData,
			commentText,
			indexValue,
			commentData,
		} = this.state;
		let pageContent = '';

		if (loading) {
			pageContent = <Spinner />;
		} else {
			pageContent = '';
		}

		data = indexPageData && indexPageData.vendorPostPropertiesList;

		if (data && data.length) {
			commentData = data[indexValue];
		}
		return (
			<React.Fragment>
				<div
					className='row mt-100'
					style={{ marginLeft: '0px', marginRight: '0px' }}
				>
					<div className='col-sm-12 col-lg-1' />
					<div className='col-sm-12 col-lg-6'>
						<div className='pxp-agent-block'>
							<div className='pxp-agent-comments'>
								{commentData && commentData.category === 'Vendor'
									? commentData &&
									  commentData.object &&
									  commentData.object.vendorComments &&
									  commentData.object.vendorComments.length
										? commentData.object.vendorComments.map((da, idx) => (
												<div key={idx} className='mt-3 mt-md-4'>
													<div className='media'>
														<img
															src={da.profilePictureUrl}
															className='mr-3'
															alt='...'
														/>
														<div className='media-body'>
															<h5>{da.userFullName}</h5>
															<div className='pxp-agent-comments-date'>
																{da.createDateTime}
															</div>
															<p>{da.commentText}</p>
														</div>
													</div>
												</div>
										  ))
										: ''
									: commentData && commentData.category === 'Post'
									? commentData &&
									  commentData.object &&
									  commentData.object.postComments &&
									  commentData.object.postComments.length
										? commentData.object.postComments.map((da, idx) => (
												<div key={idx} className='mt-3 mt-md-4'>
													<div className='media'>
														<img
															src={da.profilePictureUrl}
															className='mr-3'
															alt='...'
														/>
														<div className='media-body'>
															<h5>{da.userFullName}</h5>
															<div className='pxp-agent-comments-date'>
																{da.createDateTime}
															</div>
															<p>{da.commentText}</p>
														</div>
													</div>
												</div>
										  ))
										: ''
									: commentData && commentData.category === 'Property'
									? commentData &&
									  commentData.object &&
									  commentData.object.propertyComments &&
									  commentData.object.propertyComments.length
										? commentData.object.propertyComments.map((da, idx) => (
												<div key={idx} className='mt-3 mt-md-4'>
													<div className='media'>
														<img
															src={da.profilePictureUrl}
															className='mr-3'
															alt='...'
														/>
														<div className='media-body'>
															<h5>{da.userFullName}</h5>
															<div className='pxp-agent-comments-date'>
																{da.createDateTime}
															</div>
															<p>{da.commentText}</p>
														</div>
													</div>
												</div>
										  ))
										: ''
									: ''}

								<form
									className='pxp-agent-comments-form mt-3 mt-md-4'
									onSubmit={this.onSubmit}
								>
									<div className='form-group comment-send-btn'>
										<input
											className='form-control'
											placeholder='Write your review here...'
											name='commentText'
											value={commentText}
											onChange={this.onChange}
										/>
										<button
											className='send-btn-single-property'
											type='submit'
											onClick={this.onSubmit}
										>
											<img
												src={require('../../assets/images/ic_sent.svg')}
												alt=''
											/>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{pageContent}
			</React.Fragment>
		);
	}
}

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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(comments);
