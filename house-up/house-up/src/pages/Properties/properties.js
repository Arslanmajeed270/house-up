import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';


import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/common/Spinner';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


class properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loading : false,
      indexPageData : {},
      propertiesData:[]
    };
  }

  
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };


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
    this.props.onGetData();
  }

  
    state = {  }
    render() { 
      const { errors , loading , indexPageData} = this.state;
      let { propertiesData } = this.state;
      console.log('backend data from api ' , indexPageData);

      propertiesData = indexPageData && indexPageData.properties ? indexPageData.properties : [] ;
      console.log('properties Data ' , propertiesData);

    let googpleMapApiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;

    let pageContent = '';

    if(loading){
      pageContent = <Spinner />
    }
    else{
      pageContent = "";
    }
        return ( 
            <React.Fragment>
                <div className="pxp-content pxp-full-height">
                <div className="pxp-map-side pxp-map-right pxp-half">
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: googpleMapApiKey }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                  </GoogleMapReact>
                  <Link to="" className="pxp-list-toggle"><span className="fa fa-list" /></Link>
                </div>
                <div className="pxp-content-side pxp-content-left pxp-half">
                  <div className="pxp-content-side-wrapper">
                    <div className="d-flex">
                      <div className="pxp-content-side-search-form">
                        <div className="row pxp-content-side-search-form-row">
                          <div className="col-5 col-sm-5 col-md-4 col-lg-3 pxp-content-side-search-form-col">
                            <select className="custom-select" id="pxp-p-search-status">
                              <option value="buy" >Buy</option>
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
                              <option value >Any</option>
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
                              <option value >Any</option>
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
                              <option value >Default Sort</option>
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
                    {propertiesData && propertiesData.length ? 
                      propertiesData.map( (data, index) =>
                      <div className="col-sm-12 col-md-6 col-xxxl-4">
                        <Link to={`/single-prop-${data && data.propertId && data.propertId}`}  className="pxp-results-card-1 rounded-lg" data-prop={1}>
                          <div id="card-carousel-1" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                              
                              <div className="carousel-item active" style={{backgroundImage: `url(${data && data.imageList && data.imageList.length &&  data.imageList[0].imageURL ? data.imageList[0].imageURL : 'assets/images/ic_profile_placeholder.png'})`}} />
                              {/* <div className="carousel-item" style={{backgroundImage: 'url(assets/images/prop-1-2-gallery.jpg)'}} /> */}
                            </div>
                            {/* <span className="carousel-control-prev" data-to="#card-carousel-1" data-slide="prev">
                              <span className="fa fa-angle-left" aria-hidden="true" />
                            </span>
                            <span className="carousel-control-next" data-to="#card-carousel-1" data-slide="next">
                              <span className="fa fa-angle-right" aria-hidden="true" />
                            </span> */}
                          </div>
                          <div className="pxp-results-card-1-gradient" />
                          <div className="pxp-results-card-1-details">
                            <div className="pxp-results-card-1-details-title">{data && data.adTitle}</div>
                            <div className="pxp-results-card-1-details-price">{data && data.currency && data.currency.symbol}{data && data.price}</div>
                          </div>
                          <div className="pxp-results-card-1-features">
                            <span> {data && data.noOfBedrooms} BD <span>|</span> {data && data.noOfBathrooms} BA <span>|</span> {data && data.finishedSqftArea} SF</span>
                          </div>
                        </Link>
                      </div>
                    )
                    : []           
                    }
                    </div>
                    <ul className="pagination pxp-paginantion mt-2 mt-md-4">
                      <li className="page-item active"><Link className="page-link" to="">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="">3</Link></li>
                      <li className="page-item"><Link className="page-link" to="">Next <span className="fa fa-angle-right" /></Link></li>
                    </ul>
                  </div>
                  {/*                 <div className="pxp-footer pxp-content-side-wrapper">
                            <div className="pxp-footer-bottom">
                                <div className="pxp-footer-copyright">&copy;  HouseUP All Rights Reserved. 2019</div>
                            </div>
                        </div> */}
                </div>
              </div>
              { pageContent }
            </React.Fragment>
         );
    }
}
 
const mapStateToProps = state => {
  return {
    page: state.page,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetData: () => dispatch(actions.getIndexPageData()),
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(properties);