import { 
	SET_CURRENT_USER,
	CLEAR_CURRENT_USER,
	OTP_AUTHENTICATE_SUCCESS,
	OTP_AUTHENTICATE_FAIL
 } from '../actions/actionTypes';

const initialState = {
	isAuthenticated: false,
	user: {},
	otpAuthenticate:false
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
		default:
			return state;
	}
}