import React from 'react';
import { Row, Col, Table, Button } from 'antd';
import { Main } from '../styled';
import moment from 'moment';
import { Cards } from '../../components/cards/frame/cards-frame';
import banco_pichincha_logo from '../../static/img/bank/banco-pichincha.jpg';

function NotificationSeedingResumen() {
  // Datos quemados para la tabla de procesamiento
  const labInfoData = [
    { key: '1', label: 'Disponibilidad de Procesamiento:', value: '45,860 lbs' },
    { key: '2', label: 'Masa de Procesamiento (46.3%):', value: '21,500 lbs (aprox.)' },
    { key: '3', label: 'Contenedor:', value: '18 BINES' },
    { key: '4', label: 'Tipo de Siembra:', value: 'Siembra - Cosechadora' },
    { key: '5', label: 'Tiempo de Siembra:', value: '2h 30m (estimado)' },
  ];

  // Datos quemados para la nueva tabla que deseas agregar (con los datos de la imagen proporcionada)
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
    {
      title: 'Cant.',
      dataIndex: 'cantidad',
      key: 'cantidad',
    },
    {
      title: 'Producto',
      dataIndex: 'producto',
      key: 'producto',
    },
    {
      title: 'Lote #',
      dataIndex: 'lote',
      key: 'lote',
    },
    {
      title: 'Clasificación',
      dataIndex: 'clasificacion',
      key: 'clasificacion',
    },
    {
      title: 'Cosecha',
      dataIndex: 'cosecha',
      key: 'cosecha',
      render: (text) => (
        <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>
      ),
    },
    {
      title: 'Proveedor',
      dataIndex: 'proveedor',
      key: 'proveedor',
      render: (text) => (
        <span style={{ whiteSpace: 'pre-wrap' }}>{text}</span>
      ),
    },
  ];

  const columns = [
    { title: '', dataIndex: 'label', key: 'label', width: '50%' },
    { title: '', dataIndex: 'value', key: 'value', width: '50%' },
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
                  <img src={require("../../static/img/org/XSSA2.png")} alt="Logo" style={{ maxWidth: '150px' }} />

                </Col>
                <Col span={6}>
                  {/* Para la fecha*/}
                  <p>
                    <strong>Siembra: {moment().format('DD MMM YYYY')} / 08:00AM</strong><br />
                  </p>
                </Col>
              </Row>
              <Row gutter={25}>
                <Col xl={8} xs={24}>
                  <p className='p_box_notification'>
                    <strong>Productor - Camaronera</strong><br />
                    EcSSA Farms (EcSSA Esmeraldas Cia Ltda)<br />
                    Manta, Manabí ECUADOR<br />
                    Teléfono: +593 98 499 4640<br />
                    Email: info@aquamanagerec.com
                  </p>
                </Col>
                <Col xl={8} xs={24}>
                  <p className='p_box_notification'>
                    <strong>Procedencia - Laboratorio</strong><br />
                    EcSSA Labs (EcSSA Labs Cia Ltda)<br />
                    Manta, Manabí ECUADOR<br />
                    Teléfono: +593 98 499 4640<br />
                    Email: info@aquamanagerec.com
                  </p>
                </Col>
                <Col xl={8} xs={24}>
                  <h2>Código de Siembra A365EC</h2>
                  <p className='p_box_notification'>
                    <strong>Textura:</strong> 91-95%<br />
                    <strong>Días de Cultivo:</strong> 87<br />
                    <strong>Punto de Siembra:</strong> COJIMÍES
                  </p>
                </Col>
              </Row>

              {/* Tabla de productos */}
              <Row gutter={25} style={{ marginTop: '20px' }}>
                <Col span={24}>
                  <Table
                    className='custom-table_notification'
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
                <Col span={12}>
                  <h3>Métodos de Pago:</h3>

                  <Row>
                    <Col xl={8} xs={24}>
                      <img src={require("../../static/img/bank/banco-pichincha.jpg")} style={{ maxWidth: "150px" }} alt="Banco" />
                    </Col>
                    <Col xl={14} xs={24}>
                      <p>
                        Banco Pichincha: Cuenta Corriente #056897321<br />
                        Titular: EcSSA Esmeraldas Cia Ltda<br />
                        RUC: 1709568978001<br />
                        Anticipo: 40% (volumen de entrada)<br />
                        Pago 1: 30% Crédito a 15 días<br />
                        Pago 2: 30% Crédito a 30 días (liquidación)
                      </p>
                    </Col>
                  </Row>

                </Col>

                {/* Procesamiento */}
                <Col span={12}>
                  <h3>Procesamiento 23/02/2023</h3>
                  <Table
                    className='custom-table_notification'
                    dataSource={labInfoData}
                    columns={columns}
                    pagination={false}
                    showHeader={false}
                    bordered
                    rowClassName={() => 'custom-table-row'}
                  />
                </Col>
              </Row>

              {/* Botones de acción */}
              <Row justify="center" style={{ marginTop: '30px' }}>
                <Button type="danger" style={{ marginRight: '10px' }}>DESCARTAR</Button>
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
