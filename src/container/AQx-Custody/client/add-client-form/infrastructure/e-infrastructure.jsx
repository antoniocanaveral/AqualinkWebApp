import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputNumber, Row, Select, Switch } from "antd";

const { Option } = Select;

export const EngordeInfrastructure = ({ index, alimentadores, handleAddAlimentador, form }) => {
    const [metodoAlimentacion, setMetodoAlimentacion] = useState(""); // Estado para controlar el método de alimentación


    useEffect(() => {
        form.setFieldsValue({
            [`piscinaEngordeId-${index}`]: form.getFieldValue(`piscinaEngordeId-${index}`) || undefined,
            [`extensionEngorde-${index}`]: form.getFieldValue(`extensionEngorde-${index}`) || undefined,
            [`profundidadOperativaEngorde-${index}`]: form.getFieldValue(`profundidadOperativaEngorde-${index}`) || undefined,
            [`profundidadTransferenciaEngorde-${index}`]: form.getFieldValue(`profundidadTransferenciaEngorde-${index}`) || undefined,
            [`diasCrecimientoEngorde-${index}`]: form.getFieldValue(`diasCrecimientoEngorde-${index}`) || undefined,
            [`cantidadAlimentoEngorde-${index}`]: form.getFieldValue(`cantidadAlimentoEngorde-${index}`) || undefined,
            [`metodoAlimentacionEngorde-${index}`]: form.getFieldValue(`metodoAlimentacionEngorde-${index}`) || undefined,
        });
    }, [form, index]);

    return (
        <>
            {/* Identificador de Piscina */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label={`Identificador de Piscina Engorde #${index + 1}`}
                        name={`piscinaEngordeId-${index}`}
                        rules={[{ required: true, message: "Ingrese el número de identificador" }]}
                    >
                        <InputNumber min={1} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Extensión (Has)"
                        name={`extensionEngorde-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la extensión (nunca cero)" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Profundidad Operativa (mts)"
                        name={`profundidadOperativaEngorde-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la profundidad operativa (nunca cero)" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Profundidad de Transferencia (mts)"
                        name={`profundidadTransferenciaEngorde-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la profundidad de transferencia (nunca cero)" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Días de Crecimiento"
                        name={`diasCrecimientoEngorde-${index}`}
                        rules={[
                            { required: true, message: "Ingrese los días de crecimiento" },
                            { type: "number", min: 1, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={1} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Cantidad de Alimento (Kg)"
                        name={`cantidadAlimentoEngorde-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la cantidad de alimento" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
            </Row>

            {/* Métodos y Alimentadores */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Método de Alimentación"
                        name={`metodoAlimentacionEngorde-${index}`}
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
                                    name={`alimentadorNumeroEngorde-${index}-${alimentadorIndex}`}
                                    rules={[{ required: true, message: "Ingrese el número del alimentador" }]}
                                >
                                    <InputNumber min={1} style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Marca"
                                    name={`alimentadorMarcaEngorde-${index}-${alimentadorIndex}`}
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
                                    name={`alimentadorIntegracionEngorde-${index}-${alimentadorIndex}`}
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
};
