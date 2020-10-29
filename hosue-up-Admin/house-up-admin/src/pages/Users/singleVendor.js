import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class singleVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleVendorData: {},
      id: null
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
    this.props.onGetSingleVendorsData(userData);
  }

    render() { 
      const { singleVendorData } = this.state;
      
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
                                        <Link to="#" className="no-anchor-style buisness-documents">Business Registration Document</Link>
                                        <Link to="#" className="no-anchor-style buisness-documents">Supporting Documents (optional) </Link>
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
                                          </select>
                                        </div>
                                        </div>
                                    </div></Link></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <h2 className="pxp-section-h2 mt-100">Listings by Erika Tillman</h2>
                      <div className="row mt-4 mt-md-5">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <Link to="single-prop" className="pxp-prop-card-1 rounded-lg mb-4">
                            <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
                            <div className="pxp-prop-card-1-gradient pxp-animate" />
                            <div className="pxp-prop-card-1-details">
                              <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
                              <div className="pxp-prop-card-1-details-price">$890,000</div>
                              <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 920 SF</div>
                            </div>
                            <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
                          </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <Link to="single-prop" className="pxp-prop-card-1 rounded-lg mb-4">
                            <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-2-gallery.jpg)'}} />
                            <div className="pxp-prop-card-1-gradient pxp-animate" />
                            <div className="pxp-prop-card-1-details">
                              <div className="pxp-prop-card-1-details-title">Colorful Little Apartment</div>
                              <div className="pxp-prop-card-1-details-price">$2,675</div>
                              <div className="pxp-prop-card-1-details-features text-uppercase">1 BD <span>|</span> 1 BA <span>|</span> 500 SF</div>
                            </div>
                            <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
                          </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <Link to="single-prop" className="pxp-prop-card-1 rounded-lg mb-4">
                            <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-3-gallery.jpg)'}} />
                            <div className="pxp-prop-card-1-gradient pxp-animate" />
                            <div className="pxp-prop-card-1-details">
                              <div className="pxp-prop-card-1-details-title">Cozy Two Bedroom Apartment</div>
                              <div className="pxp-prop-card-1-details-price">$960,000</div>
                              <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 870 SF</div>
                            </div>
                            <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
                          </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <Link to="single-prop" className="pxp-prop-card-1 rounded-lg mb-4">
                            <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-7-1-gallery.jpg)'}} />
                            <div className="pxp-prop-card-1-gradient pxp-animate" />
                            <div className="pxp-prop-card-1-details">
                              <div className="pxp-prop-card-1-details-title">Beautiful House in Marina</div>
                              <div className="pxp-prop-card-1-details-price">$5,198,000</div>
                              <div className="pxp-prop-card-1-details-features text-uppercase">5 BD <span>|</span> 4.5 BA <span>|</span> 3,945 SF</div>
                            </div>
                            <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
                          </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <Link to="single-prop" className="pxp-prop-card-1 rounded-lg mb-4">
                            <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-8-1-gallery.jpg)'}} />
                            <div className="pxp-prop-card-1-gradient pxp-animate" />
                            <div className="pxp-prop-card-1-details">
                              <div className="pxp-prop-card-1-details-title">Modern Residence</div>
                              <div className="pxp-prop-card-1-details-price">$7,995</div>
                              <div className="pxp-prop-card-1-details-features text-uppercase">4 BD <span>|</span> 1.5 BA <span>|</span> 2,240 SF</div>
                            </div>
                            <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
                          </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <Link to="single-prop" className="pxp-prop-card-1 rounded-lg mb-4">
                            <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-9-1-gallery.jpg)'}} />
                            <div className="pxp-prop-card-1-gradient pxp-animate" />
                            <div className="pxp-prop-card-1-details">
                              <div className="pxp-prop-card-1-details-title">Luxury Mansion</div>
                              <div className="pxp-prop-card-1-details-price">$5,430,000</div>
                              <div className="pxp-prop-card-1-details-features text-uppercase">4 BD <span>|</span> 5 BA <span>|</span> 5,200 SF</div>
                            </div>
                            <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
                          </Link>
                        </div>
                      </div>*/}
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
      onGetSingleVendorsData: (userData) => dispatch(actions.getSingleVendorData(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(singleVendor);