import React from 'react';
import { Table, Tag, Row } from 'antd';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import UilBell from '@iconscout/react-unicons/icons/uil-bell';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import { Cards } from '../../../components/cards/frame/cards-frame';

const LaboratoryViewCustody = () => {
    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'pendiente':
                return 'ninjadash-status-pending';
            case 'en proceso':
                return 'ninjadash-status-in-process';
            case 'finalizado':
                return 'ninjadash-status-completed';
            default:
                return 'ninjadash-status-undefined';
        }
    };

    const columns = [
        { title: 'Proveedor', dataIndex: 'proveedor', key: 'proveedor' },
        { title: 'Lote ID', dataIndex: 'loteID', key: 'loteID' },
        { title: 'Fecha Recepción', dataIndex: 'fechaRecepcion', key: 'fechaRecepcion' },
        { title: 'Clasificación', dataIndex: 'clasificacion', key: 'clasificacion' },
        { title: 'Volumen', dataIndex: 'peso', key: 'peso', render: (peso) => `${peso} kg` },

        {
            title: 'Organoléptico',
            dataIndex: 'organoleptico',
            key: 'organoleptico',
            render: (status) => (
                <Tag className={getStatusClass(status)} style={{ borderRadius: '8px', fontWeight: 'bold' }}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Sulfitos',
            dataIndex: 'sulfitos',
            key: 'sulfitos',
            render: (status) => (
                <Tag className={getStatusClass(status)} style={{ borderRadius: '8px', fontWeight: 'bold' }}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Análisis Químico',
            dataIndex: 'quimico',
            key: 'quimico',
            render: (status) => (
                <Tag className={getStatusClass(status)} style={{ borderRadius: '8px', fontWeight: 'bold' }}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Microbiológico',
            dataIndex: 'microbiologico',
            key: 'microbiologico',
            render: (status) => (
                <Tag className={getStatusClass(status)} style={{ borderRadius: '8px', fontWeight: 'bold' }}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Acción',
            key: 'accion',
            render: (_, record) => (
                <div className="table-actions" style={{ minWidth: "50px !important", textAlign: "center" }}>
                    <Link to={`/coords/${record.loteID}`} style={{ marginRight: '10px' }}>
                        <UilEye />
                    </Link>
                    <Link to={`/coords/${record.loteID}`}>
                        <UilBell />
                    </Link>
                </div>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            proveedor: 'Proveedor A',
            ubicacion: 'Guayaquil',
            categoria: 'Crustáceos',
            clasificacion: 'Camaron',
            peso: 120,
            loteID: 'L001',
            fechaRecepcion: '2024-12-01',
            organoleptico: 'en proceso',
            sulfitos: 'pendiente',
            quimico: 'finalizado',
            microbiologico: 'en proceso',
        },
        {
            key: '2',
            proveedor: 'Proveedor B',
            ubicacion: 'Manta',
            categoria: 'Moluscos',
            clasificacion: 'Ostra',
            peso: 200,
            loteID: 'L002',
            fechaRecepcion: '2024-12-02',
            organoleptico: 'finalizado',
            sulfitos: 'pendiente',
            quimico: 'en proceso',
            microbiologico: 'finalizado',
        },
        {
            key: '3',
            proveedor: 'Proveedor C',
            ubicacion: 'Esmeraldas',
            categoria: 'Peces',
            clasificacion: 'Tilapia',
            peso: 300,
            loteID: 'L003',
            fechaRecepcion: '2024-12-03',
            organoleptico: 'pendiente',
            sulfitos: 'en proceso',
            quimico: 'en proceso',
            microbiologico: 'finalizado',
        },
    ];

    return (
        <>
            <PageHeader
                highlightText="AquaLink Empacadora"
                title="Vista de Laboratorios"
                selectOptions={[
                    ["Todas las Empacadoras", "Empacadora 1", "Empacadora 3"],
                ]}
            />
            <Main>
                <Row gutter={25}>
                    <Cards headless>
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={{ pageSize: 5 }}
                            className="table-responsive"
                            style={{ marginTop: '20px' }}
                        />
                    </Cards>
                </Row>
            </Main>
        </>
    );
};

export default LaboratoryViewCustody;
