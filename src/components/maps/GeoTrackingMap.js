import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card, Tag } from 'antd';
import { GmapWraper } from './map-style'; // Assuming this is in the same folder

const containerStyle = {
  width: '100%',
  height: '100%',
};

const apiKey = 'AIzaSyBxh0Pe8bW0wSPKCyJZ1Y0KjsCjCMBFWJ4';

const estadoColors = {
  Confirmado: '#108ee9',
  Iniciada: '#faad14',
  Terminada: '#52c41a',
  Custodia: '#13c2c2',
  Control: '#722ed1',
  'En Proceso': '#f5222d',
};

const GeoTrackingMap = ({
  latitude,
  longitude,
  width,
  height,
  zoom,
  markers,
  styles,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  const [state, setState] = useState({
    showingInfoWindow: false,
    selectedPlace: null,
  });

  const onMarkerClick = (markerData) => {
    setState({
      showingInfoWindow: true,
      selectedPlace: markerData,
    });
  };

  const onMapClick = () => {
    if (state.showingInfoWindow) {
      setState({
        showingInfoWindow: false,
        selectedPlace: null,
      });
    }
  };

  if (!isLoaded) {
    return <div>Cargando mapa...</div>;
  }

  console.log('Markers:', markers); // Verify data

  return (
    <GmapWraper width={width} height={height}>
      <GoogleMap
        mapContainerStyle={{ ...containerStyle, ...styles, width, height }}
        center={{
          lat: parseFloat(markers[0]?.position.lat || latitude),
          lng: parseFloat(markers[0]?.position.lng || longitude),
        }}
        zoom={zoom}
        onClick={onMapClick}
      >
        {/* Marcadores */}
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{
              lat: parseFloat(marker.position.lat),
              lng: parseFloat(marker.position.lng),
            }}
            onClick={() => onMarkerClick(marker)}
            icon={require("../../static/img/org/XSSA2.png")}
            name={marker.lote}
          />
        ))}

        {/* InfoWindow */}
        {state.showingInfoWindow && state.selectedPlace && (
          <InfoWindow
            position={{
              lat: parseFloat(state.selectedPlace.position.lat),
              lng: parseFloat(state.selectedPlace.position.lng),
            }}
            onCloseClick={() =>
              setState({ showingInfoWindow: false, selectedPlace: null })
            }
          >
            <Card
              title={state.selectedPlace.lote}
              size="small"
              style={{ width: 250 }}
              bordered={false}
            >
              <p>
                <strong>Descripción:</strong> {state.selectedPlace.descripcion}
              </p>
              <p>
                <strong>Estado:</strong>{' '}
                <Tag color={estadoColors[state.selectedPlace.estado]}>
                  {state.selectedPlace.estado}
                </Tag>
              </p>
            </Card>
          </InfoWindow>
        )}
      </GoogleMap>
    </GmapWraper>
  );
};

GeoTrackingMap.defaultProps = {
  latitude: -2.18,
  longitude: -79.92,
  width: '100%',
  height: '400px',
  zoom: 14,
  markers: [],
  styles: {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
};

GeoTrackingMap.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      lote: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
      estado: PropTypes.oneOf(Object.keys(estadoColors)).isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
    })
  ),
  styles: PropTypes.object,
};

export { GeoTrackingMap };