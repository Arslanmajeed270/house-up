import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Nav } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import cloneDeep from 'lodash/cloneDeep';

import PropertyPlan from '../../../components/Popups/propertyPlan';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class form3 extends Component {
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
		};
	}
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
		const { form3Data } = this.props;
		this.setState({
			address: form3Data.address ? form3Data.address : '',
			longitude: form3Data.longitude ? form3Data.longitude : 78.68576,
			latitude: form3Data.latitude ? form3Data.latitude : 32.57698,
			state: form3Data.state ? form3Data.state : '',
			city: form3Data.city ? form3Data.city : '',
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
		const dataForm3 = {
			city: city,
			address: address,
			state: state,
			images: images,
			longitude: longitude,
			latitude: latitude,
		};
		console.log(dataForm3);
		if (this.state.images.length !== 0 && this.state.images.length >= 5) {
			this.props.form3DataHandler(dataForm3);
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
								<Nav variant='pills' defaultActiveKey='/3'>
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
							<div className='col-md-2'>
								<div className='form-group'>
									<select
										style={{ borderRadius: '0px' }}
										className='custom-select'
										placeholder='City'
										name='state'
										value={state}
										onChange={this.onChange}
									>
										<option>Select Province</option>
										{states && states.length
											? states.map((province, idx) => (
													<option key={idx} value={province.name}>
														{' '}
														{province.name}
													</option>
											  ))
											: ''}
									</select>
								</div>
							</div>
							<div className='col-md-2'>
								<div className='form-group'>
									<select
										style={{ borderRadius: '0px' }}
										className='custom-select'
										placeholder='Prov/State'
										name='city'
										required
										value={city}
										onChange={this.onChange}
									>
										<option>Select City</option>
										{cities && cities.length
											? cities.map((city, idx) => (
													<option key={idx} value={city.name}>
														{' '}
														{city.name}
													</option>
											  ))
											: ''}
									</select>
								</div>
							</div>
							<div className='col-md-8'>
								<div className='form-group'>
									<input
										type='text'
										style={{ width: '88%' }}
										placeholder='Enter an address'
										className='input-feilds-property'
										name='address'
										value={address}
										onChange={this.onChange}
									/>
									<button className='btn btn-primary form-three-search'>
										Search
									</button>
								</div>
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
							<div className='col-md-6'>
								<div className='btn-div-prev'>
									<button
										type='submit'
										className='btn btn-lg btn-primary btn-property'
										onClick={() => this.props.formShowHandler(1)}
									>
										Prevsious
									</button>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='btn-div'>
									<button
										type='submit'
										className='btn btn-lg btn-primary btn-property'
									>
										Post Property
									</button>
								</div>
							</div>
							{this.state.propertyPlanState ? (
								<PropertyPlan
									show={this.state.propertyPlanState}
									closeCodelHanlder={this.propertyPlanStateHandler}
								/>
							) : (
								''
							)}
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

export default connect(mapStateToProps, mapDispatchToProps)(form3);
