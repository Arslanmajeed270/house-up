import axios from 'axios';


import {
	SET_VENDORS,
    SET_SINGLE_VENDOR,
	SET_ERRORS,
} from './actionTypes';

import {
    setPageLoading,
    clearPageLoading,
    clearErrors
} from './pageActions';

let backendServerURL = process.env.REACT_APP_API_URL;
   

//Vendors  - Get vendors data from backend
export const getVendorsData = () => dispatch => {
	dispatch(setPageLoading());

	axios
    .post(
		backendServerURL+'/getUsers',
		{
			"userTypeId": 2
		}
    )
    .then(res => {
	// console.log('checking getVendorData: ', res);
        dispatch(
			{
				type: SET_VENDORS,
				payload: res.data && res.data.data &&  res.data.data.users ? res.data.data.users : []
			}
		);
        dispatch(clearErrors());  
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, 
		payload: err && err.response && err.response.data ? err.response.data : {}})
	})
	.finally(() => dispatch(clearPageLoading()))      
};

//SingleVendor  - Get SingleVendor data from backend
export const getSingleVendorData = (userData) => dispatch => {
	dispatch(setPageLoading());
	// console.log('checking backendServerURL: ', backendServerURL);

	axios
    .post(backendServerURL+'/getUser',userData)
    .then(res => {
		// console.log('checking getSingleVendorsData: ', res);
        dispatch(
			{
				type: SET_SINGLE_VENDOR,
				payload: res.data && res.data.data &&  res.data.data.user ? res.data.data.user : {}
			}
		);
        dispatch(clearErrors());
    })
    .catch(err => {
		// console.log("error: ", err);
		// console.log('checking error');
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})
	.finally(() => dispatch(clearPageLoading()))
	      
};