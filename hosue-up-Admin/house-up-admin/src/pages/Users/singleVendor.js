import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class singleVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleVendorData: {},
      id: null,
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

    render() { 
      const { singleVendorData , singleVendorsPropertiesData } = this.state;
      console.log(singleVendorsPropertiesData)
      
        return ( 
            <React.Fragment>
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 col-lg-8">
                        </div>
                        <div className="col-sm-12 offset-lg-1 col-lg-3">
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-lg-3">
                            <div className="pxp-agent-section mt-4 mt-md-5">
                              <div className="pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0" 
                              style={{backgroundImage: `url(${singleVendorData && singleVendorData.profilePictureUrl ? singleVendorData.profilePictureUrl :  require("../../assets/images/ic_profile_placeholder.png") })`, backgroundPosition: '50% 0%'}} />
                            </div>
                          </div>
                          <div className="col-sm-12 col-lg-8">
                            <div className="pxp-agent-section mt-4 mt-md-5">
                              <h3>{ singleVendorData && singleVendorData.firstName} {singleVendorData && singleVendorData.lastName} </h3>
                              <div className="mt-3 mt-md-4">
                                <div className="col-lg-12"><Link to="#" className="message card px-5 py-3 mb-4 no-anchor-style">
                                    <div className="row">
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">@{singleVendorData && singleVendorData.userName} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{singleVendorData && singleVendorData.msisdn} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{singleVendorData && singleVendorData.emailAddress} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{singleVendorData && singleVendorData.businessName} </h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{singleVendorData && singleVendorData.websiteLink}</h6>
                                      </div>  
                                      <div className="col-lg-4 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2  text-dark exclode">{singleVendorData && singleVendorData.businessStartDate} </div>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{singleVendorData && singleVendorData.keywordsDescribeYourBusiness}</h6>
                                      </div>
                                      <div className="col-lg-12 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{singleVendorData && singleVendorData.streetAddress}</h6>
                                      </div>   
                                      <div className="col-lg-12 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <Link to="#" className="no-anchor-style buisness-documents"
                                          onClick={()=>this.props.modelHanlder('businessRegDoc', singleVendorData.businessRegistrationDocURL)}
                                          >Business Registration Document</Link>
                                        <Link to="#" className="no-anchor-style buisness-documents"
                                          onClick={()=>this.props.modelHanlder('businessRegDoc', singleVendorData.businessRegistrationDocURL)}
                                        >Supporting Documents (optional) </Link>
                                      </div>
                                      <div className="bottom-line">
                                      
                                        {singleVendorData && singleVendorData.packageSubscribed ?
                                      <>
                                        <div className="subscription" >
                                          <button className="btn btn-primary vendor-subscription" >{singleVendorData.packageSubscribed.packageDetail && singleVendorData.packageSubscribed.packageDetail.packageName ? singleVendorData.packageSubscribed.packageDetail.packageName : " "} Subscriber</button>
                                        </div>
                                      
                                      <h6 className="mb-0" style={{marginTop:'17px' , float:'left'}}>${singleVendorData.packageSubscribed.packageDetail && singleVendorData.packageSubscribed.packageDetail.packageName ? singleVendorData.packageSubscribed.packageDetail.packagePrice : " "}</h6>
                                     
                                      
                                      </>  
                                    : <div className="subscription" >
                                        <button className="btn btn-primary vendor-subscription" >Not Subscribed</button>
                                      </div> 
                                    }
                                        
                                        <div className="status">
                                          <select className="vendor-status" >
                                            <option value="" >Active</option>
                                            <option value="">Inactive</option>
                                            <option value="">Suspended</option>
                                          </select>
                                        </div>
                                        </div>
                                    </div></Link></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {singleVendorsPropertiesData &&
                      singleVendorsPropertiesData.length ? (
                        <h2 className='pxp-section-h2 mt-100'>
                          Listings by {singleVendorData && singleVendorData.firstName}{' '}
                          {singleVendorData && singleVendorData.lastName}{' '}
                        </h2>
                      ) : (
                        ''
                      )}
                      <div className='row mt-4 mt-md-5'>
                        {singleVendorsPropertiesData &&
                        singleVendorsPropertiesData.length
                          ? singleVendorsPropertiesData.map((data, idx) =>
                              data && data.category === 'Property' ? (
                                <>
                                  <div
                                    key={idx}
                                    className='col-sm-12 col-md-6 col-lg-4'
                                  >
                                    <Link
                                      to={`/single-prop-${
                                        data && data.object && data.object.propertId
                                      }`}
                                      className='pxp-prop-card-1 rounded-lg mb-4'
                                    >
                                      <div
                                        className='pxp-prop-card-1-fig pxp-cover'
                                        style={{
                                          backgroundImage: `url(${
                                            data &&
                                            data.object.imageList &&
                                            data &&
                                            data.object.imageList.length
                                              ? data.object.imageList[0] &&
                                                data.object.imageList[0].imageURL
                                              : ''
                                          })`,
                                        }}
                                      />
                                      <div className='pxp-prop-card-1-gradient pxp-animate' />
                                      <div className='pxp-prop-card-1-details'>
                                        <div className='pxp-prop-card-1-details-title'>
                                          {data && data.object && data.object.adTitle}
                                        </div>
                                        <div className='pxp-prop-card-1-details-price'>
                                          {' '}
                                          {data &&
                                            data.object &&
                                            data.object.currency &&
                                            data.object.currency.symbol}{' '}
                                          {data &&
                                            data.object &&
                                            data.object.price &&
                                            data.object.price.toLocaleString()}
                                        </div>
                                        <div className='pxp-prop-card-1-details-features text-uppercase'>
                                          {data &&
                                            data.object &&
                                            data.object.noOfBedrooms}{' '}
                                          BD <span>|</span>{' '}
                                          {data &&
                                            data.object &&
                                            data.object.noOfBathroomsValue}{' '}
                                          BA <span>|</span>{' '}
                                          {data &&
                                            data.object &&
                                            data.object.finishedSqftArea}{' '}
                                          SF
                                        </div>
                                      </div>
                                      <div className='pxp-prop-card-1-details-cta text-uppercase'>
                                        View Details
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              ) : (
                                ''
                              )
                            )
                          : ''}
                      </div>
                    </div> 
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
      onGetSingleVendorsPropertyData: (userData) => dispatch(actions.getSingleVendorsPropertyData(userData))

  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(singleVendor);