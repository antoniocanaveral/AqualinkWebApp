import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputNumber, Row, Select, Switch } from "antd";

const { Option } = Select;

export const PreEngordeInfrastructure = ({ index, alimentadores, handleAddAlimentador, form }) => {
    const [metodoAlimentacion, setMetodoAlimentacion] = useState(""); // Estado para controlar el método de alimentación

    // Registrar campos dinámicos en el formulario al montar el componente
    useEffect(() => {
        form.setFieldsValue({
            [`piscinaPreEngordeId-${index}`]: form.getFieldValue(`piscinaPreEngordeId-${index}`) || 0,
            [`extensionPreEngorde-${index}`]: form.getFieldValue(`extensionPreEngorde-${index}`) || 0.01,
            [`profundidadOperativaPreEngorde-${index}`]: form.getFieldValue(`profundidadOperativaPreEngorde-${index}`) || 0.01,
            [`profundidadSiembraPreEngorde-${index}`]: form.getFieldValue(`profundidadSiembraPreEngorde-${index}`) || 0.01,
            [`profundidadTransferenciaPreEngorde-${index}`]: form.getFieldValue(`profundidadTransferenciaPreEngorde-${index}`) || 0.01,
            [`aireacionMecanicaPreEngorde-${index}`]: form.getFieldValue(`aireacionMecanicaPreEngorde-${index}`) || 0,
            [`metodoAlimentacionPreEngorde-${index}`]: form.getFieldValue(`metodoAlimentacionPreEngorde-${index}`) || "",
        });
    }, [form, index]);

    return (
        <>
            {/* Identificador de Piscina */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label={`Identificador de Piscina Pre Engorde #${index + 1}`}
                        name={`piscinaPreEngordeId-${index}`}
                        rules={[{ required: true, message: "Ingrese el número de identificador" }]}
                    >
                        <InputNumber min={1} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Extensión (Has)"
                        name={`extensionPreEngorde-${index}`}
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
                        name={`profundidadOperativaPreEngorde-${index}`}
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
                        label="Profundidad de Siembra (mts)"
                        name={`profundidadSiembraPreEngorde-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la profundidad de Siembra (nunca cero)" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>

            </Row>
            {/* Profundidad y Volumen */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Profundidad de Transferencia (mts)"
                        name={`profundidadTransferenciaPreEngorde-${index}`}
                        rules={[
                            { required: true, message: "Ingrese la profundidad de transferencia (nunca cero)" },
                            { type: "number", min: 0.01, message: "Debe ser mayor a 0" },
                        ]}
                    >
                        <InputNumber min={0.01} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Aireación Mecánica (Hp/Ha)" name={`aireacionMecanicaPreEngorde-${index}`}>
                        <InputNumber min={0} style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
            </Row>
            {/* Métodos y Alimentadores */}
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Método de Alimentación"
                        name={`metodoAlimentacionPreEngorde-${index}`}
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
                                    name={`alimentadorNumeroPreEngorde-${index}-${alimentadorIndex}`}
                                    rules={[{ required: true, message: "Ingrese el número del alimentador" }]}
                                >
                                    <InputNumber min={1} style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Marca"
                                    name={`alimentadorMarcaPreEngorde-${index}-${alimentadorIndex}`}
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
                                    name={`alimentadorIntegracionPreEngorde-${index}-${alimentadorIndex}`}
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
