import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
    SET_ERRORS, 
    SET_CURRENT_USER,
    CLEAR_CURRENT_USER,
    OTP_AUTHENTICATE_SUCCESS,
    OTP_AUTHENTICATE_FAIL,
    REGISTER_VENDOR_SUCCESS,
	REGISTER_VENDOR_FAIL,
	REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    SET_USER_DETAIL,
    SHOW_POP_UP,
	HIDE_POP_UP
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

        console.log("res from backend while login",res);
        if(res.data &&  res.data.data && res.data.data.user ){
            localStorage.setItem('jwtToken', JSON.stringify(res.data.data.user));
            dispatch(setCurrentUser(res.data.data.user));
            dispatch(clearErrors())
            dispatch({ type: SHOW_POP_UP });
            history.push(`/index`);
        }
        else {
            dispatch({ type: HIDE_POP_UP });
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
        }
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
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(clearCurrentUser());
};

export const resetUserPassword = (userData) => dispatch =>{
    dispatch(setPageLoading());
 
    axios
    .post(
        backendServerURL+'/forgotPassword' , 
        userData
        )
    .then(res => {
        console.log("checking response in resetUserPassword: ", res);
        if(res && res.data && res.data.resultCode === "200"){
            dispatch(clearErrors());
        }
        else {
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
        }
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
        console.log('res from backend after signup',res);
        if(res && res.data && res.data.resultCode === "200" ){
            dispatch({ type: REGISTER_USER_SUCCESS });
            dispatch(clearErrors());  
        }
        else {
            dispatch({ type: REGISTER_USER_FAIL });
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
        }
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
    console.log('checking userData: ', userData);
    axios
    .post(
        backendServerURL+'/registerUser', 
        userData
    )
    .then(res => {
        console.log('res from backend after signup',res);
        if(res && res.data && res.data.resultCode === "200" ){
            dispatch({ type: REGISTER_VENDOR_SUCCESS });
            dispatch(clearErrors());  
        }
        else {
            dispatch({ type: REGISTER_VENDOR_FAIL });
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
        }
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
        console.log("checking res: ", res);
        if(res && res.data && res.data.resultCode === "200" ){
            console.log("i am into if");
            dispatch({ type: OTP_AUTHENTICATE_SUCCESS });
            dispatch(clearErrors());
        }
        else {
            console.log("checking i am into else");
            dispatch({ type: OTP_AUTHENTICATE_FAIL });
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
        }
    })
    .catch(err => {
        console.log("error: ", err);
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};

// signupVendor - signupvendor from the web page
export const getUserDeatils = (data) => dispatch => {
    dispatch(setPageLoading());
    console.log('checking data: ', data);
    axios
    .post(
        backendServerURL+'/getUserDetails', 
        data
    )
    .then(res => {
        dispatch(clearErrors())
        console.log('checking response in getUserDeatils',res);
        if(res && res.data && res.data.resultCode === "200" ){
        dispatch(
			{
				type: SET_USER_DETAIL,
				payload: res.data && res.data.data  && res.data.data.user ? res.data.data.user : {}
			}
        );
        }
    })
    .catch(err => {
        console.log("error: ", err);
        dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
    .finally(() => dispatch(clearPageLoading()))
};