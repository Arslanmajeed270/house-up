import axios from 'axios';

import {
    PAGE_LOADING,
	PAGE_LOADED,
	CLEAR_ERRORS,
	SET_ERRORS,
	SET_DASHBOARD,
	SET_VENDORS,
	SET_USERS
} from './actionTypes';   

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

const backendServerURL = process.env.REACT_APP_API_URL;

// dashboard - Get dashboard data from backend
export const getDashboardData = () => dispatch => {
    dispatch(setPageLoading());
	console.log('checking backendServerURL: ', backendServerURL);
    axios
    .post(
		backendServerURL+'/getDashboardCount',
		{
			"channel":"web"
		}
    )
    .then(res => {
		console.log('checking getDashboardData: ', res);
        dispatch(
			{
				type: SET_DASHBOARD,
				payload: res.data && res.data.data &&  res.data.data.dashboardCounts ? res.data.data.dashboardCounts : []
			}
		);        
    })
    .catch(err => {
        console.log("error: ", err);
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
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
		console.log('checking error here');
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};

//Users  - Get users data from backend
export const getUsersData = () => dispatch => {
    dispatch(setPageLoading());
	console.log('checking backendServerURL: ', backendServerURL);
    axios
    .post(
		backendServerURL+'/getUsers',
		{
			"userTypeId": 1
		}
    )
    .then(res => {
		console.log('checking getUsersData: ', res);
        dispatch(
			{
				type: SET_USERS,
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