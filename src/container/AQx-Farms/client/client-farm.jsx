import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Tabs } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Main } from '../../styled';
import DonutChartComponent from '../../../components/charts/donut/DonutChartComponent';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import Cookies from 'js-cookie';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';

const { TabPane } = Tabs;

function ClientFarm() {

    const [showChart, setShowChart] = useState(false);
    const [selectedFarmOrg, setSelectedFarmOrg] = useState(null)
    const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);
    console.log("orgcon pool", farmsOrgsWithPools)

    const organizations = useSelector((state) => state.auth.farmsOrgs);

    const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

    const handleOrgChange = (orgId, orgEmail) => {
        setSelectedOrg(orgId);
        Cookies.set('orgId', orgId);
        Cookies.set('orgEmail', orgEmail || '');
    };



    useEffect(() => {
        const farm = farmsOrgsWithPools.find(org => org.orgId === selectedOrg);
        setSelectedFarmOrg(farm)
    }, [selectedOrg]);

    const farmsSelectOptions = organizations.length > 0 ? [
        {
            options: farmsOrgsWithPools.map(org => ({
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



    const infrastructureData = selectedFarmOrg?.pools?.map((pool, index) => ({
        key: index + 1,
        identificador: pool.poolName,
        extension: `${pool.poolSize} Ha`,
        profundidadOperativa: `${pool.SM_OppDepth || 0} mts`,
        profundidadSiembra: `${pool.plantingDepth} mts`,
        profundidadPesca: `${pool.sm_transferdepth} mts`,
        sistemaProduccion: selectedFarmOrg?.SM_ProductionType_Identifier || 'N/A',
        metodoAlimentacion: `${pool.feeding_method}`,
        aireacionHpHa: `${pool.sm_mechanicalaeration} `,
        aireacionHpTotal: `${pool.sm_mechanicalaeration * pool.poolSize} `,
        ras: `${selectedFarmOrg?.water_system === "RECIRCULATION" ? "✅" : ""} `,

        aguaVolOp: `${pool.SM_OppDepth * (pool.poolSize * 10000)} m³`,
        aguaVolSiembra: `${pool.plantingDepth * (pool.poolSize * 10000)} m³`,
        aguaVolPesca: `${pool.sm_transferdepth * (pool.poolSize * 10000)} m³`,
    })) || [];


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

    const infrastructureColumns = [
        {
            title: 'ID',
            dataIndex: 'identificador',
            key: 'identificador',
            width: '10%',
        },
        {
            title: 'Extensión',
            dataIndex: 'extension',
            key: 'extension',
            width: '10%',
        },
        {
            title: 'Profundidad Operativa',
            dataIndex: 'profundidadOperativa',
            key: 'profundidadOperativa',
            width: '10%',
        },
        {
            title: 'Profundidad Siembra',
            dataIndex: 'profundidadSiembra',
            key: 'profundidadSiembra',
            width: '10%',
        },
        {
            title: 'Profundidad Pesca',
            dataIndex: 'profundidadPesca',
            key: 'profundidadPesca',
            width: '10%',
        },
        {
            title: 'Sistema Producción',
            dataIndex: 'sistemaProduccion',
            key: 'sistemaProduccion',
            width: '10%',
        },



        {
            title: 'Aireación Hp/Ha',
            dataIndex: 'aireacionHpHa',
            key: 'aireacionHpHa',
            width: '10%',
        },
        {
            title: 'Aireación Hp/Total',
            dataIndex: 'aireacionHpTotal',
            key: 'aireacionHpTotal',
            width: '10%',
        },

        {
            title: 'Método de Alimentación',
            dataIndex: 'metodoAlimentacion',
            key: 'metodoAlimentacion',
            width: '10%',
        },
        {
            title: 'RAS',
            dataIndex: 'ras',
            key: 'ras',
            width: '5%',
        },
        {
            title: 'Vol. Agua Operativa',
            dataIndex: 'aguaVolOp',
            key: 'aguaVolOp',
            width: '10%',
        },
        {
            title: 'Volumen Siembra',
            dataIndex: 'aguaVolSiembra',
            key: 'aguaVolSiembra',
            width: '10%',
        },
        {
            title: 'Volumen Pesca',
            dataIndex: 'aguaVolPesca',
            key: 'aguaVolPesca',
            width: '10%',
        },
    ];


    const maxNodos = selectedFarmOrg?.pools?.reduce((max, pool) => {
        return Math.max(max, pool.geoLocation?.length || 0);
    }, 0) || 0;

    const geolocationData = selectedFarmOrg?.pools?.map((pool, index) => {
        const nodoData = {};

        for (let i = 0; i < maxNodos; i++) {
            nodoData[`nodo${i + 1}`] = pool.geoLocation?.[i]
                ? `${pool.geoLocation[i].latitude}, ${pool.geoLocation[i].longitude}`
                : 'N/A';
        }

        return {
            key: index + 1,
            identificador: pool.poolName,
            extension: `${pool.poolSize} Ha`,
            ...nodoData
        };
    }) || [];

    const poolTypesData = selectedFarmOrg?.pools?.reduce((acc, pool) => {
        const type = pool.poolType?.identifier;

        if (type && type !== "GENERAL") {
            acc[type] = (acc[type] || 0) + (pool.poolSize || 0);
        }

        return acc;
    }, {});



    const data = Object.entries(poolTypesData || {}).map(([label, value]) => ({
        label,
        value: value ? Number(value) : 0
    }));



    const preCrias = poolTypesData?.["PC"] || 0;
    const engorde = poolTypesData?.["E"] || 0;
    const preEngorde = poolTypesData?.["PE"] || 0;
    const total = preCrias + engorde + preEngorde;




    const farmInfo = [
        { key: '1', categoria: 'Provincia', valor: selectedFarmOrg?.Region_Identifier || 'N/A' },
        { key: '2', categoria: 'Cantón', valor: selectedFarmOrg?.City_Identifier || 'N/A' },
        { key: '3', categoria: 'Tipo de suelo', valor: selectedFarmOrg?.SM_MainlandOrIsland_Identifier || 'N/A' },
        { key: '4', categoria: 'Acuerdo Ministerial', valor: selectedFarmOrg?.SM_MinisterialAgreement || 'N/A' },
        { key: '5', categoria: 'Certificado de Inocuidad', valor: selectedFarmOrg?.SM_SafetyCertificate || 'N/A' },
        { key: '8', categoria: 'Extensión Productiva (Total)', valor: total + " Has" },
        { key: '9', categoria: 'Extensión Pre Crias', valor: preCrias + " Has" },
        { key: '10', categoria: 'Extensión Piscinas Engorde', valor: engorde ? Number(engorde).toFixed(2) + " Has" : "-" },
        { key: '11', categoria: 'Extensión Piscinas Pre Engorde', valor: preEngorde + " Has" },
    ];


    const waterVolumeData = selectedFarmOrg?.pools?.reduce((acc, pool) => {
        const type = pool.poolType?.identifier;

        if (type && type !== "GENERAL") {
            const volume = (pool.SM_OppDepth || 0) * (pool.poolSize * 10000);
            acc[type] = (acc[type] || 0) + volume;
        }

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
                title="Ficha de Camaronera"
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
                                        farmsOrgsWithPools={farmsOrgsWithPools} // Pasa farmsOrgsWithPools como prop
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
                            <Col xl={14} xs={24} style={{ display: 'flex' }}>
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
                            <Col xl={10} xs={24} style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Relación Has por tipo de Piscina" size="large" style={{ marginBottom: 0 }}>
                                        <div style={{ width: "85%", margin: "auto" }}>
                                            {showChart && (
                                                <DonutChartComponent
                                                    data={data}
                                                    titleText="Relación Has"
                                                    subtitleText="Por Piscina"
                                                    height={200}
                                                    width={200}
                                                />
                                            )}
                                        </div>

                                    </Cards>
                                </Suspense>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Volumen de agua operativo por tipo de piscina" size="large" style={{ flex: 1, marginTop: 0 }}>
                                        <div style={{ width: "85%", margin: "auto" }}>
                                            {showChart && (
                                                <DonutChartComponent
                                                    data={waterVolumeChartData}
                                                    titleText="Volumen de Agua"
                                                    subtitleText="Por Tipo de Piscina"
                                                    height={200}
                                                    width={200}
                                                />

                                            )}
                                        </div>
                                    </Cards>
                                </Suspense>
                            </Col>
                        </Row>
                    </TabPane>

                    {/* Tab 2: Infraestructura */}
                    <TabPane tab="Infraestructura y Recursos" key="2">
                        <Row gutter={[25, 25]}>
                            <Col span={24}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Infraestructura - Detalles de Piscinas" size="large">
                                        <Table
                                            className='table-responsive'
                                            columns={infrastructureColumns}
                                            dataSource={infrastructureData}
                                            pagination={{ pageSize: 5 }}
                                            bordered
                                        />
                                    </Cards>
                                </Suspense>
                            </Col>
                        </Row>
                    </TabPane>

                    {/* Tab 3: Geolocalización */}
                    <TabPane tab="Georeferenciación" key="3">
                        <Row gutter={[25, 25]}>
                            <Col span={24}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Georreferenciación - Detalles de Nodos" size="large">
                                        <AqualinkMaps
                                            width={'100%'}
                                            height={
                                                window.innerWidth >= 2000 ? '600px' :
                                                    '305px'
                                            }
                                            selectedOrg={selectedOrg}
                                            farmsOrgsWithPools={farmsOrgsWithPools} // Pasa farmsOrgsWithPools como prop
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

export default ClientFarm;
