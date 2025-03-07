import React, { Suspense } from 'react';
import { Row, Col, Typography, Card, Skeleton, Space } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import WaterFlowCycleChart from './charts/WaterFlowCycleChart';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';

function WaterFlowFarm() {
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
  
  
  const reportData = {
    areaPiscina: "5.4 Ha",
    superficie: [
      { label: "Área", porcentaje: "100%", valor: "0 m2" },
      { label: "Mesa", porcentaje: "45%", valor: "0 m2" },
      { label: "Prestamo", porcentaje: "55%", valor: "0 m2" },
    ],
    profundidad: [
      { label: "Mesa", valor: "1.45 mts" },
      { label: "Prestamo", valor: "1.85 mts" },
      { label: "Prof. combinada", valor: "1.65 mts" },
    ],
    volumen: [
      { label: "Volumen OP o masa de agua", valor: "0 m3" },
      { label: "Volumen a siembra", porcentaje: "30%", valor: "0 m3" },
      { label: "Volumen TRNFR", porcentaje: "60%", valor: "0 m3" },
      { label: "Volumen a pesca", porcentaje: "40%", valor: "0 m3" },
    ],
    protocolos: [
      { label: "Protocolo de flujo 1", porcentaje: "3%", valor: "0" },
      { label: "Protocolo de flujo 2", porcentaje: "5%", valor: "0" },
      { label: "Protocolo de flujo 3", porcentaje: "7%", valor: "0" },
      { label: "Protocolo de flujo 4", porcentaje: "10%", valor: "0" },
    ],
  };

  return (
    <>
      <PageHeader
        
        highlightText="AquaLink Cultivo"
        title="Flujo y Recambio de Agua"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={[10, 0]} equal-heights>
          <Col xl={10} xs={24} style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Geolocalización" size="large" style={{ marginBottom: 0 }}>
                <Row gutter={[5, 5]} align="top">
                  <Col xs={24} md={24}>
                    <div>
                      <GoogleMaps height={"350px"} />
                    </div>
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

            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Área de Piscina y Volumen de Agua" size="large" style={{ flex: 1, marginTop: 0 }}>
                <WaterFlowCycleChart />
              </Cards>
            </Suspense>
          </Col>

          <Col xl={14} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Medio de Cultivo y Protocolos de Flujo" size="large">
                <Typography.Title level={5} strong>Área de Piscina: {reportData.areaPiscina}</Typography.Title>

                {/* Superficie y Profundidad en la misma fila */}
                <div className="report-section row-section">
                  <div className="report-subsection">
                    <Typography.Title level={5}>Superficie</Typography.Title>
                    {reportData.superficie.map((item, index) => (
                      <Row key={index} className="report-row">
                        <Col span={8}>{item.label}</Col>
                        <Col span={8}>{item.porcentaje}</Col>
                        <Col span={8}>{item.valor}</Col>
                      </Row>
                    ))}
                  </div>

                  <div className="report-subsection">
                    <Typography.Title level={5}>Profundidad</Typography.Title>
                    {reportData.profundidad.map((item, index) => (
                      <Row key={index} className="report-row">
                        <Col span={12}>{item.label}</Col>
                        <Col span={12}>{item.valor}</Col>
                      </Row>
                    ))}
                  </div>
                </div>
                <div className="harvest-report-divider" />
                <div className="report-section">
                  <Typography.Title level={5}>Volumen</Typography.Title>
                  {reportData.volumen.map((item, index) => (
                    <Row key={index} className="report-row">
                      <Col span={12}>{item.label}</Col>
                      <Col span={6}>{item.porcentaje || ''}</Col>
                      <Col span={6}>{item.valor}</Col>
                    </Row>
                  ))}
                </div>
                <div className="harvest-report-divider" />
                <Typography.Title level={5}>Protocolo de Flujo</Typography.Title>
                {reportData.protocolos.map((item, index) => (
                  <Row key={index} className="report-row">
                    <Col span={12}>{item.label}</Col>
                    <Col span={6}>{item.porcentaje}</Col>
                    <Col span={6}>{item.valor}</Col>
                  </Row>
                ))}
                <div className="harvest-report-divider" />
                <div className="report-section">
                  <Typography.Title level={5}>Volumen Operativo Ciclo</Typography.Title>
                  <Row className="report-row">
                    <Col span={24}>0 m3</Col>
                  </Row>
                </div>
              </Cards>

            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default WaterFlowFarm;
