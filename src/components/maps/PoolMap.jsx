import React, { useMemo } from 'react';
import { GoogleApiWrapper, Map, Polygon, Marker } from 'google-maps-react-18-support';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MapWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const apiKey = 'AIzaSyBxh0Pe8bW0wSPKCyJZ1Y0KjsCjCMBFWJ4';

const generatePastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 50%, 85%)`;
};

const createColorMap = (pools = [], warehouses = []) => {
  console.log('Entering createColorMap with pools:', pools, 'warehouses:', warehouses);
  const colorMap = {};

  const allPools = [...pools, ...warehouses].filter(pool => {
    if (!pool || typeof pool.id === 'undefined' || pool.id === null) {
      console.warn('Invalid pool entry:', pool);
      return false;
    }
    return true;
  });

  allPools.forEach(pool => {
    const id = String(pool.id); // Normalize to string
    if (!(id in colorMap)) {
      colorMap[id] = generatePastelColor();
    }
  });

  if (allPools.length !== [...pools, ...warehouses].length) {
    console.warn('Filtered out invalid pools:', [...pools, ...warehouses].filter(pool => !pool || typeof pool.id === 'undefined' || pool.id === null));
  }

  console.log('colorMap created:', colorMap);
  return {
    get: key => colorMap[String(key)],
    has: key => String(key) in colorMap,
    set: (key, value) => (colorMap[String(key)] = value)
  };
};

const calculateCentroid = (paths) => {
  if (!Array.isArray(paths) || paths.length === 0) {
    console.warn('Invalid paths for centroid calculation:', paths);
    return { lat: 0, lng: 0 };
  }
  let latSum = 0;
  let lngSum = 0;
  let validPoints = 0;

  paths.forEach(coord => {
    if (typeof coord.lat === 'number' && typeof coord.lng === 'number') {
      latSum += coord.lat;
      lngSum += coord.lng;
      validPoints++;
    }
  });

  if (validPoints === 0) {
    console.warn('No valid coordinates for centroid calculation:', paths);
    return { lat: 0, lng: 0 };
  }

  return {
    lat: latSum / validPoints,
    lng: lngSum / validPoints,
  };
};

const PoolMap = ({ google, pools, warehouses, width, height, zoom }) => {
  console.log('PoolMap props:', { pools, warehouses });

  const safePools = Array.isArray(pools) ? pools.filter(pool => pool && typeof pool.id !== 'undefined' && pool.id !== null) : [];
  const safeWarehouses = Array.isArray(warehouses) ? warehouses.filter(warehouse => warehouse && typeof warehouse.id !== 'undefined' && warehouse.id !== null) : [];

  console.log('Safe pools:', safePools);
  console.log('Safe warehouses:', safeWarehouses);

  if (pools.length !== safePools.length) {
    console.warn('Invalid pools filtered out:', pools.filter(pool => !pool || typeof pool.id === 'undefined' || pool.id === null));
  }
  if (warehouses.length !== safeWarehouses.length) {
    console.warn('Invalid warehouses filtered out:', warehouses.filter(warehouse => !warehouse || typeof warehouse.id === 'undefined' || warehouse.id === null));
  }

  const parsedPools = safePools.map(pool => {
    if (pool.SM_Geolocation && typeof pool.SM_Geolocation === 'string') {
      try {
        const parsed = JSON.parse(pool.SM_Geolocation);
        if (Array.isArray(parsed) && parsed.every(coord => typeof coord.lat === 'number' && typeof coord.lng === 'number')) {
          return { ...pool, SM_Geolocation: parsed };
        }
        console.warn(`Invalid coordinates in SM_Geolocation for pool id ${pool.id}:`, parsed);
      } catch (e) {
        console.error(`Failed to parse SM_Geolocation for pool id ${pool.id}:`, e);
      }
    }
    return { ...pool, SM_Geolocation: [] };
  });

  const parsedWarehouses = safeWarehouses.map(warehouse => {
    if (warehouse.SM_Geolocation && typeof warehouse.SM_Geolocation === 'string') {
      try {
        const parsed = JSON.parse(warehouse.SM_Geolocation);
        if (Array.isArray(parsed) && parsed.every(coord => typeof coord.lat === 'number' && typeof coord.lng === 'number')) {
          return { ...warehouse, SM_Geolocation: parsed };
        }
        console.warn(`Invalid coordinates in SM_Geolocation for warehouse id ${warehouse.id}:`, parsed);
      } catch (e) {
        console.error(`Failed to parse SM_Geolocation for warehouse id ${warehouse.id}:`, e);
      }
    }
    return { ...warehouse, SM_Geolocation: [] };
  });

  const colorMap = useMemo(() => createColorMap(parsedPools, parsedWarehouses), [parsedPools, parsedWarehouses]);

  const polygons = parsedWarehouses.flatMap(warehouse => {
    if (!warehouse.id || !Array.isArray(warehouse.SM_Geolocation) || warehouse.SM_Geolocation.length === 0) {
      console.warn(`Skipping polygon for warehouse id ${warehouse.id}: Invalid or missing SM_Geolocation`);
      return [];
    }

    const isOccupied = parsedPools.some(pool => pool.id === warehouse.id);

    return [{
      id: warehouse.id,
      name: warehouse.Name || 'Unknown',
      paths: warehouse.SM_Geolocation,
      centroid: calculateCentroid(warehouse.SM_Geolocation),
      color: colorMap.get(warehouse.id) || '#cccccc',
      isOccupied,
    }];
  });

  const center = polygons.length > 0 ? polygons[0].centroid : { lat: -2.18, lng: -79.92 };

  if (polygons.length === 0) {
    console.warn('No valid polygons to render');
    return (
      <MapWrapper width={width} height={height}>
        <Map google={google} zoom={zoom} center={center} style={{ width, height }}>
          <Marker
            position={center}
            label={{
              text: 'No data available',
              color: '#000000',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          />
        </Map>
      </MapWrapper>
    );
  }

  return (
    <MapWrapper width={width} height={height}>
      <Map google={google} zoom={zoom} center={center} style={{ width, height }} onReady={(_, map) => {
        map.setCenter(center);
      }}>
        {polygons.map(polygon => (
          <Polygon
            key={polygon.id}
            paths={polygon.paths}
            strokeColor={polygon.color}
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor={polygon.color}
            fillOpacity={polygon.isOccupied ? 0.35 : 0.2}
          />
        ))}

        {polygons.map(polygon => (
          <Marker
            key={`centroid-${polygon.id}`}
            position={polygon.centroid}
            label={{
              text: polygon.isOccupied ? `${polygon.name} ❌` : `${polygon.name} ✔️`,
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
      </Map>
    </MapWrapper>
  );
};

PoolMap.defaultProps = {
  width: '100%',
  height: '400px',
  zoom: 14,
  pools: [],
  warehouses: [],
};

PoolMap.propTypes = {
  google: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  zoom: PropTypes.number,
  pools: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      Name: PropTypes.string,
      SM_Geolocation: PropTypes.string,
    })
  ),
  warehouses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      Name: PropTypes.string,
      SM_Geolocation: PropTypes.string,
    })
  ),
};

export default GoogleApiWrapper({ apiKey })(PoolMap);