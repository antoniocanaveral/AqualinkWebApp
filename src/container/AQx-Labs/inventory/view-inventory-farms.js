import React, { useState } from 'react';
import { Table, Select, Row, Col, Card, Modal, Button } from 'antd';
import { optionsInventory, sampleData } from './data.js';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { Main } from '../../styled.js';

function InventoryTableLabs() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Filtrar datos según la categoría seleccionada
    const filteredData = selectedCategory === 'all'
        ? sampleData
        : sampleData.filter(item => item.categoria === selectedCategory);

    // Columnas de la tabla
    const columns = [
        {
            title: 'Categoría',
            dataIndex: 'categoria',
            key: 'categoria',
            width: '15%'
        },
        {
            title: 'Código',
            dataIndex: 'codigo',
            key: 'codigo',
            width: '10%'
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
            width: '16%'
        },
        {
            title: 'Descripción',
            dataIndex: 'descripcion',
            key: 'descripcion',
            width: '23%'
        },
        {
            title: 'Marca',
            dataIndex: 'marca',
            key: 'marca',
            width: '10%'
        },
        {
            title: 'Modelo',
            dataIndex: 'modelo',
            key: 'modelo',
            width: '10%'
        },
        {
            title: 'Unidades',
            dataIndex: 'disponibilidad_unidad',
            key: 'disponibilidad_unidad',
            render: (text) => text || 'N/A', // Valor por defecto si no está disponible
            width: '10%'
        },
        {
            title: 'Volumen',
            dataIndex: 'volumen_disponibilidad',
            key: 'volumen_disponibilidad',
            render: (text) => text || 'N/A', // Valor por defecto si no está disponible
            width: '12%'
        },
        {
            title: 'Detalles',
            key: 'detalles',
            render: (_, record) => (
                <Button type="link" onClick={() => showDetails(record)}>Ver detalles</Button>
            ),
            width: '8%'
        }
    ];

    // Función para mostrar el modal con los detalles adicionales
    const showDetails = (item) => {
        const additionalInfo = optionsInventory
            .find(option => option.categoria === item.categoria)
            ?.items.find(optItem => optItem.codigo === item.codigo);

        setSelectedItem({ ...item, ...additionalInfo });
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
                highlightText="Aqualink Laboratorio"
                title="Inventario"
            />
            <Main>
                <Card title="Inventario de productos">
                    <Row gutter={16} style={{ marginBottom: '20px' }}>
                        <Col span={8}>
                            <Select
                                placeholder="Seleccione una categoría"
                                onChange={handleCategoryChange}
                                style={{ width: '100%' }}
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
                    />
                </Card>
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
                width={800} // Aumenta el ancho del modal para mejor visualización
            >
                {selectedItem && (
                    <div className="content-row" style={{display:"flex", flexWrap:"wrap"}}>
                        {/* Tabla principal con información clave */}
                        <div >
                            <Table
                                dataSource={[
                                    { key: 'categoria', label: 'Categoría', value: selectedItem.categoria },
                                    { key: 'codigo', label: 'Código', value: selectedItem.codigo },
                                    { key: 'nombre', label: 'Nombre', value: selectedItem.nombre },
                                    { key: 'descripcion', label: 'Descripción', value: selectedItem.descripcion },
                                    { key: 'marca', label: 'Marca', value: selectedItem.marca },
                                    { key: 'modelo', label: 'Modelo', value: selectedItem.modelo },
                                    { key: 'disponibilidad_unidad', label: 'Disponibilidad por Unidad', value: selectedItem.disponibilidad_unidad || 'N/A' },
                                    { key: 'volumen_disponibilidad', label: 'Volumen de Disponibilidad (lb)', value: selectedItem.volumen_disponibilidad || 'N/A' }
                                ]}
                                columns={[
                                    { title: 'Campo', dataIndex: 'label', key: 'label', width: '40%' },
                                    { title: 'Valor', dataIndex: 'value', key: 'value', width: '60%' }
                                ]}
                                pagination={false}
                                bordered
                                rowKey="key"
                            />
                        </div>

                        {/* Información adicional en formato de "cards" */}
                        <div >
                            <div className="information-grid">
                                <div className="info-item">
                                    <span className="info-label">Tipo</span>
                                    <span className="info-value">{selectedItem.tipo || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Proteína</span>
                                    <span className="info-value">{selectedItem.proteina || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Forma</span>
                                    <span className="info-value">{selectedItem.forma || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Fase</span>
                                    <span className="info-value">{selectedItem.fase || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Tamaño</span>
                                    <span className="info-value">{selectedItem.tamanio || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Origen</span>
                                    <span className="info-value">{selectedItem.origen || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Estado</span>
                                    <span className="info-value">{selectedItem.estado || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Presentación</span>
                                    <span className="info-value">{selectedItem.presentacion || 'N/A'}</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Certificación</span>
                                    <span className="info-value">{selectedItem.certificacion || 'N/A'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}

export default InventoryTableLabs;
