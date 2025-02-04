import { Row, Col, Table } from 'antd';
import { Main } from '../../styled';
import ComparativeDispatchPerformanceBarChart from './charts/ComparativeDispatchPerformanceBarChart';
import { PageHeader } from '../../../components/page-headers/page-headers';
import React from 'react';

function DispatchReportLab() {
    // Filas fijas (Fecha de siembra programada y Lote ID)
    const stickyRows = [
        {
            key: 'fecha_siembra_programada',
            descripcion: 'Fecha de siembra programada',
            siembra1: '2024-06-01',
            siembra2: '2024-07-05',
            siembra3: '2024-08-10',
            siembra4: '2024-09-15',
            siembra5: '2024-10-20',
            type: 'data',
        },
        {
            key: 'lote_id',
            descripcion: 'Lote ID',
            siembra1: 'L-001',
            siembra2: 'L-002',
            siembra3: 'L-003',
            siembra4: 'L-004',
            siembra5: 'L-005',
            type: 'data',
        },
    ];

    // Datos desplazables (Volumen solicitado, Volumen despachado, PL/gramo solicitado, PL/gramo, Variación)
    const mainTableData = [
        {
            key: 'volumen_solicitado',
            descripcion: 'Volumen solicitado (millones de larvas)',
            siembra1: '1,200,000,000',
            siembra2: '1,300,000,000',
            siembra3: '1,400,000,000',
            siembra4: '1,500,000,000',
            siembra5: '1,600,000,000',
            type: 'data',
        },
        {
            key: 'volumen_despachado',
            descripcion: 'Volumen despachado (millones de larvas)',
            siembra1: '1,100,000,000',
            siembra2: '1,200,000,000',
            siembra3: '1,300,000,000',
            siembra4: '1,400,000,000',
            siembra5: '1,500,000,000',
            type: 'data',
        },
        {
            key: 'pl_gramo_solicitado',
            descripcion: 'PL/gramo solicitado',
            siembra1: '90 g',
            siembra2: '92 g',
            siembra3: '88 g',
            siembra4: '94 g',
            siembra5: '95 g',
            type: 'data',
        },
        {
            key: 'pl_gramo',
            descripcion: 'PL/gramo',
            siembra1: '85 g',
            siembra2: '87 g',
            siembra3: '83 g',
            siembra4: '89 g',
            siembra5: '90 g',
            type: 'data',
        },
        {
            key: 'variacion',
            descripcion: 'Variación',
            siembra1: '+50 kg',
            siembra2: '-50 kg',
            siembra3: '+100 kg',
            siembra4: '+150 kg',
            siembra5: '+150 kg',
            type: 'data',
        },
    ];

    // Combinar ambas fuentes de datos
    const combinedData = [...stickyRows, ...mainTableData];

    // Columnas para la tabla
    const columns = [
        {
            title: 'Descripción',
            dataIndex: 'descripcion',
            key: 'descripcion',
            width: 250, // Aumentado para acomodar textos más largos
            fixed: 'left',
            render: (text, record) => (
                <span style={{ fontWeight: record.type === 'sticky' ? 'bold' : 'normal' }}>
                    {text}
                </span>
            ),
        },
        {
            title: 'Siembra 1',
            dataIndex: 'siembra1',
            key: 'siembra1',
            width: 150,
        },
        {
            title: 'Siembra 2',
            dataIndex: 'siembra2',
            key: 'siembra2',
            width: 150,
        },
        {
            title: 'Siembra 3',
            dataIndex: 'siembra3',
            key: 'siembra3',
            width: 150,
        },
        {
            title: 'Siembra 4',
            dataIndex: 'siembra4',
            key: 'siembra4',
            width: 150,
        },
        {
            title: 'Siembra 5',
            dataIndex: 'siembra5',
            key: 'siembra5',
            width: 150,
        },
    ];

    return (
        <>
            <PageHeader
                title="Reporte de Despachos"
                highlightText="Aqualink Laboratorio"
                selectOptions={[
                    ["Cliente 1", "Cliente 2", "Cliente 3"],
                    ["Lote 1", "Lote 2", "Lote 3"],
                    ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
                ]}
            />

            <Main>
                <Row gutter={10}>
                    <Col xxl={24} xs={24}>
                        <Table
                            columns={columns}
                            dataSource={combinedData}
                            pagination={false}
                            bordered
                            rowKey="key"
                            className="custom-table-padding-table-1 table-responsive"
                            tableLayout="fixed"
                            scroll={{ y: 400, x: 1000 }} // Ajusta la altura y el ancho según tus necesidades
                        />
                    </Col>
                </Row>

                <Row gutter={10} style={{ marginTop: '20px' }}>
                    <Col xl={24} xs={24} style={{ display: 'flex' }}>
                        <ComparativeDispatchPerformanceBarChart />
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default DispatchReportLab;