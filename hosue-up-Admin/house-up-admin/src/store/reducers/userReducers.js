import {
	SET_USERS,
	SET_SINGLE_USER,
	SET_USER_STATE,
	UPDATE_USER_STATUS,
	SET_SINGLE_VENDORS_PROPERTIES,
	GET_SINGLE_PROPERTY
} from '../actions/actionTypes';

const initialState = {
	usersData : {
		users: [],
		totalPages: 0
	},
	singleUserData : {},
	userState:false,
	singlePropertyData:{},
	singleVendorsPropertiesData:{}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				usersData: action.payload
			};
		case SET_SINGLE_USER:
			return {
				...state,
				singleUserData: action.payload
			};
		case UPDATE_USER_STATUS:{
			const updateUsers = state.usersData.users;
			updateUsers.map( user => {
				if( user.userId === action.payload.userId ){
					user.userStatusDesc = action.payload.userStatusDesc
				}
				return user;
			} );
			return {
				...state,
				usersData : {
					users: updateUsers,
					...state.usersData
				},
			};
		}
		case SET_USER_STATE:
			return {
				...state,
				userState: action.payload
			};	
		case SET_SINGLE_VENDORS_PROPERTIES:
			return {
				...state,
				singleVendorsPropertiesData: action.payload,
			};
		case GET_SINGLE_PROPERTY:
			return {
				...state,
				singlePropertyData: action.payload,
			};
	default:
			return state;
	}
}