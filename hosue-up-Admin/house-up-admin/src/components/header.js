import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class header extends Component {
  
render() {
        return (
            <React.Fragment>
              <header className="header">
                <nav className="navbar navbar-expand-lg px-4 py-2 bg-white shadow">
                  <Link to="#" className="sidebar-toggler text-gray-500 mr-4 mr-lg-5 lead">
                  <i className="fas fa-align-left" onClick={this.props.sideBarHandler} /></Link>
                  <Link to="index" className="navbar-brand font-weight-bold text-uppercase text-base">
                    <img src="assets/img/logo.svg" alt="..." style={{maxWidth: '3rem'}} className=" my-2 my-lg-0" />
                    </Link>
                  <ul className="ml-auto d-flex align-items-center list-unstyled mb-0">
                    <li className="nav-item">
                      {/* <form id="searchForm" className="ml-auto d-none d-lg-block">
                        <div className="form-group position-relative mb-0">
                          <button type="submit" style={{top: '-3px', left: 0}} className="position-absolute bg-white border-0 p-0"><i className="o-search-magnify-1 text-gray text-lg" /></button>
                          <input type="search" placeholder="Search ..." className="form-control form-control-sm border-0 no-shadow pl-4" />
                        </div>
                      </form> */}
                    </li>
{/*                     
                    <li className= { this.props.notificationState ?  "nav-item dropdown mr-3 show" : "nav-item dropdown mr-3"} >
                      <Link id="notifications" to="" 
                      data-toggle="dropdown" 
                      aria-haspopup="true" 
                      aria-expanded="false" 
                      className="nav-link dropdown-toggle text-gray-400 px-1"
                      
                      >
                        <i className="fa fa-bell" onClick={ this.props.notificationToggle } />
                        <span className="notification-icon" />
                        </Link>
                      <div aria-labelledby="notifications" className={this.props.notificationState ? "dropdown-menu show" : "dropdown-menu"}><Link to="#" className="dropdown-item">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter" /></div>
                            <div className="text ml-2">
                              <p className="mb-0">You have 2 followers</p>
                            </div>
                          </div></Link><Link to="#" className="dropdown-item"> 
                          <div className="d-flex align-items-center">
                            <div className="icon icon-sm bg-green text-white"><i className="fas fa-envelope" /></div>
                            <div className="text ml-2">
                              <p className="mb-0">You have 6 new messages</p>
                            </div>
                          </div></Link><Link to="#" className="dropdown-item">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-sm bg-blue text-white"><i className="fas fa-upload" /></div>
                            <div className="text ml-2">
                              <p className="mb-0">Server rebooted</p>
                            </div>
                          </div></Link><Link to="#" className="dropdown-item">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-sm bg-violet text-white"><i className="fab fa-twitter" /></div>
                            <div className="text ml-2">
                              <p className="mb-0">You have 2 followers</p>
                            </div>
                          </div></Link>
                        <div className="dropdown-divider" />
                        <Link to="#" className="dropdown-item text-center">
                          <small className="font-weight-bold headings-font-family text-uppercase">View all notifications</small></Link>
                      </div>
                    </li>
                     */}
                    <li className={this.props.userShowState ? "nav-item dropdown ml-auto show" : "nav-item dropdown ml-auto"}>
                      <Link id="userInfo" to="" 
                      data-toggle="dropdown" aria-haspopup="true" 
                      aria-expanded="false" 
                      className="nav-link dropdown-toggle" 
                      onClick={ this.props.userToggleHandler } >
                        <img src="assets/img/avatar-6.jpg" alt="Jason Doe" style={{maxWidth: '2.5rem'}} className="img-fluid rounded-circle shadow" /></Link>
                      <div aria-labelledby="userInfo" 
                      className={this.props.userShowState ? "dropdown-menu show" : "dropdown-menu"}>
                        <Link to="#" className="dropdown-item"><strong className="d-block text-uppercase headings-font-family">Admin</strong>
                        {/* <small>Web Developer</small> */}
                        </Link>
                        {/* <div className="dropdown-divider" /><Link to="#" className="dropdown-item">Settings</Link><Link to="#" className="dropdown-item">Activity log     </Link> */}
                        <div className="dropdown-divider" /><Link to="/login" className="dropdown-item">Logout</Link>
                      </div>
                    </li>
                  </ul>
                </nav>
              </header>
            </React.Fragment>
        )
    }
}

export default header;
