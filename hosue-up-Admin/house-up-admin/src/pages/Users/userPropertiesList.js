import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class userPropertiesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
          singleVendorsPropertiesData:{}
        };
      }
      static getDerivedStateFromProps(props, state) {
  
        let userPage = props.userPage;
    
        let stateChanged = false;
        let changedState = {};
    
        if (
            userPage &&
            JSON.stringify(state.singleVendorsPropertiesData) !==
            JSON.stringify(userPage.singleVendorsPropertiesData)
            ) {
                changedState.singleVendorsPropertiesData =
                userPage.singleVendorsPropertiesData;
                stateChanged = true;
            }
    
        if(stateChanged){
          return changedState;
        }
        return null;
    
      }
    
      componentDidMount() {
      console.log('hello')
      const id = this.props.id
        this.setState({
          id: id
        });
        const data = {
                offset: '0',
                lat: '43.787083',
                userId: id,
                channel: 'web',
                lng: '-79.497369',
                limit: '10',
            };
        this.props.onGetSingleVendorsPropertyData(data);
      }
      updatePropertyState = (propertyStatusDesc , propertyId) =>
  {
    let userData = {
      propertyId,
      propertyStatusDesc
    };
    console.log(userData);
    this.props.onUpdatePropertyState(userData);
  }
    render() {
        const {singleVendorsPropertiesData} = this.state;
        return (
            <React.Fragment>
                 {/* {singleVendorsPropertiesData &&
                      singleVendorsPropertiesData.length ? (
                        <h2 className='pxp-section-h2 mt-100'>
                          Listings by {singleVendorData && singleVendorData.firstName}{' '}
                          {singleVendorData && singleVendorData.lastName}{' '}
                        </h2>
                      ) : (
                        ''
                      )} */}
                      <div className='row mt-4 mt-md-5'>
                        {singleVendorsPropertiesData &&
                        singleVendorsPropertiesData.length
                          ? singleVendorsPropertiesData.map((data, idx) =>
                              data && data.category === 'Property' ? (
                                <>
                                  <div
                                    key={idx}
                                    className='col-sm-12 col-md-6 col-lg-4'
                                  >
                                    <Link
                                      to={`/single-prop-${
                                        data && data.object && data.object.propertId
                                      }`}
                                      className='pxp-prop-card-1 rounded-lg mb-4'
                                    >
                                      <div
                                        className='pxp-prop-card-1-fig pxp-cover'
                                        style={{
                                          backgroundImage: `url(${
                                            data &&
                                            data.object.imageList &&
                                            data.object.imageList.length
                                              ? data.object.imageList[0].imageURL
                                              : ''
                                          })`,
                                        }}
                                      />
                                      <div className='pxp-prop-card-1-details'>
                                        <div className='pxp-prop-card-1-details-title'>
                                          {data && data.object && data.object.adTitle}
                                        </div>
                                        <div className='pxp-prop-card-1-details-price'>
                                          {' '}
                                          {data &&
                                            data.object &&
                                            data.object.currency &&
                                            data.object.currency.symbol}{' '}
                                          {data &&
                                            data.object &&
                                            data.object.price &&
                                            data.object.price.toLocaleString()}
                                        </div>
                                        <div className='pxp-prop-card-1-details-features text-uppercase'>
                                          {data &&
                                            data.object &&
                                            data.object.noOfBedrooms}{' '}
                                          BD <span>|</span>{' '}
                                          {data &&
                                            data.object &&
                                            data.object.noOfBathroomsValue}{' '}
                                          BA <span>|</span>{' '}
                                          {data &&
                                            data.object &&
                                            data.object.finishedSqftArea}{' '}
                                          SF
                                        </div>
                                        {
                                          data && data.object && data.object.propertyStatusDesc === "In Review" ?
                                          <div className='pxp-prop-card-1-details-features row text-uppercase'>
                                          <div className="col-md-4">
                                            <button className="btn btn-success"
                                            onClick={()=>this.updatePropertyState("Approved" , data.object.propertId)}>
                                              APPROVE</button>
                                          </div>
                                          <div className="col-md-4">
                                            <button className="btn btn-danger"
                                            onClick={()=>this.updatePropertyState("Rejected" , data.object.propertId)}
                                            >
                                              REJECT</button>
                                          </div>
                                          <div className="col-md-4">
                                            <h6 >Premium Plan</h6>
                                          </div> 
                                        </div>
                                        : ""
                                        }
                                      </div>
                                      
                                    </Link>
                                  </div>
                                </>
                              ) : (
                                ''
                              )
                            )
                          : ''}
                            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
      userPage: state.userPage
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onUpdatePropertyState : (userData)=> dispatch(actions.updateProperty(userData)),
      onGetSingleVendorsPropertyData: (userData) => dispatch(actions.getSingleVendorsPropertyData(userData)),
  
    }
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(userPropertiesList);