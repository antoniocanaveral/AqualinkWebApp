import React from 'react';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const WarehouseCard = ({ data }) => {

 
  const calculateCycleProgress = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();


    if (now < start) return 0;


    if (now > end) return 100;

    const totalDuration = end.getTime() - start.getTime();
    const elapsed = now.getTime() - start.getTime();
    const progress = (elapsed / totalDuration) * 100;

    return Math.round(progress);
  };

  const porcentaje = calculateCycleProgress(
    data.SM_PlannedPlantingDate,
    data.SM_PlannedFinishDate
  );

  const getClassification = (r) => {
    if (r.SM_Category30_40) return "30-40";
    if (r.SM_Category40_50) return "40-50";
    if (r.SM_Category50_60) return "50-60";
    if (r.SM_Category60_70) return "60-70";
    if (r.SM_Category70_80) return "70-80";
    if (r.SM_Category80_100) return "80-100";
    if (r.SM_Category100_120) return "100-120";
    if (r.SM_Category120_150) return "120-150";
    return null;
  };
  console.log(data)
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: '2px solid #e3e3e3',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '340px',
        minWidth: '340px',
      }}
    >
      <div className="flex-row">
        <span className="label">Camaronera:</span>
        <span>{data.AD_Org_ID.identifier || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Piscina Engorde:</span>
        <span>{data.M_Warehouse_ID.identifier || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Lote ID:</span>
        <span>{data.SM_Batch || 'NA'}</span>
      </div>

      <div className="flex-row" style={{ justifyContent: 'space-between', marginTop: 10 }}>
        <Typography.Title level={4} style={{ color: '#0372ce' }}>
          Avance Ciclo
        </Typography.Title>
        <Typography.Title level={4}>
          {porcentaje || 0}%
        </Typography.Title>
      </div>

      <div className="harvest-report-divider-2" style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }} />

      <div className="flex-row">
        <span className="label">Inicio de Cultivo:</span>
        <span>{data.SM_PlannedPlantingDate || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Fin de Cultivo:</span>
        <span>{data.SM_PlannedFinishDate || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Clasificación de Pesca:</span>
        <span>{getClassification(data) || 'NA'}</span>
      </div>

     

      <div className="flex-row">
        <span className="label">Coordinación Pesca:</span>
        <span style={{ fontSize: "12px" }}>{data.sm_coordination_name || 'NA'}</span>
      </div>

      <div className="flex-row">
        <span className="label">Volumen Estimado:</span>
        <span style={{ fontSize: "12px" }}>{data.SM_ProjectedBiomass || 'NA'}</span>
      </div>

     
    </div>
  );
};

export default WarehouseCard
