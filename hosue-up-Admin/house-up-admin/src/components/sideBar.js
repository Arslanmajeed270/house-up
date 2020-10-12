import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class sideBar extends Component {
    render() {
        return (

            <React.Fragment>
            <div id="sidebar" className={ this.props.sideBarState ? "sidebar py-3 shrink show": "sidebar py-3 " }>
                     <ul className="sidebar-menu list-unstyled">
                         <li className="sidebar-list-item"><Link to="/index" className="sidebar-link text-muted"><i className="o-home-1 mr-3 text-gray"></i><span>Home</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/vendors" className="sidebar-link text-muted"><i className="o-profile-1 mr-3 text-gray"></i><span>Vender</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/user" className="sidebar-link text-muted"><i className="o-user-1 mr-3 text-gray"></i><span>User</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/properties" className="sidebar-link text-muted"><i className="o-earth-globe-1 mr-3 text-gray"></i><span>Properties</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/feature" className="sidebar-link text-muted"><i className="o-trophy-1 mr-3 text-gray"></i><span>Feature Post</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/boost" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Post Bost</span></Link></li>
                         <li className="sidebar-list-item"><Link to="/account" className="sidebar-link text-muted"><i className="o-document-1 mr-3 text-gray"></i><span>Accounts</span></Link></li> 
                         <li className="sidebar-list-item"><Link to="/helper" className="sidebar-link text-muted"><i className="o-clock-1 mr-3 text-gray"></i><span>Help & Support</span></Link></li>              
                         <li className="sidebar-list-item"><Link to="/login" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray"></i><span>Logout</span></Link></li>
                     </ul>
                 </div>

        </React.Fragment>

            // <React.Fragment>
            //     {this.props.sideBarState ?
            //     <div id="sidebar" className="sidebar py-3">
            //         <ul className="sidebar-menu list-unstyled">
            //             <li className="sidebar-list-item"><Link to="/index" className="sidebar-link text-muted"><i className="o-home-1 mr-3 text-gray"></i><span>Home</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/vendors" className="sidebar-link text-muted"><i className="o-profile-1 mr-3 text-gray"></i><span>Vender</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/user" className="sidebar-link text-muted"><i className="o-user-1 mr-3 text-gray"></i><span>User</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/properties" className="sidebar-link text-muted"><i className="o-earth-globe-1 mr-3 text-gray"></i><span>Properties</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/feature" className="sidebar-link text-muted"><i className="o-trophy-1 mr-3 text-gray"></i><span>Feature Post</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/boost" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Post Bost</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/account" className="sidebar-link text-muted"><i className="o-document-1 mr-3 text-gray"></i><span>Accounts</span></Link></li> 
            //             <li className="sidebar-list-item"><Link to="/helper" className="sidebar-link text-muted"><i className="o-clock-1 mr-3 text-gray"></i><span>Help & Support</span></Link></li>              
            //             <li className="sidebar-list-item"><Link to="/login" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray"></i><span>Logout</span></Link></li>
            //         </ul>
            //     </div> : <div id="sidebar" className="sidebar py-3 shrink show">
            //         <ul className="sidebar-menu list-unstyled">
            //             <li className="sidebar-list-item"><Link to="/index" className="sidebar-link text-muted"><i className="o-home-1 mr-3 text-gray"></i><span>Home</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/vendors" className="sidebar-link text-muted"><i className="o-profile-1 mr-3 text-gray"></i><span>Vender</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/user" className="sidebar-link text-muted"><i className="o-user-1 mr-3 text-gray"></i><span>User</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/properties" className="sidebar-link text-muted"><i className="o-earth-globe-1 mr-3 text-gray"></i><span>Properties</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/feature" className="sidebar-link text-muted"><i className="o-trophy-1 mr-3 text-gray"></i><span>Feature Post</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/boost" className="sidebar-link text-muted"><i className="o-sales-up-1 mr-3 text-gray"></i><span>Post Bost</span></Link></li>
            //             <li className="sidebar-list-item"><Link to="/account" className="sidebar-link text-muted"><i className="o-document-1 mr-3 text-gray"></i><span>Accounts</span></Link></li> 
            //             <li className="sidebar-list-item"><Link to="/helper" className="sidebar-link text-muted"><i className="o-clock-1 mr-3 text-gray"></i><span>Help & Support</span></Link></li>              
            //             <li className="sidebar-list-item"><Link to="/login" className="sidebar-link text-muted"><i className="o-exit-1 mr-3 text-gray"></i><span>Logout</span></Link></li>
            //         </ul>
            //     </div>
            //     }    
            // </React.Fragment>
            
        )
    }
}
export default sideBar;