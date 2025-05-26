import React from 'react';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const DatosRealesCard = ({ feedingreport }) => {
    if (!feedingreport) return null;

    const projected = feedingreport.feedingdata_projectedjson || [];
    const real = feedingreport.feedingdata_realjson || [];


    const lastFca = [...projected]
        .filter(d => d.sm_fca != null)
        .sort((a, b) => b.sm_index - a.sm_index)[0]?.sm_fca?.toFixed(2);


    const lastWGR = [...real]
        .filter(d => d.sm_weeklygrowthreal != null)
        .sort((a, b) => b.sm_index - a.sm_index)[0]?.sm_weeklygrowthreal?.toFixed(2);


    const lastSupervivencia = [...real]
        .filter(d => d.animalest != null)
        .sort((a, b) => b.sm_index - a.sm_index)[0]?.animalest;

    return (
        <Cards title="Datos Reales de Ciclo" size="large">
            <div style={{ fontSize: "12px" }}>
                <div className="flex-row"><span className="label">Lote ID:</span><span>{feedingreport?.SM_Batch || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">Protocolo de Cultivo:</span><span>{feedingreport?.sm_template_description || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">Piscina Engorde:</span><span>{feedingreport?.M_Warehouse_ID?.identifier || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">Densidad Inicial:</span><span>{feedingreport?.SM_StockingPopulation || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">Densidad x Ha:</span><span>{(feedingreport?.SM_StockingPopulation / feedingreport?.SM_PoolSize)?.toFixed(2) || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">FCA Real (DdC):</span><span>{lastFca || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">Peso Inicial Engorde:</span><span>{1 /feedingreport?.SM_AnimalsPerGramFatten || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">Protocolo Alimentación:</span><span>{feedingreport?.SM_FeedingProtocols_ID?.identifier || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">WGR (gr/w):</span><span>{lastWGR || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">Supervivencia Real:</span><span>{lastSupervivencia || 'N/A'}</span></div>
                <div className="harvest-report-divider-2" />
                <div className="flex-row"><span className="label">Peso Promedio (DdC):</span><span>{feedingreport?.pesoPromedio || 'N/A'}</span></div>
            </div>
        </Cards>
    );
};

export default DatosRealesCard;
