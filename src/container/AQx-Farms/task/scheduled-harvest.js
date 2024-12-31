/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Table, Form } from 'antd';
import { Link } from 'react-router-dom';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { BorderLessHeading, TableDefaultStyle } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpcomingEventsStyleWrap } from '../../dashboard/Style';

const events = {
  today: [
    {
      id: 1,
      type: 'primary',
      idCoordinacion: '00034-NP',
      peso: '1000lb',
      clasificacion: 'PL-11',
      date: '19 Marzo',
    },
    {
      id: 2,
      type: 'secondary',
      idCoordinacion: '00032-NP',
      peso: '1050lb',
      clasificacion: 'PL-12',
      date: '19 Marzo',
    },
    {
      id: 3,
      type: 'info',
      idCoordinacion: '00033-NP',
      peso: '1100lb',
      clasificacion: 'PL-12',
      date: '19 Marzo',
    },
    {
      id: 4,
      type: 'warning',
      idCoordinacion: '00031-NP',
      peso: '1150lb',
      clasificacion: 'PL-12',
      date: '19 Marzo',
    },
  ],
  week: [
    {
      id: 1,
      type: 'primary',
      idCoordinacion: '00035-NP',
      peso: '950lb',
      clasificacion: '30-40',
      date: '12 Septiembre',
    },
    {
      id: 2,
      type: 'info',
      idCoordinacion: '00036-NP',
      peso: '1100lb',
      clasificacion: '50-60',
      date: '16 Septiembre',
    },
  ],
  month: [
    {
      id: 1,
      type: 'primary',
      idCoordinacion: '00037-NP',
      peso: '1200lb',
      clasificacion: '60-70',
      date: '24 Abril',
    },
    {
      id: 2,
      type: 'secondary',
      idCoordinacion: '00038-NP',
      peso: '1150lb',
      clasificacion: '55-65',
      date: '24 Abril',
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
      const { idCoordinacion, peso, clasificacion, date, type, id } = value;
      return dataSource.push({
        key: id,
        name: (
          <div className="ninjadash-event-details align-center-v" style={{ minHeight: '80px' }}>
            <div className={`ninjadash-event-details__date ninjadash-event-${type}`}>
              <span className="ninjadash-event-day">{date}</span>
            </div>
            <article className="ninjadash-event-details__content">
              <h4 className="ninjadash-event-details__title">{`ID Coordinación: ${idCoordinacion}`}</h4>
              <h4 className="ninjadash-event-details__title">{`Peso: ${peso}`}</h4>
              <h4 className="ninjadash-event-details__title">{`Clasificación: ${clasificacion}`}</h4>
            </article>
          </div>
        ),
        actions: (
          <div className="ninjadash-event-details-action">
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
          title="Cosechas Planificadas"
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

export default ScheduleHarvest;
