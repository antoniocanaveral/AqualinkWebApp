import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const FeedingGeneralCard = ({ feedingreport }) => {
  if (!feedingreport) return null;

  return (
    <Cards title="Datos Generales" size="large">
      <div style={{ fontSize: "12px" }}>
        {[
          { label: 'Lote ID', value: feedingreport?.SM_Batch },
          { label: 'Protocolo de Cultivo', value: feedingreport?.sm_template_description },
          { label: 'Piscina Engorde', value: feedingreport?.M_Warehouse_ID?.identifier },
          { label: 'Densidad Inicial', value: feedingreport?.SM_Density },
          { label: 'Densidad x Ha', value: feedingreport?.SM_DensityPerHectare },
          { label: 'FCA Estimado', value: 1.1},
          { label: 'Peso Inicial Engorde', value:  1 / feedingreport.SM_RequestedPL},
          { label: 'Protocolo Alimentación', value: feedingreport?.SM_FeedingProtocols_ID?.identifier },
          { label: 'WGR (gr/w)', value: feedingreport?.SM_EstimatedWeeklyGrowth },
          { label: 'Supervivencia Estimada', value: feedingreport?.SM_Survival },
          { label: 'Peso Promedio Objetivo', value: feedingreport?.SM_TargetWeight },
        ].map((item, idx) => (
          <div key={idx}>
            <div className="flex-row">
              <div><span className="label">{item.label}:</span></div>
              <div><span>{item.value ?? 'N/A'}</span></div>
            </div>
            <div className="harvest-report-divider-2" />
          </div>
        ))}
      </div>
    </Cards>
  );
};

export default FeedingGeneralCard;
