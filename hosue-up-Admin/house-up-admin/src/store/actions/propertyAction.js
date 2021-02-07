import axios from 'axios';

import {
    GET_ALL_PROPERTIES,
    SET_ERRORS,
    GET_SINGLE_PROPERTY,
    SET_SINGLE_VENDORS_PROPERTIES
} from './actionTypes';   


import {clearErrors , clearPageLoading , setPageLoading} from './pageActions'
const backendServerURL = process.env.REACT_APP_API_URL;

//Get Properties
export const getProperties = (userData) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/getpropertiessearchpagination', userData)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: GET_ALL_PROPERTIES,
					payload:
						res &&
						res.data &&
						res.data.properties.length ?
						{
							properties: res.data.properties,
							pagesCount: res.data.pagesCount 
						}  : {}
				});
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


//SingleVendorsProperty  - Get SingleVendorsProperty data from backend
export const getSingleVendorsPropertyData = (userData) => (dispatch) => {
	// dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/getVendorPostsNdProperties', userData)
		.then((res) => {
			dispatch({
				type: SET_SINGLE_VENDORS_PROPERTIES,
				payload:
				res && res.data && res.data.data && res.data.data.postNdPropertiesList
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

//Get Singel Property
export const getSingleProperty = (userData) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/getProperty', userData)
		.then((res) => {
			console.log(res)
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: GET_SINGLE_PROPERTY,
					payload:
						res.data &&
						res.data.data &&
						res.data.data.length &&
						res.data.data[0]
							? res.data.data[0]
							: {},
				});
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

//Properties  - Update property State
export const updateProperty = (userData) => dispatch => {
	console.log("checking userData: ", userData);
    axios
    .post(backendServerURL+'/updatePropertyStatus',userData)
    .then(res => {
		console.log('checking resonse data ',res);
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, 
		payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};