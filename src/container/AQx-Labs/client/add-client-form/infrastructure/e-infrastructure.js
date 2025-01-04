// TanqueEngordeInfrastructure.js

import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputNumber, Row, Select, Switch } from "antd";

const { Option } = Select;

export const TanqueEngordeInfrastructure = ({ index, alimentadores, handleAddAlimentador, form }) => {
    const [metodoAlimentacion, setMetodoAlimentacion] = useState(""); // Estado para controlar el método de alimentación

    // Registrar campos dinámicos en el formulario al montar el componente
    useEffect(() => {
        form.setFieldsValue({
            [`identificadorTanque-${index}`]: form.getFieldValue(`identificadorTanque-${index}`) || undefined,
            [`dimensionesLargo-${index}`]: form.getFieldValue(`dimensionesLargo-${index}`) || undefined,
            [`dimensionesAncho-${index}`]: form.getFieldValue(`dimensionesAncho-${index}`) || undefined,
            [`profundidad-${index}`]: form.getFieldValue(`profundidad-${index}`) || undefined,
            [`nivelSiembra-${index}`]: form.getFieldValue(`nivelSiembra-${index}`) || undefined,
            [`nivelCosecha-${index}`]: form.getFieldValue(`nivelCosecha-${index}`) || undefined,
            [`aireacionMecanica-${index}`]: form.getFieldValue(`aireacionMecanica-${index}`) || undefined,
            [`metodoAlimentacion-${index}`]: form.getFieldValue(`metodoAlimentacion-${index}`) || undefined,
        });
    }, [form, index]);

    return (
        <>
            {/* Información del Tanque */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label={`Identificador de Tanque #${index + 1}`}
                        name={`identificadorTanque-${index}`}
                        rules={[{ required: true, message: "Ingrese el identificador del tanque" }]}
                    >
                        <InputNumber min={1} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Dimensiones Largo (mts)"
                        name={`dimensionesLargo-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la dimensión de largo" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Dimensiones Ancho (mts)"
                        name={`dimensionesAncho-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la dimensión de ancho" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Profundidad (mts)"
                        name={`profundidad-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la profundidad del tanque" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Nivel de Siembra (%)"
                        name={`nivelSiembra-${index}`}
                        rules={[
                            { required: true, message: "Ingrese el nivel de siembra" },
                            { type: "number", min: 0, max: 100, message: "Debe estar entre 0 y 100" },
                        ]}
                    >
                        <InputNumber min={0} max={100} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Nivel de Cosecha (%)"
                        name={`nivelCosecha-${index}`}
                        rules={[
                            { required: true, message: "Ingrese el nivel de cosecha" },
                            { type: "number", min: 0, max: 100, message: "Debe estar entre 0 y 100" },
                        ]}
                    >
                        <InputNumber min={0} max={100} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Aireación Mecánica (Hp/m³)"
                        name={`aireacionMecanica-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la potencia de aireación mecánica" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
            </Row>

            {/* Método de Alimentación */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Método de Alimentación"
                        name={`metodoAlimentacion-${index}`}
                        rules={[{ required: true, message: "Seleccione un método de alimentación" }]}
                    >
                        <Select
                            placeholder="Seleccione"
                            onChange={(value) => setMetodoAlimentacion(value)} // Actualiza el estado al cambiar
                        >
                            <Option value="manual">Manual</Option>
                            <Option value="automatico">Automático</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            {/* Mostrar Información del Alimentador solo si el método es Automático */}
            {metodoAlimentacion === "automatico" && (
                <div>
                    <h4>Información del Alimentador</h4>
                    {Array.from({ length: alimentadores[index] || 1 }, (_, alimentadorIndex) => (
                        <Row gutter={16} key={`alimentador-${index}-${alimentadorIndex}`}>
                            <Col span={6}>
                                <Form.Item
                                    label={`Alimentador #${alimentadorIndex + 1}`}
                                    name={`alimentadorNumero-${index}-${alimentadorIndex}`}
                                    rules={[{ required: true, message: "Ingrese el número del alimentador" }]}
                                >
                                    <InputNumber min={1} style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Marca"
                                    name={`alimentadorMarca-${index}-${alimentadorIndex}`}
                                    rules={[{ required: true, message: "Seleccione una marca" }]}
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
                                    name={`alimentadorIntegracion-${index}-${alimentadorIndex}`}
                                    valuePropName="checked"
                                >
                                    <Switch checkedChildren="Sí" unCheckedChildren="No" />
                                </Form.Item>
                            </Col>
                        </Row>
                    ))}
                    {/* Botón para añadir más alimentadores */}
                    <Button
                        type="dashed"
                        onClick={() => handleAddAlimentador(index)}
                        style={{ marginTop: "10px" }}
                    >
                        Añadir Alimentador
                    </Button>
                </div>
            )}
        </>
    );
}
