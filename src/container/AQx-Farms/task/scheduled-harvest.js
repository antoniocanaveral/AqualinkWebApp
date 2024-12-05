/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Table, Modal, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import { BasicFormWrapper, BorderLessHeading, TableDefaultStyle } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpcomingEventsStyleWrap } from '../../dashboard/Style';

const events = {
  today: [
    {
      id: 1,
      type: 'primary',
      loteId: 'L001',
      Pc: 'PC01', Pf: 'PF11',
      densidad: 100,
      date: '19 Marzo',
    },
    {
      id: 2,
      type: 'secondary',
      loteId: 'L002',
      Pc: 'PC02', Pf: 'PF11',
      densidad: 200,
      date: '19 Marzo',
    },
    {
      id: 3,
      type: 'info',
      loteId: 'L003',
      Pc: 'PC03', Pf: 'PF11',
      densidad: 150,
      date: '19 Marzo',
    },
    {
      id: 4,
      type: 'warning',
      loteId: 'L004',
      Pc: 'PC04', Pf: 'PF11',
      densidad: 250,
      date: '19 Marzo',
    },
  ],
  week: [
    {
      id: 1,
      type: 'primary',
      loteId: 'L005',
      Pc: 'PC05', Pf: 'PF11',
      densidad: 120,
      date: '12 Septiembre',
    },
    {
      id: 2,
      type: 'info',
      loteId: 'L006',
      Pc: 'PC06', Pf: 'PF11',
      densidad: 180,
      date: '16 Septiembre',
    },
    {
      id: 3,
      type: 'secondary',
      loteId: 'L007',
      Pc: 'PC07', Pf: 'PF11',
      densidad: 300,
      date: '15 Septiembre',
    },
    {
      id: 4,
      type: 'warning',
      loteId: 'L008',
      Pc: 'PC08', Pf: 'PF11',
      densidad: 500,
      date: '13 Septiembre',
    },
  ],
  month: [
    {
      id: 1,
      type: 'primary',
      loteId: 'L009',
      Pc: 'PC09', Pf: 'PF11',
      densidad: 400,
      date: '24 Abril',
    },
    {
      id: 2,
      type: 'secondary',
      loteId: 'L010',
      Pc: 'PC10', Pf: 'PF11',
      densidad: 350,
      date: '24 Abril',
    },
    {
      id: 3,
      type: 'info',
      loteId: 'L011',
      Pc: 'PC11', Pf: 'PF11',
      densidad: 270,
      date: '24 Abril',
    },
    {
      id: 4,
      type: 'warning',
      loteId: 'L012',
      Pc: 'PC12', Pf: 'PF11',
      densidad: 600,
      date: '28 Abril',
    },
  ],
};

