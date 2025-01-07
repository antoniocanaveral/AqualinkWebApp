import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { GoogleMaps } from '../../../components/maps/google-maps';

function ShrimpViewLab() {
  const laboratories = [
    {
      tipo: 'P. Jurídica',
      codigoGR: 'GR-126 56',
      razonSocial: 'PROMARISCO S.A.',
      personeria: 'juridica',
      direccion: 'Calle Secundaria 456, Guayaquil',
      telefono: '+593987654322',
      personaContacto: 'Juan Pérez',
      areaTotalProduccion: '10,000 m²',
      numeroSectores: 5,
      numeroPiscinas: 3,
      geoDatos: 'Ubicación 1 (Google Maps)',
      detallePiscinas: [
        { piscina: 1, detalle: 'Producción de 100,000 larvas' },
        { piscina: 2, detalle: 'Producción de 120,000 larvas' },
        { piscina: 3, detalle: 'Producción de 110,000 larvas' },
      ],
    },
    {
      tipo: 'P. Natural',
      codigoGR: 'GR-143 21',
      razonSocial: 'EXPALSA S.A.',
      personeria: 'natural',
      direccion: 'Av. Principal 123, Quito',
      telefono: '+593987654321',
      personaContacto: 'Carlos Martínez',
      areaTotalProduccion: '8,000 m²',
      numeroSectores: 4,
      numeroPiscinas: 2,
      geoDatos: 'Ubicación 2 (Google Maps)',
      detallePiscinas: [
        { piscina: 1, detalle: 'Producción de 80,000 larvas' },
        { piscina: 2, detalle: 'Producción de 90,000 larvas' },
      ],
    },
    {
      tipo: 'P. Jurídica',
      codigoGR: 'GR-480 1',
      razonSocial: 'DUFER CIA. LTDA.',
      personeria: 'juridica',
      direccion: 'Calle Principal 789, Manta',
      telefono: '+593987654323',
      personaContacto: 'Luisa Rodríguez',
      areaTotalProduccion: '15,000 m²',
      numeroSectores: 6,
      numeroPiscinas: 4,
      geoDatos: 'Ubicación 3 (Google Maps)',
      detallePiscinas: [
        { piscina: 1, detalle: 'Producción de 150,000 larvas' },
        { piscina: 2, detalle: 'Producción de 160,000 larvas' },
        { piscina: 3, detalle: 'Producción de 170,000 larvas' },
        { piscina: 4, detalle: 'Producción de 180,000 larvas' },
      ],
    },
  ];

  return (
    <>
      <PageHeader
        highlightText="AquaLink Laboratorio"
        title="Vista de Clientes"
      />
      <Main>
        <Row gutter={[25, 25]}>
          {laboratories.map((lab, index) => (
            <Col
              key={index}
              xl={8}
              lg={8}
              md={12}
              sm={24}
              xs={24}
              className="lab-card"
              style={{ display: 'flex' }}
            >
              <Cards headless>
                <div className="lab-card-header">
                  <Heading as="h4">{lab.razonSocial}</Heading>
                  <span className="lab-card-type">
                    {lab.personeria === 'juridica' ? 'P.Jurídica' : 'P.Natural'}
                  </span>
                </div>
                <div
                  className="lab-card-body"
                  style={{ textAlign: 'center' }}
                >
                  <Avatar
                    style={{
                      backgroundColor: '#b5b5b5',
                      verticalAlign: 'middle',
                      marginRight: '10px',
                    }}
                    size={64}
                  >
                    {lab.razonSocial
                      .split(' ')
                      .map((word) => word[0])
                      .join('')}
                  </Avatar>
                  <p>
                    <strong>Código GR:</strong> {lab.codigoGR}
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
                    <strong>Área Total de Producción:</strong> {lab.areaTotalProduccion}
                  </p>
                  <p>
                    <strong>Número de Sectores:</strong> {lab.numeroSectores}
                  </p>
                  <p>
                    <strong>Número de Piscinas:</strong> {lab.numeroPiscinas}
                  </p>
                </div>
                <div className="lab-card-map" style={{height: '250px'}}>
                  <strong>Mapa de Geolocalización:</strong>
                  <GoogleMaps location={lab.geoDatos} height="200px" />
                </div>
                {/* Detalle de Producción por Piscina */}
                <div className="lab-card-detalle">
                  <strong>Detalle de Producción por Piscina:</strong>
                  {lab.detallePiscinas.map((detalle, idx) => (
                    <p key={idx}>
                      <strong>Piscina {detalle.piscina}:</strong> {detalle.detalle}
                    </p>
                  ))}
                </div>
              </Cards>
            </Col>
          ))}
        </Row>
      </Main>
    </>
  );
}

export default ShrimpViewLab;
