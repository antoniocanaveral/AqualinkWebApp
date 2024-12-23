import React, { useState } from 'react';
import { Row, Col, Avatar, Modal, Button, Typography, Form, Input, Select, List } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';

const { Paragraph, Title } = Typography;
const { Option } = Select;

function CarriersViewCustody() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState(null);
  const [carriers, setCarriers] = useState([
    {
      codigoTR: 'TR-001',
      nombre: 'TRANSPORTES ALFA S.A.',
      ruc: '0991234567',
      vehiculos: [
        { tipo: 'Camión Refrigerado', matricula: 'XYZ-123', modelo: 'Ford F-150', conductor: 'Juan Pérez' },
        { tipo: 'Camión Refrigerado', matricula: 'ABC-111', modelo: 'Chevrolet Silverado', conductor: 'Carlos López' },
      ],
    },
    {
      codigoTR: 'TR-002',
      nombre: 'TRANSPORTES BETA CÍA. LTDA.',
      ruc: '0997654321',
      vehiculos: [
        { tipo: 'Van de Carga', matricula: 'ABC-789', modelo: 'Mercedes Sprinter', conductor: 'Carlos Martínez' },
        { tipo: 'Camioneta', matricula: 'LMN-345', modelo: 'Toyota Hilux', conductor: 'Ana Gómez' },
      ],
    },
    {
      codigoTR: 'TR-003',
      nombre: 'TRANSPORTES GAMMA S.A.',
      ruc: '0991122334',
      vehiculos: [
        { tipo: 'Furgón', matricula: 'DEF-456', modelo: 'Chevrolet N300', conductor: 'Luisa Rodríguez' },
      ],
    },
  ]);

  const showModal = (carrier) => {
    setSelectedCarrier({ ...carrier });
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedCarrier(null);
  };

  const handleAddVehicle = () => {
    setSelectedCarrier((prev) => ({
      ...prev,
      vehiculos: [...prev.vehiculos, { tipo: '', matricula: '', modelo: '', conductor: '' }],
    }));
  };

  const handleRemoveVehicle = (index) => {
    setSelectedCarrier((prev) => ({
      ...prev,
      vehiculos: prev.vehiculos.filter((_, i) => i !== index),
    }));
  };

  const handleVehicleChange = (index, field, value) => {
    const updatedVehicles = [...selectedCarrier.vehiculos];
    updatedVehicles[index][field] = value;
    setSelectedCarrier((prev) => ({
      ...prev,
      vehiculos: updatedVehicles,
    }));
  };

  const saveChanges = () => {
    setCarriers((prev) =>
      prev.map((carrier) =>
        carrier.codigoTR === selectedCarrier.codigoTR ? selectedCarrier : carrier
      )
    );
    closeModal();
  };

  const getUniqueVehicleTypes = (vehicles) => {
    const types = vehicles.map((vehicle) => vehicle.tipo);
    return [...new Set(types)];
  };

  return (
    <>
      <PageHeader highlightText="AquaLink Transportistas" title="Transportistas" />
      <Main>
        <Row gutter={[25, 25]}>
          {carriers.map((carrier, index) => (
            <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24}>
              <Cards headless>
                <div className="carrier-card-header">
                  <Heading as="h4">{carrier.nombre}</Heading>
                </div>
                <div className="carrier-card-body" style={{ textAlign: 'center' }}>
                  <Avatar
                    style={{
                      backgroundColor: '#b5b5b5',
                      verticalAlign: 'middle',
                      marginBottom: '15px',
                    }}
                    size={64}
                  >
                    {carrier.nombre
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()}
                  </Avatar>
                  <Paragraph>
                    <strong>RUC:</strong> {carrier.ruc}
                  </Paragraph>
                  <Paragraph>
                    <strong>Código TR:</strong> {carrier.codigoTR}
                  </Paragraph>
                  <Paragraph>
                    <strong># Vehículos:</strong>
                    {carrier.vehiculos.length}
                  </Paragraph>
                  <Button type="primary" onClick={() => showModal(carrier)} style={{ marginTop: '10px' }}>
                    Ver Detalles
                  </Button>
                </div>
              </Cards>
            </Col>
          ))}
        </Row>

        <Modal
          title="Detalles del Transportista"
          visible={isModalVisible}
          onCancel={closeModal}
          footer={[
            <Button key="cancel" onClick={closeModal}>
              Cerrar
            </Button>,
            <Button key="save" type="primary" onClick={saveChanges}>
              Guardar
            </Button>,
          ]}
          width={900} // Más amplio
        >
          {selectedCarrier && (
            <>
              <Title level={4}>{selectedCarrier.nombre}</Title>
              <Paragraph>
                <strong>RUC:</strong> {selectedCarrier.ruc}
              </Paragraph>
              <Paragraph>
                <strong>Código TR:</strong> {selectedCarrier.codigoTR}
              </Paragraph>
              <Title level={5}>Vehículos</Title>
              <Row gutter={[16, 16]}>
                {selectedCarrier.vehiculos.map((vehiculo, index) => (
                  <Col span={24} key={index}>
                    <div style={{ border: '1px solid #f0f0f0', padding: '16px', borderRadius: '4px' }}>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={6}>
                          <Form.Item label="Tipo">
                            <Input
                              placeholder="Tipo"
                              value={vehiculo.tipo}
                              onChange={(e) => handleVehicleChange(index, 'tipo', e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                          <Form.Item label="Matrícula">
                            <Input
                              placeholder="Matrícula"
                              value={vehiculo.matricula}
                              onChange={(e) => handleVehicleChange(index, 'matricula', e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                          <Form.Item label="Modelo">
                            <Input
                              placeholder="Modelo"
                              value={vehiculo.modelo}
                              onChange={(e) => handleVehicleChange(index, 'modelo', e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                          <Form.Item label="Conductor">
                            <Input
                              placeholder="Conductor"
                              value={vehiculo.conductor}
                              onChange={(e) => handleVehicleChange(index, 'conductor', e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24} style={{ textAlign: 'right' }}>
                          <Button danger onClick={() => handleRemoveVehicle(index)}>
                            Eliminar
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                ))}
                <Col span={24}>
                  <Button type="dashed" onClick={handleAddVehicle} style={{ width: '100%' }}>
                    Añadir Vehículo
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Modal>
      </Main>
    </>
  );
}

export default CarriersViewCustody;
