import React, { useEffect, useState } from 'react';
import { Table, Row, Col, Modal, Button, Typography, Divider, Spin, Space, Descriptions } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLotes } from '../../../redux/lote/actionCreator';
import Cookies from 'js-cookie';

const { Title, Text } = Typography;

const LoteViewCustody = () => {
    const dispatch = useDispatch();
    const { lotes, loading, error } = useSelector((state) => state.lote);
    const organizations = useSelector((state) => state.auth.custodyOrgs);
    const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName'));
    const [selectedLote, setSelectedLote] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [totalEntero, setTotalEntero] = useState(0);
    const [totalCola, setTotalCola] = useState(0);

    const PageRoutes = [
        {
            path: '/custody',
            breadcrumbName: selectedOrg,
        },
        {
            path: 'first',
            breadcrumbName: 'Coordinaciones',
        },
    ];
    useEffect(() => {
        if (selectedOrg) {
            dispatch(fetchLotes());
        }
    }, [dispatch, selectedOrg]);

    const handleOrgChange = (orgId) => {
        setSelectedOrg(orgId);
        const selectedOrg = organizations.find(org => org.orgId === orgId);
        const orgEmail = selectedOrg ? selectedOrg.orgEmail : '';
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
        Cookies.remove('poolId');
    };


    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: organizations.map(org => ({
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

    const handleViewDetails = (record) => {
        setSelectedLote(record);
        setModalVisible(true);

        // Calcular Volumen Total de Entero
        const enteroSum = ['30_40', '40_50', '50_60', '60_70', '70_80', '80_100', '100_120', '120_150']
            .reduce((acc, category) => acc + (record[`sm_hocategory${category}`] || 0), 0);
        setTotalEntero(enteroSum);

        // Calcular Volumen Total de Cola
        const colaSum = ['21_25', '26_30', '31_35', '36_40', '41_50', '51_60', '61_70', '71_90', '100_120', '120_150']
            .reduce((acc, category) => acc + (record[`sm_hl${category}`] || 0), 0);
        setTotalCola(colaSum);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedLote(null);
    };

    const formatDateTime = (dateString) => {
        return dateString ? new Date(dateString).toLocaleString() : 'N/A';
    };

    const columns = [
        {
            title: 'Fecha de Llegada',
            dataIndex: 'sm_arrivaltime',
            key: 'sm_arrivaltime',
            render: formatDateTime,
        },
        { title: 'Lote ID', dataIndex: ['SM_Coordination_ID', 'identifier'], key: 'SM_Coordination_ID', render: (text) => <Text>{text}</Text> },
        {
            title: 'Hora de Inicio',
            dataIndex: 'sm_processstarttime',
            key: 'sm_processstarttime',
            render: formatDateTime,
        },
        {
            title: 'Basura (kg)',
            dataIndex: 'sm_waste',
            key: 'sm_waste',
            render: (text) => <Text>{text} kg</Text>,
        },
        {
            title: 'Acciones',
            key: 'acciones',
            render: (_, record) => (
                <Button type="primary" onClick={() => handleViewDetails(record)}>
                    Ver Detalles
                </Button>
            ),
        },
    ];

    return (
        <>
            <PageHeader
                highlightText="Aqualink Empacadora"
                title="Vista de Lotes de Empaque"
                organizations={organizations}
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Row gutter={25}>
                    <Col span={24}>
                        <Cards title="Listado de Lotes de Empaque">
                            {loading ? (
                                <Spin size="large" />
                            ) : error ? (
                                <Text type="danger">Error al cargar los lotes: {error}</Text>
                            ) : (
                                <Table dataSource={lotes} columns={columns} pagination={{ pageSize: 5 }} rowKey="id" bordered />
                            )}
                        </Cards>
                    </Col>
                </Row>
            </Main>

            {selectedLote && (
                <Modal
                    title={`Detalles del Lote ${selectedLote.SM_Coordination_ID.identifier}`}
                    visible={modalVisible}
                    onCancel={closeModal}
                    footer={[<Button key="close" type="primary" onClick={closeModal}>Cerrar</Button>]}
                    width={800}
                >
                    <div style={{ padding: '20px' }}>
                        <Row gutter={[16, 16]}>
                            <Col span={24}><Title style={{ color: '#0372ce' }} level={4}>Información General</Title></Col>
                            <Col xs={24} sm={12}><Text><strong>Fecha de Llegada:</strong> {formatDateTime(selectedLote.sm_arrivaltime)}</Text></Col>
                            <Col xs={24} sm={12}><Text><strong>Hora de Inicio:</strong> {formatDateTime(selectedLote.sm_processstarttime)}</Text></Col>
                            <Col xs={24} sm={12}><Text><strong>Volumen a Proceso:</strong> {selectedLote.sm_processvolume}</Text></Col>
                            <Col xs={24} sm={12}><Text><strong>Basura:</strong> {selectedLote.sm_waste} kg</Text></Col>
                        </Row>

                        <Divider />

                        {/* Sección: Detalles de Entero y Cola */}
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={12}>
                                <Title level={4} style={{ color: '#0372ce' }}>Detalles de Entero</Title>
                                <Col xs={24} sm={24}>
                                    <strong level={5} >Volumen Total de Entero: </strong>
                                    <Text>{totalEntero} lbs</Text>
                                </Col>
                                <br />
                                <Descriptions bordered size="small" column={2}>
                                    {['30_40', '40_50', '50_60', '60_70', '70_80', '80_100', '100_120', '120_150'].map((category) => (
                                        <Descriptions.Item key={category} label={`${category.replace('_', '/')}`}>
                                            {selectedLote[`sm_hocategory${category}`] || 0} lbs
                                        </Descriptions.Item>
                                    ))}
                                </Descriptions>
                            </Col>

                            <Col xs={24} md={12}>
                                <Title level={4} style={{ color: '#0372ce' }}>Detalles de Cola</Title>
                                <Col xs={24} sm={24}>
                                    <strong level={5} >Volumen Total de Cola: </strong>
                                    <Text>{totalCola} lbs</Text>
                                </Col>
                                <br />
                                <Descriptions bordered size="small" column={2}>
                                    {['21_25', '26_30', '31_35', '36_40', '41_50', '51_60', '61_70', '71_90', '100_120', '120_150'].map((category) => (
                                        <Descriptions.Item key={category} label={`${category.replace('_', '/')}`}>
                                            {selectedLote[`sm_hl${category}`] || 0} lbs
                                        </Descriptions.Item>
                                    ))}
                                </Descriptions>
                            </Col>
                        </Row>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default LoteViewCustody;
