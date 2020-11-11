import {
	PAGE_LOADED,
	PAGE_LOADING,
	PROPERTY_DROP_DWON,
	GET_SINGLE_PROPERTY,
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

		default:
			return state;
	}
}
