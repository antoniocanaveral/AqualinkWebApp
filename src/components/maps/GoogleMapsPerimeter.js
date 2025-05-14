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
    perimeter = [],
    onMapClick,
  } = props;

  const mapInitialized = useRef(false);

  const handleMapClick = (props, map, event) => {
    if (onMapClick) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      onMapClick(lat, lng);
    }
  };

  // Calculate initial center based on perimeter points if available
  const getInitialCenter = () => {
    if (perimeter.length > 0) {
      // Use the first point as the initial center
      return {
        lat: parseFloat(perimeter[0].lat),
        lng: parseFloat(perimeter[0].lng),
      };
      // Alternatively, calculate the average center (uncomment if preferred):
      /*
      const avg = perimeter.reduce(
        (acc, coord) => ({
          lat: acc.lat + parseFloat(coord.lat),
          lng: acc.lng + parseFloat(coord.lng),
        }),
        { lat: 0, lng: 0 }
      );
      return {
        lat: avg.lat / perimeter.length,
        lng: avg.lng / perimeter.length,
      };
      */
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
        {perimeter.length > 0 && (
          <Polygon
            paths={perimeter.map(coord => ({ lat: parseFloat(coord.lat), lng: parseFloat(coord.lng) }))}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
          />
        )}

        {perimeter.map((coord, index) => (
          <Marker
            key={`perimeter-${index}`}
            position={{ lat: parseFloat(coord.lat), lng: parseFloat(coord.lng) }}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
              scaledSize: new google.maps.Size(20, 20),
            }}
          />
        ))}
      </Map>
    </GmapWraper>
  );
});

GoogleMapsPerimeter.defaultProps = {
  width: '100%',
  height: '400px',
  zoom: 10,
  center: { lat: -2.18, lng: -79.92 },
  perimeter: [],
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
  perimeter: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })
  ),
  onMapClick: PropTypes.func,
};

export { GoogleMapsPerimeter };