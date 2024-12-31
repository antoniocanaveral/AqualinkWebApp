import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react-18-support';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { GmapWraper } from './map-style';

const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;

const GoogleMaps = GoogleApiWrapper({
  apiKey,
})((property) => {
  const {
    latitude,
    longitude,
    google,
    width = '100%', // Valor predeterminado
    height = '100%', // Cambiado de '305px' a '100%'
    zoom,
    mapStyles,
    place,
    styles,
    infoWindow,
  } = property;

  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const onMarkerClick = (props, marker) => {
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  const onMapClicked = () => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  const onInfoWindowClose = () => {
    setState({
      showingInfoWindow: false,
    });
  };

  return (
    <GmapWraper width={width} height={height}>
      <Map
        onClick={onMapClicked}
        styles={mapStyles}
        google={google}
        style={{ ...styles, width, height }} // Asegúrate de que width y height sean '100%'
        center={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }} // Convertir a números
        zoom={zoom}
      >
        {place !== undefined ? (
          place.map((item) => (
            <Marker
              key={item.id}
              onClick={onMarkerClick}
              position={{ lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) }} // Convertir a números
              icon={require(`../../static/img/map/mpc.png`)}
            />
          ))
        ) : (
          <Marker
            onClick={onMarkerClick}
            position={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }}
            icon={require(`../../static/img/map/mpc.png`)}
          />
        )}
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          {infoWindow}
        </InfoWindow>
      </Map>
    </GmapWraper>
  );
});

GoogleMaps.defaultProps = {
  latitude: '-2.19616 ',
  longitude: '-79.88621',
  width: '100%',
  height: '100%', // Cambiado de '305px' a '100%'
  zoom: 13,
  infoWindow: (
    <div>
      <h1>Hello world</h1>
    </div>
  ),

  styles: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
};

GoogleMaps.propTypes = {
  latitude: PropTypes.string,
  longitude: PropTypes.string,
  google: PropTypes.object, // Cambiado de 'string' a 'object' ya que GoogleApiWrapper proporciona el objeto
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  place: PropTypes.arrayOf(PropTypes.object),
  infoWindow: PropTypes.node,
};

export { GoogleMaps };
