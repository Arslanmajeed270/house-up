import {
	SET_VENDORS,
	SET_SINGLE_VENDOR
} from '../actions/actionTypes';

const initialState = {
	vendorsData:[],
	singleVendorData: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_VENDORS:
			return {
				vendorsData : action.payload
			};
		case SET_SINGLE_VENDOR:
			return{
				singleVendorData : action.payload
			}
	default:
			return state;
	}
}