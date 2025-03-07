import React, { lazy, Suspense, useState } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Badge } from '../../pages/style';
import ProjectedSuggestedFeedingChart from './feeding/ProjectedSuggestedFeedingChart';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';


function RealAndProjectedFeeding() {
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


  // Definición de columnas para la nueva tabla de Alimentación
  const feedingColumns = [
    { title: 'CÓDIGO', dataIndex: 'codigo', key: 'codigo' },
    { title: 'CORRIDA', dataIndex: 'corrida', key: 'corrida' },
    { title: 'LOTE', dataIndex: 'lote', key: 'lote' },
    { title: 'DÍA', dataIndex: 'dia', key: 'dia' },
    {
      title: (
        <center>
          ALIMENTO <br /> PROYECTADO
        </center>

      ),
      dataIndex: 'alimentoProyectado',
      key: 'alimentoProyectado',
      render: (text) => <center style={{ whiteSpace: 'pre-wrap' }}>{`${text}kg`}</center>,
    },
    {
      title: (
        <center>
          ALIMENTO <br /> ENTREGADO
        </center>
      ),
      dataIndex: 'alimentoEntregado',
      key: 'alimentoEntregado',
      render: (text) => <center style={{ whiteSpace: 'pre-wrap' }}>{`${text}kg`}</center>,
    },
    {
      title:
        (
          <center>
            ALIMENTO <br /> AJUSTADO
          </center>
        ),
      dataIndex: 'alimentoAjustado',
      key: 'alimentoAjustado',
      render: (text) => <center style={{ whiteSpace: 'pre-wrap' }}>{`${text}kg`}</center>,
    },
    { title: 'TIPO DE ALIMENTO', dataIndex: 'tipoAlimento', key: 'tipoAlimento' },
    { title: '% PROTEÍNA', dataIndex: 'proteina', key: 'proteina' },
  ];

  // Datos ficticios para la nueva tabla de Alimentación
  const feedingData = [
    { key: '1', codigo: 'A001', corrida: '1', lote: 'L01', dia: '01 Nov', alimentoProyectado: 50, alimentoEntregado: 48, alimentoAjustado: 52, tipoAlimento: 'Pellet', proteina: 30 },
    { key: '2', codigo: 'A002', corrida: '1', lote: 'L02', dia: '02 Nov', alimentoProyectado: 55, alimentoEntregado: 53, alimentoAjustado: 56, tipoAlimento: 'Pellet', proteina: 32 },
    { key: '3', codigo: 'A003', corrida: '1', lote: 'L03', dia: '03 Nov', alimentoProyectado: 60, alimentoEntregado: 59, alimentoAjustado: 62, tipoAlimento: 'Pellet', proteina: 28 },
    { key: '4', codigo: 'A004', corrida: '2', lote: 'L01', dia: '04 Nov', alimentoProyectado: 65, alimentoEntregado: 63, alimentoAjustado: 68, tipoAlimento: 'Gránulo', proteina: 35 },
    { key: '5', codigo: 'A005', corrida: '2', lote: 'L02', dia: '05 Nov', alimentoProyectado: 70, alimentoEntregado: 68, alimentoAjustado: 72, tipoAlimento: 'Gránulo', proteina: 33 },
    { key: '6', codigo: 'A006', corrida: '2', lote: 'L03', dia: '06 Nov', alimentoProyectado: 75, alimentoEntregado: 73, alimentoAjustado: 78, tipoAlimento: 'Pellet', proteina: 31 },
    { key: '7', codigo: 'A007', corrida: '3', lote: 'L01', dia: '07 Nov', alimentoProyectado: 80, alimentoEntregado: 79, alimentoAjustado: 83, tipoAlimento: 'Gránulo', proteina: 34 },
    { key: '8', codigo: 'A008', corrida: '3', lote: 'L02', dia: '08 Nov', alimentoProyectado: 85, alimentoEntregado: 84, alimentoAjustado: 88, tipoAlimento: 'Pellet', proteina: 29 },
    { key: '9', codigo: 'A009', corrida: '3', lote: 'L03', dia: '09 Nov', alimentoProyectado: 90, alimentoEntregado: 88, alimentoAjustado: 92, tipoAlimento: 'Gránulo', proteina: 36 },
    { key: '10', codigo: 'A010', corrida: '3', lote: 'L04', dia: '10 Nov', alimentoProyectado: 95, alimentoEntregado: 92, alimentoAjustado: 98, tipoAlimento: 'Pellet', proteina: 30 },
  ];

  return (
    <>
      <PageHeader
        highlightText="Aqualink Monitoreo"
        title="Alimentación Real Vs Proyectada"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Alimentación Real vs Alimentación Proyectada" size="large">
                <ProjectedSuggestedFeedingChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25} equal-heights>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* Tabla de Alimentación */}
              <Cards title="Alimentación" size="large">
                <Table
                  className='table-responsive'
                  dataSource={feedingData}
                  columns={feedingColumns}
                  pagination={{ pageSize: 5 }}
                />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default RealAndProjectedFeeding;
