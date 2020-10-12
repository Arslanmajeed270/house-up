import {
    PAGE_LOADING,
	PAGE_LOADED,
    CLEAR_ERRORS
} from './actionTypes';

// let backendServerURL = process.env.REACT_APP_API_URL;
// let routesPrefix = '/;
   


export const setPageLoading = () => {
	// console.log('setPageLoading');
	return {
		type: PAGE_LOADING
	};
};


export const clearPageLoading = () => {
	// console.log('clearPageLoading');
	return {
		type: PAGE_LOADED
	};
};
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};

