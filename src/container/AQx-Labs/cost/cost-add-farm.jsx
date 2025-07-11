import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Input, Button, Space, DatePicker, message } from 'antd';
import moment from 'moment'; // Importar moment para manejar fechas
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Speedometer from './charts/Speedometer';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { AqualinkMapLab } from '../../../components/maps/aqualink-map-lab';

function CostAddLabs() {
  const [speedometerValue, setSpeedometerValue] = useState(25.89); // Valor inicial del Speedometer
  const speedometerStaticValue = 25.89; // Valor del input
  const [inputValue, setInputValue] = useState(''); // Valor del input


  const [previousWeekRange, setPreviousWeekRange] = useState([]);
  const [currentWeekRange, setCurrentWeekRange] = useState([]);

  const handleUpdateSpeedometer = () => {
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      setSpeedometerValue(numericValue); // Actualiza el valor del Speedometer
      message.success('Speedometer actualizado exitosamente.');
    } else {
      message.error('Por favor, ingresa un valor numérico válido.');
    }
  };

  useEffect(() => {
    const today = moment();


    const startOfCurrentWeek = today.clone().startOf('isoWeek'); // Lunes
    const endOfCurrentWeek = today.clone().endOf('isoWeek'); // Domingo


    const startOfPreviousWeek = startOfCurrentWeek.clone().subtract(1, 'week');
    const endOfPreviousWeek = endOfCurrentWeek.clone().subtract(1, 'week');

    setCurrentWeekRange([startOfCurrentWeek, endOfCurrentWeek]);
    setPreviousWeekRange([startOfPreviousWeek, endOfPreviousWeek]);
  }, []);

  return (
    <>
      <PageHeader
        highlightText="Aqualink Laboratorio"
        title="Costo Indirecto Tanque/Día"
        selectOptions={[
          ["Lab 1", "Lab 2", "Lab 3"],
          ["Módulo 1", "Módulo 2", "Módulo 3"],
          ["Tanque 1", "Tanque 2", "Tanque 3"]
        ]}
      />
      <Main>
        <Row gutter={25}>
          {/* Columna de la Geolocalización */}
          <Col xl={9} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <AqualinkMapLab height={150} />
            </Suspense>
          </Col>

          {/* Columna del Speedometer */}
          <Col xl={15} xs={24} style={{ display: 'flex'}}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title={"Costo Indirecto Tanque/Día"} style={{ display: 'flex', alignItems: 'center' }}>
                <div className='flex-row' style={{ gap: 10 }}>
                  <div>
                    {/* Semana Previa */}
                    <Typography.Text style={{ fontSize: '14px' }}>
                      Costo Indirecto Tanque/Día / Proyectado
                    </Typography.Text>
                    <Input
                      type="number"
                      placeholder="USD 18"
                      defaultValue={"18 USD"}
                      disabled={true}
                      style={{ marginBottom: '8px' }}
                    />
                  </div>
                  <div>
                    {/* Rango de Fecha Semana Previa */}
                    <Typography.Text style={{ fontSize: '14px' }}>
                      Rango de Fecha de la Corrida
                    </Typography.Text>
                    <DatePicker.RangePicker
                      value={previousWeekRange}
                      disabled={true} // Deshabilitado si no deseas que sea editable
                      format="DD/MM/YYYY"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>

                <div className='flex-row' style={{ gap: 10 }}>
                  <div>
                    {/* Semana Actual */}
                    <Typography.Text style={{ fontSize: '14px' }}>
                      Costo Indirecto Tanque/Día / Semana Previa
                    </Typography.Text>
                    <Input
                      type="number"
                      placeholder="USD 19"
                      defaultValue={"19 USD"}
                      disabled={true}
                      style={{ marginBottom: '8px' }}
                    />

                  </div>
                  <div>
                    {/* Rango de Fecha Semana Actual */}
                    <Typography.Text style={{ fontSize: '14px' }}>
                      Rango de Fecha Semana Previa
                    </Typography.Text>
                    <DatePicker.RangePicker
                      value={currentWeekRange}
                      disabled={true} // Deshabilitado si no deseas que sea editable
                      format="DD/MM/YYYY"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>



                <div className='flex-row' style={{ gap: 10 }}>
                  <div>
                    {/* Semana Actual */}
                    <Typography.Text style={{ fontSize: '14px' }}>Costo Indirecto Tanque/Día / Semana Actual</Typography.Text>
                    <Input
                      type="number"
                      placeholder="Ingrese el costo"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      style={{ marginBottom: '8px' }}
                    />
                  </div>
                  <div>
                    {/* Rango de Fecha Semana Actual */}
                    <Typography.Text style={{ fontSize: '14px' }}>
                      Rango de Fecha Semana Actual
                    </Typography.Text>
                    <DatePicker.RangePicker
                      value={currentWeekRange}
                      disabled={true} // Deshabilitado si no deseas que sea editable
                      format="DD/MM/YYYY"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>



                {/* Input para actualizar el Speedometer */}
                <Space direction="vertical" style={{ width: '100%' }}>

                  <Button type="primary" onClick={handleUpdateSpeedometer}>
                    Actualizar
                  </Button>
                </Space>
              </Cards>
            </Suspense>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={12} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Costo Indirecto Tanque/Día Performance" size="large">
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                  <Speedometer value={speedometerStaticValue} />
                </div>
              </Cards>
            </Suspense>
          </Col>
          <Col xl={12} xs={24}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Costo Indirecto Tanque/Día Semana Actual" size="large">
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

export default CostAddLabs;
