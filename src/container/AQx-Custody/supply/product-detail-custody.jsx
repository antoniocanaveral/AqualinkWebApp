

import React from 'react';
import { Table, Typography } from 'antd';

const ProductDetailsModal = ({ selectedItem }) => {
    return (
        <div className="content-row" style={{ display: "flex", flexWrap: "wrap" }}>
            {/* Tabla principal con información clave */}
            <div style={{ flex: 1, minWidth: '300px', marginRight: '20px' }}>
                <Table
                    dataSource={[
                        { key: 'categoria', label: 'Categoría', value: selectedItem.categoria },
                        { key: 'codigo', label: 'Código', value: selectedItem.codigo },
                        { key: 'nombre', label: 'Nombre', value: selectedItem.nombre },
                        { key: 'id', label: 'ID', value: selectedItem.id },
                        { key: 'unidad', label: 'Unidad', value: selectedItem.unidad },
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
            <div style={{ flex: 1, minWidth: '200px' }}>
                <div className="information-grid">
                    <div className="info-item" style={{ marginBottom: '10px' }}>
                        <span className="info-label" style={{ fontWeight: 'bold', display: 'block' }}>Capacidad</span>
                        <span className="info-value">{selectedItem.capacidad || 'N/A'}</span>
                    </div>
                    <div className="info-item" style={{ marginBottom: '10px' }}>
                        <span className="info-label" style={{ fontWeight: 'bold', display: 'block' }}>Peso</span>
                        <span className="info-value">{selectedItem.peso} kg</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;
