import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Badge } from '../../pages/style';
import ProjectedSuggestedFeedingChart from './feeding/ProjectedSuggestedFeedingChart';
import ProteinGrowthEvolutionChart from './feeding/ProteinGrowthEvolutionChart';
function ProteinPercentageFarm() {
  // Definición de columnas para la nueva tabla de Alimentación por tipo de Proteína
  const feedingColumns = [
    { title: 'Ciclo', dataIndex: 'ciclo', key: 'ciclo' },
    { title: 'Lote ID', dataIndex: 'loteId', key: 'loteId' },
    { title: 'P Pre Cría', dataIndex: 'pPreCria', key: 'pPreCria' },
    { title: 'P Engorde', dataIndex: 'pEngorde', key: 'pEngorde' },
    { title: 'Sistema', dataIndex: 'sistema', key: 'sistema' },
    { title: 'Alimento', dataIndex: 'alimento', key: 'alimento' },
    { title: '# Días', dataIndex: 'dias', key: 'dias' },
    { title: 'Crecimiento Semanal', dataIndex: 'crecimientoSemanal', key: 'crecimientoSemanal' },
    { title: 'Supervivencia Semanal', dataIndex: 'supervivenciaSemanal', key: 'supervivenciaSemanal' },
    { title: 'IEP ', dataIndex: 'iep', key: 'iep' },
  ];

  // Datos ficticios para la tabla de Alimentación por tipo de Proteína
  const feedingData = [
    {
      key: '1',
      ciclo: 'Ciclo 1',
      loteId: 'L01',
      pPreCria: '10%',
      pEngorde: '15%',
      sistema: 'Intensivo',
      alimento: 'Pellet',
      dias: 7,
      crecimientoSemanal: '3%',
      supervivenciaSemanal: '90%',
      iep: '1.2',
    },
    {
      key: '2',
      ciclo: 'Ciclo 1',
      loteId: 'L02',
      pPreCria: '12%',
      pEngorde: '18%',
      sistema: 'Semi-Intensivo',
      alimento: 'Gránulo',
      dias: 7,
      crecimientoSemanal: '2.8%',
      supervivenciaSemanal: '88%',
      iep: '1.1',
    },
    {
      key: '3',
      ciclo: 'Ciclo 2',
      loteId: 'L01',
      pPreCria: '15%',
      pEngorde: '20%',
      sistema: 'Extensivo',
      alimento: 'Pellet',
      dias: 14,
      crecimientoSemanal: '3.5%',
      supervivenciaSemanal: '85%',
      iep: '1.3',
    },
    {
      key: '4',
      ciclo: 'Ciclo 2',
      loteId: 'L03',
      pPreCria: '11%',
      pEngorde: '17%',
      sistema: 'Intensivo',
      alimento: 'Gránulo',
      dias: 10,
      crecimientoSemanal: '3.2%',
      supervivenciaSemanal: '92%',
      iep: '1.0',
    },
    // Agrega más registros si es necesario
  ];

  return (
    <>
      <PageHeader
        highlightText="Aqualink Monitoreo"
        title="Porcentaje de Proteína"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Alimentación por tipo de Proteína" size="large">
                <Table
                  className='table-responsive'
                  dataSource={feedingData} columns={feedingColumns} pagination={{ pageSize: 5 }} />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Evolución de Crecimiento por tipo de Proteína" size="large">
                <ProteinGrowthEvolutionChart />
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25} equal-heights>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
             
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ProteinPercentageFarm;
