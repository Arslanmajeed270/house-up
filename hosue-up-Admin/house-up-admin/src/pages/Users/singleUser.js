import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class singleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleUserData: {},
      id: null
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let userPage = props.userPage;

    let stateChanged = false;
    let changedState = {};

    if(userPage && JSON.stringify(state.singleUserData) !== JSON.stringify(userPage.singleUserData)){
      changedState.singleUserData = userPage.singleUserData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('checking id in sigle User: ', id);
    this.setState({
      id: id
    });

    let userData = {
      userId: id
    }
    this.props.onGetSingleUserData(userData);
  }

    render() { 
      const { singleUserData } = this.state;
      console.log('SINGLE User');
      console.log('checking singleUserData in User: ', singleUserData);
      
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
                              <div className="pxp-user-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0"
                               style={{backgroundImage: `url(${singleUserData && singleUserData.profilePictureUrl ? singleUserData.profilePictureUrl : "assets/images/agent-2.jpg"})`, backgroundPosition: '50% 0%'}} />
                            </div>
                          </div>
                          <div className="col-sm-12 col-lg-8">
                            <div className="pxp-agent-section mt-4 mt-md-5">
                              <h3>{ singleUserData && singleUserData.firstName} { singleUserData && singleUserData.lastName}</h3>
                              <div className="mt-3 mt-md-4">
                                <div className="col-lg-12"><Link to="" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                                    <div className="row">
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{ singleUserData && singleUserData.userName}</h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">{ singleUserData && singleUserData.msisdn}</h6>
                                      </div>
                                      <div className="col-lg-4 mt-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <h6 className="mb-0">@{ singleUserData && singleUserData.emailAddress}</h6>
                                      </div>
                                      <div className="col-lg-4 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                        <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2  text-dark exclode">{ singleUserData && singleUserData.keywordsDescribeYourBusiness}</div>
                                      </div> 
                                                                
                                    </div></Link></div>
                                <p>Award winner and nominee, Erika Tillman, is one of NYC’s top producing agents. In 2016 she was a Top Producer Individual by sales volume and GCI. This high achiever received, among other recognitions, a Quadruple Platinum Award and was cover of Outfront Magazine in December 2016.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h2 className="pxp-section-h2 mt-100">Listings by Erika Tillman</h2>
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
      onGetSingleUserData: (userData) => dispatch(actions.getSingleUserData(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(singleUser);