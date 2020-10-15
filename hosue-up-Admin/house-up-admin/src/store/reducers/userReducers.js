import {
	SET_VENDORS,
	SET_USERS,
	SET_SINGLE_VENDOR,
	SET_SINGLE_USER
} from '../actions/actionTypes';

const initialState = {
	vendorsData : [],
	usersData : [],
	singleVendorData : {},
	singleUserData : {}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_VENDORS:
			return {
				vendorsData: action.payload
			};
		case SET_USERS:
			return {
				usersData: action.payload
			};
		case SET_SINGLE_VENDOR:
			return {
				singleVendorData: action.payload
			};
		case SET_SINGLE_USER:
			return {
				singleUserData: action.payload
			};	
	default:
			return state;
	}
}