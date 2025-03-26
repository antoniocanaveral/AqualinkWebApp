import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { Cards } from '../cards/frame/cards-frame';
import { Col, Row, Skeleton, Space, Typography, Descriptions } from 'antd';
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
  farmsOrgsWithPools,
  type, // Nuevo prop para identificar si es LabClient
  totalTanks, // Nuevo prop para el número total de tanques
  totalModules // Nuevo prop para el número total de módulos
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
    return groups;
  }, {});

  // Calcula el área total por tipo de piscina
  const calculateTotalArea = (pools) => {
    return pools.reduce((total, pool) => {
      const area = pool.poolSize;
      return total + area;
    }, 0);
  };

  // Recopila todas las geoLocations de las piscinas filtradas y prepara los polígonos
  const polygons = finalPools.map(pool => ({
    id: pool.poolId.toString(),
    name: pool.poolName,
    type: pool.poolType.identifier,
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

  return (
    <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
      <Cards title="Geolocalización" size="large">
        <Row gutter={[25, 25]} align="top">
          <Col xs={24} md={24}>
            <GoogleMaps
              width={width}
              height={height}
              polygons={polygons}
              markers={markers}
            />
          </Col>

          {type === "LabClient" ? (
            // Si es LabClient, renderiza Descriptions
            <Col xs={24} md={24}>
              <Descriptions
                column={{ xs: 1, sm: 2, md: 3 }}
                bordered
                size="small"
                layout="vertical"
              >


                <Descriptions.Item style={{ fontSize: "13px" }} label={<Space>Módulos</Space>}>
                  <Text>{totalModules}</Text>
                </Descriptions.Item>

                <Descriptions.Item style={{ fontSize: "13px" }} label={<Space>Tanques</Space>}>
                  <Text>{totalTanks}</Text>
                </Descriptions.Item>


              </Descriptions>
            </Col>
          ) : (
            // Si NO es LabClient, renderiza la info original
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
                {organization && (
                  <div className="content-block">
                    <Title level={5}>{organization.orgName || "Nombre"}</Title>
                    <Text>Área: 307.35 Ha</Text>
                  </div>
                )}

                {Object.keys(groupedPools).map(poolTypeId => {
                  const group = groupedPools[poolTypeId];
                  return (
                    <div className="content-block" key={poolTypeId}>
                      <Title level={5}>
                        {group.name === 'PC' ? 'Piscinas Pre Cría'
                          : group.name === 'PE' ? 'Piscinas Pre Engorde'
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
          )}
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
  farmsOrgsWithPools: [],
  type: null,
  totalTanks: 0,
  totalModules: 0,
};

AqualinkMaps.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  selectedOrg: PropTypes.number,
  selectedSector: PropTypes.number,
  selectedPool: PropTypes.number,
  farmsOrgsWithPools: PropTypes.array.isRequired,
  type: PropTypes.string,
  totalTanks: PropTypes.number,
  totalModules: PropTypes.number,
};

export { AqualinkMaps };
