import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactPopup from '../../components/Popups/contact';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import index from '..';

class singleProp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactModalState : false,
      singlePropertyData:{},
      id:'',
      commentText:'',
      user:{}
    };
  }

  static getDerivedStateFromProps(props, state) {
  
    let property = props.property;
    let auth = props.auth;

    let stateChanged = false;
    let changedState = {};

    if(auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)){
      changedState.user = auth.user;  
      stateChanged = true;
    }
    if(property && JSON.stringify(state.singlePropertyData) !== JSON.stringify(property.singlePropertyData)){
      changedState.singlePropertyData = property.singlePropertyData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

    contactPopupHanlder = () =>{
      this.setState({
        contactModalState : !this.state.contactModalState
      });
      // console.log('cecking login pop handler', this.state.signupState);
    }

    componentDidMount (){
    const id = this.props.match.params.id;
    console.log('checking id in sigle property: ', id);
    this.setState({
      id: id
    });

    let userData = {
      propertyId: id
    }
    const { singlePropertyData , user  } = this.state;
    console.log(singlePropertyData)
    console.log('property Id', singlePropertyData);

    console.log('user',this.state.user)

    console.log(userData)
    this.props.onGetSinglePropertyData(userData);

    }

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    
    onSubmit = e =>{
      e.preventDefault();
      const { userId ,user , commentText , propertyId , postId , storyImageId , vendorId , category  , singlePropertyData } = this.state;

    
      const data = {
        postId:Number(postId),
        category:category,
        storyImageId:Number(storyImageId),
        // propertyId:Number(propId),
        commentText:commentText,
        userId:userId,
        vendorId:vendorId
    }
      console.log('data pakage of comment api', data);
    
      this.props.onCommentAdded(data);
    
    }


    render() { 
      const { singlePropertyData , commentText } = this.state;
      console.log('single property data :', singlePropertyData);
      const data = singlePropertyData;
        return ( 
            <React.Fragment>
                <div className="pxp-content">
                <div className="pxp-single-property-top pxp-content-wrapper mt-100">
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <h2 className="pxp-sp-top-title">{data && data.adTitle}</h2>
                        <p className="pxp-sp-top-address pxp-text-light">
                         {data && data.currency && data.currency.symbol} {data && data.price } {data && data.currency && data.currency.lable}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrapper pxp-single-property-gallery-container">
                  <div className="pxp-single-property-gallery" itemScope itemType="http://schema.org/ImageGallery">
                    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" className="pxp-sp-gallery-main-img">
                      <a href="images/prop-7-1-big.jpg" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: `url(${data && data.imageList && data.imageList.length && data.imageList[0] && data.imageList[0].imageURL})`}} />
                      <figcaption itemProp="caption description">
                        Image caption
                      </figcaption>
                    </figure>
                    {
                      data && data.imageList && data.imageList.length ?
                      data.imageList.map((img, index) => 
                      index>0 && index<5 ?
                        <figure key={index} itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                          <a href="images/prop-2-3-gallery.jpg" itemProp="contentUrl" data-size="1920x1459" className="pxp-cover" style={{backgroundImage: `url(${img && img.imageURL})`}} />
                          <figcaption itemProp="caption description">
                            Image caption
                          </figcaption>
                        </figure>
                        : ""
                      )
                      : "" 
                    }
                    
                  </div>
                  <a href="#" className="pxp-sp-gallery-btn">View Photos</a>
                  <div className="clearfix" />
                </div>
                <div className="container mt-4">
                  <div className="row">
                    <div className="col-lg-8">
                      {
                        data && data.address ?
                        <div style={{color: '#000', fontWeight: '300', fontFamily: 'Light'}}> <span className="property-details">Address:</span> {data && data.address}</div>
                        : ""
                      }
                          {data && data.propertyType ?
                          <div style={{color: '#000', fontWeight: '300', fontFamily: 'Light'}}> <span className="property-details">Property type:</span> { data && data.propertyType} </div> 
                          : ""
                          }
                          {
                            data && data.rentalListingYN ? 
                            <div style={{color: '#000', fontWeight: '300', fontFamily: 'Light'}}><span className="property-details">Rental:</span>{data && data.rentalListingYN}</div> 
                            : ""
                          }
                          {
                            data && data.createdDate ?
                            <div style={{color: '#000', fontWeight: '300', fontFamily: 'Light'}}><span className="property-details">Date listed:</span> {data && data.createdDate}</div>
                            : ""
                          }
                      <div className="pxp-single-property-section mt-4 mt-md-5">
                        <div className="mt-3 mt-md-4">
                          {
                            data && data.description ?
                            <>
                            <h3>Description</h3>
                            <p>
                              {data.description}
                            </p>
                            </>
                            : ""
                          }
                        
                        </div>
                        <hr style={{background: '#EFEFF4'}} />
                        <div>
                        <h3>Details</h3>
                        <div className="mt-3 mt-md-4">
                          {
                            data && data.buildingType ? 
                            <div> <span  className="property-details">Building type: </span>{data && data.buildingType} </div> 
                            : ''
                          }
                          {
                            data && data.noOfBathroomsValue ? 
                            <div><span className="property-details">Bathrooms: </span>{data && data.noOfBathroomsValue}</div>
                            : "" 
                          }
                          {
                            data && data.noOfBedrooms ? 
                            <div><span className="property-details">Bedrooms: </span>{data && data.noOfBedrooms}</div>
                            : ""
                          }
                          {
                            data && data.lotDimensionLength && data.lotDimensionWidth ?
                            <div><span className="property-details">Lot dimensions: </span> {data && data.lotDimensionLength} x {data && data.lotDimensionWidth} </div>
                            : ""
                          }
                          {
                            data && data.lotTotalArea ? 
                            <div><span className="property-details">Lot area: </span> {data && data.lotTotalArea}</div>
                            : ""
                          }
                          {
                            data && data.basementType ?
                            <div><span className="property-details">Basement: </span> {data && data.basementType}</div>
                            : ""
                          }
                          {
                            data && data.garageType ? 
                            <div><span className="property-details">Garage: </span> {data && data.garageType}</div>
                            : ""
                          }
                          {
                            data && data.finishedSqftArea ? 
                            <div><span className="property-details">Sqrt Area: </span> {data && data.finishedSqftArea}</div>
                            : ""
                          }
                          {
                            data && data.primaryHeatingFuel ?
                            <div><span className="property-details">Primary heating fuel: </span> {data && data.primaryHeatingFuel}</div>
                            : ""
                          }
                          {
                            data && data.yearBuilt ?
                            <div><span className="property-details">yearBuilt: </span> {data && data.yearBuilt}</div>
                            : ""
                          }
                          {
                            data && data.yearFurnaceBuilt ?
                           <div><span className="property-details">Year furnace installed: </span> {data && data.yearFurnaceBuilt}</div>
                            : ""
                        }
                        {
                          data && data.yearRoofInstalled ?
                          <div><span className="property-details">Year roof installed: </span> {data && data.yearRoofInstalled}</div>
                          : ""
                        }
                        {
                          data && data.storeys ?
                          <div><span className="property-details">Storeys: </span> {data && data.storeys}</div>
                          : ""
                        }
                        {
                          data && data.waterSourceType ?
                          <div><span className="property-details">Water source: </span> {data && data.waterSourceType}</div>
                          : ""
                        }
                        {
                          data && data.condoFee ?
                          <div><span className="property-details">Condo fees (/month): </span> {data && data.condoFee}</div>
                          : ""
                        }
                        {
                          data && data.parkingSpaces ?  
                          <div><span className="property-details">Parking Spaces: </span> {data && data.parkingSpaces}</div>
                          : ""
                        }
                        </div>
                        </div>
                      </div>
                      <div className="pxp-single-property-section mt-4 mt-md-5">
                        <h3>Amenities</h3>
                        <div className="row mt-3 mt-md-4">
                        {
                              data && data.amenites && data.amenites.internet ?
                          <div className="col-sm-6 col-lg-4">
                            
                              <div className="pxp-sp-amenities-item">
                              Internet
                            </div>
                          </div>
                             : ""
                            }
                            
                            {
                              data && data.amenites && data.amenites.garage ?
                              <div className="col-sm-6 col-lg-4">
                              <div className="pxp-sp-amenities-item">
                                 Garage
                              </div>
                            </div>
                            : ""
                            }
                          {
                            data && data.amenites && data.amenites.ac ?
                            <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Air Conditioning
                            </div>
                          </div>
                          : ""
                          }
                          {
                            data && data.amenites && data.amenites.dishWasher ?
                            <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                               Dishwasher
                            </div>
                          </div>
                          : ""
                          }
                          {
                            data && data.amenites && data.amenites.disposal ?
                            <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                               Disposal
                            </div>
                          </div> 
                          : ""
                          }
                          {
                            data && data.amenites && data.amenites.balcony ?
                            <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Balcony
                            </div>
                          </div>
                          : ""
                          }
                          {
                            data && data.amenites && data.amenites.gym ?
                            <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Gym
                            </div>
                          </div>
                          : ""
                          }
                          {
                            data && data.amenites && data.amenites.playroom ?
                            <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                               Playroom
                            </div>
                          </div>
                          : ""
                          }
                          {
                            data && data.amenites && data.amenites.bar ?
                            <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Bar
                            </div>
                          </div>
                          : ""
                          }
                          </div>
                      </div>
                      <div className="pxp-single-property-section mt-4 mt-md-5">
                        <h3>Explore the Area</h3>
                        <div className="pxp-sp-pois-nav mt-3 mt-md-4">
                          <div className="pxp-sp-pois-nav-transportation text-uppercase">
                            Transportation
                          </div>
                          <div className="pxp-sp-pois-nav-Door Buds text-uppercase">
                            Door Buds
                          </div>
                          <div className="pxp-sp-pois-nav-shopping text-uppercase">
                            Shopping
                          </div>
                          <div className="pxp-sp-pois-nav-cafes text-uppercase">
                            Cafes &amp; Bars
                          </div>
                          <div className="pxp-sp-pois-nav-arts text-uppercase">
                            Arts &amp; Entertainment
                          </div>
                          <div className="pxp-sp-pois-nav-fitness text-uppercase">
                            Fitness
                          </div>
                        </div>
                        <div id="pxp-sp-map" className="mt-3" />
                      </div>
                      <div className="pxp-single-property-section mt-4 mt-md-5">
                        <h3>Schools in Marina District</h3>
                        <ul className="nav nav-tabs pxp-nav-tabs mt-3 mt-md-4">
                          <li className="nav-item">
                            <Link className="nav-link active" to="" data-toggle="tab">Elementary</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="" data-toggle="tab">Middle</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="" data-toggle="tab">High</Link>
                          </li>
                        </ul>
                        <div className="tab-content mt-3">
                          <div className="tab-pane active" id="elementary" role="tabpanel">
                            <table className="table table-responsive pxp-table">
                              <thead>
                                <tr>
                                  <th scope="col">School</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Grades</th>
                                  <th scope="col">Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane" id="middle" role="tabpanel">
                            <table className="table table-responsive pxp-table">
                              <thead>
                                <tr>
                                  <th scope="col">School</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Grades</th>
                                  <th scope="col">Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane" id="high" role="tabpanel">
                            <table className="table table-responsive pxp-table">
                              <thead>
                                <tr>
                                  <th scope="col">School</th>
                                  <th scope="col">Type</th>
                                  <th scope="col">Grades</th>
                                  <th scope="col">Rating</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                 
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-100">
                        <div className="col-sm-12 col-lg-12">
                          <div className="pxp-agent-block">
                            <div className="pxp-agent-comments">
                              {/* <h4>3 Reviews</h4> */}
                              <div className="mt-3 mt-md-4">
                              {
                                data && data.propertyComments && data.propertyComments.length ?
                                data.propertyComments.map( (da , index ) => 
                                  <div key={index} className="media mt-2 mt-md-3">
                                  <img src={da && da.profilePictureUrl} className="mr-3" alt="..." />
                                  <div className="media-body">
                              <h5> {da && da.userFullName}</h5>
                                    <div className="pxp-agent-comments-date">
                                      {da && da.createDateTime}
                                    </div>
                                    <p> {da && da.commentText} </p>
                                  </div>
                                </div>
                                )
                                : ""
                                }
                              </div>
                              <h4 className="mt-4 mt-md-5">Leave a review</h4>
                              <form action="/single-vendor" className="pxp-agent-comments-form mt-3 mt-md-4">
                                <div className="row">
                                  <div className="col-sm-12 col-md-6">
                                  </div>
                                </div>
                                <div className="form-group comment-send-btn">
                                <input className="form-control" placeholder="Write your review here..." style={{height:'75px'}} 
                                name="commentText" value={commentText} onChange={this.onChange} />
                                <span className="send-btn-single-property" onClick={this.onSubmit}><img src={require('../../assets/images/ic_sent.svg')} alt=""/></span>
                              </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="pxp-single-property-section pxp-sp-agent-section mt-4 mt-md-5 mt-lg-0">
                        <h3>Listed By</h3>
                        <div className="pxp-sp-agent mt-3 mt-md-4">
                          <Link to='/single-vendor'  className="pxp-sp-agent-fig pxp-cover rounded-lg" style={{backgroundImage: `url(${data && data.user && data.user.profilePictureUrl ? data.user.profilePictureUrl : 'assets/images/ic_profile_placeholder.png'})`}} />
                          <div className="pxp-sp-agent-info">
                            <div className="pxp-sp-agent-info-name">
                              <Link to='/single-vendor' >{data && data.user && data.user.firstName} {data && data.user && data.user.lastName} </Link>
                            </div>
                            <div className="pxp-sp-agent-info-rating">
                            </div>
                            <div className="pxp-sp-agent-info-phone">
                               {data && data.user && data.user.provinceDesc}
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="pxp-sp-agent-btns mt-3 mt-md-4">
                            <Link to="" className="pxp-sp-agent-btn-main" data-toggle="modal" data-target="#pxp-contact-agent"  onClick={this.contactPopupHanlder}  ><span className="fa fa-envelope-o"/>
                            {this.state.contactModalState ? <ContactPopup  contactModalState={this.state.contactModalState}  /> :null }
                             Contact Us</Link>
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
    property: state.property,
    auth : state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCommentAdded : (data) => dispatch(actions.AddComments(data)),
    onGetSinglePropertyData: (userData) => dispatch(actions.getSingleProperty(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(singleProp);