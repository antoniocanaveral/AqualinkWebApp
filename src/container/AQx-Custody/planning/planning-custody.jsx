

import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Table, Button, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import ProjectionKgPanel from '../../AQx-Farms/panel/charts/projections-kg-panel';
import TankCard from '../panel/components/TankCard';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchCoordinationInfo } from '../../../redux/views/coords/actionCreator';

function PlanningCustody() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTank, setSelectedTank] = useState(null);


    const dispatch = useDispatch();
    const { coordinationInfo, coordInfoLoading, coordInfoError } = useSelector(state => state.view_coords);

    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
    const loading = useSelector((state) => state.view_coords.coordInfoLoading);
    const error = useSelector((state) => state.view_coords.coordInfoError);

    const organizations = useSelector((state) => state.auth.farmsOrgs);
    const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);

    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
    };

    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: custodyOrgs.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Empacadora',
            value: selectedOrg || undefined,
        },
    ] : [];

    const combinedSelectOptions = [...farmsSelectOptions];


    useEffect(() => {
        dispatch(fetchCoordinationInfo());
    }, [dispatch, selectedOrg]);




    let processedData = {};
    coordinationInfo.forEach(record => {
        const identifier = record?.SM_Coordination_ID?.identifier;
        if (identifier && !processedData[identifier]) {
            processedData[identifier] = record;
        }
    });
    processedData = Object.values(processedData); // Convertir a array


    const filterDataByType = (type) => processedData
        .filter(record => record.SM_OrgType === type)
        .map(record => ({
            key: record.SM_Coordination_ID.identifier,
            lote: record.SM_Coordination_ID.identifier,
            fecha: record.SM_FishingDate.split('T')[0], // Formato YYYY-MM-DD
            peso: `${record.SM_FishingVolume} kg`,
            estado: record.SM_CoordinationStatus.identifier,
            fullData: record
        }));

    const dataGIV = filterDataByType('GIV');
    const dataGPA = filterDataByType('GPA');
    const dataIND = filterDataByType('IND');


    const columns = [
        { title: "Lote", dataIndex: "lote", key: "lote" },
        { title: "Fecha", dataIndex: "fecha", key: "fecha" },
        { title: "Peso Estimado", dataIndex: "peso", key: "peso" },
        { title: "Estado", dataIndex: "estado", key: "estado" },
        {
            title: "Ver",
            key: "action",
            render: (_, record) => (
                <Button type="primary" onClick={() => showDetails(record)}>
                    Ver
                </Button>
            ),
        },
    ];




    const showDetails = (record) => {
        setSelectedTank(record);
        setIsModalVisible(true);

    };


    const handleOk = () => setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);


    return (
        <>
            <PageHeader
                title="Planning"
                highlightText="Aqualink Empacadora"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />

            <Main>
                <Row gutter={25}>
                    <Col xl={12} xs={24} xxl={24} style={{ display: 'flex' }}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <ProjectionKgPanel type="CUSTODY" coordinationInfo={coordinationInfo} loading={loading} error={error} selectedOrg={selectedOrg} />
                        </Suspense>
                    </Col>
                    <Col xl={12} xs={24} style={{ display: 'flex' }}>
                        <Cards title="Proyecciones de cosecha fincas GIV" size="large">
                            <div className="table-responsive">
                                <Table
                                    dataSource={dataGIV}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    bordered
                                />
                            </div>
                        </Cards>
                    </Col>
                </Row>
                <Row gutter={25}>
                    <Col xl={12} xs={24} style={{ display: 'flex' }}>
                        <Cards title="Proyecciones de cosecha fincas GPA (externos)" size="large">
                            <div className="table-responsive">
                                <Table
                                    dataSource={dataGPA}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    bordered
                                />
                            </div>
                        </Cards>
                    </Col>
                    <Col xl={12} xs={24} style={{ display: 'flex' }}>
                        <Cards title="Proyecciones de cosecha fincas IND (externos)" size="large">
                            <div className="table-responsive">
                                <Table
                                    dataSource={dataIND}
                                    columns={columns}
                                    pagination={{ pageSize: 5 }}
                                    bordered
                                />
                            </div>
                        </Cards>
                    </Col>
                </Row>
                {/* Modal para detalles del tanque */}
                <Modal
                    title="Detalles del Lote"
                    visible={isModalVisible}
                    onCancel={handleCancel}
                    footer={null} // Eliminamos el footer por defecto para personalizarlo
                    width={350} // Ajusta el ancho según el diseño de TankCard
                >
                    {selectedTank ? (
                        (() => {

                            const clasificacionReportada =
                                selectedTank.fullData.SM_Category30_40 ? '30-40' :
                                    selectedTank.fullData.SM_Category40_50 ? '40-50' :
                                        selectedTank.fullData.SM_Category50_60 ? '50-60' :
                                            selectedTank.fullData.SM_Category60_70 ? '60-70' :
                                                selectedTank.fullData.SM_Category70_80 ? '70-80' :
                                                    selectedTank.fullData.SM_Category80_100 ? '80-100' :
                                                        selectedTank.fullData.SM_Category100_120 ? '100-120' :
                                                            selectedTank.fullData.SM_Category120_150 ? '120-150' :
                                                                selectedTank.fullData.SM_RequestedPL || 'N/A';


                            const estado = selectedTank.fullData.SM_CoordinationStatus?.identifier
                                ? selectedTank.fullData.SM_CoordinationStatus.identifier.replace(/[<>]/g, '')
                                : 'Desconocido';
                            console.log(selectedTank)
                            return (
                                <TankCard data={{
                                    id: selectedTank.fullData.id,
                                    ci_id: selectedTank.fullData.ci_id,
                                    nombreCamaronera: selectedTank.fullData.org_name || 'N/A',
                                    codigoAQLK: selectedTank.fullData.org_value || 'N/A',
                                    loteID: selectedTank.fullData.SM_Coordination_ID?.identifier || 'N/A',
                                    estado,
                                    fechaPesca: selectedTank.fullData.SM_FishingDate ? new Date(selectedTank.fullData.SM_FishingDate).toLocaleDateString('es-ES') : 'N/A',
                                    piscina: selectedTank.fullData.warehouse_name || 'N/A',
                                    volumenProgramado: selectedTank.fullData.SM_FishingVolume ? `${selectedTank.fullData.SM_FishingVolume} lbs` : 'N/A',
                                    tipoCosecha: selectedTank.fullData.SM_CoordinationType?.identifier || 'N/A',
                                    clasificacionReportada
                                }} />
                            );
                        })()
                    ) : (
                        <Typography.Text>No se encontraron detalles para este lote.</Typography.Text>
                    )}
                </Modal>

            </Main>
        </>
    );
}

export default PlanningCustody;
