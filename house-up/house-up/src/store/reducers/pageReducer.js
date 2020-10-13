import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_VENDORS
} from '../actions/actionTypes';

const initialState = {
	loading: false
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
		case SET_VENDORS:
			return {
				vendorsData : action.payload
			};
			
	default:
			return state;
	}
}