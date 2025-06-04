/* eslint-disable react-hooks/rules-of-hooks */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Table, Space, Typography, Progress, Select } from 'antd';
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
import { fetchCostCenterInfo, fetchIndirectCosts, fetchReportStatement, fetchSmReportStatementFullView, fetchSmReportStatementFullViewAg } from '../../../redux/cost/actionCreator';
import usePageHeaderSelectors from '../../../hooks/usePageHeaderSelectors';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import WeeklyAdditiveChart from './charts/WeeklyAdditiveChart';

const { Option } = Select;

function CostFarm() {
  const dispatch = useDispatch();
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [availableCampaigns, setAvailableCampaigns] = useState([]);
  const indirectCosts = useSelector(state => state.cost.indirectCosts);
  console.log("indirectCosts", indirectCosts);

  const { selectedOrg, selectedSector, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
    orgsSelector: () => useSelector((state) => state.auth.farmsOrgs),
    poolsSelector: () => useSelector(selectFarmsOrgsWithPools),
    includeSector: true,
    includePool: true,
    orgType: 'Camaronera',
  });

  const { reportStatementFullData, loading } = useSelector((state) => state.cost);

  console.log("reportStatementData", reportStatementFullData);

  // Extraer campañas disponibles de los datos
  useEffect(() => {
    if (Array.isArray(reportStatementFullData) && reportStatementFullData.length > 0) {
      // Filtrar solo registros que tienen C_Campaign_ID
      const campaignsData = reportStatementFullData.filter(item =>
        item.C_Campaign_ID && item.C_Campaign_ID.id
      );

      // Extraer campañas únicas
      const uniqueCampaigns = [];
      const seenCampaigns = new Set();

      campaignsData.forEach(item => {
        const campaignId = item.C_Campaign_ID.id;
        if (!seenCampaigns.has(campaignId)) {
          seenCampaigns.add(campaignId);
          uniqueCampaigns.push({
            id: campaignId,
            identifier: item.C_Campaign_ID.identifier,
            name: item.campaign_name || item.C_Campaign_ID.identifier,
            startDate: item.StartDate,
            endDate: item.EndDate,
          });
        }
      });

      setAvailableCampaigns(uniqueCampaigns);

      // Seleccionar la primera campaña por defecto si no hay ninguna seleccionada
      if (uniqueCampaigns.length > 0 && !selectedCampaign) {
        setSelectedCampaign(uniqueCampaigns[0].id);
      }
    }
  }, [reportStatementFullData, selectedCampaign]);

  useEffect(() => {
    if (selectedPool != null) {
      dispatch(fetchSmReportStatementFullViewAg());
      dispatch(fetchIndirectCosts());
    }
  }, [dispatch, selectedPool]);


  const transformReportStatementData = (rawData, campaignId) => {
    console.log('Raw Data:', rawData); // Debug: Inspect raw data
    console.log('Campaign ID:', campaignId); // Debug: Verify campaign ID

    if (!Array.isArray(rawData) || !campaignId) {
      console.warn('Invalid input: rawData is not an array or campaignId is missing');
      return [];
    }

    // Filtrar los datos por la campaña seleccionada
    const campaignData = rawData.find(item => item.C_Campaign_ID?.id === campaignId);
    if (!campaignData) {
      console.warn(`No campaign found for ID: ${campaignId}`);
      return [];
    }

    // Obtener fechas de inicio y fin de la campaña
    const startDate = new Date(campaignData.StartDate);
    const endDate = new Date(campaignData.EndDate);

    if (isNaN(startDate) || isNaN(endDate)) {
      console.warn('Invalid campaign dates:', campaignData.StartDate, campaignData.EndDate);
      return [];
    }

    // Calcular el número total de días de la campaña
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    console.log('Total Days:', totalDays); // Debug: Verify total days

    // Crear estructura base para todos los días
    const allDays = {};
    for (let day = 1; day <= totalDays; day++) {
      allDays[day] = {
        key: day,
        dia: day,
        sm_pooltype: campaignData.sm_pooltype || '',
        SM_Batch: campaignData.SM_Batch || '',
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
        larvasCamaronera: 0,
      };
    }

    // Procesar los datos de cada fase (prebreeding, prefatten, fatten)
    const processPhaseData = (phaseData, phaseType) => {
      if (!Array.isArray(phaseData)) {
        console.warn(`Phase ${phaseType} data is not an array:`, phaseData);
        return;
      }

      console.log(`Processing ${phaseType} data:`, phaseData); // Debug: Inspect phase data

      phaseData.forEach((item, index) => {
        if (!item.dateacct || !item.amtacctdr || !item.product_category_name) {
          console.warn(`Invalid item in ${phaseType} at index ${index}:`, item);
          return;
        }

        const transactionDate = new Date(item.dateacct);
        if (isNaN(transactionDate)) {
          console.warn(`Invalid date in ${phaseType} at index ${index}:`, item.dateacct);
          return;
        }

        const dayDifference = Math.ceil((transactionDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

        // Solo procesar si el día está dentro del rango válido
        if (dayDifference >= 1 && dayDifference <= totalDays) {
          const categoria = item.product_category_name?.toUpperCase() ?? '';
          const monto = parseFloat(item.amtacctdr) || 0;

          const entry = allDays[dayDifference];

          // Actualizar sm_pooltype si no está establecido
          if (!entry.sm_pooltype) {
            entry.sm_pooltype = phaseType;
          }

          // Asignar montos según la categoría
          switch (categoria) {
            case 'LARVA-CAMARONERA':
              entry.larvasCamaronera += monto;
              break;
            case 'ALIMENTO BALANCEADO':
              entry.alimentoBalanceado += monto;
              break;
            case 'ADITIVOS GENERAL COSECHA':
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
            case 'FERTILIZANTES':
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
              console.warn(`Unrecognized category in ${phaseType}: ${categoria}`);
              break;
          }
        } else {
          console.warn(`Transaction out of campaign range in ${phaseType}:`, item.dateacct, dayDifference);
        }
      });
    };

    // Procesar cada fase
    processPhaseData(campaignData.cost_prebreeding_json, 'PC');
    processPhaseData(campaignData.cost_prefatten_json || [], 'PE'); // Handle missing prefatten
    processPhaseData(campaignData.cost_fatten_json, 'E');

    // Convertir a array y ordenar por día
    const result = Object.values(allDays).sort((a, b) => a.dia - b.dia);
    console.log('Transformed Data:', result); // Debug: Inspect final output

    return result;
  };

  const columns = [
    {
      title: <span style={{ fontSize: '11px' }}>DdC</span>,
      dataIndex: 'dia',
      width: 70,
      key: 'dia',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>PISCINA</span>,
      dataIndex: 'sm_pooltype',
      key: 'sm_pooltype',
      width: 70,
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>LARVA-CAMARONERA</span>,
      dataIndex: 'larvasCamaronera',
      width: 70,
      key: 'larvasCamaronera',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>ALIMENTO BALANCEADO</span>,
      dataIndex: 'alimentoBalanceado',
      key: 'alimentoBalanceado',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>ÁCIDOS ORGÁNICOS</span>,
      dataIndex: 'acidosOrganicos',
      key: 'acidosOrganicos',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>ADITIVOS</span>,
      dataIndex: 'aditivos',
      key: 'aditivos',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>VITAMINAS</span>,
      dataIndex: 'vitaminas',
      key: 'vitaminas',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>MINERALES CALCÁREOS</span>,
      dataIndex: 'mineralesCalcicos',
      key: 'mineralesCalcicos',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>DESPARASITANTES</span>,
      dataIndex: 'desparasitantes',
      key: 'desparasitantes',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>FERTILIZANTES</span>,
      dataIndex: 'fertilizantes',
      key: 'fertilizantes',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>MEDICADOS</span>,
      dataIndex: 'medicados',
      key: 'medicados',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>BACTERIAS Y ENZIMAS</span>,
      dataIndex: 'bacteriaEnzimas',
      key: 'bacteriaEnzimas',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>AGUA</span>,
      dataIndex: 'agua',
      key: 'agua',
      align: 'center',
      width: 70,
      render: (text) => <span style={{ fontSize: '11px' }}>{text.toFixed(2)}</span>,
    },
    {
      title: <span style={{ fontSize: '11px' }}>COSTO IND Ha. / día</span>,
      key: 'costoInd',
      align: 'center',
      width: 70,
      render: (_, record) => (
        <strong style={{ fontSize: '11px' }}>${calculateCostoInd(record).toFixed(2)}</strong>
      ),
    },
    {
      title: <span style={{ fontSize: '11px' }}>TTL DdC</span>,
      key: 'costoTotal',
      align: 'center',
      width: 70,
      render: (_, record) => (
        <strong style={{ fontSize: '11px' }}>${calculateCostoInd(record).toFixed(2)}</strong>
      ),
    },
  ];

  const calculateCostoInd = (record) => {
    return (
      record.larvasCamaronera +
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

  const dataSource = transformReportStatementData(reportStatementFullData, selectedCampaign);

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
      align: 'center', width: 70,
      render: (text) => <strong style={{ fontSize: '12px' }}>{text}</strong>,
    },
    ...Array.from({ length: 14 }).map((_, index) => ({
      title: <span style={{ fontSize: '12px' }}>Semana {index + 1}</span>,
      dataIndex: `semana${index + 1}`,
      key: `semana${index + 1}`,
      align: 'center', width: 70,
      render: (text) => <span style={{ fontSize: '12px' }}>{text}</span>,
    })),
  ];

  const summaryData = calculateSummaryData(dataSource);

  // Obtener información de la campaña seleccionada para mostrar en el título
  const selectedCampaignInfo = availableCampaigns.find(c => c.id === selectedCampaign);

  return (
    <>
      <PageHeader
        highlightText="Aqualink Costos"
        title="Costos de Producción"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />

      {/* Selector de Campaña */}
      <Row gutter={25} style={{ marginBottom: 16 }}>
        <Col span={24}>
          <Cards title="Selección de Campaña">
            <Space align="center" style={{ width: '100%', justifyContent: 'space-between' }}>
              <Typography.Text strong>Seleccionar Campaña:</Typography.Text>
              <Select
                style={{ width: 400 }}
                placeholder="Seleccione una campaña"
                value={selectedCampaign}
                onChange={setSelectedCampaign}
                disabled={availableCampaigns.length === 0}
              >
                {availableCampaigns.map(campaign => (
                  <Option key={campaign.id} value={campaign.id}>
                    {campaign.name} ({campaign.startDate} - {campaign.endDate})
                  </Option>
                ))}
              </Select>
              {selectedCampaignInfo && (
                <Space>
                  <Typography.Text type="secondary">
                    Días de cultivo: {Math.ceil((new Date(selectedCampaignInfo.endDate) - new Date(selectedCampaignInfo.startDate)) / (1000 * 60 * 60 * 24)) + 1}
                  </Typography.Text>
                </Space>
              )}
            </Space>
          </Cards>
        </Col>
      </Row>

      <Row gutter={25}>
        <Col xl={8} xs={24} style={{ display: "flex" }}>
          <Suspense
            fallback={
              <Cards headless>
                <Skeleton active />
              </Cards>
            }
          >
            <AqualinkMaps
              width="100%"
              height={window.innerWidth >= 2000 ? '600px' : '305px'}
              selectedOrg={selectedOrg}
              selectedSector={selectedSector}
              selectedPool={selectedPool}
              farmsOrgsWithPools={farmsOrgsWithPools}
            />
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
            <Cards title="Insumos Semanal y Promedio" size="large">
              <WeeklyAdditiveChart dataSource={dataSource} />
            </Cards>
          </Suspense>
        </Col>
      </Row>

      <Cards title={'Costos de Producción'}>
        <Row gutter={25} style={{ alignItems: 'center', display: 'flex' }}>
          <Col xl={14} xs={24}>
            <WeeklyGroupedBarChart dataSource={dataSource} />
          </Col>

          <Col xl={6} xs={24} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CostPerformanceRadial />
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
            <Cards
              title={`Costos de Producción ${selectedCampaignInfo ? ` LoteID: ${selectedCampaignInfo.name}` : ''}`}
              size="large"
            >
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={{ pageSize: 7 }}
                bordered
                scroll={{ x: 'max-content' }}
              />
            </Cards>
          </Suspense>
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <Table
              columns={summaryColumns}
              dataSource={summaryData}
              pagination={false}
              bordered
              scroll={{ x: 'max-content' }}
            />
          </div>
          <br />
          <br />
        </Col>
      </Row>
    </>
  );
}

export default CostFarm;