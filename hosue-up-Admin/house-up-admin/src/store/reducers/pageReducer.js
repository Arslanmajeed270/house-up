import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_DASHBOARD,
	SET_VENDORS,
	SET_USERS
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	dashboardData: [],
	vendorsData : [],
	usersData : []
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
	default:
			return state;
	}
}