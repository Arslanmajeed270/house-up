import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import UserPropertiesList from '../../Users/userPropertiesList';
import UserPostsList from '../../Users/userPostsList';

class singleVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleVendorData: {},
      id: null,
      formHandler:0,
      singleVendorsPropertiesData:{}
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let userPage = props.userPage;

    let stateChanged = false;
    let changedState = {};

    if(userPage && JSON.stringify(state.singleVendorData) !== JSON.stringify(userPage.singleVendorData)){
      changedState.singleVendorData = userPage.singleVendorData;  
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

  componentDidMount() {
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
    this.props.onGetSingleVendorsData(userData);
		this.props.onGetSingleVendorsPropertyData(data);
  }

  formHandler = (num) =>{
    this.setState({
      formHandler : num
    })
  }

  updateVendorsState = (userStateDesc , userId) =>
  {
    let userData = {
      userId,
      userStateDesc
    };
    this.props.onUpdateVendorsState(userData);
  }

    render() { 
      const { singleVendorData } = this.state;
      
        return ( 
            <React.Fragment>
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="container message card px-5 py-3 mb-4">
                      <div className="row ">
                      <div className="col-sm-12 col-lg-1">
                          <div className="pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0" 
                          style={{backgroundImage: `url(${singleVendorData && singleVendorData.profilePictureUrl ? singleVendorData.profilePictureUrl :  require("../../../assets/images/ic_profile_placeholder.png") })`, backgroundPosition: '50% 0%'}} />
                      </div>
                      <div className="col-md-10 ">
                        <div className="row">
                          <div className="col-lg-3 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                <div className="col-md-12">
                                  <h6>Full Name</h6>
                                </div>
                                <div className="col-md-12">
                                  <h6 className="mb-0">{ singleVendorData && singleVendorData.firstName} {singleVendorData && singleVendorData.lastName}</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                <div className="col-md-12">
                                  <h6>Email</h6>
                                </div>
                                <div className="col-md-12">
                                <h6 className="mb-0">{singleVendorData && singleVendorData.emailAddress} </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                <div className="col-md-12">
                                  <h6>Username</h6>
                                </div>
                                <div className="col-md-12">
                                <h6 className="mb-0">@{singleVendorData && singleVendorData.userName} </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                <div className="col-md-12">
                                  <h6>Mobile</h6>
                                </div>
                                <div className="col-md-12">
                                  <h6 className="mb-0">{singleVendorData && singleVendorData.msisdn} </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                <div className="col-md-12">
                                  <h6>Profession</h6>
                                </div>
                                <div className="col-md-12">
                                  <h6 className="mb-0">{singleVendorData && singleVendorData.professionDesc} </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                <div className="col-md-12">
                                  <h6>Business Name</h6>
                                </div>
                                <div className="col-md-12">
                                  <h6 className="mb-0">{singleVendorData && singleVendorData.businessName} </h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                            <div className="row names-tags">
                                <div className="col-md-12">
                                  <h6>Website</h6>
                                </div>
                                <div className="col-md-12">
                                  <h6 className="mb-0">{singleVendorData && singleVendorData.websiteLink}</h6>
                                </div>
                              </div>
                            </div>  
                            <div className="col-lg-3 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                            <div className="row names-tags">
                                <div className="col-md-12">
                                  <h6>Qualification</h6>
                                </div>
                                <div className="col-md-12">
                                  <h6 className="mb-0">{singleVendorData && singleVendorData.qualification}</h6>
                                </div>
                              </div>
                            </div>  
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                  <div className="col-md-12">
                                    <h6>Business Started</h6>
                                  </div>
                                  <div className="col-md-12">
                                    <h6 className="mb-0">{singleVendorData && singleVendorData.businessStartDate} </h6>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                  <div className="col-md-12">
                                    <h6>Key words</h6>
                                  </div>
                                  <div className="col-md-12">
                                    <h6 className="mb-0">{singleVendorData && singleVendorData.keywordsDescribeYourBusiness} </h6>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                  <div className="col-md-12">
                                    <h6>Key words</h6>
                                  </div>
                                  <div className="col-md-12">
                                    <h6 className="mb-0">{singleVendorData && singleVendorData.keywordsDescribeYourBusiness} </h6>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                  <div className="col-md-12">
                                    <h6>Zip Code</h6>
                                  </div>
                                  <div className="col-md-12">
                                    <h6 className="mb-0">{singleVendorData && singleVendorData.zipCode} </h6>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <Link to="#" className="no-anchor-style buisness-documents"
                                onClick={()=>this.props.modelHanlder('businessRegDoc', singleVendorData.businessRegistrationDocURL)}
                                >Business Registration Document</Link>
                              <Link to="#" className="no-anchor-style buisness-documents"
                                onClick={()=>this.props.modelHanlder('businessRegDoc', singleVendorData.businessRegistrationDocURL)}
                              >Supporting Documents (optional) </Link>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                  <div className="col-md-12">
                                    <h6>Address</h6>
                                  </div>
                                  <div className="col-md-12">
                                    <h6 className="mb-0">{singleVendorData && singleVendorData.streetAddress} </h6>
                                  </div>
                              </div>
                            </div>
                            <div className="col-lg-12 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="row names-tags">
                                  <div className="col-md-12">
                                    <h6>About Business</h6>
                                  </div>
                                  <div className="col-md-12">
                                    <h6 className="mb-0">{singleVendorData && singleVendorData.aboutBusiness} </h6>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              {
                                singleVendorData && singleVendorData.packageSubscribed  ?
                                <div className="subscription" >
                                  <button className="btn btn-light" style={{color:'black'}} >{singleVendorData.packageSubscribed && singleVendorData.packageSubscribed.packageDetail && singleVendorData.packageSubscribed.packageDetail.packageName ? singleVendorData.packageSubscribed.packageDetail.packageName : " "}</button>
                                  <button className="btn btn-light" style={{color:'black'}}>${singleVendorData.packageSubscribed && singleVendorData.packageSubscribed.packageDetail && singleVendorData.packageSubscribed.packageDetail.packageName ? singleVendorData.packageSubscribed.packageDetail.packagePrice : " "}</button>
                                </div>
                              : ""
                              }
                                {
                                  singleVendorData && singleVendorData.userStatusDesc === "In Review" ?
                                  <>
                                    <div className="col-md-6">
                                    <button className="btn btn-success status-btn" 
                                      onClick={()=>this.updateVendorsState("Active" , singleVendorData.userId)}>
                                        APPROVE
                                    </button>
                                    </div>
                                    <div className="col-md-6">
                                      <button className="btn btn-danger status-btn" 
                                        onClick={()=>this.updateVendorsState("Rejected" , singleVendorData.userId)}>
                                          REJECT
                                      </button>
                                    </div>
                                  </>
                                  :
                                  <>
                                    <div className="col-md-6" />
                                    <div className="col-md-6">
                                      <button 
                                        className={`btn  ${ singleVendorData &&  (singleVendorData.userStatusDesc === "Approved" || singleVendorData.userStatusDesc === "Active") ? "btn-success" : "btn-danger"} status-btn`}
                                      >
                                        {singleVendorData && singleVendorData.userStatusDesc}
                                      </button>
                                    </div>
                                  </>
                                }

                                <div>
                                  <button className="btn btn-primary" onClick={()=>this.props.modelHanlder('vendorStatus',singleVendorData && singleVendorData.userId )} >
                                    Action
                                  </button>
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
      onGetSingleVendorsData: (userData) => dispatch(actions.getSingleVendorData(userData)),
      onUpdateVendorsState : (userData)=> dispatch(actions.updateVendorsState(userData)),
      onGetSingleVendorsPropertyData: (userData) => dispatch(actions.getSingleVendorsPropertyData(userData)),

  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(singleVendor);