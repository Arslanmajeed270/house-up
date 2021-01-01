import React, { Component } from 'react';
import ClusterMaker from './marker';

//
// import LOS_ANGELES_CENTER from '../const/la_center';
class MarkerInfoWindow extends Component {
	constructor(props) {
		super(props);

		this.state = {
			places: [],
		};
	}

	// componentDidMount() {
	// }

	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		const { p } = nextProps;
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
		this.setState((state) => {
			const index = state.places.findIndex(
				(e) => parseInt(e.propertId) === parseInt(childProps.place.propertId)
			);
			state.places[index].show = true; // !state.places[index].show
			return { places: state.places };
		});
	};

	render() {
		const { places } = this.state;
		console.log("checking places: ", places);

		return (
			<>
			<ClusterMaker 
			places={places}
			onChildClickCallback={this.onChildClickCallback}
			/>
				{/* {places.length > 0 && (
					<GoogleMap
						defaultZoom={10}
						defaultCenter={[43.7184038, -79.518144]}
						bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
						onChildClick={this.onChildClickCallback}
					>
						{places.map((p) => (
							<Marker
								key={p.id}
								lat={p.latitude}
								lng={p.longitude}
								show={p.show}
								place={p}
							/>
						))}
					</GoogleMap>
				)} */}
			</>
		);
	}
}

export default MarkerInfoWindow;
