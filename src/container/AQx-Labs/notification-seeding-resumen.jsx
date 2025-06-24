import React from 'react';
import { Row, Col, Table, Button } from 'antd';
import { Main } from '../styled';
import moment from 'moment';
import { UilLocationPoint, UilPhoneAlt, UilFastMailAlt, UilFlaskPotion } from '@iconscout/react-unicons';
import { Cards } from '../../components/cards/frame/cards-frame';
import banco_pichincha_logo from '../../static/img/bank/banco-pichincha.jpg';

function NotificationSeedingResumen() {

  const labInfoData = [
    { key: '1', label: 'Disponibilidad de Procesamiento:', value: '45,860 lbs' },
    { key: '2', label: 'Masa de Procesamiento (46.3%):', value: '21,500 lbs (aprox.)' },
    { key: '3', label: 'Contenedor:', value: '18 BINES' },
    { key: '4', label: 'Tipo de Siembra:', value: 'Siembra - Cosechadora' },
    { key: '5', label: 'Tiempo de Siembra:', value: '2h 30m (estimado)' },
  ];


  const bankPaymentData = [
    { key: '1', label: 'Banco Pichincha', value: 'Cuenta Corriente #056897321' },
    { key: '2', label: 'Titular', value: 'EcSSA Esmeraldas Cia Ltda' },
    { key: '3', label: 'RUC', value: '1709568978001' },
    { key: '4', label: 'Anticipo', value: '40% (volumen de entrada)' },
    { key: '5', label: 'Pago 1', value: '30% Crédito a 15 días' },
    { key: '6', label: 'Pago 2', value: '30% Crédito a 30 días (liquidación)' },
  ];

  const productTableData = [
    {
      key: '1',
      cantidad: '21,500',
      producto: 'Camarón Blanco del Pacífico (Litopenaeus vannamei)',
      lote: 'EC-0027-05-2022-52640',
      clasificacion: '31/35',
      cosecha: 'Fecha: 23 Febrero 2023\nHora: 08:00 AM\nCosecha: BINES',
      proveedor: 'Factor Producto: 93/100\nSiembras Aceptadas: 25/AÑO (2023)\nTrazabilidad AquaLink: SI',
    },
  ];

  const productTableColumns = [
    { title: 'Cant.', dataIndex: 'cantidad', key: 'cantidad' },
    { title: 'Producto', dataIndex: 'producto', key: 'producto' },
    { title: 'Lote #', dataIndex: 'lote', key: 'lote' },
    { title: 'Clasificación', dataIndex: 'clasificacion', key: 'clasificacion' },
    {
      title: 'Cosecha',
      dataIndex: 'cosecha',
      key: 'cosecha',
      render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
    },
    {
      title: 'Proveedor',
      dataIndex: 'proveedor',
      key: 'proveedor',
      render: (text) => <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>,
    },
  ];

  const columns = [
    { title: '', dataIndex: 'label', key: 'label', width: '45%' },
    { title: '', dataIndex: 'value', key: 'value', width: '55%' },
  ];

  return (
    <>
      <Main>
        <Row gutter={25}>
          <Col sm={24} xs={24}>
            <Cards title="Notificaciones de Siembra">
              {/* Cabecera con logo y datos de contacto */}
              <Row gutter={25}>
                <Col span={18}>
                  <img src={new URL("../../static/img/org/XSSA2.png", import.meta.url).href} alt="Logo" style={{ maxWidth: '150px' }} />
                </Col>
                <Col span={6}>
                  {/* Para la fecha */}
                  <p>
                    <strong>Siembra: {moment().format('DD MMM YYYY')} / 08:00AM</strong><br />
                  </p>
                </Col>
              </Row>

              {/* Información del productor, laboratorio y código de siembra */}
              <Row gutter={25}>
                <Col xl={10} xs={24}>
                  <p className="p_box_notification">
                    <strong>Productor - Camaronera</strong><br />
                    <UilFlaskPotion className="icon" />EcSSA Farms (EcSSA Esmeraldas Cia Ltda)<br />
                    <UilLocationPoint className="icon" /> Manta, Manabí ECUADOR<br />
                    <UilPhoneAlt className="icon" />Teléfono: +593 98 499 4640<br />
                    <UilFastMailAlt className="icon" />Email: info@aquamanagerec.com
                  </p>
                </Col>
                <Col xl={9} xs={24}>
                  <p className="p_box_notification">
                    <strong>Procedencia - Laboratorio</strong><br />
                    <UilFlaskPotion className="icon" />EcSSA Labs (EcSSA Labs Cia Ltda)<br />
                    <UilLocationPoint className="icon" />Manta, Manabí ECUADOR<br />
                    <UilPhoneAlt className="icon" />Teléfono: +593 98 499 4640<br />
                    <UilFastMailAlt className="icon" />Email: info@aquamanagerec.com
                  </p>
                </Col>
                <Col xl={5} xs={24}>
                  <p className="p_box_notification">
                    <strong>Código de Siembra A365EC</strong><br />
                    Textura: 91-95%<br />
                    Días de Cultivo: 87<br />
                    Punto de Siembra: COJIMÍES
                  </p>
                </Col>
              </Row>

              {/* Tabla de productos */}
              <Row gutter={25} style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Table
                    className="custom-table_notification"
                    dataSource={productTableData}
                    columns={productTableColumns}
                    pagination={false}
                    bordered
                    rowClassName={() => 'custom-table-row'}
                  />
                </Col>
              </Row>

              {/* Métodos de Pago */}
              <Row gutter={20} style={{ marginTop: '30px' }}>
               

                {/* Procesamiento */}
                <Col span={24}>
                  <div
                    style={{
                      border: '1px solid #ddd',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      padding: '15px',
                      borderRadius: '8px',
                      backgroundColor: '#fff',
                    }}
                  >
                    <h3>Procesamiento 23/02/2023</h3>
                    <hr />
                    <Table
                      className="custom-table_notification"
                      dataSource={labInfoData}
                      columns={columns}
                      pagination={false}
                      showHeader={false}
                      bordered
                      rowClassName={() => 'custom-table-row'}
                    />
                    <br />
                    <br />
                    
                  </div>
                </Col>
              </Row>

              {/* Botones de acción */}
              <Row justify="center" style={{ marginTop: '30px' }}>
                <Button type="danger" style={{ marginRight: '10px' }}>
                  DESCARTAR
                </Button>
                <Button type="primary">ACEPTAR Y COORDINAR</Button>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default NotificationSeedingResumen;
