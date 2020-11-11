import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import WorkPopup from '../../components/Popups/workVendor';



class singleVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleVendorData: {},
      id: null,
      workModalState : false
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let vendor = props.vendor;

    let stateChanged = false;
    let changedState = {};

    if(vendor && JSON.stringify(state.singleVendorData) !== JSON.stringify(vendor.singleVendorData)){
      changedState.singleVendorData = vendor.singleVendorData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log('checking id in sigle vendero: ', id);
    this.setState({
      id: id
    });

    let userData = {
      userId: id
    }
    const data={
      offset: "0",
      lat: "43.787083",
      userId: id, 
      channel: "web",
      lng: "-79.497369", 
      limit: "10"
    }
    this.props.onGetSingleVendorsData(userData);
    this.props.onGetSingleVendorsPropertiesData(data);
  }


  workPopupHanlder = () =>{
    this.setState({
      workModalState : !this.state.workModalState
    });
  }
  closeCodelHanlder = () => {
    this.setState({
      workModalState : false
    });
}
    render() { 
      const { singleVendorData } = this.state;
      console.log('singlevendor data', singleVendorData)
      
        return ( 
            <React.Fragment>
              <div className="pxp-content">
                <div className="pxp-agents mt-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-lg-8">
                        <h1 className="pxp-page-header float-left">{ singleVendorData && singleVendorData.firstName} {singleVendorData && singleVendorData.lastName} </h1>
                        <span className="pxp-agent-rating"><span className="fa fa-star" />
                        <span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span>
                        <div className="clearfix" />
                        
                        <div className="">
                          <div className="pxp-agent-email">
                            <Link to={singleVendorData && singleVendorData.emailAddress }>
                              <span className="fa fa-envelope-o" /> {singleVendorData && singleVendorData.emailAddress}</Link></div>
                          <div className="pxp-agent-phone"><span className="fa fa-phone" /> {singleVendorData && singleVendorData.msisdn}</div>
                        </div>
                        <div className="">
                          <Link to="#pxp-work-with" className="pxp-agent-contact-btn" data-toggle="modal" data-target="#pxp-work-with" onClick={this.workPopupHanlder} >
                            {this.state.workModalState ? <WorkPopup workModalState={this.state.workModalState} closeCodelHanlder = {this.closeCodelHanlder} /> : null }
                          CONTACTS US </Link>
                        </div>
                      </div>
                      <div className="col-sm-12 offset-lg-1 col-lg-3">
                        <div className="pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0" style={{backgroundImage: `url(${singleVendorData && singleVendorData.profilePictureUrl ? singleVendorData.profilePictureUrl : 'assets/images/ic_profile_placeholder.png'})`, backgroundPosition: '50% 0%'}} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-lg-8">
                        <div className="pxp-agent-section">
                          <h3>About {singleVendorData && singleVendorData.firstName} {singleVendorData && singleVendorData.lastName} </h3>
                          <div className="mt-3 mt-md-4">
                            <p>Award winner and nominee, {singleVendorData && singleVendorData.firstName} {singleVendorData && singleVendorData.lastName} , is one of NYC’s top producing vendors. In 2016 she was a Top Producer Individual by sales volume and GCI. This high achiever received, among other recognitions, a Quadruple Platinum Award and was cover of Outfront Magazine in December 2016.</p>
                            <p>She is known as one of the smartest and most dedicated vendorts in the City. She has earned an excellent reputation with high-end developers. Her clientele includes some of the wealthiest Family Offices in the world, including royalty, and she works attending each generation’s needs and risk profile. She is the perfect vendor for the most demanding clients and runs her business 24/7. </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-3 offset-lg-1">
                        <div className="pxp-agent-section mt-4 mt-md-5">
                          <h3>Specialities</h3>
                          <ul className="list-unstyled pxp-agent-specialities mt-3 mt-md-4">
                            <li>{singleVendorData && singleVendorData.keywordsDescribeYourBusiness}</li>
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                    <h2 className="pxp-section-h2 mt-100">Listings by {singleVendorData && singleVendorData.firstName} {singleVendorData && singleVendorData.lastName} </h2>
                    <div className="row mt-4 mt-md-5">
                      <div className="col-sm-12 col-md-6 col-lg-4">
                        <Link to='/single-prop'  className="pxp-prop-card-1 rounded-lg mb-4">
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
                        <Link to='/single-prop'  className="pxp-prop-card-1 rounded-lg mb-4">
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
                        <Link to='/single-prop'  className="pxp-prop-card-1 rounded-lg mb-4">
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
                        <Link to='/single-prop'  className="pxp-prop-card-1 rounded-lg mb-4">
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
                        <Link to='/single-prop'  className="pxp-prop-card-1 rounded-lg mb-4">
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
                        <Link to='/single-prop'  className="pxp-prop-card-1 rounded-lg mb-4">
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
                    </div>
                    <ul className="pagination pxp-paginantion mt-3 mt-md-4">
                      <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">Next <span className="fa fa-angle-right" /></Link></li>
                    </ul>
                    <div className="row mt-100">
                      <div className="col-sm-12 col-lg-1" />
                      <div className="col-sm-12 col-lg-10">
                        <div className="pxp-agent-block">
                          <div className="pxp-agent-comments">
                            <h4>3 Reviews</h4>
                            <div className="mt-3 mt-md-4">
                              <div className="media">
                                <img src="assets/images/customer-1.jpg" className="mr-3" alt="..." />
                                <div className="media-body">
                                  <h5>Scott Goodwin</h5>
                                  <div className="pxp-agent-comments-date">April 9, 2019 at 2:33 pm</div>
                                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                  <div className="media mt-2 mt-md-3">
                                    <img src="assets/images/customer-4.jpg" className="mr-3" alt="..." />
                                    <div className="media-body">
                                      <h5>Alayna Becker</h5>
                                      <div className="pxp-agent-comments-date">April 9, 2019 at 2:33 pm</div>
                                      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                            <div className="media mt-2 mt-md-3">
                                <img src="assets/images/customer-3.jpg" className="mr-3" alt="..." />
                                <div className="media-body">
                                  <h5>Scott Goodwin</h5>
                                  <div className="pxp-agent-comments-date">April 9, 2019 at 2:33 pm</div>
                                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                </div>
                              </div>
                            
                            <form action="/single-vendor" className="pxp-agent-comments-form mt-3 mt-md-4">
                              <div className="form-group">
                                
                                <textarea placeholder="Type comment here..." className="form-control" id="pxp-agent-comments-review" rows={6} placeholder="Write your review here..." defaultValue={""} style={{height: '75px'}}/>
                              </div>
                              
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
         );
    }
}
 
const mapStateToProps = state => {
  return {
    vendor: state.vendor
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetSingleVendorsData: (userData) => dispatch(actions.getSingleVendorData(userData)),
      onGetSingleVendorsPropertiesData : (data) => dispatch(actions.getSingleVendorsPropertyData(data))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(singleVendor);