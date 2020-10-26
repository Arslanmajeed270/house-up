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
	LOGIN_USER
 } from '../actions/actionTypes';

const initialState = {
	isAuthenticated: false,
	user: {},
	otpAuthenticate:false,
	regiserUser: false,
	registerVendor: false,
	userDetail : {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				isAuthenticated: true,
				user: action.payload
			};
		case CLEAR_CURRENT_USER:
			return {
				isAuthenticated: false,
				user: {}
			};
		case OTP_AUTHENTICATE_SUCCESS:
			return {
				otpAuthenticate: true
			}
		case OTP_AUTHENTICATE_FAIL:
			return {
				otpAuthenticate:false
			}
		case REGISTER_VENDOR_SUCCESS:
			return {
				registerVendor: true
			}
		case REGISTER_VENDOR_FAIL:
			return {
				registerVendor:false
			}
		case REGISTER_USER_SUCCESS:
			return {
				regiserUser: true
			}
		case REGISTER_USER_FAIL:
			return {
				regiserUser:false
			}
		case LOGIN_USER:
			return{
				userDetail: action.payload
			}	
		default:
			return state;
	}
}