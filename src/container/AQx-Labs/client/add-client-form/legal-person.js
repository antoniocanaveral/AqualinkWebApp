import { Col, Form, Input, InputNumber, Row, Select } from "antd";
const { Option } = Select;

export const LegalPersonForm = () => (
    <>
        {/* Información General */}
        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Razón Social"
                    name="razonSocial"
                    rules={[{ required: true, message: 'Ingrese la razón social' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="RUC"
                    name="ruc"
                    rules={[{ required: true, message: 'Ingrese el RUC' }]}
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
                    label="Representante Legal"
                    name="representanteLegal"
                    rules={[{ required: true, message: 'Ingrese el representante legal' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="CC (Representante Legal)"
                    name="ccRepresentante"
                    rules={[{ required: true, message: 'Ingrese la CC del representante legal' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Correo Electrónico (Representante Legal)"
                    name="correoRepresentante"
                    rules={[
                        { required: true, message: 'Ingrese el correo del representante legal' },
                        { type: 'email', message: 'Ingrese un correo válido' },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Correo Electrónico (General) (opcional)"
                    name="correoGeneral"
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
            <strong>● Información de Laboratorio</strong>
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
                    label="Nombre de Laboratorio"
                    name="nombreLaboratorio"
                    rules={[{ required: true, message: 'Ingrese el nombre del Laboratorio' }]}
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
                    label="Tipo de Laboratorio"
                    name="tipoLaboratorio"
                    rules={[{ required: true, message: 'Seleccione el tipo de camaronera' }]}
                >
                    <Select placeholder="Seleccione Tipo de Camaronera">
                        <Option value="maduracion">Maduración</Option>
                        <Option value="Pl">Pl</Option>
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
                        <Option value="semiIntensivo">Semi Intensivo</Option>
                        <Option value="intensivo">Intensivo</Option>
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
                        <Option value="biFasico">Mono Fásico (MF)</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Capacidad Instalada(mill de Larvas)"
                    name="capacidadInstalada"
                    rules={[{ required: true, message: 'Ingrese la capacidad instalada' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Número de Módulos"
                    name="numeroModulos"
                    rules={[{ required: true, message: 'Ingrese el número de Módulos' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>

        </Row>

        <Row gutter={16}>
            <Col span={8}>
                <Form.Item
                    label="Número de Tanques"
                    name="numeroTanques"
                    rules={[{ required: true, message: 'Ingrese el número de Tanques' }]}
                >
                    <InputNumber min={0} style={{ width: '100%' }} />
                </Form.Item>
            </Col>
        </Row>


    </>
);