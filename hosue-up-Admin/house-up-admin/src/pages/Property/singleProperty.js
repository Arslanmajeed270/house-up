import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class singleProperty extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row">
                      <div className="pxp-content">
                        <div className=" mt-100">
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12 col-md-5">
                                <h2 className="pxp-sp-top-title">Beautiful House in Marina</h2>
                                <p className="pxp-sp-top-address pxp-text-light">542 29th Avenue, Marina District, San Francisco, CA 94121</p>
                                <div className="col-sm-12 col-md-7">
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
                                <Link to="images/prop-7-1-big.jpg" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-7-1-big.jpg)'}} />
                                <figcaption itemProp="caption description">Image caption</figcaption>
                              </figure>
                              <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                <Link to="images/prop-2-3-gallery.jpg" itemProp="contentUrl" data-size="1920x1459" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-2-3-gallery.jpg)'}} />
                                <figcaption itemProp="caption description">Image caption</figcaption>
                              </figure>
                              <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                <Link to="images/prop-2-3-gallery.jpg" itemProp="contentUrl" data-size="1920x2560" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-2-3-gallery.jpg)'}} />
                                <figcaption itemProp="caption description">Image caption</figcaption>
                              </figure>
                              <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                <Link to="images/prop-2-3-gallery.jpg" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-2-3-gallery.jpg)'}} />
                                <figcaption itemProp="caption description">Image caption</figcaption>
                              </figure>
                              <figure itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject">
                                <Link to="images/prop-1-3-gallery.jpg" itemProp="contentUrl" data-size="1920x1280" className="pxp-cover" style={{backgroundImage: 'url(assets/images/prop-1-3-gallery.jpg)'}} />
                                <figcaption itemProp="caption description">Image caption</figcaption>
                              </figure>
                            </div>
                            <Link to="#" className="pxp-sp-gallery-btn">View Photos</Link>
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
                                        <div className="pxp-sp-kd-item-label text-uppercase">Status</div>
                                        <div className="pxp-sp-kd-item-value">Coming Soon</div>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="pxp-sp-key-details-item">
                                        <div className="pxp-sp-kd-item-label text-uppercase">Property Type</div>
                                        <div className="pxp-sp-kd-item-value">Apartment</div>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="pxp-sp-key-details-item">
                                        <div className="pxp-sp-kd-item-label text-uppercase">Year Built</div>
                                        <div className="pxp-sp-kd-item-value">1980</div>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="pxp-sp-key-details-item">
                                        <div className="pxp-sp-kd-item-label text-uppercase">Stories</div>
                                        <div className="pxp-sp-kd-item-value">23</div>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="pxp-sp-key-details-item">
                                        <div className="pxp-sp-kd-item-label text-uppercase">Room Count</div>
                                        <div className="pxp-sp-kd-item-value">6</div>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="pxp-sp-key-details-item">
                                        <div className="pxp-sp-kd-item-label text-uppercase">Parking Spaces</div>
                                        <div className="pxp-sp-kd-item-value">2</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pxp-single-property-section mt-4 mt-md-5">
                                  <h3>Overview</h3>
                                  <div className="mt-3 mt-md-4">
                                    <p>Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space. The second bedroom is<span className="pxp-dots">...</span><span className="pxp-dots-more"> a corner room with double windows. The kitchen has fabulous space, new appliances, and a laundry area. Other features include rich herringbone floors, crown moldings and coffered ceilings throughout the apartment. 1049 5th Avenue is a classic pre-war building located across from Central Park, the reservoir and The Metropolitan Museum. Elegant lobby and 24 hours doorman. This is a pet-friendly building. 
                                        <br /><br />
                                        Conveniently located close to several trendy fitness centers like Equinox, New York Sports Clubs &amp; Crunch. Fine restaurants around the area, as well as top-ranked schools. 2% Flip tax paid by buyer to the condominium. Building just put an assessment for 18 months of approximately $500 per month.</span></p>
                                    <Link to="#" className="pxp-sp-more text-uppercase"><span className="pxp-sp-more-1">Continue Reading <span className="fa fa-angle-down" /></span><span className="pxp-sp-more-2">Show Less <span className="fa fa-angle-up" /></span></Link>
                                  </div>
                                </div>
                                <div className="pxp-single-property-section mt-4 mt-md-5">
                                  <h3>Amenities</h3>
                                  <div className="row mt-3 mt-md-4">
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-wifi" /> Internet</div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-car" /> Garage</div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-sun-o" /> Air Conditioning</div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-bullseye" /> Dishwasher</div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-recycle" /> Disposal</div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-clone" /> Balcony</div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-futbol-o" /> Gym</div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-smile-o" /> Playroom</div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                      <div className="pxp-sp-amenities-item"><span className="fa fa-glass" /> Bar</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="pxp-single-property-section mt-4 mt-md-5">
                                  <h3>Explore the Area</h3>
                                  <div className="pxp-sp-pois-nav mt-3 mt-md-4">
                                    <div className="pxp-sp-pois-nav-transportation text-uppercase">Transportation</div>
                                    <div className="pxp-sp-pois-nav-restaurants text-uppercase">Restaurants</div>
                                    <div className="pxp-sp-pois-nav-shopping text-uppercase">Shopping</div>
                                    <div className="pxp-sp-pois-nav-cafes text-uppercase">Cafes &amp; Bars</div>
                                    <div className="pxp-sp-pois-nav-arts text-uppercase">Arts &amp; Entertainment</div>
                                    <div className="pxp-sp-pois-nav-fitness text-uppercase">Fitness</div>
                                  </div>
                                  <div id="pxp-sp-map" className="mt-3" />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="pxp-single-property-section pxp-sp-agent-section mt-4 mt-md-5 mt-lg-0">
                                  <h3>Listed By</h3>
                                  <div className="pxp-sp-agent mt-3 mt-md-4">
                                    <Link to="single-agent.html" className="pxp-sp-agent-fig pxp-cover rounded-lg" style={{backgroundImage: 'url(assets/images/agent-4.jpg)', backgroundPosition: 'top center'}} />
                                    <div className="pxp-sp-agent-info">
                                      <div className="pxp-sp-agent-info-name"><Link to="single-agent.html">Erika Tillman</Link></div>
                                      <div className="pxp-sp-agent-info-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                                      <div className="pxp-sp-agent-info-email"><Link to="mailto:erika.tillman@ HouseUPcom">erika.tillman@ HouseUPcom</Link></div>
                                      <div className="pxp-sp-agent-info-phone"><span className="fa fa-phone" /> (123) 456-7890</div>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="pxp-sp-agent-btns mt-3 mt-md-4">
                                      <Link to="#pxp-contact-agent" className="pxp-sp-agent-btn-main" data-toggle="modal" data-target="#pxp-contact-agent"><span className="fa fa-envelope-o" /> Contact Agent</Link>
                                      <Link to="#pxp-contact-agent" className="pxp-sp-agent-btn" data-toggle="modal" data-target="#pxp-contact-agent"><span className="fa fa-calendar-check-o" /> Request Tour</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 text-center text-md-left text-primary">
                        <p className="mb-2 mb-md-0">HouseUp © 2018-2020</p>
                      </div>
                    </div>
                  </div></footer>
              </div>
            </React.Fragment>
         );
    }
}
 
export default singleProperty;