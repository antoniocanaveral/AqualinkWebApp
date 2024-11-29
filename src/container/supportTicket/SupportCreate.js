import React from 'react';
import { Form, Input, Select } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';

const { Option } = Select;

function SupportCreate({ visible, onCancel, handleSubmit }) {
  // const [form] = Form.useForm();

  const handleOk = (value) => {
    handleSubmit(value);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      getContainer={false}
      type="primary"
      title="Create Support"
      visible={visible}
      footer={null}
      onCancel={handleCancel}
    >
      <div className="project-modal">
        <BasicFormWrapper>
          <Form name="supportCreate" onFinish={handleOk}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select style={{ width: '100%' }} defaultValue="Registro de datos AquaLink App">
                <Option value="Registro de datos AquaLink App">Registro de datos AquaLink App</Option>
                <Option value="Registro de inventario AquaLink Web App">Registro de inventario AquaLink Web App</Option>
                <Option value="Registro de costo indirecto Ha/dia">Registro de costo indirecto Ha/dia</Option>
                <Option value="Coordinación de Siembra Camaronera">Coordinación de Siembra Camaronera</Option>
                <Option value="Coordinacion de Siembra Laboratorio">Coordinacion de Siembra Laboratorio</Option>
                <Option value="Coordinación de Cosecha Camaronera">Coordinación de Cosecha Camaronera</Option>
                <Option value="Coordinacion de Cosecha Empacadora">Coordinacion de Cosecha Empacadora</Option>
                <Option value="Reporte de malfuniconamiento DO AquaLink">Reporte de malfuniconamiento DO AquaLink</Option>
                <Option value="Reporte de malfuncionamiento de WaterLink">Reporte de malfuncionamiento de WaterLink</Option>
              </Select>
            </Form.Item>
            <Form.Item name="priority" initialValue="high" label="Priority">
              <Select style={{ width: '100%' }}>
                <Option value="high">High</Option>
                <Option value="medium">Medium</Option>
                <Option value="low">Low</Option>
              </Select>
            </Form.Item>
            <Form.Item name="status" initialValue="open" label="Status">
              <Select style={{ width: '100%' }}>
                <Option value="open">Open</Option>
                <Option value="close">Close</Option>
                <Option value="pending">Pending</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button size="default" htmlType="submit" type="primary" key="submit" onClick={() => handleOk}>
                Submit Ticket
              </Button>
            </Form.Item>
          </Form>
        </BasicFormWrapper>
      </div>
    </Modal>
  );
}

SupportCreate.propTypes = {
  visible: propTypes.bool.isRequired,
  onCancel: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default SupportCreate;
