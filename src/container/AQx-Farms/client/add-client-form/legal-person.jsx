import { Col, Form, Input, InputNumber, Row, Select } from "antd";
const { Option } = Select;

export const LegalPersonForm = ({ regions, cities, clientType }) => {

    const disableOrgSelect = clientType === "GIV" || clientType === "GPA";
    const defaultOrgValue = disableOrgSelect ? clientType : undefined;

    return (<>



        {/* Información General */}
        <Row gutter={16}>
            <Col span={4}>
                <Form.Item
                    label="Razón Social"
                    name="businessname"
                    rules={[{ required: true, message: 'Ingrese la razón social' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="RUC"
                    name="taxid"
                    rules={[{ required: true, message: 'Ingrese el RUC' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Dirección Fiscal"
                    name="sm_locationname"
                    rules={[{ required: true, message: 'Ingrese la dirección fiscal' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Teléfono"
                    name="phone"
                    rules={[{ required: true, message: 'Ingrese el teléfono' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>
            <Col span={4}>
                <Form.Item
                    label="Representante Legal"
                    name="name_rl"
                    rules={[{ required: true, message: 'Ingrese el representante legal' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="CC (Representante Legal)"
                    name="taxid_rl"
                    rules={[{ required: true, message: 'Ingrese la CC del representante legal' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Correo Electrónico (RL)"
                    name="email_rl"
                    rules={[
                        { required: true, message: 'Ingrese el correo del representante legal' },
                        { type: 'email', message: 'Ingrese un correo válido' },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Celular"
                    name="phone2"
                    rules={[{ required: true, message: 'Ingrese el teléfono' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
        </Row>



        {/* Separador: Información de Camaronera */}
        <div style={{ marginTop: '20px', marginBottom: '10px' }}>
            <strong>● Información Complementaria</strong>
        </div>

        <Row gutter={16}>
            <Col span={4}>
                <Form.Item
                    label="Tipo de Org"
                    name="SM_OrgType"
                >
                    <Select
                        size="large"
                        placeholder="Seleccione Tipo de Cliente"
                        disabled={disableOrgSelect}
                        defaultValue={defaultOrgValue}
                        value={defaultOrgValue}
                    >
                        <Option value="GIV">GIV</Option>
                        <Option value="GPA">GPA</Option>
                        <Option value="FIN">FIN</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Nombre de la Camaronera"
                    name="Name"
                    rules={[{ required: true, message: 'Ingrese el nombre de la camaronera' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Provincia"
                    name="c_region"
                    rules={[{ required: true, message: 'Ingrese la provincia' }]}
                >
                    <Select size="large" placeholder="Seleccione un grupo empresarial">
                        {regions.map((group) => (
                            <Select.Option key={group?.id} value={group?.id}>
                                {group?.Name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Cantón"
                    name="c_city"
                    rules={[{ required: true, message: 'Ingrese el cantón' }]}
                >
                    <Select size="large" placeholder="Seleccione un grupo empresarial">
                        {cities.map((group) => (
                            <Select.Option key={group?.id} value={group?.id}>
                                {group?.Name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Tipo de Camaronera"
                    name="SM_MainlandOrIsland"
                    rules={[{ required: true, message: 'Seleccione el tipo de camaronera' }]}
                >
                    <Select size="large" placeholder="Seleccione Tipo de Camaronera">
                        <Option value="ISLAND">Isla</Option>
                        <Option value="MAINLAND">Tierra Firme</Option>
                    </Select>
                </Form.Item>
            </Col>
        </Row>

        <Row gutter={16}>


            <Col span={4}>
                <Form.Item
                    label="Registro SCI"
                    name="sm_codigovap"
                    rules={[{ required: true, message: 'Ingrese el acuerdo ministerial' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Acuerdo Ministerial"
                    name="sm_ministerialagreement"
                    rules={[{ required: true, message: 'Ingrese el acuerdo ministerial' }]}
                >
                    <Input />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Certificado Ambiental (opcional)"
                    name="sm_safetycertificate"
                >
                    <Input />
                </Form.Item>
            </Col>

            <Col span={5}>
                <Form.Item
                    label="Certificación Internacional"
                    name="sm_certifications"
                >
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Seleccione certificados"
                    >
                        <Option value="cert1">ASC</Option>
                        <Option value="cert2">GLOBAL GAP</Option>
                        <Option value="cert3">BAP</Option>
                        <Option value="cert4">HACCP</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Código "
                    name="sm_safetycertificate"
                >
                    <Input />
                </Form.Item>
            </Col>

        </Row>

        <Row gutter={16}>
            <Col span={4}>
                <Form.Item
                    label="Sistema de Cultivo"
                    name="sm_productiontype"
                    rules={[{ required: true, message: 'Seleccione el sistema de cultivo' }]}
                >
                    <Select size="large" placeholder="Seleccione Sistema de Cultivo">
                        <Option value="SEMI_INTENSIVE">Semi Intensivo</Option>
                        <Option value="INTENSIVE">Intensivo</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Sistema de Agua"
                    name="water_system"
                    rules={[{ required: true, message: 'Seleccione el sistema de Agua' }]}
                >
                    <Select size="large" placeholder="Seleccione Sistema de Agua">
                        <Option value="CONVENTIONAL">convencional</Option>
                        <Option value="RECIRCULATION">recirculación</Option>
                    </Select>
                </Form.Item>
            </Col>

            <Col span={5}>
                <Form.Item
                    label="Número de Sectores"
                    name="c_sales_region"
                    rules={[{ required: true, message: 'Ingrese sectores' }]}
                >
                    <InputNumber size="large" style={{ width: '100%' }} />
                </Form.Item>
            </Col>
        </Row>

    </>)
}