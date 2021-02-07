import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import Sidebar from '../components/sideBar';
import Routes from './routes';
import Loader from '../components/common/Loader'

import BusinessRegDoc from '../components/Popups/BusinessRegistrationDoc'
import BusinessSupportDoc from '../components/Popups/BusinessSupportDoc'
import UserStatusAction from '../components/Popups/StatusAction/UserStatusAction'
import VendorStatusAction from '../components/Popups/StatusAction/VendorStatusAction';
import Confirmation from '../components/Popups/confirmation';
import RejectedReason from '../components/Popups/RejectedReason';


class Index extends Component {

    state = {
        sideBarShow : false,
        notificationShow : false,
        userShow : false,
        businessRegDoc:false,
        businessSuppDoc:false,
        data:'',
        userStatus:false,
        vendorStatus:false,
        confirmation:false,
        rejectedReason:false,

        loading: false
    }

    static getDerivedStateFromProps(props, state) {
  
        const { page } = props;
        const { loading } = state;
    
        let stateChanged = false;
        let changedState = {};
    
        if( page && loading !== page.loading){
          changedState.loading = page.loading;  
          stateChanged = true;
        }
    
        if(stateChanged){
          return changedState;
        }
        return null;
    }

        
    sideBarHandler = () =>{
            this.setState ({
                sideBarShow : !this.state.sideBarShow 
        })
    }
    notificationToggle = () => {
            this.setState ({
                notificationShow : !this.state.notificationShow
        })
      }
      userToggleHandler = () => {
            this.setState ({
                userShow : !this.state.userShow
        })
      }

      closeModelHandler = (model) => {
		this.setState({
			[model]: false,
		});
    };
    
	modelHandler = (model, data) => {
		if (model === 'businessRegDoc') {
			this.setState({ [model]: !this.state[model] , data:data });
		} else if (model === 'businessSuppDoc') {
			this.setState({ [model]: !this.state[model] , data:data });
        }
        else if (model === 'userStatus') {
			this.setState({ [model]: !this.state[model] , data:data });
        }
        else if (model === 'vendorStatus') {
			this.setState({ [model]: !this.state[model] , data:data });
        }
        else if (model === 'confirmation') {
			this.setState({ 
                [model]: !this.state[model] ,
                data:data,
                vendorStatus:false,
                userStatus:false
            });
        }
        else if (model === 'rejectedReason') {
			this.setState({ 
                [model]: !this.state[model] ,
                data:data,
                vendorStatus:false,
                userStatus:false
            });
		}
	};
      

    render() {
        const { loading, businessRegDoc, data, businessSuppDoc, userStatus,
        vendorStatus, confirmation, rejectedReason} = this.state;
        return (
            <React.Fragment>
                { businessRegDoc && (
					<BusinessRegDoc
						show={businessRegDoc}
                        closeModelHandler={this.closeModelHandler}
                        data={data}
					/>
				)}
                { businessSuppDoc && (
					<BusinessSupportDoc
						show={businessSuppDoc}
						closeModelHandler={this.closeModelHandler}
                        data={data}
					/>
				)}
                {userStatus && (
					<UserStatusAction
                        show={userStatus}
                        modelHandler={this.modelHandler}
                        closeModelHandler={this.closeModelHandler}
                        data={this.state.data}
					/>
				)}
                {vendorStatus && (
					<VendorStatusAction
                        modelHandler={this.modelHandler}
						show={vendorStatus}
                        closeModelHandler={this.closeModelHandler}
                        data={data}
					/>
				)}
                {confirmation && (
					<Confirmation
						show={confirmation}
                        closeModelHandler={this.closeModelHandler}
                        data={data}
					/>
				)}
                {rejectedReason && (
					<RejectedReason
						show={rejectedReason}
                        closeModelHandler={this.closeModelHandler}
                        data={data}
					/>
				)}
                <Loader loading={loading} />
                <Header sideBarHandler = {()=>this.sideBarHandler()}
                 notificationToggle = { () => this.notificationToggle()} 
                 userToggleHandler = { () => this.userToggleHandler()} 
                 notificationState = {this.state.notificationShow}
                 userShowState = {this.state.userShow}
                  />
                <div className="d-flex align-items-stretch">
                    <Sidebar sideBarState = {this.state.sideBarShow} />
                    <Routes modelHanlder={this.modelHanlder} />
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {
      page: state.page
    }
  };
   
  export default connect(mapStateToProps,null)(Index);
