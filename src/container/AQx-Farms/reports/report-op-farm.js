import React, { useEffect, useState, useMemo } from 'react';
import { Table, Select, Row, Col, Card } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { Main } from '../../styled.js';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchGeolocationWarehouse, fetchOperationReport } from '../../../redux/views/batch-report/actionCreator.js';
import PoolMap from '../../../components/maps/PoolMap.js';

// Function to generate a random pastel color
const generatePastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 50%, 85%)`;
};

// Function to create a color map for consistent colors
const createColorMap = (pools = [], warehouses = []) => {
    const colorMap = new Map();
    [...pools, ...warehouses].forEach(pool => {
        if (pool && typeof pool.id !== 'undefined') {
            if (!colorMap.has(pool.id)) {
                colorMap.set(pool.id, generatePastelColor());
            }
        }
    });
    return colorMap;
};

function ReportOpFarm() {
    const dispatch = useDispatch();
    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
    const organizations = useSelector((state) => state.auth.farmsOrgs);
    const { campaigns, loading } = useSelector(state => state.batchReport);
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        dispatch(fetchOperationReport());
        dispatch(fetchGeolocationWarehouse()).then(data => {
            console.log('Fetched warehouses:', data);
            if (data && Array.isArray(data)) {
                setWarehouses(data);
            } else {
                setWarehouses([]);
            }
        });
    }, [dispatch, selectedOrg]);

    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
        Cookies.remove('poolId');
    };

    const farmsSelectOptions = organizations.length > 0
        ? [{
            options: organizations.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Farm',
            value: selectedOrg || undefined,
        }]
        : [];

    const combinedSelectOptions = [...farmsSelectOptions];

    const groupedData = campaigns.reduce((acc, campaign) => {
        let masterId;
        if (campaign.SM_IsMainCampaing) {
            masterId = campaign.id;
        } else if (campaign.SM_MasterCampaing_ID?.id) {
            masterId = campaign.SM_MasterCampaing_ID.id;
        } else {
            masterId = campaign.id;
        }

        if (!acc[masterId]) {
            acc[masterId] = {
                master: null,
                children: [],
            };
        }

        if (campaign.SM_IsMainCampaing) {
            acc[masterId].master = campaign;
        } else if (campaign.SM_MasterCampaing_ID?.id === masterId) {
            acc[masterId].children.push(campaign);
        } else {
            acc[masterId].master = campaign;
        }

        return acc;
    }, {});

    const dataSource = Object.values(groupedData).map((group) => {
        const master = group.master;
        const children = group.children || [];

        const finalPonds = [
            master?.M_Warehouse_ID?.Name,
            ...children.map((c) => c.M_Warehouse_ID?.Name),
        ].filter(Boolean);

        let fechaInicioEngordeFinal = master?.SM_PlannedFinishDate;
        if (master?.sm_template_description?.includes('TF')) {
            fechaInicioEngordeFinal = master.sm_plannedtransferdate2 || "";
        } else {
            fechaInicioEngordeFinal = master.SM_PlannedFinishDate;
        }

        return {
            key: master?.id,
            lote: [
                master?.SM_Batch,
                ...children.map((c) => c.SM_Batch),
            ].filter(Boolean).join(', '),
            preCriaPiscina: master?.SM_PreBreedingPool_ID?.Name,
            preCriaPiscinaId: master?.SM_PreBreedingPool_ID?.id,
            preCriaFechaInicio: master?.SM_PlannedPlantingDate,
            preCriaFechaFinal: master?.sm_plannedtransferdate1,
            preEngordePiscina: master?.SM_PreFatteningPond_ID?.Name,
            preEngordePiscinaId: master?.SM_PreFatteningPond_ID?.id,
            preEngordeFechaInicio: master?.sm_plannedtransferdate1,
            preEngordeFechaFinal: master?.sm_plannedtransferdate2,
            engordeFinalPiscinas: finalPonds,
            engordeFinalPiscinasIds: [
                master?.M_Warehouse_ID?.id,
                ...children.map((c) => c.M_Warehouse_ID?.id),
            ].filter(Boolean),
            engordeFinalFechaInicio: fechaInicioEngordeFinal,
            engordeFinalFechaFin: master?.SM_PlannedFinishDate,
            protocolo: master?.sm_template_description,
            pools: [
                master?.SM_PreBreedingPool_ID,
                master?.SM_PreFatteningPond_ID,
                master?.M_Warehouse_ID,
                ...children.map((c) => c.M_Warehouse_ID),
            ].filter(Boolean),
        };
    });

    // Create color map for consistent colors
    const safePools = dataSource.flatMap(d => d.pools);
    const colorMap = useMemo(() => createColorMap(safePools, warehouses), [safePools, warehouses]);

    const columns = [
        {
            title: 'Lote',
            dataIndex: 'lote',
            key: 'lote',
            className: 'lote-header',
            width: 120,
            render: (text) =>
                text?.includes(',') ? text.split(', ').map((l, i) => <div key={i}>{l}</div>) : text,
        },
        {
            title: 'Protocolo',
            dataIndex: 'protocolo',
            key: 'protocolo',
            className: 'protocolo-header',
            width: 200,
        },
        {
            title: 'Pre Cría',
            className: 'pre-cria-header',
            children: [
                {
                    title: '#Piscina',
                    dataIndex: 'preCriaPiscina',
                    key: 'preCriaPiscina',
                    className: 'pre-cria-header',
                    width: 100,
                    render: (text, record) => (
                        <div style={{ backgroundColor: record.preCriaPiscinaId ? colorMap.get(record.preCriaPiscinaId) : 'transparent', padding: '4px' }}>
                            {text}
                        </div>
                    ),
                },
                {
                    title: 'Fecha Inicio',
                    dataIndex: 'preCriaFechaInicio',
                    key: 'preCriaFechaInicio',
                    className: 'pre-cria-header',
                    width: 120,
                },
                {
                    title: 'Fecha Fin',
                    dataIndex: 'preCriaFechaFinal',
                    key: 'preCriaFechaFinal',
                    className: 'pre-cria-header',
                    width: 120,
                },
            ],
        },
        {
            title: 'Pre Engorde',
            className: 'pre-engorde-header',
            children: [
                {
                    title: '#Piscina',
                    dataIndex: 'preEngordePiscina',
                    key: 'preEngordePiscina',
                    className: 'pre-engorde-header',
                    width: 100,
                    render: (text, record) => (
                        <div style={{ backgroundColor: record.preEngordePiscinaId ? colorMap.get(record.preEngordePiscinaId) : 'transparent', padding: '4px' }}>
                            {text}
                        </div>
                    ),
                },
                {
                    title: 'Fecha Inicio',
                    dataIndex: 'preEngordeFechaInicio',
                    key: 'preEngordeFechaInicio',
                    className: 'pre-engorde-header',
                    width: 120,
                },
                {
                    title: 'Fecha Fin',
                    dataIndex: 'preEngordeFechaFinal',
                    key: 'preEngordeFechaFinal',
                    className: 'pre-engorde-header',
                    width: 120,
                },
            ],
        },
        {
            title: 'Engorde Final',
            className: 'engorde-final-header',
            children: [
                {
                    title: '#Piscina(s)',
                    dataIndex: 'engordeFinalPiscinas',
                    key: 'engordeFinalPiscinas',
                    className: 'engorde-final-header',
                    width: 120,
                    render: (pools, record) =>
                        pools && pools.length
                            ? pools.map((pool, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        backgroundColor: record.engordeFinalPiscinasIds[idx] ? colorMap.get(record.engordeFinalPiscinasIds[idx]) : 'transparent',
                                        padding: '4px',
                                        marginBottom: '2px',
                                    }}
                                >
                                    {pool}
                                </div>
                            ))
                            : null,
                },
                {
                    title: 'Fecha Inicio',
                    dataIndex: 'engordeFinalFechaInicio',
                    key: 'engordeFinalFechaInicio',
                    className: 'engorde-final-header',
                    width: 120,
                },
                {
                    title: 'Fecha Fin',
                    dataIndex: 'engordeFinalFechaFin',
                    key: 'engordeFinalFechaFin',
                    className: 'engorde-final-header',
                    width: 120,
                },
            ],
        },
    ];
    const testPools = [
        { id: 1, Name: 'Test Pool', SM_Geolocation: '[{"lat": -1.05, "lng": -80.62}, {"lat": -1.06, "lng": -80.63}]' }
    ];
    const testWarehouses = [
        { id: 2, Name: 'Test Warehouse', SM_Geolocation: '[{"lat": -1.07, "lng": -80.64}, {"lat": -1.08, "lng": -80.65}]' }
    ];
    <PoolMap pools={testPools} warehouses={testWarehouses} />

    return (
        <>
            <PageHeader
                highlightText="Aqualink Camaronera"
                title="Reporte de Operaciones"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Card title="Reporte">
                    <Row gutter={16} style={{ marginBottom: '20px' }}>
                        <Col span={24}>
                            <div className="table-responsive">

                                <Table
                                    columns={columns}
                                    dataSource={dataSource}
                                    loading={loading}
                                    bordered
                                    pagination={false}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            {warehouses.length > 0 && (
                                <PoolMap
                                    pools={safePools}
                                    warehouses={warehouses}
                                    width="100%"
                                    height="500px"
                                    zoom={14}
                                />
                            )}

                        </Col>
                    </Row>
                </Card>
            </Main>
        </>
    );
}

export default ReportOpFarm;