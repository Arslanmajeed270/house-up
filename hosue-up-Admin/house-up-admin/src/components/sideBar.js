import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';


class sideBar extends Component {
    state = {
        showSubMenu: false
    }
    logoutHandler =(e)=>{
       e.preventDefault();
       const { onLogoutUser, history } = this.props;
       onLogoutUser(history);
    }

    componentDidMount(){
        const { location } = this.props;
        const currentPathIs = location && location.pathname ? location.pathname : ''; 
        if( currentPathIs === "/account" || 
        currentPathIs === "/upgrade-account" || 
        currentPathIs === "/property-fees" || 
        currentPathIs === "/account-boost"){
            this.setState({
                showSubMenu: true
            });
        }
    }

    render() {
        const { sideBarState, location } = this.props;
        const { showSubMenu } = this.state;
        const currentPathIs = location && location.pathname ? location.pathname : ''; 
        
        return (

            <React.Fragment>
            <div id="sidebar" className={ sideBarState ? "sidebar py-3 shrink show": "sidebar py-3 " }>
                     <ul className="sidebar-menu list-unstyled">
                         <li className={`sidebar-list-item`}>
                             <Link to="/" className={`sidebar-link ${ currentPathIs === '/' ? '' : 'text-muted' }`}>
                                 <i className="o-home-1 mr-3 text-gray"></i>
                                 <span>Home</span>
                            </Link>
                        </li>
                         <li className="sidebar-list-item">
                             <Link to="/vendors" className={`sidebar-link ${ currentPathIs === '/vendors' ? '' : 'text-muted' }`} >
                                 <i className="o-profile-1 mr-3 text-gray"></i>
                                 <span>Vendors</span>
                            </Link>
                        </li>
                         <li className="sidebar-list-item">
                             <Link to="/users" className={`sidebar-link ${ currentPathIs === '/users' ? '' : 'text-muted' }`} >
                                 <i className="o-user-1 mr-3 text-gray"></i>
                                 <span>User</span>
                            </Link>
                        </li>
                         <li className="sidebar-list-item">
                             <Link to="/properties"  className={`sidebar-link ${ currentPathIs === '/properties' ? '' : 'text-muted' }`} >
                                 <i className="o-earth-globe-1 mr-3 text-gray"></i>
                                 <span>Properties</span>
                            </Link>
                        </li>
                         {/* <li className="sidebar-list-item">
                             <Link to="/feature" className={`sidebar-link ${ currentPathIs === '/feature' ? '' : 'text-muted' }`} >
                                 <i className="o-trophy-1 mr-3 text-gray"></i>
                                 <span>Feature Post</span>
                            </Link>
                        </li>
                         <li className="sidebar-list-item">
                             <Link to="/boost" className={`sidebar-link ${ currentPathIs === '/boost' ? '' : 'text-muted' }`} >
                                 <i className="o-sales-up-1 mr-3 text-gray"></i>
                                 <span>Post Bost</span>
                            </Link>
                        </li> */}
                         <li className="sidebar-list-item">
                             <Link to="/account" onClick={(e) => {
                                e.preventDefault();
                                this.setState({ showSubMenu: !showSubMenu });
                             }} className={`sidebar-link ${ currentPathIs === '/account' ? '' : 'text-muted' }`} >
                                 <i className="o-document-1 mr-3 text-gray"></i>
                                 <span>Accounts</span>
                            </Link>
                        </li>
                         <li className="sidebar-list-item">
                             <Link to="/upgrade-account"  style={{ display: showSubMenu ? 'block' : 'none' }} className={`sidebar-link sub-menu ${ currentPathIs === '/upgrade-account' ? '' : 'text-muted' }`} >
                                 <span>Upgrade Account</span>
                            </Link>
                        </li>
                         <li className="sidebar-list-item">
                             <Link to="/property-fees" style={{ display: showSubMenu ? 'block' : 'none' }} className={`sidebar-link sub-menu ${ currentPathIs === '/property-fees' ? '' : 'text-muted' }`} >
                                 <span>Property Fees</span>
                            </Link>
                        </li>
                         {/* <li className="sidebar-list-item">
                             <Link to="/account-boost" style={{ display: showSubMenu ? 'block' : 'none' }} className={`sidebar-link sub-menu ${ currentPathIs === '/account-boost' ? '' : 'text-muted' }`} >
                                 <span>Boost</span>
                            </Link>
                        </li> */}
                         <li className="sidebar-list-item">
                             <Link to="/helper" className={`sidebar-link ${ currentPathIs === '/helper' ? '' : 'text-muted' }`} >
                                <i className="o-clock-1 mr-3 text-gray"></i>
                                <span>Help & Support</span>
                            </Link>
                        </li>              
                         <li className="sidebar-list-item">
                             <Link to="/login" onClick={this.logoutHandler}  className={`sidebar-link ${ currentPathIs === '/login' ? '' : 'text-muted' }`}>
                                 <i className="o-exit-1 mr-3 text-gray"></i>
                                 <span>Logout</span>
                            </Link>
                        </li>
                     </ul>
                 </div>

        </React.Fragment>
            
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onLogoutUser: (history) => dispatch(logoutUser(history))
    };
  };
  
  
  export default withRouter(connect(null,mapDispatchToProps)(sideBar));