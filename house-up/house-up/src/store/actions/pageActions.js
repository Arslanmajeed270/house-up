import axios from 'axios';


import {
    PAGE_LOADING,
	PAGE_LOADED,
	CLEAR_ERRORS,
	SET_HOME_DATA,
	SET_ERRORS
} from './actionTypes';

let backendServerURL = process.env.REACT_APP_API_URL;
// let routesPrefix = '/;
   


export const setPageLoading = () => {
	return {
		type: PAGE_LOADING
	};
};


export const clearPageLoading = () => {
	return {
		type: PAGE_LOADED
	};
};
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};

//Home  - Get HomePage data from backend
export const getHomePageData = () => dispatch => {
    axios
    .post(
		backendServerURL+'/home',
		{
			"userTypeId": 1
		}
    )
    .then(res => {
		console.log('checking Home page data' , res);
        dispatch(
			{
				type: SET_HOME_DATA,
				payload: res.data && res.data.data  ? res.data.data : {}
			}
		);        
    })
    .catch(err => {
	  console.log('checking error on homepage')
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};

