// src/components/StatusBox.js
import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';

const StatusBox = ({ icon: Icon, label, percentage }) => {
  return (
    <div
      style={{
        background: '#fff',
        padding: '7px',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        minHeight: '120px', // Ensure enough space
      }}
    >
      {Icon && <Icon style={{ fontSize: '28px', color: '#1890ff', marginBottom: '8px' }} />}
      <h3 style={{ margin: '5px 0', fontSize: '16px', color: '#333' }}>{label}</h3>
      <Progress
        percent={percentage}
        showInfo={true}
        strokeColor="#1890ff"
        style={{ marginTop: '10px' }}
      />
    </div>
  );
};

StatusBox.propTypes = {
  icon: PropTypes.elementType, // Allow null/undefined for safety
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

StatusBox.defaultProps = {
  icon: null,
};

export default StatusBox;