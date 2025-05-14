import { GoogleApiWrapper, InfoWindow, Map, Marker, Polygon } from 'google-maps-react-18-support';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card, Tag } from 'antd';
import { GmapWraper } from './map-style';

const apiKey = 'AIzaSyBxh0Pe8bW0wSPKCyJZ1Y0KjsCjCMBFWJ4';

const estadoColors = {
  Confirmado: '#108ee9',
  Iniciada: '#faad14',
  Terminada: '#52c41a',
  Custodia: '#13c2c2',
  Control: '#722ed1',
  'En Proceso': '#f5222d',
  Empacadora: '#1890ff',
};

const GoogleMaps = GoogleApiWrapper({
  apiKey,
})((props) => {
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
    type = 'org',
  } = props;


  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: null,
    selectedPlace: {},
  });

  const onMarkerClick = (markerProps, marker) => {
    setState({
      selectedPlace: markerProps,
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

  const fallbackLat = -2.18;
  const fallbackLng = -79.92;

  const center = {
    lat: markers.length > 0
      ? parseFloat(markers[0].position.lat)
      : polygons.length > 0
      ? parseFloat(polygons[0].centroid.lat)
      : parseFloat(latitude) || fallbackLat,
    lng: markers.length > 0
      ? parseFloat(markers[0].position.lng)
      : polygons.length > 0
      ? parseFloat(polygons[0].centroid.lng)
      : parseFloat(longitude) || fallbackLng,
  };

  const getMarkerIcon = (marker) => {
    if (type === 'geo') {
      if (marker.icon === 'mpc.png') {
        return {
          url: require('../../static/img/map/mpc.png'),
          scaledSize: new google.maps.Size(45, 32),
        };
      }
      return {
        url: require('../../static/img/map/car.png'),
        scaledSize: new google.maps.Size(45, 32),
      };
    }
    return {
      url: require('../../static/img/map/mpc.png'),
      scaledSize: new google.maps.Size(45, 32),
    };
  };

  return (
    <GmapWraper width={width} height={height}>
      <Map
        google={google}
        zoom={zoom}
        center={center}
        onClick={onMapClicked}
        styles={mapStyles}
        style={{ ...styles, width, height }}
        onReady={(_, map) => {
          map.setCenter(center);
        }}
      >
        {/* Marcador por defecto si no hay markers ni polygons */}
        {markers.length === 0 && polygons.length === 0 && (
          <Marker
            position={center}
            icon={getMarkerIcon({ icon: type === 'geo' ? 'car.png' : 'mpc.png' })}
          />
        )}

        {/* Marcadores con InfoWindow */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            onClick={onMarkerClick}
            position={{
              lat: parseFloat(marker.position.lat),
              lng: parseFloat(marker.position.lng),
            }}
            name={marker.lote}
            descripcion={marker.descripcion}
            estado={marker.estado}
            eta={marker.eta}
            icon={getMarkerIcon(marker)}
          />
        ))}

        {/* Renderizar polígonos */}
        {polygons.map((polygon) => (
          <Polygon
            key={polygon.id}
            paths={polygon.paths.map(coord => ({
              lat: parseFloat(coord.lat),
              lng: parseFloat(coord.lng),
            }))}
            strokeColor={polygon.color}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={polygon.color}
            fillOpacity={0.35}
          />
        ))}

        {/* Marcadores con etiquetas en el centroide de cada polígono */}
        {polygons.map((polygon) => (
          <Marker
            key={`centroid-${polygon.id}`}
            position={{
              lat: parseFloat(polygon.centroid.lat),
              lng: parseFloat(polygon.centroid.lng),
            }}
            label={{
              text: polygon.label,
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 'bold',
              // Add a subtle black outline using textStroke (not supported in all browsers, fallback to shadow)
              className: 'map-label',
            }}
            icon={{
              // Transparent icon to avoid default marker pin
              url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=',
              scaledSize: new google.maps.Size(1, 1),
            }}
          />
        ))}

        <InfoWindow
          marker={state.activeMarker}
          visible={state.showingInfoWindow}
          onClose={onInfoWindowClose}
        >
          {state.selectedPlace && state.selectedPlace.name ? (
            <Card
              title=""
              size="small"
              style={{ width: 250 }}
              bordered={false}
            >
              <p><strong>Lote:</strong> {state.selectedPlace.name}</p>
              <p><strong>Descripción:</strong> {state.selectedPlace.descripcion}</p>
              <p><strong>Tiempo Est. de Llegada:</strong> {state.selectedPlace.eta || '9:25 AM'}</p>
              <p>
                <strong>Estado:</strong>{' '}
                <Tag color={estadoColors[state.selectedPlace.estado] || '#000'}>
                  {state.selectedPlace.estado}
                </Tag>
              </p>
            </Card>
          ) : (
            <div>No data available</div>
          )}
        </InfoWindow>
      </Map>
    </GmapWraper>
  );
});

GoogleMaps.defaultProps = {
  latitude: '-2.18',
  longitude: '-79.92',
  width: '100%',
  height: '400px',
  zoom: 14,
  markers: [],
  polygons: [],
  type: 'org',
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
  type: PropTypes.oneOf(['org', 'geo']),
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      lote: PropTypes.string,
      descripcion: PropTypes.string,
      estado: PropTypes.string,
      eta: PropTypes.string,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
      icon: PropTypes.string,
    })
  ),
  polygons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      type: PropTypes.string,
      paths: PropTypes.arrayOf(
        PropTypes.shape({
          lat: PropTypes.number.isRequired,
          lng: PropTypes.number.isRequired,
        })
      ).isRequired,
      label: PropTypes.string,
      color: PropTypes.string,
      centroid: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }),
    })
  ),
  styles: PropTypes.object,
};

export { GoogleMaps };