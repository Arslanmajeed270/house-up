import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class help extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 col-lg-8">
                          <h1 className="pxp-page-header float-left">Erika Tillman</h1>
                          <span className="pxp-agent-rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span>
                          <div className="clearfix" />
                          <p>Licensed Associate Real Estate Broker</p>
                          <div className="mt-4 mt-md-5">
                            <div className="pxp-agent-email"><Link to="mailto:erika.tillman@ HouseUPcom"><span className="fa fa-envelope-o" /> erika.tillman@ HouseUPcom</Link></div>
                            <div className="pxp-agent-phone"><span className="fa fa-phone" /> (123) 456-7890</div>
                          </div>
                          <div className="mt-4 mt-md-5">
                            <Link to="#pxp-work-with" className="pxp-agent-contact-btn" data-toggle="modal" data-target="#pxp-work-with">Work with Erika Tillman</Link>
                          </div>
                        </div>
                        <div className="col-sm-12 offset-lg-1 col-lg-3">
                          <div className="pxp-agent-photo pxp-cover rounded-lg mt-4 mt-md-5 mt-lg-0" style={{backgroundImage: 'url(assets/images/agent-4.jpg)', backgroundPosition: '50% 0%'}} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-lg-8">
                          <div className="pxp-agent-section mt-4 mt-md-5">
                            <h3>About Erika Tillman</h3>
                            <div className="mt-3 mt-md-4">
                              <p>Award winner and nominee, Erika Tillman, is one of NYC’s top producing agents. In 2016 she was a Top Producer Individual by sales volume and GCI. This high achiever received, among other recognitions, a Quadruple Platinum Award and was cover of Outfront Magazine in December 2016.</p>
                              <p>She is known as one of the smartest and most dedicated agents in the City. She has earned an excellent reputation with high-end developers. Her clientele includes some of the wealthiest Family Offices in the world, including royalty, and she works attending each generation’s needs and risk profile. She is the perfect agent for the most demanding clients and runs her business 24/7. </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-3 offset-lg-1">
                          <div className="pxp-agent-section mt-4 mt-md-5">
                            <h3>Specialities</h3>
                            <ul className="list-unstyled pxp-agent-specialities mt-3 mt-md-4">
                              <li>International Buyers and Sellers</li>
                              <li>Investors</li>
                              <li>Family Offices</li>
                            </ul>
                          </div>
                          <div className="pxp-agent-section mt-4 mt-md-5">
                            <h3>Social Media</h3>
                            <ul className="list-unstyled pxp-agent-social mt-3 mt-md-4">
                              <li><Link to="#"><span className="fa fa-facebook" /></Link></li>
                              <li><Link to="#"><span className="fa fa-twitter" /></Link></li>
                              <li><Link to="#"><span className="fa fa-pinterest" /></Link></li>
                              <li><Link to="#"><span className="fa fa-linkedin" /></Link></li>
                            </ul>
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
 
export default help;