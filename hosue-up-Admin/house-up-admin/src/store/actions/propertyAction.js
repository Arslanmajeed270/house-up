import axios from 'axios';

import {
	GET_ALL_PROPERTIES,
	GET_ALL_POSTS,
	GET_ALL_STORIES,
    SET_ERRORS,
    GET_SINGLE_PROPERTY,
    SET_SINGLE_VENDORS_PROPERTIES
} from './actionTypes';   


import {clearErrors , clearPageLoading , setPageLoading} from './pageActions'
const backendServerURL = process.env.REACT_APP_API_URL;



//getPropertiesData  - Get getPropertiesData data from backend
export const getPropertiesData = (data) => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/home', data)
		.then((res) => {
			console.log('res for properties data', res)
			dispatch({
				type: GET_ALL_PROPERTIES,
				payload: res.data && res.data.data && res.data.data.properties ? res.data.data.properties : {},
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

//getPostData  - Get getPostData data from backend
export const getPostData = (data) => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/home', data)
		.then((res) => {
			console.log('res for post data', res)
			dispatch({
				type: GET_ALL_POSTS,
				payload: res.data && res.data.data && res.data.data.posts ? res.data.data.posts : {},
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

//getStoriesData  - Get getStoriesData data from backend
export const getStoriesData = (data) => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/home', data)
		.then((res) => {
			console.log('res for post data', res)
			dispatch({
				type: GET_ALL_STORIES,
				payload: res.data && res.data.data && res.data.data.userStories ? res.data.data.userStories : {},
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
export const updatePropertyState = (userData) => dispatch => {
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