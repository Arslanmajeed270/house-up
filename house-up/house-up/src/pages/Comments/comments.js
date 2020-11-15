import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';
class comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			indexPageData: {},
			user: {},
			contactEmail: '',
			contactName: '',
			commentText: '',
			userId: '',
			postId: '',
			storyImageId: '',
			propertyId: '',
			vendorId: '',
			category: '',
			data: [],
			comments: [],
			indexValue: '',
			commentData: {},
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
			JSON.stringify(state.indexPageData) !== JSON.stringify(page.indexPageData)
		) {
			changedState.indexPageData = page.indexPageData;
			stateChanged = true;
			if (
				changedState.indexPageData &&
				changedState.indexPageData &&
				changedState.indexPageData.vendorPostPropertiesList.length
			) {
				changedState.comments = changedState.indexPageData.vendorPostPropertiesList.map(
					(data) => {
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
					}
				);
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
		const { user } = this.state;
		console.log('user',user)
		const contactEmail = user.emailAddress ? user.emailAddress : '';
		const firstName = user.firstName ? user.firstName : '';
		const lastName = user.lastName ? user.lastName : '';
		const contactName = `${firstName} ${lastName}`;
		const userId = user.userId ? user.userId : '';

		this.setState({
			contactEmail,
			contactName,
			userId,
		});

		const id = this.props.match.params.id;
		const category = this.props.match.params.category;
		const indexValue = this.props.match.params.indexValue;
		console.log('index', indexValue);

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
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		// const userName =
		// 	this.state.user && this.state.user.userName
		// 		? this.state.user.userName
		// 		: null;
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
			commentData,
			contactName
		} = this.state;
		console.log('conatct name', contactName)

		const data = {
			postId: Number(postId),
			category: category,
			storyImageId: Number(storyImageId),
			propertyId: Number(propertyId),
			commentText: commentText,
			userId: userId,
			vendorId: Number(vendorId),
		};
		console.log('data pakage of comment api', data);

		this.props.onCommentAdded(data, indexValue, contactName , profilePictureUrl);
	};

	render() {
		let {
			loading,
			data,
			indexPageData,
			contactName,
			contactEmail,
			commentText,
			indexValue,
			commentData,
		} = this.state;

		console.log('checking this.state in comments: ', this.state);

		let pageContent = '';

		if (loading) {
			pageContent = <Spinner />;
		} else {
			pageContent = '';
		}

		data = indexPageData && indexPageData.vendorPostPropertiesList;
		console.log('checking data in comments: ', data);

		console.log('post and property data', data);
		if (data && data.length) {
			commentData = data[indexValue];
		}
		console.log(commentData);

		return (
			<React.Fragment>
				<div className='row mt-100'>
					<div className='col-sm-12 col-lg-1' />
					<div className='col-sm-12 col-lg-10'>
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
											style={{ height: '75px' }}
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
		onCommentAdded: (data, index, contactName , profilePictureUrl) =>
			dispatch(actions.AddComments(data, index, contactName , profilePictureUrl)),
		onGetIndexPageData: (userId) => dispatch(actions.getIndexPageData(userId)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(comments);
