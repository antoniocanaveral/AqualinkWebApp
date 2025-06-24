import React, { useEffect } from 'react';
import { Form, Input, Select } from 'antd';
import PropTypes from 'prop-types';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';
import { useDispatch } from 'react-redux';
import { updateRequestStatus } from '../../redux/support/actionCreator';

const { Option } = Select;

function SupportUpdate({ visible, onCancel, onSuccess, editableData }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (editableData) {

      form.setFieldsValue({
        status: editableData.R_Status_ID?.identifier,
        description: editableData.Summary || '',
        response_text: editableData.response_text || '',
      });
    }
  }, [editableData, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      const payload = {
        id: editableData.id,
        R_Status_ID: {
          id: values.status === "2_In Progress" ? 101 : 102,
          identifier: values.status,
        },
      };

      if (values.status === "3_Closed") {
        payload.response_text = values.response_text;
      }
      await dispatch(updateRequestStatus(payload));

      onSuccess();
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  return (
    <Modal
      getContainer={false}
      type="primary"
      title="Actualizar Ticket"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <BasicFormWrapper>
        <Form form={form} layout="vertical" name="supportUpdate">
          <Form.Item
            name="status"
            label="Estado"
            initialValue="seleccione"
            rules={[
              {
                required: true,
                message: 'Por favor selecciona un estado',
              },
              {
                validator: (_, value) =>
                  value === 'seleccione'
                    ? Promise.reject('Debes seleccionar un estado válido')
                    : Promise.resolve(),
              },
            ]}
          >
            <Select style={{ width: '100%' }}>
              <Select.Option value="seleccione" disabled>
                Seleccione
              </Select.Option>
              <Select.Option value="2_In Progress">In Progress</Select.Option>
              <Select.Option value="3_Closed">Closed</Select.Option>
            </Select>
          </Form.Item>

          {/* Se utiliza Form.Item con shouldUpdate para renderizar el campo de respuesta cuando el estado es "Closed" */}
          <Form.Item shouldUpdate={(prevValues, currentValues) => prevValues.status !== currentValues.status}>
            {({ getFieldValue }) =>
              getFieldValue('status') === '3_Closed' && (
                <Form.Item
                  name="response_text"
                  label="Respuesta"
                  rules={[
                    {
                      required: true,
                      message: 'Por favor, ingresa la respuesta',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
              )
            }
          </Form.Item>

          <Form.Item>
            <Button size="default" type="primary" onClick={handleOk}>
              Actualizar Ticket
            </Button>
          </Form.Item>
        </Form>
      </BasicFormWrapper>
    </Modal>
  );
}

SupportUpdate.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  editableData: PropTypes.object,
};

export default SupportUpdate;
