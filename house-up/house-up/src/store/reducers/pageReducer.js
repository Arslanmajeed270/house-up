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

	// ADD_COMMENTS
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
				console.log('checking action in FOLLOW_UNFOLLOW_PROFESSIONAL', action);
				if (action.payload.type === 'PostandProperty') {
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.user.isUserFollowedByLoggedInUser = action.payload.follow;
				}
				if (action.payload.type === 'Vendors') {
					console.log('i am into Vendors');
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
			console.log('checking action.payload.index: ', action.payload.index);
			let indexPageData = Object.assign({}, state.indexPageData);
			if (
				indexPageData &&
				indexPageData.vendorPostPropertiesList &&
				indexPageData.vendorPostPropertiesList.length >= action.payload.index
			) {
				console.log(
					'checking action.payload.category:',
					action.payload.category
				);
				if (action.payload.category === 'Property') {
					console.log('i am into property if');
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.isPropertyLikedByLoggedInUser = action.payload.follow;
					console.log('checking indexPageData: ', indexPageData);
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.propertyLikes.push({ userName: action.payload.userName });
				}
				if (action.payload.category === 'Post') {
					console.log('i am into post else');
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.isPostLikedByLoggedInUser = action.payload.follow;
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.postLikes.push({ userName: action.payload.userName });
				}
				if (action.payload.category === 'Vendor') {
					console.log('i am into post else');
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
			console.log('checking action.payload.index: ', action.payload.index);
			let indexPageData = Object.assign({}, state.indexPageData);
			if (
				indexPageData &&
				indexPageData.vendorPostPropertiesList &&
				indexPageData.vendorPostPropertiesList.length >= action.payload.index
			) {
				console.log(
					'checking action.payload.category:',
					action.payload.category
				);
				if (action.payload.category === 'Property') {
					console.log('i am into property if');
					console.log('checking indexPageData: ', indexPageData);
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.propertyComments.push({
						userName: action.payload.userName,
						commentText: action.payload.comment,
					});
				}
				if (action.payload.category === 'Post') {
					console.log('i am into post else');
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.postComments.push({
						userName: action.payload.userName,
						commentText: action.payload.comment,
					});
				}
				if (action.payload.category === 'Vendor') {
					console.log('i am into post else');
					indexPageData.vendorPostPropertiesList[
						action.payload.index
					].object.vendorComments.push({
						userName: action.payload.userName,
						commentText: action.payload.comment,
					});
				}
			}
			return {
				...state,
				indexPageData,
			};
		}
		case SET_CURRENT_LOCATION: {
			console.log('checking action.payload: ', action.payload);
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
