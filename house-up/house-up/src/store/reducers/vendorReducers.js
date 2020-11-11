import {
	SET_VENDORS,
	SET_SINGLE_VENDOR,
	SET_SINGLE_VENDORS_PROPERTIES
} from '../actions/actionTypes';

const initialState = {
	vendorsData:[],
	singleVendorData: {},
	singleVendorsPropertiesData: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_VENDORS:
			return {
				...state,
				vendorsData : action.payload
			};
		case SET_SINGLE_VENDOR:
			return{
				...state,
				singleVendorData : action.payload
			}
		case SET_SINGLE_VENDORS_PROPERTIES:
			return{
				...state,
				singleVendorsPropertiesData:action.payload
			}
	default:
			return state;
	}
}