import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Badge } from '../../pages/style';
import ProjectedSuggestedFeedingChart from './feeding/ProjectedSuggestedFeedingChart';

function PlateSamplingFarm() {

  const feedingColumns = [
    { title: 'DÍA', dataIndex: 'dia', key: 'dia' },
    { title: 'PLATO 1', dataIndex: 'plato1', key: 'plato1' },
    { title: 'PLATO 2', dataIndex: 'plato2', key: 'plato2' },
    { title: 'PLATO 3', dataIndex: 'plato3', key: 'plato3' },
    { title: 'PLATO 4', dataIndex: 'plato4', key: 'plato4' },
    { title: 'PLATO N', dataIndex: 'platoN', key: 'platoN' },
    { title: 'PROMEDIO DE CONSUMO', dataIndex: 'promedioConsumo', key: 'promedioConsumo' },
    { title: 'VARIACIÓN DE CONSUMO SUGERIDO', dataIndex: 'variacionConsumo', key: 'variacionConsumo' },
  ];


  const feedingData = [
    { key: '1', dia: '01 Nov', plato1: 15, plato2: 18, plato3: 16, plato4: 17, platoN: 20, promedioConsumo: 17.2, variacionConsumo: 1.1 },
    { key: '2', dia: '02 Nov', plato1: 16, plato2: 19, plato3: 18, plato4: 16, platoN: 21, promedioConsumo: 18.0, variacionConsumo: 1.3 },
    { key: '3', dia: '03 Nov', plato1: 17, plato2: 18, plato3: 19, plato4: 15, platoN: 22, promedioConsumo: 18.2, variacionConsumo: 1.5 },
    { key: '4', dia: '04 Nov', plato1: 18, plato2: 17, plato3: 20, plato4: 16, platoN: 23, promedioConsumo: 18.8, variacionConsumo: 1.7 },
    { key: '5', dia: '05 Nov', plato1: 19, plato2: 21, plato3: 22, plato4: 18, platoN: 24, promedioConsumo: 20.8, variacionConsumo: 1.9 },
  ];

  
  const tankData = [
    {
      id: 1,
      modulo: 'Módulo 1',
      tanque: 'Tanque 1',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
    {
      id: 2,
      modulo: 'Módulo 1',
      tanque: 'Tanque 2',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
  ];


  
  const TankCard = ({ data }) => (
    <div headless
      style={{
        border: '2px solid #e3e3e3',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
      }}>
      <Typography.Title level={5}>{data.modulo}</Typography.Title>
      <Typography.Title level={4} style={{ color: '#0372ce' }}>
        {data.tanque} · {data.porcentaje}%
      </Typography.Title>
      <div style={{ marginBottom: '16px' }}>
        <Typography.Text>Inicio Cultivo: {data.inicioCultivo}</Typography.Text><br />
        <Typography.Text>Fin Cultivo: {data.finCultivo}</Typography.Text><br />
        <Typography.Text>Población final: {data.poblacionFinal}</Typography.Text><br />
        <Typography.Text>Supervivencia: {data.supervivencia}</Typography.Text><br />
        <Typography.Text>Estado de Entrega: {data.estadoEntrega}</Typography.Text><br />
        <Typography.Text>Animales/g: {data.animalesPorGramo}</Typography.Text><br />
        <Typography.Text style={{ color: 'red', fontWeight: 'bold' }}>
          RESERVADO: {data.reservado}
        </Typography.Text><br />
        <Typography.Text style={{ color: 'green', fontWeight: 'bold' }}>
          DISPONIBLE: {data.disponible}
        </Typography.Text>
      </div>
      <button style={{ backgroundColor: '#0372ce', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
        Ver tanque
      </button>
    </div>
  );


  return (
    <>
      <PageHeader 
        highlightText="Aqualink Monitoreo"
        title="Alimentación/muestreo de Platos"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"]
        ]}
      />
      <Main>

        <Row gutter={25}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
            {tankData.map((tank) => (
              <TankCard data={tank} />
            ))}
          </div>
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
              {/* Tabla de Alimentación/Muestreo de Platos */}
              <Cards title="Alimentación/Muestreo de Platos" size="large">
                <Table dataSource={feedingData} columns={feedingColumns} pagination={{ pageSize: 5 }} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default PlateSamplingFarm;
