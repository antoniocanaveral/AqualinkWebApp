import React, { useState } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers.jsx';
import { Main } from '../../styled.js';
import { Cards } from '../../../components/cards/frame/cards-frame.jsx';
import { Row, Col, Select, Button, Modal, InputNumber, Form, message } from 'antd';


const binesArray = Array.from({ length: 2000 }, (_, i) => i + 1);


const occupiedBines = new Set(binesArray.slice(0, 100));


const generateRandomSeal = () => Math.random().toString(36).substring(2, 12).toUpperCase();
const sealsArray = Array.from({ length: 10 }, () => generateRandomSeal());


const controllers = ['Controlador A', 'Controlador B', 'Controlador C'];



function InventaryAddCustody() {
  const [form] = Form.useForm();


  const [selectedCategories, setSelectedCategories] = useState([]);


  const [binModalVisible, setBinModalVisible] = useState(false);
  const [selectedBines, setSelectedBines] = useState([]);
  const [rangeStart, setRangeStart] = useState(null);

  const [sealModalVisible, setSealModalVisible] = useState(false);
  const [selectedSeals, setSelectedSeals] = useState([]);


  const handleCategoryChange = (values) => {
    setSelectedCategories(values);


    if (!values.includes('BIN')) {
      setSelectedBines([]);
      setRangeStart(null);
    }

    if (!values.includes('SELLOS')) {
      setSelectedSeals([]);
    }
  };


  const handleOpenBinModal = () => setBinModalVisible(true);
  const handleCloseBinModal = () => setBinModalVisible(false);
  const handleOpenSealModal = () => setSealModalVisible(true);
  const handleCloseSealModal = () => setSealModalVisible(false);


  const toggleSealSelection = (seal) => {
    if (selectedSeals.includes(seal)) {
      setSelectedSeals(selectedSeals.filter((s) => s !== seal));
    } else {
      setSelectedSeals([...selectedSeals, seal]);
    }
  };


  const toggleBinSelection = (binNumber) => {

    if (occupiedBines.has(binNumber)) return;

    if (rangeStart === null) {

      if (!selectedBines.includes(binNumber)) {
        setSelectedBines([...selectedBines, binNumber]);
        setRangeStart(binNumber);
      } else {

        setSelectedBines(selectedBines.filter((b) => b !== binNumber));
        setRangeStart(null);
      }
    } else {

      if (binNumber !== rangeStart) {
        const start = Math.min(rangeStart, binNumber);
        const end = Math.max(rangeStart, binNumber);

        const range = binesArray.filter(
          (b) => b >= start && b <= end && !occupiedBines.has(b)
        );

        const uniqueSelection = Array.from(new Set([...selectedBines, ...range]));
        setSelectedBines(uniqueSelection);
      } else {

        if (selectedBines.includes(binNumber)) {
          setSelectedBines(selectedBines.filter((b) => b !== binNumber));
        } else {
          setSelectedBines([...selectedBines, binNumber]);
        }
      }
      setRangeStart(null);
    }
  };


  const handleSubmit = () => {
    form.validateFields().then((values) => {

      const dataToSend = { ...values };


      if (selectedCategories.includes('BIN')) {
        dataToSend.bines = selectedBines;
      }

      if (!selectedCategories.includes('GAVETA S')) {
        dataToSend.gavetasSolidas = 0;
      }

      if (!selectedCategories.includes('GAVETA K')) {
        dataToSend.gavetasCaladas = 0;
      }

      if (!selectedCategories.includes('HIELO')) {
        dataToSend.hielo = 0;
      }

      if (!selectedCategories.includes('METABISULFITO')) {
        dataToSend.metabisulfito = 0;
      }

      if (selectedCategories.includes('SELLOS')) {
        dataToSend.seals = selectedSeals;
      } else {
        dataToSend.seals = [];
      }

      console.log('Datos a enviar:', dataToSend);
      message.success('Datos enviados correctamente!');
    })
    .catch(() => {
      message.error('Por favor complete todos los campos requeridos.');
    });
  };

  return (
    <>
      <PageHeader highlightText="Aqualink Empacadora" title="Agregar Suministro" />
      <Main>
        <Cards title="Inventario">
          <Form
            form={form}
            layout="horizontal"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            {/* 1) MultiSelect de categorías */}
            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={12}>
                <Form.Item
                  label="Categorías"
                  name="categorias"
                  rules={[
                    {
                      required: true,
                      message: 'Seleccione al menos una categoría',
                    },
                  ]}
                >
                  <Select
                    mode="multiple"
                    placeholder="Seleccione categorías"
                    onChange={handleCategoryChange}
                  >
                    <Select.Option value="BIN">BIN</Select.Option>
                    <Select.Option value="GAVETA S">GAVETA S</Select.Option>
                    <Select.Option value="GAVETA K">GAVETA K</Select.Option>
                    <Select.Option value="HIELO">HIELO</Select.Option>
                    <Select.Option value="METABISULFITO">METABISULFITO</Select.Option>
                    <Select.Option value="SELLOS">SELLOS</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {/* 2) BIN */}
            {selectedCategories.includes('BIN') && (
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Asignar Bines">
                    <Button onClick={handleOpenBinModal}>Seleccionar Bines</Button>
                    {selectedBines.length > 0 && (
                      <div style={{ marginTop: '10px' }}>
                        <strong>Bines seleccionados:</strong> {selectedBines.join(', ')}
                      </div>
                    )}
                  </Form.Item>
                </Col>
              </Row>
            )}

            {/* 3) GAVETA S (Gavetas Sólidas) */}
            {selectedCategories.includes('GAVETA S') && (
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Gavetas Sólidas (S)"
                    name="gavetasSolidas"
                    rules={[
                      {
                        required: true,
                        message: 'Ingrese número de gavetas sólidas',
                      },
                    ]}
                  >
                    <InputNumber min={0} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
            )}

            {/* 4) GAVETA K (Gavetas Caladas) */}
            {selectedCategories.includes('GAVETA K') && (
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Gavetas Caladas (K)"
                    name="gavetasCaladas"
                    rules={[
                      {
                        required: true,
                        message: 'Ingrese número de gavetas caladas',
                      },
                    ]}
                  >
                    <InputNumber min={0} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
            )}

            {/* 5) HIELO */}
            {selectedCategories.includes('HIELO') && (
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="Hielo (sacos)"
                    name="hielo"
                    rules={[
                      {
                        required: true,
                        message: 'Ingrese número de sacos de hielo',
                      },
                    ]}
                  >
                    <InputNumber min={0} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
            )}

            {/* 6) METABISULFITO */}
            {selectedCategories.includes('METABISULFITO') && (
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="MetaBisulfito (sacos)"
                    name="metabisulfito"
                    rules={[
                      {
                        required: true,
                        message: 'Ingrese número de sacos de metabisulfito',
                      },
                    ]}
                  >
                    <InputNumber min={0} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
            )}

            {/* 7) SELLOS */}
            {selectedCategories.includes('SELLOS') && (
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Asignar Sellos">
                    <Button onClick={handleOpenSealModal}>Seleccionar Sellos</Button>
                    {selectedSeals.length > 0 && (
                      <div style={{ marginTop: '10px' }}>
                        <strong>Sellos seleccionados:</strong> {selectedSeals.join(', ')}
                      </div>
                    )}
                  </Form.Item>
                </Col>
              </Row>
            )}

            {/* ASIGNAR CONTROLADOR (siempre visible) */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Asignar Controlador"
                  name="controlador"
                  rules={[{ required: true, message: 'Seleccione un controlador' }]}
                >
                  <Select placeholder="Seleccione un controlador">
                    {controllers.map((ctrl, index) => (
                      <Select.Option key={index} value={ctrl}>
                        {ctrl}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {/* BOTÓN DE ENVIAR */}
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'right' }}>
                  <Button type="primary" onClick={handleSubmit}>
                    Enviar
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Cards>
      </Main>

      {/* Modal para asignar bines */}
      <Modal
        title="Asignar Bines"
        visible={binModalVisible}
        onOk={handleCloseBinModal}
        onCancel={handleCloseBinModal}
        width={1000}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(20, 1fr)',
            gap: '5px',
            maxHeight: '400px',
            overflowY: 'auto',
          }}
        >
          {binesArray.map((bin) => {
            const isOccupied = occupiedBines.has(bin);
            const isSelected = selectedBines.includes(bin);
            return (
              <Button
                key={bin}
                style={{
                  height: '40px',
                  padding: 0,
                  backgroundColor: isOccupied
                    ? '#f5222d' // Rojo si bin está ocupado
                    : isSelected
                    ? '#1890ff' // Azul si bin está seleccionado
                    : '#fff',   // Blanco en caso contrario
                  color: isOccupied ? '#fff' : '#000',
                }}
                disabled={isOccupied}
                onClick={() => toggleBinSelection(bin)}
              >
                {bin}
              </Button>
            );
          })}
        </div>
      </Modal>

      {/* Modal para asignar sellos */}
      <Modal
        title="Asignar Sellos"
        visible={sealModalVisible}
        onOk={handleCloseSealModal}
        onCancel={handleCloseSealModal}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '5px',
            maxHeight: '400px',
            overflowY: 'auto',
          }}
        >
          {sealsArray.map((seal, index) => {
            const isSelected = selectedSeals.includes(seal);
            return (
              <Button
                key={index}
                style={{
                  height: '40px',
                  padding: 0,
                  backgroundColor: isSelected ? '#1890ff' : '#fff',
                  color: isSelected ? '#fff' : '#000',
                }}
                onClick={() => toggleSealSelection(seal)}
              >
                {seal}
              </Button>
            );
          })}
        </div>
      </Modal>
    </>
  );
}

export default InventaryAddCustody;