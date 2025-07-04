import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table, Tabs } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Main } from '../../styled';
import DonutChartComponent from '../../../components/charts/donut/DonutChartComponent';
import { AqualinkMapLab } from '../../../components/maps/aqualink-map-lab';

const { TabPane } = Tabs;

function ClientLab() {

    const [showChart, setShowChart] = useState(false);


    const clientInfo = [
        { key: '1', categoria: 'Razón Social', valor: '' },
        { key: '2', categoria: 'RUC', valor: '' },
        { key: '3', categoria: 'Dirección Fiscal', valor: '' },
        { key: '4', categoria: 'Representante Legal', valor: '' },
        { key: '5', categoria: 'CC (RL)', valor: '' },
        { key: '6', categoria: 'Correo Electrónico (RL)', valor: '' },
        { key: '7', categoria: 'Web Site', valor: '' },
        { key: '8', categoria: 'Teléfono (Convencional)', valor: '' },
        { key: '9', categoria: 'Teléfono (Celular)', valor: '' },
        { key: '10', categoria: 'Código SCI', valor: '' },
        { key: '11', categoria: 'Nombre de Cliente', valor: '' },
        { key: '12', categoria: 'Código Cliente', valor: '' },
        { key: '13', categoria: 'ROOT Cliente', valor: '' },
    ];


    const farmInfo = [
        { key: '1', categoria: 'Provincia', valor: '' },
        { key: '2', categoria: 'Cantón', valor: '' },
        { key: '5', categoria: 'Acuerdo Ministerial', valor: '' },
        { key: '6', categoria: 'Certificado Ambiental', valor: '' },
        { key: '7', categoria: 'Certificado de Inocuidad', valor: '' },
        { key: '8', categoria: 'Capacidad Instalada', valor: '' },
        { key: '9', categoria: '# De Módulos', valor: '' },
        { key: '10', categoria: '# De Tanques', valor: '' },
    ];


    const infrastructureData = [
        {
            key: '1',
            identificador: 'tank #1',
            extension: '10 Has',
            profundidadOperativa: '1.5 mts',
            profundidadSiembra: '1.0 mts',
            profundidadPesca: '1.2 mts',
            sistemaProduccion: 'TF / BF',
            aireacionHpHa: '4',
            aireacionHpTotal: '16',
            ras: 'No',
            aguaVolOp: '2000 m³',
            aguaVolSiembra: '1500 m³',
            aguaVolPesca: '1200 m³',
        },
        {
            key: '2',
            identificador: 'tank #2',
            extension: '15 Has',
            profundidadOperativa: '2.0 mts',
            profundidadSiembra: '1.8 mts',
            profundidadPesca: '1.6 mts',
            sistemaProduccion: 'TF',
            aireacionHpHa: '5',
            aireacionHpTotal: '20',
            ras: 'Sí',
            aguaVolOp: '2500 m³',
            aguaVolSiembra: '2000 m³',
            aguaVolPesca: '1800 m³',
        },
        {
            key: '3',
            identificador: 'tank #3',
            extension: '12 Has',
            profundidadOperativa: '1.7 mts',
            profundidadSiembra: '1.5 mts',
            profundidadPesca: '1.4 mts',
            sistemaProduccion: 'TF / BF',
            aireacionHpHa: '4.5',
            aireacionHpTotal: '18',
            ras: 'No',
            aguaVolOp: '2200 m³',
            aguaVolSiembra: '1800 m³',
            aguaVolPesca: '1500 m³',
        },
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
            render: (text) => text || 'N/A', // Valor por defecto si no está disponible
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


    const geolocationData = [
        {
            key: '1',
            identificador: 'Ppc #1',
            extension: '10 Has',
            nodo1: '12.345, -67.890',
            nodo2: '12.346, -67.891',
            nodo3: '12.347, -67.892',
            nodo4: '12.348, -67.893',
            nodo5: '12.349, -67.894',
            nodo6: '12.350, -67.895',
            nodo7: '12.351, -67.896',
            nodo8: '12.352, -67.897',
        },
        {
            key: '2',
            identificador: 'Ppe #1',
            extension: '15 Has',
            nodo1: '13.345, -68.890',
            nodo2: '13.346, -68.891',
            nodo3: '13.347, -68.892',
            nodo4: '13.348, -68.893',
            nodo5: '13.349, -68.894',
            nodo6: '13.350, -68.895',
            nodo7: '13.351, -68.896',
            nodo8: '13.352, -68.897',
        },
        {
            key: '3',
            identificador: 'Pef #2',
            extension: '12 Has',
            nodo1: '14.345, -69.890',
            nodo2: '14.346, -69.891',
            nodo3: '14.347, -69.892',
            nodo4: '14.348, -69.893',
            nodo5: '14.349, -69.894',
            nodo6: '14.350, -69.895',
            nodo7: '14.351, -69.896',
            nodo8: '14.352, -69.897',
        },
    ];


    const geolocationColumns = [
        {
            title: 'Identificador',
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
            title: 'Nodo 1',
            dataIndex: 'nodo1',
            key: 'nodo1',
            width: '10%',
        },
        {
            title: 'Nodo 2',
            dataIndex: 'nodo2',
            key: 'nodo2',
            width: '10%',
        },
        {
            title: 'Nodo 3',
            dataIndex: 'nodo3',
            key: 'nodo3',
            width: '10%',
        },
        {
            title: 'Nodo 4',
            dataIndex: 'nodo4',
            key: 'nodo4',
            width: '10%',
        },
        {
            title: 'Nodo 5',
            dataIndex: 'nodo5',
            key: 'nodo5',
            width: '10%',
        },
        {
            title: 'Nodo 6',
            dataIndex: 'nodo6',
            key: 'nodo6',
            width: '10%',
        },
        {
            title: 'Nodo 7',
            dataIndex: 'nodo7',
            key: 'nodo7',
            width: '10%',
        },
        {
            title: 'Nodo 8',
            dataIndex: 'nodo8',
            key: 'nodo8',
            width: '10%',
        },
    ];


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowChart(true);
        }, 1000); // 1000 milisegundos = 1 segundo
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <PageHeader

                highlightText={"AquaLink Administración"}
                title="Ficha de Clientes"
            />
            <Main>
                <Tabs defaultActiveKey="1" type="line">
                    {/* Tab 1: Información */}
                    <TabPane tab="Información" key="1">
                        <Row gutter={25}>
                            <Col xl={11} xs={24} style={{ display: "flex" }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <AqualinkMapLab />
                                </Suspense>
                            </Col>
                            <Col xl={13} xs={24} style={{ display: "flex" }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Información de Cliente" size="large">
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
                            <Col xl={8} xs={24} style={{ display: 'flex' }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Información de Laboratorio" size="large">
                                        <Table
                                            columns={columns}
                                            dataSource={farmInfo}
                                            pagination={false}
                                            bordered
                                        />
                                    </Cards>
                                </Suspense>
                            </Col>
                            <Col xl={8} xs={24} style={{ display: 'flex' }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Relación de Capacidad por Módulo" size="large" style={{ marginBottom: 0 }}>
                                        {showChart && (
                                            <DonutChartComponent
                                                data={[
                                                    { label: 'Ppc', value: 7 },
                                                    { label: 'Ppe', value: 50 },
                                                    { label: 'Pef', value: 67 },
                                                ]}
                                                titleText="Capacidad"
                                                subtitleText="Por Módulo"
                                                height={200}
                                                width={200}
                                            />
                                        )}
                                    </Cards>
                                </Suspense>

                            </Col>
                            <Col xl={8} xs={24} style={{ display: 'flex' }}>
                                <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                                    <Cards title="Volumen de agua por Módulo" size="large" style={{ flex: 1, marginTop: 0 }}>
                                        {showChart && (
                                            <DonutChartComponent
                                                data={[
                                                    { label: 'Ppc', value: 4 },
                                                    { label: 'Ppe', value: 17 },
                                                    { label: 'Pef', value: 77 },
                                                    { label: 'R&C', value: 2 },
                                                ]}
                                                titleText="Volumen"
                                                subtitleText="Por Módulo"
                                                height={200}
                                                width={200}
                                            />
                                        )}
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
                                        <Table
                                            className='table-responsive'
                                            columns={geolocationColumns}
                                            dataSource={geolocationData}
                                            pagination={{ pageSize: 5 }}
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

export default ClientLab;
