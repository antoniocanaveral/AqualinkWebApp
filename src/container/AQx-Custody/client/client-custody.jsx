import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Tabs } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import DonutChartComponent from '../../../components/charts/donut/DonutChartComponent';
import { useSelector } from 'react-redux';
import { selectCustodyOrgsWithWarehouses } from '../../../redux/authentication/selectors';
import Cookies from 'js-cookie';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';

const { TabPane } = Tabs;

function ClientCustody() {

    const [showChart, setShowChart] = useState(false);
    const [selectedFarmOrg, setSelectedFarmOrg] = useState(null)
    const custodyOrgsWithWarehouses = useSelector(selectCustodyOrgsWithWarehouses);
    console.log("orgcon pool", custodyOrgsWithWarehouses)

    const organizations = useSelector((state) => state.auth.custodyOrgs);

    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
    };



    useEffect(() => {
        const farm = custodyOrgsWithWarehouses.find(org => org.orgId === selectedOrg);
        console.log(farm)
        setSelectedFarmOrg(farm)
    }, [selectedOrg]);

    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: custodyOrgsWithWarehouses.map(org => ({
                value: org.orgId,
                label: org.orgName,
                email: org.orgEmail,
            })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Farm',
            value: selectedOrg || undefined,
        },
    ] : [];

    const combinedSelectOptions = [
        ...farmsSelectOptions
    ];



    const clientInfo = [
        { key: '1', categoria: 'Razón Social', valor: selectedFarmOrg?.orgName || 'N/A' },
        { key: '2', categoria: 'RUC', valor: selectedFarmOrg?.TaxID || 'N/A' },
        { key: '3', categoria: 'Dirección Fiscal', valor: `${selectedFarmOrg?.SM_LocationName}, ${selectedFarmOrg?.City_Identifier}` },
        { key: '4', categoria: 'Representante Legal', valor: selectedFarmOrg?.name_rl || 'N/A' },
        { key: '5', categoria: 'CC (RL)', valor: selectedFarmOrg?.taxid_rl || 'N/A' },
        { key: '6', categoria: 'Correo Electrónico (RL)', valor: selectedFarmOrg?.email_rl || 'N/A' },
        { key: '7', categoria: 'Teléfono (Convencional)', valor: selectedFarmOrg?.Phone || 'N/A' },
        { key: '8', categoria: 'Teléfono (Celular)', valor: selectedFarmOrg?.Phone2 || 'N/A' },
        { key: '9', categoria: 'Código SCI', valor: selectedFarmOrg?.SM_CodigoVAP || 'N/A' },
        { key: '11', categoria: 'Nombre de Cliente', valor: selectedFarmOrg?.AD_Client_Identifier },
        { key: '12', categoria: 'Código Aqualink', valor: selectedFarmOrg?.Value || 'N/A' },
    ];






    const columns = [
        {
            title: 'Categoría',
            dataIndex: 'categoria',
            key: 'categoria',
            width: '70%',
        },
        {
            title: 'Valor',
            dataIndex: 'valor',
            key: 'valor',
            render: (text) => text || 'N/A',
            width: '30%',
        },
    ];

  

   

    const poolTypesData = selectedFarmOrg?.pools?.reduce((acc, pool) => {
        const type = pool.poolType?.identifier;
        acc[type] = (acc[type] || 0) + (pool.poolSize || 0);
        return acc;
    }, {});


    const data = Object.entries(poolTypesData || {}).map(([label, value]) => ({
        label,
        value
    }));


    
    const farmInfo = [
        { key: '1', categoria: 'Provincia', valor: selectedFarmOrg?.Region_Identifier || 'N/A' },
        { key: '2', categoria: 'Cantón', valor: selectedFarmOrg?.City_Identifier || 'N/A' },
        { key: '3', categoria: 'Tipo de suelo', valor: selectedFarmOrg?.SM_MainlandOrIsland_Identifier || 'N/A' },
        { key: '4', categoria: 'Acuerdo Ministerial', valor: selectedFarmOrg?.SM_MinisterialAgreement || 'N/A' },
        { key: '5', categoria: 'Certificado de Inocuidad', valor: selectedFarmOrg?.SM_SafetyCertificate || 'N/A' },
    ];



    const waterVolumeData = selectedFarmOrg?.pools?.reduce((acc, pool) => {
        const type = pool.poolType?.identifier || 'Desconocido';
        const volume = (pool.SM_OppDepth || 0) * (pool.poolSize * 10000);

        acc[type] = (acc[type] || 0) + volume;
        return acc;
    }, {});

    const waterVolumeChartData = Object.entries(waterVolumeData || {}).map(([label, value]) => ({
        label,
        value
    }));


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowChart(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <PageHeader
                highlightText="Aqualink Administración"
                title="Ficha de Empacadora"
                selectOptions={combinedSelectOptions}
                selectedOrg={selectedOrg}
            />
            <Main>
                <Tabs defaultActiveKey="1" type="line">
                    {/* Tab 1: Información */}
                    <TabPane tab="Información" key="1">
                        <Row gutter={25}>
                            <Col xl={11} xs={24} xxl={10} style={{ display: 'flex' }}>
                                <Suspense
                                    fallback={
                                        <Cards headless>
                                            <Skeleton active />
                                        </Cards>
                                    }
                                >
                                    <AqualinkMaps
                                        width={'100%'}
                                        height={
                                            window.innerWidth >= 2000 ? '600px' :
                                                '305px'
                                        }
                                        selectedOrg={selectedOrg}
                                        custodyOrgsWithWarehouses={custodyOrgsWithWarehouses} // Pasa custodyOrgsWithWarehouses como prop
                                    />
                                </Suspense>
                            </Col>
                            <Col xl={13} xs={24} style={{ display: "flex" }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Información de Camaronera" size="large">
                                        <Table
                                            columns={columns}
                                            dataSource={clientInfo}
                                            pagination={false}
                                            bordered
                                        />
                                    </Cards>
                                </Suspense>
                            </Col>
                        </Row>
                        <Row gutter={[10, 0]} equal-heights>
                            <Col xl={24} xs={24} style={{ display: 'flex' }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Información de Complementaria" size="large">
                                        <Table
                                            columns={columns}
                                            dataSource={farmInfo}
                                            pagination={false}
                                            bordered
                                        />
                                    </Cards>
                                </Suspense>
                            </Col>
                        </Row>
                    </TabPane>

                </Tabs>
            </Main>
        </>
    );
}

export default ClientCustody;
