import React, { useEffect, useState } from 'react';
import { Table, Select, Row, Col, Card, Modal, Button, Tooltip } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { Main } from '../../styled.js';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchOperationReport } from '../../../redux/views/batch-report/actionCreator.js';
import TankCardMonitoring from './TankCardMonitoring.js';

function ReportOpMonitoring() {
    const dispatch = useDispatch();
    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
    const organizations = useSelector((state) => state.auth.farmsOrgs);
    const { campaigns, loading, error } = useSelector(state => state.batchReport);

    useEffect(() => {
        dispatch(fetchOperationReport());
    }, [dispatch, selectedOrg]);

    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
        Cookies.remove('poolId');
    };

    const farmsSelectOptions = organizations.length > 0
        ? [
            {
                options: organizations.map(org => ({
                    value: org.orgId,
                    label: org.orgName,
                    email: org.orgEmail,
                })),
                onChange: handleOrgChange,
                placeholder: 'Seleccione una Farm',
                value: selectedOrg || undefined,
            },
        ]
        : [];

    const combinedSelectOptions = [...farmsSelectOptions];









    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);

    const showModal = (record) => {
        setSelectedRecord(record);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedRecord(null);
    };

    const calculateCycleProgress = (startDate, endDate) => {
        if (!startDate || !endDate) return 0;

        const start = new Date(startDate);
        const end = new Date(endDate);
        const now = new Date();


        if (now < start) return 0;


        if (now > end) return 100;

        const totalDuration = end.getTime() - start.getTime();
        const elapsed = now.getTime() - start.getTime();
        const progress = (elapsed / totalDuration) * 100;

        return Math.round(progress);
    };


    const mapRecordToTankCardData = (record) => {
        const lastFeeding = [...(record.feedingdata_realjson || [])]
            .sort((a, b) => b.sm_index - a.sm_index)[0] || {};

        const getClassification = (r) => {
            if (r.SM_Category30_40) return "30-40";
            if (r.SM_Category40_50) return "40-50";
            if (r.SM_Category50_60) return "50-60";
            if (r.SM_Category60_70) return "60-70";
            if (r.SM_Category70_80) return "70-80";
            if (r.SM_Category80_100) return "80-100";
            if (r.SM_Category100_120) return "100-120";
            if (r.SM_Category120_150) return "120-150";
            return null;
        };

        const porcentaje = calculateCycleProgress(
            record.SM_PlannedPlantingDate,
            record.SM_PlannedFinishDate
        );

        return {
            nombreCamaronara: record.organization_name,
            piscinaEngorde: record.M_Warehouse_ID?.identifier || 'NA',
            loteID: record.SM_Batch,
            porcentaje,
            inicioCultivo: record.SM_PlannedPlantingDate,
            finCultivo: record.SM_PlannedFinishDate,
            biomasaEstimada: record.SM_Biomass || 'NA',
            supervivenciaReal: lastFeeding.superv || 'NA',
            fcaReal: lastFeeding.fca_real || 'NA',
            clasificacionPesca: getClassification(record) || 'NA',
            lbsPorHa: record.lbsPorHa || 'NA',
            coordinacionPesca: record.sm_coordination_name || 'NA',
        };
    };



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




    const sortedCampaigns = [...campaigns].sort((a, b) => {
        const getGroupKey = (c) => c.SM_MasterCampaing_ID?.id || c.id;

        const groupA = getGroupKey(a);
        const groupB = getGroupKey(b);

        if (groupA !== groupB) {
            return groupA - groupB; // <-- comparación numérica correcta
        }


        if (a.SM_IsMainCampaing && !b.SM_IsMainCampaing) return -1;
        if (!a.SM_IsMainCampaing && b.SM_IsMainCampaing) return 1;

        return 0;
    });


    const dataSource = sortedCampaigns.map((campaign) => {
        const isTF = campaign.sm_template_description?.includes('TF');
        const engordeFechaInicio = isTF
            ? campaign.sm_plannedtransferdate2 || ''
            : campaign.SM_PlannedFinishDate;

        return {
            key: campaign.id,
            lote: campaign.SM_Batch,
            preCriaPiscina: campaign.SM_PreBreedingPool_ID?.identifier,
            preCriaFechaInicio: campaign.SM_PlannedPlantingDate,
            preCriaFechaFinal: campaign.sm_plannedtransferdate1,
            preEngordePiscina: campaign.SM_PreFatteningPond_ID?.identifier,
            preEngordeFechaInicio: campaign.sm_plannedtransferdate1,
            preEngordeFechaFinal: campaign.sm_plannedtransferdate2,
            engordeFinalPiscinas: [campaign.M_Warehouse_ID?.identifier].filter(Boolean),
            engordeFinalFechaInicio: engordeFechaInicio,
            engordeFinalFechaFin: campaign.SM_PlannedFinishDate,
            protocolo: campaign.sm_template_description,

            organization_name: campaign.organization_name,
            M_Warehouse_ID: campaign.M_Warehouse_ID,
            SM_Batch: campaign.SM_Batch,
            SM_PlannedPlantingDate: campaign.SM_PlannedPlantingDate,
            SM_PlannedFinishDate: campaign.SM_PlannedFinishDate,
            SM_Biomass: campaign.SM_Biomass,
            sm_coordination_name: campaign.sm_coordination_name,
            sm_cycleprogress: campaign.sm_cycleprogress, // porcentaje de avance, si lo tienes
            lbsPorHa: campaign.lbsPorHa, // si existe
            feedingdata_realjson: campaign.feedingdata_realjson || [],


            SM_Category30_40: campaign.SM_Category30_40,
            SM_Category40_50: campaign.SM_Category40_50,
            SM_Category50_60: campaign.SM_Category50_60,
            SM_Category60_70: campaign.SM_Category60_70,
            SM_Category70_80: campaign.SM_Category70_80,
            SM_Category80_100: campaign.SM_Category80_100,
            SM_Category100_120: campaign.SM_Category100_120,
            SM_Category120_150: campaign.SM_Category120_150,
        };
    });





    const columns = [
        {
            title: 'Lote',
            dataIndex: 'lote',
            key: 'lote',
            className: 'lote-header', // ✅ Nueva clase
            width: 120,
        },
        {
            title: 'Protocolo',
            dataIndex: 'protocolo',
            key: 'protocolo',
            className: 'protocolo-header', // ✅ Nueva clase
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
                    render: (pools) =>
                        pools && pools.length
                            ? pools.map((pool, idx) => <div key={idx}>{pool}</div>)
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
        {
            title: 'Acciones',
            key: 'acciones',
            fixed: 'right',
            width: 100,
            render: (_, record) => (
                <Tooltip title="Ver detalle de piscina">
                    <Button type="link" onClick={() => showModal(record)}>
                        Ver
                    </Button>
                </Tooltip>
            ),
        }

    ];

    return (
        <>
            <PageHeader
                highlightText="Aqualink Monitoreo"
                title="Lotes Activos"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Card title="Reporte">
                    <Row gutter={16} style={{ marginBottom: '20px' }}>
                        <Col span={24}>
                            <Table
                                columns={columns}
                                dataSource={dataSource}
                                loading={loading}
                                bordered
                                pagination={false}
                            />
                        </Col>
                    </Row>
                </Card>
                <Modal
                    title="Detalle de Piscina"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    width={400}
                >
                    {selectedRecord && (
                        <TankCardMonitoring data={mapRecordToTankCardData(selectedRecord)} />
                    )}
                </Modal>

            </Main>
        </>
    );
}

export default ReportOpMonitoring;
