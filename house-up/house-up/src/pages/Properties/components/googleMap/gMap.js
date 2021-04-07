import React, { Component } from 'react';
import ClusterMaker from './marker';

class MarkerInfoWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			places: [],
		};
	}


	static getDerivedStateFromProps(props, state) {

		const { p } = props;
		if (p.length > 0) {
			p.forEach((result) => {
				result.show = false; // eslint-disable-line no-param-reassign
			});
		}

		let stateChanged = false;
		let changedState = {};

		if (
			p &&
			JSON.stringify(state.places) !== JSON.stringify(p)
		) {
			changedState.places = p;
			stateChanged = true;
		}

		if (stateChanged) {
			return changedState;
		}
		return null;
	}

	// onChildClick callback can take two arguments: key and childProps
	onChildClickCallback = (key, childProps) => {
		if(childProps && childProps.place && childProps.place.propertId){
			this.setState((state) => {
				const index = state.places.findIndex(
					(e) => parseInt(e.propertId) === parseInt(childProps.place.propertId)
				);
				state.places[index].show = true; // !state.places[index].show
				return { places: state.places };
			});
		
		}
	};

	render() {
		const { places } = this.state;
		return (
			<ClusterMaker 
				places={places}
				onChildClickCallback={this.onChildClickCallback}
			/>
		);
	}
}

export default MarkerInfoWindow;
