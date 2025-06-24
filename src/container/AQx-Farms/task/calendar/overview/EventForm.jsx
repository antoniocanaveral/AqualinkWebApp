import { Button, DatePicker, Form, Input, Radio, Select, TimePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { EventFormStyleWrap } from '../Style';
import { eventContext } from '../CalendarTask';
import { BasicFormWrapper } from '../../../../styled';

const { Option } = Select;

function EventForm({ onHandleAddEvent, onHandleUpdateEvent }) {
  const eventData = useContext(eventContext);
  const [isEditing, setIsEditing] = useState(false);

  const title = eventData?.title || '';
  const type = eventData?.type || '';
  const start = eventData?.start ? moment(eventData.start) : moment();
  const end = eventData?.end ? moment(eventData.end) : moment().add(3, 'hours');
  const description = eventData?.description || '';
  const priority = eventData?.priority || 'normal';
  const unit = eventData?.unit || '';
  const status = eventData?.status || 'progreso';

  const [form] = Form.useForm();

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'alta':
        return 'danger';
      case 'normal':
        return 'primary';
      case 'baja':
        return 'success';
      default:
        return 'primary';
    }
  };

  const handleSubmit = (values) => {
    const start = moment(`${values.eventStartDate.format('YYYY-MM-DD')} ${values.eventStartTime.format('HH:mm:ss')}`);
    const end = moment(`${values.eventEndDate.format('YYYY-MM-DD')} ${values.eventEndTime.format('HH:mm:ss')}`);

    const eventPayload = {
      title: values.eventTitle,
      description: values.eventDescription,
      start,
      end,
      type: values.eventType,
      priority: values.eventPriority,
      unit: values.eventUnit,
      status: values.eventStatus,
      label: getPriorityLabel(values.eventPriority),
    };

    if (isEditing) {
      onHandleUpdateEvent({ ...eventPayload, id: eventData.id });
    } else {
      onHandleAddEvent(eventPayload);
    }

    form.resetFields();
  };

  useEffect(() => {
    if (eventData && Object.keys(eventData).length > 0) {
      setIsEditing(true);
      form.setFieldsValue({
        eventTitle: title,
        eventType: type,
        eventStartDate: start, // `start` ya es un objeto `moment`
        eventStartTime: start,
        eventEndDate: end, // `end` ya es un objeto `moment`
        eventEndTime: end,
        eventDescription: description,
        eventPriority: priority,
        eventUnit: unit,
        eventStatus: status,
      });
    } else {
      setIsEditing(false);
      form.resetFields();
    }
  }, [eventData, form, title, type, start, end, description, priority, unit, status]);

  return (
    <BasicFormWrapper style={{width:"100%"}}>
      <EventFormStyleWrap>
        <Form form={form} name="addNewEvent" onFinish={handleSubmit}>
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Título</span>
            <Form.Item name="eventTitle" rules={[{ required: true, message: 'Por favor ingrese el título del evento' }]}>
              <Input placeholder="Ingrese el título del evento" />
            </Form.Item>
          </div>
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Tipo de Evento</span>
            <Form.Item name="eventType">
              <Radio.Group>
                <Radio value="event">Evento</Radio>
                <Radio value="reminder">Recordatorio</Radio>
                <Radio value="task">Tarea</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Unidad</span>
            <Form.Item name="eventUnit">
              <Input placeholder="Unidad o Tanque" />
            </Form.Item>
          </div>

          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Prioridad</span>
            <Form.Item name="eventPriority">
              <Select style={{ width: '100%' }}>
                <Option value="alta">Alta</Option>
                <Option value="normal">Normal</Option>
                <Option value="baja">Baja</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Estado</span>
            <Form.Item name="eventStatus">
              <Select style={{ width: '100%' }}>
                <Option value="progreso">En progreso</Option>
                <Option value="completado">Completado</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="ninjadash-event-timeselection">
            <span className="ninjadash-event-timeselection__label">Inicio:</span>
            <div className="ninjadash-event-timeselection__input">
              <Form.Item name="eventStartDate" rules={[{ required: true, message: 'Por favor seleccione la fecha de inicio' }]}>
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item name="eventStartTime" rules={[{ required: true, message: 'Por favor seleccione la hora de inicio' }]}>
                <TimePicker format="HH:mm:ss" />
              </Form.Item>
            </div>
          </div>

          <div className="ninjadash-event-timeselection">
            <span className="ninjadash-event-timeselection__label">Fin:</span>
            <div className="ninjadash-event-timeselection__input">
              <Form.Item name="eventEndDate" rules={[{ required: true, message: 'Por favor seleccione la fecha de fin' }]}>
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item name="eventEndTime" rules={[{ required: true, message: 'Por favor seleccione la hora de fin' }]}>
                <TimePicker format="HH:mm:ss" />
              </Form.Item>
            </div>
          </div>

          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Descripción</span>
            <Form.Item name="eventDescription">
              <Input.TextArea placeholder="Escriba la descripción del evento" />
            </Form.Item>
          </div>

          <div className="add-event-footer text-right">
            <Button className="ant-btn ant-btn-white" onClick={() => form.resetFields()}>
              Restablecer
            </Button>
            <Button htmlType="submit" className="btn-save" type="primary">
              {isEditing ? 'Actualizar' : 'Crear'}
            </Button>
          </div>
        </Form>
      </EventFormStyleWrap>
    </BasicFormWrapper>
  );
}

EventForm.propTypes = {
  onHandleAddEvent: PropTypes.func,
  onHandleUpdateEvent: PropTypes.func,
};

export default EventForm;
