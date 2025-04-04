import React, { Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Card } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import ProjectedSuggestedFeedingChart from '../monitoring/feeding/ProjectedSuggestedFeedingChart';
import BiomassEvolutionChart from './biomass/BiomassEvolutionChart';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';

function PopulationBiomassFarm() {
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


  const populationResults = [
    { label: "Título", value: "EcSSA Esmeraldas · P1" },
    { label: "Área", value: "4.76 ha" },
    { label: "Animales Capturados", value: 329 },
    { label: "Lances", value: 12 },
    { label: "Animales por Lance", value: "27,416" },
    { label: "Área de Atarraya", value: 4 },
    { label: "Animales por m²", value: "6,854" },
    { label: "Animales totales", value: "274,167", bold: true },
    { label: "Biomasa Estimada (lb)", value: "6,884", bold: true },
    { label: "Fecha de Siembra", value: "23 Feb 2021" },
    { label: "Siembra Total", value: "360,000" },
    { label: "Sobrevivencia", value: "76%" },
    { label: "Peso promedio", value: "11.4 g", highlight: true },

  ];



  const chronologicalData = [
    { fecha: '2024-01-01', loteId: 'L001', semanaCiclo: 1, poblacion: 10000, pesoPromedio: '10g', biomasa: '100kg' },
    { fecha: '2024-01-08', loteId: 'L001', semanaCiclo: 2, poblacion: 9800, pesoPromedio: '15g', biomasa: '147kg' },
    { fecha: '2024-01-15', loteId: 'L001', semanaCiclo: 3, poblacion: 9600, pesoPromedio: '20g', biomasa: '192kg' },
  ];

  const columns = [
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'S.C', dataIndex: 'semanaCiclo', key: 'semanaCiclo' },
    { title: 'Lote', dataIndex: 'loteId', key: 'loteId' },
    { title: 'Población', dataIndex: 'poblacion', key: 'poblacion' },
    { title: 'Px', dataIndex: 'pesoPromedio', key: 'pesoPromedio' },
    { title: 'Biomasa', dataIndex: 'biomasa', key: 'biomasa' },
  ];
  return (
    <>
      <PageHeader highlightText={"AquaLink Parámetros:"}
        title="Población-Biomasa"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: "flex" }}>
            <AqualinkMaps />
          </Col>
          <Col xl={13} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte de Población" size="large">
                <div className="report-container">
                  <div className="header">
                    <span className="title">{populationResults[0].value}</span>
                    <span className="area">{populationResults[1].value}</span>
                  </div>
                  <hr className="divider" />

                  <div className="section-title">Resultados de Población</div>
                  <div className="details">
                    {populationResults.slice(2, 8).map((item) => (
                      <div className="detail-item" key={item.label}>
                        <span className="label">{item.label}</span>
                        <span className={`value ${item.bold ? 'bold' : ''}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="weight-section">
                    <span className="weight-label">{populationResults[8].label}</span>
                    <div className="weight-value-box">
                      <span className="weight-value">{populationResults[8].value}</span>
                    </div>
                  </div>

                  <div className="additional-details">
                    {populationResults.slice(9).map((item) => (
                      <div className="additional-detail-item" key={item.label}>
                        <span className="label">{item.label}</span>
                        <span className={`value ${item.bold ? 'bold' : ''}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Cards>
            </Suspense>
          </Col>

        </Row>

        <Row gutter={25}>
          <Col xl={11} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Reporte Cronológico de poblaciones" size="large">
                <div className='flex-row'>
                  <div>
                    S. Ciclo: Semana de ciclo
                  </div>
                  <div>
                    Px: Peso Promedio
                  </div>
                </div>
                <br />
                <Table
                  columns={columns}
                  dataSource={chronologicalData}
                  pagination={{ pageSize: 5 }}
                  rowKey="fecha"
                />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={13} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Evolución de Biomasa" size="large">
                <BiomassEvolutionChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PopulationBiomassFarm;
