
import axios from 'axios';

import {
	SET_ERRORS,
	SET_VENDORS,
	SET_SINGLE_VENDOR,
} from './actionTypes';   

import {clearErrors , clearPageLoading , setPageLoading} from './pageActions'

const backendServerURL = process.env.REACT_APP_API_URL;


//Vendors  - Get vendors data from backend
export const getVendorsData = ( reqPacket ) => (dispatch) => {
	dispatch(setPageLoading());
	axios
    	.post(backendServerURL+'/getUsers', reqPacket)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: SET_VENDORS,
					payload:{
						vendors: res.data.data && res.data.data.users ? 
						res.data.data.users 
						: [],
						totalPages: res.data.data && res.data.data.totalPages ? 
						res.data.data.totalPages : 0
					}
				})
				dispatch(clearErrors());
			} else {
				dispatch({
					type: SET_ERRORS,
					payload: {
						message: res.data.message
							? res.data.message
							: 'Something went wrong! Please try again.',
					},
				});
			}
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				payload:
					err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally(() => dispatch(clearPageLoading()));
};

//SingleVendor  - Get SingleVendor data from backend
export const getSingleVendorData = (userData) => dispatch => {
	dispatch(setPageLoading());

    axios
    .post(backendServerURL+'/getUser',userData)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: SET_SINGLE_VENDOR,
					payload:
					res.data.data &&
					res.data.data.user 
					? res.data.data.user 
					: {}
				})
				dispatch(clearErrors());
			} else {
				dispatch({
					type: SET_ERRORS,
					payload: {
						message: res.data.message
							? res.data.message
							: 'Something went wrong! Please try again.',
					},
				});
			}
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				payload:
					err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally(() => dispatch(clearPageLoading()));
};

