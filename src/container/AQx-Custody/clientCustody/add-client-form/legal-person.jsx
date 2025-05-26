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
                        <Option value="FIN">FIN</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Nombre de la Empacadora"
                    name="Name"
                    rules={[{ required: true, message: 'Ingrese el nombre de la empacadora' }]}
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
                    label="Capacidad  Instalada"
                    name="sm_installedcapacitylarva"
                    rules={[{ required: true, message: 'Ingrese la capacidad instalada de larva' }]}
                >
                    <InputNumber size="large" style={{ width: '100%' }} placeholder="Ingrese cantidad de larva" />
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

            <Col span={5}>
                <Form.Item
                    label="Certificados"
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

        </Row>

        <Row gutter={16}>
            <Col span={4}>
                <Form.Item
                    label="Sistema de Producción"
                    name="sm_productiontype"
                    rules={[{ required: true, message: 'Seleccione el sistema de Producción' }]}
                >
                    <Select size="large" placeholder="Seleccione Sistema de Producción">
                        <Option value="HOSO">HOSO</Option>
                        <Option value="HLSO">HLSO</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    label="Protocolo de Cosecha"
                    name="sm_protocolharvest"
                    rules={[{ required: true, message: 'Seleccione el protocolo de cosecha' }]}
                >
                    <Select size="large" placeholder="Seleccione Protocolo de Cosecha">
                        <Option value="BIN">Bines</Option>
                        <Option value="VAN">Gavetas</Option>
                        <Option value="BIN_VAN">Bines y Gavetas</Option>
                    </Select>
                </Form.Item>
            </Col>

            <Col span={5}>
                <Form.Item
                    label="Procesamiento Semanal (Kg)"
                    name="sm_processingcapacityweekly"
                    rules={[{ required: true, message: 'Ingrese la capacidad semanal' }]}
                >
                    <InputNumber size="large" style={{ width: '100%' }} placeholder="Ingrese kg" />
                </Form.Item>
            </Col>

            <Col span={5}>
                <Form.Item
                    label="Procesamiento Diario (Kg)"
                    name="sm_processingcapacitydaily"
                    rules={[{ required: true, message: 'Ingrese la capacidad diaria' }]}
                >
                    <InputNumber size="large" style={{ width: '100%' }} placeholder="Ingrese kg" />
                </Form.Item>
            </Col>
        </Row>
       

    </>)
}