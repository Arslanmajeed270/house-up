import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_DASHBOARD,
	SET_VENDORS,
	SET_USERS,
	SET_SINGLE_VENDOR
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	dashboardData: [],
	vendorsData : [],
	usersData : [],
	singleVendorData : {}
};

export default function (state = initialState, action) {
	switch (action.type) {

		case PAGE_LOADING:
			return {
				...state,
				loading: true
			};

		case PAGE_LOADED:
			return {
				...state,
				loading: false
			};
		case SET_DASHBOARD:
			return {
				dashboardData: action.payload
			};
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
	default:
			return state;
	}
}