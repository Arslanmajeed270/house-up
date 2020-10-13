import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorsData: []
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let page = props.page;

    let stateChanged = false;
    let changedState = {};


    if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
      changedState.loading = page.loading;  
      stateChanged = true;
    }
    if(page && JSON.stringify(state.vendorsData) !== JSON.stringify(page.vendorsData)){
      changedState.vendorsData = page.vendorsData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

  componentDidMount() {
    this.props.onGetVendorsData();
  }

    render() { 
      const { vendorsData } = this.state;
      console.log('checking vendorsData in vendors: ', vendorsData);

        return ( 
            <React.Fragment>
                <div className="pxp-content">
                <div className="pxp-agents pxp-content-wrapper mt-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-7">
                        <h1 className="pxp-page-header">Our Vendors</h1>
                        <p className="pxp-text-light">Pairing the industry's top technology with unsurpassed local expertise.</p>
                      </div>
                    </div>
                  </div>
                  <div className="pxp-agents-hero mt-4 mt-md-5">
                    <div className="pxp-agents-hero-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agents-hero.jpg)', backgroundPosition: '50% 50%'}} />
                    <div className="pxp-agents-hero-search-container">
                      <div className="container">
                        <div className="pxp-agents-hero-search">
                          <h2 className="pxp-section-h2">Find an Vendor</h2>
                          <div className="pxp-agents-hero-search-form mt-3 mt-md-4">
                            <div className="row">
                              <div className="col-sm-12 col-md-4">
                                <div className="form-group">
                                  <label htmlFor="pxp-agents-search-location">Location</label>
                                  <input type="text" className="form-control" id="pxp-agents-search-location" placeholder="Neighborhood/City/Zip" />
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-4">
                                <div className="form-group">
                                  <label htmlFor="pxp-agents-search-name">Name</label>
                                  <input type="text" className="form-control" id="pxp-agents-search-name" placeholder="Agent name" />
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-4">
                                <div className="form-group">
                                  <label htmlFor="pxp-agents-search-service">Service Needed</label>
                                  <select className="custom-select" id="pxp-agents-search-service">
                                    <option value={1} selected="selected">Buying or selling</option>
                                    <option value={2}>Buying a home</option>
                                    <option value={3}>Selling a home</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row mt-200">
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-1.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Scott Goodwin</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (123) 456-7890</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-2.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Alayna Becker</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (456) 123-7890</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star-o" /></span></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-3.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Melvin Blackwell</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (789) 123-4560</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-4.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Erika Tillman</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (890) 456-1237</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star-o" /></span></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-3.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Melvin Blackwell</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (789) 123-4560</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-4.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Erika Tillman</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (890) 456-1237</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star-o" /></span></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-1.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Scott Goodwin</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (123) 456-7890</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></span></div>
                        </Link>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-3">
                        <Link to='/single-vendor'  className="pxp-agents-1-item">
                          <div className="pxp-agents-1-item-fig-container rounded-lg">
                            <div className="pxp-agents-1-item-fig pxp-cover" style={{backgroundImage: 'url(assets/images/agent-2.jpg)', backgroundPosition: 'top center'}} />
                          </div>
                          <div className="pxp-agents-1-item-details rounded-lg">
                            <div className="pxp-agents-1-item-details-name">Alayna Becker</div>
                            <div className="pxp-agents-1-item-details-email"><span className="fa fa-phone" /> (456) 123-7890</div>
                            <div className="pxp-agents-1-item-details-spacer" />
                            <div className="pxp-agents-1-item-cta text-uppercase">More Details</div>
                          </div>
                          <div className="pxp-agents-1-item-rating"><span><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star-o" /></span></div>
                        </Link>
                      </div>
                    </div>
                    <ul className="pagination pxp-paginantion mt-2 mt-md-3">
                      <li className="page-item active"><Link className="page-link" to="">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="">3</Link></li>
                      <li className="page-item"><Link className="page-link" to="">Next <span className="fa fa-angle-right" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </React.Fragment>
         );
    }
}
const mapStateToProps = state => {
  return {
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetVendorsData: () => dispatch(actions.getVendorsData())
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(vendor);
