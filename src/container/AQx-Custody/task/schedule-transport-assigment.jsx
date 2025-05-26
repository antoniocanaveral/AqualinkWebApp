import React, { useEffect, useState } from 'react';
import { Table, Modal, Form, Input, Button, Select } from 'antd';
import { Link } from 'react-router-dom';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { BasicFormWrapper, BorderLessHeading, TableDefaultStyle } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpcomingEventsStyleWrap } from '../../dashboard/Style';

const events = {
  today: [
    {
      id: 1,
      type: 'primary',
      IDCosecha: 'L001',
      Pf: 'PC01',
      status: "Asignado",
      biomasa: 100,
      date: '19 Marzo',
    },
    {
      id: 2,
      type: 'secondary',
      IDCosecha: 'L002',
      Pf: 'PC02',
      status: "Asignado",
      biomasa: 200,
      date: '19 Marzo',
    },
    {
      id: 3,
      type: 'info',
      IDCosecha: 'L003',
      Pf: 'PC03',
      status: "Asignado",
      biomasa: 150,
      date: '19 Marzo',
    },
    {
      id: 4,
      type: 'warning',
      IDCosecha: 'L004',
      Pf: 'PC04',
      status: "Asignado",
      biomasa: 250,
      date: '19 Marzo',
    },
  ],
  week: [
    {
      id: 1,
      type: 'primary',
      IDCosecha: 'L005',
      status: "Asignado",
      date: '12 Septiembre',
    },
    {
      id: 2,
      type: 'info',
      IDCosecha: 'L006',
      status: "Asignado",
      date: '16 Septiembre',
    },
    {
      id: 3,
      type: 'secondary',
      IDCosecha: 'L007',
      status: "Asignado",
      date: '15 Septiembre',
    },
    {
      id: 4,
      type: 'warning',
      IDCosecha: 'L008',
      status: "Asignado",
      date: '13 Septiembre',
    },
  ],
  month: [
    {
      id: 1,
      type: 'primary',
      IDCosecha: 'L009',
      status: "Asignado",
      date: '24 Abril',
    },
    {
      id: 2,
      type: 'secondary',
      IDCosecha: 'L010',
      status: "Asignado",
      date: '24 Abril',
    },
    {
      id: 3,
      type: 'info',
      IDCosecha: 'L011',
      status: "Asignado",
      date: '24 Abril',
    },
    {
      id: 4,
      type: 'warning',
      IDCosecha: 'L012',
      status: "Asignado",
      date: '28 Abril',
    },
  ],
};

function ScheduleTransportAssigment() {
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


  const handleTaskDelete = (id) => {
    events[state.tabValue] = events[state.tabValue].filter((item) => item.id !== id);
    setEventState(eventState.filter((item) => item.id !== id));
  };

  const dataSource = [];

  if (eventState)
    eventState.map((value) => {
      const { IDCosecha, status, biomasa, date, type, id, Pf } = value;
      return dataSource.push({
        key: id,
        name: (
          <div className="ninjadash-event-details align-center-v" style={{ minHeight: "80px" }}>
            <div className={`ninjadash-event-details__date ninjadash-event-${type}`}>
              <span className="ninjadash-event-day">{date}</span>
            </div>
            <article className="ninjadash-event-details__content">
              <h4 className="ninjadash-event-details__title">{`ID Cosecha: ${IDCosecha}`}</h4>
              <h4 className="ninjadash-event-details__title">{`Estado: ${status}`}</h4>
            </article>
          </div>
        ),
        actions: (
          <div className="ninjadash-event-details-action-2">
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
          title="Asignación de Transporte"
          size="large"
        >
          <TableDefaultStyle>
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
          </TableDefaultStyle>
        </Cards>
      </UpcomingEventsStyleWrap>

    </BorderLessHeading>
  );
}

export default ScheduleTransportAssigment;
