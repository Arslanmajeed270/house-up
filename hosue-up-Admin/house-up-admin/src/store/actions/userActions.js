
import axios from 'axios';

import {
	SET_ERRORS,
	SET_USERS,
	UPDATE_USER_STATUS,
	SET_SINGLE_USER,
} from './actionTypes'; 

import {clearErrors , clearPageLoading , setPageLoading} from './pageActions'

const backendServerURL = process.env.REACT_APP_API_URL;

//Users  - Get users data from backend
export const getUsersData = ( reqPacket ) => (dispatch) => {
	dispatch(setPageLoading());
	axios
    	.post(backendServerURL+'/getUsers', reqPacket)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: SET_USERS,
					payload:{
						users: res.data.data && res.data.data.users ? 
						res.data.data.users 
						: [],
						totalPages: res.data.data && res.data.data.totalPages ? 
						res.data.data.totalPages : 0
					}
				})
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

//Users  - Update users State
export const updateUserState = ( reqPacket ) => (dispatch) => {
	dispatch(setPageLoading());
	axios
    	.post(backendServerURL+'/updateUserState', reqPacket)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: UPDATE_USER_STATUS,
					payload:{
						userId: reqPacket.userId,
						userStatusDesc: reqPacket.userStateDesc
					}
				})
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

