import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

// import { connect } from 'react-redux';
// import * as actions from '../../store/actions/index';
// import { Carousel } from 'react-bootstrap';

// import Carousel from 'react-bootstrap/Carousel';

class home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     homePageData : {}
  //   };
  // }
  // static getDerivedStateFromProps(props, state) {
  
  //   let page = props.page;

  //   let stateChanged = false;
  //   let changedState = {};


  //   if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
  //     changedState.loading = page.loading;  
  //     stateChanged = true;
  //   }
  //   if(page && JSON.stringify(state.homePageData) !== JSON.stringify(page.homePageData)){
  //     changedState.homePageData = page.homePageData;  
  //     stateChanged = true;
  //   }

  //   if(stateChanged){
  //     return changedState;
  //   }
  //   return null;

  // }

  // componentDidMount() {
  //   console.log('homePage componenet did mount');
  //   this.props.onGetHomePageData();
  // }

    render() { 
      // const { homePageData } = this.state;
      // console.log('checking homePageData in HomePage: ', homePageData);

        return ( 
            <React.Fragment>
              <div className="pxp-content">
                <div className="pxp-hero vh-100">
                  <div className="pxp-hero-bg pxp-cover pxp-cover-bottom" style={{backgroundImage: 'url(assets/images/hero-1.jpg)'}} />
                  <div className="pxp-hero-opacity" />
                  <div className="pxp-hero-caption">
                    <div className="container">
                      <h1 className="text-white">House Up</h1>
                      <form className="pxp-hero-search mt-4" action="">
                        <div className="row">
                          <div className="col-sm-12 col-md-4">
                            <div className="form-group">
                              <select className="custom-select">
                                <option >Buy</option>
                                <option value={1}>Rent</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-8">
                            <div className="form-group">
                              <input type="text" className="form-control pxp-is-address" placeholder="City, neighbourhood..." />
                              <span className="fa fa-search" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="container-fluid pxp-props-carousel-right mt-100 " >
                  <h2 className="pxp-section-h2">Featured Properties</h2>
                  <p className="pxp-text-light">Browse our latest hot offers</p>
                  <div className="container-fluid pxp-props-carousel-right mt-100" >
                    <div className="pxp-props-carousel-right-container mt-4 mt-md-5">
                      <div className="owl-carousel pxp-props-carousel-right-stage">
                        <AliceCarousel  
                          mouseTracking 
                          responsive = {responsive}
                          items={items}
                          disableDotsControls={true}
                          paddingLeft={120} />
                        <Link to="/properties" className="pxp-primary-cta text-uppercase mt-4 mt-md-5 pxp-animate">Browse All</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pxp-services pxp-cover mt-100 pt-100 mb-200" style={{backgroundImage: 'url(assets/images/services-h-fig.jpg)'}}>
                  <h2 className="text-center pxp-section-h2">Why Choose Us</h2>
                  <p className="pxp-text-light text-center">We offer full closing services without an vendor</p>
                  <div className="container">
                    <div className="pxp-services-container rounded-lg mt-4 mt-md-5">
                      <Link to='/properties'  className="pxp-services-item">
                        <div className="pxp-services-item-fig">
                          <img src="assets/images/service-icon-1.svg" alt="..." />
                        </div>
                        <div className="pxp-services-item-text text-center">
                          <div className="pxp-services-item-text-title">Find your future home</div>
                          <div className="pxp-services-item-text-sub">We help you find a new home by offering<br />a smart real estate experience</div>
                        </div>
                        <div className="pxp-services-item-cta text-uppercase text-center">Learn More</div>
                      </Link>
                      <Link to='/vendors'  className="pxp-services-item">
                        <div className="pxp-services-item-fig">
                          <img src="assets/images/service-icon-2.svg" alt="..." />
                        </div>
                        <div className="pxp-services-item-text text-center">
                          <div className="pxp-services-item-text-title">Virtual Lawyer Closing</div>
                          <div className="pxp-services-item-text-sub">We provide the lawyer, closing &amp; more</div>
                        </div>
                        <div className="pxp-services-item-cta text-uppercase text-center">Learn More</div>
                      </Link>
                      <Link to='/properties'  className="pxp-services-item">
                        <div className="pxp-services-item-fig">
                          <img src="assets/images/service-icon-3.svg" alt="..." />
                        </div>
                        <div className="pxp-services-item-text text-center">
                          <div className="pxp-services-item-text-title">Buy or rent homes</div>
                          <div className="pxp-services-item-text-sub">Millions of houses and apartments<br />in your favourite cities</div>
                        </div>
                        <div className="pxp-services-item-cta text-uppercase text-center">Learn More</div>
                      </Link>
                      <Link to='/add-new-prop'  className="pxp-services-item">
                        <div className="pxp-services-item-fig">
                          <img src="assets/images/service-icon-4.svg" alt="..." />
                        </div>
                        <div className="pxp-services-item-text text-center">
                          <div className="pxp-services-item-text-title">List your own property</div>
                          <div className="pxp-services-item-text-sub">Sign up now and sell or rent<br />your own properties</div>
                        </div>
                        <div className="pxp-services-item-cta text-uppercase text-center">Learn More</div>
                      </Link>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
                <div className="container mt-100">
                  <h2 className="pxp-section-h2">Explore Our Neighborhoods</h2>
                  <p className="pxp-text-light">Browse our comprehensive neighborhood listings</p>
                  <div className="row mt-4 mt-md-5">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <Link to='/properties'  className="pxp-areas-1-item rounded-lg">
                        <div className="pxp-areas-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/area-1.jpg)'}} />
                        <div className="pxp-areas-1-item-details">
                          <div className="pxp-areas-1-item-details-area">Bluemont</div>
                          <div className="pxp-areas-1-item-details-city">Toronto, CA</div>
                        </div>
                        <div className="pxp-areas-1-item-counter"><span>324 Properties</span></div>
                        <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                      </Link>
                    </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <Link to='/properties'  className="pxp-areas-1-item rounded-lg">
                        <div className="pxp-areas-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/area-2.jpg)'}} />
                        <div className="pxp-areas-1-item-details">
                          <div className="pxp-areas-1-item-details-area">Overlake</div>
                          <div className="pxp-areas-1-item-details-city">Ottawa, CA</div>
                        </div>
                        <div className="pxp-areas-1-item-counter"><span>158 Properties</span></div>
                        <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <Link to='/properties'  className="pxp-areas-1-item rounded-lg">
                        <div className="pxp-areas-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/area-3.jpg)'}} />
                        <div className="pxp-areas-1-item-details">
                          <div className="pxp-areas-1-item-details-area">College Terrace</div>
                          <div className="pxp-areas-1-item-details-city">Mississauga, CA</div>
                        </div>
                        <div className="pxp-areas-1-item-counter"><span>129 Properties</span></div>
                        <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <Link to='/properties'  className="pxp-areas-1-item rounded-lg">
                        <div className="pxp-areas-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/area-4.jpg)'}} />
                        <div className="pxp-areas-1-item-details">
                          <div className="pxp-areas-1-item-details-area">Inner Sunset</div>
                          <div className="pxp-areas-1-item-details-city"> Brampton, CA</div>
                        </div>
                        <div className="pxp-areas-1-item-counter"><span>129 Properties</span></div>
                        <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <Link to='/properties'  className="pxp-areas-1-item rounded-lg">
                        <div className="pxp-areas-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/area-5.jpg)'}} />
                        <div className="pxp-areas-1-item-details">
                          <div className="pxp-areas-1-item-details-area">Upper West Side</div>
                          <div className="pxp-areas-1-item-details-city"> Hamilton, CA</div>
                        </div>
                        <div className="pxp-areas-1-item-counter"><span>324 Properties</span></div>
                        <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <Link to='/properties'  className="pxp-areas-1-item rounded-lg">
                        <div className="pxp-areas-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/area-6.jpg)'}} />
                        <div className="pxp-areas-1-item-details">
                          <div className="pxp-areas-1-item-details-area">Marina District</div>
                          <div className="pxp-areas-1-item-details-city">Markham, CA</div>
                        </div>
                        <div className="pxp-areas-1-item-counter"><span>158 Properties</span></div>
                        <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                      </Link>
                    </div>
                  </div>
                  <Link to='/properties'  className="pxp-primary-cta text-uppercase mt-2 mt-md-4 pxp-animate">Explore Neighborhoods</Link>
                </div>
                <div className="pxp-cta-1 pxp-cover mt-100 pt-300" style={{backgroundImage: 'url(assets/images/cta-fig-1.jpg)', backgroundPosition: '50% 50%'}}>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="pxp-cta-1-caption pxp-animate-in rounded-lg">
                          <h2 className="pxp-section-h2">Search Smarter, From Anywhere</h2>
                          <p className="pxp-text-light">Power your search with our HouseUP real estate platform, for timely listings and a seamless experience.</p>
                          <Link to='/properties'  className="pxp-primary-cta text-uppercase mt-3 mt-md-5 pxp-animate">Search Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="container mt-100">
                  <h2 className="pxp-section-h2">Our Featured Vendors</h2>
                  <p className="pxp-text-light">We will help you sell your home</p>
                  <div className="row mt-4 mt-md-5">
                    {homePageData && homePageData.vendors ? 
                      homePageData.vendors.map( (data, index) =>
                      index <4 && 
                      <div key={index} className="col-sm-12 col-md-6 col-lg-3">
                        <Link to={`/single-vendor-${data && data.userId && data.userId}`}  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: `url(${data.profilePictureUrl ? data.profilePictureUrl : 'assets/images/agent-2.jpg'})`}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">{data.firstName} {data.lastName}</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> {data.msisdn}</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span></div>
                        </Link>
                      </div>
                      )
                      : ""           
                      }
                  <Link to='/vendors'  className="pxp-primary-cta text-uppercase mt-1 mt-md-4 pxp-animate">See All Vendors</Link>
                </div>
                <div className="container mt-100">
                  <h2 className="pxp-section-h2 text-center">Membership Plans</h2>
                  <p className="pxp-text-light text-center">Choose the plan that suits you best</p>
                  <div className="row mt-5">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <Link to="" className="pxp-plans-1-item ">
                        {/* <div className="pxp-plans-1-item-label">Most Popular</div> 
                        <div className="pxp-plans-1-item-fig">
                          <img src="assets/images/plan-professional.svg" alt="..." />
                        </div>
                        <div className="pxp-plans-1-item-title">Monthly</div>
                        <ul className="pxp-plans-1-item-features list-unstyled">
                          {/* <li>10 Listings</li> */}
                          {/*                                      <span className="pxp-plans-1-item-price-currency">$</span>
                                        <span className="pxp-plans-1-item-price-sum">29.99</span>
                                        <span className="pxp-plans-1-item-price-period"> / months</span> 
                        </ul>
                        <div className="pxp-plans-1-item-price">
                          <span className="pxp-plans-1-item-price-currency">$</span>
                          <span className="pxp-plans-1-item-price-sum">29.99</span>
                          <span className="pxp-plans-1-item-price-period"> / month</span>
                        </div>
                        <div className="pxp-plans-1-item-cta text-uppercase">Choose Plan</div>
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <Link to="" className="pxp-plans-1-item pxp-is-popular">
                        <div className="pxp-plans-1-item-label">Most Popular</div>
                        <div className="pxp-plans-1-item-fig">
                          <img src="assets/images/plan-business.svg" alt="..." />
                        </div>
                        <div className="pxp-plans-1-item-title">Annually</div>
                        <ul className="pxp-plans-1-item-features list-unstyled">
                          
                        </ul>
                        <div className="pxp-plans-1-item-price">
                          <span className="pxp-plans-1-item-price-currency">$</span>
                          <span className="pxp-plans-1-item-price-sum">299.99</span>
                          <span className="pxp-plans-1-item-price-period"> / year</span>
                        </div>
                        <div className="pxp-plans-1-item-cta text-uppercase">Choose Plan</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>*/}
              </div> 
            </React.Fragment>
         );
    }
}
 
 
// const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 2.7 },
};
 
 const items = [
   <div>
     <Link to="/single-prop" className="pxp-prop-card-1 rounded-lg">
       <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
       <div className="pxp-prop-card-1-gradient pxp-animate" />
       <div className="pxp-prop-card-1-details">
         <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
         <div className="pxp-prop-card-1-details-price">$890,000</div>
         <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 920 SF</div>
       </div>
       <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
     </Link>
   </div>,
   <div>
     <Link to="/single-prop" className="pxp-prop-card-1 rounded-lg">
       <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
       <div className="pxp-prop-card-1-gradient pxp-animate" />
       <div className="pxp-prop-card-1-details">
         <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
         <div className="pxp-prop-card-1-details-price">$890,000</div>
         <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 920 SF</div>
       </div>
       <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
     </Link>
   </div>,
   <div>
     <Link to="/single-prop" className="pxp-prop-card-1 rounded-lg">
       <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
       <div className="pxp-prop-card-1-gradient pxp-animate" />
       <div className="pxp-prop-card-1-details">
         <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
         <div className="pxp-prop-card-1-details-price">$890,000</div>
         <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 920 SF</div>
       </div>
       <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
     </Link>
   </div>,
   <div>
     <Link to="/single-prop" className="pxp-prop-card-1 rounded-lg">
       <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
       <div className="pxp-prop-card-1-gradient pxp-animate" />
       <div className="pxp-prop-card-1-details">
         <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
         <div className="pxp-prop-card-1-details-price">$890,000</div>
         <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 920 SF</div>
       </div>
       <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
     </Link>
   </div>,
   <div>
     <Link to="/single-prop" className="pxp-prop-card-1 rounded-lg">
       <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
       <div className="pxp-prop-card-1-gradient pxp-animate" />
       <div className="pxp-prop-card-1-details">
         <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
         <div className="pxp-prop-card-1-details-price">$890,000</div>
         <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 920 SF</div>
       </div>
       <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
     </Link>
   </div>,
   <div>
     <Link to="/single-prop" className="pxp-prop-card-1 rounded-lg">
       <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
       <div className="pxp-prop-card-1-gradient pxp-animate" />
       <div className="pxp-prop-card-1-details">
         <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
         <div className="pxp-prop-card-1-details-price">$890,000</div>
         <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 920 SF</div>
       </div>
       <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
     </Link>
   </div>,
   <div>
     <Link to="/single-prop" className="pxp-prop-card-1 rounded-lg">
       <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
       <div className="pxp-prop-card-1-gradient pxp-animate" />
       <div className="pxp-prop-card-1-details">
         <div className="pxp-prop-card-1-details-title">Chic Apartment in Downtown</div>
         <div className="pxp-prop-card-1-details-price">$890,000</div>
         <div className="pxp-prop-card-1-details-features text-uppercase">2 BD <span>|</span> 2 BA <span>|</span> 920 SF</div>
       </div>
       <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
     </Link>
   </div>,
   
 ];

// const mapStateToProps = state => {
//   return {
//     page: state.page
//   }
// };

// const mapDispatchToProps = dispatch => {
//   console.log('mapDispatchToProps in HomePage ' );
//   return {
//       onGetHomePageData: () => dispatch(actions.getHomePageData())
//   }
// };
 
export default home;