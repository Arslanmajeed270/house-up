import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';

import About from './About/about';
import AddNewProp from './Properties/addNewProp';
import SingleVendor from './User/singleVendor';
import Blogs from './Blogs/blogs';
import Comments from './Comments/comments';
import Contact from './Contact/contact';
import Home from './Home/home';
import Privacy from './Privacy/privacy';
import Properties from './Properties/properties';
import SinglePost from './Properties/singlePost';
import SingleProp from './Properties/singleProp';
import Vendors from './User/vendors';
import ComingSoon from './CommingSoom/comingSoon';
import Index from './Index';


class Routes extends React.Component {

	render(){
		// console.log("checking props in routes.js:  ", this.props);
		return (
			<Router>
				<Route      
					exact 
					path={"/"} 
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
					component={AddNewProp}
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
					path={"/coming-soon"} 
					component={ComingSoon}
				/>
				<Route      
					exact 
					path={"/comments"} 
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
					path={"/single-property"} 
					component={SingleProp}
				/>
				<Route      
					exact 
					path={"/vendors"} 
					component={Vendors}
				/>
			</Router>
		);
	}
}

export default withRouter(Routes);