import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';


import "react-alice-carousel/lib/alice-carousel.css";


import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
// import { Carousel } from 'react-bootstrap';

// import Carousel from 'react-bootstrap/Carousel';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexPageData : {}
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let page = props.page;

    let stateChanged = false;
    let changedState = {};

    if(page && JSON.stringify(state.indexPageData) !== JSON.stringify(page.indexPageData)){
      changedState.indexPageData = page.indexPageData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

  componentDidMount() {
    console.log('indexPage componenet did mount');
    this.props.onGetIndexPageData();
  }

    render() { 
      const { indexPageData } = this.state;
      console.log('checking indexPageData in IndexPage: ', indexPageData);
      
      
      const items =[];

      if(indexPageData && indexPageData.userStories && indexPageData.userStories.length){
        for(let i=0; i<indexPageData.userStories.length; i++){
          let item = (<div style={{width: '35%'}}>
            <div className="pxp-prop-card-dashboard" style={{backgroundImage: `url(${ indexPageData.userStories[i].stories[0].storyImages[0].storyImageURL ? indexPageData.userStories[i].stories[0].storyImages[0].storyImageURL : "assets/images/dashboard/slider-4.png"})`}} />
              <span className="dashboard-user-name">{indexPageData.userStories[i].user.firstName}</span>
            </div>
       ); 
    items.push(item);
  }
}



const locationItems = [];
if(indexPageData && indexPageData.propertyCounts && indexPageData.propertyCounts.length){
  for(let i=0; i<indexPageData.propertyCounts.length; i++){
    let locationItem = (<div>
      <Link to="#" />
      <div className="pxp-prop-card-explore" style={{backgroundImage: 'url(assets/images/dashboard/ottawa.png)'}}><Link to="#">
          <div className="d-table w-100 ">
            <div className="d-table-cell va-bottom neighbours-height paddg">
              <h2>OSHAWA</h2>
              <p>{indexPageData.propertyCounts[i].propertyCount} Properties</p>
            </div>
          </div></Link>
      </div>
    </div>
    ); 
    locationItems.push(locationItem);
  }
}

      // console.log('checking items: ', items);
        return ( 
            <React.Fragment>
              <main>
                <div className="container">
                  <div className="row">
                   <div className="col-lg-7 col-md-12">
                      <div className="newsfeed">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="container-fluid pxp-props-carousel-right mt-100 mtpx-100">
                                <div className="pxp-props-carousel-right-container mt-4 mt-md-5">
                                  <div className="owl-carousel pxp-props-carousel-right-stage-2">
                                    <AliceCarousel
                                      mouseTracking
                                      disableButtonsControls ={true}
                                      items={items}
                                      responsive={responsive}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                            {
                            indexPageData && indexPageData.postNdPropertiesList &&
                            indexPageData.postNdPropertiesList.map((data, index) =>
                            <React.Fragment>
                            {index === 2 && 
                            <div className="explore-our-neighbours">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="container-fluid pxp-props-carousel-right">
                                        <div className="pxp-props-carousel-right-container">
                                            <h2 className="explore-our-neighbours-heading">Explore Our Neighbourhoods</h2>
                                            <div className="pxp-props-carousel-right-stage-3">
                                                <div>
                                                <AliceCarousel
                                                  mouseTracking
                                                  disableButtonsControls ={true}
                                                  items={locationItems}
                                                  responsive={locationResponcive}
                                                />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            } 
                            {index === 9 && 
                            indexPageData && indexPageData.vendors && indexPageData.vendors.map((data, index)=>
                            index<3 &&
                            <Link key={index} to={`/single-vendor-${data && data.userId && data.userId}`}>
                              <div className="vendor-box">
                                <div className="row">
                                  <div className="col-md-9 col-sm-9 col-8">
                                    <div className="vendor-detail">
                                      {data && data.firstName} {data && data.lastName}
                                      <p>
                                        <span>{data && data.keywordsDescribeYourBusiness ? data.keywordsDescribeYourBusiness : " " }</span>
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star grey" />
                                        <i className="fa fa-star grey" />
                                      </p>
                                      <span className="address-span">{data && data.address}</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-sm-3 col-4">
                                    <div className="vendor-img" style={{backgroundImage: `url(${data && data.profilePictureUrl ? data.profilePictureUrl : 'assets/images/dashboard/hashmi.png'})`}} />
                                  </div>
                                </div>
                              </div>
                            </Link>

                            )
                            }
                            <div key={index} className="sort-by">
                            <div className="sort-heading mt-4" style={{marginBottom: '10px'}}>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                  <div className="sort-by-heading hhhsize">
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                  <div className="sort-by-heading imgsize">
                                    <p>SORT BY <img src="assets/images/icons/sort-by.png" alt="" /></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-newsfeed">
                          <div className="dashboard-newsfeed-content">
                            <ul className="news-feed-user-ul">
                              <li>
                                <span className="news-feed-user-imgs" style={{backgroundImage: `url(${data && data.object && data.object.user && data.object.user.profilePictureUrl ? data.object.user.profilePictureUrl : "assets/images/dashboard/sherlin.png"} )`}} />
                                <span className="news-feed-user-name">{data && data.object && data.object.user && data.object.user.firstName} {data && data.object && data.object.user && data.object.user.lastName}</span>
                              </li>
                            </ul>
                            <Link to="">
                            <div class="pxp-prop-card-featured" style={{backgroundImage: `url(${data && data.object && data.object.user && data.object.user.profilePictureUrl ? data.object.user.profilePictureUrl : "assets/images/dashboard/sherlin.png"} )`}}>

                            { data.category && data.category === "Property" ?
                              <>
                              <div class="for-rent">
                              <h4>FOR RENT</h4>
                          </div>               
                           <div class="d-table w-100 ">
                              <div class="d-table-cell va-bottom featured-height">
                                  <h2><i class="fa fa-map-marker-alt"></i> Toronto</h2>
                                  <div class="row">
                                      <div class="col-md-6 col-sm-6 col-6">
                                          <div class="feature-head">
                                              <span><b> $98.00</b>/per night</span>
                                          </div>
                                      </div>
                                      <div class="col-md-6 col-sm-6 col-6">
                                      </div>
                                  </div>
                              </div>
                          </div>
                          </>
                            
                               : null }
                               </div>
                              </Link>
                            <Link to="" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target=""> Contact us</Link>
                            <div />
                            <div className="dashboard-newsfeed-header">{data && data.category==="Post" ? (data && data.object && data.object.postText) : (data.object && data.object.adTitle)}</div>
                            <div className="dashboard-newsfeed-details">{data && data.category==="Post" ? (data &&data.object && data.object.postText) : (data.object && data.object.description)}</div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                <div className="news-feed-icon-user">
                                  <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-5 col-4">
                                <div className="news-feed-icon-user">
                                  <p className="comment-p"><i className="far fa-comment-alt" /> Comments</p>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <div className="news-feed-icon-user">
                                  <p className="heart-p"><i className="far fa-share-square" /> Share</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                        </div>
                            </React.Fragment>
                            )
                          }
                        </div> 
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-4">
                      <div className="side-bar-user mt-100">
                        <div className="main-user">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="min-user-img" style={{backgroundImage: `url(${indexPageData && indexPageData.vendors ? indexPageData.vendors[0].profilePictureUrl : 'assets/images/dashboard/hashmi.png'})`}} />
                            </div>
                            <div className="col-md-9  col-nopadd">
                              <div className="main-user-content">
                                <p>{indexPageData && indexPageData.vendors && indexPageData.vendors[0].firstName} {indexPageData && indexPageData.vendors && indexPageData.vendors[0].lastName}</p>
                                <span>@{indexPageData && indexPageData.vendors && indexPageData.vendors[0].userName}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="suggested-vendors mt-4 mt-md-4 mb-md-3">
                          <div className="row">
                            <div className="col-md-8">
                              <div className="suggested-p">
                                <p>Suggested Vendor For You</p>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="suggested-span text-right">
                                <Link to="/vendors">See ALL</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {indexPageData && indexPageData.vendors &&
                          indexPageData.vendors.map( (data , index) =>
                          index>0 &&
                        <div key={index} className="suggested-vendors-list "> 
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <Link to={`/single-vendor-${data && data.userId && data.userId}`}><div className="suggested-vendor-img">
                                    <img src={data && data.profilePictureUrl ? data.profilePictureUrl : "assets/images/dashboard/liaquat.png"} alt=""/>
                                  </div></Link>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>{data && data.firstName} {data && data.lastName}</p>
                                  <span>{data && data.keywordsDescribeYourBusiness}</span>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="suggested-vendor-follow text-right">
                                  <Link to="">Follow</Link>
                                </div>
                              </div>
                            </div>
                          </div>                        
                        </div>
                           ) 
                         }    
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </React.Fragment>
         );
    }
}

