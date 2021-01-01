import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Nav } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import cloneDeep from 'lodash/cloneDeep';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class form1 extends Component {
	constructor() {
		super();

		this.state = {
			address: '',
			images: [],
			previewImages: [],
			latitude: 32.57698,
			longitude: 78.68576,
			googleMapKey:
				process.env.REACT_APP_GOOGLE_MAP_KEY |
				'AIzaSyCMNT51gPtbeVnUWr4j56UzuQqMioSuwAk',
			propertyPlanState: false,
			errors: {},
			loading: false,
			country: '',
			state: '',
			city: '',
			countries: [],
			states: [],
			cities: [],
		};
	}

	handleChange = (address) => {
		this.setState({ address });
	};

	searchCity = (address, cities) => {
		for (let i = 0; i < cities.length; i++) {
			if (cities[i].name === address) {
				return cities[i];
			}
		}
	};

	handleSelect = (address) => {
		const { cities } = this.state;
		const add1 = address.split(', ');
		const cityName = add1[1];
		const city = this.searchCity(cityName, cities);

		if (city) {
			this.setState({ address: address });
		} else {
			this.props.modelHanlder(
				'alertPopup',
				'We are currently available in cities of Ontario Canada.'
			);
			// alert("Sorry! We are currently available in cities of Ontario Canada.")
			this.setState({ address: '' });
		}

		geocodeByAddress(address)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => console.log('Success', latLng))
			.catch((error) => console.error('Error', error));
	};

	static getDerivedStateFromProps(props, state) {
		const errors = props.errors;
		const page = props.page;
		let stateChanged = false;
		let changedState = {};

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
			let cities = [];
			cities = cloneDeep(changedState.states[0]);
			changedState.cities = cities.cities;
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
		const { form1Data } = this.props;
		this.setState({
			address: form1Data.address ? form1Data.address : '',
			longitude: form1Data.longitude ? form1Data.longitude : 78.68576,
			latitude: form1Data.latitude ? form1Data.latitude : 32.57698,
			state: form1Data.state ? form1Data.state : '',
			city: form1Data.city ? form1Data.city : '',
			image: form1Data ? form1Data.image : '',
		});
		if (!this.state.countries.length) {
			this.props.onGetCountries();
		}
	}

	onDrop = (files) => {
		this.setState({ previewImages: files });
	};

	getBase64(file, cb) {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			cb(reader.result);
		};
		reader.onerror = function (error) {
			console.log('Error: ', error);
		};
	}

	imageRemoveHandler = (index) => {
		const images = this.state.previewImages;
		if (images && images.length > index) {
			const filteredImages = images.filter((image, idx) => idx !== index);
			this.setState({
				previewImages: filteredImages,
			});
		}
	};

	onChange = (e) => {
		if (e.target.name === 'country') {
			let index = 0;
			let states = [];
			if (e.target.value !== '') {
				index =
					this.state.countries &&
					this.state.countries.findIndex((x) => `${x.name}` === e.target.value);
				states = cloneDeep(this.state.countries[index]);
			}
			this.setState({
				[e.target.name]: e.target.value,
				states: states.states,
			});
		} else if (e.target.name === 'state') {
			let ind = 0;
			let cities = [];
			if (e.target.value !== '') {
				ind =
					this.state.states &&
					this.state.states.findIndex((x) => `${x.name}` === e.target.value);
				cities = cloneDeep(this.state.states[ind]);
			}
			this.setState({
				[e.target.name]: e.target.value,
				cities: cities.cities,
			});
		} else if (e.target.name === 'previewImages') {
			const images = this.state.previewImages;
			for (let i = 0; i < e.target.files.length; i++) {
				images.push(e.target.files[i]);
			}
			this.setState({
				previewImages: images,
			});
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33,
		},
		zoom: 11,
	};
	propertyPlanStateHandler = () => {
		this.setState({
			propertyPlanState: !this.state.propertyPlanState,
		});
	};
	imagesHandler = (images) => {
		let finalImages = [];
		for (let i = 0; i < images.length; i++) {
			this.getBase64(images[i], (cb) => {
				let image = cb.split(',')[1];
				finalImages.push({ image: image });
				if (i === images.length - 1) {
					this.addPropertyHandler(finalImages);
				}
			});
		}
	};

	addPropertyHandler = (images) => {
		const { address, state, longitude, latitude, previewImages } = this.state;
		let updateCity = address ? address.split(', ')[1] : 'Toronto';
		const dataform1 = {
			city: updateCity,
			address: address,
			state: state,
			images: images,
			previewImages: previewImages,
			latitude: latitude,
			longitude: longitude,
		};
		if (
			this.state.previewImages.length !== 0 &&
			this.state.previewImages.length >= 5
		) {
			this.props.form1DataHandler(dataform1);
			this.props.formShowHandler(1);
		} else {
			alert('Property Images Must be 5 or more');
		}
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.imagesHandler(this.state.previewImages);
	};
	render() {
		const { googleMapKey, previewImages, states, cities, address } = this.state;
		return (
			<React.Fragment>
				<form onSubmit={this.onSubmit}>
					<div
						className='add-property-conatiner'
						style={{ backgroundColor: '#F5F5F5' }}
					>
						<div className='row border-property'>
							<div className='col-md-12'>
								<h1 className='titles-property'>List your property</h1>
								<p className='pairing-industry'>
									Pairing the industry's top technology with unsurpassed local
									expertise.
								</p>
								<Nav variant='pills' defaultActiveKey='/1'>
									<Nav.Item>
										<Nav.Link
											eventKey='/1'
											className='tabs'
											onClick={() => this.props.formShowHandler(0)}
										>
											Step 1
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey='/2'
											className='tabs'
											onClick={() => this.props.formShowHandler(1)}
										>
											Step 2
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey='/3'
											className='tabs'
											onClick={() => this.props.formShowHandler(2)}
										>
											Step 3
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey='/4'
											className='tabs'
											onClick={() => this.props.formShowHandler(3)}
										>
											Step 4
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-12'>
								<PlacesAutocomplete
									value={this.state.address}
									onChange={this.handleChange}
									onSelect={this.handleSelect}
								>
									{({
										getInputProps,
										suggestions,
										getSuggestionItemProps,
										loading,
									}) => (
										<div className='form-group'>
											<input
												{...getInputProps({
													placeholder: 'Search Places ...',
													className:
														'location-search-input input-feilds-property',
												})}
											/>
											<div className='autocomplete-dropdown-container'>
												{loading && <div>Loading...</div>}
												{suggestions.map((suggestion) => {
													const className = suggestion.active
														? 'suggestion-item--active'
														: 'suggestion-item';
													// inline style for demonstration purpose
													const style = suggestion.active
														? {
																position: 'relative',
																backgroundColor: '#fafafa',
																cursor: 'pointer',
														  }
														: { backgroundColor: '#ffffff', cursor: 'pointer' };
													return (
														<div
															{...getSuggestionItemProps(suggestion, {
																className,
																style,
															})}
														>
															<span>{suggestion.description}</span>
														</div>
													);
												})}
											</div>
										</div>
									)}
								</PlacesAutocomplete>
							</div>
							<div
								className='col-md-12'
								style={{ height: '300px', width: '100%' }}
							>
								<GoogleMapReact
									bootstrapURLKeys={{ key: googleMapKey }}
									defaultCenter={this.props.center}
									defaultZoom={this.props.zoom}
								>
									<AnyReactComponent
										lat={59.955413}
										lng={30.337844}
										text='My Marker'
									/>
								</GoogleMapReact>
							</div>
						</div>
						<div className='row border-property'>
							<h1
								className='col-md-6 titles-property'
								style={{ fontFamily: 'light', marginTop: '50px' }}
							>
								Property photos
							</h1>
							<div className='col-md-6' style={{ textAlign: 'right' }}>
								<label
									className='btn btn-lg btn-primary'
									htmlFor='pictures'
									style={{
										marginTop: '50px',
										backgroundColor: '#00B0E9',
										borderRadius: '0px',
										border: 'none',
										fontSize: '14px',
									}}
								>
									Upload images
								</label>
							</div>
							<h6 className='col-md-12 text-danger titles-property'>
								WARNING: Any images with HouseUp.ca watermarks are a violation
								of copyright. If these images are uploaded your listing will be
								removed and your account may be suspended.
							</h6>
							<div className='col-12'>
								<Dropzone onDrop={this.onDrop} className='drop-zone'>
									{({ getRootProps, getInputProps }) => (
										<section className='container drop-zone'>
											<aside>
												{previewImages && previewImages.length
													? previewImages.map((data, index) => (
															<img
																key={index}
																id='data'
																onClick={() => this.imageRemoveHandler(index)}
																src={
																	data
																		? URL.createObjectURL(data)
																		: require('../../../assets/images/ic_profile_placeholder.png')
																}
																alt=''
																style={{ height: '98px' }}
															/>
													  ))
													: ''}
											</aside>
											<div
												{...getRootProps({
													className: 'dropzone , drop-zone-inner',
												})}
											>
												<input
													type='file'
													{...getInputProps()}
													id='pictures'
													name='previewImages'
													onChange={this.onChange}
												/>
												<p>
													Drag 'n' drop some files here, or click to select
													files
												</p>
											</div>
										</section>
									)}
								</Dropzone>

								<h6
									className='titles-property'
									style={{
										color: '#8E8E93',
										marginTop: '8px',
										fontSize: '12px',
									}}
								>
									Upload a maximum of 25 photos. Click on a picture to select a
									cover photo, otherwise the first picture will be used.
								</h6>
							</div>
						</div>
						<div className='row mb-40'>
							<div className='col-md-6' />
							<div className='col-md-6'>
								<div className='btn-div'>
									<button
										type='submit'
										className='btn btn-lg btn-primary btn-property'
									>
										Next
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		page: state.page,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetCountries: () => dispatch(actions.GetCountries()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(form1);
