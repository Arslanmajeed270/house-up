import {
	SET_VENDORS,
	SET_SINGLE_VENDOR,
	UPDATE_VENDOR_STATUS
} from '../actions/actionTypes';

const initialState = {
	vendorsData : {
		totalPages: 0,
		vendors: []
	},
	singleVendorData : {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_VENDORS:
			return {
				...state,
				vendorsData: action.payload
			};
		case SET_SINGLE_VENDOR:
			return {
				...state,
				singleVendorData: action.payload
			};
		case UPDATE_VENDOR_STATUS:{
			const updateVendors = state.vendorsData.vendors;
			updateVendors.map( vendor => {
				if( vendor.userId === action.payload.userId ){
					vendor.userStatusDesc = action.payload.userStatusDesc
				}
				return vendor;
			} );
			return {
				...state,
				vendorsData : {
					vendors: updateVendors,
					...state.vendorsData
				},
			};
		}
	default:
			return state;
	}
}