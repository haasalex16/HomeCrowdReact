import React from 'react';
import PropTypes from 'prop-types';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{}}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
        />
      </Map>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired,
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDKyPxW_3hrYQB0F3UiKAsTvDXHWpc5vU8')
})(MapContainer);

