import axios from 'axios';


import {
    PAGE_LOADING,
	PAGE_LOADED,
	CLEAR_ERRORS,
	SET_INDEX_DATA,
	SET_ERRORS,
	GET_COUNTRIES,
	GET_PROFESSIONS,
	FOLLOW_PROFESSIONAL,
	SHOW_POP_UP,
	HIDE_POP_UP
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
	dispatch(setPageLoading());
    axios
    .post(
		backendServerURL+'/home',
		{
			"channel":"ios",
			"lat":43.787083,
			"lng":-79.497369,
			"city": "Vaughan",
			"limit":10,
			"offset":0
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
        dispatch(clearErrors());
    })
    .catch(err => {
	  console.log('checking error on homepage')
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})
	.finally(() => dispatch(clearPageLoading()))
};



// Vendor Signup page  - Get Countries data from backend
export const GetCountries = () => dispatch => {
	dispatch(setPageLoading());
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
				dispatch(clearErrors());
		}
		else{
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})
	.finally(() => dispatch(clearPageLoading()))
};

// Vendor Signup page  - Get Professions data from backend
export const GetProfessionDetailAPI = () => dispatch => {
	dispatch(setPageLoading());
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
			   
			dispatch(clearErrors());
		}
		else{
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})
	.finally(() => dispatch(clearPageLoading()))
	      
};


// Add Like to the post and property
export const AddLike = (data) => dispatch => {
	dispatch(setPageLoading());
	axios
    .post( backendServerURL+'/addComment' , data )
    .then(res => {
		console.log('checking GetProfessionDetailAPI page data' , res);
		// console.log('checking res && res.data && res.data.data  && res.data.data.professionList' , res && res.data && res.data.data  && res.data.data.professionList);
		// if( res && res.data && res.data.resultCode === "200"){
		// 	dispatch(
		// 		{
		// 			type: GET_PROFESSIONS,
		// 			payload: res && res.data && res.data.data  && res.data.data.professionList ? res.data.data.professionList : []
		// 		}
		// 	);
			   
		// 	dispatch(clearErrors());
		// }
		// else{
        //     dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		// }
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})
	.finally(() => dispatch(clearPageLoading()))
	      
};

// Follow and Unfollow Professionals
export const followProfessionals = (data) => dispatch => {
	dispatch(setPageLoading());
	axios
    .post( backendServerURL+'/followUnfollowUser' , data )
    .then(res => {
		console.log('checking follow data' , res);
		dispatch({
			type: FOLLOW_PROFESSIONAL,
			payload: data && data.message ? data.message : ''
		});
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})
	.finally(() => dispatch(clearPageLoading()))
	      
};