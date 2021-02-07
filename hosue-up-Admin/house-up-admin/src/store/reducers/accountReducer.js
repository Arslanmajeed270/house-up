import {
	GET_UPDATE_ACCOUNT_DATA,
	GET_PROPERTY_FEES_DATA
} from '../actions/actionTypes';

const initialState = {
    updateAccountData: [],
    propertyFeesData: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_UPDATE_ACCOUNT_DATA : 
			return{
				...state,
				updateAccountData:action.payload
			};
		case GET_PROPERTY_FEES_DATA: 
			return{
				...state,
				propertyFeesData:action.payload
		};
	default:
			return state;
	}
}