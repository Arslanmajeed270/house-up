import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';
import PrivateRoute from './components/common/PrivateRoute';
import Index from './pages';
class App extends Component {
	constructor(props) {
		super(props);
		this.showPosition = this.showPosition.bind(this);
	}

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.showPosition);
		} else {
			this.props.onSetCurrentLocation(0, 0);
		}
	}
	setCurrentLocation(lat, lon) {
		this.props.onSetCurrentLocation(lat, lon);
	}
	showPosition(position) {
		console.log('i am here');
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		console.log('checking latitude: ', latitude);
		console.log('checking latitude: ', longitude);
		this.setCurrentLocation(latitude, longitude);
	}

	render() {
		if (localStorage.jwtToken) {
			this.props.setCurrentUser(JSON.parse(localStorage.jwtToken));
		}

		return (
			<React.Fragment>
				<PrivateRoute
					exact
					path={'/index-:country&:state&:city'}
					component={Index}
				/>
				<Route exact path={'/'} component={Index} />
				<Route exact path={'/home'} component={Index} />
				<Route exact path={'/about'} component={Index} />
				<PrivateRoute exact path={'/add-property'} component={Index} />
				<Route exact path={'/add-coupon'} component={Index} />
				<Route exact path={'/single-vendor-:id'} component={Index} />
				<Route exact path={'/blogs'} component={Index} />
				<Route exact path={'/comming-soon'} component={Index} />
				<Route
					exact
					path={'/comments-:id&:category&:indexValue'}
					component={Index}
				/>
				<Route exact path={'/select-location'} component={Index} />
				<Route exact path={'/contact'} component={Index} />
				<Route exact path={'/privacy'} component={Index} />
				<Route exact path={'/properties'} component={Index} />
				<Route exact path={'/single-post'} component={Index} />
				<Route exact path={'/single-property'} component={Index} />
				<Route exact path={'/professionals'} component={Index} />
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
		onSetCurrentLocation: (latitude, longitude) =>
			dispatch(actions.setCurrentLocation(latitude, longitude)),
	};
};

export default withRouter(connect(null, mapDispatchToProps)(App));
