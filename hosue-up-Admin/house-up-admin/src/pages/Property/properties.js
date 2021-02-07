import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateProperty, getProperties } from '../../store/actions';
import { limitWordHandler, dateHandler } from '../../utils/common'
class properties extends Component {

    state = {
      propertiesData:[],
      properties: [],
			pagesCount: 0,
      loading: false
    };

  static getDerivedStateFromProps(props, state) {
  
    const { property, page } = props;
    const { loading, propertiesData, properties, pagesCount} = state;

    let stateChanged = false;
    let changedState = {};

    if(property && JSON.stringify(propertiesData) !== JSON.stringify(property.propertiesData)){
      changedState.propertiesData = property.propertiesData; 
      changedState.properties = property.propertiesData.properties || [];
			changedState.pagesCount =  property.propertiesData.pagesCount || 0; 
      stateChanged = true;
    }

    if( loading !== page.loading ){
      changedState.loading = page.loading;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;
  }

  componentDidMount() {
    const { onGetProperties } = this.props;
    const ReqPacket = {
			channel:"web",
			lat: 43.787083,
			lng: -79.497369,
			city: 'Toronto',
			state: "Ontario",
			country: "Canada",
			rentalListingYN:"No",
			pageNum:1,
			loggedInuserId: "11",
			searchText:"",
			phoneNo: "03335425231"
			}
			onGetProperties(ReqPacket);
  }
  
  
  updatePropertyState = (propertyStatusDesc , propertyId) =>
  {
    const { onUpdateProperty } = this.props;
    const userData = {
      propertyId,
      propertyStatusDesc
    };
    console.log(userData);
    onUpdateProperty(userData);
  }

    render() { 
      const { properties, pagesCount, loading  } = this.state;
      console.log('checking this.state: ', this.state);

        return ( 
            <React.Fragment>
              {!loading &&
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row">
                    {properties && properties.length ? 
                      properties.map( (data, index) =>
                          <div key={index} className="col-lg-12 message card px-5 py-3 mb-4">
                            <div className="row">
                              <div className="col-md-9">
                              <Link to={`/single-prop-${data && data.propertId}`} className="no-anchor-style" >
                                <div className="row">
                                <div className="col-lg-6 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                  {dateHandler(data.createDate)}
                                  <img src={data.imageList && data.imageList[0] && data.imageList[0].imageURL ? data.imageList[0].imageURL : "assets/img/demo.png"} 
                                  alt="Profile" style={{maxWidth: '48px', maxHeight:'48px' , backgroundColor:'#008CF8'}} 
                                  className="mx-3 my-2 my-lg-0" />
                                  <h6 className="mb-0">{limitWordHandler(data.adTitle)}</h6>
                              </div>
                              <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                <h6 className="mb-0">{data.propertyType}</h6>
                              </div>
                              <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                <h6 className="mb-0">{data.price}</h6>
                              </div>
                              <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                <h6 className="mb-0">{data.city}</h6>
                              </div>
                              </div>
                              </Link>
                              </div>
                              <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                <div className="row">
                                  {
                                    data.propertyStatusDesc === "In Review" ?
                                    <>
                                      <div className="col-md-6">
                                      <button className="btn btn-success status-btn" 
                                        onClick={()=>this.updatePropertyState("Approved" , data.propertId)}>
                                          APPROVE
                                      </button>
                                      </div>
                                      <div className="col-md-6">
                                        <button className="btn btn-danger status-btn" 
                                          onClick={()=>this.updatePropertyState("Rejected" , data.propertId)}>
                                            REJECT
                                        </button>
                                      </div>
                                    </>
                                    :
                                    <>
                                      <div className="col-md-6" />
                                      <div className="col-md-6">
                                        <button 
                                          className={`btn  ${data.propertyStatusDesc === "Approved" || data.propertyStatusDesc === "Active" ? "btn-success" : "btn-danger"} status-btn`}
                                        >
                                          {data.propertyStatusDesc === "Approved" || data.propertyStatusDesc === "Active" ? "APPROVED" : "REJECTED"}
                                        </button>
                                      </div>
                                    </>
                                  }
                                  
                                </div>
                              </div>
                           </div>
                          </div> 
                        )
                        : ''
                    }            

                      {/* <div className="col-lg-12"><Link to="single-user" className="message card px-5 py-3 mb-4  no-anchor-style">
                          <div className="row">
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">14<sup className="smaller text-gray font-weight-normal">Aug</sup></strong><img src={"assets/img/avatar-2.jpg"} alt="..." style={{maxWidth: '3rem'}} className="rounded-circle mx-3 my-2 my-lg-0" />
                              <h6 className="mb-0">Ryan Gosling</h6>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">ryangosling@gmail.com</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">@ryangoslingl</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">+92 300 8134076</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">Active</div>
                            </div>                                       
                          </div></Link></div> */}
                    </div></section>
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
              }
            </React.Fragment>
         );
    }
}
 

const mapStateToProps = state => {
  return {
    property: state.property,
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetProperties: (data) => dispatch(getProperties(data)),
      onUpdateProperty : (userData)=> dispatch(updateProperty(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(properties);