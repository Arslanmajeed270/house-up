import axios from 'axios';


import {
	SET_VENDORS,
    SET_SINGLE_VENDOR,
	SET_ERRORS,
} from './actionTypes';

let backendServerURL = process.env.REACT_APP_API_URL;
   

//Vendors  - Get vendors data from backend
export const getVendorsData = () => dispatch => {
    axios
    .post(
		backendServerURL+'/getUsers',
		{
			"userTypeId": 2
		}
    )
    .then(res => {
	console.log('checking getVendorData: ', res);
        dispatch(
			{
				type: SET_VENDORS,
				payload: res.data && res.data.data &&  res.data.data.users ? res.data.data.users : []
			}
		);        
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, 
		payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};

//SingleVendor  - Get SingleVendor data from backend
export const getSingleVendorData = (userData) => dispatch => {
	console.log('checking backendServerURL: ', backendServerURL);
    axios
    .post(backendServerURL+'/getUser',userData)
    .then(res => {
		console.log('checking getSingleVendorsData: ', res);
        dispatch(
			{
				type: SET_SINGLE_VENDOR,
				payload: res.data && res.data.data &&  res.data.data.user ? res.data.data.user : {}
			}
		);        
    })
    .catch(err => {
		console.log("error: ", err);
		console.log('checking error');
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};