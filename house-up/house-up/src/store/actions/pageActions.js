import axios from 'axios';


import {
    PAGE_LOADING,
	PAGE_LOADED,
	CLEAR_ERRORS,
	SET_INDEX_DATA,
	SET_ERRORS,
	GET_COUNTRIES,
	GET_PROFESSIONS,
	FOLLOW_UNFOLLOW_PROFESSIONAL,
	SHOW_POP_UP,
	HIDE_POP_UP,
	SET_HOME_DATA,
	ADD_LIKE,
	ADD_COMMENTS,
	SET_CURRENT_LOCATION,
	SET_DEFAULT_ALL_CARDS,
	LOAD_ALL_CARDS
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
export const getIndexPageData = (data) => dispatch => {
	console.log('checking data pakage in page action before api', data)
	dispatch(setPageLoading());
    axios
    .post(
		backendServerURL+'/home',data
		
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
	  // console.log('checking error on homepage')
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})
	.finally(() => dispatch(clearPageLoading()))
};


//HOME Page  - Get homePage data from backend
export const getHomePageData = () => dispatch => {
	dispatch(setPageLoading());
    axios
    .post(
		backendServerURL+'/index',
		{
			"channel":"web",
			"lat":43.787083,
			"lng":-79.497369,
			"city": "",
			"limit":10,
			"offset":0
		}
    )
    .then(res => {
		console.log('checking Home page data' , res);
        dispatch(
			{
				type: SET_HOME_DATA,
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
		// console.log('checking GetProfessionDetailAPI page data' , res);
		// console.log('checking res && res.data && res.data.data  && res.data.data.professionList' , res && res.data && res.data.data  && res.data.data.professionList);
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
export const AddLike = (data, index ) => dispatch => {
	axios
    .post( backendServerURL+'/addLike' , data )
    .then(res => {
		console.log(res);
		if( res && res.data && res.data.resultCode === "200" ){   
			const payload = {
				index: index,
				category: data.category,
				follow: data.action === "Like" ? true : false
			};
			dispatch({
				type: ADD_LIKE,
				payload: payload
			});
			dispatch(clearErrors());
		}
		else{
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      
};

// Follow and Unfollow Professionals
export const followProfessionals = (data, index) => dispatch => {
	axios
    .post( backendServerURL+'/followUnfollowUser' , data )
    .then(res => {
		if( res && res.data && res.data.resultCode === "200" ){   
			const payload = {
				index: index,
				follow: res.data.data.followed ? res.data.data.followed : false
			};
			dispatch({
				type: FOLLOW_UNFOLLOW_PROFESSIONAL,
				payload: payload
			});
			dispatch(clearErrors());
		}
		else{
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      
};

// add Comments to the post and property
export const AddComments = (data, index ) => dispatch => {
	axios
    .post( backendServerURL+'/addComment' , data )
    .then(res => {
		console.log(res);
		if( res && res.data && res.data.resultCode === "200" ){   
		// 	const payload = {
		// 		index: index,
		// 		category: data.category,
		// 	};
			dispatch({
				type: ADD_COMMENTS,
				// payload: payload
			});
			dispatch(clearErrors());
		}
		else{
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      
};

// Contact US 
export const contactUs = (data, index ) => dispatch => {
	axios
    .post( backendServerURL+'/contactUs' , data )
    .then(res => {
		console.log(res);
			dispatch(clearErrors());
    	})
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      
};



// Set current location
export const setCurrentLocation = ( latitude,longitude ) => dispatch => {
	if (latitude !== 0 || longitude !== 0) {
		const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;
		console.log("checking GOOGLE_API_KEY: ",GOOGLE_API_KEY );
		console.log("checking longitude: ",longitude );
		console.log("checking latitude: ",latitude );
		axios
    .get( 
		`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${GOOGLE_API_KEY}` )
    .then(res => {
		console.log("checking response of google api key: ", res.data.status);
		console.log("checking response of google api key: ", res.data.results);
		console.log("checking response of google api key: ", res.data.results[5].formatted_address.split(", "));
		if( res.data.status === "OK" ){
			const country = res.data.results[6].formatted_address.split(", ")[2];
			const province = res.data.results[6].formatted_address.split(", ")[1];
			const city = res.data.results[6].formatted_address.split(", ")[0];
			console.log("checking country: ",country );
			console.log("checking province: ",province );
			console.log("checking city: ",city );
			dispatch({
				type: SET_CURRENT_LOCATION , 
				payload: { 
					country: country,
					province: province,
					city: city
				}});
			dispatch(clearErrors());
		}
		else{
			dispatch({
				type: SET_CURRENT_LOCATION, 
				payload: { 
					country: "Canada",
					province: "Ontorio",
					city: "Torronto"
				}});
	
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      

	  } else { 
		dispatch({
			type: SET_CURRENT_LOCATION , 
			payload: { 
				country: "Canada",
				province: "Ontorio",
				city: "Torronto"
			}});

	  }
	};


// GET USER ALL CARDS
export const markCreditCardDefault = ( userData ) => dispatch => {
	console.log('checking userData: ', userData);
	axios
    .post( backendServerURL+'/markCreditCardDefault' , userData  )
    .then(res => {
		console.log('checking res in markCreditCardDefault: ', res);
		if( res && res.data && res.data.resultCode === "200" ){
			dispatch({
				type: SHOW_POP_UP
			});
			dispatch(clearErrors());
		}
		else{
			dispatch({type: HIDE_POP_UP });
			dispatch({type: SET_DEFAULT_ALL_CARDS});
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      
};

// ADD Professional CARD
export const addCreditCard = ( userData ) => dispatch => {
	
	axios
    .post( backendServerURL+'/addCreditCard' , userData  )
    .then(res => {
		console.log(res);
		if( res && res.data && res.data.resultCode === "200" ){
			const payload = res.data.data ? res.data.data : [];   
			dispatch({
				type: LOAD_ALL_CARDS,
				payload: payload
			});
			dispatch(clearErrors());
		}
		else{
			dispatch({type: SET_DEFAULT_ALL_CARDS});
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      
};

// CREATE TOKEN FOR STRIPE
export const createCreditCardToken = ( userData ) => dispatch => {
	
	axios
    .post( backendServerURL+'/createCreditCardToken' , userData  )
    .then(res => {
		console.log("checking createCreditCardToken response: ", res);
		if( res && res.data && res.data.resultCode === "200" ){
			dispatch({type: SHOW_POP_UP });
			dispatch(clearErrors());
		}
		else{
			dispatch({type: HIDE_POP_UP });
			dispatch({type: SET_DEFAULT_ALL_CARDS});
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      
};

// CHARGE CUSTOMER USING CREDIT CARD
export const chargeCustomerUsingCreditCard = ( userData ) => dispatch => {
	
	axios
    .post( backendServerURL+'/chargeCustomerUsingCreditCard' , userData  )
    .then(res => {
		console.log("checking chargeCustomerUsingCreditCard response: ", res);
		if( res && res.data && res.data.resultCode === "200" ){
			dispatch({type: SHOW_POP_UP });
			dispatch(clearErrors());
		}
		else{
			dispatch({type: HIDE_POP_UP });
			dispatch({type: SET_DEFAULT_ALL_CARDS});
            dispatch({type: SET_ERRORS, payload: { message: res.data.message ? res.data.message : "Something went wrong! Please try again." } });
		}
    })
    .catch(err => {
		dispatch({type: SET_ERRORS, payload: err && err.response && err.response.data ? err.response.data : {}})
	})	      
};