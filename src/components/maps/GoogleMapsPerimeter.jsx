import { GoogleApiWrapper, Map, Marker, Polygon } from 'google-maps-react-18-support';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { GmapWraper } from './map-style';

const apiKey = 'AIzaSyBxh0Pe8bW0wSPKCyJZ1Y0KjsCjCMBFWJ4';

const GoogleMapsPerimeter = GoogleApiWrapper({
  apiKey,
})((props) => {
  const {
    google,
    width = '100%',
    height = '400px',
    zoom = 14,
    center = { lat: -2.18, lng: -79.92 },
    poolPerimeters = {},
    selectedPiscina = null,
    onMapClick,
  } = props;

  const mapInitialized = useRef(false);

  const handleMapClick = (props, map, event) => {
    if (onMapClick && selectedPiscina) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      onMapClick(selectedPiscina, lat, lng);
    }
  };

  // Calculate initial center based on all perimeter points if available
  const getInitialCenter = () => {
    const allPoints = Object.values(poolPerimeters).flat();
    if (allPoints.length > 0) {
      return {
        lat: parseFloat(allPoints[0].lat),
        lng: parseFloat(allPoints[0].lng),
      };
    }
    return center;
  };

  return (
    <GmapWraper width={width} height={height}>
      <Map
        google={google}
        zoom={zoom}
        initialCenter={getInitialCenter()}
        onClick={handleMapClick}
        style={{ width, height }}
        onReady={(_, map) => {
          if (!mapInitialized.current) {
            map.setCenter(getInitialCenter());
            mapInitialized.current = true;
          }
        }}
      >
        {Object.entries(poolPerimeters).map(([piscinaId, perimeter]) => (
          perimeter.length > 0 && (
            <Polygon
              key={`polygon-${piscinaId}`}
              paths={perimeter.map(coord => ({ lat: parseFloat(coord.lat), lng: parseFloat(coord.lng) }))}
              strokeColor={piscinaId === selectedPiscina ? "#FF0000" : "#0000FF"}
              strokeOpacity={0.8}
              strokeWeight={2}
              fillColor={piscinaId === selectedPiscina ? "#FF0000" : "#0000FF"}
              fillOpacity={0.35}
            />
          )
        ))}

        {Object.entries(poolPerimeters).map(([piscinaId, perimeter]) =>
          perimeter.map((coord, index) => (
            <Marker
              key={`marker-${piscinaId}-${index}`}
              position={{ lat: parseFloat(coord.lat), lng: parseFloat(coord.lng) }}
              icon={{
                url: piscinaId === selectedPiscina
                  ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                  : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                scaledSize: new google.maps.Size(20, 20),
              }}
            />
          ))
        )}
      </Map>
    </GmapWraper>
  );
});

GoogleMapsPerimeter.defaultProps = {
  width: '100%',
  height: '400px',
  zoom: 10,
  center: { lat: -2.18, lng: -79.92 },
  poolPerimeters: {},
  selectedPiscina: null,
};

GoogleMapsPerimeter.propTypes = {
  google: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  poolPerimeters: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      })
    )
  ),
  selectedPiscina: PropTypes.string,
  onMapClick: PropTypes.func,
};

export { GoogleMapsPerimeter };