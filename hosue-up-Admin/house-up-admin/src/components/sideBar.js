import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../store/actions/authActions';


class sideBar extends Component {


    logoutHandler =(e)=>{
       e.preventDefault();
       this.props.onLogoutUser(this.props.history);
    }

    render() {
        return (

            <React.Fragment>
            <div id="sidebar" className={ this.props.sideBarState ? "sidebar py-3 shrink show": "sidebar py-3 " }>
                     <ul className="sidebar-menu list-unstyled">
                         <li className="sidebar-list-item"><Link to="/index" className="sidebar-link text-muted"><i className="o-home-1 mr-3 text-gray"></i><span>Home</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/vendors" className="sidebar-link text-muted"><i className="o-profile-1 mr-3 text-gray"></i><span>Professionals</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/user" className="sidebar-link text-muted"><i className="o-user-1 mr-3 text-gray"></i><span>User</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/properties" className="sidebar-link text-muted"><i className="o-earth-globe-1 mr-3 text-gray"></i><span>Properties</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/feature" className="sidebar-link text-muted"><i className="o-trophy-1 mr-3 text-gray"></i><span>Feature Post</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/boost" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Post Bost</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/account" className="sidebar-link text-muted"><i className="o-document-1 mr-3 text-gray"></i><span>Accounts</span></Link></li> 
                         <li className="sidebar-list-item"><Link to="/helper" className="sidebar-link text-muted"><i className="o-clock-1 mr-3 text-gray"></i><span>Help & Support</span></Link></li>              
                         <li className="sidebar-list-item"><Link to="/login" onClick={this.logoutHandler} className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray"></i><span>Logout</span></Link></li>
                     </ul>
                 </div>

        </React.Fragment>
            
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onLogoutUser: (history) => dispatch(actions.logoutUser(history))
    };
  };
  
  
  export default withRouter(connect(null,mapDispatchToProps)(sideBar));