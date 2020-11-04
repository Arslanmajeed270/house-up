import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactPopup from '../../components/Popups/contact';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class singleProp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactModalState : false,
      singlePropertyData:{},
      id:''
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let property = props.property;

    let stateChanged = false;
    let changedState = {};

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
    console.log(userData)
    this.props.onGetSinglePropertyData(userData);

    }
    render() { 
      const { singlePropertyData } = this.state;
      console.log('single property data :', singlePropertyData);
      const data = singlePropertyData;
        return ( 
            <React.Fragment>
                <div className="pxp-content">
                <div className="pxp-single-property-top pxp-content-wrapper mt-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <h2 className="pxp-sp-top-title">{data && data.adTitle}</h2>
                        <p className="pxp-sp-top-address pxp-text-light">
                          {data && data.address}
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div className="pxp-sp-top-btns mt-2 mt-md-0">
                          <div className="dropdown">
                            <Link className="pxp-sp-top-btn" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="far fa-share-square" /> Share
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                              <Link className="dropdown-item" to=""><span className="fa fa-facebook" /> Facebook</Link>
                              <Link className="dropdown-item" to=""><span className="fa fa-twitter" /> Twitter</Link>
                              <Link className="dropdown-item" to=""><span className="fa fa-pinterest" /> Pinterest</Link>
                              <Link className="dropdown-item" to=""><span className="fa fa-linkedin" /> LinkedIn</Link>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix d-block d-xl-none" />
                        <div className="pxp-sp-top-feat mt-3 mt-md-0">
                          <div>{data && data.noOfBedrooms ? data.noOfBathrooms : 0} <span>BD</span></div>
                          <div>{data && data.noOfBathrooms ? data.noOfBathrooms : 0 } <span>BA</span></div>
                          <div>{data && data.finishedSqftArea ? data.finishedSqftArea : 0} <span>SF</span></div>
                        </div>
                       <div className="pxp-sp-top-price mt-3 mt-md-0">{data.currency && data.currency.symbol ? data.currency.symbol : ''}{data.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pxp-single-property-gallery-container mt-4 mt-md-5">
                  <div className="pxp-single-property-gallery" itemScope itemType="http://schema.org/ImageGallery">
                    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" className="pxp-sp-gallery-main-img">
                      <Link to="" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: `url(${data && data.imageList && data.imageList.length && data.imageList[0].imageURL ? data.imageList[0].imageURL : 'assets/images/ic_profile_placeholder.png'})`}} />
                      <figcaption itemProp="caption description">
                        Image caption
                      </figcaption>
                    </figure>
                    
                    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                      <Link to="" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: `url(${data && data.profilePictureUrl ? data.profilePictureUrl : 'assets/images/ic_profile_placeholder.png'})` }} />
                      <figcaption itemProp="caption description">
                        Image caption
                      </figcaption>
                    </figure>
                    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                      <Link to="" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-3-gallery.jpg)'}} />
                      <figcaption itemProp="caption description">
                        Image caption
                      </figcaption>
                    </figure>
                  </div>
                  <Link to="" className="pxp-sp-gallery-btn">View Photos</Link>
                  <div className="clearfix" />
                </div>
                <div className="container mt-100">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="pxp-single-property-section">
                        <h3>Key Details</h3>
                        <div className="row mt-3 mt-md-4">
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Status
                              </div>
                              <div className="pxp-sp-kd-item-value">Coming Soon</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Property Type
                              </div>
                              <div className="pxp-sp-kd-item-value">{data.propertyType}</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Year Built
                              </div>
                              <div className="pxp-sp-kd-item-value">{data.yearBuilt}</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Stories
                              </div>
                              <div className="pxp-sp-kd-item-value">{data.storeys ? data.storeys : 0}</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Room Count
                              </div>
                              <div className="pxp-sp-kd-item-value">{data.noOfBedrooms}</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Parking Spaces
                              </div>
                              <div className="pxp-sp-kd-item-value">{data.parkingSpaces}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pxp-single-property-section mt-4 mt-md-5">
                        <h3>Overview</h3>
                        <div className="mt-3 mt-md-4">
                          <p>
                            {data.description}
                          </p>
                        </div>
                      </div>
                      <div className="pxp-single-property-section mt-4 mt-md-5">
                        <h3>Amenities</h3>
                        <div className="row mt-3 mt-md-4">
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-wifi" /> Internet
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-car" /> Garage
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-sun-o" /> Air Conditioning
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-bullseye" /> Dishwasher
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-recycle" /> Disposal
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-clone" /> Balcony
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-futbol-o" /> Gym
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-smile-o" /> Playroom
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              <span className="fa fa-glass" /> Bar
                            </div>
                          </div>
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
                        {/*  <div className="col-sm-12 col-lg-12"></div> */}
                        <div className="col-sm-12 col-lg-12">
                          <div className="pxp-agent-block">
                            <div className="pxp-agent-comments">
                              {/* <h4>3 Reviews</h4> */}
                              <div className="mt-3 mt-md-4">
                                <div className="media">
                                  <img src="assets/images/customer-1.jpg" className="mr-3" alt="..." />
                                  <div className="media-body">
                                    <h5>Scott Goodwin</h5>
                                    <div className="pxp-agent-comments-date">
                                      April 9, 2019 at 2:33 pm
                                    </div>
                                    <p>
                                      Cras sit amet nibh libero, in gravida nulla. Nulla
                                      vel metus scelerisque ante sollicitudin. Cras purus
                                      odio, vestibulum in vulputate at, tempus viverra
                                      turpis. Fusce condimentum nunc ac nisi vulputate
                                      fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                    <div className="media mt-2 mt-md-3">
                                      <img src="assets/images/customer-4.jpg" className="mr-3" alt="..." />
                                      <div className="media-body">
                                        <h5>Alayna Becker</h5>
                                        <div className="pxp-agent-comments-date">
                                          April 9, 2019 at 2:33 pm
                                        </div>
                                        <p>
                                          Cras sit amet nibh libero, in gravida nulla.
                                          Nulla vel metus scelerisque ante sollicitudin.
                                          Cras purus odio, vestibulum in vulputate at,
                                          tempus viverra turpis. Fusce condimentum nunc ac
                                          nisi vulputate fringilla. Donec lacinia congue
                                          felis in faucibus.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="media mt-2 mt-md-3">
                                  <img src="assets/images/customer-3.jpg" className="mr-3" alt="..." />
                                  <div className="media-body">
                                    <h5>Erika Tillman</h5>
                                    <div className="pxp-agent-comments-date">
                                      April 9, 2019 at 2:33 pm
                                    </div>
                                    <p>
                                      Cras sit amet nibh libero, in gravida nulla. Nulla
                                      vel metus scelerisque ante sollicitudin. Cras purus
                                      odio, vestibulum in vulputate at, tempus viverra
                                      turpis. Fusce condimentum nunc ac nisi vulputate
                                      fringilla. Donec lacinia congue felis in faucibus.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <h4 className="mt-4 mt-md-5">Leave a review</h4>
                              <form action="/single-vendor" className="pxp-agent-comments-form mt-3 mt-md-4">
                                <div className="row">
                                  <div className="col-sm-12 col-md-6">
                                    {/*                                                 <div className="form-group">
                                                            <label for="pxp-agent-comments-name">You Name</label>
                                                            <input type="text" className="form-control" id="pxp-agent-comments-name" placeholder="Enter your full name">
                                                        </div> */}
                                  </div>
                                  {/*                                             <div className="col-sm-12 col-md-6">
                                                        <div className="form-group">
                                                            <label for="pxp-agent-comments-email">You Email</label>
                                                            <input type="text" className="form-control" id="pxp-agent-comments-email" placeholder="Enter your email address">
                                                        </div>
                                                    </div> */}
                                </div>
                                <div className="form-group">
                                  <label htmlFor="pxp-agent-comments-review">Write a Review</label>
                                  <textarea className="form-control" id="pxp-agent-comments-review" rows={6} placeholder="Write your review here..." defaultValue={""} />
                                </div>
                                <Link to="" className="pxp-agent-comments-form-btn">Post Review</Link>
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
                          <Link to='/single-vendor'  className="pxp-sp-agent-fig pxp-cover rounded-lg" style={{backgroundImage: 'url(assets/images/agent-4.jpg)', backgroundPosition: 'top center'}} />
                          <div className="pxp-sp-agent-info">
                            <div className="pxp-sp-agent-info-name">
                              <Link to='/single-vendor' >{data.contactName}</Link>
                            </div>
                            <div className="pxp-sp-agent-info-rating">
                            </div>
                            <div className="pxp-sp-agent-info-email">
                              <Link to="">{data.contactEmail}</Link>
                            </div>
                            <div className="pxp-sp-agent-info-phone">
                              <span className="fa fa-phone" /> {data.contactNumber}
                            </div>
                          </div>
                          <div className="clearfix" />
                          <div className="pxp-sp-agent-btns mt-3 mt-md-4">
                            <Link to="" className="pxp-sp-agent-btn-main" data-toggle="modal" data-target="#pxp-contact-agent"  onClick={this.contactPopupHanlder}  ><span className="fa fa-envelope-o"/>
                            {this.state.contactModalState ? <ContactPopup  contactModalState={this.state.contactModalState}  /> :null }
                             Contact Us</Link>
                            <Link to="" className="pxp-sp-agent-btn" data-toggle="modal" data-target="#pxp-contact-agent"><span className="fa fa-calendar-check-o" /> Request
                              Tour</Link>
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
    property: state.property
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetSinglePropertyData: (userData) => dispatch(actions.getSingleProperty(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(singleProp);