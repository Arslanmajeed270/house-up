import React, { Component } from 'react';
import ClusterMaker from './marker';

class MarkerInfoWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			places: [],
		};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		const { p } = nextProps;
		console.log('checking into UNSAFE_componentWillReceiveProps: ');
		if (p.length > 0) {
			p.forEach((result) => {
				result.show = false; // eslint-disable-line no-param-reassign
			});
			if (this.state.places.length === 0) {
				this.setState({ places: p });
			}
		}
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
		console.log('checking places: ', places);

		return (
			<>
			<ClusterMaker 
			places={places}
			onChildClickCallback={this.onChildClickCallback}
			/>
			</>
		);
	}
}

export default MarkerInfoWindow;