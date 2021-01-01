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
	SET_DEFAULT_ALL_CARDS,
	LOAD_ALL_CARDS,
	SET_PACKAGE_DETAILS,
	ADD_COMMENTS,
} from '../actions/actionTypes';

const initialState = {
	loading: false,
	isLike: false,
	indexPageData: {},
	countries: [],
	professionList: [],
	showPopUp: false,
	homePageData: {},
	currentLocation: {
		country: '',
		province: '',
		city: '',
		packageDetails: [],
	},
	allCards: [],
	// comments
};

export default function (state = initialState, action) {
	switch (action.type) {
		case PAGE_LOADING:
			return {
				...state,
				loading: true,
			};
		case PAGE_LOADED:
			return {
				...state,
				loading: false,
			};
		case SET_INDEX_DATA:
			return {
				...state,
				indexPageData: action.payload,
			};
		case GET_COUNTRIES:
			return {
				...state,
				countries: action.payload,
			};
		case GET_PROFESSIONS:
			return {
				...state,
				professionList: action.payload,
			};
		case SHOW_POP_UP:
			return {
				...state,
				showPopUp: true,
			};
		case HIDE_POP_UP:
			return {
				...state,
				showPopUp: false,
			};
		case SET_HOME_DATA:
			return {
				...state,
				homePageData: action.payload,
			};

		case LOAD_ALL_CARDS:
			return {
				...state,
				allCards: action.payload,
			};
		case SET_DEFAULT_ALL_CARDS:
			return {
				...state,
				allCards: [],
			};

		case FOLLOW_UNFOLLOW_PROFESSIONAL: {
			let indexPageData = Object.assign({}, state.indexPageData);
			if (
				indexPageData &&
				indexPageData.vendorPostPropertiesList &&
				indexPageData.vendorPostPropertiesList.length >= action.payload.index
			) {
				if (action.payload.type === 'PostandProperty') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.user.isUserFollowedByLoggedInUser = action.payload.follow;
				}
				if (action.payload.type === 'Vendors') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.isUserFollowedByLoggedInUser = action.payload.follow;
				}
				if (action.payload.type === 'VendorsRight') {
					indexPageData.vendors[
						action.payload.index
					].isUserFollowedByLoggedInUser = action.payload.follow;
				}
			}
			return {
				...state,
				indexPageData,
			};
		}
		case ADD_LIKE: {
			let indexPageData = Object.assign({}, state.indexPageData);
			if (
				indexPageData &&
				indexPageData.vendorPostPropertiesList &&
				indexPageData.vendorPostPropertiesList.length >= action.payload.index
			) {
				if (action.payload.category === 'Property') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.isPropertyLikedByLoggedInUser = action.payload.follow;
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.propertyLikes.push({ userName: action.payload.userName });
				}
				if (action.payload.category === 'Post') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.isPostLikedByLoggedInUser = action.payload.follow;
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.postLikes.push({ userName: action.payload.userName });
				}
				if (action.payload.category === 'Vendor') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.isUserLikedByLoggedInUser = action.payload.follow;
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.vendorLikes.push({ userName: action.payload.userName });
				}
			}
			return {
				...state,
				indexPageData,
			};
		}
		case ADD_COMMENTS: {
			let indexPageData = Object.assign({}, state.indexPageData);
			if (
				indexPageData &&
				indexPageData.vendorPostPropertiesList &&
				indexPageData.vendorPostPropertiesList.length >= action.payload.index
			) {
				
				if (action.payload.category === 'Property') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.propertyComments.push({
						userName: action.payload.userName,
						userFullName: action.payload.userFullName,	
						commentText: action.payload.comment,
						profilePictureUrl :  action.payload.profilePictureUrl,
						createDateTime : action.payload.createDateTime
					});
				}
				if (action.payload.category === 'Post') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.postComments.push({
						userName: action.payload.userName,
						userFullName: action.payload.userFullName,	
						commentText: action.payload.comment,
						profilePictureUrl :  action.payload.profilePictureUrl,
						createDateTime : action.payload.createDateTime
					});
				}
				if (action.payload.category === 'Vendor') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.vendorComments.push({
						userFullName: action.payload.userFullName,
						userName: action.payload.userName,
						profilePictureUrl :  action.payload.profilePictureUrl,
						commentText: action.payload.comment,
						createDateTime : action.payload.createDateTime
					});
				}
			}
			return {
				...state,
				indexPageData,
			};
		}
		case SET_CURRENT_LOCATION: {
			let currentLocation = Object.assign({}, action.payload);
			return {
				...state,
				currentLocation: currentLocation,
			};
		}
		case SET_PACKAGE_DETAILS:
			return {
				...state,
				packageDetails: action.payload,
			};
		default:
			return state;
	}
}
