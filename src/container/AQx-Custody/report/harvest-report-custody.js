import React, { Suspense, useRef, useState } from 'react';
import { Row, Col, Skeleton, Typography, Table, Button, Modal } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import ProjectionKgPanel from '../../AQx-Farms/panel/charts/projections-kg-panel';
import ComparativePerformanceBarChart from './chart/ComparativePerformanceBarChart';

function HarvestReportCustody() {

    // Filas fijas (solo FECHA y LOTE ID)
    const stickyRows = [
        {
            key: 'fecha',
            descripcion: 'FECHA',
            cosecha1: '2024-06-01',
            cosecha2: '2024-07-05',
            cosecha3: '2024-08-10',
            cosecha4: '2024-09-15',
            cosecha5: '2024-10-20',
        },
        {
            key: 'lote_id',
            descripcion: 'LOTE ID',
            cosecha1: 'L-001',
            cosecha2: 'L-002',
            cosecha3: 'L-003',
            cosecha4: 'L-004',
            cosecha5: 'L-005',
        },
    ];

    // Datos desplazables (resto de las variables)
    const mainTableData = [
        {
            key: 'volumen_proyectado',
            descripcion: 'VOLUMEN PROYECTADO',
            cosecha1: '1,200 kg',
            cosecha2: '1,300 kg',
            cosecha3: '1,400 kg',
            cosecha4: '1,500 kg',
            cosecha5: '1,600 kg',
        },
        {
            key: 'volumen_programado',
            descripcion: 'VOLUMEN PROGRAMADO',
            cosecha1: '1,100 kg',
            cosecha2: '1,200 kg',
            cosecha3: '1,300 kg',
            cosecha4: '1,400 kg',
            cosecha5: '1,500 kg',
        },
        {
            key: 'volumen_cosechado',
            descripcion: 'VOLUMEN COSECHADO',
            cosecha1: '1,050 kg',
            cosecha2: '1,150 kg',
            cosecha3: '1,250 kg',
            cosecha4: '1,350 kg',
            cosecha5: '1,450 kg',
        },
        {
            key: 'variacion',
            descripcion: 'VARIACIÓN',
            cosecha1: '+50 kg',
            cosecha2: '-50 kg',
            cosecha3: '+100 kg',
            cosecha4: '+150 kg',
            cosecha5: '+150 kg',
        },
        {
            key: 'eficiencia_planta',
            descripcion: 'EFICIENCIA EN PLANTA',
            cosecha1: '90%',
            cosecha2: '92%',
            cosecha3: '88%',
            cosecha4: '94%',
            cosecha5: '95%',
        },
    ];

    // Columnas para la tabla fija
    const columns = [
        {
            title: '',
            dataIndex: 'descripcion',
            key: 'descripcion',
            width: 203,
            fixed: 'left',
        },
        {
            title: 'Cosecha 1',
            dataIndex: 'cosecha1',
            key: 'cosecha1',
            width: 100,
        },
        {
            title: 'Cosecha 2',
            dataIndex: 'cosecha2',
            key: 'cosecha2',
            width: 102,
        },
        {
            title: 'Cosecha 3',
            dataIndex: 'cosecha3',
            key: 'cosecha3',
            width: 102,
        },
        {
            title: 'Cosecha 4',
            dataIndex: 'cosecha4',
            key: 'cosecha4',
            width: 100,
        },
        {
            title: 'Cosecha 5',
            dataIndex: 'cosecha5',
            key: 'cosecha5',
            width: 92,
        },
    ];

    // Columnas para la tabla desplazable (misma estructura, sin encabezado)
    const columns2 = [
        {
            title: '',
            dataIndex: 'descripcion',
            key: 'descripcion',
            fixed: 'left',
            width: 203,
        },
        {
            title: 'Cosecha 1',
            dataIndex: 'cosecha1',
            key: 'cosecha1',
            width: 100,
        },
        {
            title: 'Cosecha 2',
            dataIndex: 'cosecha2',
            key: 'cosecha2',
            width: 102,
        },
        {
            title: 'Cosecha 3',
            dataIndex: 'cosecha3',
            key: 'cosecha3',
            width: 102,
        },
        {
            title: 'Cosecha 4',
            dataIndex: 'cosecha4',
            key: 'cosecha4',
            width: 100,
        },
        {
            title: 'Cosecha 5',
            dataIndex: 'cosecha5',
            key: 'cosecha5',
            width: 92,
        },
    ];
    return (
        <>
            <PageHeader
                title="Reporte de Lotes Procesados"
                highlightText="Aqualink Empacadora"


            />

            <Main>
                <Row gutter={25}>
                    <Col xxl={24} xs={24}>
                        {/* Tabla fija con filas sticky */}
                        <Table
                            columns={columns}
                            dataSource={stickyRows}
                            pagination={false}
                            bordered
                            showHeader={true}
                            rowKey="key"
                            className="custom-table-padding-table-1 table-responsive"
                            tableLayout="fixed"
                        />
                        {/* Contenedor con scroll vertical para la tabla desplazable */}
                        <div
                            style={{
                                height: '210px',
                                overflowY: 'auto',
                                overflowX: 'hidden',
                            }}
                        >
                            <Table
                                columns={columns2}
                                dataSource={mainTableData}
                                pagination={false}
                                bordered
                                showHeader={false}
                                rowKey="key"
                                className="custom-table-padding-table-1 table-responsive"
                                tableLayout="fixed"
                                rowClassName={(record) => {
                                    // Aplica una clase CSS a filas específicas si lo deseas
                                    // Por ejemplo, si quisieras remarcar una fila clave:
                                    // if (record.key === 'costos_produccion') return 'custom-black-row';
                                    return '';
                                }}
                            />
                        </div>
                    </Col>
                </Row>

                <Row gutter={25}>
                    <Col xl={24} xs={24} style={{ display: 'flex' }}>
                        <ComparativePerformanceBarChart />
                    </Col>
                </Row>



            </Main>
        </>
    );
}

export default HarvestReportCustody;
