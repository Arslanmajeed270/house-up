import React from 'react';
import { Route } from 'react-router-dom';

import About from './About/about';
import AddProperty from './Properties/addProperty';
import SingleVendor from './User/singleVendor';
import Comments from './Comments/comments';
import Contact from './Contact/contact';
import Home from './Home/home';
import Privacy from './Privacy/privacy';
import Properties from './Properties/properties';
import SinglePost from './Properties/singlePost';
import SingleProp from './Properties/singleProp';
import Professionals from './User/vendors';
import ComingSoon from './CommingSoom/comingSoon';
import Index from './Index/index';
import AddProduct from './wizards/addProduct';
import AddCoupon from './wizards/addCoupon';
import SelectLocation from './selectLocation/selectLocation';

class Routes extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path={'/'}
					component={() => <Home history={this.props.history}  modelHanlder={this.props.modelHanlder} />}
				/>
				<Route
					exact
					path={'/index-:country&:state&:city'}
					component={(route) => (
						<Index
							match={route.match}
							history={this.props.history}
							modelHanlder={this.props.modelHanlder}
						/>
					)}
				/>
				<Route
					exact
					path={'/home'}
					component={() => <Home history={this.props.history} modelHanlder={this.props.modelHanlder} />}
				/>
				<Route exact path={'/about'} component={About} />
				<Route
					exact
					path={'/add-property'}
					component={() => (
						<AddProperty
							modelHanlder={this.props.modelHanlder}
							history={this.props.history}
							closeCodelHanlder={this.props.closeCodelHanlder}
						/>
					)}
				/>
				<Route exact path={'/add-product'} component={AddProduct} />
				<Route exact path={'/add-coupon'} component={AddCoupon} />
				<Route
					exact
					path={'/single-vendor-:id'}
					component={(route) => (
						<SingleVendor
							match={route.match}
							modelHanlder={this.props.modelHanlder}
						/>
					)}
				/>
				{/* <Route exact path={'/blogs'} component={Blogs} /> */}
				<Route exact path={'/about'} component={About} />
				<Route exact path={'/comming-soon'} component={ComingSoon} />
				<Route
					exact
					path={'/comments-:id&:category&:indexValue&:city&:state&:country&:commentedOnUserId'}
					component={(routes) => (
						<Comments
							match={routes.match}
							modelHanlder={this.props.modelHanlder}
						/>
					)}
				/>
				<Route exact path={'/contact'} component={Contact} />
				<Route exact path={'/privacy'} component={Privacy} />
				<Route exact path={'/select-location'} component={SelectLocation} />
				<Route exact path={'/properties'} component={Properties} />
				<Route exact path={'/single-post'} component={SinglePost} />
				<Route
					exact
					path={'/single-prop-:id'}
					component={(props) => (
						<SingleProp
							history={props.history}
							match={props.match}
							modelHanlder={this.props.modelHanlder}
						/>
					)}
				/>
				<Route exact path={'/professionals'} component={Professionals} />
			</React.Fragment>
		);
	}
}

export default Routes;
