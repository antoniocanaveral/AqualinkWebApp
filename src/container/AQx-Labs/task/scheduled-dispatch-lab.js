/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { BorderLessHeading } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { UpcomingEventsStyleWrap } from '../../dashboard/Style';
import PropTypes from 'prop-types'; // Importar PropTypes para validación

function ScheduleDispatchLab({ data }) {
  console.log('ScheduleDispatchLab props:', { data });

  const [state, setState] = useState({
    tabValue: 'today',
  });

  const [eventState, setEventState] = useState([]);

  const eventTypes = ['primary', 'secondary', 'info', 'warning'];

  // Función para convertir fecha en formato "Día Mes Año - HH:MM"
  const formatDateTime = (dateString) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
    ];

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month}`;
  };

  useEffect(() => {
    setEventState(data || []);
  }, [data]);

  const tabChange = (value) => {
    setState({ ...state, tabValue: value });
  };

  // Construcción de la tabla, solo muestra datos si `coordinations_json` tiene elementos válidos
  const dataSource = eventState.flatMap((value, index) => {
    const { warehouse_name = 'N/A', coordinations_json = [], id } = value;

    if (!coordinations_json || coordinations_json.length === 0) {
      return []; // No retorna nada si no hay coordinaciones
    }

    // Mapear cada coordinación en una fila de la tabla
    return coordinations_json
      .filter(coord => coord.coordination_value && coord.sm_confirmedtotal) // Filtrar registros inválidos
      .map((coord, coordIndex) => {
        const { coordination_value = 'N/A', sm_confirmedtotal = 0, created = 'N/A' } = coord;

        return {
          key: `${id}-${coordIndex}`,
          name: (
            <div className="ninjadash-event-details align-center-v" style={{ minHeight: '80px' }}>
              <div className={`ninjadash-event-details__date ninjadash-event-${eventTypes[index % eventTypes.length]}`}>
                <span className="ninjadash-event-day">{formatDateTime(created)}</span>
              </div>
              <article className="ninjadash-event-details__content">
                <h4 className="ninjadash-event-details__title">{`Lote: ${coordination_value}`}</h4>
                <h4 className="ninjadash-event-details__title">{`Tanque: ${warehouse_name}`}</h4>
                <p className="ninjadash-event-details__time">{`Cantidad: ${sm_confirmedtotal.toLocaleString()}`}</p>
              </article>
            </div>
          ),
        };
      });
  });

  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return dataSource.length > 0 ? ( // Solo renderiza si hay datos en la tabla
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
          title="Despacho"
          size="large"
        >
          <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false} />
        </Cards>
      </UpcomingEventsStyleWrap>
    </BorderLessHeading>
  ) : null; // No muestra nada si no hay despachos
}

// Añadir PropTypes para validación de props
ScheduleDispatchLab.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      warehouse_name: PropTypes.string, // Tanque
      coordinations_json: PropTypes.arrayOf(
        PropTypes.shape({
          coordination_value: PropTypes.string, // Lote
          sm_confirmedtotal: PropTypes.number, // Cantidad
          created: PropTypes.string, // Fecha de despacho
        })
      ),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};

export default ScheduleDispatchLab;
