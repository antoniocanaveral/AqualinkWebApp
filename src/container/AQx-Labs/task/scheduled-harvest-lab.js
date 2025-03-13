/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { BorderLessHeading } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpcomingEventsStyleWrap } from '../../dashboard/Style';
import PropTypes from 'prop-types'; // Importar PropTypes para validación

function ScheduleHarvestLab({ data }) {
  console.log('ScheduleHarvestLab props:', { data });

  const [state, setState] = useState({
    tabValue: 'today',
  });

  const [eventState, setEventState] = useState([]);

  const eventTypes = ['primary', 'secondary', 'info', 'warning'];

  // Función para convertir mes numérico a nombre en español
  const getMonthName = (dateString) => {
    if (!dateString) return 'N/A';

    const date = new Date(dateString);
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
    ];
    
    return monthNames[date.getMonth()];
  };

  const getDay = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).getDate();
  };

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setEventState(data || []);
    }

    return () => {
      unmounted = true;
    };
  }, [data]);

  const tabChange = (value) => {
    setState({ ...state, tabValue: value });
  };

  // Construcción de la tabla
  const dataSource = eventState.map((value, index) => {
    const {
      Value = 'N/A', // Lote
      warehouse_name = 'N/A', // Piscina (ahora tanque)
      sm_targetbiomass = 0, // Cantidad
      SM_FishingDate = 'N/A', // Fecha
      id,
    } = value;

    const day = getDay(SM_FishingDate);
    const monthName = getMonthName(SM_FishingDate);

    const type = eventTypes[index % eventTypes.length];

    return {
      key: id,
      name: (
        <div className="ninjadash-event-details align-center-v" style={{ minHeight: '80px' }}>
          <div className={`ninjadash-event-details__date ninjadash-event-${type}`}>
            <span className="ninjadash-event-day">{`${day} ${monthName}`}</span>
          </div>
          <article className="ninjadash-event-details__content">
            <h4 className="ninjadash-event-details__title">{`Lote: ${Value}`}</h4>
            <h4 className="ninjadash-event-details__title">{`Tanque: ${warehouse_name}`}</h4>
            <p className="ninjadash-event-details__time">{`Cantidad: ${sm_targetbiomass.toLocaleString()}`}</p>
          </article>
        </div>
      ),
    };
  });

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
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
                  <Link onClick={() => tabChange('today')} to="#">Hoy</Link>
                </li>
                <li className={state.tabValue === 'week' ? 'ninjadash-active' : 'ninjadash-week'}>
                  <Link onClick={() => tabChange('week')} to="#">Semana</Link>
                </li>
                <li className={state.tabValue === 'month' ? 'ninjadash-active' : 'ninjadash-month'}>
                  <Link onClick={() => tabChange('month')} to="#">Mes</Link>
                </li>
              </ul>
            </div>
          }
          title="Cosechas"
          size="large"
        >
          <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
        </Cards>
      </UpcomingEventsStyleWrap>
    </BorderLessHeading>
  );
}

// Añadir PropTypes para validación de props
ScheduleHarvestLab.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Value: PropTypes.string, // Lote
      warehouse_name: PropTypes.string, // Tanque
      sm_targetbiomass: PropTypes.number, // Cantidad
      SM_FishingDate: PropTypes.string, // Fecha de siembra
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export default ScheduleHarvestLab;
