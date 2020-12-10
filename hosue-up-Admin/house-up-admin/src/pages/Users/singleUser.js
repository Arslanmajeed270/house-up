import React, { Component } from 'react';
import UserPropertiesList from './userPropertiesList';
import UserPostsList from './userPostsList';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class singleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleUserData: {},
      formHandler:0,
      id: null
    };
  }
  formHandler = (num) =>{
    this.setState({
      formHandler : num
    })
  }
  static getDerivedStateFromProps(props, state) {
  
    let userPage = props.userPage;

    let stateChanged = false;
    let changedState = {};

    if(userPage && JSON.stringify(state.singleUserData) !== JSON.stringify(userPage.singleUserData)){
      changedState.singleUserData = userPage.singleUserData;  
      stateChanged = true;
    }
    if (
			userPage &&
			JSON.stringify(state.singleVendorsPropertiesData) !==
				JSON.stringify(userPage.singleVendorsPropertiesData)
		) {
			changedState.singleVendorsPropertiesData =
      userPage.singleVendorsPropertiesData;
			stateChanged = true;
		}
    if(stateChanged){
      return changedState;
    }
    return null;

  }

  updateUserState = (userStateDesc , userId) =>
  {
    let userData = {
      userId,
      userStateDesc
    };
    console.log(userData);
    this.props.onUpdateUserState(userData);
  }

  componentDidMount() {
    console.log(this.props)
    const id = this.props.match.params.id;
    this.setState({
      id: id
    });

    let userData = {
      userId: id
    }
    const data = {
			offset: '0',
			lat: '43.787083',
			userId: id,
			channel: 'web',
			lng: '-79.497369',
			limit: '10',
		};
    this.props.onGetSingleUserData(userData);
		this.props.onGetSingleVendorsPropertyData(data);
  }

    render() { 
      const { singleUserData } = this.state;
      console.log("single user data", singleUserData)
      
        return ( 
          <React.Fragment>
          <div className="page-holder w-100 d-flex flex-wrap">
          <div className="container-fluid px-xl-5">
            <section className="py-5">
              <div className="container message card px-5 py-3 mb-4">
                <div className="row ">
                  <div className="col-sm-12 col-lg-1">
                      <div className="pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0" 
                      style={{backgroundImage: `url(${singleUserData && singleUserData.profilePictureUrl ? singleUserData.profilePictureUrl :  require("../../assets/images/ic_profile_placeholder.png") })`, backgroundPosition: '50% 0%'}} />
                  </div>
                  <div className="col-md-11 ">
                    <div className="row">
                      <div className="col-lg-2 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                          <div className="row names-tags">
                            <div className="col-md-12">
                              <h6>Full Name</h6>
                            </div>
                            <div className="col-md-12">
                              <h6 className="mb-0">{ singleUserData && singleUserData.firstName} {singleUserData && singleUserData.lastName}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                          <div className="row names-tags">
                            <div className="col-md-12">
                              <h6>Email</h6>
                            </div>
                            <div className="col-md-12">
                            <h6 className="mb-0">{singleUserData && singleUserData.emailAddress} </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                          <div className="row names-tags">
                            <div className="col-md-12">
                              <h6>Username</h6>
                            </div>
                            <div className="col-md-12">
                            <h6 className="mb-0">@{singleUserData && singleUserData.userName} </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                          <div className="row names-tags">
                            <div className="col-md-12">
                              <h6>Mobile</h6>
                            </div>
                            <div className="col-md-12">
                              <h6 className="mb-0">{singleUserData && singleUserData.msisdn} </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                          <div className="row names-tags">
                            <div className="col-md-12">
                              <h6>Action</h6>
                            </div>
                            <button className="btn btn-primary" onClick={() => this.props.modelHanlder('userStatus',singleUserData.userId )}  > 
                              Action
                            </button>

                            {/* <div className="subscription col-md-12" >
                                <button className="btn btn-success" style={{color:'black'}} onClick={()=>this.updateUserState("Active" , singleUserData.userId)} >Active</button>
                                <button className="btn btn-warning" style={{color:'black'}} onClick={()=>this.updateUserState("Inactive" , singleUserData.userId)}>In Active</button>
                                <button className="btn btn-danger" style={{color:'black'}} onClick={()=>this.updateUserState("Suspended" , singleUserData.userId)}>Suspended</button>
                            </div> */}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
              <div onClick={() => this.formHandler(0)}>
                Property Lists
              </div>
              <div onClick={() => this.formHandler(1)}>
                Post List
              </div>
              {
                this.state.formHandler === 0 && 
                <UserPropertiesList id={this.state.id} />
              }
              {
                this.state.formHandler === 1 && 
                <UserPostsList id={this.state.id} />
              }
               </section></div>
        </div>
      </React.Fragment>
   );
    }
}
const mapStateToProps = state => {
  return {
    userPage: state.userPage
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetSingleVendorsPropertyData: (userData) => dispatch(actions.getSingleVendorsPropertyData(userData)),
      onGetSingleUserData: (userData) => dispatch(actions.getSingleUserData(userData)),
      onUpdateUserState : (userData)=> dispatch(actions.updateUserState(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(singleUser);