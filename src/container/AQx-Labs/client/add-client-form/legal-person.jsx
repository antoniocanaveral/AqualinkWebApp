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
                    label="Nombre de Laboratorio"
                    name="Name"
                    rules={[{ required: true, message: 'Ingrese el nombre del laboratorio' }]}
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
        </Row>

        <Row gutter={16}>

            <Col span={4}>
                <Form.Item
                    label="Tipo de Laboratorio"
                    name="sm_labtype"
                    rules={[{ required: true, message: 'Seleccione el tipo de Laboratorio' }]}
                >
                    <Select size="large" placeholder="Seleccione Tipo de Camaronera">
                        <Option value="MATURATION">Maduración</Option>
                        <Option value="PL">PL</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
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
                    label="Registro SCI"
                    name="sm_codigovap"
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
                    label="Certificado Ambiental"
                    name="sm_safetycertificate"
                >
                    <Input />
                </Form.Item>
            </Col>

        </Row>

        <Row gutter={16}>
            <Col span={4}>

                <Form.Item
                    label="Capacidad  de Larva"
                    name="sm_installedcapacitylarva"
                    rules={[{ required: true, message: 'Ingrese la capacidad instalada de larva' }]}
                >
                    <InputNumber size="large" style={{ width: '100%' }} placeholder="Ingrese cantidad de larva" />
                </Form.Item>
            </Col>
            <Col span={5}>

                <Form.Item
                    label="Protocolo de Producción"
                    name="sm_productionprotocol"
                    rules={[{ required: true, message: 'Seleccione el protocolo' }]}
                >
                    <Select size="large" placeholder="Seleccione el protocolo">
                        <Option value="MONOFASICO">Mono Fásico(MF)</Option>
                    </Select>
                </Form.Item>

            </Col>


            <Col span={5}>
                <Form.Item
                    label="Número de Módulos"
                    name="c_sales_region"
                    rules={[{ required: true, message: 'Ingrese módulos' }]}
                >
                    <InputNumber size="large" style={{ width: '100%' }} />
                </Form.Item>
            </Col>
        </Row>




    </>)
}