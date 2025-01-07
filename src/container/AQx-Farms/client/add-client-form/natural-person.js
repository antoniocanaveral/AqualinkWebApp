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

        {/* Separador: Información de Camaronera */}
        <div style={{ marginTop: '20px', marginBottom: '10px' }}>
            <strong>● Información de Camaronera</strong>
        </div>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Tipo de Cliente"
                    name="tipoCliente"
                    rules={[{ required: true, message: 'Seleccione un tipo de cliente' }]}
                >
                    <Select placeholder="Seleccione Tipo de Cliente">
                        <Option value="GIV">GIV</Option>
                        <Option value="GPA">GPA</Option>
                        <Option value="FIN">FIN</Option>
                        <Option value="LAB">LAB</Option>
                        <Option value="PAK">PAK</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Nombre de la Camaronera"
                    name="nombreCamaronera"
                    rules={[{ required: true, message: 'Ingrese el nombre de la camaronera' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Provincia"
                    name="provincia"
                    rules={[{ required: true, message: 'Ingrese la provincia' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Cantón"
                    name="canton"
                    rules={[{ required: true, message: 'Ingrese el cantón' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Tipo de Camaronera"
                    name="tipoCamaronera"
                    rules={[{ required: true, message: 'Seleccione el tipo de camaronera' }]}
                >
                    <Select placeholder="Seleccione Tipo de Camaronera">
                        <Option value="isla">Isla</Option>
                        <Option value="tierraFirme">Tierra Firme</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Acuerdo Ministerial"
                    name="acuerdoMinisterial"
                    rules={[{ required: true, message: 'Ingrese el acuerdo ministerial' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Certificado Ambiental (opcional)"
                    name="certificadoAmbiental"
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Certificado de Inocuidad (opcional)"
                    name="certificadoInocuidad"
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Sistema de Cultivo"
                    name="sistemaCultivo"
                    rules={[{ required: true, message: 'Seleccione el sistema de cultivo' }]}
                >
                    <Select placeholder="Seleccione Sistema de Cultivo">
                        <Option value="intensivo">Intensivo</Option>
                        <Option value="semiIntensivo">Semi Intensivo</Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Protocolo de Producción"
                    name="protocoloProduccion"
                    rules={[{ required: true, message: 'Seleccione el protocolo de producción' }]}
                >
                    <Select placeholder="Seleccione Protocolo de Producción">
                        <Option value="biFasico">Bi Fásico (BF)</Option>
                        <Option value="poliFasico">Poli Fásico (PF)</Option>
                        <Option value="triGasico">Tri Gásico (TF)</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Extensión Productiva (Total) en Has."
                    name="extensionProductiva"
                    rules={[{ required: true, message: 'Ingrese la extensión productiva total' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Extensión Pre Crias (Has)"
                    name="extensionPreCrias"
                    rules={[{ required: true, message: 'Ingrese la extensión de pre crías' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Cantidad de Pre Crias (#)"
                    name="cantidadPreCrias"
                    rules={[{ required: true, message: 'Ingrese la cantidad de pre crías' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>

            <Col span={8}>
                <Form.Item
                    label="Extensión Piscinas Pre Engorde"
                    name="extensionPiscinasPreEngorde"
                    rules={[{ required: true, message: 'Ingrese la extensión de piscinas de pre engorde' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Cantidad de Piscinas Pre Engorde (#)"
                    name="cantidadPiscinasPreEngorde"
                    rules={[{ required: true, message: 'Ingrese la cantidad de piscinas de pre engorde' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>


            <Col span={8}>
                <Form.Item
                    label="Extensión Piscinas Engorde (Has)"
                    name="extensionPiscinasEngorde"
                    rules={[{ required: true, message: 'Ingrese la extensión de piscinas de engorde' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Cantidad de Piscinas Engorde (#)"
                    name="cantidadPiscinasEngorde"
                    rules={[{ required: true, message: 'Ingrese la cantidad de piscinas de engorde' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Extensión Canales y Reservorios (opcional)"
                    name="extensionCanalesReservorio"
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>
        </Row>
    </>

)