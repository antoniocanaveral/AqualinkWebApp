import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DonutChartSuplyCost = ({ data }) => {
  const [hoveredItem, setHoveredItem] = useState(null); // Estado para almacenar el elemento actualmente sobrevolado
  const totalValue = data.reduce((acc, item) => acc + item.value, 0); // Suma total de los valores

  return (
    <div style={{ textAlign: 'center', width: '200px', margin: '0 auto', position: 'relative' }}>
      {/* SVG del gráfico de dona */}
      <svg width="200" height="200" viewBox="0 0 42 42" className="donut-chart">
        {data.reduce(
          (acc, item, index) => {
            const previousValue = acc.previousValue;
            const valuePercentage = (item.value / totalValue) * 100; // Porcentaje del segmento
            const offset = previousValue; // Desplazamiento del segmento actual
            acc.previousValue += valuePercentage; // Actualizar desplazamiento acumulado

            acc.segments.push(
              <circle
                key={index}
                cx="21"
                cy="21"
                r="15.91549431"
                fill="transparent"
                stroke={item.color}
                strokeWidth="3"
                strokeDasharray={`${valuePercentage} ${100 - valuePercentage}`}
                strokeDashoffset={-offset}
                onMouseEnter={() => setHoveredItem(item)} // Mostrar tooltip al pasar el ratón
                onMouseLeave={() => setHoveredItem(null)} // Ocultar tooltip al salir
              />
            );

            return acc;
          },
          { previousValue: 0, segments: [] }
        ).segments}
      </svg>

      {/* Tooltip */}
      {hoveredItem && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -150%)',
            backgroundColor: '#fff',
            padding: '8px 12px',
            borderRadius: '4px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            fontSize: '12px',
            pointerEvents: 'none',
            width: 'auto'
          }}
        >
          {hoveredItem.label}: {hoveredItem.value}
        </div>
      )}

      {/* Leyenda */}
      <div style={{ marginTop: '10px' }}>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '5px',
              fontSize: '12px',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: item.color,
                borderRadius: '50%',
                marginRight: '5px',
              }}
            ></div>
            <span style={{ flex: 1, textAlign: 'left' }}>{item.label}</span>
            <span>{((item.value / totalValue) * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

DonutChartSuplyCost.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Etiqueta de la categoría
      value: PropTypes.number.isRequired, // Valor numérico
      color: PropTypes.string.isRequired, // Color del segmento
    })
  ).isRequired,
};

export default DonutChartSuplyCost;
