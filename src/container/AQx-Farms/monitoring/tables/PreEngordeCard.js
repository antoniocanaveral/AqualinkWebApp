import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const PreEngordeCard = ({ feedingreport }) => {
  if (!feedingreport) return null;

  return (
    <Cards   title="Pre Engorde" size="large">
      <div style={{ fontSize: "12px" }}>
        <div className="flex-row">
          <span className="label">Piscina:</span>
          <span>{feedingreport?.SM_PreFatteningPool_ID?.identifier || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Px Transfer 1:</span>
          <span>{feedingreport?.pxTransfer1 || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Px Transfer 2:</span>
          <span>{feedingreport?.pxTransfer2 || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Supervivencia:</span>
          <span>{feedingreport?.supervivencia || 'N/A'}</span>
        </div>
      </div>
    </Cards>
  );
};

export default PreEngordeCard;
