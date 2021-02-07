import {
	
	SET_SINGLE_VENDORS_PROPERTIES,
	GET_SINGLE_PROPERTY,
	GET_ALL_PROPERTIES
} from '../actions/actionTypes';

const initialState = {
	propertiesData:{
		properties: [],
        pagesCount: 0
	},
	singlePropertyData:{},
	singleVendorsPropertiesData:{}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PROPERTIES : 
			return{
				...state,
				propertiesData:action.payload
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