import React, { useState } from 'react';
import { Button, Modal, Card, Typography, Space, Tooltip, Row, Col } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const { Title } = Typography;

const BinsGridComponent = ({ bins = [], onBinClick }) => {
  const [gridModalVisible, setGridModalVisible] = useState(false);

  const getBinColor = (bin) => {
    switch (bin.sm_status) {
      case 'OCUPADO':
        return '#f5222d'; // Rojo
      case 'INACTIVO':
        return '#d9d9d9'; // Gris
      case 'ACTIVO':
        return '#52c41a'; // Verde
      default:
        return '#fff'; // Blanco por defecto
    }
  };

  const getBinTextColor = (bin) => {
    switch (bin.sm_status) {
      case 'OCUPADO':
      case 'ACTIVO':
        return '#fff';
      case 'INACTIVO':
        return '#000';
      default:
        return '#000';
    }
  };

  const handleBinClick = (bin) => {
    if (onBinClick) {
      onBinClick(bin);
    }
  };

  const sortedBins = [...bins].sort((a, b) => parseInt(a.name) - parseInt(b.name));

  return (
    <>
      <Card size="small" style={{ marginBottom: 16 }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Space>
              <Title level={5} style={{ margin: 0 }}>
                Total de Bines: {bins.length}
              </Title>
              <Space>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ 
                    width: 12, 
                    height: 12, 
                    backgroundColor: '#52c41a' 
                  }}></div>
                  <span>Activo</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ 
                    width: 12, 
                    height: 12, 
                    backgroundColor: '#f5222d' 
                  }}></div>
                  <span>Ocupado</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ 
                    width: 12, 
                    height: 12, 
                    backgroundColor: '#d9d9d9' 
                  }}></div>
                  <span>Inactivo</span>
                </div>
              </Space>
            </Space>
          </Col>
          <Col>
            <Button 
              type="primary" 
              icon={<EyeOutlined />}
              onClick={() => setGridModalVisible(true)}
            >
              Vista de Grilla
            </Button>
          </Col>
        </Row>
      </Card>

      <Modal
        title="Vista de Grilla de Bines"
        visible={gridModalVisible}
        onCancel={() => setGridModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setGridModalVisible(false)}>
            Cerrar
          </Button>
        ]}
        width={1200}
        style={{ top: 20 }}
      >
        <div style={{ marginBottom: 16 }}>
          <Space>
            <Title level={5} style={{ margin: 0 }}>
              Leyenda:
            </Title>
            <Space size="large">
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ 
                  width: 16, 
                  height: 16, 
                  backgroundColor: '#52c41a',
                  border: '1px solid #ccc'
                }}></div>
                <span>ACTIVO</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ 
                  width: 16, 
                  height: 16, 
                  backgroundColor: '#f5222d',
                  border: '1px solid #ccc'
                }}></div>
                <span>OCUPADO</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ 
                  width: 16, 
                  height: 16, 
                  backgroundColor: '#d9d9d9',
                  border: '1px solid #ccc'
                }}></div>
                <span>INACTIVO</span>
              </div>
            </Space>
          </Space>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(20, 1fr)',
            gap: '8px',
            maxHeight: '500px',
            overflowY: 'auto',
            padding: '16px',
            border: '1px solid #f0f0f0',
            borderRadius: '6px',
            backgroundColor: '#fafafa'
          }}
        >
          {sortedBins.map((bin) => (
            <Tooltip
              key={bin.sm_bin_id}
              title={
                <div>
                  <div><strong>Bin:</strong> {bin.name}</div>
                  <div><strong>Estado:</strong> {bin.sm_status}</div>
                  <div><strong>Descripción:</strong> {bin.sm_description}</div>
                  <div><strong>Activo:</strong> {bin.isactive === 'Y' ? 'Sí' : 'No'}</div>
                </div>
              }
            >
              <Button
                style={{
                  height: '45px',
                  width: '45px',
                  padding: 0,
                  backgroundColor: getBinColor(bin),
                  color: getBinTextColor(bin),
                  border: `2px solid ${bin.isactive === 'Y' ? '#000' : '#ccc'}`,
                  fontWeight: 'bold',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => handleBinClick(bin)}
                disabled={bin.sm_status === 'OCUPADO'}
              >
                {bin.name}
              </Button>
            </Tooltip>
          ))}
        </div>

        <div style={{ marginTop: 16, textAlign: 'center', color: '#666' }}>
          <small>
            Haz clic en un bin para editarlo. Los bines ocupados no se pueden seleccionar.
          </small>
        </div>
      </Modal>
    </>
  );
};

export default BinsGridComponent;