import axios from 'axios';

import {
	GET_UPDATE_ACCOUNT_DATA,
	GET_PROPERTY_FEES_DATA,
	SET_ERRORS
} from './actionTypes';   


import {clearErrors , clearPageLoading , setPageLoading} from './pageActions';

const backendServerURL = process.env.REACT_APP_API_URL;

//Get Update account data
export const getUpgradeAccountData = (reqPacket) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/transactionhistorychargecustomer', reqPacket)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: GET_UPDATE_ACCOUNT_DATA,
					payload:
						res &&
						res.data &&
						res.data.dataList.length ? res.data.dataList : []
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

//Get Property Fees data
export const getPropertyFeesData = (reqPacket) => (dispatch) => {
	dispatch(setPageLoading());

	axios
		.post(backendServerURL + '/transactionhistoryproperty', reqPacket)
		.then((res) => {
			if (res && res.data && res.data.resultCode === '200') {
				dispatch({
					type: GET_PROPERTY_FEES_DATA,
					payload:
						res &&
						res.data &&
						res.data.dataList.length ? res.data.dataList : []
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