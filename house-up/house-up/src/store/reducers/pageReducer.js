import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_INDEX_DATA
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	indexPageData :{}
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
		case SET_INDEX_DATA:
			return {
				indexPageData : action.payload
			};
	default:
			return state;
	}
}