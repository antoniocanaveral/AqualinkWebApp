import React, { useState, useEffect } from "react";
import { Button, Col, Form, InputNumber, Row, Select, Switch, Input } from "antd";

const { Option } = Select;

export const PreCriaInfrastructure = ({ form, prefix, brandFeeders, selectedSalesRegion }) => {
  const [metodoAlimentacion, setMetodoAlimentacion] = useState("");
  const [tienePrestamo, setTienePrestamo] = useState(false);

  const profundidadMesa = Form.useWatch([prefix, 'sm_profundidadmesa'], form);
  const profundidadPrestamo = Form.useWatch([prefix, 'sm_profundidadprestamo'], form);

  useEffect(() => {
    if (tienePrestamo && profundidadMesa && profundidadPrestamo) {
      const promedio = (parseFloat(profundidadMesa || 0) + parseFloat(profundidadPrestamo || 0)) / 2;
      form.setFieldsValue({ [prefix]: { ...form.getFieldValue(prefix), sm_oppdepth: promedio } });
    }
  }, [tienePrestamo, profundidadMesa, profundidadPrestamo]);

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

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Extensión (Has)"
            name={[prefix, 'sm_poolsize']}
            rules={[
              { required: true, message: "Ingrese la extensión" },
              { type: "number", min: 0.01, message: "Mínimo 0.01" },
            ]}
          >
            <InputNumber min={0.01} step={0.01} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="¿Tiene préstamo?" valuePropName="checked">
            <Switch checked={tienePrestamo} onChange={setTienePrestamo} />
          </Form.Item>
        </Col>
      </Row>

      {tienePrestamo ? (
        <>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Profundidad Mesa (mts)"
                name={[prefix, 'sm_profundidadmesa']}
                rules={[
                  { required: true, message: "Requerido" },
                  { type: "number", min: 0.01, max: 5, message: "Entre 0.01 y 5" },
                ]}
              >
                <InputNumber min={0.01} max={5} step={0.1} style={{ width: "100%" }} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Profundidad Préstamo (mts)"
                name={[prefix, 'sm_profundidadprestamo']}
                rules={[
                  { required: true, message: "Requerido" },
                  { type: "number", min: 0.01, max: 5, message: "Entre 0.01 y 5" },
                ]}
              >
                <InputNumber min={0.01} max={5} step={0.1} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Profundidad Operativa (mts)"
                name={[prefix, 'sm_oppdepth']}
                rules={[
                  { required: true, message: "Requerido" },
                  { type: "number", min: 0.1, max: 5, message: "Entre 0.1 y 5" },
                ]}
              >
                <InputNumber disabled style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </>
      ) : (
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Profundidad Operativa (mts)"
              name={[prefix, 'sm_oppdepth']}
              rules={[
                { required: true, message: "Requerido" },
                { type: "number", min: 0.1, max: 5, message: "Entre 0.1 y 5" },
              ]}
            >
              <InputNumber min={0.1} max={5} step={0.1} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
      )}

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Aireación Mecánica (Hp/Ha)"
            name={[prefix, 'sm_mechanicalaeration']}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            label="Método de Alimentación"
            name={[prefix, 'feeding_method']}
            rules={[{ required: true, message: "Seleccione un método" }]}
          >
            <Select placeholder="Seleccione" onChange={setMetodoAlimentacion}>
              <Option value="MANUAL">Manual</Option>
              <Option value="AUTOMATIC">Automático</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item hidden label="Sector" name={[prefix, 'c_salesregion_id']}>
            <Input value={selectedSalesRegion} defaultValue={selectedSalesRegion} style={{ width: "100%" }} />
          </Form.Item>
        </Col>
      </Row>

      {metodoAlimentacion === "AUTOMATIC" && (
        <div>
          <h4>Información del Alimentador</h4>
          <Form.List name={[prefix, 'alimentadores']}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
                  <Row gutter={16} key={field.key} align="middle">
                    <Col span={6}>
                      <Form.Item
                        {...field}
                        label="Alimentador"
                        name={[field.name, 'numero']}
                        fieldKey={[field.fieldKey, 'numero']}
                        rules={[{ required: true, message: "Requerido" }]}
                      >
                        <Input style={{ width: "100%" }} />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        {...field}
                        label="Marca"
                        name={[field.name, 'marca']}
                        fieldKey={[field.fieldKey, 'marca']}
                        rules={[{ required: true, message: "Seleccione" }]}
                      >
                        <Select placeholder="Seleccione">
                          {brandFeeders?.map((group) => (
                            <Option key={group?.id} value={group?.id}>
                              {group?.Name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Form.Item
                        {...field}
                        label="Integración"
                        name={[field.name, 'integracion']}
                        fieldKey={[field.fieldKey, 'integracion']}
                        valuePropName="checked"
                      >
                        <Switch checkedChildren="Sí" unCheckedChildren="No" />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Button type="dashed" danger onClick={() => remove(field.name)}>
                        Eliminar
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Button type="dashed" onClick={() => add()} style={{ marginTop: 10 }}>
                  Añadir Alimentador
                </Button>
              </>
            )}
          </Form.List>
        </div>
      )}
    </>
  );
};
