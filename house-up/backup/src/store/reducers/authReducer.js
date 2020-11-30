import {
	SET_CURRENT_USER,
	CLEAR_CURRENT_USER,
	OTP_AUTHENTICATE_SUCCESS,
	OTP_AUTHENTICATE_FAIL,
	REGISTER_VENDOR_SUCCESS,
	REGISTER_VENDOR_FAIL,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAIL,
	SET_USER_DETAIL,
} from '../actions/actionTypes';

const initialState = {
	isAuthenticated: false,
	user: {},
	otpAuthenticate: false,
	regiserUser: false,
	registerVendor: false,
	userDetails: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case CLEAR_CURRENT_USER:
			return {
				...state,
				isAuthenticated: false,
				user: {},
			};
		case OTP_AUTHENTICATE_SUCCESS:
			return {
				...state,
				otpAuthenticate: true,
			};
		case OTP_AUTHENTICATE_FAIL:
			return {
				...state,
				otpAuthenticate: false,
			};
		case REGISTER_VENDOR_SUCCESS:
			return {
				...state,
				registerVendor: true,
			};
		case REGISTER_VENDOR_FAIL:
			return {
				...state,
				registerVendor: false,
			};
		case REGISTER_USER_SUCCESS:
			return {
				...state,
				regiserUser: true,
			};
		case REGISTER_USER_FAIL:
			return {
				...state,
				regiserUser: false,
			};
		case SET_USER_DETAIL:
			return {
				...state,
				userDetails: action.payload,
			};
		default:
			return state;
	}
}
