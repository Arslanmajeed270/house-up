import React, { Component } from 'react';


import Header from '../components/header';
import Sidebar from '../components/sideBar';
import Routes from './routes';

import BusinessRegDoc from '../components/Popups/BusinessRegistrationDoc'
import BusinessSupportDoc from '../components/Popups/BusinessSupportDoc'
import UserStatusAction from '../components/Popups/StatusAction/UserStatusAction'
import VendorStatusAction from '../components/Popups/StatusAction/VendorStatusAction';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sideBarShow : false,
          notificationShow : false,
          userShow : false,
          businessRegDoc:false,
          businessSuppDoc:false,
          data:'',
          userStatus:false,
          vendorStatus:false

        };
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

      closeCodelHanlder = (model) => {
		this.setState({
			[model]: false,
		});
	};
	modelHanlder = (model, data) => {
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
	};
      

    render() {
        return (
            <React.Fragment>
                {this.state.businessRegDoc && (
					<BusinessRegDoc
						show={this.state.businessRegDoc}
                        closeCodelHanlder={this.closeCodelHanlder}
                        data={this.state.data}
					/>
				)}
                {this.state.businessSuppDoc && (
					<BusinessSupportDoc
						show={this.state.businessSuppDoc}
						closeCodelHanlder={this.closeCodelHanlder}
                        data={this.state.data}
					/>
				)}
                {this.state.userStatus && (
					<UserStatusAction
						show={this.state.userStatus}
                        closeCodelHanlder={this.closeCodelHanlder}
                        data={this.state.data}
					/>
				)}
                {this.state.vendorStatus && (
					<VendorStatusAction
						show={this.state.vendorStatus}
                        closeCodelHanlder={this.closeCodelHanlder}
                        data={this.state.data}
					/>
				)}

                
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
export default index;
