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
  totalTanks, // Número total de tanques
  totalModules,// Número total de módulos
  descriptionColumn = 4

}) => {
  // Encuentra la organización seleccionada
  const organization = farmsOrgsWithPools.find(org => org.orgId === selectedOrg);
  console.log(organization);

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
  const allowedTypes = ['PE', 'E', 'PC'];

  const groupedPools = finalPools.reduce((groups, pool) => {
    const typeId = pool.poolType.id || 'Other';
    const typeName = pool.poolType.identifier || 'Otro';

    if (!allowedTypes.includes(typeName)) {
      return groups; // salta este pool si no está permitido
    }

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
    const total = pools.reduce((sum, pool) => sum + pool.poolSize, 0);
    return Math.round(total * 100) / 100; // redondea a 2 decimales
  };

  // Definición de colores para cada tipo
  const typeColors = {
    "PC": "#debb02",
    "PE": "#2584b8",
    "E": "#FF5733"
  };

  // Prepara los polígonos con sus coordenadas y etiqueta (label) para el nombre
  const polygons = finalPools.map(pool => {
    const paths = pool.geoLocation.map(loc => ({
      // Invertimos: latitud viene de loc.longitude y longitud de loc.latitude
      lat: parseFloat(loc.longitude),
      lng: parseFloat(loc.latitude),
    }));

    return {
      id: pool.poolId.toString(),
      name: pool.poolName,
      type: pool.poolType.identifier,
      paths,
      label: pool.poolName, // Se usará para mostrar el nombre sobre el área pintada
      color: typeColors[pool.poolType.identifier] || '#2584b8',
      centroid: calculateCentroid(paths),
    };
  });

  console.log("finalPools", finalPools);
  console.log("polu", JSON.stringify(polygons));

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
              <Descriptions
                column={{ xs: 1, sm: 2, md: descriptionColumn }}
                bordered
                size="small"
                layout="vertical"
              >
                {organization && (
                  <Descriptions.Item style={{ fontSize: "13px" }} label={<Space>{organization.orgName || "Nombre"}</Space>}>
                    <Text>Área: {organization.SM_NurseryArea} Ha</Text>
                  </Descriptions.Item>
                )}

                {["PC", "PE", "E"].map(poolTypeKey => {
                  const group = Object.values(groupedPools).find(g => g.name === poolTypeKey);
                  if (!group) return null;

                  const label =
                    group.name === "PC" ? "P. Pre Cría" :
                      group.name === "PE" ? "P. Pre Engorde" :
                        group.name === "E" ? "P. Engorde" : "Almacén";

                  return (
                    <Descriptions.Item key={poolTypeKey} style={{ fontSize: "13px" }} label={<Space>{label}</Space>}>
                      <Text># Piscinas: {group.pools.length}</Text>
                      <br />
                      <Text>Área: {calculateTotalArea(group.pools)}m2</Text>
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
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
  descriptionColumn: 4

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
  descriptionColumn:  PropTypes.number

};

export { AqualinkMaps };
