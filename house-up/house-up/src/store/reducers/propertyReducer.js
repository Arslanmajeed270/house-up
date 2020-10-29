import { initial } from 'lodash';
import {
    CLEAR_ERRORS,
    PAGE_LOADED,
    PAGE_LOADING,
	SET_ERRORS,
    PROPERTY_DROP_DWON
} from '../actions/actionTypes';


const initialState = {
	dropDownData:{}
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
		case PROPERTY_DROP_DWON:
			return {
				dropDownData : action.payload
			};
		
	default:
			return state;
	}
}