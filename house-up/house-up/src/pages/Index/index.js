import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import{Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loading : false,
      indexPageData : {}
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    const errors = props.errors;
    const page = props.page;

    let stateChanged = false;
    let changedState = {};

    if(page && JSON.stringify(state.indexPageData) !== JSON.stringify(page.indexPageData)){
      changedState.indexPageData = page.indexPageData;  
      stateChanged = true;
    }


    if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
      changedState.errors= errors;
      stateChanged = true;
    }

    if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
        changedState.loading = page.loading;
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
      const { errors, loading, indexPageData } = this.state;
      console.log('checking indexPageData in IndexPage: ', indexPageData);
      let pageContent = '';

      if(loading){
        pageContent = <Spinner />
      }
      else{
        pageContent = "";
      }
      
      const items =[];

      if(indexPageData && indexPageData.userStories && indexPageData.userStories.length){
        for(let i=0; i<indexPageData.userStories.length; i++){
          let item = (<div style={{width: '69px'}}>
            <div className="pxp-prop-card-dashboard" style={{backgroundImage: `url(${ indexPageData.userStories[i].stories[0].storyImages[0].storyImageURL ? indexPageData.userStories[i].stories[0].storyImages[0].storyImageURL : "assets/images/dashboard/slider-4.png"})`}} />
              <span className="dashboard-user-name">{indexPageData.userStories[i].user.firstName}</span>
              <span className="dashboard-user-name">{indexPageData.userStories[i].user.professionDesc}</span>

            </div>
       ); 
    items.push(item);
  }
}



  const locationItems = [];
  if(indexPageData && indexPageData.propertyCounts && indexPageData.propertyCounts.length){
    for(let i=0; i<indexPageData.propertyCounts.length; i++){
      let locationItem = (<div className="neighbourhoods_slider">
        <Link to="#" />
        <div className="pxp-prop-card-explore" style={{backgroundImage: `url(${ 
          indexPageData.propertyCounts[i] && indexPageData.propertyCounts[i].properties[0] && indexPageData.propertyCounts[i].properties[0].imageList[0] && indexPageData.propertyCounts[i].properties[0].imageList[0].imageURL ? indexPageData.propertyCounts[i].properties[0].imageList[0].imageURL : require("../../assets/images/dashboard/ottawa.png")  })` }}><Link to="#">
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

        return ( 
            <React.Fragment>
              <main>
                <div className="container">
                {errors && errors.message &&
                  <Alert variant='danger'>
                    <strong>Error!</strong> { errors.message }
                  </Alert>
                }                
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
                          <div key={index} className="sort-by">
                            <div className="sort-heading mt-4" style={{marginBottom: '10px'}}>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                  <div className="sort-by-heading hhhsize">
                                  </div>
                                </div>
                              </div>
                            </div>
                            {
                            indexPageData && indexPageData.vendorPostPropertiesList &&
                            indexPageData.vendorPostPropertiesList.map((data, index) =>
                            <React.Fragment key={index}>
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
                            indexPageData && indexPageData.vendors && indexPageData.vendors.length && indexPageData.vendors.map((data, index)=>
                            index<3 &&
                            <Link key={index} to={`/single-vendor-${data && data.userId && data.userId}`}>
                              <div className="vendor-box">
                                <div className="row">
                                  <div className="col-md-9 col-sm-9 col-8">
                                    <div className="vendor-detail">
                                      { data && data.firstName ?  data.firstName : ''} {data && data.lastName ? data.lastName : ''}
                                      <p>
                                        <span>{ data && data.professionDesc && data.professionDesc !== "null" ? data.professionDesc : " " }</span>
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star grey" />
                                        <i className="fa fa-star grey" />
                                      </p>
                                      <span className="address-span">{ data && data.address ? data.address : '' }</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-sm-3 col-4">
                                    <div className="vendor-img" style={{backgroundImage:`url(${data && data.profilePictureUrl ? data.profilePictureUrl : 'assets/images/ic_profile_placeholder.png'})`}} />
                                  </div>
                                </div>
                              </div>
                            </Link>
                            )
                            }
                            
                            <div className="dashboard-newsfeed">
                          <div className="dashboard-newsfeed-content">
                            <ul className="news-feed-user-ul">
                              <li>
                                <span className={data && data.object && data.object.user && data.object.user.userTypeId ===  2 ? "news-feed-user-img" : "news-feed-user-imgs"} style={{backgroundImage: `url(${data && data.object && data.object.user && data.object.user.profilePictureUrl ? data.object.user.profilePictureUrl : "assets/images/dashboard/ic_profile_placeholder.png"} )`}} />
                                <span style={{fontSize:'20px' , fontWeight:'bold', padding:'0px 7px 0px 10px' }} className="news-feed-user-name">{data && data.object && data.object.user && data.object.user.firstName} {data && data.object && data.object.user && data.object.user.lastName} . 
                                  <Link to=""> Follow</Link>
                                  <h2 style={{fontSize:'20px'}}>{data && data.object && data.object.city ? data.object.city : " " } . {data && data.object && data.object.date} </h2>
                                </span>  
                              </li>
                              
                            </ul>
                            
                              {data.category && data.category === "Post" ? 
                              <>
                              <div className="dashboard-newsfeed-details">{data && data.category==="Post" ? (data &&data.object && data.object.postText) : (data.object && data.object.description)}</div>
                              <div className="dashboard-newsfeed-img" 
                              style={{
                                backgroundImage:  `url( ${ data.object && data.object.postImages[0] && data.object.postImages[0].imageURL ? data.object.postImages[0].imageURL : require("../../assets/images/ic_post_placeholder.png") }  )` }}>
                              </div>
                              </>
                              :  data.category && data.category === "Property" ?
                              <>
                              <div className="pxp-prop-card-featured" 
                                style={{
                                backgroundImage: `url(${data && data.object && data.object.imageList[0] &&  data.object.imageList[0].imageURL ? data.object.imageList[0].imageURL :  require("../../assets/images/ic_post_placeholder.png") } )`}}
                              >              
                           <div className="d-table w-100 ">
                              <div className="d-table-cell va-bottom featured-height">
                                  <div className="row">
                                      <div className="col-md-6 col-sm-6 col-6">
                                          <div className="feature-head">
                                              <span><b> {data.object && data.object.price ? `${data.object.currency && data.object.currency.symbol ? data.object.currency.symbol : '$' }${data.object.price}.00` : '0'}</b></span>
                                          </div>
                                      </div>
                                      <div className="col-md-6 col-sm-6 col-6">
                                      </div>
                                  </div>
                              </div>
                          </div>
                          </div>
                          <div className="for-rent">
                              {data.object && data.object.adTitle ? data.object.adTitle : '' }
                          </div> 
                              <div className="dashboard-newsfeed-details">{data && data.category==="Post" ? (data &&data.object && data.object.postText) : (data.object && data.object.description)}</div>
</>
                               : null }
                              
                            <Link to="" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target=""> Contact us</Link>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6 post-navbar">
                                  <i className="far fa-heart post-navbar-items" />
                                  <i className="far fa-comment-alt post-navbar-items" />
                                  <i className="far fa-share-square post-navbar-items" />
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
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-4">
                      <div className="side-bar-user mt-100">
                        <div className="main-user">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="min-user-img" style={{ backgroundImage: `url(${ indexPageData && indexPageData.vendors && indexPageData.vendors.length ? indexPageData.vendors[0].profilePictureUrl : 'assets/images/ic_profile_placeholder.png'})`}} />
                            </div>
                            <div className="col-md-9  col-nopadd">
                              <div className="main-user-content">
                                <p>{indexPageData && indexPageData.vendors && indexPageData.vendors.length && indexPageData.vendors[0].firstName ? indexPageData.vendors[0].firstName : ""} {indexPageData && indexPageData.vendors && indexPageData.vendors.length && indexPageData.vendors[0].lastName ? indexPageData.vendors[0].lastName : ""}</p>
                                <span>{ indexPageData && indexPageData.vendors && indexPageData.vendors.length && indexPageData.vendors[0].userName ? `@ ${indexPageData.vendors[0].userName}` : "" }</span>
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
                                <Link to="/professionals">See ALL</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        {indexPageData && indexPageData.vendors &&
                          indexPageData.vendors.map( (data , index) =>
                          index>0 && index<7 ? 
                        <div key={index} className="suggested-vendors-list "> 
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <Link to={`/single-vendor-${data && data.userId && data.userId}`}><div className="suggested-vendor-img">
                                    <img src={data && data.profilePictureUrl ? data.profilePictureUrl : "assets/images/dashboard/ic_profile_placeholder.png"} alt=""/>
                                  </div></Link>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>{data && data.firstName ? data.firstName : ''} {data && data.lastName ? data.lastName : '' }</p>
                                  <span>{data && data.professionDesc && data.professionDesc !== 'null' ? data.professionDesc : '' }</span>
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
                        : " "
                           ) 
                         }    
                      </div>
                    </div>
                  </div>
                </div>
              </main>
                { pageContent }
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
 
const mapStateToProps = state => {
  return {
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetIndexPageData: () => dispatch(actions.getIndexPageData())
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(index);