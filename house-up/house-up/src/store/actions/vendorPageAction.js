import axios from 'axios';

import {
	SET_VENDORS,
	SET_SINGLE_VENDOR,
	SET_ERRORS,
	SET_SINGLE_VENDORS_PROPERTIES,
} from './actionTypes';

import { setPageLoading, clearPageLoading, clearErrors } from './pageActions';

let backendServerURL = process.env.REACT_APP_API_URL;

//Vendors  - Get vendors data from backend
export const getVendorsData = () => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/getUsers', {
			userTypeId: 2,
		})
		.then((res) => {
			dispatch({
				type: SET_VENDORS,
				payload:
					res.data && res.data.data && res.data.data.users
						? res.data.data.users
						: [],
			});
			dispatch(clearErrors());
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
export const getSingleVendorData = (userData) => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/getUser', userData)
		.then((res) => {
			dispatch({
				type: SET_SINGLE_VENDOR,
				payload:
					res.data && res.data.data && res.data.data.user
						? res.data.data.user
						: {},
			});
			dispatch(clearErrors());
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

//SingleVendorsProperty  - Get SingleVendorsProperty data from backend
export const getSingleVendorsPropertyData = (userData) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/getVendorPostsNdProperties', userData)
		.then((res) => {
			dispatch({
				type: SET_SINGLE_VENDORS_PROPERTIES,
				payload:
					res.data && res.data.data && res.data.data.postNdPropertiesList
						? res.data.data.postNdPropertiesList
						: [],
			});
			dispatch(clearErrors());
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
