/* eslint-disable react-hooks/rules-of-hooks */
import React, { lazy, Suspense, useEffect, useMemo } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import ProductionProjectionPerMonth from './planning/ProductionProjectionPerMonth';
import CostProjections from './planning/CostProjections';
import usePageHeaderSelectors from '../../hooks/usePageHeaderSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';
import { fetchPlannings } from '../../redux/planning/actionCreator';
import Chart from 'react-apexcharts';
import moment from 'moment';

function RealPlanning() {
    const dispatch = useDispatch();
    const { plannings, loading, error } = useSelector((state) => state.smPlanning);
    const { selectedOrg, selectedSector, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
        orgsSelector: () => useSelector((state) => state.auth.farmsOrgs),
        poolsSelector: () => useSelector(selectFarmsOrgsWithPools),
        includeSector: true,
        includePool: true,
        orgType: 'Camaronera',
    });

    const currentYear = 2025;
    const currentDate = moment();

    const columns = [
        { title: 'Lote ID', dataIndex: 'c_campaign_id', key: 'c_campaign_id', align: 'left' },
        {
            title: 'ESTADO',
            dataIndex: 'sm_state',
            key: 'sm_state',
            align: 'left',
            render: (text) => (
                <span
                    style={{
                        color: text === 'PLANIFICADA' ? '#ff9999' : text === 'CONFIGURADO' ? '#52c41a' : 'inherit',
                        fontWeight: 'bold',
                    }}
                >
                    {text}
                </span>
            ),
        },
        { title: 'Protocolo de Producción', dataIndex: 'sm_farmingsystem', key: 'sm_farmingsystem', align: 'left' },
        { title: 'Protocolo Alimentación', dataIndex: 'sm_strategy', key: 'sm_strategy', align: 'center' },
        { title: 'Fecha Inicio', dataIndex: 'startdate', key: 'startdate', align: 'left' },
        { title: 'Fecha Cosecha', dataIndex: 'sm_plannedfinishdate', key: 'sm_plannedfinishdate', align: 'left' },
        { title: 'DdCE', dataIndex: 'sm_fattenweeks', key: 'sm_fattenweeks', align: 'right' },
        { title: 'DdCR', dataIndex: 'sm_prebreedingweeks', key: 'sm_prebreedingweeks', align: 'right' },
        { title: 'Peso Objetivo', dataIndex: 'sm_targetweight', key: 'sm_targetweight', align: 'right' },
        { title: 'Peso DdC', dataIndex: 'sm_animalsgramreal', key: 'sm_animalsgramreal', align: 'right' },
        { title: 'Peso de Entrada', dataIndex: 'sm_animalsgram', key: 'sm_animalsgram', align: 'right' },
        { title: 'Densidad Estimada', dataIndex: 'sm_density', key: 'sm_density', align: 'right' },
        { title: 'Densidad Real', dataIndex: 'SM_DensityPerHectareFatten', key: 'SM_DensityPerHectareFatten', align: 'right' },
        { title: 'FCA DdC', dataIndex: 'sm_fcareal', key: 'sm_fcareal', align: 'right' },
        { title: 'Biomasa EST', dataIndex: 'sm_biomass', key: 'sm_biomass', align: 'right' },
        { title: 'Biomasa DdC', dataIndex: 'sm_confirmedbiomass', key: 'sm_confirmedbiomass', align: 'right' },
        { title: 'Biomasa Ha', dataIndex: 'sm_biomass_per_poolsize', key: 'sm_biomass_per_poolsize', align: 'right' },
    ];

    // Helper function to safely convert to number
    const safeNumber = (value) => {
        const num = Number(value);
        return isNaN(num) ? 0 : num;
    };

    // Process planning data
    const generatePlanningData = (plannings) => {
        if (!plannings || !Array.isArray(plannings)) return [];

        return plannings
            .filter((plan) => !selectedOrg || (plan.AD_Org_ID && plan.AD_Org_ID.id === selectedOrg))
            .filter((plan) => !selectedPool || (plan.M_Warehouse_ID && plan.M_Warehouse_ID.id === selectedPool))
            .map((plan) => ({
                key: plan.id,
                c_campaign_id: plan.C_Campaign_ID?.identifier || 'N/A',
                sm_farmingsystem: plan.SM_FarmingSystem?.identifier || 'N/A',
                sm_strategy: plan.sm_strategy || 'N/A',
                startdate: plan.StartDate || 'N/A',
                sm_plannedfinishdate: plan.SM_PlannedFinishDate || 'N/A',
                sm_fattenweeks: plan.SM_FattenWeeks ? plan.SM_FattenWeeks * 7 : 'N/A',
                sm_prebreedingweeks: plan.SM_PreBreedingWeeks ? plan.SM_PreBreedingWeeks * 7 : 'N/A',
                sm_targetweight: plan.SM_TargetWeight || 'N/A',
                sm_animalsgramreal: plan.SM_AnimalsGramReal ? plan.SM_AnimalsGramReal.toFixed(2) : 'N/A',
                sm_animalsgram: plan.SM_AnimalsGram ? plan.SM_AnimalsGram.toFixed(2) : 'N/A',
                sm_density: plan.SM_Density || 'N/A',
                SM_DensityPerHectareFatten: plan.SM_DensityPerHectareFatten ? plan.SM_DensityPerHectareFatten.toFixed(2) : 'N/A',
                sm_fca: plan.SM_FCA ? plan.SM_FCA.toFixed(2) : 'N/A',
                sm_fcareal: plan.SM_FCAReal ? plan.SM_FCAReal.toFixed(2) : 'N/A',
                sm_biomass: plan.SM_Biomass || 'N/A',
                sm_confirmedbiomass: plan.SM_ConfirmedBiomass || 'N/A',
                sm_biomass_per_poolsize: plan.SM_PoolSize && plan.SM_Biomass ? (plan.SM_Biomass / plan.SM_PoolSize).toFixed(2) : 'N/A',
                sm_state: plan.sm_state || 'N/A',
            }));
    };

    const planningData = generatePlanningData(plannings || []);

    // Data for First Chart: Biomass by Month (Using ApexCharts Bubble Chart)
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // Filter plans for current year and selected pool based on harvest date
    const filteredPlansForMonth = (plannings || [])
        .filter((plan) => !selectedOrg || (plan.AD_Org_ID && plan.AD_Org_ID.id === selectedOrg))
        .filter((plan) => !selectedPool || (plan.M_Warehouse_ID && plan.M_Warehouse_ID.id === selectedPool))
        .filter((plan) => {
            if (!plan.SM_PlannedFinishDate) {
                console.log('Invalid Plan - Missing SM_PlannedFinishDate:', plan);
                return false;
            }
            const harvestDate = moment(plan.SM_PlannedFinishDate, 'YYYY-MM-DD');
            if (!harvestDate.isValid()) {
                console.log('Invalid Date in Plan:', plan.SM_PlannedFinishDate, plan);
                return false;
            }
            return harvestDate.year() === currentYear;
        });

    console.log('PRIMER GRAFICO:', filteredPlansForMonth);

    // Generate data for ApexCharts Bubble Chart
    const totalBiomass = filteredPlansForMonth.reduce((sum, plan) => sum + safeNumber(plan.SM_Biomass), 0);
    const bubbleChartData = months
        .map((month, index) => {
            const biomassKg = filteredPlansForMonth
                .filter((plan) => {
                    const harvestDate = moment(plan.SM_PlannedFinishDate, 'YYYY-MM-DD');
                    return harvestDate.isValid() && harvestDate.month() === index;
                })
                .reduce((sum, plan) => sum + safeNumber(plan.SM_Biomass), 0);

            // Calculate size as percentage of total biomass (0-100)
            const size = totalBiomass > 0 ? (biomassKg / totalBiomass) * 100 : 0;

            return biomassKg > 0 ? [index, biomassKg, size] : null; // Only include non-zero biomass
        })
        .filter(data => data !== null); // Remove null entries for zero biomass

    console.log('Bubble Chart Data:', bubbleChartData);

    const bubbleChartOptions = {
        chart: {
            height: 350,
            type: 'bubble',
            zoom: {
                enabled: false, // Disable zoom
            },
            toolbar: {
                show: false, // Hide toolbar (zoom/pan controls)
            },
        },
        dataLabels: {
            enabled: false, // Disable data labels on bubbles
        },
        fill: {
            opacity: 0.8,
        },
        xaxis: {
            type: 'numeric',
            min: 0,
            max: 11, // Range for 12 months (0 to 11)
            tickAmount: 11, // 12 ticks including min and max
            labels: {
                formatter: function (value) {
                    return months[Math.round(value)]; // Map numeric value to month name
                },
                rotate: -45,
                style: { fontSize: '10px' },
            },
        },
        yaxis: {
            title: {
                text: 'Biomasa Estimada (kg)',
            },
            labels: {
                formatter: function (val) {
                    return (val / 1000).toFixed(0) + 'K'; // Format as 1K, 2K, etc.
                },
            },
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const month = months[bubbleChartData[dataPointIndex][0]]; // Map index to month
                const biomassKg = series[seriesIndex][dataPointIndex];
                const percentage = bubbleChartData[dataPointIndex][2].toFixed(2);
                return `
                <div style="padding: 10px; background: white; border: 1px solid #ccc; border-radius: 4px;">
                    <strong>${month}</strong><br/>
                    Biomasa Estimada: ${biomassKg.toFixed(2)} kg<br/>
                    Porcentaje: ${percentage}%
                </div>
            `;
            },
        },
        colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CB3F', '#7DCEA0', '#F06292', '#42A5F5', '#FFCA28', '#26A69A'], // One color per month
        plotOptions: {
            bubble: {
                minBubbleRadius: 5,
                maxBubbleRadius: 30, // Control bubble size range
            },
        },
    };

    const bubbleChartSeries = [{
        name: 'Biomasa',
        data: bubbleChartData,
    }];
    // Data for Second Chart: Stacked Bar Chart by Week (52 weeks)
    const weeks = Array.from({ length: 52 }, (_, i) => `Semana ${i + 1}`);

    // Get unique warehouses, filtering for selected organization only
    const warehouses = [...new Set((plannings || [])
        .filter((plan) => !selectedOrg || (plan.AD_Org_ID && plan.AD_Org_ID.id === selectedOrg))
        .filter((plan) => plan.m_warehouse_name)
        .map((plan) => plan.m_warehouse_name))];

    console.log('Available warehouses:', warehouses);

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CB3F', '#7DCEA0'];
    const warehouseColors = warehouses.reduce((acc, warehouse, index) => {
        acc[warehouse] = colors[index % colors.length];
        return acc;
    }, {});

    const seriesSecondChart = useMemo(() => {
        return warehouses.map((warehouse) => ({
            name: warehouse,
            data: weeks.map((week, weekIndex) => {
                const weekStartOfYear = moment().startOf('year');
                const weekStart = weekStartOfYear.clone().add(weekIndex, 'weeks');
                const isPastWeek = weekStart.isBefore(currentDate, 'week');

                const filteredPlansForWeek = (plannings || [])
                    .filter((plan) => {
                        if (!plan?.AD_Org_ID || !plan?.m_warehouse_name || !plan?.SM_PlannedFinishDate) {
                            console.warn('Invalid plan data:', plan);
                            return false;
                        }
                        return (
                            (!selectedOrg || plan.AD_Org_ID.id === selectedOrg) &&
                            plan.m_warehouse_name === warehouse &&
                            moment(plan.SM_PlannedFinishDate, 'YYYY-MM-DD').isValid() &&
                            moment(plan.SM_PlannedFinishDate, 'YYYY-MM-DD').year() === currentYear &&
                            moment(plan.SM_PlannedFinishDate, 'YYYY-MM-DD').week() === (weekIndex + 1)
                        );
                    });

                const biomassKg = filteredPlansForWeek.reduce((sum, plan) => sum + safeNumber(plan.SM_Biomass), 0);
                const biomassLbs = biomassKg;

                return {
                    x: week,
                    y: biomassLbs.toFixed(2),
                    fillColor: isPastWeek ? warehouseColors[warehouse] + '40' : warehouseColors[warehouse],
                };
            }),
        }));
    }, [warehouses, plannings, selectedOrg, currentYear]);

    const optionsSecondChart = useMemo(() => ({
        chart: {
            type: 'bar',
            height: 350,
            width: 52 * 30, // Wide enough for 52 weeks
            stacked: true,
            zoom: {
                enabled: true,
                type: 'x',
                autoScaleYaxis: true,
            },
            toolbar: {
                autoSelected: 'pan',
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    enabled: true, // Disable individual bar data labels
                    total: {
                        enabled: true, // Disable stacked total labels
                    },
                },
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        xaxis: {
            type: 'category',
            labels: {
                rotate: -45,
                style: { fontSize: '10px' },
                formatter: function (value) {
                    return value;
                },
            },
        },
        yaxis: {
            title: {
                text: 'Biomasa Estimada (kg)',
            },
            labels: {
                formatter: function (val) {
                    return (val / 1000).toFixed(0) + 'K'; // Use whole numbers for y-axis (e.g., 1K, 2K)
                },
            },
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const warehouse = w.config.series[seriesIndex].name;
                const weekNumber = dataPointIndex + 1;
                const biomassValue = series[seriesIndex][dataPointIndex];

                const plansInWeek = (plannings || [])
                    .filter((plan) => !selectedOrg || (plan.AD_Org_ID && plan.AD_Org_ID.id === selectedOrg))
                    .filter((plan) => plan.m_warehouse_name === warehouse)
                    .filter((plan) => {
                        if (!plan.SM_PlannedFinishDate) return false;
                        const harvestDate = moment(plan.SM_PlannedFinishDate, 'YYYY-MM-DD');
                        return (
                            harvestDate.isValid() &&
                            harvestDate.year() === currentYear &&
                            harvestDate.week() === weekNumber
                        );
                    });

                const confirmedBiomassKg = plansInWeek.reduce((sum, plan) => sum + safeNumber(plan.SM_ConfirmedBiomass), 0);
                const confirmedBiomassLbs = confirmedBiomassKg;

                return `
                    <div style="padding: 10px; background: white; border: 1px solid #ccc; border-radius: 4px;">
                        <strong>${warehouse}</strong><br/>
                        <strong>Semana ${weekNumber}</strong><br/>
                        Biomasa Estimada: ${biomassValue.toFixed(2)} kg<br/>
                        ${confirmedBiomassLbs > 0 ? `Biomasa Confirmada: ${confirmedBiomassLbs.toFixed(2)} kg` : 'Biomasa Confirmada: N/A'}
                    </div>
                `;
            },
        },
        fill: {
            type: 'solid',
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40,
        },
        colors: warehouses.map((warehouse) => warehouseColors[warehouse]),
    }), [warehouses, warehouseColors]);

    useEffect(() => {
        dispatch(fetchPlannings());
    }, [dispatch, selectedOrg]);

    // Debug logs
    console.log('Plannings data:', plannings);
    console.log('Bubble Chart Data:', bubbleChartData);
    console.log('Series for Second Chart:', seriesSecondChart);

    return (
        <>
            <PageHeader
                highlightText="Aqualink Camaronera"
                title="Real Planning"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
                selectedPool={selectedPool}
            />
            <Main>
                <Row gutter={25}>
                    <Col xl={24} xs={24} style={{ display: 'flex' }}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <Cards title="Planning Data" size="large" style={{ width: '100%', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: "20px" }}>
                                    <div>
                                        DdCE: Días de Corrida Estimada<br />
                                    </div>
                                    <div>
                                        DdCR: Días de Corrida Real<br />
                                    </div>
                                    <div>
                                        Peso DdC: Peso a días de corrida<br />
                                    </div>

                                </div>
                                <Table
                                    className="table-responsive"
                                    dataSource={planningData}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    loading={loading}
                                />
                            </Cards>
                        </Suspense>
                    </Col>
                </Row>
                <Row gutter={25}>
                    <Col xl={24} xs={24}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <Cards title="Biomasa Estimada por Mes (Año Actual)" size="large">
                                {filteredPlansForMonth.length > 0 && bubbleChartData.length > 0 ? (
                                    <div style={{ width: '100%', height: '400px' }}>
                                        <Chart
                                            options={bubbleChartOptions}
                                            series={bubbleChartSeries}
                                            type="bubble"
                                            height={350}
                                        />
                                    </div>
                                ) : (
                                    <Typography>No hay datos disponibles para el año actual.</Typography>
                                )}
                            </Cards>
                        </Suspense>
                    </Col>
                    <Col xl={24} xs={24}>
                        <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                            <Cards title="Biomasa Estimada por Semana y Piscina" size="large">
                                {warehouses.length > 0 ? (
                                    <div style={{ overflowX: 'auto', width: '100%', overflowY: 'hidden' }}>
                                        <div style={{ width: `${92 * 50}px`, minWidth: window.innerWidth < 600 ? '100%' : '600px' }}>
                                            <Chart
                                                options={optionsSecondChart}
                                                series={seriesSecondChart}
                                                type="bar"
                                                height={350}
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <Typography>No hay datos disponibles para mostrar el gráfico por semanas.</Typography>
                                )}
                            </Cards>
                        </Suspense>
                    </Col>
                </Row>
                <br />
            </Main>
        </>
    );
}

export default RealPlanning;