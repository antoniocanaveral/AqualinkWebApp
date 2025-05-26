import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from 'antd';
import propTypes from 'prop-types';
import { Button } from '../../components/buttons/buttons';
import { Modal } from '../../components/modals/antd-modals';
import { BasicFormWrapper } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import { createRequest, fetchCategories } from '../../redux/support/actionCreator';

const { Option } = Select;

function SupportCreate({ visible, onCancel, onSuccess }) {
  const dispatch = useDispatch();
  const { categories, categoriesLoading } = useSelector((state) => state.support);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCancel = () => {
    onCancel();
  };

  const handleCategoryChange = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    setSelectedCategory(category ? category.Name : null);
  };

  const handleOk = async (formData) => {
    try {
      const response = await dispatch(createRequest(formData, selectedCategory));
      console.log('Ticket creado:', response);

      onSuccess();
    } catch (error) {
      console.error('Error al crear el ticket:', error);
    }
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
              name="R_Category_ID"
              label="Asunto"
              rules={[{ required: true, message: 'Por favor selecciona una categoría' }]}
            >
              <Select
                loading={categoriesLoading}
                style={{ width: '100%' }}
                onChange={handleCategoryChange}
              >
                {categories.map((cat) => (
                  <Option key={cat.id} value={cat.id}>
                    {cat.Name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="Priority"
              label="Priority"
              initialValue="seleccione"
              rules={[
                {
                  required: true,
                  message: 'Por favor, selecciona una prioridad',
                },
                {
                  validator: (_, value) =>
                    value === 'seleccione'
                      ? Promise.reject('Debes seleccionar una prioridad válida')
                      : Promise.resolve(),
                },
              ]}
            >
              <Select style={{ width: '100%' }}>
                <Select.Option value="seleccione" disabled>
                  Seleccione
                </Select.Option>
                <Select.Option value="3">High</Select.Option>
                <Select.Option value="5">Medium</Select.Option>
                <Select.Option value="7">Low</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Summary"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button size="default" htmlType="submit" type="primary" key="submit">
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
  onSuccess: propTypes.func.isRequired,
};

export default SupportCreate;
