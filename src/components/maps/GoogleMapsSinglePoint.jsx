import { GoogleApiWrapper, Map, Marker } from 'google-maps-react-18-support';
import PropTypes from 'prop-types';
import { GmapWraper } from './map-style';

const apiKey = 'AIzaSyBxh0Pe8bW0wSPKCyJZ1Y0KjsCjCMBFWJ4';

const GoogleMapsSinglePoint = GoogleApiWrapper({
  apiKey,
})((props) => {
  const {
    google,
    width = '100%',
    height = '300px',
    zoom = 14,
    center = { lat: -2.18, lng: -79.92 },
    selectedPoint = null,
    onPointSelect,
  } = props;

  const handleMapClick = (props, map, event) => {
    if (onPointSelect) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      onPointSelect({ lat, lng });
    }
  };

  return (
    <GmapWraper width={width} height={height}>
      <Map
        google={google}
        zoom={zoom}
        initialCenter={center}
        style={{ width, height }}
        onClick={handleMapClick}
        mapTypeId={'satellite'}
        onReady={(_, map) => {
          map.setCenter(center);
          map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

        }}
      >
        {selectedPoint && (
          <Marker
            position={{ lat: parseFloat(selectedPoint.lat), lng: parseFloat(selectedPoint.lng) }}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              scaledSize: new google.maps.Size(20, 20),
            }}
          />
        )}
      </Map>
    </GmapWraper>
  );
});

GoogleMapsSinglePoint.defaultProps = {
  width: '100%',
  height: '300px',
  zoom: 14,
  center: { lat: -2.18, lng: -79.92 },
  selectedPoint: null,
};

GoogleMapsSinglePoint.propTypes = {
  google: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  selectedPoint: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  onPointSelect: PropTypes.func,
};

export { GoogleMapsSinglePoint };