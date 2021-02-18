import React , {Component} from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './components/common/PrivateRoute';
import PublicRoute from './components/common/PublicRoute';
import { setCurrentUser, logoutUser } from './store/actions/index';

import Index from "./pages";
import LogIn from './components/Auth/Login/content'

class App extends Component {
    state = {
        publicRoutes: [
            '/login',
        ],
        privateRoutes: [
            '/',
            '/account',
            '/upgrade-account',
            '/property-fees',
            '/account-boost',
            '/boost',
            '/charts',
            '/feature',
            '/helper',
            '/properties',
            '/single-prop-:id',
            '/single-user-:id',
            '/single-vendor-:id',
            '/single-vendor2',
            '/users',
            '/Vendors',
        ]
    }
    render() {
        const { onSetCurrentUser, onLogoutUser } = this.props;
        const { publicRoutes, privateRoutes } = this.state;
        if (localStorage.jwtToken) {
			onSetCurrentUser(JSON.parse(localStorage.jwtToken));
		}else{
            onLogoutUser();
        }
        return (
            <Switch>
                {
                    publicRoutes.map( (route, idx) => (<PublicRoute      
                        exact 
                        key={idx}
                        path={`${route}`} 
                        component={LogIn}
                    />) )
                }
                 {
                    privateRoutes.map( (route, idx) => (<PrivateRoute      
                        exact 
                        key={idx}
                        path={`${route}`} 
                        component={Index}
                    />) )
                }
                <Redirect to='/' />
            </Switch>   
  )
                }
}

const mapDispatchToProps = dispatch => {
    return {
      onSetCurrentUser: () => dispatch(setCurrentUser()),
      onLogoutUser: () => dispatch(logoutUser())
    };
  };
  
  
  export default withRouter(connect(null,mapDispatchToProps)(App));
