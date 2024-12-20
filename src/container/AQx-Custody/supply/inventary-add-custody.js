import React, { useState } from 'react';
import { PageHeader } from '../../../components/page-headers/page-headers.js';
import { Main } from '../../styled.js';
import { Cards } from '../../../components/cards/frame/cards-frame.js';
import { Row, Col, Select, Button, Modal, InputNumber, Form, message } from 'antd';

const binesArray = Array.from({length: 2000}, (_, i) => i + 1);

// Primeros 100 bines ocupados
const occupiedBines = new Set(binesArray.slice(0, 100));

// Sellos simulados (10 códigos aleatorios alfanuméricos)
const generateRandomSeal = () => Math.random().toString(36).substring(2, 12).toUpperCase();
const sealsArray = Array.from({length: 10}, () => generateRandomSeal());

// Controladores simulados desde "BD"
const controllers = ['Controlador A', 'Controlador B', 'Controlador C'];

function InventaryAddCustody() {
  const [form] = Form.useForm();

  const [containerType, setContainerType] = useState(null);
  const [binModalVisible, setBinModalVisible] = useState(false);
  const [selectedBines, setSelectedBines] = useState([]);
  
  const [sealModalVisible, setSealModalVisible] = useState(false);
  const [selectedSeals, setSelectedSeals] = useState([]);

  const [rangeStart, setRangeStart] = useState(null); 

  const handleContainerTypeChange = (value) => {
    setContainerType(value);
    setSelectedBines([]);
    setRangeStart(null);
  };

  const handleOpenBinModal = () => {
    setBinModalVisible(true);
  };

  const handleCloseBinModal = () => {
    setBinModalVisible(false);
  };

  const handleOpenSealModal = () => {
    setSealModalVisible(true);
  };

  const handleCloseSealModal = () => {
    setSealModalVisible(false);
  };

  const toggleSealSelection = (seal) => {
    if (selectedSeals.includes(seal)) {
      setSelectedSeals(selectedSeals.filter(s => s !== seal));
    } else {
      setSelectedSeals([...selectedSeals, seal]);
    }
  };

  const toggleBinSelection = (binNumber) => {
    if (occupiedBines.has(binNumber)) return;

    if (rangeStart === null) {
      // Si el bin no está seleccionado, lo seleccionamos y guardamos como rangeStart
      if (!selectedBines.includes(binNumber)) {
        setSelectedBines([...selectedBines, binNumber]);
        setRangeStart(binNumber);
      } else {
        // Si ya estaba seleccionado y se hace click, lo deseleccionamos y no establecemos rangeStart
        setSelectedBines(selectedBines.filter(b => b !== binNumber));
        setRangeStart(null);
      }
    } else {
      if (binNumber !== rangeStart) {
        const start = Math.min(rangeStart, binNumber);
        const end = Math.max(rangeStart, binNumber);

        const range = binesArray.filter(b => b >= start && b <= end && !occupiedBines.has(b));

        const uniqueSelection = Array.from(new Set([...selectedBines, ...range]));
        setSelectedBines(uniqueSelection);
      } else {
        if (selectedBines.includes(binNumber)) {
          setSelectedBines(selectedBines.filter(b => b !== binNumber));
        } else {
          setSelectedBines([...selectedBines, binNumber]);
        }
      }

      setRangeStart(null);
    }
  };

  const handleSubmit = () => {
    form.validateFields().then(values => {
      const dataToSend = {
        ...values,
        containerType,
        bines: containerType === 'BIN' ? selectedBines : [],
        seals: selectedSeals,
      };
      console.log('Datos a enviar:', dataToSend);
      message.success("Datos enviados correctamente!");
    }).catch(() => {
      message.error("Por favor complete todos los campos requeridos.");
    });
  };

  return (
    <>
      <PageHeader
        highlightText="Aqualink Empacadora"
        title="Agregar Suministro"
      />
      <Main>
        <Cards title="Inventario">
          <Form form={form} layout="horizontal" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Row gutter={16} style={{ marginBottom: '20px' }}>
              <Col span={12}>
                <Form.Item 
                  label="Tipo de Contenedor" 
                  name="tipoContenedor" 
                  rules={[{ required: true, message: 'Seleccione un tipo de contenedor' }]}
                >
                  <Select placeholder="Seleccione un tipo" onChange={handleContainerTypeChange}>
                    <Select.Option value="BIN">BIN</Select.Option>
                    <Select.Option value="GAVETA">GAVETA</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {containerType === 'BIN' && (
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

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item 
                  label="Gavetas Sólidas (S)" 
                  name="gavetasSolidas" 
                  rules={[{ required: true, message: 'Ingrese número de gavetas sólidas' }]}
                >
                  <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="Gavetas Caladas (K)" 
                  name="gavetasCaladas" 
                  rules={[{ required: true, message: 'Ingrese número de gavetas caladas' }]}
                >
                  <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item 
                  label="Hielo (sacos)" 
                  name="hielo" 
                  rules={[{ required: true, message: 'Ingrese número de sacos de hielo' }]}
                >
                  <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item 
                  label="MetaBisulfito (sacos)" 
                  name="metabisulfito" 
                  rules={[{ required: true, message: 'Ingrese número de sacos de metabisulfito' }]}
                >
                  <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

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

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item 
                  label="Asignar Controlador" 
                  name="controlador" 
                  rules={[{ required: true, message: 'Seleccione un controlador' }]}
                >
                  <Select placeholder="Seleccione un controlador">
                    {controllers.map((ctrl, index) => (
                      <Select.Option key={index} value={ctrl}>{ctrl}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'right' }}>
                  <Button type="primary" onClick={handleSubmit}>Enviar</Button>
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
        width={1000} // Más ancho
      >
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(20, 1fr)', 
          gap: '5px', 
          maxHeight: '400px', 
          overflowY: 'auto' 
        }}>
          {binesArray.map(bin => {
            const isOccupied = occupiedBines.has(bin);
            const isSelected = selectedBines.includes(bin);
            return (
              <Button
                key={bin}
                style={{ 
                  height: '40px', 
                  padding: 0, 
                  backgroundColor: isOccupied 
                    ? '#f5222d' 
                    : (isSelected ? '#1890ff' : '#fff'), 
                  color: isOccupied ? '#fff' : '#000' 
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
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '5px', 
          maxHeight: '400px', 
          overflowY: 'auto' 
        }}>
          {sealsArray.map((seal, index) => {
            const isSelected = selectedSeals.includes(seal);
            return (
              <Button
                key={index}
                style={{ 
                  height: '40px', 
                  padding: 0, 
                  backgroundColor: isSelected ? '#1890ff' : '#fff',
                  color: isSelected ? '#fff' : '#000'
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
