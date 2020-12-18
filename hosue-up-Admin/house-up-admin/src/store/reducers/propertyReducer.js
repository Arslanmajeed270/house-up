import {
	
	SET_SINGLE_VENDORS_PROPERTIES,
	GET_SINGLE_PROPERTY,
	GET_ALL_PROPERTIES,
	GET_ALL_POSTS,
	GET_ALL_STORIES
} from '../actions/actionTypes';

const initialState = {
	propertiesData:[],
	postsData:[],
	singlePropertyData:{},
	singleVendorsPropertiesData:{},
	storiesData:[]
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PROPERTIES : 
			return{
				...state,
				propertiesData:action.payload
			};
		case GET_ALL_POSTS : 
			return{
				...state,
				postsData:action.payload
			};
		case GET_ALL_STORIES : 
			return{
				...state,
				storiesData:action.payload
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