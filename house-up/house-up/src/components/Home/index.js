import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class index extends Component {
    render() { 
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
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-1.png)'}} />
                                      <span className="dashboard-user-name">Ginni.PA</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-2.png)'}} />
                                      <span className="dashboard-user-name">Adnan.PH</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-3.png)'}} />
                                      <span className="dashboard-user-name">O'Neil.LA</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-4.png)'}} />
                                      <span className="dashboard-user-name">Kapoor.PH</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-1.png)'}} />
                                      <span className="dashboard-user-name">Ginni.PA</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-2.png)'}} />
                                      <span className="dashboard-user-name">Adnan.PH</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-3.png)'}} />
                                      <span className="dashboard-user-name">O'Neil.LA</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-4.png)'}} />
                                      <span className="dashboard-user-name">Kapoor.PH</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-1.png)'}} />
                                      <span className="dashboard-user-name">Ginni.PA</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-2.png)'}} />
                                      <span className="dashboard-user-name">Adnan.PH</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-3.png)'}} />
                                      <span className="dashboard-user-name">O'Neil.LA</span>
                                    </div>
                                    <div>
                                      <div className="pxp-prop-card-dashboard" style={{backgroundImage: 'url(assets/images/dashboard/slider-4.png)'}} />
                                      <span className="dashboard-user-name">Kapoor.PH</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sort-by">
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
                                  <Link to="/"><li>
                                      <span className="news-feed-user-img" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                      <span className="news-feed-user-name">Anna Paquin</span>
                                    </li></Link>
                                </ul>
                                <Link to=""><div className="dashboard-newsfeed-img" style={{backgroundImage: 'url(assets/images/dashboard/neraby-7.png)'}}>
                                  </div></Link>
                                <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                                <div className="dashboard-newsfeed-header">Luxurious House On Top Height Location</div>
                                <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div className="news-feed-icon-user">
                                      <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                    </div>
                                  </div>
                                  <div className="nodecor col-lg-4 col-md-4 col-sm-5 col-4">
                                    <div className="  news-feed-icon-user">
                                      <Link to=""><p className="comment-p"><i className="far fa-comment-alt" /> Comments</p></Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="news-feed-icon-user">
                                      <div className="dropdown">
                                        <Link className="heart-p nodecor" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <p className="heart-p nodecor"> <span className="far fa-share-square" /> Share</p>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                          <Link className="dropdown-item" to="">
                                            <span className="fab fa-facebook-f" />
                                            Facebook</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-twitter" /> Twitter</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-pinterest" /> Pinterest</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-linkedin" /> LinkedIn</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-newsfeed">
                              <div className="dashboard-newsfeed-content">
                                <ul className="news-feed-user-ul">
                                  <li>
                                    <span className="news-feed-user-imgs" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                    <span className="news-feed-user-name">Anna Paquin</span>
                                  </li>
                                </ul>
                                <Link to=""><div className="dashboard-newsfeed-img" style={{backgroundImage: 'url(assets/images/dashboard/neraby-2.png)'}}>
                                  </div></Link>
                                <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                                <div className="dashboard-newsfeed-header">Double Unit House Is Available</div>
                                <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div className="news-feed-icon-user">
                                      <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-5 col-4">
                                    <div className="news-feed-icon-user">
                                      <Link to=""><p className="comment-p"><i className="far fa-comment-alt" /> Comments</p></Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="news-feed-icon-user">
                                      <div className="dropdown">
                                        <Link className="heart-p nodecor" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <p className="heart-p nodecor"> <span className="far fa-share-square" /> Share</p>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                          <Link className="dropdown-item" to="">
                                            <span className="fab fa-facebook-f" />
                                            Facebook</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-twitter" /> Twitter</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-pinterest" /> Pinterest</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-linkedin" /> LinkedIn</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="explore-our-neighbours">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="container-fluid pxp-props-carousel-right">
                                  <div className="pxp-props-carousel-right-container">
                                    <h2 className="explore-our-neighbours-heading">Explore Our Neighbourhoods</h2>
                                    <div className="owl-carousel pxp-props-carousel-right-stage-3">
                                      <div>
                                        <Link to="" /><div className=" nodecor pxp-prop-card-explore" style={{backgroundImage: 'url(images/dashboard/toronto.png)'}}><Link to="">
                                            <div className="d-table w-100 ">
                                              <div className="d-table-cell va-bottom neighbours-height paddg">
                                                <div className="cities-name"> TORONTO</div>
                                                <div className="cities-Properties"> 23 Properties</div>
                                              </div>
                                            </div></Link>
                                        </div>
                                      </div>
                                      <div>
                                        <Link to='/properties' /><div className="pxp-prop-card-explore" style={{backgroundImage: 'url(images/dashboard/ontario.png)'}}><Link to='/properties'>
                                            <div className="d-table w-100 ">
                                              <div className="d-table-cell va-bottom neighbours-height paddg">
                                                <h2>BARRIE</h2>
                                                <p>15 Properties</p>
                                              </div>
                                            </div></Link>
                                        </div>
                                      </div>
                                      <div>
                                        <Link to="" /><div className="pxp-prop-card-explore" style={{backgroundImage: 'url(images/dashboard/ottawa.png)'}}><Link to="">
                                            <div className="d-table w-100 ">
                                              <div className="d-table-cell va-bottom neighbours-height paddg">
                                                <h2>OSHAWA</h2>
                                                <p>30 Properties</p>
                                              </div>
                                            </div></Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sort-by">
                            <div className="dashboard-newsfeed">
                              <div className="dashboard-newsfeed-content">
                                <ul className="news-feed-user-ul">
                                  <li>
                                    <span className="news-feed-user-img" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                    <span className="news-feed-user-name">Anna Paquin</span>
                                  </li>
                                </ul>
                                <Link to=""><div className="dashboard-newsfeed-img" style={{backgroundImage: 'url(assets/images/dashboard/neraby-3.png)'}}>
                                  </div></Link>
                                <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                                <div className="dashboard-newsfeed-header">Outclass House Is Available </div>
                                <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div className="news-feed-icon-user">
                                      <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-5 col-4">
                                    <div className="news-feed-icon-user">
                                      <Link to=""><p className="comment-p"><i className="far fa-comment-alt" /> Comments</p></Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="news-feed-icon-user">
                                      <div className="dropdown">
                                        <Link className="heart-p nodecor" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <p className="heart-p nodecor"> <span className="far fa-share-square" /> Share</p>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                          <Link className="dropdown-item" to="">
                                            <span className="fab fa-facebook-f" />
                                            Facebook</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-twitter" /> Twitter</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-pinterest" /> Pinterest</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-linkedin" /> LinkedIn</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-newsfeed">
                              <div className="dashboard-newsfeed-content">
                                <ul className="news-feed-user-ul">
                                  <li>
                                    <span className="news-feed-user-imgs" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                    <span className="news-feed-user-name">Anna Paquin</span>
                                  </li>
                                </ul>
                                <Link to=""><div className="dashboard-newsfeed-img" style={{backgroundImage: 'url(assets/images/dashboard/neraby-4.png)'}}>
                                  </div></Link>
                                <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                                <dir />
                                <div className="dashboard-newsfeed-header">Outclass House Is Available 
                                  Toronto, Ontario M5V0E6</div>
                                <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div className="news-feed-icon-user">
                                      <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-5 col-4">
                                    <div className="news-feed-icon-user">
                                      <Link to='/comments'><p className="comment-p"><i className="far fa-comment-alt" /> Comments</p></Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="news-feed-icon-user">
                                      <div className="dropdown">
                                        <Link className="heart-p nodecor" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <p className="heart-p nodecor"> <span className="far fa-share-square" /> Share</p>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                          <Link className="dropdown-item" to="">
                                            <span className="fab fa-facebook-f" />
                                            Facebook</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-twitter" /> Twitter</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-pinterest" /> Pinterest</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-linkedin" /> LinkedIn</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dashboard-newsfeed">
                            <div className="dashboard-newsfeed-content">
                              <ul className="news-feed-user-ul">
                                <li>
                                  <span className="news-feed-user-imgs" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                  <span className="news-feed-user-name">Anna Paquin</span>
                                </li>
                              </ul>
                              <Link to=""><div className="pxp-prop-card-featured" style={{backgroundImage: 'url(assets/images/dashboard/featured-properties-1.png)'}}>
                                  <div className="for-rent">
                                    <h4>FOR RENT</h4>
                                  </div>                <div className="d-table w-100 ">
                                    <div className="d-table-cell va-bottom featured-height">
                                      <h2><i className="fa fa-map-marker-alt" /> Toronto</h2>
                                      <div className="row">
                                        <div className="col-md-6 col-sm-6 col-6">
                                          <div className="feature-head">
                                            <span><b> $98.00</b>/per night</span>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div></Link>
                              <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                              <dir />
                              <div className="dashboard-newsfeed-header">FORT YORK BLVD
                                Toronto, Ontario M5V0E6</div>
                              <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
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
                          <div className="dashboard-newsfeed">
                            <div className="dashboard-newsfeed-content">
                              <ul className="news-feed-user-ul">
                                <li>
                                  <span className="news-feed-user-imgs" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                  <span className="news-feed-user-name">Anna Paquin</span>
                                </li>
                              </ul>
                              <Link to=""><div className="pxp-prop-card-featured" style={{backgroundImage: 'url(assets/images/dashboard/featured-properties-2.png)'}}>
                                  <div className="for-rent">
                                    <h4>FOR SALE</h4>
                                  </div>
                                  <div className="d-table w-100 ">
                                    <div className="d-table-cell va-bottom featured-height">
                                      <h2><i className="fa fa-map-marker-alt" />Toronto</h2>
                                      <div className="row">
                                        <div className="col-md-6 col-sm-6 col-6">
                                          <div className="feature-head">
                                            <span><b> $97588.00</b> </span>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div></Link>
                              <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                              <dir />
                              <div className="dashboard-newsfeed-header">Double Unit House Is Available 
                                Toronto</div> 
                              <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
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
                          <div className="dashboard-newsfeed">
                            <div className="dashboard-newsfeed-content">
                              <ul className="news-feed-user-ul">
                                <li>
                                  <span className="news-feed-user-imgs" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                  <span className="news-feed-user-name">Anna Paquin</span>
                                </li>
                              </ul>
                              <Link to=""><div className="pxp-prop-card-featured" style={{backgroundImage: 'url(assets/images/dashboard/featured-properties-1.png)'}}>
                                  <div className="for-rent">
                                    <h4>FOR RENT</h4>
                                  </div>
                                  <div className="d-table w-100 ">
                                    <div className="d-table-cell va-bottom featured-height nodecor">
                                      <h2><i className="fa fa-map-marker-alt nodecor" />Windsor</h2>
                                      <div className="row">
                                        <div className="col-md-6 col-sm-6 col-6">
                                          <div className="feature-head">
                                            <span><b> $98.00</b>/per night</span>
                                          </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-6">
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div></Link>
                              <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                              <dir />
                              <div className="dashboard-newsfeed-header">170 FORT YORK BLVD
                                Toronto, Ontario M5V0E6</div>
                              <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
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
                          <div className="sort-by">
                            <div className="dashboard-newsfeed">
                              <div className="dashboard-newsfeed-content">
                                <ul className="news-feed-user-ul">
                                  <li>
                                    <span className="news-feed-user-img" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                    <span className="news-feed-user-name">Anna Paquin</span>
                                  </li>
                                </ul>
                                <Link to=""><div className="dashboard-newsfeed-img" style={{backgroundImage: 'url(assets/images/dashboard/neraby-6.png)'}}>
                                  </div></Link>
                                <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                                <dir />
                                <div className="dashboard-newsfeed-header">Double Unit Office
                                  Toronto, Ontario M5V0E6</div>
                                <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div className="news-feed-icon-user">
                                      <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-5 col-4">
                                    <div className="news-feed-icon-user">
                                      <Link to=""><p className="comment-p"><i className="far fa-comment-alt" /> Comments</p></Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="news-feed-icon-user">
                                      <div className="dropdown">
                                        <Link className="heart-p nodecor" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <p className="heart-p nodecor"> <span className="far fa-share-square" /> Share</p>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                          <Link className="dropdown-item" to="">
                                            <span className="fab fa-facebook-f" />
                                            Facebook</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-twitter" /> Twitter</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-pinterest" /> Pinterest</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-linkedin" /> LinkedIn</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-newsfeed">
                              <div className="dashboard-newsfeed-content">
                                <ul className="news-feed-user-ul">
                                  <li>
                                    <span className="news-feed-user-imgs" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                    <span className="news-feed-user-name">Anna Paquin</span>
                                  </li>
                                </ul>
                                <Link to=""><div className="dashboard-newsfeed-img" style={{backgroundImage: 'url(assets/images/dashboard/neraby-9.png)'}}>
                                  </div></Link>
                                <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                                <dir />
                                <div className="dashboard-newsfeed-header">Brand New House Is Available</div>
                                <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div className="news-feed-icon-user">
                                      <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-5 col-4">
                                    <div className="news-feed-icon-user">
                                      <Link to='/comments'><p className="comment-p"><i className="far fa-comment-alt" /> Comments</p></Link>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                    <div className="news-feed-icon-user">
                                      <div className="dropdown">
                                        <Link className="heart-p nodecor" to="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <p className="heart-p nodecor"> <span className="far fa-share-square" /> Share</p>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                          <Link className="dropdown-item" to="">
                                            <span className="fab fa-facebook-f" />
                                            Facebook</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-twitter" /> Twitter</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-pinterest" /> Pinterest</Link>
                                          <Link className="dropdown-item" to=""><span className="fab fa-linkedin" /> LinkedIn</Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>  
                          </div>
                          <div className="feature-vendors">
                            <div className="sort-heading mt-4 mt-md-4 mb-4 mb-md-4 hhhsize featured-margin">
                            </div>
                            <Link to="">
                              <div className="vendor-box">
                                <div className="row">
                                  <div className="col-md-9 col-sm-9 col-8">
                                    <div className="vendor-detail">
                                      William Shatner
                                      <p>
                                        <span>Painter</span>
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star grey" />
                                        <i className="fa fa-star grey" />
                                      </p>
                                      <span className="address-span">Office # 21 improve Canada Mall</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-sm-3 col-4">
                                    <div className="vendor-img" style={{backgroundImage: 'url(assets/images/agent-1.jpg)'}} />
                                  </div>
                                </div>
                              </div></Link>
                            <Link to='/single-post'>
                              <div className="vendor-box">
                                <div className="row">
                                  <div className="col-md-9 col-sm-9 col-8">
                                    <div className="vendor-detail">
                                      Evangeline Lilly
                                      <p>
                                        <span>Lawyer</span>
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star grey" />
                                        <i className="fa fa-star grey" />
                                      </p>
                                      <span className="address-span">Office # 21 improve Canada Mall</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-sm-3 col-4">
                                    <div className="vendor-img" style={{backgroundImage: 'url(assets/images/agent-2.jpg)'}} />
                                  </div>
                                </div>
                              </div> 
                            </Link>
                            <Link to="">                                   
                              <div className="vendor-box">
                                <div className="row">
                                  <div className="col-md-9 col-sm-9 col-8">
                                    <div className="vendor-detail">
                                      Cobie Smulders
                                      <p>
                                        <span>Photographer</span>
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star blue" />
                                        <i className="fa fa-star grey" />
                                        <i className="fa fa-star grey" />
                                      </p>
                                      <span className="address-span">Office # 21 improve Canada Mall</span>
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-sm-3 col-4">
                                    <div className="vendor-img" style={{backgroundImage: 'url(assets/images/agent-4.jpg)'}} />
                                  </div>
                                </div>
                              </div></Link>
                          </div>
                          <div className="sort-by">
                            <div className="dashboard-newsfeed">
                              <div className="dashboard-newsfeed-content">
                                <ul className="news-feed-user-ul">
                                  <li>
                                    <span className="news-feed-user-img" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                    <span className="news-feed-user-name">Anna Paquin</span>
                                  </li>
                                </ul>
                                <Link to=""><div className="dashboard-newsfeed-img" style={{backgroundImage: 'url(assets/images/dashboard/neraby-10.png)'}}>
                                  </div></Link>
                                <div className="dashboard-newsfeed-header">Brand New House Is Available</div>
                                <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div className="news-feed-icon-user">
                                      <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-5 col-4">
                                    <div className="news-feed-icon-user">
                                      <Link to=""><p className="comment-p"><i className="far fa-comment-alt" /> Comments</p></Link>
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
                            <div className="dashboard-newsfeed">
                              <div className="dashboard-newsfeed-content">
                                <ul className="news-feed-user-ul">
                                  <Link to=""><li>
                                      <span className="news-feed-user-img" style={{backgroundImage: 'url(assets/images/dashboard/sherlin.png)'}} />
                                      <span className="news-feed-user-name">Anna Paquin</span>
                                    </li></Link>
                                </ul>
                                <Link to="">
                                  <div className="dashboard-newsfeed-img" style={{backgroundImage: 'url(assets/images/dashboard/neraby-11.png)'}}>
                                  </div></Link>
                                <Link href="#pxp-contact-agent" className="dashboard-newsfeed-contact nodecor" data-toggle="modal" data-target="#pxp-contact-agent"> Contact us</Link>
                                <dir />
                                <div className="dashboard-newsfeed-header">FORT YORK BLVD
                                  Toronto, Ontario M5V0E6</div>
                                <div className="dashboard-newsfeed-details">Almost 700 Sqft. Of Luxurious Open-Concept Living With Spectacular Lake Views From Huge Balcony! Fab Renovated Kitchen Features Granite Counters, Island &amp; Stainless Appliances.</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-3 col-4">
                                    <div className="news-feed-icon-user">
                                      <p className="heart-p"><i className="far fa-heart" /> Like</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-5 col-4">
                                    <div className="news-feed-icon-user">
                                      <Link to=""><p className="comment-p"><i className="far fa-comment-alt" /> Comments</p></Link>
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
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1" />
                    <div className="col-lg-4">
                      <div className="side-bar-user mt-100">
                        <div className="main-user">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="min-user-img" style={{backgroundImage: 'url(assets/images/dashboard/hashmi.png)'}} />
                            </div>
                            <div className="col-md-9  col-nopadd">
                              <div className="main-user-content">
                                <p>Adnan Qureshi</p>
                                <span>@adnan.qureshi</span>
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
                                <Link to="">See ALL</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="suggested-vendors-list "> 
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <Link to=""><div className="suggested-vendor-img">
                                    <img src="assets/images/dashboard/liaquat.png" alt=""/>
                                  </div></Link>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>Liaquat Qureshi</p>
                                  <span>Painter</span>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="suggested-vendor-follow text-right">
                                  <Link to="">Follow</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <Link to=""><div className="suggested-vendor-img">
                                    <img src="assets/images/dashboard/liaquat.png" alt=""/>
                                  </div></Link>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>Liaquat Qureshi</p>
                                  <span>Painter</span>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="suggested-vendor-follow text-right">
                                  <Link to="">Follow</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="suggested-vendor-img">
                                  <img src="assets/images/dashboard/liaquat.png" alt="" />
                                </div>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>Liaquat Qureshi</p>
                                  <span>Painter</span>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="suggested-vendor-follow text-right">
                                  <Link to="">Follow</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="suggested-vendor-img">
                                  <img src="assets/images/dashboard/liaquat.png" alt="" />
                                </div>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>Liaquat Qureshi</p>
                                  <span>Painter</span>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="suggested-vendor-follow text-right">
                                  <Link to="">Follow</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="suggested-vendor-img">
                                  <img src="assets/images/dashboard/liaquat.png" alt="" />
                                </div>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>Liaquat Qureshi</p>
                                  <span>Painter</span>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="suggested-vendor-follow text-right">
                                  <Link to="">Follow</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="suggested-vendor-img">
                                  <img src="assets/images/dashboard/liaquat.png" alt="" />
                                </div>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>Liaquat Qureshi</p>
                                  <span>Painter</span>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="suggested-vendor-follow text-right">
                                  <Link to="">Follow</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-md-3">
                            <div className="row">
                              <div className="col-md-2">
                                <div className="suggested-vendor-img">
                                  <img src="assets/images/dashboard/liaquat.png" alt="" />
                                </div>
                              </div>
                              <div className="col-md-7 col-nopadd">
                                <div className="suggested-vendor-name">
                                  <p>Liaquat Qureshi</p>
                                  <span>Painter</span>
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
                      </div>
                    </div>
                  </div>
                </div>
                  </main>
            </React.Fragment>
         );
    }
}
 
export default index;