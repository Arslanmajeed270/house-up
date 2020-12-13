import React, { Component } from 'react';
import PropTypes from 'prop-types';

// examples:
import GoogleMap from './GoogleMap';
import { Link } from 'react-router-dom';

//
// import LOS_ANGELES_CENTER from '../const/la_center';

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
    padding: '0px 5px' ,
    fontSize: 14,
    zIndex: 100,
    height: 72,
    borderRadius:5
  };

  const bgImg = place.imageList[0] && place.imageList[0].imageURL;
  return (
    <div style={infoWindowStyle}>
      <Link to={`/single-prop-${place && place.propertId}`}>
        <div style={{ fontSize: 12 }}>
          <div className="pxp-marker-details-fig" style={{backgroundImage:'url('+bgImg+')', backgroundPosition:'center',backgroundSize:'contain'}}>
          </div>
          <div className="pxp-marker-details-info">
            <div className="pxp-marker-details-info-title">{place.adTitle}
            </div> 
            <div className="pxp-marker-details-info-price">{Math.abs(place.price) > 999 ? Math.sign(place.price)*((Math.abs(place.price)/1000).toFixed(1)) + 'k' : Math.sign(place.price)*Math.abs(place.price)}
            </div> 
          </div>
        </div>
      </Link>
    </div>
  );
};

// Marker component
const Marker = ({ show, place }) => {
  const markerStyle = {
    color: '#333',
    border: '2px solid #333',
    backgroundColor: '#fff',
    padding: '6px 10px',
    fontWeight: 'bold',
    borderRadius: '.3rem',
    boxShadow:' 0 3px 10px 0 rgba(0, 0, 0, 0.20)',
    fontSize: '12px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    width: '60px',
    textAlign: 'center'
  };

  return (
    <>
      <div style={markerStyle}>
        <span className="pxp-marker-short-price">{Math.abs(place.price) > 999 ? Math.sign(place.price)*((Math.abs(place.price)/1000).toFixed(1)) + 'k' : Math.sign(place.price)*Math.abs(place.price)}
        </span> 
      </div>
      
      {show && <InfoWindow place={place} />}
    </>
  );
};

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
    const {p} = nextProps;
      if(p.length > 0) {
        p.forEach((result) => {
              result.show = false; // eslint-disable-line no-param-reassign
        });
        if(this.state.places.length === 0) {
          this.setState({places:p});
        }
      }
  }

  // onChildClick callback can take two arguments: key and childProps
  onChildClickCallback = (key,childProps) => {
    this.setState((state) => {
      const index = state.places.findIndex((e) => parseInt(e.propertId) === parseInt(childProps.place.propertId));
      state.places[index].show = true // !state.places[index].show
      return { places: state.places };
    });
  };

  render() {
    const { places } = this.state;

    return (
      <>
      {places.length > 0 && 
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
        }
      </>
    );
  }
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

export default MarkerInfoWindow;