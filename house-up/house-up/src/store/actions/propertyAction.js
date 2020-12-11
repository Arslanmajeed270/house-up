import axios from 'axios';

import {
	CLEAR_ERRORS,
	PAGE_LOADED,
	PAGE_LOADING,
	SET_ERRORS,
	PROPERTY_DROP_DWON,
	GET_SINGLE_PROPERTY,
	ADD_COMMENTS_PROP_USER
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

//DropDwon  - Get Property drop dwon menu data from backend
export const dropDwonMenu = () => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/getPropertyDropdown', {
			channel: 'web',
		})
		.then((res) => {
			console.log('res from backend', res);
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: PROPERTY_DROP_DWON,
					payload: res && res.data && res.data.data ? res.data.data : {},
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

//Add Property  - ADD property from front end
export const addProperty = (userData, history, closeCodelHanlder) => (dispatch) => {
	dispatch(setPageLoading());
	axios
		.post(backendServerURL + '/AddProperty', userData)
		.then((res) => {
			console.log('res for add property', res);
			if (res && res.data && res.data.resultCode === '200') {
				closeCodelHanlder('cardSelection');
				history.push(
					`/index-${userData.country}&${userData.state}&${userData.city}`
				);
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
			console.log(err);
			dispatch({
				type: SET_ERRORS,
				payload:
					err && err.response && err.response.data ? err.response.data : {},
			});
		})
		.finally(() => dispatch(clearPageLoading()));
};

//Get Singel Property
export const getSingleProperty = (userData) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/getProperty', userData)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: GET_SINGLE_PROPERTY,
					payload:
						res.data &&
						res.data.data &&
						res.data.data.length &&
						res.data.data[0]
							? res.data.data[0]
							: {},
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

// add Comments to the post and property
export const AddCommentsUserProp = (data, index, userFullName , userName , profilePictureUrl , date) => (dispatch) => {
	console.log("comment action")
	axios.post(backendServerURL + '/addComment', data).then((res) => {
			console.log(res)
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
				type: ADD_COMMENTS_PROP_USER,
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
