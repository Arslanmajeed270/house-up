import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_DASHBOARD
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	dashboardData: []
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
	default:
			return state;
	}
}