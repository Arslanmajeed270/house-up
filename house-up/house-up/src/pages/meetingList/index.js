import React, { Component } from 'react'
import '../../assets/custom-css/style.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getMeetingList } from '../../store/actions/index';
import moment from 'moment';

import Spinner from '../../components/common/Spinner';
class index extends Component {

  constructor(props) {
		super(props);
		this.state = {
			loading: false,
			errors: {},
      meetingsListSelfInvite: [],
      meetingsListInvitedBy: [],
			user: {},
		};
  }
  
  static getDerivedStateFromProps(props, state) {
		const {page, errors, auth, vendor } = props;
		let stateChanged = false;
		let changedState = {};

		if (auth && auth.user && JSON.stringify(state.user) !== JSON.stringify(auth.user)) 
		{
			changedState.user = auth.user;
			stateChanged = true;
		}

		if ( vendor && 
			JSON.stringify(state.meetingsListSelfInvite) !== JSON.stringify(vendor.meetingsListSelfInvite)
			) {
			changedState.meetingsListSelfInvite = vendor.meetingsListSelfInvite;
			stateChanged = true;
    }
    
    if ( vendor && 
			JSON.stringify(state.meetingsListInvitedBy) !== JSON.stringify(vendor.meetingsListInvitedBy)
			) {
			changedState.meetingsListInvitedBy = vendor.meetingsListInvitedBy;
			stateChanged = true;
		}

		if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
		}
		if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
			changedState.errors = errors;
			stateChanged = true;
		  }

		if (stateChanged) return changedState;
		return null;
	}

	componentDidMount() {
    const { meetingsListSelfInvite, meetingsListInvitedBy, user } = this.state;
    const { onGetMeetingList } = this.props;
		if (!meetingsListSelfInvite.length || !meetingsListInvitedBy.length ){
      const requestData = {
        channel:"web",
        userId: user && user.userId ? user.userId : 1
      };
      onGetMeetingList(requestData);
    }
  }
  
  dateFormatHandler = ( date ) => {
    return moment(new Date(date)).format("DD/MM/YYYY");
  }

  timeFormatHandler = ( date ) => {
    return moment(new Date(date)).format("HH:mm");
  }

  render() {
    const { meetingsListSelfInvite, meetingsListInvitedBy, loading } = this.state;
		let pageContent = '';
		if ( loading )
			pageContent = <Spinner />;
		else {
			pageContent = (<div className="wrapper meeting_list_page">
      <div className="my_request_main">
        <h2>My Request</h2>
        {meetingsListSelfInvite && meetingsListSelfInvite.length ?
        meetingsListSelfInvite.map( (data, index) => (
        <div key={index} className="my_request_boxes">
        <div className="img_sec">
          <div className="img">
            <img width="52" height="52" src={`${ data && data.userWith && data.userWith.profilePictureUrl ? data.userWith.profilePictureUrl : require("../../assets/images/houseup_request_main.jpg") }`} alt="request_main" />
          </div>
          <div className="cont">
            <h3>
            { data && data.userWith && data.userWith.firstName ? data.userWith.firstName : "" }
              { data && data.userWith && data.userWith.lastName ? " " + data.userWith.lastName : "" }
            </h3>
            <h3> 
              { data && data.userWith && data.userWith.city ? " " + data.userWith.city : "" } 
            <span className="status">
            { data && data.userWith && data.userWith.createDateAndTime ? " " + data.userWith.createDateAndTime : "" }
              </span></h3>
          </div>
          <div className="details_dot">
            <img src={require('../../assets/images/dots_details.png')} alt="dots_details" />
          </div>
          <div className="clear" />
        </div>
        <p className="span_meta">Call request timing 
        <span className="time">
        { data && data.contactUsMeetingDate ? " " + this.dateFormatHandler(data.contactUsMeetingDate) : "" }
          </span> 
          <span className="date">
          { data && data.contactUsMeetingDate ? " " + this.timeFormatHandler(data.contactUsMeetingDate) : "" }
          </span></p>
        <p className="content_para">
          <b>
          { data && data.contactUsSubject ? `${data.contactUsSubject}: ` : "" }
          </b>
          { data && data.contactUsDetail ? data.contactUsDetail : "" }
        </p>
      </div>
        ) )
         :""}
        <div className="clear" />
      </div>
      <div className="request_callback">
        <h2>Request Call Back</h2>
        { meetingsListInvitedBy && meetingsListInvitedBy.length ?
        meetingsListInvitedBy.map( (data, index) => (
<div className="my_request_boxes">
          <div className="img_sec">
            <div className="img">
              <img width="52" height="52" src={`${ data && data.userWith && data.userWith.profilePictureUrl ? data.userWith.profilePictureUrl : require("../../assets/images/houseup_request_main.jpg") }`} alt="request_main" />
            </div>
            <div className="cont">
              <h3>
              { data && data.userWith && data.userWith.firstName ? data.userWith.firstName : "" }
              { data && data.userWith && data.userWith.lastName ? " " + data.userWith.lastName : "" }
              </h3>
              <h3>
              { data && data.userWith && data.userWith.city ? " " + data.userWith.city : "" } 
                 <span className="status">
                 { data && data.userWith && data.userWith.createDateAndTime ? " " + data.userWith.createDateAndTime : "" }
                   </span></h3>
            </div>
            <div className="details_contact">
              <ul>
                <li><Link to="#"><img src={require("../../assets/images/phone_icon.jpg")} alt="details_contact" /></Link></li>
                <li><Link to="#"><img src={require("../../assets/images/email_icon.jpg")} alt="details_contact" /></Link></li>
              </ul>
            </div>
            <div className="clear" />
          </div>
          <p className="span_meta">Call request timing 
          <span className="time">
          { data && data.contactUsMeetingDate ? " " + this.dateFormatHandler(data.contactUsMeetingDate) : "" }
            </span> 
            <span className="date">
            { data && data.contactUsMeetingDate ? " " + this.timeFormatHandler(data.contactUsMeetingDate) : "" }
            </span></p>
            <p className="content_para">
          <b>
          { data && data.contactUsSubject ? `${data.contactUsSubject}: ` : "" }
          </b>
          { data && data.contactUsDetail ? data.contactUsDetail : "" }
        </p>
        </div>
      
        ) )
        : "" }
        </div>
      <div className="clear" />
    </div>
    );
      }
    return pageContent;
  }
}



const mapStateToProps = (state) => {
	return {
		page: state.page,
    auth: state.auth,
    vendor: state.vendor
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetMeetingList: (data) => dispatch(getMeetingList(data)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
