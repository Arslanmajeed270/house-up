import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
    SET_ERRORS, 
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
    CREATE_USER,
    CREATE_VENDOR
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
        backendServerURL+'/authenticateUser', 
        userData
    )
    .then(res => {
        
        // const {token} = res.data;
        // localStorage.setItem('jwtToken', token);
        // setAuthToken(token);
        // const decoded = jwt_decode(token);
        // dispatch(setCurrentUser(decoded));

        // dispatch(clearErrors())
        // history.push(`/dashboard`)
        console.log("res from backend while login",res);
        if(res.data &&  res.data.data && res.data.data.user ){
            localStorage.setItem('jwtToken', res.data.data.user) ;
            dispatch(setCurrentUser(res.data.data.user));
        }

        dispatch(clearErrors())
        history.push(`/`)
        
    })
    .catch(err => {
        console.log("error: ", err);
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
    // console.log("History in logoutUser: ", history);
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(clearCurrentUser());
    // console.log("History is: ", history);
    // history.push('/login');
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




// signupUser - signupUser from the web page
export const createUser = (userData) => dispatch => {
    dispatch(setPageLoading());
    axios
    .post(
        backendServerURL+'/registerUser', 
        userData
    )
    .then(res => {   
        // const {token} = res.data;
        // localStorage.setItem('jwtToken', token);
        // setAuthToken(token);
        // const decoded = jwt_decode(token);
        // dispatch(setCurrentUser(decoded));

        // dispatch(clearErrors())
        // history.push(`/dashboard`)
        // console.log("res from backend while login",res);
        // if(res.data &&  res.data.data && res.data.data.user ){
        //     localStorage.setItem('jwtToken', res.data.data.user) ;
        //     dispatch(setCurrentUser(res.data.data.user));
        // }

        // dispatch(clearErrors())
        // history.push(`/`)
        console.log('res from backend after signup',res);
        
    })
    .catch(err => {
        console.log("error: ", err);
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};


// signupVendor - signupvendor from the web page
export const createVendor = (userData) => dispatch => {
    dispatch(setPageLoading());

    axios
    .post(
        backendServerURL+'/registerUser', 
        userData
    )
    .then(res => {
        // const {token} = res.data;
        // localStorage.setItem('jwtToken', token);
        // setAuthToken(token);
        // const decoded = jwt_decode(token);
        // dispatch(setCurrentUser(decoded));

        // dispatch(clearErrors())
        // history.push(`/dashboard`)
        // console.log("res from backend while login",res);
        // if(res.data &&  res.data.data && res.data.data.user ){
        //     localStorage.setItem('jwtToken', res.data.data.user) ;
        //     dispatch(setCurrentUser(res.data.data.user));
        // }

        // dispatch(clearErrors())
        // history.push(`/`)
        console.log('res from backend after signup',res);
        
    })
    .catch(err => {
        console.log("error: ", err);
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};


// signupVendor - signupvendor from the web page
export const generatePin = (data) => dispatch => {
    dispatch(setPageLoading());
    console.log('checking data: ', data);
    axios
    .post(
        backendServerURL+'/generatePin', 
        data
    )
    .then(res => {
        dispatch(clearErrors())
        console.log('checking response in generatePin',res);
        
    })
    .catch(err => {
        console.log("error: ", err);
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};

// signupVendor - signupvendor from the web page
export const verifyPin = (data) => dispatch => {
    dispatch(setPageLoading());
    console.log('checking data: ', data);

    axios
    .post(
        backendServerURL+'/verifyPin', 
        data
    )
    .then(res => {
        dispatch(clearErrors())
        console.log('checking response in verifyPin',res);
    })
    .catch(err => {
        console.log("error: ", err);
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};
