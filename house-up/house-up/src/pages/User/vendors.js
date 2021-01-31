import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class vendor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			loading: false,
			vendorsData: [],
			user:{},
			currentLocation:{},
		};
	}
	static getDerivedStateFromProps(props, state) {
		let vendor = props.vendor;
		const errors = props.errors;
		const page = props.page;
		const auth = props.auth;

		let stateChanged = false;
		let changedState = {};

		if (
			vendor &&
			JSON.stringify(state.vendorsData) !== JSON.stringify(vendor.vendorsData)
		) {
			changedState.vendorsData = vendor.vendorsData;
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
		if (
			page &&
			JSON.stringify(state.currentLocation) !==
				JSON.stringify(page.currentLocation)
		) {
			changedState.currentLocation = page.currentLocation;
			stateChanged = true;
		}

		if (stateChanged) {
			return changedState;
		}
		return null;
	}

	componentDidMount() {
		const { user, currentLocation } = this.state;
		const reqPacket = {
			channel:"web",
			lat:43.787083,
			lng:-79.497369,
			city: currentLocation.city,
			state: currentLocation.province,
			country: currentLocation.country,
			pageNum:3,
			loggedInuserId: user.userId,
			searchText:"",
			phoneNo:user.msisdn
			}
		this.props.onGetVendorsData(reqPacket);
	}

	render() {
		const { errors, loading, vendorsData } = this.state;
		let pageContent = '';
		if (loading) {
			pageContent = <Spinner />;
		} else {
			pageContent = (
				<React.Fragment>                       
					<div className='pxp-content'>
						<div className='pxp-agents pxp-content-wrapper mt-60'>
							<div className='container'>
								<div className='row'>
									<div className='col-sm-12 col-md-7'>
										<h1  
											className='pxp-page-header'
											style={{ paddingLeft: '10px' }}
										>
											Our Professionals
										</h1>
										<p className='pxp-text-light'>
											Pairing the industry's top technology with unsurpassed
											local expertise.
										</p>
									</div>
								</div>
								{errors && errors.message && (
									<Alert variant='danger'>
										<strong>Error!</strong> {errors.message}
									</Alert>
								)}
							</div>
							<div className='pxp-agents-hero mt-4 mt-md-5'>
								<div
									className='pxp-agents-hero-fig pxp-cover'
									style={{
										backgroundImage: 'url(assets/images/agents-hero.jpg)',
										backgroundPosition: '50% 50%',
									}}
								/>
								<div className='pxp-agents-hero-search-container mb-60'>
									<div className='container'>
										<div className='pxp-agents-hero-search'>
											<h2 className='pxp-section-h2 p-0'>
												Find an Professional
											</h2>
											<div className='pxp-agents-hero-search-form mt-3 mt-md-4'>
												<div className='row'>
													<div className='col-sm-12 col-md-4'>
														<div className='form-group'>
															<label htmlFor='pxp-agents-search-location'>
																Location
															</label>
															<input
																type='text'
																className='form-control'
																id='pxp-agents-search-location'
																placeholder='Neighborhood/City/Zip'
															/>
														</div>
													</div>
													<div className='col-sm-12 col-md-4'>
														<div className='form-group'>
															<label htmlFor='pxp-agents-search-name'>
																Name
															</label>
															<input
																type='text'
																className='form-control'
																id='pxp-agents-search-name'
																placeholder='Agent name'
															/>
														</div>
													</div>
													<div className='col-sm-12 col-md-4'>
														<div className='form-group'>
															<label htmlFor='pxp-agents-search-service'>
																Service Needed
															</label>
															<select
																className='custom-select'
																id='pxp-agents-search-service'
															>
																<option value={1}>Buying or selling</option>
																<option value={2}>Buying a home</option>
																<option value={3}>Selling a home</option>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='container'>
								<div className='row mt-150'>
									{vendorsData && vendorsData.length
										? vendorsData.map((data, index) => (
												<div
													key={index}
													className='col-sm-12 col-md-6 col-lg-3'
												>
													<Link
														to={`/single-vendor-${
															data && data.userId && data.userId
														}`}
														className='pxp-agents-1-item'
													>
														<div className='pxp-agents-1-item-fig-container rounded-lg'>
															<div
																className='pxp-agents-1-item-fig pxp-cover'
																style={{
																	backgroundImage: `url(${
																		data.profilePictureUrl
																			? data.profilePictureUrl
																			: 'assets/images/ic_profile_placeholder.png'
																	})`,
																	backgroundPosition: 'top center',
																}}
															/>
														</div>
														<div className='pxp-agents-1-item-details rounded-lg'>
															<div className='pxp-agents-1-item-details-name'>
																{data.firstName} {data.lastName}
															</div>
															<div className='pxp-agents-1-item-details-email'>
																{data.professionDesc}
															</div>
															<div className='pxp-agents-1-item-details-spacer' />
															<div className='pxp-agents-1-item-cta text-uppercase'>
																More Details
															</div>
														</div>
													</Link>
												</div>
										  ))
										: ''}
									{/* <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-2.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Alayna Becker</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (456) 123-7890</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star-o" /></span></div>
                        </Link>
                      </div> */}
								</div>
								{/* <ul className='pagination pxp-paginantion mt-2 mt-md-3'>
									<li className='page-item '>
										<Link className='page-link' to=''>
											1
										</Link>
									</li>
									<li className='page-item'>
										<Link className='page-link' to=''>
											2
										</Link>
									</li>
									<li className='page-item'>
										<Link className='page-link' to=''>
											3
										</Link>
									</li>
									<li className='page-item'>
										<Link className='page-link' to=''>
											Next <span className='fa fa-angle-right' />
										</Link>
									</li>
								</ul>
							 */}
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
		page: state.page,
		auth:state.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetVendorsData: (data) => dispatch(actions.getVendorsData(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(vendor);
