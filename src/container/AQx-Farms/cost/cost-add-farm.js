import React, { useState, lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Input, Button, Space } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Speedometer from './charts/Speedometer';
import { GoogleMaps } from '../../../components/maps/google-maps';

function CostAddFarm() {
  const [speedometerValue, setSpeedometerValue] = useState(25.89); // Valor inicial del Speedometer
  const [speedometerStaticValue, setSpeedometerStaticValue] = useState(25.89); // Valor del input
  const [inputValue, setInputValue] = useState(''); // Valor del input

  const handleUpdateSpeedometer = () => {
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSpeedometerValue(numericValue); // Actualiza el valor del Speedometer
    }
  };

  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main"
        highlightText="Aqualink Costos"
        title="Costo Indirecto"
        selectOptions={[
          ["Camaronera 1", "Camaronera 2", "Camaronera 3"],
          ["Sector 1", "Sector 2", "Sector 3"],
          ["Piscina 1", "Piscina 2", "Piscina 3"],
        ]}
      />
      <Main>
        <Row gutter={25}>
          {/* Columna de la Geolocalización */}
          <Col xl={12} xs={24} style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Geolocalización" size="large" style={{ marginBottom: 0 }}>
                <Row gutter={[5, 5]} align="top">
                  <Col xs={24} md={24}>
                    <div>
                      <GoogleMaps height={"220px"} />
                    </div>
                  </Col>
                  <Col xs={24} md={24}>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Camaroneras 1</Typography.Title>
                          <Typography.Text>Área: 307.35 ha</Typography.Text>
                        </div>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Piscina 3</Typography.Title>
                          <Typography.Text>Área: 5.35 ha</Typography.Text>
                        </div>
                        <div className="content-block">
                          <Typography.Title style={{ color: "#666d92" }} level={5}>Pre Cría 3</Typography.Title>
                          <Typography.Text>Área: 1.35 ha</Typography.Text>
                        </div>
                      </div>
                    </Space>
                  </Col>
                </Row>
              </Cards>
            </Suspense>
          </Col>

          {/* Columna del Speedometer */}
          <Col xl={12} xs={24} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title={"Costo Indirecto Hectárea/Día"} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Text style={{ fontSize: '14px' }}>Costo Indirecto Ha/Día/ Proyectado:</Typography.Text>
                    <Input
                      type="number"
                      placeholder="USD 18"
                      defaultValue={"18 USD"}
                      disabled={true}
                    />
                  </Space>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Text style={{ fontSize: '14px' }}>Costo Indirecto Ha/Día:</Typography.Text>
                    <Input
                      type="number"
                      placeholder="USD 19"
                      defaultValue={"19 USD"}
                      disabled={true}
                    />
                  </Space>
                  {/* Input con label */}
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Typography.Text style={{ fontSize: '14px' }}>Costo Hectárea/Día:</Typography.Text>
                    <Input
                      type="number"
                      placeholder="Ingrese el costo"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button type="primary" onClick={handleUpdateSpeedometer}>
                      Actualizar
                    </Button>
                  </Space>
                </div>
                {/* Speedometer */}

              </Cards>
            </Suspense>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xl={12} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="" size="large">
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <Speedometer value={speedometerStaticValue} />
                </div>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="" size="large">
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <Speedometer value={speedometerValue} />
                </div>
              </Cards>
            </Suspense>
          </Col>

        </Row>
      </Main>
    </>
  );
}

export default CostAddFarm;
