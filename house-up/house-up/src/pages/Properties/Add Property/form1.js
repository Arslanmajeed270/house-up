import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Nav } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete ,  {
  geocodeByAddress,
  geocodeByPlaceId,
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
			longitude: 78.68576,
			latitude: 32.57698,
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
			address:''
		};
	}


	
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
		this.setState({ address });
		console.log('address', address)

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

	static getDerivedStateFromProps(props, state) {
		const errors = props.errors;
		const page = props.page;
		console.log('checking page data ', page);
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
		});
		this.props.onGetCountries();
	}

	onDrop = (files) => {
		console.log('checking images: ', files);
		this.setState({ images: files });
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
		const images = this.state.images;
		if (images && images.length > index) {
			const filteredImages = images.filter((image, idx) => idx !== index);
			this.setState({
				images: filteredImages,
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
			console.log('checking e.target.value in state: ', e.target.value);
			this.setState({
				[e.target.name]: e.target.value,
				cities: cities.cities,
			});
		} else if (e.target.name === 'images') {
			const images = this.state.images;
			for (let i = 0; i < e.target.files.length; i++) {
				images.push(e.target.files[i]);
			}
			this.setState({
				images: images,
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
				finalImages.push(cb);
				console.log('checking result: ', cb);
				if (i === images.length - 1) {
					this.addPropertyHandler(finalImages);
				}
			});
		}
	};

	addPropertyHandler = (images) => {
		const { city, address, state, longitude, latitude } = this.state;
		const dataform1 = {
			city: city,
			address: address,
			state: state,
			images: images,
			longitude: longitude,
			latitude: latitude,
		};
		console.log(dataform1);
		if (this.state.images.length !== 0 && this.state.images.length >= 5) {
			this.props.form1DataHandler(dataform1);
		this.props.formShowHandler(1);
		} else {
			console.log('error picture must be 5 or more');
			alert('Property Images Must be 5 or more');
		}
	};
	onSubmit = (e) => {
		e.preventDefault();
		console.log('before');
		this.imagesHandler(this.state.images);
	};
	render() {
		const {
			address,
			city,
			googleMapKey,
			states,
			cities,
			state,
			images,
		} = this.state;

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
								</Nav>
							</div>
						</div>
						<div className='row'>
							<PlacesAutocomplete
								value={this.state.address}
								onChange={this.handleChange}
								onSelect={this.handleSelect}
							>
								{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
									<div>
										<input
											{...getInputProps({
												placeholder: 'Search Places ...',
												className: 'location-search-input',
											})}
										/>
										<div className="autocomplete-dropdown-container">
											{loading && <div>Loading...</div>}
											{suggestions.map(suggestion => {
												const className = suggestion.active
													? 'suggestion-item--active'
													: 'suggestion-item';
												// inline style for demonstration purpose
												const style = suggestion.active
													? { backgroundColor: '#fafafa', cursor: 'pointer' }
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
										marginTop: '15px',
										backgroundColor: '#00B0E9',
										borderRadius: '0px',
										border: 'none',
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
												{images && images.length
													? images.map((data, index) => (
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
													name='images'
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
									style={{ color: '#8E8E93', marginTop: '40px' }}
								>
									Upload a maximum of 25 photos. Click on a picture to select a
									cover photo, otherwise the first picture will be used.
								</h6>
							</div>
						</div>
						<div className='row'>
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
