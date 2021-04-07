import React, { Component } from 'react'
import UserDetails from './components/userDetails';
import UserProperties from './components/userProperties';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          singleUserData: {},
          id: null,
          singleVendorsPropertiesData:{}
        };
      }

      static getDerivedStateFromProps(props, state) {
  
        const { user, property } = props;
    
        let stateChanged = false;
        let changedState = {};
    
        if(user && JSON.stringify(state.singleUserData) !== JSON.stringify(user.singleUserData)){
          changedState.singleUserData = user.singleUserData;  
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
    
        let userData = {
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
        this.props.onGetSingleUserData(userData);
        this.props.onGetSingleVendorsPropertyData(data);
      }

    render() {
        const { singleUserData, singleVendorsPropertiesData } = this.state;
        console.log('checking this.state: ', this.state);
        return (
        <div className="page-holder w-100 d-flex flex-wrap">
            <div className="container-fluid px-xl-5">
                <section className="py-5">
                    <UserDetails userDetail={singleUserData} />
                    <UserProperties 
                      userProperties={
                        singleVendorsPropertiesData && singleVendorsPropertiesData.length ?
                        singleVendorsPropertiesData : []
                     } 
                     />
                </section>
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
        property: state.property,
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onGetSingleVendorsPropertyData: (userData) => dispatch(actions.getSingleVendorsPropertyData(userData)),
        onGetSingleUserData: (userData) => dispatch(actions.getSingleUserData(userData)),
        onUpdateUserState : (userData)=> dispatch(actions.updateUserState(userData))
    }
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);