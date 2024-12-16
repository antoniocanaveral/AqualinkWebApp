import React, { useState } from 'react';
import { Row, Col, Avatar, Modal, Button } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { GoogleMaps } from '../../../components/maps/google-maps';

function PackingViewFarm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLogistics, setSelectedLogistics] = useState(null);

  const empacadoras = [
    {
      codigoPPA: 'PPA-001',
      tipo: 'GIV',
      razonSocial: 'EMPACADORA ALFA S.A.',
      ruc: '0991234567',
      direccion: 'Calle Principal 123, Guayaquil',
      capacidadInstalada: '1000 toneladas',
      telefono: '+593987654321',
      personaContacto: 'Juan Pérez',
      tipoContenedor: 'bines',
      tipoPesca: 'convencional',
      geoDatos: 'Ubicación 1 (Google Maps)',
    },
    {
      codigoPPA: 'PP-102',
      tipo: 'GP',
      razonSocial: 'EMPACADORA BETA CÍA. LTDA.',
      ruc: '0997654321',
      direccion: 'Av. Secundaria 456, Quito',
      capacidadInstalada: '800 toneladas',
      telefono: '+593123456789',
      personaContacto: 'Carlos Martínez',
      tipoContenedor: 'gavetas',
      tipoPesca: 'hielo_liquido',
      geoDatos: 'Ubicación 2 (Google Maps)',
    },
    {
      codigoPPA: 'PPA-210',
      tipo: 'LAB',
      razonSocial: 'EMPACADORA GAMMA S.A.',
      ruc: '0991122334',
      direccion: 'Calle Secundaria 789, Cuenca',
      capacidadInstalada: '1200 toneladas',
      telefono: '+593112233445',
      personaContacto: 'Luisa Rodríguez',
      tipoContenedor: 'bines',
      tipoPesca: 'convencional',
      geoDatos: 'Ubicación 3 (Google Maps)',
    },
  ];

  const showModal = (logistica) => {
    setSelectedLogistics(logistica);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedLogistics(null);
  };

  return (
    <>
      <PageHeader
        
        highlightText="AquaLink Empacadora"
        title="Vista de Empacadoras"
      />
      <Main>
        <Row gutter={[25, 25]}>
          {empacadoras.map((empacadora, index) => (
            <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24} className="empacadora-card">
              <Cards headless>
                <div className="empacadora-card-header">
                  <Heading as="h4">{empacadora.razonSocial}</Heading>
                </div>
                <div className="empacadora-card-body" style={{ textAlign: 'center' }}>
                  <Avatar
                    style={{
                      backgroundColor: '#b5b5b5',
                      verticalAlign: 'middle',
                      marginRight: '10px',
                    }}
                    size={64}
                  >
                    {empacadora.razonSocial.split(' ').map((word) => word[0]).join('')}
                  </Avatar>
                  <p>
                    <strong>Código PPA:</strong> {empacadora.codigoPPA}
                  </p>
                  <p>
                    <strong>RUC:</strong> {empacadora.ruc}
                  </p>
                  <p>
                    <strong>Dirección:</strong> {empacadora.direccion}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {empacadora.telefono}
                  </p>
                  <p>
                    <strong>Persona de Contacto:</strong> {empacadora.personaContacto}
                  </p>
                  <p>
                    <strong>Capacidad Instalada:</strong> {empacadora.capacidadInstalada}
                  </p>
                  <Button
                    type="primary"
                    style={{ marginTop: '10px', borderRadius: '5px' }}
                    onClick={() => showModal(empacadora)}
                  >
                    Ver Logística
                  </Button>
                </div>
                <div className="empacadora-card-map">
                  <strong>Mapa de Geolocalización:</strong>
                  <GoogleMaps location={empacadora.geoDatos} height="200px" />
                </div>
              </Cards>
            </Col>
          ))}
        </Row>

        {/* Modal para Logística */}
        <Modal
          title="Logística de Transporte"
          visible={isModalVisible}
          onCancel={closeModal}
          footer={<Button onClick={closeModal}>Cerrar</Button>}
        >
          {selectedLogistics && (
            <>
              <p>
                <strong>Tipo de Contenedor:</strong> {selectedLogistics.tipoContenedor}
              </p>
              <p>
                <strong>Tipo de Pesca:</strong>{' '}
                {selectedLogistics.tipoPesca === 'convencional' ? 'Convencional' : 'Hielo Líquido'}
              </p>
            </>
          )}
        </Modal>
      </Main>
    </>
  );
}

export default PackingViewFarm;
