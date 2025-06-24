import React, { useEffect, useState } from 'react';
import { Table, Row, Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLabanalysis } from '../../../redux/labanalysis/actionCreator';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Cookies from 'js-cookie';


const LaboratoryViewCustody = () => {
    const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName'));
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
    const dispatch = useDispatch();
    const organizations = useSelector((state) => state.auth.farmsOrgs);
    const { labanalysisList, loading } = useSelector((state) => state.labanalysis);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [selectedData, setSelectedData] = useState([]);



    useEffect(() => {
        dispatch(fetchLabanalysis());
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
    const openModal = (title, data) => {
        setModalTitle(title);
        setSelectedData(data);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedData([]);
    };

    const columns = [
        { title: 'Organización', dataIndex: 'organization_name', key: 'organization_name' },
        { title: 'Lote ID', dataIndex: 'SM_FishingNotification', key: 'SM_FishingNotification' },
        { title: 'Fecha Recepción', dataIndex: 'registration_date', key: 'registration_date' },
        { title: 'Volumen (kg)', dataIndex: 'SM_FishingVolume', key: 'SM_FishingVolume', render: (vol) => `${vol} kg` },

        {
            title: 'Test Cocción',
            dataIndex: 'test_coccion',
            key: 'test_coccion',
            render: (data) => data ? <Button onClick={() => openModal("Test Cocción", data)}>Ver</Button> : 'N/A'
        },
        {
            title: 'Organoléptico',
            dataIndex: 'organoleptico',
            key: 'organoleptico',
            render: (data) => data ? <Button onClick={() => openModal("Organoléptico", data)}>Ver</Button> : 'N/A'
        },
        {
            title: 'Sulfitos',
            dataIndex: 'sulfitos',
            key: 'sulfitos',
            render: (data) => data ? <Button onClick={() => openModal("Sulfitos", data)}>Ver</Button> : 'N/A'
        },
        {
            title: 'Microbiológico',
            dataIndex: 'microbiologicos',
            key: 'microbiologicos',
            render: (data) => data ? <Button onClick={() => openModal("Microbiológico", data)}>Ver</Button> : 'N/A'
        },
        {
            title: 'Químico',
            dataIndex: 'quimicos',
            key: 'quimicos',
            render: (data) => data ? <Button onClick={() => openModal("Químico", data)}>Ver</Button> : 'N/A'
        },
    ];

    const modalColumns = [
        { title: 'Parámetro', dataIndex: 'parameter', key: 'parameter' },
        { title: 'Valor', dataIndex: 'value', key: 'value' },
        { title: 'Unidad', dataIndex: 'unit', key: 'unit' },
        { title: 'Rango', dataIndex: 'range', key: 'range' },
    ];

    return (
        <>

            <PageHeader
                highlightText="Aqualink Empacadora"
                title="Análisis de Laboratorio"
                routes={PageRoutes}
                organizations={organizations}
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Row gutter={25}>
                    <Cards headless>
                        <Table
                            columns={columns}
                            dataSource={labanalysisList}
                            loading={loading}
                            pagination={{ pageSize: 5 }}
                            rowKey="id"
                            style={{ marginTop: '20px' }}
                        />
                    </Cards>
                </Row>
            </Main>

            <Modal
                title={`Detalles - ${modalTitle}`}
                visible={modalVisible}
                onCancel={closeModal}
                footer={[<Button key="close" onClick={closeModal}>Cerrar</Button>]}
                width={700}
            >
                {selectedData.length > 0 ? (
                    <Table
                        columns={modalColumns}
                        dataSource={selectedData.map((item, index) => ({ ...item, key: index }))}
                        pagination={false}
                    />
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </Modal>
        </>
    );
};

export default LaboratoryViewCustody;
