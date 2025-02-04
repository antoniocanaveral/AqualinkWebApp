// PreEngordeInfrastructure.js
import React, { useState } from "react";
import { Button, Col, Form, InputNumber, Row, Select, Switch, Input, message } from "antd";

const { Option } = Select;

export const PreEngordeInfrastructure = ({ alimentadores, handleAddAlimentador, form, prefix, addedPiscinas }) => {
  const [metodoAlimentacion, setMetodoAlimentacion] = useState("");


  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Número Manual"
            name={[prefix, 'manualNumber']}
            rules={[{ required: true, message: "Ingrese el número manual" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {/* Campos para Pre Engorde */}
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Extensión (Has)"
            name={[prefix, 'extension']}
            rules={[
              { required: true, message: "Requerido" },
              { type: "number", min: 0.01, message: "Mínimo 0.01" },
            ]}
          >
            <InputNumber min={0.01} step={0.01} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Profundidad Operativa (mts)"
            name={[prefix, 'profundidadOperativa']}
            rules={[
              { required: true, message: "Requerido" },
              { type: "number", min: 0.1, message: "Mínimo 0.1" },
            ]}
          >
            <InputNumber min={0.1} step={0.1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Profundidad de Siembra (mts)"
            name={[prefix, 'profundidadSiembra']}
            rules={[
              { required: true, message: "Requerido" },
              { type: "number", min: 0.1, message: "Mínimo 0.1" },
            ]}
          >
            <InputNumber min={0.1} step={0.1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Profundidad de Transferencia (mts)"
            name={[prefix, 'profundidadTransferencia']}
            rules={[
              { required: true, message: "Requerido" },
              { type: "number", min: 0.1, message: "Mínimo 0.1" },
            ]}
          >
            <InputNumber min={0.1} step={0.1} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item 
            label="Aireación Mecánica (Hp/Ha)" 
            name={[prefix, 'aireacionMecanica']}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Método de Alimentación"
            name={[prefix, 'metodoAlimentacion']}
            rules={[{ required: true, message: "Seleccione un método" }]}
          >
            <Select placeholder="Seleccione" onChange={setMetodoAlimentacion}>
              <Option value="manual">Manual</Option>
              <Option value="automatico">Automático</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      {metodoAlimentacion === "automatico" && (
        <div>
          <h4>Información del Alimentador</h4>
          {Array.from({ length: alimentadores[prefix] || 1 }, (_, i) => (
            <Row gutter={16} key={`${prefix}-alimentador-${i}`}>
              <Col span={6}>
                <Form.Item
                  label={`Alimentador #${i + 1}`}
                  name={[prefix, 'alimentadores', i, 'numero']}
                  rules={[{ required: true, message: "Requerido" }]}
                >
                  <InputNumber min={1} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Marca"
                  name={[prefix, 'alimentadores', i, 'marca']}
                  rules={[{ required: true, message: "Seleccione" }]}
                >
                  <Select placeholder="Seleccione">
                    <Option value="bluebox">BlueBox</Option>
                    <Option value="jetfeeder">JetFeeder</Option>
                    <Option value="biofeeder">BioFeeder</Option>
                    <Option value="aq1">AQ1</Option>
                    <Option value="eruvaka">Eruvaka</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Integración"
                  name={[prefix, 'alimentadores', i, 'integracion']}
                  valuePropName="checked"
                >
                  <Switch checkedChildren="Sí" unCheckedChildren="No" />
                </Form.Item>
              </Col>
            </Row>
          ))}
          <Button
            type="dashed"
            onClick={() => handleAddAlimentador(prefix)}
            style={{ marginTop: 10 }}
          >
            Añadir Alimentador
          </Button>
        </div>
      )}
    </>
  );
};
