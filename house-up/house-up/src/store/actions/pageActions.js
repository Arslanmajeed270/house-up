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
	SET_HOME_DATA,
	ADD_LIKE,
	ADD_COMMENTS,
	SET_CURRENT_LOCATION,
	SET_DEFAULT_ALL_CARDS,
	HIDE_POP_UP,
	SHOW_POP_UP,
	SET_PACKAGE_DETAILS,
} from './actionTypes';

let backendServerURL = process.env.REACT_APP_API_URL;

export const setPageLoading = () => {
	return {
		type: PAGE_LOADING,
	};
};

export const clearPageLoading = () => {
	return {
		type: PAGE_LOADED,
	};
};
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};

//INDEX  - Get indexPage data from backend
export const getIndexPageData = (data) => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/home', data)
		.then((res) => {
			dispatch({
				type: SET_INDEX_DATA,
				payload: res.data && res.data.data ? res.data.data : {},
			});
			dispatch(clearErrors());
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

//HOME Page  - Get homePage data from backend
export const getHomePageData = () => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/index', {
			channel: 'web',
			lat: 43.787083,
			lng: -79.497369,
			city: '',
			limit: 10,
			offset: 0,
		})
		.then((res) => {
			dispatch({
				type: SET_HOME_DATA,
				payload: res.data && res.data.data ? res.data.data : {},
			});
			dispatch(clearErrors());
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

// Vendor Signup page  - Get Countries data from backend
export const GetCountries = () => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/GetCountries', {
			channel: 'web',
		})
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: GET_COUNTRIES,
					payload:
						res && res.data && res.data.data && res.data.data.countries
							? res.data.data.countries
							: [],
				});
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

// Vendor Signup page  - Get Professions data from backend
export const GetProfessionDetailAPI = () => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/GetProfessionDetailAPI', {
			channel: 'web',
		})
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: GET_PROFESSIONS,
					payload:
						res && res.data && res.data.data && res.data.data.professionList
							? res.data.data.professionList
							: [],
				});

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

// Add Like to the post and property
export const AddLike = (data, index, userName) => (dispatch) => {
	axios
		.post(backendServerURL + '/addLike', data)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				const payload = {
					index: index,
					category: data.category,
					follow: data.action === 'Like' ? true : false,
					userName: userName,
				};
				dispatch({
					type: ADD_LIKE,
					payload: payload,
				});
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
		});
};

// Follow and Unfollow Professionals
export const followProfessionals = (data, index, type) => (dispatch) => {
	axios
		.post(backendServerURL + '/followUnfollowUser', data)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				const payload = {
					index: index,
					follow: res.data.data.followed ? res.data.data.followed : false,
					type: type,
				};
				dispatch({
					type: FOLLOW_UNFOLLOW_PROFESSIONAL,
					payload: payload,
				});
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
		});
};
// add Comments to the post and property
export const AddComments = (data, index, userFullName , userName , profilePictureUrl , date) => (dispatch) => {
	axios.post(backendServerURL + '/addComment', data).then((res) => {
		if (res && res.data && res.data.resultCode === '200') {
			const payload = {
				index: index,
				category: data.category,
				comment: data.commentText,
				userFullName: userFullName,
				userName : userName,
				profilePictureUrl : profilePictureUrl,
				createDateTime : date
			};
			console.log(payload)
			dispatch({
				type: ADD_COMMENTS,
				payload: payload,
			});
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
			console.log(err)
			dispatch({
				type: SET_ERRORS,
				payload:
					err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally(() => dispatch(clearPageLoading()));
};

// Contact US
export const contactUs = (data, index) => (dispatch) => {
	axios
		.post(backendServerURL + '/contactUs', data)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({ type: SHOW_POP_UP });
				dispatch(clearErrors());
			} else {
				dispatch({ type: HIDE_POP_UP });
			}
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				payload:
					err && err.response && err.response.data ? err.response.data : {},
			});
		});
};

// Set current location
export const setCurrentLocation = (latitude, longitude) => (dispatch) => {
	if (latitude !== 0 || longitude !== 0) {
		const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY;
		axios
			.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${GOOGLE_API_KEY}`
			)
			.then((res) => {
				if (res.data.status === 'OK') {
					const country = res.data.results[6].formatted_address.split(', ')[2];
					const province = res.data.results[6].formatted_address.split(', ')[1];
					const city = res.data.results[6].formatted_address.split(', ')[0];
					dispatch({
						type: SET_CURRENT_LOCATION,
						payload: {
							country: country,
							province: province,
							city: city,
						},
					});
					dispatch(clearErrors());
				} else {
					dispatch({
						type: SET_CURRENT_LOCATION,
						payload: {
							country: 'Canada',
							province: 'Ontorio',
							city: 'Torronto',
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
			});
	} else {
		dispatch({
			type: SET_CURRENT_LOCATION,
			payload: {
				country: 'Canada',
				province: 'Ontorio',
				city: 'Torronto',
			},
		});
	}
};

// GET USER ALL CARDS
export const markCreditCardDefault = (userData) => (dispatch) => {
	axios
		.post(backendServerURL + '/markCreditCardDefault', userData)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch(clearErrors());
			} else {
				dispatch({ type: SET_DEFAULT_ALL_CARDS });
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
		});
};

// CREATE TOKEN FOR STRIPE
export const createCreditCardToken = (userData) => (dispatch) => {
	axios
		.post(backendServerURL + '/createCreditCardToken', userData)
		.then((res) => {
			console.log("res",res)
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({ type: SHOW_POP_UP });
				dispatch(clearErrors());
			} else {
				dispatch({ type: HIDE_POP_UP });
				dispatch({ type: SET_DEFAULT_ALL_CARDS });
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
		});
};

// CHARGE CUSTOMER USING CREDIT CARD
export const chargeCustomerUsingCreditCard = (userData) => (dispatch) => {
	axios
		.post(backendServerURL + '/chargeCustomer', userData)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({ type: SHOW_POP_UP });
				dispatch(clearErrors());
			} else {
				dispatch({ type: HIDE_POP_UP });
				dispatch({ type: SET_DEFAULT_ALL_CARDS });
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
		});
};

// chargeCustomerForPropertyUsingCreditCard
export const chargeCustomerForPropertyUsingCreditCard = (userData) => (dispatch) => {
	axios
		.post(backendServerURL + '/chargeCustomerForPropertyUsingCreditCard', userData)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({ type: SHOW_POP_UP });
				dispatch(clearErrors());
			} else {
				dispatch({ type: HIDE_POP_UP });
				dispatch({ type: SET_DEFAULT_ALL_CARDS });
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
		});
};

// Get Package plan from backend
export const getPackagePlan = () => (dispatch) => {
	axios
		.post(backendServerURL + '/GetPackagePlanAPI', {	
			channel:"web"
	})
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch(clearErrors());
				dispatch({
					type: SET_PACKAGE_DETAILS ,
					payload : res && res.data && res.data.data && res.data.data.packageList 
				 });
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
		});
};
