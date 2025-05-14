import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { Cards } from '../cards/frame/cards-frame';
import { Col, Row, Skeleton, Space, Typography, Descriptions } from 'antd';
import { GoogleMaps } from './google-maps';

const { Title, Text } = Typography;


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
  type,
  totalTanks,
  totalModules,
  descriptionColumn = 4
}) => {
  const organization = farmsOrgsWithPools.find(org => org.orgId === selectedOrg);

  const markers = organization ? [{
    id: organization.orgId.toString(),
    name: organization.orgName,
    position: {
      lat: parseFloat(organization.latitude),
      lng: parseFloat(organization.longitude),
    },
    email: organization.orgEmail,
  }] : [];

  const organizationPools = organization ? organization.pools : [];


  const filteredPools = selectedSector
    ? organizationPools.filter(pool => pool.salesRegion.id === selectedSector)
    : organizationPools;

  const finalPools = selectedPool
    ? filteredPools.filter(pool => pool.poolId === selectedPool)
    : filteredPools;


  const poolsToGroup = selectedSector ? finalPools : organizationPools;

  const allowedTypes = ['PE', 'E', 'PC'];

  const groupedPools = poolsToGroup.reduce((groups, pool) => {
    const typeId = pool.poolType.id || 'Other';
    const typeName = pool.poolType.identifier || 'Otro';

    if (!allowedTypes.includes(typeName)) {
      return groups;
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

  const calculateTotalArea = (pools) => {
    const total = pools.reduce((sum, pool) => sum + pool.poolSize, 0);
    return Math.round(total * 100) / 100;
  };

  const typeColors = {
    "PC": "#2abd9d",
    "PE": "#0099e6",
    "E": "#ff2545"
  };

  const polygons = finalPools.map(pool => {
    const paths = pool.geoLocation.map(loc => ({
      lat: parseFloat(loc.lat),
      lng: parseFloat(loc.lng),
    }));

    return {
      id: pool.poolId.toString(),
      name: pool.poolName,
      type: pool.poolType.identifier,
      paths,
      label: pool.poolName,
      color: typeColors[pool.poolType.identifier] || '#2584b8',
      centroid: calculateCentroid(paths),
    };
  });

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
                    group.name === "E" ? "P. Engorde" : "Otro";

                  return (
                    <Descriptions.Item key={poolTypeKey} style={{ fontSize: "13px" }} label={<Space>{label}</Space>}>
                      <Text># Piscinas: {group.pools.length}</Text>
                      <br />
                      <Text>Área: {calculateTotalArea(group.pools)} m²</Text>
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
  descriptionColumn: PropTypes.number
};

export { AqualinkMaps };
