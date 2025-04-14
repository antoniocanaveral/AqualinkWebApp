import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const PreEngordeCard = ({ feedingreport }) => {
  if (!feedingreport) return null;

  return (
    <Cards title="Pre Engorde" size="large">
      <div style={{ fontSize: "12px" }}>
        <div className="flex-row">
          <span className="label">Piscina:</span>
          <span>{feedingreport?.SM_PreFatteningPond_ID?.identifier || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Px Transfer 1:</span>
          <span>{1 / feedingreport?.SM_AnimalsPerGramPreFatten || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Px Transfer 2:</span>
          <span>{1 / feedingreport?.SM_AnimalsPerGramFatten || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Supervivencia:</span>
          {feedingreport ? (
            (() => {
              const value = ((feedingreport.SM_PoolSize * feedingreport.SM_DensityPerHectarePreFatten) /
                (feedingreport.SM_AnimalsPerGramFatten * 1000)) * 100;

              if (value === 0 || (value < 1 && value > 0)) {
                return `${value.toFixed(4)}%`;
              } else if (Number.isInteger(value)) {
                return `${value.toFixed(2)}%`;
              } else {
                return `${value.toFixed(2)}%`;
              }
            })()
          ) : 'N/A'}
        </div>
      </div>
    </Cards>
  );
};

export default PreEngordeCard;
