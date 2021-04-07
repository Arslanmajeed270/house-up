import React, { Component } from 'react'
import VendorDetails from './components/vendorDetails';
import VendorProperties from './components/vendorProperties';
import VendorStories from './components/vendorStories';
import VendorPosts from './components/vendorPosts';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class SingleVendor extends Component {

    constructor(props) {
        super(props);
        this.state = {
          singleVendorData: {},
          id: null,
          singleVendorsPropertiesData:{}
        };
      }
      static getDerivedStateFromProps(props, state) {
      const { vendor, property } = props;
    
        let stateChanged = false;
        let changedState = {};
    
        if(vendor && JSON.stringify(state.singleVendorData) !== JSON.stringify(vendor.singleVendorData)){
          changedState.singleVendorData = vendor.singleVendorData;  
          stateChanged = true;
        }
        if (
                property &&
                JSON.stringify(state.singleVendorsPropertiesData) !==
                    JSON.stringify(property.singleVendorsPropertiesData)
            ) {
                changedState.singleVendorsPropertiesData =
          property.singleVendorsPropertiesData;
                stateChanged = true;
            }
    
        if(stateChanged){
          return changedState;
        }
        return null;
    
      }

      componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({
          id: id
        });
    
        const userData = {
          userId: id
        }
        const data = {
                offset: '0',
                lat: '43.787083',
                userId: id,
                channel: 'web',
                lng: '-79.497369',
                limit: '10',
            };
        this.props.onGetSingleVendorsData(userData);
        this.props.onGetSingleVendorsPropertyData(data);
      }

    render() {
        const { singleVendorData, singleVendorsPropertiesData } = this.state;
        return (
        <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
                <section className="py-5">
                    <VendorDetails vendorsDetail={singleVendorData}  />
                    <VendorProperties 
                        vendorProperties={
                            singleVendorsPropertiesData && singleVendorsPropertiesData.length ?
                            singleVendorsPropertiesData : []
                         } 
                    />
                    <VendorPosts 
                    vendorPost={
                        singleVendorsPropertiesData && singleVendorsPropertiesData.length ?
                        singleVendorsPropertiesData : []
                     }   
                    />
                    <VendorStories />
                </section>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        vendor: state.vendor,
        property: state.property,
    }
  };

  
const mapDispatchToProps = dispatch => {
    return {
        onGetSingleVendorsData: (userData) => dispatch(actions.getSingleVendorData(userData)),
        onUpdateVendorsState : (userData)=> dispatch(actions.updateVendorState(userData)),
        onGetSingleVendorsPropertyData: (userData) => dispatch(actions.getSingleVendorsPropertyData(userData)),
  
    }
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(SingleVendor);