function ScheduleHarvest() {
  const [form] = Form.useForm();
  const [state, setState] = useState({
    tabValue: 'today',
    responsive: 0,
    collapsed: false,
    visible: false,
    modalType: 'primary',
    taskEditId: '',
    editableItem: {},
  });
  const { taskEditId, editableItem, visible } = state;
  const [eventState, setEventState] = useState(null);

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setEventState(events[state.tabValue]);
    }

    return () => (unmounted = true);
  }, [state.tabValue]);

  const tabChange = (value) => {
    setState({
      ...state,
      tabValue: value,
    });
  };

  const showModal = (id, item) => {
    setState({
      ...state,
      visible: true,
      collapsed: false,
      taskEditId: id,
      editableItem: item,
    });
  };

  const handleTaskDelete = (id) => {
    events[state.tabValue] = events[state.tabValue].filter((item) => item.id !== id);
    setEventState(eventState.filter((item) => item.id !== id));
  };

  const dataSource = [];

  if (eventState)
    eventState.map((value) => {
      const { loteId, Pc, Pf, densidad, date, type, id } = value;
      return dataSource.push({
        key: id,
        name: (
          <div className="ninjadash-event-details align-center-v" style={{minHeight:"80px"}}>
            <div className={`ninjadash-event-details__date ninjadash-event-${type}`}>
              <span className="ninjadash-event-day">{date}</span>
            </div>
            <article className="ninjadash-event-details__content">
              <h4 className="ninjadash-event-details__title">{`Lote: ${loteId}`}</h4>
              <h4 className="ninjadash-event-details__title">{`PC: ${Pc}`}</h4>
              <h4 className="ninjadash-event-details__title">{`Pf: ${Pf}`}</h4>
              <p className="ninjadash-event-details__time">{`Densidad: ${densidad}`}</p>
            </article>
          </div>
        ),
        actions: (
          <div className="ninjadash-event-details-action">
            <Link
              to="#"
              className="ninjadash-event-details-action__edit"
              onClick={() => showModal(id, { loteId, Pc, densidad, date, id })}
            >
              <UilEdit />
            </Link>
            <Link to="#" className="ninjadash-event-details-action__delete" onClick={() => handleTaskDelete(id)}>
              <UilTimes />
            </Link>
          </div>
        ),
      });
    });

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
    },
  ];

  const handleCancel = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const handleUpdate = (value) => {
    events[state.tabValue].map((item) => {
      if (item.id === taskEditId) {
        return (item.loteId = value.loteId, item.Pc = value.Pc, item.Pf,  item.densidad = value.densidad);
      }
      return item;
    });

    eventState.map((item) => {
      if (item.id === taskEditId) {
        return (item.loteId = value.loteId, item.Pc = value.Pc, item.Pf, item.densidad = value.densidad);
      }
      return item;
    });
    return setState({
      ...state,
      visible: false,
    });
  };

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(editableItem);
    }
  }, [form, editableItem, visible]);

  return (
    <BorderLessHeading>
      <UpcomingEventsStyleWrap>
        <Cards
          isbutton={
            <div className="ninjadash-card-nav">
              <ul>
                <li className={state.tabValue === 'today' ? 'ninjadash-active' : 'ninjadash-today'}>
                  <Link onClick={() => tabChange('today')} to="#">
                    Hoy
                  </Link>
                </li>
                <li className={state.tabValue === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={() => tabChange('week')} to="#">
                    Semana
                  </Link>
                </li>
                <li className={state.tabValue === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={() => tabChange('month')} to="#">
                    Mes
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Cocechas Planificadas"
          size="large"
        >
          <TableDefaultStyle>
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
          </TableDefaultStyle>
        </Cards>
      </UpcomingEventsStyleWrap>
      <Modal
        title="Actualizar Siembra"
        className="ninjadash_addTask-modal"
        type={state.modalType}
        visible={state.visible}
        footer={null}
        onCancel={handleCancel}
      >
        <div className="ninjadash_addTask-modal-inner">
          <BasicFormWrapper>
            <Form form={form} name="add-task" onFinish={handleUpdate}>
              <Form.Item
                rules={[{ required: true, message: 'Por favor, ingrese un Lote' }]}
                name="loteId"
                initialValue={editableItem.loteId}
              >
                <Input placeholder="Lote" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: 'Por favor, ingrese el Pf' }]}
                name="Pc"
                initialValue={editableItem.Pc}
              >
                <Input placeholder="PC" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: 'Por favor, ingrese el Pf' }]}
                name="Pc"
                initialValue={editableItem.Pf}
              >
                <Input placeholder="PC" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: 'Por favor, ingrese la densidad' }]}
                name="densidad"
                initialValue={editableItem.densidad}
              >  <Input placeholder="Densidad" />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: 'Por favor, ingrese una fecha' }]}
                name="date"
                initialValue={editableItem.date}
              >
                <Input placeholder="Fecha" />
              </Form.Item>
              <div className="ninjadash-modal-actions">
                <Button size="small" type="primary" htmlType="submit">
                  Actualizar
                </Button>
                <Button size="small" onClick={handleCancel}>
                  Cancelar
                </Button>
              </div>
            </Form>
          </BasicFormWrapper>
        </div>
      </Modal>
    </BorderLessHeading>
  );
}

export default ScheduleHarvest;