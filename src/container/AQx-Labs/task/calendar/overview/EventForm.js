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
  const [isEditing, setIsEditing] = useState(false); // Para distinguir entre crear y editar

  const title = eventData && eventData.title ? eventData.title : '';
  const type = eventData && eventData.type ? eventData.type : '';
  const start = eventData && eventData.start ? eventData.start : moment();
  const end = eventData && eventData.end ? eventData.end : moment().add(3, 'hours');
  const description = eventData && eventData.description ? eventData.description : '';
  const priority = eventData && eventData.priority ? eventData.priority : 'normal'; // Nueva prioridad
  const unit = eventData && eventData.unit ? eventData.unit : ''; // Nueva unidad/tanque
  const status = eventData && eventData.status ? eventData.status : 'progreso'; // Nuevo estado

  const [form] = Form.useForm();

  const getPriorityLabel = (priority) => {
    // Mapear la prioridad al color (label)
    switch (priority) {
      case 'alta':
        return 'danger'; // Rojo
      case 'normal':
        return 'primary'; // Azul
      case 'baja':
        return 'success'; // Verde
      default:
        return 'primary'; // Por defecto, azul
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
      priority: values.eventPriority, // Enviar prioridad
      unit: values.eventUnit, // Enviar unidad/tanque
      status: values.eventStatus, // Enviar estado
      label: getPriorityLabel(values.eventPriority), // Asignar el color basado en la prioridad
    };

    if (isEditing) {
      onHandleUpdateEvent({ ...eventPayload, id: eventData.id }); // Editar evento existente
    } else {
      onHandleAddEvent(eventPayload); // Crear nuevo evento
    }

    form.resetFields();
  };

  useEffect(() => {
    if (eventData && Object.keys(eventData).length > 0) {
      setIsEditing(true);
      form.setFieldsValue({
        eventTitle: title,
        eventType: type,
        eventStartDate: moment(start),
        eventStartTime: moment(start),
        eventEndDate: moment(end),
        eventEndTime: moment(end),
        eventDescription: description,
        eventPriority: priority, // Asignar prioridad
        eventUnit: unit, // Asignar unidad/tanque
        eventStatus: status, // Asignar estado
      });
    } else {
      setIsEditing(false);
      form.resetFields();
    }
  }, [eventData, form, title, type, start, end, description, priority, unit, status]);

  return (
    <BasicFormWrapper>
      <EventFormStyleWrap>
        <Form form={form} name="addNewEvent" onFinish={handleSubmit}>
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Title</span>
            <Form.Item name="eventTitle" initialValue={title}>
              <Input placeholder="Please set event title" />
            </Form.Item>
          </div>
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Event Type</span>
            <Form.Item name="eventType" initialValue={type}>
              <Radio.Group>
                <Radio value="event">Event</Radio>
                <Radio value="reminder">Reminder</Radio>
                <Radio value="task">Task</Radio>
              </Radio.Group>
            </Form.Item>
          </div>

          {/* Unidad/Tanque */}
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Unidad/Tanque</span>
            <Form.Item name="eventUnit" initialValue={unit}>
              <Input placeholder="Unidad o Tanque" />
            </Form.Item>
          </div>

          {/* Prioridad */}
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Prioridad</span>
            <Form.Item name="eventPriority" initialValue={priority}>
              <Select style={{ width: '100%' }}>
                <Option value="alta">Alta</Option>
                <Option value="normal">Normal</Option>
                <Option value="baja">Baja</Option>
              </Select>
            </Form.Item>
          </div>

          {/* Estado */}
          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Estado</span>
            <Form.Item name="eventStatus" initialValue={status}>
              <Select style={{ width: '100%' }}>
                <Option value="progreso">En progreso</Option>
                <Option value="completado">Completado</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="ninjadash-event-timeselection">
            <span className="ninjadash-event-timeselection__label">Start:</span>
            <div className="ninjadash-event-timeselection__input">
              <Form.Item name="eventStartDate" initialValue={moment(start)}>
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item name="eventStartTime" initialValue={moment(start)}>
                <TimePicker format="h:mm:ss A" />
              </Form.Item>
            </div>
          </div>
          <div className="ninjadash-event-timeselection">
            <span className="ninjadash-event-timeselection__label">End:</span>
            <div className="ninjadash-event-timeselection__input">
              <Form.Item name="eventEndDate" initialValue={moment(start)}>
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item name="eventEndTime" initialValue={moment(start)}>
                <TimePicker format="h:mm:ss A" />
              </Form.Item>
            </div>
          </div>

          <div className="ninjadash-event-form-input">
            <span className="ninjadash-event-form-label">Description</span>
            <Form.Item name="eventDescription">
              <Input.TextArea placeholder="Write Your Description" />
            </Form.Item>
          </div>

          <div className="add-event-footer text-right">
            <Button
              className="ant-btn ant-btn-white"
              onClick={() => form.resetFields()}
            >
              Reset
            </Button>
            <Button htmlType="submit" className="btn-save" type="primary">
              {isEditing ? 'Update' : 'Create'}
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
