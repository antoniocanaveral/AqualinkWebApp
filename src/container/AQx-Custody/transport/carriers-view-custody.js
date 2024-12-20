// src/container/AQx-Custody/stamps-containers/carriers-view-custody.js

import React, { useState } from 'react';
import { Row, Col, Avatar, Modal, Button, Typography } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { GoogleMaps } from '../../../components/maps/google-maps';

function CarriersViewCustody() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLogistics, setSelectedLogistics] = useState(null);

  // Datos actualizados de las empacadoras
  const empacadoras = [
    {
      codigoTR: 'TR-001',
      nombre: 'EMPACADORA ALFA S.A.',
      ruc: '0991234567',
      vehiculo: 'Camión Refrigerado',
      placa: 'XYZ-123',
      conductor: 'Juan Pérez',
    },
    {
      codigoTR: 'TR-002',
      nombre: 'EMPACADORA BETA CÍA. LTDA.',
      ruc: '0997654321',
      vehiculo: 'Van de Carga',
      placa: 'ABC-789',
      conductor: 'Carlos Martínez',
    },
    {
      codigoTR: 'TR-003',
      nombre: 'EMPACADORA GAMMA S.A.',
      ruc: '0991122334',
      vehiculo: 'Camioneta',
      placa: 'DEF-456',
      conductor: 'Luisa Rodríguez',
    },
  ];

  // Función para mostrar el modal con los detalles de la empacadora
  const showModal = (logistica) => {
    setSelectedLogistics(logistica);
    setIsModalVisible(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedLogistics(null);
  };

  return (
    <>
      <PageHeader
        highlightText="AquaLink Empacadora"
        title="Transportistas"
      />
      <Main>
        <Row gutter={[25, 25]}>
          {empacadoras.map((empacadora, index) => (
            <Col
              key={index}
              xl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              className="empacadora-card"
            >
              <Cards headless>
                <div className="empacadora-card-header">
                  <Heading as="h4">{empacadora.nombre}</Heading>
                </div>
                <div
                  className="empacadora-card-body"
                  style={{ textAlign: 'center' }}
                >
                  <Avatar
                    style={{
                      backgroundColor: '#b5b5b5',
                      verticalAlign: 'middle',
                      marginBottom: '15px',
                    }}
                    size={64}
                  >
                    {empacadora.nombre
                      .split(' ')
                      .map((word) => word[0])
                      .join('')
                      .toUpperCase()}
                  </Avatar>
                  <Typography.Paragraph>
                    <strong>RUC:</strong> {empacadora.ruc}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    <strong>Código TR:</strong> {empacadora.codigoTR}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    <strong>Tipos de Vehículo:</strong> {empacadora.vehiculo}
                  </Typography.Paragraph>
                 
                  <Button
                    type="primary"
                    onClick={() => showModal(empacadora)}
                    style={{ marginTop: '10px' }}
                  >
                    Ver Detalles
                  </Button>
                </div>
              </Cards>
            </Col>
          ))}
        </Row>

        {/* Modal para mostrar detalles adicionales */}
        <Modal
          title="Detalles de la Empacadora"
          visible={isModalVisible}
          onCancel={closeModal}
          footer={[
            <Button key="close" onClick={closeModal}>
              Cerrar
            </Button>,
          ]}
          width={500} // Ajusta el ancho según tus necesidades
        >
          {selectedLogistics && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography.Title level={4}>
                {selectedLogistics.nombre}
              </Typography.Title>
              <Typography.Paragraph>
                <strong>RUC:</strong> {selectedLogistics.ruc}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Código TR:</strong> {selectedLogistics.codigoTR}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Vehículo:</strong> {selectedLogistics.vehiculo}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Placa:</strong> {selectedLogistics.placa}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>Conductor:</strong> {selectedLogistics.conductor}
              </Typography.Paragraph>
              {/* Si deseas agregar más información, como Google Maps, puedes hacerlo aquí */}
              {/* <GoogleMaps location={selectedLogistics.geoDatos} /> */}
            </div>
          )}
        </Modal>
      </Main>
    </>
  );
}

export default CarriersViewCustody;
