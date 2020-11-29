import React, { Component } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
import Contact from '../../components/Popups/contactUsPopup';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ImagePreview from '../../components/Popups/ImagePreview';

class singleProp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactModalState: false,
			singlePropertyData: {},
			id: '',
			commentText: '',
			user: {},
			userId: '',
			imageToggle: false,
			vendorId: '',
			comments: [],
		};
	}

	static getDerivedStateFromProps(props, state) {
		let property = props.property;
		let auth = props.auth;

		let stateChanged = false;
		let changedState = {};

		if (auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)) {
			changedState.user = auth.user;
			stateChanged = true;
		}
		if (
			property &&
			JSON.stringify(state.singleVendorData) !== JSON.stringify(property.singleVendorData)
		) {
			changedState.singleVendorData = property.singleVendorData;
			stateChanged = true;
			if (
				changedState.singleVendorData &&
				changedState.singleVendorData.propertyComments.length
			) {
				changedState.comments = changedState.singleVendorData.propertyComments
			}
		}
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
				}
			);
		}
		if (
			property &&
			JSON.stringify(state.singlePropertyData) !==
				JSON.stringify(property.singlePropertyData)
		) {
			changedState.singlePropertyData = property.singlePropertyData;
			stateChanged = true;
		}

		if (stateChanged) {
			return changedState;
		}
		return null;
	}

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

	componentDidMount() {
		const { user } = this.state;
		const id = this.props.match.params.id;

		const userId = user.userId ? user.userId : '';
		const profilePictureUrl = user.profilePictureUrl
			? user.profilePictureUrl
			: '';

		this.setState({
			id,
			userId,
		});

		let userData = {
			propertyId: id,
		};
		this.props.onGetSinglePropertyData(userData, profilePictureUrl);
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { id, commentText, userId , user } = this.state;

		const data = {
			postId: 0,
			category: 'Property',
			storyImageId: 0,
			propertyId: Number(id),
			commentText: commentText,
			userId: userId,
			vendorId: 0,
		};
		const indexValue = ''
		const userFullName = `${user.firstName} ${user.lastName}`
		const userName = user.userName
		const profilePictureUrl = user.profilePictureUrl
		const date = moment(Date()).format('YYYY-MM-DD hh:mm:ss')
		this.props.onCommentAdded(data, indexValue,userFullName,userName , profilePictureUrl , date );
	};

	ImagePreviewHandler = () => {
		this.setState({ imageToggle: !this.state.imageToggle });
	};

	render() {
		const { singlePropertyData, commentText, imageToggle, user } = this.state;
		console.log(singlePropertyData)
		return (
			<React.Fragment>
				<div className='pxp-content'>
					<div className='pxp-single-property-top pxp-content-wrapper mt-100'>
						<div className='container'>
							<div className='row'>
								<div className='col-sm-12 col-md-12'>
									<h2 className='pxp-sp-top-title'>
										{singlePropertyData && singlePropertyData.adTitle}
									</h2>
									<p className='pxp-sp-top-address pxp-text-light'>
										{singlePropertyData &&
											singlePropertyData.currency &&
											singlePropertyData.currency.symbol}{' '}
										{singlePropertyData && singlePropertyData.price
											? singlePropertyData.price.toLocaleString()
											: ''}{' '}
										{singlePropertyData &&
											singlePropertyData.currency &&
											singlePropertyData.currency.lable}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='container pxp-single-property-gallery-container'>
						<div
							className='pxp-single-property-gallery'
							itemScope
							itemType='http://schema.org/ImageGallery'
						>
							<figure
								itemProp='associatedMedia'
								itemScope
								itemType='http://schema.org/ImageObject'
								className='pxp-sp-gallery-main-img'
							>
								<Link
									onClick={this.ImagePreviewHandler}
									itemProp='contentUrl'
									data-size='1920x1280'
									className='pxp-cover'
									style={{
										backgroundImage: `url(${
											singlePropertyData &&
											singlePropertyData.imageList &&
											singlePropertyData.imageList.length &&
											singlePropertyData.imageList[0] &&
											singlePropertyData.imageList[0].imageURL
										})`,
									}}
								/>
								<figcaption itemProp='caption description'>
									Image caption
								</figcaption>
							</figure>
							{singlePropertyData &&
							singlePropertyData.imageList &&
							singlePropertyData.imageList.length
								? singlePropertyData.imageList.map((img, index) =>
										index > 0 && index < 5 ? (
											<figure
												key={index}
												itemProp='associatedMedia'
												itemScope
												itemType='http://schema.org/ImageObject'
											>
												<Link
													onClick={this.ImagePreviewHandler}
													itemProp='contentUrl'
													data-size='1920x1459'
													className='pxp-cover'
													style={{
														backgroundImage: `url(${img && img.imageURL})`,
													}}
												/>
												<figcaption itemProp='caption description'>
													Image caption
												</figcaption>
											</figure>
										) : (
											''
										)
								  )
								: ''}
							{imageToggle ? (
								<ImagePreview
									show={this.state.imageToggle}
									close={this.ImagePreviewHandler}
									propertyImg={
										singlePropertyData && singlePropertyData.imageList
									}
								/>
							) : (
								''
							)}
						</div>
						<Link
							onClick={this.ImagePreviewHandler}
							className='pxp-sp-gallery-btn'
						>
							See All Photos
						</Link>
						<div className='clearfix' />
					</div>
					<div className='container mt-4'>
						<div className='row'>
							<div className='col-lg-8'>
								{singlePropertyData && singlePropertyData.address ? (
									<div
										style={{
											color: '#000',
											fontWeight: '300',
											fontFamily: 'Light',
										}}
									>
										{' '}
										<span className='property-details'>Address:</span>{' '}
										{singlePropertyData && singlePropertyData.address}
									</div>
								) : (
									''
								)}
								{singlePropertyData && singlePropertyData.propertyType ? (
									<div
										style={{
											color: '#000',
											fontWeight: '300',
											fontFamily: 'Light',
										}}
									>
										{' '}
										<span className='property-details'>
											Property type:
										</span>{' '}
										{singlePropertyData && singlePropertyData.propertyType}{' '}
									</div>
								) : (
									''
								)}
								{singlePropertyData && singlePropertyData.rentalListingYN ? (
									<div
										style={{
											color: '#000',
											fontWeight: '300',
											fontFamily: 'Light',
										}}
									>
										<span className='property-details'>Rental:</span>
										{singlePropertyData && singlePropertyData.rentalListingYN}
									</div>
								) : (
									''
								)}
								{singlePropertyData && singlePropertyData.createdDate ? (
									<div
										style={{
											color: '#000',
											fontWeight: '300',
											fontFamily: 'Light',
										}}
									>
										<span className='property-details'>Date listed:</span>{' '}
										{singlePropertyData && singlePropertyData.createdDate}
									</div>
								) : (
									''
								)}
								<div className='pxp-single-property-section mt-4 mt-md-5'>
									<div className='mt-3 mt-md-4'>
										{singlePropertyData && singlePropertyData.description ? (
											<>
												<h3>Description</h3>
												<p>{singlePropertyData.description}</p>
											</>
										) : (
											''
										)}
									</div>
									<hr style={{ background: '#EFEFF4' }} />
									<div>
										<h3>Details</h3>
										<div className='mt-3 mt-md-4'>
											{singlePropertyData && singlePropertyData.buildingType ? (
												<div>
													{' '}
													<span className='property-details'>
														Building type:{' '}
													</span>
													{singlePropertyData &&
														singlePropertyData.buildingType}{' '}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.noOfBathroomsValue ? (
												<div>
													<span className='property-details'>Bathrooms: </span>
													{singlePropertyData &&
														singlePropertyData.noOfBathroomsValue}
												</div>
											) : (
												''
											)}
											{singlePropertyData && singlePropertyData.noOfBedrooms ? (
												<div>
													<span className='property-details'>Bedrooms: </span>
													{singlePropertyData &&
														singlePropertyData.noOfBedrooms}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.lotDimensionLength &&
											singlePropertyData.lotDimensionWidth ? (
												<div>
													<span className='property-details'>
														Lot dimensions:{' '}
													</span>{' '}
													{singlePropertyData &&
														singlePropertyData.lotDimensionLength}{' '}
													x{' '}
													{singlePropertyData &&
														singlePropertyData.lotDimensionWidth}{' '}
												</div>
											) : (
												''
											)}
											{singlePropertyData && singlePropertyData.lotTotalArea ? (
												<div>
													<span className='property-details'>Lot area: </span>{' '}
													{singlePropertyData &&
														singlePropertyData.lotTotalArea}
												</div>
											) : (
												''
											)}
											{singlePropertyData && singlePropertyData.basementType ? (
												<div>
													<span className='property-details'>Basement: </span>{' '}
													{singlePropertyData &&
														singlePropertyData.basementType}
												</div>
											) : (
												''
											)}
											{singlePropertyData && singlePropertyData.garageType ? (
												<div>
													<span className='property-details'>Garage: </span>{' '}
													{singlePropertyData && singlePropertyData.garageType}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.finishedSqftArea ? (
												<div>
													<span className='property-details'>Sqrt Area: </span>{' '}
													{singlePropertyData &&
														singlePropertyData.finishedSqftArea}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.primaryHeatingFuel ? (
												<div>
													<span className='property-details'>
														Primary heating fuel:{' '}
													</span>{' '}
													{singlePropertyData &&
														singlePropertyData.primaryHeatingFuel}
												</div>
											) : (
												''
											)}
											{singlePropertyData && singlePropertyData.yearBuilt ? (
												<div>
													<span className='property-details'>yearBuilt: </span>{' '}
													{singlePropertyData && singlePropertyData.yearBuilt}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.yearFurnaceBuilt ? (
												<div>
													<span className='property-details'>
														Year furnace installed:{' '}
													</span>{' '}
													{singlePropertyData &&
														singlePropertyData.yearFurnaceBuilt}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.yearRoofInstalled ? (
												<div>
													<span className='property-details'>
														Year roof installed:{' '}
													</span>{' '}
													{singlePropertyData &&
														singlePropertyData.yearRoofInstalled}
												</div>
											) : (
												''
											)}
											{singlePropertyData && singlePropertyData.storeys ? (
												<div>
													<span className='property-details'>Storeys: </span>{' '}
													{singlePropertyData && singlePropertyData.storeys}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.waterSourceType ? (
												<div>
													<span className='property-details'>
														Water source:{' '}
													</span>{' '}
													{singlePropertyData &&
														singlePropertyData.waterSourceType}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.propertyType !== 'House' &&
											singlePropertyData &&
											singlePropertyData.condoFee ? (
												<div>
													<span className='property-details'>
														Condo fees (/month):{' '}
													</span>{' '}
													{singlePropertyData && singlePropertyData.condoFee}
												</div>
											) : (
												''
											)}
											{singlePropertyData &&
											singlePropertyData.propertyType !== 'House' &&
											singlePropertyData &&
											singlePropertyData.parkingSpaces ? (
												<div>
													<span className='property-details'>
														Parking Spaces:{' '}
													</span>{' '}
													{singlePropertyData &&
														singlePropertyData.parkingSpaces}
												</div>
											) : (
												''
											)}
										</div>
									</div>
								</div>
								<div className='pxp-single-property-section mt-4 mt-md-5'>
									<h3>Amenities</h3>
									<div className='row mt-3 mt-md-4'>
										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.internet ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>Internet</div>
											</div>
										) : (
											''
										)}

										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.garage ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>Garage</div>
											</div>
										) : (
											''
										)}
										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.ac ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>
													Air Conditioning
												</div>
											</div>
										) : (
											''
										)}
										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.dishWasher ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>Dishwasher</div>
											</div>
										) : (
											''
										)}
										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.disposal ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>Disposal</div>
											</div>
										) : (
											''
										)}
										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.balcony ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>Balcony</div>
											</div>
										) : (
											''
										)}
										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.gym ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>Gym</div>
											</div>
										) : (
											''
										)}
										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.playroom ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>Playroom</div>
											</div>
										) : (
											''
										)}
										{singlePropertyData &&
										singlePropertyData.amenites &&
										singlePropertyData.amenites.bar ? (
											<div className='col-sm-6 col-lg-4'>
												<div className='pxp-sp-amenities-item'>Bar</div>
											</div>
										) : (
											''
										)}
									</div>
								</div>
								{/* <div className="pxp-single-property-section mt-4 mt-md-5">
                        <h3>Explore the Area</h3>
                        <div className="pxp-sp-pois-nav mt-3 mt-md-4">
                          <div className="pxp-sp-pois-nav-transportation text-uppercase">
                            Transportation
                          </div>
                          <div className="pxp-sp-pois-nav-Door Buds text-uppercase">
                            Door Buds
                          </div>
                          <div className="pxp-sp-pois-nav-shopping text-uppercase">
                            Shopping
                          </div>
                          <div className="pxp-sp-pois-nav-cafes text-uppercase">
                            Cafes &amp; Bars
                          </div>
                          <div className="pxp-sp-pois-nav-arts text-uppercase">
                            Arts &amp; Entertainment
                          </div>
                          <div className="pxp-sp-pois-nav-fitness text-uppercase">
                            Fitness
                          </div>
                        </div>
                        <div id="pxp-sp-map" className="mt-3" />
                      </div>
                      <div className="pxp-single-property-section mt-4 mt-md-5">
                        <h3>Schools in Marina District</h3>
                        <ul className="nav nav-tabs pxp-nav-tabs mt-3 mt-md-4">
                          <li className="nav-item">
                            <Link className="nav-link active" to="" data-toggle="tab">Elementary</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="" data-toggle="tab">Middle</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="" data-toggle="tab">High</Link>
                          </li>
                        </ul>
                        <div className="tab-content mt-3">
                          <div className="tab-pane active" id="elementary" role="tabpanel">
                            <table className="table table-responsive pxp-table">
                              <thead>
                                <tr>
                                  <th scope="col">School</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Grades</th>
                                  <th scope="col">Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane" id="middle" role="tabpanel">
                            <table className="table table-responsive pxp-table">
                              <thead>
                                <tr>
                                  <th scope="col">School</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Grades</th>
                                  <th scope="col">Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane" id="high" role="tabpanel">
                            <table className="table table-responsive pxp-table">
                              <thead>
                                <tr>
                                  <th scope="col">School</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Grades</th>
                                  <th scope="col">Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                 
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                       */}
								<div className='row mt-100'>
									<div className='col-sm-12 col-lg-12'>
										<div className='pxp-agent-block'>
											<div className='pxp-agent-comments'>
												{/* <h4>3 Reviews</h4> */}
												<div className='mt-3 mt-md-4'>
													{singlePropertyData &&
													singlePropertyData.propertyComments &&
													singlePropertyData.propertyComments.length
														? singlePropertyData.propertyComments.map(
																(da, index) => (
																	<div
																		key={index}
																		className='media mt-2 mt-md-3'
																	>
																		<img
																			src={da && da.profilePictureUrl}
																			className='mr-3'
																			alt='...'
																		/>
																		<div className='media-body'>
																			<h5> {da && da.userFullName}</h5>
																			<div className='pxp-agent-comments-date'>
																				{da && da.createDateTime}
																			</div>
																			<p> {da && da.commentText} </p>
																		</div>
																	</div>
																)
														  )
														: ''}
												</div>
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
														{user && user.profilePictureUrl ? (
															<span
																className='send-btn-single-property'
																onClick={this.onSubmit}
															>
																<img
																	src={require('../../assets/images/ic_sent.svg')}
																	alt=''
																/>
															</span>
														) : (
															<span
																className='send-btn-single-property'
																onClick={() =>
																	this.props.modelHanlder('phoneSignin')
																}
															>
																<img
																	src={require('../../assets/images/ic_sent.svg')}
																	alt=''
																/>
															</span>
														)}
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-lg-4'>
								<div className='pxp-single-property-section pxp-sp-agent-section mt-4 mt-md-5 mt-lg-0'>
									<h3>Listed By</h3>
									<div className='pxp-sp-agent mt-3 mt-md-4'>
										<Link
											to={`/single-vendor-${
												singlePropertyData &&
												singlePropertyData.user &&
												singlePropertyData.user.userId
													? singlePropertyData.user.userId
													: ''
											}`}
											className='pxp-sp-agent-fig pxp-cover rounded-lg user-profile'
											style={{
												backgroundImage: `url(${
													singlePropertyData &&
													singlePropertyData.user &&
													singlePropertyData.user.profilePictureUrl
														? singlePropertyData.user.profilePictureUrl
														: 'assets/images/ic_profile_placeholder.png'
												})`,
											}}
										/>
										<div className='pxp-sp-agent-info'>
											<div className='pxp-sp-agent-info-name'>
												<Link
													to={`/single-vendor-${
														singlePropertyData &&
														singlePropertyData.user &&
														singlePropertyData.user.userId
															? singlePropertyData.user.userId
															: ''
													}`}
												>
													{singlePropertyData &&
													singlePropertyData.user &&
													singlePropertyData.user.firstName
														? singlePropertyData.user.firstName
														: ''}{' '}
													{singlePropertyData &&
													singlePropertyData.user &&
													singlePropertyData.user.lastName
														? singlePropertyData.user.lastName
														: ''}{' '}
												</Link>
											</div>
											<div className='pxp-sp-agent-info-rating'></div>
											<div className='pxp-sp-agent-info-phone'>
												{singlePropertyData &&
												singlePropertyData.user &&
												singlePropertyData.user.professionDesc
													? singlePropertyData.user.professionDesc
													: ''}
											</div>
										</div>
										<div className='clearfix' />
										<div className='pxp-sp-agent-btns mt-3 mt-md-4'>
											{
												user.userId !== singlePropertyData.userId ?
													<button
													className='pxp-sp-agent-btn-main'
													data-toggle='modal'
													onClick={
														user && user.profilePictureUrl ?
														() =>
															this.modelHanlder('contactModalState',singlePropertyData.userId)
														: 
														() => this.props.modelHanlder('phoneSignin')}
												>
													Contact Us
												</button>
											: ""
											}
											{this.state.contactModalState ? (
												<Contact
													show={this.state.contactModalState}
													closeCodelHanlder={this.closeCodelHanlder}
													vendorId={this.state.vendorId}
												/>
											) : null}
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
}

const mapStateToProps = (state) => {
	return {
		property: state.property,
		auth: state.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onCommentAdded: (data, index, userFullName ,userName, profilePictureUrl , date) =>
		 dispatch(actions.AddComments(data, index, userFullName ,userName, profilePictureUrl, date)),
		onGetSinglePropertyData: (userData) =>
			dispatch(actions.getSingleProperty(userData)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(singleProp);
