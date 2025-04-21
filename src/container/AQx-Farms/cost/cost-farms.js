import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Table, Space, Typography, Progress } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import WeeklyGroupedBarChart from './charts/WeeklyGroupBarChart';
import CostPerformanceRadial from './charts/CostPerformance';
import { ChartContainer, SalesRevenueWrapper } from '../../dashboard/Style';
import { BorderLessHeading } from '../../styled';
import WeeklyCombinedChart from './charts/WeeklyCombinedChart';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import Cookies from 'js-cookie';
import { fetchCostCenterInfo, fetchReportStatement } from '../../../redux/cost/actionCreator';

function CostFarm() {

  const dispatch = useDispatch();


  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);


  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  const { reportStatementData, loading } = useSelector((state) => state.cost);

  console.log("reportStatementData", reportStatementData)
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


  useEffect(() => {
    if (selectedPool != null) {
      dispatch(fetchReportStatement());
    }
  }, [dispatch, selectedPool]);

  const transformReportStatementData = (rawData) => {
    if (!Array.isArray(rawData)) return [];
  
    const groupedByIndex = {};
  
    rawData.forEach((item) => {
      const index = item.SM_Index ?? 0;
      const categoria = item.product_category_name?.toUpperCase() ?? '';
      const monto = item.AmtAcctDr ?? 0;
  
      if (!groupedByIndex[index]) {
        groupedByIndex[index] = {
          key: index,
          dia: index,
          alimentoBalanceado: 0,
          acidosOrganicos: 0,
          aditivos: 0,
          vitaminas: 0,
          mineralesCalcicos: 0,
          desparasitantes: 0,
          fertilizantes: 0,
          medicados: 0,
          bacteriaEnzimas: 0,
          agua: 0,
        };
      }
  
      const entry = groupedByIndex[index];
  
      switch (categoria) {
        case 'LARVA-CAMARONERA':
          entry.alimentoBalanceado += monto;
          break;
        case 'ADITIVOS':
          entry.aditivos += monto;
          break;
        case 'VITAMINAS':
          entry.vitaminas += monto;
          break;
        case 'ACIDOS ORGANICOS':
          entry.acidosOrganicos += monto;
          break;
        case 'BACTERIAS Y ENZIMAS':
          entry.bacteriaEnzimas += monto;
          break;
        case 'FERTILIZANTE':
          entry.fertilizantes += monto;
          break;
        case 'MINERALES Y CALCAREOS':
          entry.mineralesCalcicos += monto;
          break;
        case 'DESPARASITANTES':
          entry.desparasitantes += monto;
          break;
        case 'MEDICADOS':
          entry.medicados += monto;
          break;
        case 'AGUA':
          entry.agua += monto;
          break;
        default:
          break;
      }
    });
  
    return Object.values(groupedByIndex).sort((a, b) => a.dia - b.dia);
  };

  const columns = [
    {
      title: <span style={{ fontSize: '11px' }}>DdC</span>,
      dataIndex: 'dia',
      key: 'dia',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>LARVA-CAMARONERA</span>,
      dataIndex: 'alimentoBalanceado',
      key: 'alimentoBalanceado',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>ÁCIDOS ORGÁNICOS</span>,
      dataIndex: 'acidosOrganicos',
      key: 'acidosOrganicos',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>ADITIVOS</span>,
      dataIndex: 'aditivos',
      key: 'aditivos',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>VITAMINAS</span>,
      dataIndex: 'vitaminas',
      key: 'vitaminas',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>MINERALES CALCÁREOS</span>,
      dataIndex: 'mineralesCalcicos',
      key: 'mineralesCalcicos',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>DESPARASITANTES</span>,
      dataIndex: 'desparasitantes',
      key: 'desparasitantes',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>FERTILIZANTES</span>,
      dataIndex: 'fertilizantes',
      key: 'fertilizantes',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>MEDICADOS</span>,
      dataIndex: 'medicados',
      key: 'medicados',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>BACTERIAS Y ENZIMAS</span>,
      dataIndex: 'bacteriaEnzimas',
      key: 'bacteriaEnzimas',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>AGUA</span>,
      dataIndex: 'agua',
      key: 'agua',
      align: 'center',
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>COSTO IND Ha. / día</span>,
      key: 'costoInd',
      align: 'center',
      render: (_, record) => (
        <strong style={{ fontSize: '11px' }}>${calculateCostoInd(record).toFixed(2)}</strong>
      ),
    },
    {
      title: <span style={{ fontSize: '11px' }}>TTL DdC</span>,
      key: 'costoTotal',
      align: 'center',
      render: (_, record) => (
        <strong style={{ fontSize: '11px' }}>${calculateCostoInd(record).toFixed(2)}</strong>
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


  const dataSource = transformReportStatementData(reportStatementData);



  const calculateSummaryData = (dataSource) => {
    if (!dataSource.length) return [];

    // Agrupar por semanas (asumiendo 7 días por semana)
    const daysPerWeek = 7;
    const groupedByWeek = {};

    dataSource.forEach((day) => {
      const weekIndex = Math.floor((day.dia - 1) / daysPerWeek);
      if (!groupedByWeek[weekIndex]) {
        groupedByWeek[weekIndex] = { subtotal: 0, valorPorHa: 0 };
      }
      const costo = calculateCostoInd(day);
      groupedByWeek[weekIndex].subtotal += costo;
      groupedByWeek[weekIndex].valorPorHa += costo / 10; // Ejemplo: dividir por 10 Ha
    });

    const subtotalsRow = {
      key: 'subtotals',
      tipo: 'STTL/Week',
      ...Object.keys(groupedByWeek).reduce((acc, weekIndex) => {
        acc[`semana${parseInt(weekIndex) + 1}`] = groupedByWeek[weekIndex].subtotal.toFixed(2);
        return acc;
      }, {}),
    };

    const valoresPorHaRow = {
      key: 'valoresPorHa',
      tipo: 'STTL/Ha',
      ...Object.keys(groupedByWeek).reduce((acc, weekIndex) => {
        acc[`semana${parseInt(weekIndex) + 1}`] = groupedByWeek[weekIndex].valorPorHa.toFixed(2);
        return acc;
      }, {}),
    };

    return [subtotalsRow, valoresPorHaRow];
  };

  const summaryColumns = [
    {
      title: <span style={{ fontSize: '12px' }}> </span>,
      dataIndex: 'tipo',
      key: 'tipo',
      align: 'center',
      render: (text) => <strong style={{ fontSize: '12px' }}>{text}</strong>,
    },
    ...Array.from({ length: 14 }).map((_, index) => ({
      title: <span style={{ fontSize: '12px' }}>WEEK {index + 1}</span>,
      dataIndex: `semana${index + 1}`,
      key: `semana${index + 1}`,
      align: 'center',
      render: (text) => <span style={{ fontSize: '12px' }}>{text}</span>,
    })),
  ];


  const summaryData = calculateSummaryData(dataSource);



  return (
    <>
      <PageHeader

        highlightText="Aqualink Costos"
        title="Costos de Producción"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
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
