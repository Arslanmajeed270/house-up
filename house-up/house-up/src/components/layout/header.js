import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			user: {},
			dropDownShow: false,
			currentLocation: {},
			showNav: false,
			animateHeader: false
		};
	}

	static getDerivedStateFromProps(props, state) {
		const page = props.page;
		const auth = props.auth ? props.auth : {};
		let stateChanged = false;
		let changedState = {};

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

		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
		}

		if (stateChanged) {
			return changedState;
		}

		return null;
	}

	dropDownHandler = () => {
		this.setState({
			dropDownShow: !this.state.dropDownShow,
		});
	};

	activeNav = () => {
		this.setState({
			showNav: !this.state.showNav,
		});
	};

	componentDidMount(){
		if (
			this.props.location.pathname === '/home' ||
			this.props.location.pathname === '/'
		) {
			this.setState({
				animateHeader: true
			});
		}
	}

	render() {
		const { animateHeader, loading } = this.state

		const { user, dropDownShow, currentLocation, showNav } = this.state;
		return (
			<React.Fragment>
				<div
					className={
						'pxp-header fixed-top ' +
						((animateHeader && !loading) ? 'pxp-animate' : 'pxp-full') +
						(showNav ? ' pxp-mobile ' : '')
					}
				>
					<div className='container'>
						<div className='row align-items-center'>
							<div className='col-8 col-md-3 d-center-element-logo'>
								<Link
									to={
										user && user.profilePictureUrl
											? `/index-${currentLocation.country}&${currentLocation.province}&${currentLocation.city}`
											: '/'
									}
									className='pxp-logo text-decoration-none'
								>
									{(animateHeader && !loading ) ? (
										<>
											<img
												className='img black-logo'
												src='assets/images/ic_logo_black.svg'
												alt='logo'
											/>
											<img
												className='img white-logo'
												src='assets/images/ic_logo_white.svg'
												alt='logo'
											/>
										</>
									) : (
										<img
											className='img'
											src='assets/images/logo.png'
											alt='logo'
										/>
									)}
								</Link>
								<Link
									to='/select-location'
									className='location-header'
									style={{ color: '#007bff' }}
								>
									<img
										src={require('../../assets/images/ic_address.f245f826.svg')}
										alt=''
									/>
									{currentLocation && currentLocation.city
										? currentLocation.city
										: 'Toronto'}
								</Link>
							</div>
							<div className='col-1 col-md-6'>
								<div
									className={`flex-center-nav ${ (animateHeader && !loading) ? 'veTop' : ''}`}
								>
									<ul
										className={`pxp-nav list-inline for-pad ${
											showNav ? 'nav-active' : ''
										}`}
									>
										{/* <li className="list-inline-item">
                            <Link to="/home">Home</Link>
                          </li> */}
										<li className='list-inline-item'>
											<Link to='/properties'>Find a Home</Link>
										</li>
										<li className='list-inline-item'>
											{user && user.profilePictureUrl ? (
												user.userStatusDesc === 'Rejected' ? (
													<Link
														to={`#`}
														onClick={() =>
															this.props.modelHanlder(
																'alertPopup',
																`Your Account is been ${user.userStatusDesc} due to ${user.rejectionReason}`
															)
														}
													>
														List a Property
													</Link>
												) : (
													<Link to={`/add-property`}>List a Property</Link>
												)
											) : (
												<Link
													to='/add-property'
													onClick={(e) => {
														e.preventDefault();
														this.props.modelHanlder('phoneSignin');
													}}
												>
													List a Property
												</Link>
											)}
										</li>
										<li className='list-inline-item'>
											<Link to='/professionals'>Find a Professional</Link>
										</li>
										{user && user.userId &&
											<li className='list-inline-item'>
												<Link to='/meeting-list'>Meeting List</Link>
											</li>
										}
										{/* <li className='list-inline-item'>
											<Link to='/blogs'>Resources</Link>
										</li> */}
										<li className='list-inline-item pxp-has-btns'>
											<div className='pxp-user-btns'>
												<Link
													to=''
													className='pxp-user-btns-signup pxp-signup-trigger'
												>
													Sign Up
												</Link>
												<Link
													to=''
													className='pxp-user-btns-login pxp-signin-trigger'
												>
													Sign In
												</Link>
											</div>
										</li>
									</ul>
									{
										// <div className='form-group has-search mb-0'>
										// 	{/* <span className="fa fa-search form-control-feedback" /> */}
										// 	<input
										// 		type='text'
										// 		className='form-control w-100'
										// 		placeholder='Search Location'
										// 	/>
										// 	<img
										// 		src={require('../assets/images/ic_search.svg')}
										// 		alt=''
										// 	/>
										// </div>
									}
								</div>
							</div>
							<div className='col-3 col-md-3 text-right'>
								<Link
									to='#'
									className={`pxp-header-nav-trigger ${
										showNav ? 'pxp-active' : ''
									}`}
									onClick={this.activeNav}
								>
									<span className='fa fa-bars' />
								</Link>
								{user && user.profilePictureUrl ? (
									<>
										<div
											to='#'
											className={`pxp-header-user pxp-signin-trigger ${
												(animateHeader && !loading) ? 'forborder' : ''
											}`}
											style={{
												width: '44px',
												height: '44px',
												backgroundSize: 'cover',
												backgroundImage: `url(${
													user && user.profilePictureUrl
														? user.profilePictureUrl
														: 'assets/images/ic_profile_placeholder.png'
												})`,
											}}
											onClick={this.dropDownHandler}
										>
											{dropDownShow ? (
												<div className='profile_header_dropdown'>
													<ul>
														<li className='profile_header_dropdown_li'>
															<Link
																to={`/single-vendor-${
																	user && user.userId ? user.userId : ''
																}`}
															>
																Profile
															</Link>
														</li>
														{user &&
														user.userTypeId === 2 &&
														!(user && user.packageSubscribed) ? (
															<li className='profile_header_dropdown_li'>
																<div
																	onClick={
																		user && user.userStatusDesc === 'Rejected'
																			? () =>
																					this.props.modelHanlder(
																						'alertPopup',
																						`Your Account is been ${user.userStatusDesc} due to ${user.rejectionReason}`
																					)
																			: () =>
																					this.props.modelHanlder(
																						'subscriptionPlan',
																						'upgradeBoth'
																					)
																	}
																	style={{ cursor: 'pointer' }}
																>
																	<img
																		src={require('../../assets/images/icons/ic_upgrade.svg')}
																		alt='upgradeIcon'
																	/>
																	upgrade
																</div>
															</li>
														) : user &&
														  user.packageSubscribed &&
														  user.packageSubscribed.packageDetail &&
														  user.packageSubscribed.packageDetail
																.packageName === 'Monthly' ? (
															<li className='profile_header_dropdown_li'>
																<div
																	onClick={() =>
																		this.props.modelHanlder(
																			'subscriptionPlan',
																			'annual'
																		)
																	}
																	style={{ cursor: 'pointer' }}
																>
																	<img
																		src={require('../../assets/images/icons/ic_upgrade.svg')}
																		alt='upgradeIcon'
																	/>
																	{user &&
																		user.packageSubscribed &&
																		user.packageSubscribed.packageDetail &&
																		user.packageSubscribed.packageDetail
																			.packageName}
																</div>
															</li>
														) : user &&
														  user.packageSubscribed &&
														  user.packageSubscribed.packageDetail &&
														  user.packageSubscribed.packageDetail
																.packageName === 'Annual' ? (
															<li className='profile_header_dropdown_li'>
																<div
																	onClick={() =>
																		this.props.modelHanlder(
																			'subscriptionPlan',
																			'annualAcitve'
																		)
																	}
																	style={{ cursor: 'pointer' }}
																>
																	{user &&
																		user.packageSubscribed &&
																		user.packageSubscribed.packageDetail &&
																		user.packageSubscribed.packageDetail
																			.packageName}
																</div>
															</li>
														) : (
															''
														)}
														<li
															onClick={() =>
																this.props.onLogout(this.props.history)
															}
															className='profile_header_dropdown_li'
														>
															Logout
														</li>
													</ul>
												</div>
											) : (
												''
											)}
										</div>
										<Link
											// style={{
											// 	display: 'block',
											// 	paddingRight: '10px',
											// 	marginTop: '-8px',
											// 	float: 'none',
											// }}
											className='vendor-login-name'
											to='#'
											onClick={this.dropDownHandler}
										>
											{user && user.firstName}
										</Link>
									</>
								) : (
									<div
										to='#'
										className={`pxp-header-user pxp-signin-trigger ${
											(animateHeader && !loading) ? '' : 'forborder'
										}`}
									>
										{/* <span className="far fa-user" /> */}
										<img
											style={{ 
												cursor: 'pointer',
												paddingRight: '18px',
												margin: 'auto',
												textAlign: 'center',
												display: 'block' 
											}}
											src={require('../../assets/images/ic_profile.svg')}
											alt=''
										/>
										<div
											className='vendor-login-name'
											to='#'
										>
											<span onClick={() => {
												this.props.modelHanlder('phoneSignin');
											}}>Login</span> | <span onClick={() => {
												this.props.modelHanlder('signupSelectionModel');
											}}>Register</span>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		page: state.page,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogout: (history) => dispatch(actions.logoutUser(history)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(header);
