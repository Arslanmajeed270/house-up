import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorsData: []
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let userPage = props.userPage;

    let stateChanged = false;
    let changedState = {};

    if(userPage && JSON.stringify(state.vendorsData) !== JSON.stringify(userPage.vendorsData)){
      changedState.vendorsData = userPage.vendorsData;  
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
    this.props.onGetVendorsData();
  }

  dateHandler = (date) => {
    return <strong className="h5 mb-0">{date.split('/')[0]}<sup className="smaller text-gray font-weight-normal">{date.split('/')[1]}</sup></strong>;
  } 

    render() { 
      const { vendorsData } = this.state;

        return ( 
            <React.Fragment>
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row">
                      {vendorsData && vendorsData.length ? 
                      vendorsData.map( (data, index) => 
                      data.userStatusDesc === "Active" || data.userStatusDesc === "Approved" ?
                        <div key={index} className="col-lg-12">
                          <Link to={`/single-vendor-${data && data.userId && data.userId}`} className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                          <div className="row">   
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              {this.dateHandler(data.createDate)}<img src={data.profilePictureUrl ? data.profilePictureUrl : "assets/img/demo.png"} alt="Profile" style={{maxWidth: '48px', maxHeight:'48px' , backgroundColor:'#008CF8'}} className="rounded-circle mx-3 my-2 my-lg-0" />
                              <h6 className="mb-0">{data.firstName} {data.lastName}</h6>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">{data.emailAddress}</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">@{data.userName}</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">{data.msisdn}</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">{data.professionDesc }</div>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2  text-dark exclode">{data.businessName}</div>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 text-dark exclode">{data.websiteLink}</div>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2  text-dark exclode">{data.businessStartDate}</div>
                            </div>
                            <div className="col-lg-4 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 text-dark exclode">{data.streetAddress}</div>
                            </div>                                       
                          </div>
                          </Link>
                        </div> 
                        :
                         data.userStatusDesc ==="In Review" ?
                        <div key={index} className="row">
                          <div className="col-sm-12 col-lg-3">
                            <div className="pxp-agent-section mt-4 mt-md-5">
                              <div className="pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0" 
                              style={{backgroundImage: `url(${data && data.profilePictureUrl ? data.profilePictureUrl : 'assets/images/ic_profile_placeholder.png"' })`, backgroundPosition: '50% 0%'}} />
                            </div>
                          </div>
                          <div className="col-sm-12 col-lg-8">
                            <div className="pxp-agent-section mt-4 mt-md-5">
                              <h3>{data.firstName} {data.lastName} </h3>
                              <div className="mt-3 mt-md-4">
                                <div className="col-lg-12"><Link to="#" className="message card px-5 py-3 mb-4 no-anchor-style">
                                    <div className="row">
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">@{data.userName} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">+{data.msisdn} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{data.emailAddress} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{data.professionDesc}</h6>
                                      </div> 
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{data.businessName} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{data.websiteLink}</h6>
                                      </div> 
                                       
                                      <div className="col-lg-4 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0"> {data.businessStartDate} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{data.keywordsDescribeYourBusiness}</h6>
                                      </div> 
                                      
                                      <div className="col-lg-12 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{data.address}</h6>
                                      </div>
                                      <div className="col-lg-12 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <Link className="no-anchor-style buisness-documents">Business Registration Document</Link>
                                      </div>
                                      <div className="col-lg-12 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <Link className="no-anchor-style buisness-documents" style={{width:'100%'}}>Supporting Documents (optional) </Link>
                                        <button className="btn btn-primary approve-reject" onClick={()=>this.updateUserState("Approved" , data.userId)}>Approve</button>
                                        <button className="btn btn-danger approve-reject" onClick={()=>this.updateUserState("Rejected" , data.userId)}>Reject</button>
                                      </div>
                                                                          
                                    </div></Link></div>
                                </div>
                            </div>
                          </div>
                        </div>
                      
                      : " "

                      )
                      : ''
                    }

            
                         </div>
                  </section>
                </div>
                <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 text-center text-md-left text-primary">
                        <p className="mb-2 mb-md-0">HouseUp © 2018-2020</p>
                      </div>
                    </div>
                  </div></footer>
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
      onGetVendorsData: () => dispatch(actions.getVendorsData()),
      onUpdateUserState : (userData)=> dispatch(actions.updateUserState(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(vendor);
