import axios from 'axios';

import {
    PAGE_LOADING,
	PAGE_LOADED,
	CLEAR_ERRORS,
	SET_ERRORS,
	SET_DASHBOARD
} from './actionTypes';   

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

const backendServerURL = process.env.REACT_APP_API_URL;

// dashboard - Get dashboard data from backend
export const getDashboardData = () => dispatch => {
    dispatch(setPageLoading());
    axios
    .post(
		backendServerURL+'/getDashboardCount',
		{
			"channel":"web"
		}
    )
    .then(res => {
        dispatch(
			{
				type: SET_DASHBOARD,
				payload: res.data && res.data.data &&  res.data.data.dashboardCounts ? res.data.data.dashboardCounts : []
			}
		);        
    })
    .catch(err => {
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};

