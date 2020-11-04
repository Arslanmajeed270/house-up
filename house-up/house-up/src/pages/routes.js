import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';

import About from './About/about';
import AddProperty from './Properties/addProperty';
import SingleVendor from './User/singleVendor';
import Blogs from './Blogs/blogs';
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

class Routes extends React.Component {

	render(){
		return (
			<Router>
				
				<Route      
					exact 
					path={"/"} 
					component={Home}
				/>
				<Route      
					exact 
					path={"/index"} 
					component={Index}
				/>
				<Route      
					exact 
					path={"/home"} 
					component={Home}
				/>
				<Route      
					exact 
					path={"/about"} 
					component={About}
				/>
				<Route      
					exact 
					path={"/add-property"} 
					component={AddProperty}
				/>
				<Route      
					exact 
					path={"/add-product"} 
					component={AddProduct}
				/>
				<Route      
					exact 
					path={"/add-coupon"} 
					component={AddCoupon}
				/>
				<Route      
					exact 
					path={"/single-vendor-:id"} 
					component={SingleVendor}
				/>
				<Route      
					exact 
					path={"/blogs"} 
					component={Blogs}
				/>
				<Route      
					exact 
					path={"/about"} 
					component={About}
				/>
				<Route      
					exact 
					path={"/comming-soon"} 
					component={ComingSoon}
				/>
				<Route      
					exact 
					path={"/comments-:id&:category"} 
					component={Comments}
				/>
				<Route      
					exact 
					path={"/contact"} 
					component={Contact}
				/>
				<Route      
					exact 
					path={"/privacy"} 
					component={Privacy}
				/>
				<Route      
					exact 
					path={"/properties"} 
					component={Properties}
				/>
				<Route      
					exact 
					path={"/single-post"} 
					component={SinglePost}
				/>
				<Route      
					exact 
					path={"/single-prop-:id"} 
					component={SingleProp}
				/>
				<Route      
					exact 
					path={"/professionals"} 
					component={Professionals}
				/>
			</Router>
		);
	}
}

export default withRouter(Routes);