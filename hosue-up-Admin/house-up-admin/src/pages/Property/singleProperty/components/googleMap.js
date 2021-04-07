import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
//   const googleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  const googleMapKey ="AIzaSyBsMI0nKgBIvsVG0P9-zWZ_88JLuD_OTTQ";
  console.log('checking googleMapKey: ', googleMapKey);
  const { center, zoom, latitude, longitude } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '411px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapKey }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
             <Marker
                text={"My Marker"}
                lat={latitude}
                lng={longitude}
              />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;