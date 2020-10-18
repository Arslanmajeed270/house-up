
import axios from 'axios';

import {
	SET_ERRORS,
	SET_VENDORS,
	SET_USERS,
	SET_SINGLE_VENDOR,
	SET_SINGLE_USER
} from './actionTypes';   

const backendServerURL = process.env.REACT_APP_API_URL;



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

//Users  - Get users data from backend
export const getUsersData = () => dispatch => {
    axios
    .post(
		backendServerURL+'/getUsers',
		{
			"userTypeId": 1
		}
    )
    .then(res => {
        dispatch(
			{
				type: SET_USERS,
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
        dispatch(
			{
				type: SET_SINGLE_VENDOR,
				payload: res.data && res.data.data &&  res.data.data.user ? res.data.data.user : {}
			}
		);        
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, 
		payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};

//SingleUser  - Get SingleUser data from backend
export const getSingleUserData = (userData) => dispatch => {
    axios
    .post(backendServerURL+'/getUser',userData)
    .then(res => {
        dispatch(
			{
				type: SET_SINGLE_USER,
				payload: res.data && res.data.data &&  res.data.data.user ? res.data.data.user : {}
			}
		);        
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, 
		payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};