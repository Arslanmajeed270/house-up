import axios from 'axios';

import {
	CLEAR_ERRORS,
	PAGE_LOADED,
	PAGE_LOADING,
	SET_ERRORS,
	PROPERTY_DROP_DWON,
	GET_SINGLE_PROPERTY,
} from './actionTypes';

let backendServerURL = process.env.REACT_APP_API_URL;

export const setPageLoading = () => {
	return {
		type: PAGE_LOADING,
	};
};

export const clearPageLoading = () => {
	return {
		type: PAGE_LOADED,
	};
};
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};

//DropDwon  - Get Property drop dwon menu data from backend
export const dropDwonMenu = () => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/getPropertyDropdown', {
			channel: 'web',
		})
		.then((res) => {
			console.log('checking dropDwon data in store', res);
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: PROPERTY_DROP_DWON,
					payload: res && res.data && res.data.data ? res.data.data : {},
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
			console.log('checking error on homepage');
			dispatch({
				type: SET_ERRORS,
				payload:
					err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally(() => dispatch(clearPageLoading()));
};

//Add Property  - ADD property from front end
export const addProperty = (userData, history) => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/AddProperty', userData)
		.then((res) => {
			console.log('checking Add Property res in store', res);
			if (res && res.data && res.data.resultCode === '200') {
				history.push(
					`/index-${userData.country}&${userData.state}&${userData.city}`
				);
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
			console.log('checking error on homepage');
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
	console.log('checking backendServerURL: ', backendServerURL);

	axios
		.post(backendServerURL + '/getProperty', userData)
		.then((res) => {
			console.log('checking getSinglePropertyData: ', res);
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
			console.log('error: ', err);
			console.log('checking error');
			dispatch({
				type: SET_ERRORS,
				payload:
					err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally(() => dispatch(clearPageLoading()));
};
