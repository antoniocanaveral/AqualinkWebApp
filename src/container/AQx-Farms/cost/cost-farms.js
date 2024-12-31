import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Table, Space, Typography, Progress } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import WeeklyGroupedBarChart from './charts/WeeklyGroupBarChart';
import CostPerformanceRadial from './charts/CostPerformance';
import { ChartContainer, SalesRevenueWrapper } from '../../dashboard/Style';
import { BorderLessHeading } from '../../styled';
import WeeklyCombinedChart from './charts/WeeklyCombinedChart';

function CostFarm() {
  // Columnas de la tabla
  const columns = [
    {
      title: <span style={{ fontSize: '11px' }}>Día</span>,
      dataIndex: 'dia',
      key: 'dia',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>BALANCEADO</span>,
      dataIndex: 'alimentoBalanceado',
      key: 'alimentoBalanceado',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>A. ORGÁNICOS</span>,
      dataIndex: 'acidosOrganicos',
      key: 'acidosOrganicos',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>ADITIVOS</span>,
      dataIndex: 'aditivos',
      key: 'aditivos',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>VITAMINAS</span>,
      dataIndex: 'vitaminas',
      key: 'vitaminas',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>M. CÁLCICOS</span>,
      dataIndex: 'mineralesCalcicos',
      key: 'mineralesCalcicos',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>DESPARASITANTES</span>,
      dataIndex: 'desparasitantes',
      key: 'desparasitantes',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>FERTILIZANTES</span>,
      dataIndex: 'fertilizantes',
      key: 'fertilizantes',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>MEDICADOS</span>,
      dataIndex: 'medicados',
      key: 'medicados',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>BACTERIA ENZIMAS</span>,
      dataIndex: 'bacteriaEnzimas',
      key: 'bacteriaEnzimas',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>AGUA</span>,
      dataIndex: 'agua',
      key: 'agua',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>COSTO IND Ha. / día</span>,
      key: 'costoInd',
      align: 'center',
      render: (_, record) => (
        <strong style={{ fontSize: '11px' }}>
          ${calculateCostoInd(record)}
        </strong>
      ),
    },
  ];


  const calculateCostoInd = (record) => {
    return (
      record.alimentoBalanceado +
      record.acidosOrganicos +
      record.aditivos +
      record.vitaminas +
      record.mineralesCalcicos +
      record.desparasitantes +
      record.fertilizantes +
      record.medicados +
      record.bacteriaEnzimas +
      record.agua
    );
  };

  // Datos de la tabla con valores quemados
  const dataSource = [
    {
      key: 1,
      dia: 1,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    },
    {
      key: 2,
      dia: 2,
      alimentoBalanceado: 160,
      acidosOrganicos: 25,
      aditivos: 18,
      vitaminas: 12,
      mineralesCalcicos: 35,
      desparasitantes: 28,
      fertilizantes: 42,
      medicados: 37,
      bacteriaEnzimas: 55,
      agua: 25,
    },
    {
      key: 3,
      dia: 3,
      alimentoBalanceado: 170,
      acidosOrganicos: 22,
      aditivos: 14,
      vitaminas: 13,
      mineralesCalcicos: 32,
      desparasitantes: 27,
      fertilizantes: 43,
      medicados: 34,
      bacteriaEnzimas: 53,
      agua: 22,
    },
    {
      key: 4,
      dia: 4,
      alimentoBalanceado: 155,
      acidosOrganicos: 19,
      aditivos: 16,
      vitaminas: 11,
      mineralesCalcicos: 28,
      desparasitantes: 26,
      fertilizantes: 38,
      medicados: 31,
      bacteriaEnzimas: 48,
      agua: 18,
    },
    {
      key: 5,
      dia: 5,
      alimentoBalanceado: 165,
      acidosOrganicos: 24,
      aditivos: 17,
      vitaminas: 15,
      mineralesCalcicos: 33,
      desparasitantes: 29,
      fertilizantes: 41,
      medicados: 36,
      bacteriaEnzimas: 54,
      agua: 24,
    },
    {
      key: 6,
      dia: 6,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    },
    {
      key: 7,
      dia: 7,
      alimentoBalanceado: 180,
      acidosOrganicos: 30,
      aditivos: 20,
      vitaminas: 18,
      mineralesCalcicos: 40,
      desparasitantes: 30,
      fertilizantes: 45,
      medicados: 38,
      bacteriaEnzimas: 60,
      agua: 30,
    },
    {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    },
    {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    },
    {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    }, {
      key: 8,
      dia: 8,
      alimentoBalanceado: 150,
      acidosOrganicos: 20,
      aditivos: 15,
      vitaminas: 10,
      mineralesCalcicos: 30,
      desparasitantes: 25,
      fertilizantes: 40,
      medicados: 35,
      bacteriaEnzimas: 50,
      agua: 20,
    },
  ];


  // Reutilizamos `dataSource` de la tabla original para los cálculos
  const calculateSummaryData = (dataSource) => {
    const semanas = 11; // Asumimos 7 semanas para simplificar

    // Agrupamos los días en semanas y calculamos los subtotales y valores por Ha
    const groupedByWeek = Array.from({ length: semanas }, (_, semanaIndex) =>
      dataSource
        .filter((_, index) => Math.floor(index / semanas) === semanaIndex)
        .reduce(
          (totals, day) => {
            totals.subtotal += day.costoInd; // Suma del subtotal por semana
            totals.valorPorHa += day.costoInd / 10; // Ejemplo: se divide por un factor (como 10 Ha)
            return totals;
          },
          { subtotal: 0, valorPorHa: 0 }
        )
    );

    // Creamos dos filas para la tabla:
    const subtotalsRow = {
      key: 'subtotals',
      tipo: 'SUBTOTAL DE COSTOS POR SEMANA',
      ...groupedByWeek.reduce((acc, week, index) => {
        acc[`semana${index + 1}`] = week.subtotal.toFixed(2); // Formateamos los subtotales
        return acc;
      }, {}),
    };

    const valoresPorHaRow = {
      key: 'valoresPorHa',
      tipo: 'VALOR X HA',
      ...groupedByWeek.reduce((acc, week, index) => {
        acc[`semana${index + 1}`] = week.valorPorHa.toFixed(2); // Formateamos el valor por Ha
        return acc;
      }, {}),
    };

    return [subtotalsRow, valoresPorHaRow];
  };

  // Configuramos las columnas dinámicamente
  const summaryColumns = [
    {
      title: <span style={{ fontSize: '12px' }}> </span>,
      dataIndex: 'tipo',
      key: 'tipo',
      align: 'center',
      render: (text) => <strong style={{ fontSize: '12px' }}>{text}</strong>,
    },
    ...Array.from({ length: 11 }).map((_, index) => ({
      title: <span style={{ fontSize: '12px' }}>SEMANA {index + 1}</span>,
      dataIndex: `semana${index + 1}`,
      key: `semana${index + 1}`,
      align: 'center',
      render: (text) => <span style={{ fontSize: '12px' }}>{text}</span>,
    })),
  ];

  // Calculamos los datos dinámicos de la tabla usando `calculateSummaryData`
  const summaryData = calculateSummaryData(dataSource);

  // Renderizamos la tabla

  return (
    <>
      <PageHeader

        highlightText="Aqualink Costos"
        title="Costos de Producción"
        selectOptions={[
          ['Camaronera 1', 'Camaronera 2', 'Camaronera 3'],
          ['Sector 1', 'Sector 2', 'Sector 3'],
          ['Piscina 1', 'Piscina 2', 'Piscina 3'],
        ]}
      />
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
        <Col xl={8} xs={24} style={{ display: "flex" }}>
          <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
            <Cards title="Balanceado Semanal y Promedio" size="large">
              <WeeklyCombinedChart dataSource={dataSource} />
            </Cards>
          </Suspense>
        </Col>
        <Col xl={8} xs={24} style={{ display: "flex" }}>
          <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
            <Cards title="Aditivo Semanal Promedio" size="large">
              <WeeklyCombinedChart dataSource={dataSource} />
            </Cards>

          </Suspense>
        </Col>
      </Row>
      <Cards title={'Costos de Producción'}>
        <Row gutter={25} style={{ alignItems: 'center', display: 'flex' }}>
          <Col xl={8} xs={24}>
            <WeeklyGroupedBarChart dataSource={dataSource} />
          </Col>

          <Col xl={6} xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CostPerformanceRadial />
          </Col>

          <Col xl={6} xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className='ninjadash-sales-inner' style={{ width: "50%", margin: "0 auto" }}>
              <Progress
                type="circle"
                width={200}
                percent={75}
                strokeColor="#0372CE"
                trailColor={'#E6D5F6'}
              />
            </div>
          </Col>

          <Col xl={4} xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <SalesRevenueWrapper>
                <BorderLessHeading>
                  <ChartContainer>
                    <div className="ninjadash-chart-top" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div className="ninjadash-chart-top__item ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="36.803" viewBox="0 0 28 16.803" class="injected-svg">
                          <path id="arrow-growth-25" d="M29.882,6.868A1.421,1.421,0,0,0,28.595,6h-7a1.4,1.4,0,1,0,0,2.8h3.625L17.4,16.623,12.793,12a1.4,1.4,0,0,0-1.987,0l-8.4,8.4A1.405,1.405,0,1,0,4.4,22.389l7.4-7.418,4.6,4.619a1.4,1.4,0,0,0,1.987,0l8.8-8.817V14.4a1.4,1.4,0,1,0,2.8,0v-7A1.4,1.4,0,0,0,29.882,6.868Z" transform="translate(-1.994 -6)" fill="#fb3586"></path>
                        </svg>
                        <span style={{ fontSize: "30px" }} className="ninjadash-chart-top__item--amount">$8,550</span>
                        <span className="ninjadash-chart-top__item--status status-growth">
                          25%
                        </span>
                      </div>
                      <span className="ninjadash-chart-top__item--text">Crecimiento</span>
                    </div>
                  </ChartContainer>
                </BorderLessHeading>
              </SalesRevenueWrapper>
            </div>
          </Col>
        </Row>
      </Cards>


      <Row gutter={25}>
        <Col xl={24} xs={24} style={{ display: 'flex' }}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <Cards title={'Costos de Producción'}>
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 7 }}
                bordered
                scroll={{ x: 'max-content' }} // Scroll horizontal si el contenido es amplio
              />
            </Cards>
          </Suspense>
        </Col>
        <Col>
          <Table
            columns={summaryColumns}
            dataSource={summaryData}
            pagination={false}
            bordered
            scroll={{ x: 'max-content' }}
          />;

        </Col>
      </Row>
    </>
  );
}

export default CostFarm;
