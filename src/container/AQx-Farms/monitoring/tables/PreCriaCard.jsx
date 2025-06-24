import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const PreCriaCard = ({ feedingreport }) => {
  if (!feedingreport) return null;

  return (
    <Cards title="Datos Reales de Pre Cría" size="large">
      <div style={{ fontSize: "12px" }}>
        <div className="flex-row">
          <span className="label">Piscina:</span>
          <span>{feedingreport?.SM_PreBreedingPool_ID?.identifier || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Px Siembra:</span>
          <span>{1 / feedingreport?.SM_AnimalsPerGram || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Px Transferencia:</span>
          <span>{1 / feedingreport?.SM_AnimalsPerGramPreFatten || 1 / feedingreport?.SM_AnimalsPerGramFatten || 'N/A'}</span>
        </div>
        <div className="harvest-report-divider-2" />
        <div className="flex-row">
          <span className="label">Supervivencia:</span>
          <span>
            {feedingreport ? (
              (() => {
                const value = ((feedingreport.SM_PoolSize * feedingreport.SM_DensityPerHectareFatten) /
                  (feedingreport.SM_AnimalsPerGram * 1000)) * 100;

                if (value === 0 || (value < 1 && value > 0)) {
                  return `${value.toFixed(4)}%`;
                } else if (Number.isInteger(value)) {
                  return `${value.toFixed(2)}%`;
                } else {
                  return `${value.toFixed(2)}%`;
                }
              })()
            ) : 'N/A'}
          </span>

        </div>
      </div>
    </Cards>
  );
};

export default PreCriaCard;
