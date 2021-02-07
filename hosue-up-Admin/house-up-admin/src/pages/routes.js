import React, { Component } from 'react';
import { Route } from 'react-router-dom';


import Index from './Dashboard';
import Account from './Accounts/account';
import UpgradeAccount from './Accounts/UpgradeAccount';
import PropertyFees from './Accounts/PropertyFees';
import AccountBoost from './Accounts/Boost';
import Boost from './Dashboard/boost';
import Charts from './Dashboard/charts';
import Feature from './Dashboard/feature';
import Helper from './Dashboard/help';
import SingleProperty from './Property/singleProperty';
import Properties from './Property/properties';
import SingleUser from './Users/singleUser/singleUser';
import Users from './Users/users';
import Vendors from './Vendor/vendors';
import SingleVendor from './Vendor/singleVendor/singleVendor';


class routes extends Component {
    render() {
        return (
            <>
                <Route      
                    exact 
                    path={"/"} 
                    component={Index}
                />
                <Route      
                    exact 
                    path={"/account"} 
                    component={Account}
                />
                <Route      
                    exact 
                    path={"/upgrade-account"} 
                    component={UpgradeAccount}
                />
                <Route      
                    exact 
                    path={"/property-fees"} 
                    component={PropertyFees}
                />
                <Route      
                    exact 
                    path={"/account-boost"} 
                    component={AccountBoost}
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
                    component={SingleUser}
                />
                <Route      
                    exact 
                    path={"/single-vendor-:id"} 
                    component={SingleVendor}
                />
                <Route      
                    exact 
                    path={"/users"} 
                    component={Users}
                />
                <Route      
                    exact 
                    path={"/Vendors"} 
                    component={Vendors}
                />

        </>
        )
    }
}
export default routes;
