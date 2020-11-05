import {
	PAGE_LOADING,
	PAGE_LOADED,
	SET_INDEX_DATA,
	GET_COUNTRIES,
	GET_PROFESSIONS,
	SHOW_POP_UP,
	HIDE_POP_UP,
	SET_HOME_DATA,
	FOLLOW_UNFOLLOW_PROFESSIONAL,
	ADD_LIKE,
	SET_CURRENT_LOCATION,
	// ADD_COMMENTS
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	isLike : false,
	indexPageData :{},
	countries: [],
	professionList: [],
	showPopUp:false,
	homePageData:{},
	currentLocation:{
		country: "",
		province: "",
		city: ""
	}
	// comments
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
				...state,
				indexPageData : action.payload
			};
		case GET_COUNTRIES:
			return {
				...state,
				countries : action.payload
		};
		case GET_PROFESSIONS:
			return {
				...state,
				professionList : action.payload
		};
		case SHOW_POP_UP:
			return {
				...state,
				showPopUp: true
			}
		case HIDE_POP_UP:
			return {
				...state,	
				showPopUp:false

			}
		case SET_HOME_DATA:
			return{
				...state,
				homePageData:action.payload
			}
			
		case FOLLOW_UNFOLLOW_PROFESSIONAL: {
			let indexPageData = Object.assign({}, state.indexPageData);
			if( indexPageData && indexPageData.vendorPostPropertiesList && 
				indexPageData.vendorPostPropertiesList.length >= action.payload.index ){
					indexPageData.vendorPostPropertiesList[action.payload.index].object.user.isUserFollowedByLoggedInUser = action.payload.like;
			} 
			return {
				...state,
				indexPageData
			};
		}
		case ADD_LIKE: {
			console.log("checking action.payload.index: ", action.payload.index);
			let indexPageData = Object.assign({}, state.indexPageData);
			if( indexPageData && indexPageData.vendorPostPropertiesList && 
				indexPageData.vendorPostPropertiesList.length >= action.payload.index ){
					console.log("checking action.payload.category:", action.payload.category);
					if(action.payload.category === "Property"){
						console.log("i am into property if");
						indexPageData.vendorPostPropertiesList[action.payload.index].object.isPropertyLikedByLoggedInUser = action.payload.follow;
						console.log("checking indexPageData: ", indexPageData);
					}
					if(action.payload.category === "Post"){
						console.log("i am into post else");
						indexPageData.vendorPostPropertiesList[action.payload.index].object.isPostLikedByLoggedInUser = action.payload.follow;
					}
			} 
			return{
				...state,
				indexPageData
			};
		}
	case SET_CURRENT_LOCATION:{
		let currentLocation = Object.assign({}, action.payload);
		return {
			...state,
			currentLocation: currentLocation
		};
		}
	default:
			return state;
	}
}