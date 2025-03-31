import { GoogleApiWrapper, InfoWindow, Map, Marker, Polygon } from 'google-maps-react-18-support';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { GmapWraper } from './map-style';

const apiKey = "AIzaSyBxh0Pe8bW0wSPKCyJZ1Y0KjsCjCMBFWJ4"
console.log(apiKey)
const GoogleMaps = GoogleApiWrapper({
  apiKey,
})((property) => {

  const {
    latitude,
    longitude,
    google,
    width = '100%',
    height = '100%',
    zoom,
    mapStyles,
    markers = [],
    polygons = [],
    styles,
    infoWindow,
  } = property;
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: {}, // Nunca undefined
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
        style={{ ...styles, width, height }}
        center={{ lat: parseFloat(markers[0]?.position.lat), lng: parseFloat(markers[0]?.position.lng) }}
        zoom={zoom}
      >
        {/* Renderizar marcadores */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            onClick={onMarkerClick}
            position={marker?.position}
            name={marker.name}
            email={marker.email}
            icon={require(`../../static/img/map/mpc.png`)}
          />

        ))}
        {/* Renderizar polígonos */}
        {polygons.map((polygon) => (
          <Polygon
            key={polygon.id}
            paths={polygon.paths}
            options={{
              fillColor: polygon.color,
              strokeColor: polygon.color,
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillOpacity: 0.35,
            }}
          />
        ))}
        {polygons.map((polygon) => (
          <Marker
            key={`${polygon.id}-label`}
            position={polygon.centroid}
            label={{
              text: polygon.label,
              color: 'black',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 0.01, // hace invisible el ícono
              fillOpacity: 0,
              strokeOpacity: 0,
              anchor: new google.maps.Point(0, 0),
            }}
          />
        ))}

        {/* InfoWindow */}
        <InfoWindow
          onClose={onInfoWindowClose}
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
        >
          {state.selectedPlace && state.selectedPlace.name ? (
            <div>
              <h3>{state.selectedPlace.name}</h3>
              {state.selectedPlace.email && <p>{state.selectedPlace.email}</p>}
            </div>
          ) : null}
        </InfoWindow>



      </Map>
    </GmapWraper>
  );
});

GoogleMaps.defaultProps = {
  latitude: '-2.19616',
  longitude: '-79.88621',
  width: '100%',
  height: '100%',
  zoom: 13,
  markers: [],
  polygons: [],
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
  google: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  markers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  })),
  polygons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    paths: PropTypes.arrayOf(PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })).isRequired,
    color: PropTypes.string.isRequired,
  })),
  infoWindow: PropTypes.node,
};

export { GoogleMaps };