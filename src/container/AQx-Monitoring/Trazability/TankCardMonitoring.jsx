import React from 'react';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const TankCardMonitoring = ({ data }) => {
    console.log(data)
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: '2px solid #e3e3e3',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '360px',
        minWidth: '360px',
      }}
    >
      <div className="flex-row">
        <span className="label">Camaronera:</span>
        <span>{data.nombreCamaronara || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Piscina Engorde:</span>
        <span>{data.piscinaEngorde || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Lote ID:</span>
        <span>{data.loteID || 'NA'}</span>
      </div>

      <div className="flex-row" style={{ justifyContent: 'space-between', marginTop: 10 }}>
        <Typography.Title level={4} style={{ color: '#0372ce' }}>
          Avance Ciclo
        </Typography.Title>
        <Typography.Title level={4}>
          {data.porcentaje || 0}%
        </Typography.Title>
      </div>

      <div className="harvest-report-divider-2" style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }} />

      <div className="flex-row">
        <span className="label">Inicio de Cultivo:</span>
        <span>{data.inicioCultivo || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Fin de Cultivo:</span>
        <span>{data.finCultivo || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Biomasa estimada:</span>
        <span>{data.biomasaEstimada || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Supervivencia real:</span>
        <span>{data.supervivenciaReal || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">FCA real:</span>
        <span>{data.fcaReal || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Clasificación de Pesca:</span>
        <span>{data.clasificacionPesca || 'NA'}</span>
      </div>

    

      <div className="flex-row">
        <span className="label">Coordinación Pesca:</span>
        <span style={{fontSize: "12px"}}>{data.coordinacionPesca || 'NA'}</span>
      </div>

      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <button
          onClick={() => navigate("/farm/seeding-coords")}
          style={{
            backgroundColor: '#0372ce',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Ver Piscina
        </button>
      </div>
    </div>
  );
};

export default TankCardMonitoring;
