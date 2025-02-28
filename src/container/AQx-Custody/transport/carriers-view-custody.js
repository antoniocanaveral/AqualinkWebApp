import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Avatar, Modal, Button, Typography, Form, Input } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { fetchCarriers } from '../../../redux/carriers/actionCreator';

const { Paragraph, Title } = Typography;

function CarriersViewCustody() {
  const dispatch = useDispatch();
  const { carriers, loading, error } = useSelector((state) => state.carriers);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCarrier, setSelectedCarrier] = useState(null);

  // Cargar los transportistas al montar el componente
  useEffect(() => {
    dispatch(fetchCarriers());
  }, [dispatch]);

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
      sm_vehicle: [...prev.sm_vehicle, { SM_VehicleType: '', sm_platenumber: '', SM_Model: '', SM_DriverName: '' }],
    }));
  };

  const handleRemoveVehicle = (index) => {
    setSelectedCarrier((prev) => ({
      ...prev,
      sm_vehicle: prev.sm_vehicle.filter((_, i) => i !== index),
    }));
  };

  const handleVehicleChange = (index, field, value) => {
    const updatedVehicles = [...selectedCarrier.sm_vehicle];
    updatedVehicles[index][field] = value;
    setSelectedCarrier((prev) => ({
      ...prev,
      sm_vehicle: updatedVehicles,
    }));
  };

  const saveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en el backend
    closeModal();
  };

  if (loading) return <p>Cargando transportistas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <PageHeader highlightText="AquaLink Transportistas" title="Transportistas" />
      <Main>
        <Row gutter={[25, 25]}>
          {carriers.map((carrier, index) => (
            <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24}>
              <Cards headless>
                <div className="carrier-card-header">
                  <Heading as="h4">{carrier.Name}</Heading>
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
                    {carrier.Name
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()}
                  </Avatar>
                  <Paragraph>
                    <strong>RUC:</strong> {carrier.TaxID}
                  </Paragraph>
                  <Paragraph>
                    <strong>Código TR:</strong> {carrier.SM_Code}
                  </Paragraph>
                  <Paragraph>
                    <strong># Vehículos:</strong> {carrier.sm_vehicle ? carrier.sm_vehicle.length : 0}
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
          width={900}
        >
          {selectedCarrier && (
            <>
              <Title level={4}>{selectedCarrier.Name}</Title>
              <Paragraph>
                <strong>RUC:</strong> {selectedCarrier.TaxID}
              </Paragraph>
              <Paragraph>
                <strong>Código TR:</strong> {selectedCarrier.SM_Code}
              </Paragraph>
              <Title level={5}>Vehículos</Title>
              <Row gutter={[16, 16]}>
                {selectedCarrier.sm_vehicle && selectedCarrier.sm_vehicle.map((vehiculo, index) => (
                  <Col span={24} key={index}>
                    <div style={{ border: '1px solid #f0f0f0', padding: '16px', borderRadius: '4px' }}>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={6}>
                          <Form.Item label="Tipo">
                            <Input
                              placeholder="Tipo"
                              value={vehiculo.SM_VehicleType}
                              onChange={(e) => handleVehicleChange(index, 'SM_VehicleType', e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                          <Form.Item label="Matrícula">
                            <Input
                              placeholder="Matrícula"
                              value={vehiculo.sm_platenumber}
                              onChange={(e) => handleVehicleChange(index, 'sm_platenumber', e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                          <Form.Item label="Modelo">
                            <Input
                              placeholder="Modelo"
                              value={vehiculo.SM_Model}
                              onChange={(e) => handleVehicleChange(index, 'SM_Model', e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={6}>
                          <Form.Item label="Conductor">
                            <Input
                              placeholder="Conductor"
                              value={vehiculo.SM_DriverName}
                              onChange={(e) => handleVehicleChange(index, 'SM_DriverName', e.target.value)}
                            />
                          </Form.Item>
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