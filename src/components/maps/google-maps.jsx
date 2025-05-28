import { GoogleApiWrapper, InfoWindow, Map, Marker, Polygon, Polyline } from 'google-maps-react-18-support';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Card, Tag } from 'antd';
import { GmapWraper } from './map-style';


const apiKey = 'AIzaSyBxh0Pe8bW0wSPKCyJZ1Y0KjsCjCMBFWJ4';

export const estadoColors = {
  Confirmado: '#108ee9',
  Iniciada: '#faad14',
  Terminada: '#52c41a',
  custodia: '#13c2c2',
  Control: '#722ed1',
  'En Proceso': '#f5222d',
  Empacadora: '#1890ff',
};

// Hardcoded descriptions based on sm_state
export const estadoDescriptions = {
  Confirmado: 'Confirmado por coordinación de cosechas.',
  Iniciada: 'Cosecha iniciada desde la Mini App.',
  Terminada: 'Cosecha finalizada completamente.',
  custodia: 'Lote en traslado dentro del terminal del tratador.',
  Control: 'Temperaturas registradas en la empacadora.',
  'En Proceso': 'En línea de producción: peso y clasificación completados.',
  Empacadora: 'Ubicación de la empacadora',
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
    custodyControls = [], // New prop for sm_custodycontrol data
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
        : custodyControls.length > 0 && custodyControls[0].sm_dinamiccoordinates?.locations?.length > 0
          ? parseFloat(custodyControls[0].sm_dinamiccoordinates.locations[0].latitud)
          : parseFloat(latitude) || fallbackLat,
    lng: markers.length > 0
      ? parseFloat(markers[0].position.lng)
      : polygons.length > 0
        ? parseFloat(polygons[0].centroid.lng)
        : custodyControls.length > 0 && custodyControls[0].sm_dinamiccoordinates?.locations?.length > 0
          ? parseFloat(custodyControls[0].sm_dinamiccoordinates.locations[0].longitud)
          : parseFloat(longitude) || fallbackLng,
  };

  const getMarkerIcon = (marker, isEndMarker = false) => {
    if (isEndMarker) {
      return {
        url: new URL('../../static/img/map/destination.png', import.meta.url).href, // Use a distinct icon for end marker
        scaledSize: new google.maps.Size(45, 45),
      };
    }
    if (type === 'geo') {
      if (marker.icon === 'mpc.png') {
        return {
          url: new URL('../../static/img/map/mpc.png', import.meta.url).href,
          scaledSize: new google.maps.Size(45, 32),
        };
      }
      return {
        url: new URL('../../static/img/map/car.png', import.meta.url).href,
        scaledSize: new google.maps.Size(45, 32),
      };
    }
    return {
      url: new URL('../../static/img/map/mpc.png', import.meta.url).href,
      scaledSize: new google.maps.Size(45, 32),
    };
  };

  // Process custodyControls to create paths and end markers
  const custodyPaths = custodyControls
    .filter(control => control.sm_dinamiccoordinates?.locations?.length > 0)
    .map(control => ({
      id: control.uid,
      paths: control.sm_dinamiccoordinates.locations
        .sort((a, b) => a.time - b.time) // Sort by timestamp
        .map(loc => ({
          lat: parseFloat(loc.latitud),
          lng: parseFloat(loc.longitud),
        })),
      color: estadoColors[control.sm_state] || '#000000',
    }));

  const endMarkers = custodyControls
    .filter(control => control.sm_endcoordinates)
    .map(control => ({
      id: `end-${control.uid}`,
      lote: control.C_Campaign_ID?.identifier || 'Unknown',
      descripcion: estadoDescriptions[control.sm_state] || 'Estado desconocido',
      estado: control.sm_state,
      eta: control.SM_EndTime ? new Date(control.SM_EndTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--',
      position: {
        lat: parseFloat(control.sm_endcoordinates.latitude),
        lng: parseFloat(control.sm_endcoordinates.longitude),
      },
      isEndMarker: true,
    }));

  // Combine existing markers with end markers
  const allMarkers = [...markers, ...endMarkers];

  return (
    <GmapWraper width={width} height={height}>
      <Map
        google={google}
        zoom={zoom}
        center={center}
        onClick={onMapClicked}
        styles={mapStyles}
        style={{ ...styles, width, height }}
        mapTypeId={'satellite'} // Enforce satellite view
        onReady={(_, map) => {
          map.setCenter(center);
          map.setMapTypeId(google.maps.MapTypeId.SATELLITE); // Reinforce satellite view on map ready
        }}
      >
        {/* Default marker if no markers, polygons, or custody controls */}
        {markers.length === 0 && polygons.length === 0 && custodyControls.length === 0 && (
          <Marker
            position={center}
            icon={getMarkerIcon({ icon: type === 'geo' ? 'car.png' : 'mpc.png' })}
          />
        )}

        {/* Existing markers with InfoWindow */}
        {allMarkers.map((marker) => (
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
            icon={getMarkerIcon(marker, marker.isEndMarker)}
          />
        ))}

        {/* Render polygons */}
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

        {/* Render centroid markers for polygons */}
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
              className: 'map-label',
            }}
            icon={{
              url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=',
              scaledSize: new google.maps.Size(1, 1),
            }}
          />
        ))}

        {/* Render paths from custody controls */}
        {custodyPaths.map((path) => (
          <Polyline
            key={`path-${path.id}`}
            path={path.paths}
            strokeColor={path.color}
            strokeOpacity={0.8}
            strokeWeight={4}
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
              <p><strong>Tiempo Est. de Llegada:</strong> {state.selectedPlace.eta || '--:-- '}</p>
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
  custodyControls: [], // Default empty array for custodyControls
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
  custodyControls: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      uid: PropTypes.string,
      sm_state: PropTypes.string,
      SM_Fishing_ID: PropTypes.shape({
        identifier: PropTypes.string,
      }),
      SM_EndTime: PropTypes.string,
      sm_endcoordinates: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
      sm_dinamiccoordinates: PropTypes.shape({
        locations: PropTypes.arrayOf(
          PropTypes.shape({
            time: PropTypes.number,
            latitud: PropTypes.number,
            longitud: PropTypes.number,
          })
        ),
      }),
    })
  ),
  styles: PropTypes.object,
};

export { GoogleMaps };