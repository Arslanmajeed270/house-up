import {
	PAGE_LOADED,
	PAGE_LOADING,
	PROPERTY_DROP_DWON,
	GET_SINGLE_PROPERTY,
	ADD_COMMENTS
} from '../actions/actionTypes';

const initialState = {
	dropDownData: {},
	singlePropertyData: {},
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
		case PROPERTY_DROP_DWON:
			return {
				...state,
				dropDownData: action.payload,
			};
		case GET_SINGLE_PROPERTY:
			return {
				...state,
				singlePropertyData: action.payload,
			};
		case ADD_COMMENTS: {
			let singlePropertyData = Object.assign({}, state.singlePropertyData);
			if (
				singlePropertyData &&
				singlePropertyData.propertyComments &&
				singlePropertyData.propertyComments.length >= action.payload.index
			) {
				if (action.payload.category === 'Property') {
					singlePropertyData.propertyComments.push({
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
				singlePropertyData,
			};
		}
		default:
			return state;
	}
}
