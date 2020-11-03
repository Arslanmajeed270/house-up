import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Spinner from '../../components/common/Spinner';
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageData : {},
      loading : false,

    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let page = props.page;

    let stateChanged = false;
    let changedState = {};


    if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
      changedState.loading = page.loading;  
      stateChanged = true;
    }
    if(page && JSON.stringify(state.homePageData) !== JSON.stringify(page.homePageData)){
      changedState.homePageData = page.homePageData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

  componentDidMount() {
    console.log('homePage componenet did mount');
    this.props.onGetHomePageData();
  }

    render() { 
      const { homePageData , loading } = this.state;
      console.log('checking homePageData in HomePage: ', homePageData);

      let pageContent = '';
      if(loading){
        pageContent = <Spinner />
      }
      else{
        pageContent = "";
      }
      
  const items = [];
  if(homePageData && homePageData.properties && homePageData.properties.length){
    for(let i=0; i<homePageData.properties.length; i++){
      let item = (<div>
        <Link to={`/single-prop-${homePageData.properties[i].propertId}`} className="pxp-prop-card-1 rounded-lg">
          <div className="pxp-prop-card-1-fig pxp-cover" style={{backgroundImage: `url(${ 
          homePageData.properties[i] && homePageData.properties[i].imageList && homePageData.properties[i].imageList[0] && homePageData.properties[i].imageList[0].imageURL ? homePageData.properties[0].imageList[0].imageURL : require("../../assets/images/dashboard/ottawa.png")  })` }} />
          <div className="pxp-prop-card-1-gradient pxp-animate" />
          <div className="pxp-prop-card-1-details">
            <div className="pxp-prop-card-1-details-title">{homePageData.properties[i].adTitle}</div>
      <div className="pxp-prop-card-1-details-price">{homePageData.properties[i].currency.symbol}{homePageData.properties[i].price}</div>
            <div className="pxp-prop-card-1-details-features text-uppercase">{homePageData.properties[i].noOfBedrooms} BD <span>|</span> {homePageData.properties[i].noOfBathrooms} BA <span>|</span> {homePageData.properties[i].finishedSqftArea} SF</div>
          </div>
          <div className="pxp-prop-card-1-details-cta text-uppercase">View Details</div>
        </Link>
      </div>   
      ); 
      items.push(item);
    }
  }

        return ( 
            <React.Fragment>
              <div className="pxp-content">
                <div className="pxp-hero vh-100">
                  <div className="pxp-hero-bg pxp-cover pxp-cover-bottom" style={{backgroundImage: 'url(assets/images/hero-1.jpg)'}} />
                  <div className="pxp-hero-opacity" />
                  <div className="pxp-hero-caption">
                    <div className="container">
                      <h1 className="text-white">House Up</h1>
                      <h6 className="text-white">Own the way you sell your home</h6>
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
                           />
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
                          <div className="pxp-services-item-text-title">List Your Property</div>
                          <div className="pxp-services-item-text-sub">Sell or rent your property <br /> without paying realtor fees</div>
                        </div>
                        <div className="pxp-services-item-cta text-uppercase text-center">Learn More</div>
                      </Link>
                      <Link to='/professionals'  className="pxp-services-item">
                        <div className="pxp-services-item-fig">
                          <img src="assets/images/service-icon-2.svg" alt="..." />
                        </div>
                        <div className="pxp-services-item-text text-center">
                          <div className="pxp-services-item-text-title">Get Help From The Pros</div>
                          <div className="pxp-services-item-text-sub">Find a professional to help <br /> you sell your home</div>
                        </div>
                        <div className="pxp-services-item-cta text-uppercase text-center">Learn More</div>
                      </Link>
                      <Link to='/properties'  className="pxp-services-item">
                        <div className="pxp-services-item-fig">
                          <img src="assets/images/service-icon-3.svg" alt="..." />
                        </div>
                        <div className="pxp-services-item-text text-center">
                          <div className="pxp-services-item-text-title">Buy or rent homes</div>
                          <div className="pxp-services-item-text-sub">Search thousands of house <br /> and apartments in your area</div>
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
                  {
                    homePageData && homePageData.propertyCounts && homePageData.propertyCounts.length 
                    && homePageData.propertyCounts.map( (data, index) =>
                    
                      <div className="col-sm-12 col-md-6 col-lg-4">
                      <Link to='/properties'  className="pxp-areas-1-item rounded-lg">
                        <div className="pxp-areas-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/area-1.jpg)'}} />
                        <div className="pxp-areas-1-item-details">
                          <div className="pxp-areas-1-item-details-area">{data && data.cityName}</div>
                          <div className="pxp-areas-1-item-details-city"></div>
                        </div>
                        <div className="pxp-areas-1-item-counter"><span>{data && data.propertyCount} Properties</span></div>
                        <div className="pxp-areas-1-item-cta text-uppercase">Explore</div>
                      </Link>
                    </div>
                    )
                  }
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
                <div className="container mt-100">
                  <h2 className="pxp-section-h2">Find a Professionals</h2>
                  <p className="pxp-text-light">Search for a qualified professional in your area</p>
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
                      <div className="col-lg-12">
                        <Link to='/professionals'  className="pxp-primary-cta text-uppercase mt-1 mt-md-4 pxp-animate">See All Professionals</Link>
                      </div>
                </div>
                </div>
              </div> 
             {pageContent}
            </React.Fragment>
         );
    }
}
 
 
// const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4.7 },
};
 
const mapStateToProps = state => {
  return {
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  console.log('mapDispatchToProps in HomePage ' );
  return {
      onGetHomePageData: () => dispatch(actions.getHomePageData())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(home);
 