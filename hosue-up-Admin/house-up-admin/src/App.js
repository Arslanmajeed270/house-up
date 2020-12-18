import React , {Component} from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/common/PrivateRoute';    
import * as actions from './store/actions/index';


import Index from "./pages";
import LogIn from './components/Auth/Login/content'
import Switch from 'react-bootstrap/esm/Switch';

class App extends Component {

    componentDidMount() {
		if (localStorage.jwtToken) {
			this.props.setCurrentUser(JSON.parse(localStorage.jwtToken));
		}
	}
    render() {
        return (
            <Switch>
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
                    path={"/stories"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/charts"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/posts"} 
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
                    path={"/single-prop-:id"} 
                    component={Index}
                />
                <PrivateRoute      
                    exact 
                    path={"/single-user-:id"} 
                    component={Index }
                />
                <PrivateRoute      
                    exact 
                    path={"/single-vendor-:id"} 
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
                {/* <Redirect to='/' /> */}
            </Switch>   
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
