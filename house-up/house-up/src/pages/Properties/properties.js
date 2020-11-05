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
      propertiesData:[],
      indexPageData : {},
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
    const userId  =  this.state.user && this.state.user.userId ? this.state.user.userId : null;

    const data = {
      state : "",
      channel:"web",
      lat:43.787083,
      lng:-79.497369,
      city: "",
      limit:10,
      offset:0,
      loggedInuserId: userId,
      country: ""
    };

    this.props.onGetData(data);
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
                      <div className="d-flex listing-icon-fix">
                        <Link role="button" className="pxp-adv-toggle" to="" ><span className="fa fa-sliders" /></Link>
                        <img src={require('../../assets/images/ic_filter.svg')} alt="" />
                      </div>
                    </div>
                    <div className="row pb-4">
                      <div className="col-sm-6">
                        <h2 className="pxp-content-side-h2">1,684 Results</h2>
                      </div>
                    </div>
                    <div className="row">
                    {propertiesData && propertiesData.length ? 
                      propertiesData.map( (data, index) =>
                      <div className="col-sm-12 col-md-6 col-xxxl-4">
                        <Link to={`/single-prop-${data && data.propertId}`}  className="pxp-results-card-1 rounded-lg" data-prop={1}>
                          <div id="card-carousel-1" className="carousel slide" data-ride="carousel" data-interval="false">
                            <div className="carousel-inner">
                              <div className="carousel-item active" style={{backgroundImage: `url(${data && data.imageList && data.imageList.length &&  data.imageList[0].imageURL ? data.imageList[0].imageURL : 'assets/images/ic_profile_placeholder.png'})`}} />
                            </div>
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
                      {/* <li className="page-item"><Link className="page-link" to="">3</Link></li> */}
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
    onGetData: () => (data)=> dispatch(actions.getIndexPageData(data)),
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(properties);