import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_INDEX_DATA,
	GET_COUNTRIES,
	GET_PROFESSIONS,
	ADD_LIKE,
	SHOW_POP_UP,
	HIDE_POP_UP,
	SET_HOME_DATA,s
	FOLLOW_UNFOLLOW_PROFESSIONAL
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	isLike : false,
	indexPageData :{},
	countries: [],
	professionList: [],
	showPopUp:false,
	homePageData:{}
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
			return {	showPopUp:false

			}
		case SET_HOME_DATA:
			return{
				homePageData:action.payload
			}
			
		case FOLLOW_UNFOLLOW_PROFESSIONAL: {
			let indexPageData = Object.assign({}, state.indexPageData);
			if( indexPageData && indexPageData.vendorPostPropertiesList && 
				indexPageData.vendorPostPropertiesList.length >= action.payload.index ){
					indexPageData.vendorPostPropertiesList[action.payload.index].object.user.isUserFollowedByLoggedInUser = action.payload.follow;
			} 
			return {indexPageData};
		}
	default:
			return state;
	}
}