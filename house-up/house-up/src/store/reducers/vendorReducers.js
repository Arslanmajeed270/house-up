import {
	SET_VENDORS,
	SET_SINGLE_VENDOR,
	SET_SINGLE_VENDORS_PROPERTIES,
	ADD_COMMENTS_PROP_USER,
	SET_MEETINGS_LIST
} from '../actions/actionTypes';

const initialState = {
	vendorsData: [],
	singleVendorData: {},
	singleVendorsPropertiesData: {},
	meetingsListSelfInvite: [],
	meetingsListInvitedBy: []
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_VENDORS:
			return {
				...state,
				vendorsData: action.payload,
			};
		case SET_SINGLE_VENDOR: {
			return {
				...state,
				singleVendorData: action.payload,
			};
		}
		case SET_SINGLE_VENDORS_PROPERTIES:
			return {
				...state,
				singleVendorsPropertiesData: action.payload,
			};

		case ADD_COMMENTS_PROP_USER: {
			let singleVendorData = Object.assign({}, state.singleVendorData);
			if (
				singleVendorData &&
				singleVendorData.vendorComments
				// singleVendorData.vendorComments.length >= action.payload.index
			) {
				if (action.payload.category === 'Vendor') {
					singleVendorData.vendorComments.push({
						userFullName: action.payload.userFullName,
						userName: action.payload.userName,
						profilePictureUrl: action.payload.profilePictureUrl,
						commentText: action.payload.comment,
						createDateTime: action.payload.createDateTime,
					});
				}
			}
			
			return {
				...state,
				singleVendorData,
			};
		}
		case SET_MEETINGS_LIST: {
			return {
				...state,
				meetingsListSelfInvite: action.payload.meetingsListSelfInvite,
				meetingsListInvitedBy: action.payload.meetingsListInvitedBy,
			};
		}
		default:
			return state;
	}
}