const responsive = {
  0: { items: 2 },
  568: { items: 4 },
  1024: { items: 6.5 }
};

const locationResponcive  = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1.3 },
};
// const locationItems =[
//   <div>
//     <Link to="" /><div className=" nodecor pxp-prop-card-explore" style={{backgroundImage: 'url(assets/images/dashboard/toronto.png)'}}><Link to="">
//         <div className="d-table w-100 ">
//           <div className="d-table-cell va-bottom neighbours-height paddg">
//             <div className="cities-name"> TORONTO</div>
//             <div className="cities-Properties"> 23 Properties</div>
//           </div>
//         </div></Link>
//     </div>
//   </div>,
//   <div>
//     <Link to='/properties' /><div className="pxp-prop-card-explore" style={{backgroundImage: 'url(assets/images/dashboard/ontario.png)'}}><Link to='/properties'>
//         <div className="d-table w-100 ">
//           <div className="d-table-cell va-bottom neighbours-height paddg">
//             <h2>BARRIE</h2>
//             <p>15 Properties</p>
//           </div>
//         </div></Link>
//     </div>
//   </div>,
  
// ]
 
const mapStateToProps = state => {
  return {
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  console.log('mapDispatchToProps in IndexPage ' );
  return {
    onGetIndexPageData: () => dispatch(actions.getIndexPageData())
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(index);