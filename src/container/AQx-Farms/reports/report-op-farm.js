import React, { useEffect, useState } from 'react';
import { Table, Select, Row, Col, Card, Modal, Button, Tooltip } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { Main } from '../../styled.js';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchOperationReport } from '../../../redux/views/batch-report/actionCreator.js';

function ReportOpFarm() {
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

    // --------------------------------------------------
    // 1) Agrupamos las campañas por la maestra
    // --------------------------------------------------
    //    - Si un registro es la maestra (SM_IsMainCampaing = true),
    //      lo guardamos con su 'id' como key del grupo.
    //    - Si un registro es hijo, se asigna al grupo según SM_MasterCampaing_ID.id
    //    - Si no tiene maestra y no es maestra, se queda "solo" en su propio grupo.

    const groupedData = campaigns.reduce((acc, campaign) => {
        // Identificamos el "id" de la campaña maestra
        let masterId;
        if (campaign.SM_IsMainCampaing) {
            masterId = campaign.id;
        } else if (campaign.SM_MasterCampaing_ID?.id) {
            masterId = campaign.SM_MasterCampaing_ID.id;
        } else {
            // Si no es maestra ni tiene maestra, la tratamos como su propio "grupo"
            masterId = campaign.id;
        }

        // Creamos el grupo si no existe
        if (!acc[masterId]) {
            acc[masterId] = {
                master: null,
                children: [],
            };
        }

        // Si es maestra, la guardamos en acc[masterId].master
        if (campaign.SM_IsMainCampaing) {
            acc[masterId].master = campaign;
        } else if (campaign.SM_MasterCampaing_ID?.id === masterId) {
            // Es hijo de esa maestra
            acc[masterId].children.push(campaign);
        } else {
            // Caso especial: no es maestra ni hijo, lo consideramos “master” sin SM_IsMainCampaing
            // (O puedes ponerlo como child si así lo deseas)
            acc[masterId].master = campaign;
        }

        return acc;
    }, {});

    // --------------------------------------------------
    // 2) Convertimos ese objeto en un array de filas
    // --------------------------------------------------
    const dataSource = Object.values(groupedData).map((group) => {
        const master = group.master;
        const children = group.children || [];
      
        // Creamos el arreglo de piscinas para Engorde Final:
        const finalPonds = [
          // Si la maestra también tiene Engorde Final, la incluimos
          master?.M_Warehouse_ID?.identifier,
          // Luego las de las hijas
          ...children.map((c) => c.M_Warehouse_ID?.identifier),
        ].filter(Boolean); // filtramos valores nulos/undefined
      
        // Determinamos la fecha de inicio de Engorde Final según la lógica
        let fechaInicioEngordeFinal = master?.SM_PlannedFinishDate;
        if (master?.sm_template_description?.includes('TF')) {
          fechaInicioEngordeFinal = master.sm_plannedtransferdate2 || "";
        } else {
          fechaInicioEngordeFinal = master.SM_PlannedFinishDate;
        }
      
        console.log(master)
        return {
          key: master?.id,
          lote: master?.SM_Batch,
          // Pre Cría
          preCriaPiscina: master?.SM_PreBreedingPool_ID?.identifier,
          preCriaFechaInicio: master?.SM_PlannedPlantingDate,
          preCriaFechaFinal: master?.sm_plannedtransferdate1,
          // Pre Engorde
          preEngordePiscina: master?.SM_PreFatteningPond_ID?.identifier,
          preEngordeFechaInicio: master?.sm_plannedtransferdate1,
          preEngordeFechaFinal: master?.sm_plannedtransferdate2,
          // Engorde Final: aquí dejamos el arreglo sin unir
          engordeFinalPiscinas: finalPonds,
          engordeFinalFechaInicio: fechaInicioEngordeFinal,
          engordeFinalFechaFin: master?.SM_PlannedFinishDate,
          protocolo: master?.sm_template_description,
        };
      });

    // --------------------------------------------------
    // 3) Definimos las columnas "agrupadas" estilo la tabla de tu imagen
    // --------------------------------------------------
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
    ];
    
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
            </Main>
        </>
    );
}

export default ReportOpFarm;
