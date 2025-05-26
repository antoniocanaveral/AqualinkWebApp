/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Table, Form } from 'antd';
import { Link } from 'react-router-dom';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { BorderLessHeading, TableDefaultStyle } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpcomingEventsStyleWrap } from '../../dashboard/Style';
import PropTypes from 'prop-types'; // Importar PropTypes para validación

function ScheduleHarvest({ plannedHarvesting }) {

  console.log('ScheduleHarvest props:', { plannedHarvesting });

  const [state, setState] = useState({
    tabValue: 'today',
    responsive: 0,
    collapsed: false,
    visible: false,
    modalType: 'primary',
    taskEditId: '',
    editableItem: {},
  });
  const [eventState, setEventState] = useState(null);


  const eventTypes = ['primary', 'secondary', 'info', 'warning'];


  const getMonthName = (monthNumber) => {
    const monthNames = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];

    const monthIndex = parseInt(monthNumber, 10) - 1;
    if (monthIndex >= 0 && monthIndex < 12) {
      return monthNames[monthIndex];
    }
    return monthNumber; // Si ya está en texto o fuera de rango
  };


const formatDate = (isoDate) => {
  if (!isoDate || isoDate === 'N/A') return 'N/A';

  const date = new Date(isoDate);
  if (isNaN(date)) return 'N/A';

  const day = date.getDate();
  const month = getMonthName(date.getMonth() + 1); // getMonth() retorna 0-11

  return `${day} ${month}`;
};


  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {

      switch (state.tabValue) {
        case 'today':
          setEventState(plannedHarvesting);
          break;
        case 'week':
          setEventState(plannedHarvesting);
          break;
        case 'month':
          setEventState(plannedHarvesting);
          break;
        default:
          setEventState([]);
      }
    }

    return () => {
      unmounted = true;
    };
  }, [state.tabValue, plannedHarvesting]);

  const tabChange = (value) => {
    setState({
      ...state,
      tabValue: value,
    });
  };


  const dataSource = eventState
    ? eventState.map((value, index) => {
        const {
          SM_FishingNotification = 'N/A',
          SM_FishingVolume = 'N/A',
          SM_RequestedPL = 'N/A',
          SM_FishingDate = 'N/A',
          id,
        } = value;

      

      const formattedDate = formatDate(SM_FishingDate);



        const type = eventTypes[index % eventTypes.length];

        return {
          key: id,
          name: (
            <div className="ninjadash-event-details align-center-v" style={{ minHeight: '80px' }}>
              <div className={`ninjadash-event-details__date ninjadash-event-${type}`}>
                <span className="ninjadash-event-day">{`${formattedDate}`}</span>
              </div>
              <article className="ninjadash-event-details__content">
              <h4 className="ninjadash-event-details__title">{`Lote: `}</h4>
              <p className="ninjadash-event-details__time">{`${SM_FishingNotification}`}</p>
                <h4 className="ninjadash-event-details__title">{`Peso: ${SM_FishingVolume}`}</h4>
                <p className="ninjadash-event-details__time">{`Clasificación: ${SM_RequestedPL}`}</p>
              </article>
            </div>
          ),
        };
      })
    : [];

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
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
        </Cards>
      </UpcomingEventsStyleWrap>
    </BorderLessHeading>
  );
}


ScheduleHarvest.propTypes = {
  plannedHarvesting: PropTypes.arrayOf(
    PropTypes.shape({
      SM_FishingNotification: PropTypes.string,
      SM_FishingVolume: PropTypes.string,
      SM_RequestedPL: PropTypes.string,
      SM_PlannedDate: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export default ScheduleHarvest;