/* eslint-disable no-dupe-keys */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProperties, dropDwonMenu, getPropertiesByFilters } from '../../store/actions';
import Spinner from '../../components/common/Spinner';
import MarkerInfoWindow from './components/googleMap/gMap';
import  PropertiesPaginationRenderer from './components/propertiesPaginationRenderer'

class Properties extends Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: {},
			loading: false,
			currentLocation: {},
			propertiesData:{},
			properties: [],
			pagesCount: 0,
			user:{},
			currentPage: 1,

			// Search and filters data
			searchText:"",
			rentalListingYN: "",
			minPrice:0,
			mxPrice:0,
			bedrooms:0,
			bathrooms:0,
			propertyTypeId: null,
			minSquareFeet: 0,
			maxSquareFeet: 0,
			internet: false,
			garage: false,
			airConditioning: false,
			dishWasher: false,
			disposal: false,
			balcony: false,
			gym: false,
			playroom: false,
			bar: false,
			storeys:0,

			dropDownData: {},
			propertyType: [],
			propertyType: [],
			bedroomCount: [],
			bathroomCount: [],
			storeysCount: [],
		};

		this.toggleFilterRef = React.createRef();
		this.toggleContentRef = React.createRef();
		this.toggleMapRef = React.createRef();
		this.toggleDefaultContent = React.createRef();
	}

	static getDerivedStateFromProps(props, state) {

		const { errors, page, property, auth } = props;

		let stateChanged = false;
		let changedState = {};

		if (
			property &&
			JSON.stringify(state.propertiesData) !== JSON.stringify(property.propertiesData)
		) {
			changedState.propertiesData = property.propertiesData || {};
			changedState.properties = property.propertiesData.properties || [];
			changedState.pagesCount =  property.propertiesData.pagesCount || 0;
			stateChanged = true;
		}

		if (
			property &&
			JSON.stringify(state.dropDownData) !==
				JSON.stringify(property.dropDownData)
		) {
			changedState.dropDownData = property.dropDownData;
			stateChanged = true;
			const dropDownData = changedState.dropDownData;
			changedState.propertyType = 
					dropDownData && dropDownData.propertyType
						? dropDownData.propertyType
						: [];
			changedState.bedroomCount = 
					dropDownData && dropDownData.bedroomCount
						? dropDownData.bedroomCount
						: [];
						changedState.bathroomCount = 
					dropDownData && dropDownData.bathroomCount
						? dropDownData.bathroomCount
						: [];
						changedState.storeysCount = 
					dropDownData && dropDownData.storeysCount
						? dropDownData.storeysCount
						: [];
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
		if (auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)) {
			changedState.user = auth.user;
			stateChanged = true;
		  }

		if (stateChanged) {
			return changedState;
		}
		return null;
	}


	componentDidMount() {
		const { currentLocation , user, dropDownData } = this.state;
		const { onGetPropertyData, onDropDownMenu } = this.props;

		if (!dropDownData || !dropDownData.currencies) {
			onDropDownMenu();
		}

		const ReqPacket = {
			channel:"web",
			lat: 43.787083,
			lng: -79.497369,
			city: currentLocation && currentLocation.city ? currentLocation.city : 'Toronto',
			state: currentLocation && currentLocation.province ? currentLocation.province : "Ontario",
			country: currentLocation && currentLocation.country ? currentLocation.country : "Canada",
			rentalListingYN:"No",
			pageNum:1,
			loggedInuserId: user.userId ? user.userId : "11",
			searchText:"",
			phoneNo: user.msisdn ? user.msisdn : "03335425231"
			}
			onGetPropertyData(ReqPacket);
	}

	toggleFilter = (e) => {
		e.preventDefault(e);
		let classData = this.toggleFilterRef.current.classList;
		if(classData.value.indexOf('active') === -1) {
			this.toggleFilterRef.current.classList.add('active');
			e.target.classList.add('pxp-active');
		}
		else {
			this.toggleFilterRef.current.classList.remove('active');
			e.target.classList.remove('pxp-active');
		}
	}

	toggleFullWidth = (e) => { 
		e.preventDefault(e);
		this.toggleMapRef.current.classList.add('pxp-max');
		this.toggleContentRef.current.classList.add('pxp-min');
		this.toggleDefaultContent.current.classList.add('d-block');
	};
	
	toggleDefaultWidth = (e) => { 
		e.preventDefault(e);
		this.toggleMapRef.current.classList.remove('pxp-max');
		this.toggleContentRef.current.classList.remove('pxp-min');
		this.toggleDefaultContent.current.classList.remove('d-block');
	};


	paginationHandler = ( pageNum ) => {

		const { currentLocation , user, 
			searchText, rentalListingYN, minPrice, mxPrice, bedrooms, bathrooms, 
		} = this.state;
		const { onGetPropertyData, onGetPropertiesByFilters } = this.props;
		if( Number(minPrice) > 0 || Number(mxPrice) > 0 || 
		 Number(bedrooms) > 0 || Number(bathrooms) > 0 ){
			const data = {
				channel:"web",
				lat: 43.787083,
				lng: -79.497369,
				city: currentLocation && currentLocation.city ? currentLocation.city : 'Toronto',
				state: currentLocation && currentLocation.province ? currentLocation.province : "Ontario",
				country: currentLocation && currentLocation.country ? currentLocation.country : "Canada",
				pageNum: pageNum,
				loggedInuserId: user.userId ? user.userId : "11",
				searchText: searchText,
				phoneNo: user.msisdn ? user.msisdn : "03335425231",
				storeys:1,
				bedrooms: Number(bedrooms),
				bathrooms: Number(bathrooms),
				rentalListingYN: rentalListingYN,
				minPrice: Number(minPrice),
				mxPrice: Number(mxPrice)
			}
			onGetPropertiesByFilters(data);
		}
		else{
			const ReqPacket = {
				channel:"web",
				lat: 43.787083,
				lng: -79.497369,
				city: currentLocation && currentLocation.city ? currentLocation.city : 'Toronto',
				state: currentLocation && currentLocation.province ? currentLocation.province : "Ontario",
				country: currentLocation && currentLocation.country ? currentLocation.country : "Canada",
				rentalListingYN: rentalListingYN,
				pageNum:pageNum,
				loggedInuserId: user.userId ? user.userId : "11",
				searchText: searchText,
				phoneNo: user.msisdn ? user.msisdn : "03335425231"
				}
				onGetPropertyData(ReqPacket);
				this.setState({
					currentPage: pageNum
				});
		}
	}

	onChange = (e) => {
		const { name, value, type } = e.target;
		if (type === 'checkbox') {
			const value = !this.state[name];
			this.setState({
				[name]: value,
			});
		} else {
			this.setState({
				[name]: value,
			});
		}
	};


	applyFilterHandler = () => {
		const { 
			searchText, rentalListingYN, minPrice, mxPrice, bedrooms, bathrooms,
			// propertyTypeId, minSquareFeet, maxSquareFeet, internet, garage, airConditioning,
			// dishWasher, disposal, balcony, gym, playroom, bar,
			currentLocation , user 
		} = this.state;
		const { onGetPropertiesByFilters } = this.props;
		const data = {
			channel:"web",
			lat: 43.787083,
			lng: -79.497369,
			city: currentLocation && currentLocation.city ? currentLocation.city : 'Toronto',
			state: currentLocation && currentLocation.province ? currentLocation.province : "Ontario",
			country: currentLocation && currentLocation.country ? currentLocation.country : "Canada",
			pageNum:1,
			loggedInuserId: user.userId ? user.userId : "11",
			searchText: searchText,
			phoneNo: user.msisdn ? user.msisdn : "03335425231",
			storeys:1,
			bedrooms: Number(bedrooms),
			bathrooms: Number(bathrooms),
			rentalListingYN: rentalListingYN,
			minPrice: Number(minPrice),
			mxPrice: Number(mxPrice)
		}
		onGetPropertiesByFilters(data);
	}

	render() {
		const { loading, currentPage, properties, pagesCount, searchText,
		rentalListingYN, minPrice, mxPrice, bedrooms, bathrooms,
		propertyTypeId, minSquareFeet, maxSquareFeet, internet, garage, airConditioning,
		dishWasher, disposal, balcony, gym, playroom, bar,
		propertyType, bedroomCount, bathroomCount } = this.state;
		let pageContent = '';

		const googleMap = <MarkerInfoWindow p={properties}/>;

		if (loading) {
			pageContent = <Spinner />;
		} 
		else {
			pageContent = (<div ref={this.toggleContentRef} className='pxp-content-side pxp-content-left pxp-half'>
			<div className='pxp-content-side-wrapper'>
				<div className='d-flex pt-2'>
					<div className='pxp-content-side-search-form'>
						<div className='row pxp-content-side-search-form-row'>
							<div className='col-5 col-sm-5 col-md-4 col-lg-3 pxp-content-side-search-form-col'>
								<select
									className='custom-select'
									id='pxp-p-search-status'
									onChange={this.onChange}
									name='rentalListingYN'
									value={rentalListingYN}
								>
									<option value=""> --- </option>
									<option value='No'>Sell</option>
									<option value='Yes'>Rent </option>
								</select>
							</div>
							<div className='col-7 col-sm-7 col-md-8 col-lg-9 pxp-content-side-search-form-col'>
								<input
									type='text'
									className='form-control pxp-is-address'
									placeholder='Search by City, Neighborhood, or Address'
									id='pxp-p-search-address'
									onChange={this.onChange}
									name='searchText'
									value={searchText}
								/>
								<img
									src={require('../../assets/images/ic_search@2x.png')}
									alt=''
									className='properties-search-icon'
								/>
							</div>
						</div>
					</div>
					<div className='d-flex listing-icon-fix'>
						<Link to="#" role='button' className='pxp-adv-toggle' onClick={(e) => this.toggleFilter(e)}>
							<span className='fa fa-sliders-h' />
						</Link>
					</div>
				</div>
				<div className="pxp-content-side-search-form-adv mb-3 pxp-content-side-search-form" ref={this.toggleFilterRef}>
					<div className="row pxp-content-side-search-form-row">
						<div className="col-sm-6 col-md-3 pxp-content-side-search-form-col">
							<div className="form-group">
								<label htmlFor="pxp-p-filter-price-min">Price</label>
								<input 
								type="number" 
								className="form-control" 
								placeholder="Min" 
								id="pxp-p-filter-price-min"
								onChange={this.onChange}
								name='minPrice'
								value={minPrice === 0 ? "" : minPrice}
								/>
							</div>
						</div>
						<div className="col-sm-6 col-md-3 pxp-content-side-search-form-col">
							<div className="form-group">
								<label htmlFor="pxp-p-filter-price-max" className="d-none d-sm-inline-block">&nbsp;</label>
								<input 
								type="text" 
								className="form-control" 
								placeholder="Max" 
								id="pxp-p-filter-price-max"
								onChange={this.onChange}
								name='mxPrice'
								value={mxPrice === 0 ? "" : mxPrice}
								/>
							</div>
						</div>
						<div className="col-sm-6 col-md-3 pxp-content-side-search-form-col">
							<div className="form-group">
								<label htmlFor="pxp-p-filter-beds">Beds</label>
								<select 
								className="custom-select" 
								id="pxp-p-filter-beds"
								name='bedrooms'
								onChange={this.onChange}
								value={bedrooms}
								>
									{bedroomCount && bedroomCount.length
										? bedroomCount.map((noOfBedrooms, idx) => (
												<option key={idx} value={noOfBedrooms.id}>
													{noOfBedrooms.value}
												</option>
											))
									: ''}
								</select>
							</div>
						</div>
						<div className="col-sm-6 col-md-3 pxp-content-side-search-form-col">
							<div className="form-group">
								<label htmlFor="pxp-p-filter-baths">Baths</label>
								<select 
								className="custom-select" 
								id="pxp-p-filter-baths"
								name='bathrooms'
								onChange={this.onChange}
								value={bathrooms}
								>
									{bathroomCount && bathroomCount.length
										? bathroomCount.map((noOfBathrooms, idx) => (
												<option key={idx} value={noOfBathrooms.id}>
													{noOfBathrooms.value}
												</option>
											))
									: ''}
								</select>
								
							</div>
						</div>
						<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
							<div className="form-group">
								<label htmlFor="pxp-p-filter-type">Type</label>
								<select 
								className="custom-select" 
								id="pxp-p-filter-type"
								name='propertyTypeId'
								onChange={this.onChange}
								value={propertyTypeId ? propertyTypeId : ""}
								>
								{propertyType && propertyType.length
										? propertyType.map((propertyTypeId, idx) => (
												<option key={idx} value={propertyTypeId.id}>
													{' '}
													{propertyTypeId.value}
												</option>
										  ))
										: ''}
								</select>

							</div>
						</div>
						<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
							<div className="form-group">
								<label htmlFor="pxp-p-filter-size-min">Size (sq ft)</label>
								<input 
								type="text" 
								className="form-control" 
								id="pxp-p-filter-size-min" 
								placeholder="Min"
								onChange={this.onChange}
								name='minSquareFeet'
								value={minSquareFeet === 0 ? "" : minSquareFeet}
								

								/>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
							<div className="form-group">
								<label htmlFor="pxp-p-filter-size-max" className="d-none d-sm-inline-block">&nbsp;</label>
								<input 
								type="text" 
								className="form-control" 
								id="pxp-p-filter-size-max" 
								placeholder="Max" 
								onChange={this.onChange}
								name='maxSquareFeet'
								value={maxSquareFeet === 0 ? "" : maxSquareFeet}
								/>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="mb-2">Amenities</label>
						<div className="row pxp-content-side-search-form-row">
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label>
											<input 
											type="checkbox" 
											name='internet'
											value={internet}
											onChange={this.onChange}
											/>
											<span className="fa fa-check"></span> Internet</label>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label><input 
										type="checkbox" 
										name='garage'
										value={garage}
										onChange={this.onChange}
										/><span className="fa fa-check"></span> Garage</label>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label><input 
										type="checkbox" 
										name='airConditioning'
										value={airConditioning}
										onChange={this.onChange}
										/><span className="fa fa-check"></span> Air Conditioning</label>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label><input 
										type="checkbox" 
										name='dishWasher'
										value={dishWasher}
										onChange={this.onChange}
										/><span className="fa fa-check"></span> Dishwasher</label>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label><input 
										type="checkbox" 
										name='disposal'
										value={disposal}
										onChange={this.onChange}
										/><span className="fa fa-check"></span> Disposal</label>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label><input 
										type="checkbox"
										value={balcony}
										name='balcony'
										onClick={this.onChange}
										/><span className="fa fa-check"></span> Balcony</label>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label><input 
										type="checkbox" 
										name='gym'
										value={gym}
										onChange={this.onChange} 
										/><span className="fa fa-check"></span> Gym</label>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label><input 
										type="checkbox" 
										name='playroom'
										value={playroom}
										onChange={this.onChange}
										/><span className="fa fa-check"></span> Playroom</label>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
								<div className="form-group">
									<div className="checkbox custom-checkbox">
										<label><input 
										type="checkbox" 
										value={bar}
										name='bar'
										onChange={this.onChange} 
										/><span className="fa fa-check"></span> Bar</label>
									</div>
								</div>
							</div>
						</div>
					</div>

					<button onClick={this.applyFilterHandler} type="button"  className="pxp-filter-btn">Apply Filters</button>
				</div>

				<div className='row pb-4'>
					<div className='col-sm-6'>
						<h2 className='pxp-content-side-h2'>
							{properties && properties.length} Properties
						</h2>
					</div>
					<div className="col-sm-6">
						<div className="pxp-sort-form form-inline float-right">
							<div className="form-group">
								<select className="custom-select" id="pxp-sort-results">
									<option value="">Default Sort</option>
									<option value="">Price (Lo-Hi)</option>
									<option value="">Price (Hi-Lo)</option>
									<option value="">Beds</option>
									<option value="">Baths</option>
									<option value="">Size</option>
								</select>
							</div>
							<div className="form-group d-flex">
								<Link to="#" role="button" className="pxp-map-toggle" onClick={(e)=>this.toggleFullWidth(e)}>
									<span className="far fa-map"></span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					{properties && properties.length
						? properties.map(
								(data, index) =>
									data.propertyStatusDesc === 'Approved' && (
										<div
											key={index}
											className='col-sm-12 col-md-6 col-xxxl-4'
										>
											<Link
												to={`/single-prop-${data && data.propertId}`}
												className='pxp-results-card-1 rounded-lg'
												data-prop={1}
											>
												<div
													id='card-carousel-1'
													className='carousel slide'
													data-ride='carousel'
													data-interval='false'
												>
													<div className='carousel-inner'>
														<div
															className='carousel-item active'
															style={{
																backgroundImage: `url(${
																	data &&
																	data.imageList &&
																	data.imageList.length &&
																	data.imageList[0].imageURL
																		? data.imageList[0].imageURL
																		: 'assets/images/ic_profile_placeholder.png'
																})`,
															}}
														/>
													</div>
												</div>
												<div className='pxp-results-card-1-gradient' />
												<div className='pxp-results-card-1-details'>
													<div className='pxp-results-card-1-details-title'>
														{data && data.adTitle}
													</div>
													<div className='pxp-results-card-1-details-price'>
														{data &&
															data.currency &&
															data.currency.symbol}
														{data && data.price
															? data.price.toLocaleString()
															: ''}
													</div>
													<span className='pxp-prop-card-1-details-features text-uppercase'>
														{' '}
														{data && data.noOfBedrooms} BD <span>|</span>{' '}
														{data && data.noOfBathrooms} BA <span>|</span>{' '}
														{data && data.finishedSqftArea} SF
													</span>
												</div>
											</Link>
										</div>
									)
						  )
						: ""}
				</div>
				{ pagesCount > 0 && <PropertiesPaginationRenderer pagesCount={pagesCount} paginationHandler={this.paginationHandler} currentPage={currentPage}  />}
			</div>
		</div>
	);
		}
		return (<React.Fragment>
			<div className='pxp-content pxp-full-height'>
				<div ref={this.toggleMapRef} className='pxp-map-side pxp-map-right pxp-half'>
					{googleMap}
					<Link to='#' className='pxp-list-toggle' ref={this.toggleDefaultContent} onClick={(e)=>this.toggleDefaultWidth(e)}>
						<span className='fa fa-list' />
					</Link>
				</div>
				{pageContent}
			</div>
		</React.Fragment>
	);
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page,
		property : state.property,
		auth: state.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetPropertyData: (data) => dispatch(getProperties(data)),
		onGetPropertiesByFilters: (data) => dispatch(getPropertiesByFilters(data)),
		onDropDownMenu: () => dispatch(dropDwonMenu()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Properties);
