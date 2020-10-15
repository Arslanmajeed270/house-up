import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_HOME_DATA
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	homePageData :{}
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
		case SET_HOME_DATA:
			return {
				homePageData : action.payload
			};
	default:
			return state;
	}
}