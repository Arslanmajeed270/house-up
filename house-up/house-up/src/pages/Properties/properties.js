import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class properties extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="pxp-content pxp-full-height">
                <div className="pxp-map-side pxp-map-right pxp-half">
                  <div id="results-map" />
                  <Link to="" className="pxp-list-toggle"><span className="fa fa-list" /></Link>
                </div>
                <div className="pxp-content-side pxp-content-left pxp-half">
                  <div className="pxp-content-side-wrapper">
                    <div className="d-flex">
                      <div className="pxp-content-side-search-form">
                        <div className="row pxp-content-side-search-form-row">
                          <div className="col-5 col-sm-5 col-md-4 col-lg-3 pxp-content-side-search-form-col">
                            <select className="custom-select" id="pxp-p-search-status">
                              <option value="buy" selected="selected">Buy</option>
                              <option value="rent">Rent</option>
                            </select>
                          </div>
                          <div className="col-7 col-sm-7 col-md-8 col-lg-9 pxp-content-side-search-form-col">
                            <input type="text" className="form-control pxp-is-address" placeholder="Search by City, Neighborhood, or Address" id="pxp-p-search-address" />
                            <span className="fa fa-search" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <Link role="button" className="pxp-adv-toggle" to="" ><span className="fa fa-sliders" /></Link>
                      </div>
                    </div>
                    <div className="pxp-content-side-search-form-adv mb-3">
                      <div className="row pxp-content-side-search-form-row">
                        <div className="col-sm-6 col-md-3 pxp-content-side-search-form-col">
                          <div className="form-group">
                            <label htmlFor="pxp-p-filter-price-min">Price</label>
                            <input type="text" className="form-control" placeholder="Min" id="pxp-p-filter-price-min" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3 pxp-content-side-search-form-col">
                          <div className="form-group">
                            <label htmlFor="pxp-p-filter-price-max" className="d-none d-sm-inline-block">&nbsp;</label>
                            <input type="text" className="form-control" placeholder="Max" id="pxp-p-filter-price-max" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3 pxp-content-side-search-form-col">
                          <div className="form-group">
                            <label htmlFor="pxp-p-filter-beds">Beds</label>
                            <select className="custom-select" id="pxp-p-filter-beds">
                              <option value selected="selected">Any</option>
                              <option value>Studio</option>
                              <option value>1</option>
                              <option value>2</option>
                              <option value>3</option>
                              <option value>4</option>
                              <option value>5+</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3 pxp-content-side-search-form-col">
                          <div className="form-group">
                            <label htmlFor="pxp-p-filter-baths">Baths</label>
                            <select className="custom-select" id="pxp-p-filter-baths">
                              <option value selected="selected">Any</option>
                              <option value>1+</option>
                              <option value>1.5+</option>
                              <option value>2+</option>
                              <option value>3+</option>
                              <option value>4+</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                          <div className="form-group">
                            <label htmlFor="pxp-p-filter-type">Type</label>
                            <select className="custom-select" id="pxp-p-filter-type">
                              <option value>Select type</option>
                              <option value>Apartment</option>
                              <option value>House</option>
                              <option value>Townhome</option>
                              <option value>Multi-Family</option>
                              <option value>Land</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                          <div className="form-group">
                            <label htmlFor="pxp-p-filter-size-min">Size (sq ft)</label>
                            <input type="text" className="form-control" id="pxp-p-filter-size-min" placeholder="Min" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                          <div className="form-group">
                            <label htmlFor="pxp-p-filter-size-max" className="d-none d-sm-inline-block">&nbsp;</label>
                            <input type="text" className="form-control" id="pxp-p-filter-size-max" placeholder="Max" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="mb-2">Amenities</label>
                        <div className="row pxp-content-side-search-form-row">
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Internet</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Garage</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Air Conditioning</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Dishwasher</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Disposal</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Balcony</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Gym</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Playroom</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4 pxp-content-side-search-form-col">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-check" /> Bar</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link to="" className="pxp-filter-btn">Apply Filters</Link>
                    </div>
                    <div className="row pb-4">
                      <div className="col-sm-6">
                        <h2 className="pxp-content-side-h2">1,684 Results</h2>
                      </div>
                      <div className="col-sm-6">
                        <div className="pxp-sort-form form-inline float-right">
                          <div className="form-group">
                            <select className="custom-select" id="pxp-sort-results">
                              <option value selected="selected">Default Sort</option>
                              <option value>Price (Lo-Hi)</option>
                              <option value>Price (Hi-Lo)</option>
                              <option value>Beds</option>
                              <option value>Baths</option>
                              <option value>Size</option>
                            </select>
                          </div>
                          <div className="form-group d-flex">
                            <Link to="" role="button" className="pxp-map-toggle"><span className="fa fa-map-o" /></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-xxxl-4">
                        <Link to='/single-prop'  className="pxp-results-card-1 rounded-lg" data-prop={1}>
                          <div id="card-carousel-1" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                              <div className="carousel-item active" style={{backgroundImage: 'url(assets/images/prop-1-1-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-1-2-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-1-3-gallery.jpg)'}} />
                            </div>
                            <span className="carousel-control-prev" data-to="#card-carousel-1" data-slide="prev">
                              <span className="fa fa-angle-left" aria-hidden="true" />
                            </span>
                            <span className="carousel-control-next" data-to="#card-carousel-1" data-slide="next">
                              <span className="fa fa-angle-right" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="pxp-results-card-1-gradient" />
                          <div className="pxp-results-card-1-details">
                            <div className="pxp-results-card-1-details-title">Chic Apartment in Downtown</div>
                            <div className="pxp-results-card-1-details-price">$890,000</div>
                          </div>
                          <div className="pxp-results-card-1-features">
                            <span>2 BD <span>|</span> 2 BA <span>|</span> 920 SF</span>
                          </div>
                          <div className="pxp-results-card-1-save"><span className="fa fa-star-o" /></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xxxl-4">
                        <Link to='/single-prop'  className="pxp-results-card-1 rounded-lg" data-prop={2}>
                          <div id="card-carousel-2" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                              <div className="carousel-item active" style={{backgroundImage: 'url(assets/images/prop-2-1-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-2-2-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-2-3-gallery.jpg)'}} />
                            </div>
                            <span className="carousel-control-prev" data-to="#card-carousel-2" data-slide="prev">
                              <span className="fa fa-angle-left" aria-hidden="true" />
                            </span>
                            <span className="carousel-control-next" data-to="#card-carousel-2" data-slide="next">
                              <span className="fa fa-angle-right" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="pxp-results-card-1-gradient" />
                          <div className="pxp-results-card-1-details">
                            <div className="pxp-results-card-1-details-title">Colorful Little Apartment</div>
                            <div className="pxp-results-card-1-details-price">$2,675</div>
                          </div>
                          <div className="pxp-results-card-1-features">
                            <span>1 BD <span>|</span> 1 BA <span>|</span> 500 SF</span>
                          </div>
                          <div className="pxp-results-card-1-save"><span className="fa fa-star-o" /></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xxxl-4">
                        <Link to='/single-prop'  className="pxp-results-card-1 rounded-lg" data-prop={3}>
                          <div id="card-carousel-3" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                              <div className="carousel-item active" style={{backgroundImage: 'url(assets/images/prop-3-1-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-3-2-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-3-3-gallery.jpg)'}} />
                            </div>
                            <span className="carousel-control-prev" data-to="#card-carousel-3" data-slide="prev">
                              <span className="fa fa-angle-left" aria-hidden="true" />
                            </span>
                            <span className="carousel-control-next" data-to="#card-carousel-3" data-slide="next">
                              <span className="fa fa-angle-right" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="pxp-results-card-1-gradient" />
                          <div className="pxp-results-card-1-details">
                            <div className="pxp-results-card-1-details-title">Cozy Two Bedroom Apartment</div>
                            <div className="pxp-results-card-1-details-price">$960,000</div>
                          </div>
                          <div className="pxp-results-card-1-features">
                            <span>2 BD <span>|</span> 2 BA <span>|</span> 870 SF</span>
                          </div>
                          <div className="pxp-results-card-1-save"><span className="fa fa-star-o" /></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xxxl-4">
                        <Link to='/single-prop'  className="pxp-results-card-1 rounded-lg" data-prop={4}>
                          <div id="card-carousel-4" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                              <div className="carousel-item active" style={{backgroundImage: 'url(assets/images/prop-7-1-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-7-2-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-7-3-galleryy.jpg)'}} />
                            </div>
                            <span className="carousel-control-prev" data-to="#card-carousel-4" data-slide="prev">
                              <span className="fa fa-angle-left" aria-hidden="true" />
                            </span>
                            <span className="carousel-control-next" data-to="#card-carousel-4" data-slide="next">
                              <span className="fa fa-angle-right" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="pxp-results-card-1-gradient" />
                          <div className="pxp-results-card-1-details">
                            <div className="pxp-results-card-1-details-title">Beautiful House in Marina</div>
                            <div className="pxp-results-card-1-details-price">$5,198,000</div>
                          </div>
                          <div className="pxp-results-card-1-features">
                            <span>5 BD <span>|</span> 4.5 BA <span>|</span> 3,945 SF</span>
                          </div>
                          <div className="pxp-results-card-1-save"><span className="fa fa-star-o" /></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xxxl-4">
                        <Link to='/single-prop'  className="pxp-results-card-1 rounded-lg" data-prop={5}>
                          <div id="card-carousel-5" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                              <div className="carousel-item active" style={{backgroundImage: 'url(assets/images/prop-8-1-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-8-2-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-8-3-gallery.jpg)'}} />
                            </div>
                            <span className="carousel-control-prev" data-to="#card-carousel-5" data-slide="prev">
                              <span className="fa fa-angle-left" aria-hidden="true" />
                            </span>
                            <span className="carousel-control-next" data-to="#card-carousel-5" data-slide="next">
                              <span className="fa fa-angle-right" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="pxp-results-card-1-gradient" />
                          <div className="pxp-results-card-1-details">
                            <div className="pxp-results-card-1-details-title">Modern Residence</div>
                            <div className="pxp-results-card-1-details-price">$7,995</div>
                          </div>
                          <div className="pxp-results-card-1-features">
                            <span>4 BD <span>|</span> 1.5 BA <span>|</span> 2,240 SF</span>
                          </div>
                          <div className="pxp-results-card-1-save"><span className="fa fa-star-o" /></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xxxl-4">
                        <Link to='/single-prop'  className="pxp-results-card-1 rounded-lg" data-prop={6}>
                          <div id="card-carousel-6" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                              <div className="carousel-item active" style={{backgroundImage: 'url(assets/images/prop-9-1-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-9-1-gallery.jpg)'}} />
                              <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-9-1-gallery.jpg)'}} />
                            </div>
                            <span className="carousel-control-prev" data-to="#card-carousel-6" data-slide="prev">
                              <span className="fa fa-angle-left" aria-hidden="true" />
                            </span>
                            <span className="carousel-control-next" data-to="#card-carousel-6" data-slide="next">
                              <span className="fa fa-angle-right" aria-hidden="true" />
                            </span>
                          </div>
                          <div className="pxp-results-card-1-gradient" />
                          <div className="pxp-results-card-1-details">
                            <div className="pxp-results-card-1-details-title">Luxury Mansion</div>
                            <div className="pxp-results-card-1-details-price">$5,430,000</div>
                          </div>
                          <div className="pxp-results-card-1-features">
                            <span>4 BD <span>|</span> 5 BA <span>|</span> 5,200 SF</span>
                          </div>
                          <div className="pxp-results-card-1-save"><span className="fa fa-star-o" /></div>
                        </Link>
                      </div>
                    </div>
                    <ul className="pagination pxp-paginantion mt-2 mt-md-4">
                      <li className="page-item active"><Link className="page-link" to="">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="">3</Link></li>
                      <li className="page-item"><Link className="page-link" to="">Next <span className="fa fa-angle-right" /></Link></li>
                    </ul>
                  </div>
                  {/*                 <div class="pxp-footer pxp-content-side-wrapper">
                            <div class="pxp-footer-bottom">
                                <div class="pxp-footer-copyright">&copy;  HouseUP All Rights Reserved. 2019</div>
                            </div>
                        </div> */}
                </div>
              </div>
            </React.Fragment>
         );
    }
}
 
export default properties;