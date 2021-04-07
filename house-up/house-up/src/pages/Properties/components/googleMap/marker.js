
import "../../App.css";
import React, { useState, useRef, useEffect } from "react";
import useSupercluster from "use-supercluster";
import { Link } from 'react-router-dom';

import GoogleMap from './GoogleMap';
import PropTypes from 'prop-types';

// InfoWindow component
const InfoWindow = (props) => {
  const { place } = props;
  
	const infoWindowStyle = {
		position: 'relative',
		bottom: 107,
		left: '-45px',
		width: 270,
		backgroundColor: 'white',
		boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
		padding: '0px 5px 0px 0px',
		fontSize: 14,
		zIndex: 100,
		height: 72,
		borderRadius: 5,
	};

  const bgImg = place.imageList[0] && place.imageList[0].imageURL;
  
	return (
		<div style={infoWindowStyle}>
			<Link to={`/single-prop-${place && place.propertId}`}>
				<div style={{ fontSize: 12 }}>
					<div
						className='pxp-marker-details-fig'
						style={{
							backgroundImage: 'url(' + bgImg + ')',
							backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
						}}
					></div>
					<div className='pxp-marker-details-info'>
						<div className='pxp-marker-details-info-title'>{place.adTitle}</div>
						<div className='pxp-marker-details-info-price'>
							{Math.abs(place.price) > 999
								? Math.sign(place.price) *
										(Math.abs(place.price) / 1000).toFixed(1) +
								  'k'
								: Math.sign(place.price) * Math.abs(place.price)}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

const Marker = ({ children }) => children;

// Marker component
export const Marker2 = ({ show, place }) => {
  const markerStyle = {
    color: '#333',
    border: '2px solid #333',
    backgroundColor: '#fff',
    padding: '6px 10px',
    fontWeight: 'bold',
    borderRadius: '.3rem',
    boxShadow: ' 0 3px 10px 0 rgba(0, 0, 0, 0.20)',
    fontSize: '12px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    width: '60px',
    textAlign: 'center',
  };
  
	return (
		<>
			<div style={markerStyle}>
				<span className='pxp-marker-short-price'>
					{Math.abs(place.price) > 999
						? Math.sign(place.price) *
								(Math.abs(place.price) / 1000).toFixed(1) +
						  'k'
						: Math.sign(place.price) * Math.abs(place.price)}
				</span>
			</div>

			{show && <InfoWindow place={place} />}
		</>
	);
};

export default function App(props) {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if( props.places && JSON.stringify(places) !== JSON.stringify(props.places) ){
      setPlaces(props.places);
    }
 }, [places, props.places]);

  const points = places.map(data => ({
    type: "Feature",
    properties: { cluster: false, placeId: data.id, category: data.category, show: data.show, place: data},
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(data.longitude),
        parseFloat(data.latitude)
      ]
    }
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 }
  });
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat:43.7184038, lng: -79.518144 }}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        onChildClick={props.onChildClickCallback}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker2
            key={cluster.properties.placeId}
            lat={latitude}
            lng={longitude}
            show={cluster.properties.show}
            place={cluster.properties.place}
          />
          );
        })}
      </GoogleMap>
    </div>
  );
}

InfoWindow.propTypes = {
	place: PropTypes.shape({
		name: PropTypes.string,
		formatted_address: PropTypes.string,
		rating: PropTypes.number,
		types: PropTypes.arrayOf(PropTypes.string),
		price_level: PropTypes.number,
		opening_hours: PropTypes.shape({
			open_now: PropTypes.bool,
		}),
	}).isRequired,
};

Marker.propTypes = {
	show: PropTypes.bool.isRequired,
	place: PropTypes.shape({
		name: PropTypes.string,
		formatted_address: PropTypes.string,
		rating: PropTypes.number,
		types: PropTypes.arrayOf(PropTypes.string),
		price_level: PropTypes.number,
		opening_hours: PropTypes.shape({
			open_now: PropTypes.bool,
		}),
	}).isRequired,
};