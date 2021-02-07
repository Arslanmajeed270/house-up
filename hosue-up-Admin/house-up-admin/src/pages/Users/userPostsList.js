import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class userPostsList extends Component {
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
                              data && data.category === 'Post' ? (
                                <>
                                  <div
                                    key={idx}
                                    className='col-sm-12 col-md-6 col-lg-4'
                                  >
                                    <Link
                                      to="#"
                                      className='pxp-prop-card-1 rounded-lg mb-4'
                                    >
                                { data &&
                                    data.object.postImages &&
                                    data.object.postImages.length
                                        ? 
                                        <>
                                        <div
                                            className='pxp-prop-card-1-fig pxp-cover'
                                            style={{
                                            backgroundImage: `url(${
                                                data.object.postImages[0] &&
                                                data.object.postImages[0].imageURL 
                                            })`,
                                            }}
                                        />
                                        <div className='pxp-prop-card-1-gradient pxp-animate' />
                                        <div className='pxp-prop-card-1-details'>
                                            <div className='pxp-prop-card-1-details-title'>
                                                {data && data.object && data.object.postText}
                                            </div>
                                       </div>
                                       </>
                                       :
                                       <div className='pxp-prop-card-1-details'>
                                            <div className='pxp-prop-card-1-details-title' style={{color:'black'}}>
                                                {data && data.object && data.object.postText}
                                            </div>
                                        </div>
                                }
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
        onGetSingleVendorsPropertyData: (userData) => dispatch(actions.getSingleVendorsPropertyData(userData))
  
    }
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(userPostsList);