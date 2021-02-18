import axios from 'axios';

import {
    SET_ERRORS, 
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
} from './actionTypes';

import {
    setPageLoading,
    clearPageLoading,
    clearErrors
} from './pageActions';

 
let backendServerURL = process.env.REACT_APP_API_URL;

// Login - Get User Token (Verified)
export const loginUser = (userData, history) => dispatch => {
    dispatch(setPageLoading());

    axios
    .post(
        backendServerURL+'/authenticateAdminUser', 
        userData
    )
    .then(res => {
    
        if(res.data &&  res.data.data && res.data.data.user ){
            localStorage.setItem('jwtToken',JSON.stringify( res.data.data.user)) ;
            dispatch(setCurrentUser(res.data.data.user));
        }

        dispatch(clearErrors())
        history.push(`/`)
        
    })
    .catch(err => {
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};


// Set logged in user (Verified)
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const clearCurrentUser = () => {
    return {
		type: CLEAR_CURRENT_USER
	};
};


// Log user out (Verified)
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(clearCurrentUser());
};



export const sendPasswordRecoveryLink = (userData, history) => dispatch => {
    dispatch(setPageLoading());
    
    axios
    .post(
        backendServerURL+'/api/users/recover-password-email', 
        userData
    )
    .then(res => {
        if(res.data.success){
        }
    })
    .catch(err => dispatch({type: SET_ERRORS, payload: err.response.data}))
    .finally(() => dispatch(clearPageLoading()));
};
 

export const resetUserPassword = (inputData, verificationToken, history) => dispatch =>{
    dispatch(setPageLoading());
 
    axios
    .post(
        backendServerURL+'/api/users/reset-user-password', 
        {
            token: verificationToken,
            passwordData: inputData
        }
    )
    .then(res => {
        history.push('/login?reset=true');
    })
    .catch(err => dispatch({type: SET_ERRORS, payload: err.response.data}))
    .finally(() => dispatch(clearPageLoading()));
};