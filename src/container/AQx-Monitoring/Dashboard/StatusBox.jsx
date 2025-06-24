import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';

const StatusBox = ({ icon: Icon, label, percentage, color }) => {
  return (
    <div
      style={{
        background: '#fff',
        padding: '7px',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minHeight: '120px',
      }}
    >
      {Icon && (
        <Icon
          style={{
            fontSize: '28px',
            color: color,
            marginBottom: '8px',
          }}
        />
      )}
      <h3 style={{ margin: '5px 0', fontSize: '16px', color: '#333' }}>{label}</h3>
      <Progress
        percent={percentage}
        showInfo={true}
        strokeColor={color}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
};

StatusBox.propTypes = {
  icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string, // Nuevo prop
};

StatusBox.defaultProps = {
  icon: null,
  color: '#1890ff', // Color por defecto (azul)
};

export default StatusBox;
