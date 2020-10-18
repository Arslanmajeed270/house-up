import React from 'react';
import {BrowserRouter as Router , Route,  withRouter} from 'react-router-dom';


import About from './Main/about';
import AddNewProp from './Properties/addNewProp';
import SingleVendor from './User/singleVendor';
import Blogs from './Main/blogs';
import Comments from './Main/comments';
import Contact from './Main/contact';
import Home from './Main/home';
import Privacy from './Main/privacy';
import Properties from './Properties/properties';
import SinglePost from './Properties/singlePost';
import SingleProp from './Properties/singleProp';
import Vendors from './User/vendors';
import ComingSoon from './Main/comingSoon';
import Index from '../components/Home';


class Routes extends React.Component {

	render(){
		// console.log("checking props in routes.js:  ", this.props);
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
					path={"/about"} 
					component={About}
				/>
				<Route      
					exact 
					path={"/add-new-prop"} 
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
					path={"/home"} 
					component={Home}
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
					path={"/single-prop"} 
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