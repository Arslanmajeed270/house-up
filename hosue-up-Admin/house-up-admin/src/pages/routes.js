import React, { Component } from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';


import Index from './Dashboard';
import Account from './Dashboard/account';
import Boost from './Dashboard/boost';
import Charts from './Dashboard/charts';
import Feature from './Dashboard/feature';
import Helper from './Dashboard/help';
import SingleProperty from './Property/singleProperty';
import Properties from './Property/properties';
import SingleUser from './Users/singleUser';
import SingleVendor from './Users/singleVendor';
import User from './Users/user';
import Vendors from './Users/vendor';
import LogIn from '../components/Auth/Login/content';


class routes extends Component {
    render() {
        return (
            <Router>
                <Route      
                    exact 
                    path={"/"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/login"} 
                    component={
                        () => <LogIn />
                    }
                />
                <Route      
                    exact 
                    path={"/index"} 
                    component={
                        () => <Index />
                    }
                />
                <Route      
                    exact 
                    path={"/account"} 
                    component={
                        () => <Account/>
                    }
                />
                <Route      
                    exact 
                    path={"/boost"} 
                    component={
                        () => <Boost />
                    }
                />
                <Route      
                    exact 
                    path={"/charts"} 
                    component={
                        () => <Charts />
                    }
                />
                <Route      
                    exact 
                    path={"/feature"} 
                    component={
                        () => <Feature />
                    }
                />
                <Route      
                    exact 
                    path={"/helper"} 
                    component={
                        () => <Helper />
                    }
                />
                <Route      
                    exact 
                    path={"/properties"} 
                    component={
                        () => <Properties/>
                    }
                />
                <Route      
                    exact 
                    path={"/single-prop"} 
                    component={
                    () => <SingleProperty />
                }
                />
                <Route      
                    exact 
                    path={"/single-user"} 
                    component={
                        () => <SingleUser />
                    }
                />
                <Route      
                    exact 
                    path={"/single-vendor"} 
                    component={
                        () => <SingleVendor />
                    }
                />
                <Route      
                    exact 
                    path={"/user"} 
                    component={
                        () => <User />
                    }
                />
                <Route      
                    exact 
                    path={"/Vendors"} 
                    component={
                        () => <Vendors />
                    }
                />

        </Router>
        )
    }
}
export default withRouter(routes);
