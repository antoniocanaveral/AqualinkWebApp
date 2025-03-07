import React, { Suspense } from 'react';
import axios from 'axios';
import { Row, Col, Skeleton, Typography, Badge, Space, Form, Input, DatePicker, Select, Button, Divider } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { BasicFormWrapper, HorizontalFormStyleWrap, Main } from '../../styled';
import CalciumChart from './charts/CalciumChart';
import PhAlcalinityBehaviorChart from './charts/PhAlcalinityBehaviorChart';
import PhChart from './charts/PhChart';
import NitriteChart from './charts/NitriteChart';
import PhosphateChart from './charts/PhosphateChart';
import NitrateChart from './charts/NitrateChart';
import MagnesiumChart from './charts/MagnesiumChart';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';

function WaterAqualityFarms() {
  // Selección de org, sector y pool
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  // Datos de organizaciones
  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  // Manejo de selección de org
  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
  };

  // Manejo de selección de sector
  const handleSectorChange = (sectorId) => {
    setSelectedSector(sectorId);
    setSelectedPool(null);
  };

  // Manejo de selección de pool
  const handlePoolChange = (poolId) => {
    setSelectedPool(poolId);
    Cookies.set('poolId', poolId);
  };

  // Opciones para Farms
  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: farmsOrgsWithPools.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: 'Seleccione una Farm',
      value: selectedOrg || undefined,
    },
  ] : [];

  // Opciones para sectores
  const sectorsOptions = selectedOrg
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .reduce((acc, pool) => {
        if (pool.salesRegion && !acc.find(sector => sector.value === pool.salesRegion.id)) {
          acc.push({
            value: pool.salesRegion.id,
            label: pool.salesRegion.name,
          });
        }
        return acc;
      }, [])
    : [];

  const sectorSelectOptions = selectedOrg ? [
    {
      options: sectorsOptions,
      onChange: handleSectorChange,
      placeholder: 'Seleccione un Sector',
      value: selectedSector || undefined,
    },
  ] : [];

  // Opciones para pools
  const poolsOptions = selectedSector
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .filter(pool => pool.salesRegion && pool.salesRegion.id === selectedSector)
      .map(pool => ({
        value: pool.poolId,
        label: pool.poolName,
      }))
    : [];

  const poolsSelectOptions = selectedSector ? [
    {
      options: poolsOptions,
      onChange: handlePoolChange,
      placeholder: 'Seleccione una Pool',
      disabled: poolsOptions.length === 0,
      value: selectedPool || undefined,
    },
  ] : [];

  // Combinación de selects en el PageHeader
  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];
  return (
    <>
      <PageHeader highlightText={"AquaLink Parámetros:"}
        title="Calidad del Agua"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Geolocalización" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={24} md={24}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: "20px" }}>
                      <Badge color="#1890ff" dot style={{ marginRight: 8 }} />
                      <Typography.Title level={3} style={{ margin: 0 }}>Piscina 3</Typography.Title>
                    </div>
                    <GoogleMaps />
                  </Col>
                  <Col xs={24} md={24}>


                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Camaroneras 1</Typography.Title>
                          <Typography.Text>Área: 307.35 ha</Typography.Text>
                        </div>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Piscina 3</Typography.Title>
                          <Typography.Text>Área: 5.35 ha</Typography.Text>
                        </div>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Pre Cría 3</Typography.Title>
                          <Typography.Text>Área: 1.35 ha</Typography.Text>
                        </div>
                      </div>

                    </Space>
                  </Col>
                </Row>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={13} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Comportamiento de Ph y Alcalinidad" size="large">
                <PhAlcalinityBehaviorChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Ph" size="large">
              <PhChart />
            </Cards>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Alcalinidad" size="large">
                <MagnesiumChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Nitratos" size="large">
                <NitrateChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Nitrito" size="large">
              <NitriteChart />
            </Cards>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Magnesio" size="large">
                <MagnesiumChart />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Calcio" size="large">
                <CalciumChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Cards title="Fosfato" size="large">
              <PhosphateChart />
            </Cards>
          </Col>

        </Row>
      </Main >
    </>
  );
}

export default WaterAqualityFarms;

