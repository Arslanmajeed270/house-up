import axios from 'axios';


import {
    PAGE_LOADING,
	PAGE_LOADED,
	CLEAR_ERRORS,
	SET_VENDORS,
	SET_ERRORS
} from './actionTypes';

let backendServerURL = process.env.REACT_APP_API_URL;
// let routesPrefix = '/;
   


export const setPageLoading = () => {
	// console.log('setPageLoading');
	return {
		type: PAGE_LOADING
	};
};


export const clearPageLoading = () => {
	// console.log('clearPageLoading');
	return {
		type: PAGE_LOADED
	};
};
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};

//Vendors  - Get vendors data from backend
export const getVendorsData = () => dispatch => {
    dispatch(setPageLoading());
	console.log('checking backendServerURL: ', backendServerURL);
    axios
    .post(
		backendServerURL+'/getUsers',
		{
			"userTypeId": 2
		}
    )
    .then(res => {
		console.log('checking getVendorsData: ', res);
        dispatch(
			{
				type: SET_VENDORS,
				payload: res.data && res.data.data &&  res.data.data.users ? res.data.data.users : []
			}
		);        
    })
    .catch(err => {
        console.log("error: ", err);
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};