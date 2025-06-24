/* eslint-disable react-hooks/rules-of-hooks */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Table } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import DonutChartSuplyCost from './charts/DonutChartSuplyCost';
import Speedometer from './charts/Speedometer';
import CostoLineChart from './charts/CostoLineChart';
import { fetchCostCenterInfo, fetchSmReportStatementFullView, fetchIndirectCosts, fetchSmReportStatementFullViewAg } from '../../../redux/cost/actionCreator';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import usePageHeaderSelectors from '../../../hooks/usePageHeaderSelectors';

function CenterCostFarm() {
  const { Text } = Typography;
  const dispatch = useDispatch();

  const { selectedOrg, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
    orgsSelector: () => useSelector((state) => state.auth.farmsOrgs),
    poolsSelector: () => useSelector(selectFarmsOrgsWithPools),
    includeSector: true,
    includePool: true,
    orgType: 'Camaronera',
  });

  const costCenterData = useSelector((state) => state.cost.costCenterData);
  const { reportStatementFullData, loading } = useSelector((state) => state.cost);
  const indirectCosts = useSelector(state => state.cost.indirectCosts);

  const [computedData, setComputedData] = useState([]);
  const [activeData, setActiveData] = useState(null);
  const [donutData, setDonutData] = useState([]);
  const [dataLineChart, setDataLineChart] = useState([]);

  // Fetch data when selectedPool changes
  useEffect(() => {
    if (selectedPool != null) {
      dispatch(fetchCostCenterInfo());
      dispatch(fetchSmReportStatementFullViewAg());
      dispatch(fetchIndirectCosts());
    }
  }, [dispatch, selectedPool]);

  // Function to transform raw data to daily categorized costs
  // Function to transform raw data to daily categorized costs
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
    console.log('Start Date:', campaignData.StartDate); // Debug: Verify start date
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
        SM_Batch: campaignData.SM_Batch || campaignId,
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
        prebreedingCost: 0, // Para costos de prebreeding
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
        if (!item.dateacct || item.amtacctdr == null || !item.product_category_name) {
          console.warn(`Invalid item in ${phaseType} at index ${index}:`, item);
          return;
        }

        const transactionDate = new Date(item.dateacct);
        if (isNaN(transactionDate)) {
          console.warn(`Invalid date in ${phaseType} at index ${index}:`, item.dateacct);
          return;
        }

        // Calculate day difference (startDate is day 1)
        const dayDifference = Math.floor((transactionDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

        // Solo procesar si el día está dentro del rango válido
        if (dayDifference >= 1 && dayDifference <= totalDays) {
          const categoria = item.product_category_name.toUpperCase();
          const monto = parseFloat(item.amtacctdr) || 0;

          const entry = allDays[dayDifference];

          // Actualizar sm_pooltype
          if (!entry.sm_pooltype) {
            entry.sm_pooltype = phaseType;
          }

          // Acumular costos de prebreeding por separado
          if (phaseType === 'PC') {
            entry.prebreedingCost += monto;
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
    processPhaseData(campaignData.cost_prebreeding_json || [], 'PC');
    processPhaseData(campaignData.cost_prefatten_json || [], 'PE');
    processPhaseData(campaignData.cost_fatten_json || [], 'E');

    // Convertir a array y ordenar por día
    const result = Object.values(allDays).sort((a, b) => a.dia - b.dia);
    console.log('Transformed Data:', result); // Debug: Inspect final output
    return result;
  };

  // Update donut and line chart data when activeData changes
  useEffect(() => {
    if (!activeData || !activeData.realCostsByDay || !activeData.startDate || !activeData.endDate) {
      setDonutData([]);
      setDataLineChart([]);
      return;
    }

    // Donut data
    setDonutData(aggregateCostsByCategory(activeData.realCostsByDay));

    // Line chart data
    const startDate = moment(activeData.startDate);
    const endDate = moment(activeData.endDate);
    const totalDays = endDate.diff(startDate, 'days') + 1;

    // Filter valid indirect costs within campaign dates
    const validIndirectCosts = indirectCosts.filter(cost => {
      const createdDate = moment(cost.Created);
      return createdDate.isSameOrAfter(startDate) && createdDate.isSameOrBefore(endDate);
    });
    console.log('Valid Indirect Costs:', validIndirectCosts);

    // Map indirect costs to daily values
    const indirectCostsByDay = {};
    for (let day = 1; day <= totalDays; day++) {
      indirectCostsByDay[day] = 0; // Initialize all days with 0
    }

    // Apply indirect costs to their respective date ranges
    validIndirectCosts.forEach(cost => {
      const costDate = moment(cost.Created);
      const startDay = Math.floor(costDate.diff(startDate, 'days')) + 1; // Correct day calculation
      const costValue = parseFloat(cost.sm_indirectcostvalue) || 0;
      const daysToApply = 7; // Apply cost for 7 days (adjust as needed)

      for (let i = 0; i < daysToApply && (startDay + i) <= totalDays; i++) {
        const dayNumber = startDay + i;
        if (dayNumber >= 1 && dayNumber <= totalDays) {
          indirectCostsByDay[dayNumber] = costValue; // Assign cost to each day in range
        }
      }
    });
    console.log('Indirect Costs By Day:', indirectCostsByDay);

    // Calculate daily projected feeding cost
    const valorProyectadoAlimentacion = parseFloat(activeData.valorProyectado) || 0;
    const costoAlimentacionDiario = valorProyectadoAlimentacion / totalDays;

    // Generate line chart data
    const lineData = [];
    for (let day = 1; day <= totalDays; day++) {
      const dayData = activeData.realCostsByDay[day - 1] || {};
      const realCostDay = calculateCostoInd(dayData); // Non-cumulative real cost
      const precriaCostDay = parseFloat(dayData.prebreedingCost) || 0;
      const indirectCostDay = indirectCostsByDay[day] || 0;

      // Projected cost: feeding cost + 7% + daily indirect cost
      const costoProyectadoDay = costoAlimentacionDiario * 1.07 + indirectCostDay;

      const entry = {
        x: day,
        'costo real': Number(realCostDay.toFixed(2)),
        'costo proyectado': Number(costoProyectadoDay.toFixed(2)),
        'costo precria': Number(precriaCostDay.toFixed(2)),
      };
      console.log(`Line Data Day ${day}:`, entry); // Debug
      lineData.push(entry);
    }

    console.log('Line Chart Data:', lineData);
    setDataLineChart(lineData);
  }, [activeData, indirectCosts]);

  const calculateCostoInd = (record) => {
    if (!record || typeof record !== 'object') return 0;
    const keys = [
      'larvasCamaronera', 'alimentoBalanceado', 'acidosOrganicos',
      'aditivos', 'vitaminas', 'mineralesCalcicos', 'desparasitantes',
      'fertilizantes', 'medicados', 'bacteriaEnzimas', 'agua',
    ];

    return keys.reduce((total, key) => {
      const num = parseFloat(record[key]);
      return total + (isNaN(num) ? 0 : num);
    }, 0);
  };

  // Aggregate categories for donut chart
  const aggregateCostsByCategory = (realCostsByDay) => {
    if (!Array.isArray(realCostsByDay) || realCostsByDay.length === 0) return [];

    const totals = {
      'LARVA-CAMARONERA': 0,
      'ALIMENTO BALANCEADO': 0,
      'ADITIVOS GENERAL COSECHA': 0,
      'VITAMINAS': 0,
      'ACIDOS ORGANICOS': 0,
      'BACTERIAS Y ENZIMAS': 0,
      'FERTILIZANTES': 0,
      'MINERALES Y CALCAREOS': 0,
      'DESPARASITANTES': 0,
      'MEDICADOS': 0,
      'AGUA': 0,
    };

    realCostsByDay.forEach(day => {
      totals['LARVA-CAMARONERA'] += parseFloat(day.larvasCamaronera) || 0;
      totals['ALIMENTO BALANCEADO'] += parseFloat(day.alimentoBalanceado) || 0;
      totals['ADITIVOS GENERAL COSECHA'] += parseFloat(day.aditivos) || 0;
      totals['VITAMINAS'] += parseFloat(day.vitaminas) || 0;
      totals['ACIDOS ORGANICOS'] += parseFloat(day.acidosOrganicos) || 0;
      totals['BACTERIAS Y ENZIMAS'] += parseFloat(day.bacteriaEnzimas) || 0;
      totals['FERTILIZANTES'] += parseFloat(day.fertilizantes) || 0;
      totals['MINERALES Y CALCAREOS'] += parseFloat(day.mineralesCalcicos) || 0;
      totals['DESPARASITANTES'] += parseFloat(day.desparasitantes) || 0;
      totals['MEDICADOS'] += parseFloat(day.medicados) || 0;
      totals['AGUA'] += parseFloat(day.agua) || 0;
    });

    const colorMap = {
      'ALIMENTO BALANCEADO': '#aa61c8',
      'BACTERIAS Y ENZIMAS': '#39a7f0',
      'ACIDOS ORGANICOS': '#cfd6da',
      'MINERALES Y CALCAREOS': '#395067',
      'ADITIVOS GENERAL COSECHA': '#29cba9',
      'LARVA-CAMARONERA': '#ff6b6b',
      'VITAMINAS': '#4b5e40',
      'DESPARASITANTES': '#f39c12',
      'FERTILIZANTES': '#2ecc71',
      'MEDICADOS': '#3498db',
      'AGUA': '#9b59b6',
    };

    const result = Object.entries(totals)
      .map(([category, value]) => ({
        label: category,
        value: Number(value.toFixed(2)),
        color: colorMap[category] || `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      }));

    console.log('Donut Data:', result); // Debug
    return result;
  };

  // Compute the main table data and active batch data
  useEffect(() => {
    if (!selectedPool) {
      setComputedData([]);
      setActiveData(null);
      setDonutData([]);
      setDataLineChart([]);
      return;
    }

    if (!costCenterData.length || !reportStatementFullData.length) return;

    const computed = costCenterData.map((item, index) => {
      const loteId = item.SM_Batch || item.C_Campaign_ID?.id || 'N/A';
      const campaignId = item.C_Campaign_ID?.id || null;
      const startDate = item.StartDate;
      const endDate = item.EndDate;
      const diasCorrida = moment(endDate).diff(moment(startDate), 'days') + 1;
      const supervivenciaEstimada = 0.4 * diasCorrida;
      const produccionEstimada = (
        (item.SM_Density * item.SM_PoolSize * supervivenciaEstimada) *
        item.SM_TargetWeight
      ) / 1000;
      const alimentacionEstimada = 1.2 * produccionEstimada;
      const costoAB = item.avg_feed_price * alimentacionEstimada;
      const larva = ((item.SM_Density * item.SM_PoolSize) / 1000) * 2;

      // 1️⃣ Obtener el último costo indirecto
      const lastIndirectCost = indirectCosts.length > 0
        ? parseFloat(indirectCosts[indirectCosts.length - 1].sm_indirect_cost) || 0
        : 0;

      // 2️⃣ Calcular 15% adicional de costoAB
      const adicionalesPorcentajes = 0.02 + 0.03 + 0.05 + 0.05;
      const adicionalCostoAB = costoAB * adicionalesPorcentajes;

      // 3️⃣ Calcular valor proyectado final
      const valorProyectado = costoAB + larva + adicionalCostoAB + lastIndirectCost;

      const diasCorridaDdc = Math.min(moment().diff(moment(startDate), 'days') + 1, diasCorrida);
      const diasTotalesCorrida = moment(endDate).diff(moment(startDate), 'days') + 1;

      const realCostsByDay = transformReportStatementData(reportStatementFullData, campaignId);
      console.log('Real Costs By Day:', realCostsByDay); // Debug

      const costoRealDdc = realCostsByDay
        .slice(0, diasCorridaDdc)
        .reduce((sum, day) => {
          const cost = calculateCostoInd(day);
          console.log(`Day ${day.dia} Cost:`, cost, 'Sum so far:', sum + cost);
          return sum + cost;
        }, 0);
      console.log('Costo Real DDC:', costoRealDdc); // Debug

      const costoProyectadoDdc = diasCorrida === 0
        ? 0
        : (valorProyectado / diasCorrida) * diasCorridaDdc;

      const rendimiento = costoProyectadoDdc === 0
        ? 0
        : ((costoProyectadoDdc - costoRealDdc) / costoProyectadoDdc) * 100;

      const proyected_reference = valorProyectado / diasCorrida;
      const real_reference = diasCorridaDdc === 0 ? 0 : costoRealDdc / diasCorridaDdc;

      const estado = moment(endDate).isSameOrAfter(moment()) ? 'Activo' : 'Terminado';

      return {
        key: index,
        lote_id: loteId,
        valorProyectado: valorProyectado.toFixed(2),
        diasCorrida,
        diasCorridaDdc,
        diasTotalesCorrida,
        costoProyectadoDdc: costoProyectadoDdc.toFixed(2),
        costoRealDdc: costoRealDdc.toFixed(2),
        rendimiento: rendimiento.toFixed(2),
        proyected_reference,
        real_reference,
        startDate,
        endDate,
        realCostsByDay,
        estado,
      };
    });

    console.log('Computed Data:', computed); // Debug
    setComputedData(computed);

    const activeBatch = computed.find(item => moment(item.endDate).isSameOrAfter(moment()))?.lote_id || null;
    const active = computed.find(item => item.lote_id === activeBatch) || computed[0] || null;
    console.log('Active Data:', active); // Debug
    setActiveData(active);

  }, [selectedPool, costCenterData, reportStatementFullData]);

  
  const columns = [
    {
      title: <Text style={{ fontSize: '12px' }}>LOTE ID</Text>,
      dataIndex: 'lote_id',
      key: 'index',
      render: text => <Text style={{ fontSize: '12px' }}>{text}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Valor Proyectado</Text>,
      dataIndex: 'valorProyectado',
      key: 'valorProyectado',
      render: text => <Text style={{ fontSize: '12px' }}>${text}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Días Totales de Corrida</Text>,
      dataIndex: 'diasTotalesCorrida',
      key: 'diasTotalesCorrida',
      render: value => <Text style={{ fontSize: '12px' }}>{value}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Día de Corrida Actual</Text>,
      dataIndex: 'diasCorridaDdc',
      key: 'diasCorridaDdc',
      render: value => <Text style={{ fontSize: '12px' }}>{value}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Costo Proyectado DdC</Text>,
      dataIndex: 'costoProyectadoDdc',
      key: 'costoProyectadoDdc',
      render: value => <Text style={{ fontSize: '12px' }}>${value}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Costo Real DdC</Text>,
      dataIndex: 'costoRealDdc',
      key: 'costoRealDdc',
      render: value => <Text style={{ fontSize: '12px' }}>${value}</Text>,
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Rendimiento</Text>,
      dataIndex: 'rendimiento',
      key: 'rendimiento',
      render: value => {
        let color = 'black';
        if (Number(value) > 0) color = 'green';
        else if (Number(value) < 0) color = 'red';
        return <Text style={{ fontSize: '12px', color }}>{value}%</Text>;
      },
    },
    {
      title: <Text style={{ fontSize: '12px' }}>Estado</Text>,
      dataIndex: 'estado',
      key: 'estado',
      render: text => <Text style={{ fontSize: '12px' }}>{text}</Text>,
    },
  ];

  return (
    <>
      <PageHeader
        highlightText="Aqualink Costos"
        title="Centro de Costos"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Centro de Costos">
                <Table
                  className="table-responsive"
                  columns={columns}
                  dataSource={computedData}
                  pagination={false}
                  bordered
                  rowKey="key"
                />
              </Cards>
            </Suspense>
          </Col>

          {selectedPool && activeData ? (
            <>
              <Col xl={12} xs={24} style={{ display: 'flex' }}>
                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                  <Cards title="Costos por Suministro">
                    <DonutChartSuplyCost data={donutData} />
                  </Cards>
                </Suspense>
              </Col>

              <Col xl={12} xs={24} style={{ display: 'flex' }}>
                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                  <Cards title="Rendimiento">
                    <Speedometer
                      value={Number(activeData.real_reference)}
                      base={Number(activeData.proyected_reference)}
                    />
                  </Cards>
                </Suspense>
              </Col>
            </>
          ) : null}
        </Row>

        {selectedPool && activeData ? (
          <Row gutter={25}>
            <Col xl={24} xs={24} style={{ display: 'flex' }}>
              <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                <Cards title="Costo Producción Ha/Día" size="large" style={{ width: '100%', height: '100%' }}>
                  <CostoLineChart data={dataLineChart} height={400} />
                </Cards>
              </Suspense>
            </Col>
          </Row>
        ) : null}
      </Main>
    </>
  );
}

export default CenterCostFarm;