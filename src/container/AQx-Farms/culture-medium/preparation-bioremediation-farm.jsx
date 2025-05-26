import React, { Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Card, Button, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import ProductCycleBarChart from './charts/CompositionLineChart';
import BioremediationBarChart from './charts/BioremediationBarChart';
import ProductCycleRadarChart from './ProdudctCycleRadarChart';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';

function PreparationBioremediationFarm() {
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
  };

  const handleSectorChange = (sectorId) => {
    setSelectedSector(sectorId);
    setSelectedPool(null);
  };

  const handlePoolChange = (poolId) => {
    setSelectedPool(poolId);
    Cookies.set('poolId', poolId);
  };

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

  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];

  const limeColumns = [
    { title: 'Producto', dataIndex: 'producto', key: 'producto' },
    { title: 'Ciclo', dataIndex: 'ciclo', key: 'ciclo' },
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'Cantidad (kg)', dataIndex: 'cantidad', key: 'cantidad' },
    { title: 'Total', dataIndex: 'total', key: 'total' },
  ];

  const limeData = [
    { key: '1', producto: 'Cal', ciclo: 'Ciclo 1', fecha: '2024-11-01', cantidad: 50, total: 250 },
    { key: '2', producto: 'Zeolita', ciclo: 'Ciclo 1', fecha: '2024-11-02', cantidad: 40, total: 200 },
    { key: '3', producto: 'CaCO₃', ciclo: 'Ciclo 1', fecha: '2024-11-03', cantidad: 60, total: 300 },
    { key: '4', producto: 'Ca(OH)₂', ciclo: 'Ciclo 1', fecha: '2024-11-04', cantidad: 100, total: 500 },
    { key: '5', producto: 'Cal P24', ciclo: 'Ciclo 1', fecha: '2024-11-05', cantidad: 75, total: 375 },
    { key: '6', producto: 'Cal', ciclo: 'Ciclo 2', fecha: '2024-12-01', cantidad: 55, total: 275 },
    { key: '7', producto: 'Zeolita', ciclo: 'Ciclo 2', fecha: '2024-12-02', cantidad: 45, total: 225 },
    { key: '8', producto: 'CaCO₃', ciclo: 'Ciclo 2', fecha: '2024-12-03', cantidad: 65, total: 325 },
    { key: '9', producto: 'Ca(OH)₂', ciclo: 'Ciclo 2', fecha: '2024-12-04', cantidad: 95, total: 475 },
    { key: '10', producto: 'Cal P24', ciclo: 'Ciclo 2', fecha: '2024-12-05', cantidad: 80, total: 400 },
    { key: '11', producto: 'Cal', ciclo: 'Ciclo 3', fecha: '2025-01-01', cantidad: 60, total: 300 },
    { key: '12', producto: 'Zeolita', ciclo: 'Ciclo 3', fecha: '2025-01-02', cantidad: 50, total: 250 },
    { key: '13', producto: 'CaCO₃', ciclo: 'Ciclo 3', fecha: '2025-01-03', cantidad: 70, total: 350 },
    { key: '14', producto: 'Ca(OH)₂', ciclo: 'Ciclo 3', fecha: '2025-01-04', cantidad: 90, total: 450 },
    { key: '15', producto: 'Cal P24', ciclo: 'Ciclo 3', fecha: '2025-01-05', cantidad: 85, total: 425 },
    { key: '16', producto: 'Cal', ciclo: 'Ciclo 4', fecha: '2025-02-01', cantidad: 65, total: 325 },
    { key: '17', producto: 'Zeolita', ciclo: 'Ciclo 4', fecha: '2025-02-02', cantidad: 55, total: 275 },
    { key: '18', producto: 'CaCO₃', ciclo: 'Ciclo 4', fecha: '2025-02-03', cantidad: 75, total: 375 },
    { key: '19', producto: 'Ca(OH)₂', ciclo: 'Ciclo 4', fecha: '2025-02-04', cantidad: 85, total: 425 },
    { key: '20', producto: 'Cal P24', ciclo: 'Ciclo 4', fecha: '2025-02-05', cantidad: 90, total: 450 },
    { key: '21', producto: 'Cal', ciclo: 'Ciclo 5', fecha: '2025-03-01', cantidad: 70, total: 350 },
    { key: '22', producto: 'Zeolita', ciclo: 'Ciclo 5', fecha: '2025-03-02', cantidad: 60, total: 300 },
    { key: '23', producto: 'CaCO₃', ciclo: 'Ciclo 5', fecha: '2025-03-03', cantidad: 80, total: 400 },
    { key: '24', producto: 'Ca(OH)₂', ciclo: 'Ciclo 5', fecha: '2025-03-04', cantidad: 75, total: 375 },
    { key: '25', producto: 'Cal P24', ciclo: 'Ciclo 5', fecha: '2025-03-05', cantidad: 95, total: 475 },
  ];

  const remediationColumns = [
    { title: 'Bacteria', dataIndex: 'bacteria', key: 'bacteria' },
    { title: 'Ciclo', dataIndex: 'ciclo', key: 'ciclo' },
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'Cantidad (kg)', dataIndex: 'cantidad', key: 'cantidad' },
    { title: 'Total', dataIndex: 'total', key: 'total' },
  ];

  const remediationData = [
    { key: '1', bacteria: 'Bacillus subtilis', ciclo: 'Ciclo 1', fecha: '2024-11-01', cantidad: 2, total: 10 },
    { key: '2', bacteria: 'Lactobacillus sp.', ciclo: 'Ciclo 1', fecha: '2024-11-02', cantidad: 2.5, total: 12.5 },
    { key: '3', bacteria: 'Pseudomonas sp.', ciclo: 'Ciclo 1', fecha: '2024-11-03', cantidad: 3, total: 15 },
    { key: '4', bacteria: 'Azotobacter sp.', ciclo: 'Ciclo 2', fecha: '2024-12-01', cantidad: 3.5, total: 17.5 },
    { key: '5', bacteria: 'Bacillus cereus', ciclo: 'Ciclo 2', fecha: '2024-12-02', cantidad: 4, total: 20 },
    { key: '6', bacteria: 'Streptomyces sp.', ciclo: 'Ciclo 2', fecha: '2024-12-03', cantidad: 4.5, total: 22.5 },
    { key: '7', bacteria: 'Lactobacillus sp.', ciclo: 'Ciclo 3', fecha: '2025-01-01', cantidad: 5, total: 25 },
    { key: '8', bacteria: 'Bacillus subtilis', ciclo: 'Ciclo 3', fecha: '2025-01-02', cantidad: 5.5, total: 27.5 },
    { key: '9', bacteria: 'Azotobacter sp.', ciclo: 'Ciclo 3', fecha: '2025-01-03', cantidad: 6, total: 30 },
  ];


  const bioremediationData = [
    { semana: '2024-11-01', cantidadBacterias: 5 },
    { semana: '2024-11-08', cantidadBacterias: 8 },
    { semana: '2024-11-15', cantidadBacterias: 12 },
    { semana: '2024-11-22', cantidadBacterias: 7 },
    { semana: '2024-11-29', cantidadBacterias: 10 },
    { semana: '2024-12-06', cantidadBacterias: 6 },
  ];

  return (
    <>
      <PageHeader

        highlightText="AquaLink Cultivo"
        title="Preparación Y Biorremediación"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Geolocalización" size="large">
                <Row gutter={[25, 25]} align="top">
                  <Col xs={24} md={24}>
                    <GoogleMaps height={"250px"} />
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
          <Col xl={16} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Biorremediación" size="large">
                <ProductCycleBarChart limeData={limeData} />
              </Cards>

            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Preparación " size="large">
                <div className="table-responsive">

                  <Table
                    dataSource={limeData}
                    columns={limeColumns}
                    pagination={{ pageSize: 5 }}
                    rowKey="tipo"
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Biorremediación" size="large">
                <div className="table-responsive">

                  <Table
                    dataSource={remediationData}
                    columns={remediationColumns}
                    pagination={{ pageSize: 5 }}
                    rowKey="key"
                  />
                </div>
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <BioremediationBarChart height={400} data={bioremediationData} />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Comparación de Productos por Ciclo" size="large">
                <ProductCycleRadarChart limeData={limeData} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main >
    </>
  );
}

export default PreparationBioremediationFarm;
