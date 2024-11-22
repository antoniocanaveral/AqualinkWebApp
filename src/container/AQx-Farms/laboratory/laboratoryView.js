import React, { useState } from 'react';
import { Row, Col, Avatar, Modal, Button } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { GoogleMaps } from '../../../components/maps/google-maps';

function LaboratoryViewFarm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLogistics, setSelectedLogistics] = useState(null);

  const laboratories = [
    {
      tipo: 'P. Jurídica',
      codigoHT: 'PA-126 56',
      razonSocial: 'PROMARISCO S.A.',
      personeria: 'juridica',
      direccion: 'Calle Secundaria 456, Guayaquil',
      telefono: '+593987654322',
      personaContacto: 'Juan Pérez',
      capacidadInstalada: '500,000 larvas',
      numeroModulos: 10,
      numeroTanques: 5,
      geoDatos: 'Ubicación 1 (Google Maps)',
      logistica: {
        tipoContenedor: 'tanque',
        detalles: {
          capacidadMillonesLarvas: 2,
          pesoKG: 100,
          oxigenoEnRuta: 'Sí',
        },
      },
    },
    {
      tipo: 'P. Natural',
      codigoHT: 'PA-143 21',
      razonSocial: 'EXPALSA S.A.',
      personeria: 'natural',
      direccion: 'Av. Principal 123, Quito',
      telefono: '+593987654321',
      personaContacto: 'Carlos Martínez',
      capacidadInstalada: '300,000 larvas',
      numeroModulos: 5,
      numeroTanques: 3,
      geoDatos: 'Ubicación 2 (Google Maps)',
      logistica: {
        tipoContenedor: 'fundas',
        detalles: {
          capacidadMilesLarvas: 200,
          pesoGr: 50,
        },
      },
    },
    {
      tipo: 'P. Jurídica',
      codigoHT: 'PA-480 1',
      razonSocial: 'DUFER CIA. LTDA.',
      personeria: 'juridica',
      direccion: 'Calle Principal 789, Manta',
      telefono: '+593987654323',
      personaContacto: 'Luisa Rodríguez',
      capacidadInstalada: '700,000 larvas',
      numeroModulos: 15,
      numeroTanques: 7,
      geoDatos: 'Ubicación 3 (Google Maps)',
      logistica: {
        tipoContenedor: 'tanque',
        detalles: {
          capacidadMillonesLarvas: 3,
          pesoKG: 150,
          oxigenoEnRuta: 'Sí',
        },
      },
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
        className="ninjadash-page-header-main"
        highlightText="AquaLink Laboratorio"
        title="Vista de Laboratorios"
      />
      <Main>
        <Row gutter={[25, 25]}>
          {laboratories.map((lab, index) => (
            <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24} className="lab-card">
              <Cards headless>
                <div className="lab-card-header">
                  <Heading as="h4">{lab.razonSocial}</Heading>
                  <span className="lab-card-type">
                    {lab.personeria === 'juridica' ? 'P.Jurídica' : 'P.Natural'}
                  </span>
                </div>
                <div className="lab-card-body" style={{ textAlign: 'center' }}>
                  <Avatar
                    style={{
                      backgroundColor: '#b5b5b5',
                      verticalAlign: 'middle',
                      marginRight: '10px',
                    }}
                    size={64}
                  >
                    {lab.razonSocial.split(' ').map((word) => word[0]).join('')}
                  </Avatar>
                  <p>
                    <strong>Código HT:</strong> {lab.codigoHT}
                  </p>
                  <p>
                    <strong>Dirección:</strong> {lab.direccion}
                  </p>
                  <p>
                    <strong>Teléfono:</strong> {lab.telefono}
                  </p>
                  <p>
                    <strong>Persona de Contacto:</strong> {lab.personaContacto}
                  </p>
                  <p>
                    <strong>Capacidad Instalada:</strong> {lab.capacidadInstalada}
                  </p>
                  <p>
                    <strong>Número de Módulos:</strong> {lab.numeroModulos}
                  </p>
                  <p>
                    <strong>Número de Tanques:</strong> {lab.numeroTanques}
                  </p>
                  <Button
                    type="primary"
                    style={{ marginTop: '10px', borderRadius: '5px' }}
                    onClick={() => showModal(lab.logistica)}
                  >
                    Ver Logística de Transporte
                  </Button>
                </div>
                <div className="lab-card-map">
                  <strong>Mapa de Geolocalización:</strong>
                  <GoogleMaps location={lab.geoDatos} height="200px" />
                </div>
              </Cards>
            </Col>
          ))}
        </Row>

        {/* Modal para Logística de Transporte */}
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
              {selectedLogistics.tipoContenedor === 'tanque' ? (
                <>
                  <p>
                    <strong>Capacidad:</strong> {selectedLogistics.detalles.capacidadMillonesLarvas} millones de larvas
                  </p>
                  <p>
                    <strong>Peso:</strong> {selectedLogistics.detalles.pesoKG} KG
                  </p>
                  <p>
                    <strong>Oxígeno en Ruta:</strong> {selectedLogistics.detalles.oxigenoEnRuta}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Capacidad:</strong> {selectedLogistics.detalles.capacidadMilesLarvas} miles de larvas
                  </p>
                  <p>
                    <strong>Peso:</strong> {selectedLogistics.detalles.pesoGr} GR
                  </p>
                </>
              )}
            </>
          )}
        </Modal>
      </Main>
    </>
  );
}

export default LaboratoryViewFarm;
