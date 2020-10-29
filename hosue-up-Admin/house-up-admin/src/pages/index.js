import React, { Component } from 'react';


import Header from '../components/header';
import Sidebar from '../components/sideBar';
import Routes from './routes';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sideBarShow : false,
          notificationShow : false,
          userShow : false
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

    render() {
        return (
            <React.Fragment>
                <Header sideBarHandler = {()=>this.sideBarHandler()}
                 notificationToggle = { () => this.notificationToggle()} 
                 userToggleHandler = { () => this.userToggleHandler()} 
                 notificationState = {this.state.notificationShow}
                 userShowState = {this.state.userShow}
                  />
                <div className="d-flex align-items-stretch">
                    <Sidebar sideBarState = {this.state.sideBarShow} />
                    <Routes />
                </div>
            </React.Fragment>
        )
    }
}
export default index;
