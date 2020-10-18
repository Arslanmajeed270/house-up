import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class contact extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="pxp-content">
                <div className="pxp-contact pxp-content-wrapper mt-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-7">
                        <h1 className="pxp-page-header">Contact Us</h1>
                        <p className="pxp-text-light">Say hello. Tell us how we can guide you.</p>
                      </div>
                    </div>
                  </div>
                  <div className="pxp-contact-hero mt-4 mt-md-5">
                    <div className="pxp-contact-hero-fig pxp-cover" style={{backgroundImage: 'url(assets/images/contact-bg.jpg)', backgroundPosition: '50% 50%'}} />
                    <div className="pxp-contact-hero-offices-container">
                      <div className="container">
                        <div className="pxp-contact-hero-offices">
                          <h2 className="pxp-section-h2">Our Offices</h2>
                          <div className="row">
                            <div className="col-sm-12 col-md-4">
                              <div className="pxp-contact-hero-offices-title mt-3 mt-md-4">Bancroft</div>
                              <div className="pxp-contact-hero-offices-info mt-2 mt-md-3">
                                <p className="pxp-is-address">90 Fifth Avenue, 3rd Floor<br />Bancroft, CA 1980</p>
                                <p>
                                  <Link to="">(123) 789-7390</Link><br />
                                  <Link to="">office-la@ HouseUPcom</Link>
                                </p>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <div className="pxp-contact-hero-offices-title mt-3 mt-md-4">Chatham-Kent</div>
                              <div className="pxp-contact-hero-offices-info mt-2 mt-md-3">
                                <p className="pxp-is-address">90 Fifth Avenue, 3rd Floor<br />Chatham-Kent, NY 1980</p>
                                <p>
                                  <Link to="">(123) 789-7390</Link><br />
                                  <Link to="">office-ny@ HouseUPcom</Link>
                                </p>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <div className="pxp-contact-hero-offices-title mt-3 mt-md-4">Niagara Falls</div>
                              <div className="pxp-contact-hero-offices-info mt-2 mt-md-3">
                                <p className="pxp-is-address">90 Fifth Avenue, 3rd Floor<br />Niagara Falls, CA 1980</p>
                                <p>
                                  <Link to="">(123) 789-7390</Link><br />
                                  <Link to="">office-sf@ HouseUPcom</Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-200">
                    <div className="row">
                      <div className="col-sm-12 col-lg-6">
                        <h2 className="pxp-section-h2">Send Us A Message</h2>
                        <div className="pxp-contact-form mt-3 mt-md-4">
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <div className="form-group">
                                <input type="text" className="form-control" id="pxp-contact-form-name" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div className="form-group">
                                <input type="text" className="form-control" id="pxp-contact-form-email" placeholder="Email" />
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div className="form-group">
                                <select className="custom-select" id="pxp-contact-form-reg">
                                  <option value>What is this regarding?</option>
                                  <option value>Customer support / feedback</option>
                                  <option value>Applying</option>
                                  <option value>Press</option>
                                  <option value>Listings</option>
                                  <option value>Partnerships</option>
                                  <option value>General questions</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone (optional)" id="pxp-contact-form-phone" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <textarea className="form-control" id="pxp-contact-form-message" rows={6} placeholder="Message" defaultValue={""} />
                          </div>
                          <Link to="" className="pxp-contact-form-btn">Send Message</Link>
                        </div>
                      </div>
                      <div className="col-sm-12 col-lg-6">
                        <div className="row mt-4 mt-md-5 mt-lg-0">
                          <div className="col-6">
                            <h2 className="pxp-section-h2">Our Locations</h2>
                          </div>
                          <div className="col-6 text-right">
                            <select className="custom-select pxp-contact-locations-select">
                              <option value="la">Niagara Falls</option>
                              <option value="ny">Oshawa</option>
                              <option value="sf">Ottawa</option>
                            </select>
                          </div>
                        </div>
                        <div id="pxp-contact-map" className="mt-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
         );
    }
}
 
export default contact;