import React , {Component} from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/common/PrivateRoute';    
import * as actions from './store/actions/index';


import Index from "./pages";
import LogIn from './components/Auth/Login/content'

class App extends Component {
    render() {

        let loginCheck = false;
    
        if (localStorage.jwtToken) {
          
        //   setAuthToken(localStorage.jwtToken);
        //   const decoded = jwt_decode(localStorage.jwtToken);
          this.props.setCurrentUser(localStorage.jwtToken);
          loginCheck = true;  
        //   const currentTime = Date.now()/1000;
      
        //   if (decoded.exp < currentTime) {
        //       this.props.logoutUser();
        //       window.location.href = routesPrefix+'login';
        //   }
    
      }


  return (
    <React.Fragment>
                <Route      
                    exact 
                    path={"/login"} 
                    component={LogIn}
                />
                <PrivateRoute      
                    exact 
                    path={"/"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/index"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/account"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/boost"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/charts"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/feature"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/helper"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/properties"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/single-prop"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/single-user"} 
                    component={Index }
                />
                <PrivateRoute      
                    exact 
                    path={"/single-vendor"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/user"} 
                    component={Index }
                />
                <PrivateRoute         
                    exact 
                    path={"/Vendors"} 
                    component={Index}
                />
                <Redirect to={loginCheck ? '/' : '/login'} />
    </React.Fragment>
  )
                }
}

const mapDispatchToProps = dispatch => {
    return {
      setCurrentUser: () => dispatch(actions.setCurrentUser()),
      logoutUser: () => dispatch(actions.logoutUser())
    };
  };
  
  
  export default withRouter(connect(null,mapDispatchToProps)(App));
