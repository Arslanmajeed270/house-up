import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactPopup from '../../components/Popups/contact';

class singleProp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactModalState : false
    };
  }



    contactPopupHanlder = () =>{
      this.setState({
        contactModalState : !this.state.contactModalState
      });
      console.log('cecking login pop handler', this.state.signupState);
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="pxp-content">
                <div className="pxp-single-property-top pxp-content-wrapper mt-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <h2 className="pxp-sp-top-title">Beautiful House in Marina</h2>
                        <p className="pxp-sp-top-address pxp-text-light">
                          542 29th Avenue, Marina District, San Francisco, CA 94121
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div className="pxp-sp-top-btns mt-2 mt-md-0">
                          <Link to="" className="pxp-sp-top-btn"><span className="fa fa-star" /> Save</Link>
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
                          <div>5 <span>BD</span></div>
                          <div>4 <span>BA</span></div>
                          <div>3,945 <span>SF</span></div>
                        </div>
                        <div className="pxp-sp-top-price mt-3 mt-md-0">$5,198,000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pxp-single-property-gallery-container mt-4 mt-md-5">
                  <div className="pxp-single-property-gallery" itemScope itemType="http://schema.org/ImageGallery">
                    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" className="pxp-sp-gallery-main-img">
                      <Link to="" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-7-1-big.jpg)'}} />
                      <figcaption itemProp="caption description">
                        Image caption
                      </figcaption>
                    </figure>
                    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                      <Link to="" itemProp="contentUrl" data-size="1920x1459" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-2-3-gallery.jpg)'}} />
                      <figcaption itemProp="caption description">
                        Image caption
                      </figcaption>
                    </figure>
                    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                      <Link to="" itemProp="contentUrl" data-size="1920x2560" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-2-3-gallery.jpg)'}} />
                      <figcaption itemProp="caption description">
                        Image caption
                      </figcaption>
                    </figure>
                    <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                      <Link to="" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-2-3-gallery.jpg)'}} />
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
                              <div className="pxp-sp-kd-item-value">Apartment</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Year Built
                              </div>
                              <div className="pxp-sp-kd-item-value">1980</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Stories
                              </div>
                              <div className="pxp-sp-kd-item-value">23</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Room Count
                              </div>
                              <div className="pxp-sp-kd-item-value">6</div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="pxp-sp-key-details-item">
                              <div className="pxp-sp-kd-item-label text-uppercase">
                                Parking Spaces
                              </div>
                              <div className="pxp-sp-kd-item-value">2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pxp-single-property-section mt-4 mt-md-5">
                        <h3>Overview</h3>
                        <div className="mt-3 mt-md-4">
                          <p>
                            Fully furnished. Elegantly appointed condominium unit situated
                            on premier location. PS6. The wide entry hall leads to a large
                            living room with dining area. This expansive 2 bedroom and 2
                            renovated marble bathroom apartment has great windows. Despite
                            the interior views, the apartments Southern and Eastern
                            exposures allow for lovely natural light to fill every room.
                            The master suite is surrounded by handcrafted milkwork and
                            features incredible walk-in closet and storage space. The
                            second bedroom is<span className="pxp-dots">...</span><span className="pxp-dots-more">
                              a corner room with double windows. The kitchen has fabulous
                              space, new appliances, and a laundry area. Other features
                              include rich herringbone floors, crown moldings and coffered
                              ceilings throughout the apartment. 1049 5th Avenue is a
                              classic pre-war building located across from Central Park,
                              the reservoir and The Metropolitan Museum. Elegant lobby and
                              24 hours doorman. This is a pet-friendly building.
                              <br /><br />
                              Conveniently located close to several trendy fitness centers
                              like Equinox, New York Sports Clubs &amp; Crunch. Fine
                              Door Buds around the area, as well as top-ranked schools.
                              2% Flip tax paid by buyer to the condominium. Building just
                              put an assessment for 18 months of approximately $500 per
                              month.</span>
                          </p>
                          <Link to="" className="pxp-sp-more text-uppercase"><span className="pxp-sp-more-1">Continue Reading
                              <span className="fa fa-angle-down" /></span><span className="pxp-sp-more-2">Show Less <span className="fa fa-angle-up" /></span></Link>
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
                      {/* 
                                <div class="pxp-single-property-section mt-4 mt-md-5">
                                    <h3>Payment Calculator</h3>
                                    <div class="pxp-calculator-view mt-3 mt-md-4">
                                        <div class="row">
                                            <div class="col-sm-12 col-lg-4 align-self-center">
                                                <div class="pxp-calculator-chart-container">
                                                    <canvas id="pxp-calculator-chart"></canvas>
                                                    <div class="pxp-calculator-chart-result">
                                                        <div class="pxp-calculator-chart-result-sum">$11,277</div>
                                                        <div class="pxp-calculator-chart-result-label">per month</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-lg-8 align-self-center mt-3 mt-lg-0">
                                                <div class="pxp-calculator-data">
                                                    <div class="row justify-content-between">
                                                        <div class="col-8">
                                                            <div class="pxp-calculator-data-label"><span class="fa fa-minus"></span>Principal and Interest</div>
                                                        </div>
                                                        <div class="col-4 text-right">
                                                            <div class="pxp-calculator-data-sum" id="pxp-calculator-data-pi"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="pxp-calculator-data">
                                                    <div class="row justify-content-between">
                                                        <div class="col-8">
                                                            <div class="pxp-calculator-data-label"><span class="fa fa-minus"></span>Property Taxes</div>
                                                        </div>
                                                        <div class="col-4 text-right">
                                                            <div class="pxp-calculator-data-sum" id="pxp-calculator-data-pt"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="pxp-calculator-data">
                                                    <div class="row justify-content-between">
                                                        <div class="col-8">
                                                            <div class="pxp-calculator-data-label"><span class="fa fa-minus"></span>HOA Dues</div>
                                                        </div>
                                                        <div class="col-4 text-right">
                                                            <div class="pxp-calculator-data-sum" id="pxp-calculator-data-hd"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pxp-calculator-form mt-3 mt-md-4">
                                        <input type="hidden" id="pxp-calculator-form-property-taxes" value="$1,068">
                                        <input type="hidden" id="pxp-calculator-form-hoa-dues" value="$2,036">

                                        <div class="row">
                                            <div class="col-sm-12 col-md-6">
                                                <div class="form-group">
                                                    <label for="pxp-calculator-form-term">Term</label>
                                                    <select class="custom-select" id="pxp-calculator-form-term">
                                                        <option value="30">30 Years Fixed</option>
                                                        <option value="20">20 Years Fixed</option>
                                                        <option value="15">15 Years Fixed</option>
                                                        <option value="10">10 Years Fixed</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6">
                                                <div class="form-group">
                                                    <label for="pxp-calculator-form-interest">Interest</label>
                                                    <input type="text" class="form-control pxp-form-control-transform" id="pxp-calculator-form-interest" data-type="percent" value="4.45%">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6">
                                                <div class="form-group">
                                                    <label for="pxp-calculator-form-price">Home Price</label>
                                                    <input type="text" class="form-control pxp-form-control-transform" id="pxp-calculator-form-price" data-type="currency" value="$5,198,000">
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-6">
                                                <div class="row">
                                                    <div class="col-7 col-sm-7 col-md-8">
                                                        <div class="form-group">
                                                            <label for="pxp-calculator-form-down-price">Down Payment</label>
                                                            <input type="text" class="form-control pxp-form-control-transform" id="pxp-calculator-form-down-price" data-type="currency" value="$519,800">
                                                        </div>
                                                    </div>
                                                    <div class="col-5 col-sm-5 col-md-4">
                                                        <div class="form-group">
                                                            <label for="pxp-calculator-form-down-percentage">&nbsp;</label>
                                                            <input type="text" class="form-control pxp-form-control-transform" id="pxp-calculator-form-down-percentage" data-type="percent" value="10%">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
                                  <td>
                                    5/5<span className="pxp-school-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                  <td>
                                    5/5<span className="pxp-school-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span>
                                  </td>
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
                                  <td>
                                    5/5<span className="pxp-school-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                  <td>
                                    5/5<span className="pxp-school-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span>
                                  </td>
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
                                  <td>
                                    5/5<span className="pxp-school-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Harvest Collegiate High School</td>
                                  <td>Public</td>
                                  <td>9-11</td>
                                  <td>
                                    5/5<span className="pxp-school-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-100">
                        {/*  <div class="col-sm-12 col-lg-12"></div> */}
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
                                    {/*                                                 <div class="form-group">
                                                            <label for="pxp-agent-comments-name">You Name</label>
                                                            <input type="text" class="form-control" id="pxp-agent-comments-name" placeholder="Enter your full name">
                                                        </div> */}
                                  </div>
                                  {/*                                             <div class="col-sm-12 col-md-6">
                                                        <div class="form-group">
                                                            <label for="pxp-agent-comments-email">You Email</label>
                                                            <input type="text" class="form-control" id="pxp-agent-comments-email" placeholder="Enter your email address">
                                                        </div>
                                                    </div> */}
                                </div>
                                <div className="form-group">
                                  <label className="d-block">Rate the Agent</label>
                                  <span className="pxp-single-agent-rating"><span data-rating={5} /><span data-rating={4} /><span data-rating={3} /><span data-rating={2} /><span data-rating={1} /></span>
                                  <div className="clearfix" />
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
                              <Link to='/single-vendor' >Erika Tillman</Link>
                            </div>
                            <div className="pxp-sp-agent-info-rating">
                              <span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" />
                            </div>
                            <div className="pxp-sp-agent-info-email">
                              <Link to="">erika.tillman@ HouseUPcom</Link>
                            </div>
                            <div className="pxp-sp-agent-info-phone">
                              <span className="fa fa-phone" /> (123) 456-7890
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
 
export default singleProp;