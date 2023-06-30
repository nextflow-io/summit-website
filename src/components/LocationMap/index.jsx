import classnames from 'classnames';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react';
import icon from '../../images/icons/google-maps-marker.svg';
import PropTypes from '../../utils/PropTypes';
import LocationMapFallback from '../LocationMapFallback';

const propTypes = {
  className: PropTypes.string,
  coordinates: PropTypes.shape({}),
};

const defaultProps = {
  className: null,
  coordinates: {
    lat: 41.4034049,
    lng: 2.1895931,
  },
};

const MapContainer = ({ google, coordinates }) => {
  return (
    <Map
      google={google}
      zoom={13}
      initialCenter={coordinates}
    >
      <Marker
        name="Torre Glòries, Avinguda Diagonal, 211, 08018 Barcelona, Spain"
        position={coordinates}
        icon={{
          url: icon,
        }}
      />
    </Map>
  );
};

const EnhancedMap = GoogleApiWrapper({
    apiKey: process.env.GATSBY_GMAPS_API_KEY,
    LoadingContainer: LocationMapFallback,
})(MapContainer);

const LocationMap = ({ className, coordinates }) => (
  <div className={classnames('relative h-[296px] w-full', className)}>
    <EnhancedMap coordinates={coordinates} />
  </div>
);

LocationMap.propTypes = propTypes;
LocationMap.defaultProps = defaultProps;

export default LocationMap;
