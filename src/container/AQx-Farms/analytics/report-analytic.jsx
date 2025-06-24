/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Main } from '../../styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchProductionReports } from '../../../redux/views/production-report/actionCreator';
import { fetchIndirectCosts, fetchSmReportStatementFullView, fetchSmReportStatementFullViewAg } from '../../../redux/cost/actionCreator';
import usePageHeaderSelectors from '../../../hooks/usePageHeaderSelectors';
import { PageHeader } from '../../../components/page-headers/page-headers';
import StickyTable from './StickyTable';
import ScrollableTable from './ScrollableTable';
import ResultsTable from './ResultsTable';
import DetailsModal from './DetailsModal';
import feedingDetail from './feedingDetail';
import { getPreCriaData } from './preCriaData';
import { getPreEngordeData } from './preEngordeData';
import { getEngordeData } from './engordeData';
import { resultsTableData } from './resultsTableData';

function AnalyticReportFarm() {
    const dispatch = useDispatch();
    const { productionReports } = useSelector((state) => state.productionReport);
    const { reportStatementFullData, indirectCosts } = useSelector((state) => state.cost);
    const { selectedOrg, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
        orgsSelector: () => useSelector((state) => state.auth.farmsOrgs),
        poolsSelector: () => useSelector(selectFarmsOrgsWithPools),
        includeSector: true,
        includePool: true,
        orgType: 'Camaronera',
    });

    useEffect(() => {
        if (selectedPool) {
            dispatch(fetchProductionReports());
            dispatch(fetchSmReportStatementFullViewAg());
            dispatch(fetchIndirectCosts());
        }
    }, [dispatch, selectedPool]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const getCiclosValues = (reports, extractorFn) => {
        const result = {};
        for (let i = 0; i < 5; i++) {
            const report = reports[i];
            result[`ciclo${i + 1}`] = report ? extractorFn(report, i) || '' : '';
        }
        return result;
    };

    const mapProductionReportsToStickyRows = (reports) => {
        const stickyRows = [
            { key: 'fecha_inicio', descripcion: 'Fecha inicio' },
            { key: 'fecha_cosecha', descripcion: 'Fecha cosecha' },
            { key: 'lote_id', descripcion: 'Ciclo ID' },
        ];
        for (let i = 0; i < 5; i++) {
            const report = reports[i];
            stickyRows[0][`ciclo${i + 1}`] = report?.StartDate || '';
            stickyRows[1][`ciclo${i + 1}`] = report?.sm_fishingdate || '';
            stickyRows[2][`ciclo${i + 1}`] = report?.SM_Batch || '';
        }
        return stickyRows;
    };

    const mainTableData = () => [
        {
            key: 'tipo_siembra',
            descripcion: 'Sistema de Alimentacion Pre Cria',
            ...getCiclosValues(productionReports, (r) => r.feeding_method_prebreeding),
        },
        {
            key: 'tipo_siembra_engorde',
            descripcion: 'Sistema de Alimentacion Pre Engorde & Engorde',
            ...getCiclosValues(productionReports, (r) => r.feeding_method_warehouse),
        },
        {
            key: 'marca_alimento',
            descripcion: 'Marca de Alimento',
            ...getCiclosValues(productionReports, (r) => r.group1_list),
        },
        {
            key: 'foodproteinbase_pc_list',
            descripcion: 'Tipo de Proteína Pre Cría',
            ...getCiclosValues(productionReports, (r) => r.foodproteinbase_pc_list),
        },
        {
            key: 'foodproteinbase_pe_list',
            descripcion: 'Tipo de Proteína Pre Engorde',
            ...getCiclosValues(productionReports, (r) => r.foodproteinbase_pe_list),
        },
        {
            key: 'foodproteinbase_e_list',
            descripcion: 'Tipo de Proteína Engorde',
            ...getCiclosValues(productionReports, (r) => r.foodproteinbase_e_list),
        },
        {
            key: 'protocolo_produccion',
            descripcion: 'Protocolo de Producción',
            ...getCiclosValues(productionReports, (r) => r.Description),
        },
        {
            key: 'densidad_siembra_ha',
            descripcion: 'Densidad de Siembra / Ha',
            ...getCiclosValues(productionReports, (r) => r.SM_Density),
        },
        {
            key: 'peso_objetivo_cosecha',
            descripcion: 'Peso Objetivo a Cosecha (grs)',
            ...getCiclosValues(productionReports, (r) => r.SM_TargetWeight),
        },
        {
            key: 'piscina_engorde_final',
            descripcion: 'Piscina de Engorde Final',
            ...getCiclosValues(productionReports, (r) => r.warehouse_name),
        },
        {
            key: 'area_precria',
            descripcion: 'Área de PreCría (Has)',
            ...getCiclosValues(productionReports, (r) => r.poolsize_prebreeding || 0),
        },
        {
            key: 'area_preengorde',
            descripcion: 'Área de PreEngorde (Has)',
            ...getCiclosValues(productionReports, (r) => r.poolsize_prefattening || 0),
        },
        {
            key: 'area_engorde',
            descripcion: 'Engorde (Has)',
            ...getCiclosValues(productionReports, (r) => r.poolsize_mwarehouse || 0),
        },
        {
            key: 'area_total_ciclo',
            descripcion: 'Área Total de Ciclo (Has)',
            ...getCiclosValues(productionReports, (r) =>
                (r.poolsize_prebreeding || 0) + (r.poolsize_prefattening || 0) + (r.poolsize_mwarehouse || 0)
            ),
        },
        ...getPreCriaData(productionReports, getCiclosValues, reportStatementFullData, indirectCosts),
        ...getPreEngordeData(productionReports, getCiclosValues, reportStatementFullData, indirectCosts),
        ...getEngordeData(productionReports, getCiclosValues, reportStatementFullData, indirectCosts),
    ];

    const stickyRows = mapProductionReportsToStickyRows(productionReports);

    const showDetails = (cycle) => {
        const item = {
            marca_alimento: feedingDetail.find((detail) => detail.key === 'marca_alimento')[cycle],
            tipo_alimento_pre_cria: feedingDetail.find((detail) => detail.key === 'tipo_alimento_pre_cria')[cycle],
            sistema_alimentacion_pre_cria: feedingDetail.find((detail) => detail.key === 'sistema_alimentacion_pre_cria')[cycle],
            tipo_alimento_pre_engorde: feedingDetail.find((detail) => detail.key === 'tipo_alimento_pre_engorde')[cycle],
            tipo_alimento_engorde: feedingDetail.find((detail) => detail.key === 'tipo_alimento_engorde')[cycle],
            sistema_alimentacion_pre_engorde_engorde: feedingDetail.find((detail) => detail.key === 'sistema_alimentacion_pre_engorde_engorde')[cycle],
        };
        setSelectedItem(item);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedItem(null);
    };

    return (
        <>
            <PageHeader
                highlightText="Aqualink Camaroneras"
                title="Reportes de Producción"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
                selectedPool={selectedPool}
            />
            <Main>
                <Row gutter={25}>
                    <Col xxl={24} xs={24}>
                        <StickyTable stickyRows={stickyRows} />
                        <ScrollableTable mainTableData={mainTableData()} showDetails={showDetails} />
                    </Col>
                </Row>
                <Row gutter={25} style={{ marginTop: '20px' }}>
                    <Col xxl={24} xs={24}>
                        <ResultsTable
                            resultsTableData={resultsTableData(
                                productionReports,
                                getCiclosValues,
                                reportStatementFullData,
                                indirectCosts,
                                getEngordeData
                            )}
                            productionReports={productionReports}
                        />
                    </Col>
                </Row>
            </Main>
            <DetailsModal isVisible={isModalVisible} selectedItem={selectedItem} onClose={handleCloseModal} />
        </>
    );
}

export default AnalyticReportFarm;