/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Table, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { BorderLessHeading, TableDefaultStyle } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpcomingEventsStyleWrap } from '../../dashboard/Style';
import PropTypes from 'prop-types'; // Importar PropTypes para validación

function ScheduleTransfer({ plannedTransfers, loading, error }) {

  console.log('ScheduleTransfer props:', { plannedTransfers });

  const [state, setState] = useState({
    tabValue: 'today',
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

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {

      switch (state.tabValue) {
        case 'today':
          setEventState(plannedTransfers);
          break;
        case 'week':
          setEventState(plannedTransfers);
          break;
        case 'month':
          setEventState(plannedTransfers);
          break;
        default:
          setEventState([]);
      }
    }

    return () => {
      unmounted = true;
    };
  }, [state.tabValue, plannedTransfers]);

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
        preebreedingpoolname = 'N/A',
        SM_Pool = 'N/A',
        SM_Biomass = 0,
        SM_TransferDate = 'N/A',
        id,
      } = value;

    
    

        const dateParts = SM_TransferDate.split(/[/-]/);
        const day = dateParts[2];
        const month = dateParts[1];
        const monthName = getMonthName(month);


      const type = eventTypes[index % eventTypes.length];

      return {
        key: id,
        name: (
          <div className="ninjadash-event-details align-center-v" style={{ minHeight: '80px' }}>
            <div className={`ninjadash-event-details__date ninjadash-event-${type}`}>
              <span className="ninjadash-event-day">{`${day} ${monthName}`}</span>
            </div>
            <article className="ninjadash-event-details__content">
              <h4 className="ninjadash-event-details__title">{`Lote: `}</h4>
              <p className="ninjadash-event-details__time">{`${SM_FishingNotification}`}</p>
              <h4 className="ninjadash-event-details__title">{` ${preebreedingpoolname} => ${SM_Pool}`}</h4>
              <p className="ninjadash-event-details__time">{`Biomasa(lb): ${SM_Biomass}`}</p>
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
          title="Transferencias Planificadas"
          size="large"
        >
          <TableDefaultStyle>
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              showHeader={false}
              loading={loading} // Mostrar el estado de carga
            />
            {error && (
              <div style={{ color: 'red', marginTop: '10px' }}>
                {error}
              </div>
            )}
          </TableDefaultStyle>
        </Cards>
      </UpcomingEventsStyleWrap>
    </BorderLessHeading>
  );
}


ScheduleTransfer.propTypes = {
  plannedTransfers: PropTypes.arrayOf(
    PropTypes.shape({
      SM_FishingNotification: PropTypes.string,
      preebreedingpoolname: PropTypes.string,
      SM_Pool: PropTypes.string,
      SM_Biomass: PropTypes.number,
      SM_TransferDate: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

ScheduleTransfer.defaultProps = {
  loading: false,
  error: null,
};

export default ScheduleTransfer;