// src/container/AQx-Custody/stamps-containers/stamps-containers-admin-custody.js

import React, { useState } from 'react';
import { Table, Select, Row, Col, Card, Modal, Button } from 'antd';
import { sampleData, optionsInventory } from './data.js';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { Main } from '../../styled.js';
import { Link } from 'react-router-dom';
import { UilEye, UilBell } from '@iconscout/react-unicons';
import { Cards } from '../../../components/cards/frame/cards-frame.js';
import ProductDetailsModal from './product-detail-custody.js';

function InventaryViewCustody() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Filtrar datos según la categoría seleccionada
    const filteredData = selectedCategory === 'all'
        ? sampleData
        : sampleData.filter(item => item.categoria === selectedCategory);

    // Columnas de la tabla actualizadas
    const columns = [
        {
            title: 'Código',
            dataIndex: 'codigo',
            key: 'codigo',
            width: '20%',
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
            width: '25%',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '10%',
        },
        {
            title: 'Unidad',
            dataIndex: 'unidad',
            key: 'unidad',
            width: '10%',
        },
        {
            title: 'Peso',
            dataIndex: 'peso',
            key: 'peso',
            width: '10%',
        },
        {
            title: 'Disponibles',
            dataIndex: 'disponibles',
            key: 'disponibles',
            width: '10%',
        },
        {
            title: 'Acciones',
            key: 'acciones',
            width: '10%',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '10px' }} className='ninjadash-event-details-action-3'> 
                    <Link
                        to="#"
                        onClick={() => showModalView(record)}
                        title="Ver Detalles"
                    >
                        <UilEye size="20" />
                    </Link>
                    <Link
                        to="/notifications"
                        title="Notificaciones"
                    >
                        <UilBell size="20" />
                    </Link>
                </div>
            ),
        },
    ];

    // Función para mostrar el modal con los detalles adicionales
    const showModalView = (item) => {
        setSelectedItem(item);
        setIsModalVisible(true);
    };

    // Manejar el cambio de categoría
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    // Cerrar el modal
    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedItem(null);
    };

    return (
        <>
            <PageHeader
                highlightText="Aqualink Empacadora"
                title="Inventario de Suministros"
            />
            <Main>
                <Cards title="Inventario">
                    <Row gutter={16} style={{ marginBottom: '20px' }}>
                        <Col span={8}>
                            <Select
                                placeholder="Seleccione una categoría"
                                onChange={handleCategoryChange}
                                style={{ width: '100%' }}
                                allowClear
                            >
                                <Select.Option value="all">Todas las categorías</Select.Option>
                                {optionsInventory.map(option => (
                                    <Select.Option key={option.categoria} value={option.categoria}>
                                        {option.categoria}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Col>
                    </Row>
                    <Table
                        className='table-responsive'
                        columns={columns}
                        dataSource={filteredData}
                        pagination={{ pageSize: 5 }}
                        bordered
                        rowKey="codigo" // Asegúrate de que cada ítem tenga un código único
                    />
                </Cards>
            </Main>

            {/* Modal para mostrar detalles adicionales */}
            <Modal
                title="Detalles del Producto"
                visible={isModalVisible}
                onCancel={handleCloseModal}
                footer={[
                    <Button key="close" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                ]}
                width={800} // Ajusta el ancho según tus necesidades
                bodyStyle={{ padding: '20px' }} // Ajusta el padding según tus preferencias
            >
                {selectedItem && (
                    <ProductDetailsModal selectedItem={selectedItem} />
                )}
            </Modal>
        </>
    );
}

export default InventaryViewCustody;
