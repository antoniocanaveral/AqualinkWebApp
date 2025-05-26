import React, { useState } from 'react';
import { Table, Select, Row, Col, Card, Modal, Button } from 'antd';
import { optionsInventory, sampleData } from './data.js';
import { PageHeader } from '../../../components/page-headers/page-headers.jsx';
import { Main } from '../../styled.js';

function StampsContainersAdminCustody() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const filteredData = selectedCategory === 'all'
        ? sampleData
        : sampleData.filter(item => item.categoria === selectedCategory);


    const columns = [
        {
            title: 'Categoría',
            dataIndex: 'categoria',
            key: 'categoria',
            width: '10%',
            filters: [
                { text: 'Bines', value: 'bines' },
                { text: 'Gavetas', value: 'gavetas' },
            ],
            onFilter: (value, record) => record.categoria === value,
        },
        {
            title: 'Código',
            dataIndex: 'codigo',
            key: 'codigo',
            width: '10%',
        },
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
            width: '15%',
        },
        {
            title: 'SELLOS de seguridad',
            dataIndex: 'sellosSeguridad',
            key: 'sellosSeguridad',
            render: (text) => text || 'N/A',
            width: '15%',
        },
        {
            title: 'TAGS de observaciones',
            dataIndex: 'tagsObservaciones',
            key: 'tagsObservaciones',
            render: (text) => text || 'N/A',
            width: '15%',
        },
        {
            title: 'HIELO sacos',
            dataIndex: 'hieloSacos',
            key: 'hieloSacos',
            render: (text) => text || 'N/A',
            width: '10%',
        },
        {
            title: 'METABISULFITO',
            dataIndex: 'metabisulfito',
            key: 'metabisulfito',
            render: (text) => text || 'N/A',
            width: '10%',
        },
        {
            title: 'Ver insumos de pesca',
            key: 'verInsumos',
            render: (_, record) => (
                <Button type="link" onClick={() => verInsumosPesca(record)}>
                    Ver insumos
                </Button>
            ),
            width: '15%',
        },
    ];


    const showDetails = (item) => {
        const additionalInfo = optionsInventory
            .find(option => option.categoria === item.categoria)
            ?.items.find(optItem => optItem.codigo === item.codigo);

        setSelectedItem({ ...item, ...additionalInfo });
        setIsModalVisible(true);
    };


    const verInsumosPesca = (item) => {


        Modal.info({
            title: 'Insumos de Pesca',
            content: (
                <div>
                    <p>Aquí puedes detallar los insumos de pesca relacionados con este elemento.</p>
                    {/* Agrega más información según sea necesario */}
                </div>
            ),
            onOk() { },
        });
    };


    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };


    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedItem(null);
    };

    return (
        <>
            <PageHeader
                highlightText="Aqualink Empacadora"
                title="Sellos y Contenedores"
            />
            <Main>
                <Card title="Inventario de productos">
                    <Row gutter={16} style={{ marginBottom: '20px' }}>
                        <Col span={8}>
                            <Select
                                placeholder="Seleccione una categoría"
                                onChange={handleCategoryChange}
                                style={{ width: '100%' }}
                                allowClear
                            >
                                <Select.Option value="all">Todas las categorías</Select.Option>
                                <Select.Option value="bines">Bines</Select.Option>
                                <Select.Option value="gavetas">Gavetas</Select.Option>
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
                    <div className="content-row" style={{ display: "flex", flexWrap: "wrap" }}>
                        {/* Tabla principal con información clave */}
                        <div style={{ flex: 1, minWidth: '300px', marginRight: '20px' }}>
                            <Table
                                dataSource={[
                                    { key: 'categoria', label: 'Categoría', value: selectedItem.categoria },
                                    { key: 'codigo', label: 'Código', value: selectedItem.codigo },
                                    { key: 'nombre', label: 'Nombre', value: selectedItem.nombre },
                                    { key: 'sellosSeguridad', label: 'SELLOS de seguridad', value: selectedItem.sellosSeguridad || 'N/A' },
                                    { key: 'tagsObservaciones', label: 'TAGS de observaciones', value: selectedItem.tagsObservaciones || 'N/A' },
                                    { key: 'hieloSacos', label: 'HIELO sacos', value: selectedItem.hieloSacos || 'N/A' },
                                    { key: 'metabisulfito', label: 'METABISULFITO', value: selectedItem.metabisulfito || 'N/A' },
                                ]}
                                columns={[
                                    { title: 'Campo', dataIndex: 'label', key: 'label', width: '40%' },
                                    { title: 'Valor', dataIndex: 'value', key: 'value', width: '60%' }
                                ]}
                                pagination={false}
                                bordered
                                size="small"
                                rowKey="key"
                            />
                        </div>

                        {/* Información adicional en formato de "cards" */}
                        <div style={{ flex: 1, minWidth: '300px' }}>
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
    )
}

export default StampsContainersAdminCustody;
