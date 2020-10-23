import axios from 'axios';


import {
    PAGE_LOADING,
	PAGE_LOADED,
	CLEAR_ERRORS,
	SET_INDEX_DATA,
	SET_ERRORS,
	GET_COUNTRIES,
	GET_PROFESSIONS
} from './actionTypes';

let backendServerURL = process.env.REACT_APP_API_URL;
   


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

//INDEX  - Get indexPage data from backend
export const getIndexPageData = () => dispatch => {
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
				type: SET_INDEX_DATA,
				payload: res.data && res.data.data  ? res.data.data : {}
			}
		);        
    })
    .catch(err => {
	  console.log('checking error on homepage')
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};


// Vendor Signup page  - Get Countries data from backend
export const GetCountries = () => dispatch => {
    axios
    .post(
		backendServerURL+'/GetCountries',
		{
			"channel": "web"
		}
    )
    .then(res => {
		console.log('checking GetCountries page data' , res);
		if( res && res.data && res.data.resultCode === "200" ){
			dispatch(
				{
					type: GET_COUNTRIES,
					payload: res && res.data && res.data.data  && res.data.data.countries ? res.data.data.countries : []
				}
			);   
		}     
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};

// Vendor Signup page  - Get Professions data from backend
export const GetProfessionDetailAPI = () => dispatch => {
    axios
    .post(
		backendServerURL+'/GetProfessionDetailAPI',
		{
			"channel": "web"
		}
    )
    .then(res => {
		console.log('checking GetProfessionDetailAPI page data' , res);
		console.log('checking res && res.data && res.data.data  && res.data.data.professionList' , res && res.data && res.data.data  && res.data.data.professionList);
		if( res && res.data && res.data.resultCode === "200"){
			dispatch(
				{
					type: GET_PROFESSIONS,
					payload: res && res.data && res.data.data  && res.data.data.professionList ? res.data.data.professionList : []
				}
			);   
		}     
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
    })      
};