import React from 'react';
import { Modal, Button } from 'antd';

function DetailsModal({ isVisible, selectedItem, onClose }) {
  return (
    <Modal
      title="Detalles del Producto"
      visible={isVisible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Cerrar
        </Button>,
      ]}
      width={800}
    >
      {selectedItem && (
        <div className="content-row">
          <div style={{ flex: '1 1 40%' }}>
            <div className="information-grid">
              <div className="info-item">
                <span className="info-label">Marca de Alimento</span>
                <span className="info-value">{selectedItem.marca_alimento || 'N/A'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Tipo de Alimento Pre Cría</span>
                <span className="info-value">{selectedItem.tipo_alimento_pre_cria || 'N/A'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Sistema de Alimentación Pre Cría</span>
                <span className="info-value">{selectedItem.sistema_alimentacion_pre_cria || 'N/A'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Tipo de Alimento Pre Engorde</span>
                <span className="info-value">{selectedItem.tipo_alimento_pre_engorde || 'N/A'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Tipo de Alimento Engorde</span>
                <span className="info-value">{selectedItem.tipo_alimento_engorde || 'N/A'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Sistema de Alimentación Pre Engorde y Engorde</span>
                <span className="info-value">{selectedItem.sistema_alimentacion_pre_engorde_engorde || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default DetailsModal;