import { Col, Form, Input, InputNumber, Row, Select } from "antd";
const { Option } = Select;

export const NaturalPersonForm = () => (

    <>
        {/* Información General */}
        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Nombre"
                    name="nombre"
                    rules={[{ required: true, message: 'Ingrese el nombre' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="CC"
                    name="cc"
                    rules={[{ required: true, message: 'Ingrese la CC' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Dirección Fiscal"
                    name="direccionFiscal"
                    rules={[{ required: true, message: 'Ingrese la dirección fiscal' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Correo Electrónico"
                    name="correo"
                    rules={[
                        { required: true, message: 'Ingrese el correo electrónico' },
                        { type: 'email', message: 'Ingrese un correo válido' },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Teléfono (Convencional)"
                    name="telefonoConvencional"
                    rules={[{ required: true, message: 'Ingrese el teléfono convencional' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Teléfono (Celular)"
                    name="telefonoCelular"
                    rules={[{ required: true, message: 'Ingrese el teléfono celular' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>
{/* Separador: Información de Empacadora */}
<div style={{ marginTop: '20px', marginBottom: '10px' }}>
    <strong>● Información de Empacadora</strong>
</div>

<Row gutter={16}>
    <Col span={8}>
        <Form.Item
            label="Tipo de Empacadora"
            name="tipoEmpacadora"
            rules={[{ required: true, message: 'Seleccione un tipo de empacadora' }]}
        >
            <Select placeholder="Seleccione Tipo de Empacadora">
                <Option value="GIV">GIV</Option>
                <Option value="PPI">PPI</Option>
            </Select>
        </Form.Item>
    </Col>
    <Col span={8}>
        <Form.Item
            label="Nombre de la Empacadora"
            name="nombreEmpacadora"
            rules={[{ required: true, message: 'Ingrese el nombre de la empacadora' }]}
        >
            <Input />
        </Form.Item>
    </Col>
    <Col span={8}>
        <Form.Item
            label="Sistema de Producción"
            name="sistemaProduccion"
            rules={[{ required: true, message: 'Seleccione el sistema de producción' }]}
        >
            <Select placeholder="Seleccione Sistema de Producción">
                <Option value="HOSO">HOSO</Option>
                <Option value="HLSO">HLSO</Option>
            </Select>
        </Form.Item>
    </Col>
</Row>

<Row gutter={16}>
    <Col span={8}>
        <Form.Item
            label="Protocolo de Cosecha"
            name="protocoloCosecha"
            rules={[{ required: true, message: 'Seleccione el protocolo de cosecha' }]}
        >
            <Select placeholder="Seleccione Protocolo de Cosecha">
                <Option value="Bines">Bines</Option>
                <Option value="Gavetas">Gavetas</Option>
                <Option value="BinesYGavetas">Bines y Gavetas</Option>
            </Select>
        </Form.Item>
    </Col>
    <Col span={8}>
        <Form.Item
            label="Capacidad de Procesamiento Semanal (Kg)"
            name="capacidadProcesamientoSemanal"
            rules={[{ required: true, message: 'Ingrese la capacidad de procesamiento semanal' }]}
        >
            <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
    </Col>
    <Col span={8}>
        <Form.Item
            label="Capacidad de Procesamiento Diario (Kg)"
            name="capacidadProcesamientoDiario"
            rules={[{ required: true, message: 'Ingrese la capacidad de procesamiento diario' }]}
        >
            <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
    </Col>
</Row>

    </>

)