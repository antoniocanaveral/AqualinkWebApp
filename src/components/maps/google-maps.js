// GoogleMaps.jsx
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polygon } from 'google-maps-react-18-support';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import { GmapWraper } from './map-style';

const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;

const GoogleMapsComponent = ({ 
  google, 
  width = '100%', 
  height = '100%', 
  zoom = 13, 
  mapStyles, 
  polygons, // Nueva prop para polígonos
  markers,  // Nueva prop para marcadores
  styles, 
  infoWindow 
}) => {
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  });

  const mapRef = useRef(null);

  // Actualizar el centro del mapa cuando cambien los polígonos o marcadores
  useEffect(() => {
    if (mapRef.current) {
      const bounds = new google.maps.LatLngBounds();

      // Extender los bounds con los polígonos
      if (polygons && polygons.length > 0) {
        polygons.forEach(polygon => {
          polygon.paths.forEach(point => {
            bounds.extend(new google.maps.LatLng(point.lat, point.lng));
          });
        });
      }

      // Extender los bounds con los marcadores
      if (markers && markers.length > 0) {
        markers.forEach(marker => {
          bounds.extend(new google.maps.LatLng(marker.position.lat, marker.position.lng));
        });
      }

      // Ajustar el mapa para que muestre todos los bounds
      mapRef.current.map.fitBounds(bounds);
    }
  }, [google, polygons, markers]);

  const onMarkerClick = (props, marker, e) =>
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  const onPolygonClick = (poly) => {
    setState({
      selectedPlace: { name: poly.name, poolType: poly.type },
      activeMarker: null,
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
        ref={mapRef}
        onClick={onMapClicked}
        styles={mapStyles}
        google={google}
        style={{ ...styles, width, height }}
        // Eliminamos 'center' para evitar conflictos con fitBounds
        // center={{ lat: -2.19616, lng: -79.88621 }}
        zoom={zoom}
        height="400px"
      >
        {/* Renderizado de Polígonos */}
        {polygons && polygons.length > 0 && polygons.map((poly) => (
          <Polygon
            key={poly.id}
            paths={poly.paths}
            strokeColor={poly.color}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={'#00000'}
            fillOpacity={0.05}
            onClick={() => onPolygonClick(poly)}
          />
        ))}

        {/* Renderizado de Etiquetas de Polígonos */}
        {polygons && polygons.length > 0 && polygons.map((poly) => (
          <Marker
            key={`${poly.id}-label`}
            position={poly.centroid}
            label={poly.name}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 0, // Icono invisible
            }}
            clickable={false}
          />
        ))}

        {/* Renderizado de Marcadores de Organizaciones */}
        {markers && markers.length > 0 && markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            name={marker.name}
            email={marker.email}
            onClick={onMarkerClick}
            // Opcional: Personaliza el icono del marcador si lo deseas
            // icon={{
            //   url: 'url_de_tu_icono', // URL de la imagen del icono
            //   scaledSize: new google.maps.Size(30, 30), // Tamaño del icono
            // }}
          />
        ))}

        {/* InfoWindow para Polígonos y Marcadores */}
        <InfoWindow onClose={onInfoWindowClose} marker={state.activeMarker} visible={state.showingInfoWindow}>
          {state.selectedPlace.name ? (
            <div>
              <h1>{state.selectedPlace.name}</h1>
              {state.selectedPlace.poolType && <p>Tipo: {state.selectedPlace.poolType}</p>}
              {state.selectedPlace.email && <p>Email: {state.selectedPlace.email}</p>}
            </div>
          ) : (
            infoWindow
          )}
        </InfoWindow>
      </Map>
    </GmapWraper>
  );
};

const GoogleMaps = GoogleApiWrapper({
  apiKey,
})(GoogleMapsComponent);

GoogleMaps.defaultProps = {
  width: '100%',
  height: '100%',
  zoom: 13,
  infoWindow: (
    <div>
      <h1>Información</h1>
      <p>Selecciona una piscina o marcador para ver detalles.</p>
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
  google: PropTypes.object.isRequired, // 'object' ya que GoogleApiWrapper proporciona el objeto
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  mapStyles: PropTypes.array,
  polygons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    paths: PropTypes.arrayOf(PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })).isRequired,
    color: PropTypes.string,
    centroid: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  })),
  markers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
  })),
  infoWindow: PropTypes.node,
  styles: PropTypes.object,
};

export { GoogleMaps };
