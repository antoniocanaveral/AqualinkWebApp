// AqualinkMaps.jsx
import PropTypes from 'prop-types';
import React from 'react';
import { Suspense } from 'react';
import { Cards } from '../cards/frame/cards-frame';
import { Col, Row, Skeleton, Space, Typography } from 'antd';
import { GoogleMaps } from './google-maps';

const { Title, Text } = Typography;

// Función para calcular el centro (centroid) de un polígono
const calculateCentroid = (paths) => {
  let latSum = 0;
  let lngSum = 0;
  paths.forEach(point => {
    latSum += point.lat;
    lngSum += point.lng;
  });
  const count = paths.length;
  return {
    lat: latSum / count,
    lng: lngSum / count,
  };
};

const AqualinkMaps = ({
  width,
  height,
  selectedOrg,
  selectedSector,
  selectedPool,
  farmsOrgsWithPools
}) => {
  // Encuentra la organización seleccionada
  const organization = farmsOrgsWithPools.find(org => org.orgId === selectedOrg);

  // Prepara los marcadores
  const markers = organization ? [{
    id: organization.orgId.toString(),
    name: organization.orgName,
    position: {
      lat: parseFloat(organization.latitude),
      lng: parseFloat(organization.longitude),
    },
    email: organization.orgEmail,
  }] : [];

  console.log("Markers", markers)

  // Obtiene todas las piscinas de la organización seleccionada
  const organizationPools = organization ? organization.pools : [];

  // Filtra las piscinas según el sector seleccionado
  const filteredPools = selectedSector
    ? organizationPools.filter(pool => pool.salesRegion.id === selectedSector)
    : organizationPools;

  // Si se ha seleccionado una pool específica, filtra por poolId
  const finalPools = selectedPool
    ? filteredPools.filter(pool => pool.poolId === selectedPool)
    : filteredPools;

  // Agrupa las piscinas por poolType.id ("PC" para Pre Cría, "PE" para Engorde)
  const groupedPools = finalPools.reduce((groups, pool) => {
    const typeId = pool.poolType.id || 'Other';
    const typeName = pool.poolType.identifier || 'Otro';
    if (!groups[typeId]) {
      groups[typeId] = {
        name: typeName,
        pools: []
      };
    }
    groups[typeId].pools.push(pool);
    console.log("grupos", groups);
    console.log("org", pool);
    return groups;
  }, {});

  // Calcula el área total por tipo de piscina
  const calculateTotalArea = (pools) => {
    console.log("Para area:", pools); // Verificar
    return pools.reduce((total, pool) => {
      const area = (pool.poolSize );
      return total + area;
    }, 0);
  };

  // Recopila todas las geoLocations de las piscinas filtradas y prepara los polígonos
  const polygons = finalPools.map(pool => ({
    id: pool.poolId.toString(), // Asegúrate de que poolId sea string para la clave
    name: pool.poolName,
    type: pool.poolType.identifier, // "PC" o "PE"
    paths: pool.geoLocation.map(loc => ({
      lat: parseFloat(loc.latitude),
      lng: parseFloat(loc.longitude),
    })),
    color: pool.poolType.id === 'PC' ? '#debb02' : '#2584b8',
    centroid: calculateCentroid(pool.geoLocation.map(loc => ({
      lat: parseFloat(loc.latitude),
      lng: parseFloat(loc.longitude),
    }))),
  }));
  console.log("Polígonos preparados:", polygons); // Verificar la estructura de los polígonos

  return (
    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
      <Cards title="Geolocalización" size="large">
        <Row gutter={[25, 25]} align="top">
          <Col xs={24} md={24}>
            <GoogleMaps
              width={width}
              height={height}
              polygons={polygons} // Pasamos los polígonos como prop
              markers={markers}   // Pasamos los marcadores como prop
            />
          </Col>
          <Col xs={24} md={24}>
            <Space
              direction="vertical"
              size="middle"
              style={{
                marginTop: height === "305px" ? 0 : height,
                width: '100%',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              {/* Información de la Organización */}
              {organization && (
                <div className="content-block">
                  <Title level={5}>{organization.orgName || "Nombre"}</Title>
                  <Text>Área: 307.35 Ha</Text> {/* Área estática por ahora */}
                </div>
              )}

              {/* Información Agrupada de Piscinas */}
              {Object.keys(groupedPools).map(poolTypeId => {
                const group = groupedPools[poolTypeId];
                return (
                  <div className="content-block" key={poolTypeId}>
                    <Title level={5}>
                      {group.name === 'PC' ? 'Piscinas Pre Cría'
                        : group.name === 'PE' ? 'Piscinas de Engorde'
                          : "Piscinas Engorde"}
                    </Title>
                    <Text># Piscinas: {group.pools.length}</Text>
                    <br />
                    <Text>Área: {calculateTotalArea(group.pools)}m2</Text>
                  </div>
                );
              })}
            </Space>
          </Col>
        </Row>
      </Cards>
    </Suspense>
  );
};

AqualinkMaps.defaultProps = {
  width: '100%',
  height: '305px',
  selectedOrg: null,
  selectedSector: null,
  selectedPool: null,
  farmsOrgsWithPools: [], // Valor por defecto
};

AqualinkMaps.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  selectedOrg: PropTypes.number, // Ajusta el tipo según corresponda
  selectedSector: PropTypes.number, // Ajusta el tipo según corresponda
  selectedPool: PropTypes.number, // Ajusta el tipo según corresponda
  farmsOrgsWithPools: PropTypes.arrayOf(PropTypes.shape({
    orgId: PropTypes.number.isRequired,
    orgName: PropTypes.string.isRequired,
    orgEmail: PropTypes.string.isRequired,
    latitude: PropTypes.string, // Agregado para el marcador
    longitude: PropTypes.string, // Agregado para el marcador
    pools: PropTypes.arrayOf(PropTypes.shape({
      poolId: PropTypes.number.isRequired,
      poolName: PropTypes.string.isRequired,
      salesRegion: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
      poolType: PropTypes.shape({
        id: PropTypes.string.isRequired, // "PC" o "PE"
        identifier: PropTypes.string.isRequired, // Nombre del tipo
      }),
      dimensions: PropTypes.shape({
        length: PropTypes.number,
        width: PropTypes.number,
        depth: PropTypes.number,
        diameter: PropTypes.number,
      }),
      geoLocation: PropTypes.arrayOf(PropTypes.shape({
        latitude: PropTypes.string.isRequired, // Asegúrate de que sean strings convertibles a float
        longitude: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
  })).isRequired, // Asegúrate de que este array esté siempre presente
};

export { AqualinkMaps };