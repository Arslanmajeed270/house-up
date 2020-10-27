import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_INDEX_DATA,
	GET_COUNTRIES,
	GET_PROFESSIONS,
	ADD_LIKE,
	SHOW_POP_UP,
	HIDE_POP_UP
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	isLike : false,
	indexPageData :{},
	countries: [],
	professionList: [],
	showPopUp:false
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
		case ADD_LIKE:
			return{

			}
		case SHOW_POP_UP:
			return {
				showPopUp: true
			}
		case HIDE_POP_UP:
			return {
				showPopUp:false
			}
	default:
			return state;
	}
}