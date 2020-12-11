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


class routes extends Component {
    render() {
        return (
            <Router>
                <Route      
                    exact 
                    path={"/"} 
                    component={Index}
                />
                <Route      
                    exact 
                    path={"/index"} 
                    component={Index}
                />
                <Route      
                    exact 
                    path={"/account"} 
                    component={Account}
                />
                <Route      
                    exact 
                    path={"/boost"} 
                    component={Boost}
                />
                <Route      
                    exact 
                    path={"/charts"} 
                    component={Charts}
                />
                <Route      
                    exact 
                    path={"/feature"} 
                    component={Feature}
                />
                <Route      
                    exact 
                    path={"/helper"} 
                    component={Helper}
                />
                <Route      
                    exact 
                    path={"/properties"} 
                    component={Properties}
                />
                <Route      
                    exact 
                    path={"/single-prop-:id"} 
                    component={SingleProperty }
                />
                <Route      
                    exact 
                    path={"/single-user-:id"} 
                    component={(route) => <SingleUser
                                             modelHanlder={this.props.modelHanlder} 
                                             match={route.match} />}
                />
                <Route      
                    exact 
                    path={"/single-vendor-:id"} 
                    component={(route)=> <SingleVendor 
							match={route.match}
                            modelHanlder={this.props.modelHanlder} />}
                />
                <Route      
                    exact 
                    path={"/user"} 
                    component={User}
                />
                <Route      
                    exact 
                    path={"/Vendors"} 
                    component={()=> <Vendors modelHanlder={this.props.modelHanlder} />}
                />

        </Router>
        )
    }
}
export default withRouter(routes);
