import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_INDEX_DATA,
	GET_COUNTRIES,
	GET_PROFESSIONS
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	indexPageData :{},
	countries: [],
	professionList: []
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
		case GET_COUNTRIES:
			return {
				countries : action.payload
		};
		case GET_PROFESSIONS:
			return {
				professionList : action.payload
		};
	default:
			return state;
	}
}