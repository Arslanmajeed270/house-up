import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Form1 from './Add Property/form1';
import Form2 from './Add Property/form2';
import Form3 from './Add Property/form3';
import Form4 from './Add Property/form4';
import Spinner from '../../components/common/Spinner';

import * as actionTypes from '../../store/actions/actionTypes';

import { Alert } from 'react-bootstrap';

class addProperty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formShow: 0,
			dropDownData: {},
			form1Data: {},
			form2Data: {},
			form3Data: {},
			form4Data: {},
			loading: false,
			user:{},
			error: {},
			currentLocation: {},
		};
	}

	form1DataHandler = (form1Data) => {
		this.setState({ form1Data: form1Data });
	};

	form2DataHandler = (form2Data) => {
		this.setState({ form2Data: form2Data });
	};
	form3DataHandler = (form3Data) => {
		console.log('from 3 data handler', form3Data);
		this.setState({ form3Data: form3Data });
	};
	form4DataHandler = (form4Data) => {
		console.log('from 4 data handler', form4Data);
		this.setState({ form4Data: form4Data }, () => this.addProperty(form4Data));
	};

	static getDerivedStateFromProps(props, state) {
		const errors = props.errors;
		const property = props.property;
		const page = props.page;
		const auth = props.auth;

		let stateChanged = false;
		let changedState = {};

		if (
			property &&
			JSON.stringify(state.dropDownData) !==
				JSON.stringify(property.dropDownData)
		) {
			changedState.dropDownData = property.dropDownData;
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

		if (
			page &&
			page.currentLocation &&
			JSON.stringify(state.currentLocation) !==
				JSON.stringify(page.currentLocation)
		) {
			changedState.currentLocation = page.currentLocation;
			stateChanged = true;
		}

		if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
			changedState.errors = errors;
			stateChanged = true;
		}
		if (
			property &&
			JSON.stringify(state.loading) !== JSON.stringify(property.loading)
		) {
			changedState.loading = property.loading;
			stateChanged = true;
		}

		if (stateChanged) {
			return changedState;
		}
		return null;
	}

	componentDidMount() {
		this.props.onDropDwonMenu();
	}

	addProperty = () => {
		console.log('add Property Function');
		const form1Data = this.state.form1Data;
		const form2Data = this.state.form2Data;
		const form3Data = this.state.form3Data;
		const form4Data = this.state.form4Data;

		const formData = {
			currencyId: form2Data.currencyId ? form2Data.currencyId : 2,
			description: form2Data.description ? form2Data.description : '',
			contactEmail: form2Data.contactEmail ? form2Data.contactEmail : '',
			adTitle: form2Data.adTitle ? form2Data.adTitle : '',
			contactName: form2Data.contactName ? form2Data.contactName : '',
			phoneNo: this.state.user.msisdn ? this.state.user.msisdn : '',
			contactNumber: form2Data.contactNumber ? form2Data.contactNumber : 0,
			userId: form2Data.userId ? form2Data.userId : 0,
			price: form2Data.price ? form2Data.price : 0,

			yearBuilt: form3Data.yearBuilt ? form3Data.yearBuilt : 0,
			balcony: form3Data.balcony ? form3Data.balcony : false,
			disposal: form3Data.disposal ? form3Data.disposal : false,
			finishedSqftArea: form3Data.finishedSqftArea
				? form3Data.finishedSqftArea
				: 0,
			lotDimensionLength: form3Data.lotDimensionLength
				? form3Data.lotDimensionLength
				: 0,
			noOfBathrooms: form3Data.noOfBathrooms ? form3Data.noOfBathrooms : 1,
			basementId: form3Data.basementId ? form3Data.basementId : 1,
			waterSourceID: form3Data.waterSourceID ? form3Data.waterSourceID : 1,
			storeys: form3Data.storeys ? form3Data.storeys : 1,
			propertyTypeId: form3Data.propertyTypeId ? form3Data.propertyTypeId : 1,
			rentalListingYN: form3Data.rentalListingYN
				? form3Data.rentalListingYN
				: 'Y',
			yearRoofInstalled: form3Data.yearRoofInstalled
				? form3Data.yearRoofInstalled
				: 0,
			lotDimensionWidth: form3Data.lotDimensionWidth
				? form3Data.lotDimensionWidth
				: 0,
			parkingSpaces: form3Data.parkingSpaces ? form3Data.parkingSpaces : 1,
			ac: form3Data.ac ? form3Data.ac : false,
			garageId: form3Data.garageId ? form3Data.garageId : 1,
			dishWasher: form3Data.dishWasher ? form3Data.dishWasher : false,
			garage: form3Data.garage ? form3Data.garage : false,
			noOfBedrooms: form3Data.noOfBedrooms ? form3Data.noOfBedrooms : 1,
			playroom: form3Data.playroom ? form3Data.playroom : false,
			bar: form3Data.bar ? form3Data.bar : false,
			primaryHeatingFuelId: form3Data.primaryHeatingFuelId
				? form3Data.primaryHeatingFuelId
				: 1,
			internet: form3Data.internet ? form3Data.internet : false,
			buildingTypeId: form3Data.buildingTypeId ? form3Data.buildingTypeId : 1,
			lotTotalArea: form3Data.lotTotalArea ? form3Data.lotTotalArea : 0,
			gym: form3Data.gym ? form3Data.gym : false,
			areaTypeId: form3Data.areaTypeId ? form3Data.areaTypeId : 1,
			yearFurnaceBuilt: form3Data.yearFurnaceBuilt
				? form3Data.yearFurnaceBuilt
				: 0,
			condoFee: `${form3Data.condoFee ? form3Data.condoFee : 0}`,

			latitude: form1Data.latitude ? form1Data.latitude : 0,
			longitude: form1Data.longitude ? form1Data.longitude : 0,
			city: form1Data.city ? form1Data.city : '',
			address: form1Data.address ? form1Data.address : '',
			propertyImages: form1Data.images,
			cityId: 0,
			amenites: '',
			channel: 'web',
			action: 'add',
			propertyId: 0,
			country: 'Canada',
			state: form1Data.state ? form1Data.state : 'Ontario',

			propertyFeeId: form4Data.propertyFeeId ? form4Data.propertyFeeId : 1,
			packageRenewal: form4Data.packageRenewal
				? form4Data.packageRenewal
				: false,
		};

		console.log('add Property Data ', formData);

		this.props.onAddProperty(formData, this.props.history, this.props.closeCodelHanlder);
	};

	formShowHandler = (num) => {
		this.setState({
			formShow: num,
		});
	};

	render() {
		const { dropDownData, loading, errors, form3Data } = this.state;

		const data = {
			dropDownData: dropDownData,
			form4DataHandler: this.form4DataHandler,
		};
		console.log('checking history: ', this.props.history);
		let pageContent = '';

		if (loading) {
			pageContent = <Spinner />;
		} else {
			pageContent = '';
		}

		return (
			<React.Fragment>
				{errors && errors.message && (
					<Alert variant='danger' style={{ marginTop: '15px' }}>
						<strong>Error!</strong> {errors.message}
					</Alert>
				)}
				{this.state.formShow === 0 && (
					<Form1
						dropDownData={dropDownData}
						formShowHandler={(num) => this.formShowHandler(num)}
						form1DataHandler={this.form1DataHandler}
						modelHanlder={this.props.modelHanlder}
						form1Data={this.state.form1Data}
					/>
				)}
				{this.state.formShow === 1 && (
					<Form2
						dropDownData={dropDownData}
						formShowHandler={(num) => this.formShowHandler(num)}
						form2DataHandler={this.form2DataHandler}
						form2Data={this.state.form2Data}
					/>
				)}
				{this.state.formShow === 2 && (
					<Form3
						dropDownData={dropDownData}
						formShowHandler={(num) => this.formShowHandler(num)}
						form3DataHandler={this.form3DataHandler}
						form3Data={form3Data}
						modelHanlder={this.props.modelHanlder}
					/>
				)}
				{this.state.formShow === 3 &&
					<Form4 
						dropDownData={dropDownData}
						formShowHandler={(num) => this.formShowHandler(num)}
						form4DataHandler={this.form4DataHandler}
						form4Data={this.state.form4Data}
					/>
				}
				{pageContent}
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		property: state.property,
		errors: state.errors,
		page: state.page,
		auth: state.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDropDwonMenu: () => dispatch(actions.dropDwonMenu()),
		onAddProperty: (data, history, closeCodelHanlder) =>
			dispatch(actions.addProperty(data, history, closeCodelHanlder)),
		onErrorSet: (msg) =>
			dispatch({ type: actionTypes.SET_ERRORS, payload: { message: msg } }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(addProperty);
