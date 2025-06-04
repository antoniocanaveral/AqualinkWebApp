export const resultsTableData = (productionReports, getCiclosValues, reportStatementFullData, indirectCosts, getEngordeData) => {
    return [
        {
            key: 'ingreso_ventas_total',
            descripcion: 'Ingreso x Ventas Total ($)',
            ...getCiclosValues(productionReports, (r) => r.sm_totalsalesincome || 0),
        },
        {
            key: 'ingreso_total_ha',
            descripcion: 'Ingreso Total/Ha ($)',
            ...getCiclosValues(productionReports, (r) => {
                const areaTotal = (r.poolsize_prebreeding || 0) + (r.poolsize_prefattening || 0) + (r.poolsize_mwarehouse || 0);
                const salesIncome = r.sm_totalsalesincome || 0;
                return areaTotal !== 0 ? (salesIncome / areaTotal).toFixed(2) : 0;
            }),
        },
        {
            key: 'eip',
            descripcion: 'EIP',
            ...getCiclosValues(productionReports, (r) => {
                const crecimientoSemanal = r.e_production_json.sm_weeklygrowthreal || 0;
                const fca = r.e_production_json.sm_fca || 1; // Avoid division by zero
                const preCriaSurvival = r.pc_production_json.sm_pxreal !== 0
                    ? ((r.pc_production_json.sm_transferredkg || 0) * 1000) / (r.pc_production_json.sm_pxreal || 0)
                    : 0;
                const preEngordeSurvival = r.pe_production_json.sm_pxreal !== 0
                    ? ((r.pe_production_json.sm_transferredkg || 0) * 1000) / (r.pe_production_json.sm_pxreal || 0)
                    : 0;
                const engordeBiomass = r.e_production_json.biomass_raleo ?? r.e_production_json.biomass_pesca ?? 0;
                const engordeSurvival = r.e_production_json.sm_pxreal !== 0
                    ? (engordeBiomass * 1000) / (r.e_production_json.sm_pxreal || 0)
                    : 0;
                const protocolo = r.Description?.toLowerCase();
                const supervivenciaTotal = protocolo?.includes('bifásico')
                    ? preCriaSurvival * engordeSurvival
                    : preCriaSurvival * preEngordeSurvival * engordeSurvival;
                return fca !== 0 ? ((crecimientoSemanal * supervivenciaTotal) / fca).toFixed(2) : 0;
            }),
        },
        {
            key: 'rendimiento_produccion_piscina',
            descripcion: 'Rendimiento de Producción por Piscina ($)',
            ...getCiclosValues(productionReports, (r, idx) => {
                const engordeData = getEngordeData([r], getCiclosValues, reportStatementFullData, indirectCosts);
                const costoTotalProtocolo = parseFloat(engordeData.find(item => item.key === 'costo_total_protocolo')?.[`ciclo${idx + 1}`]) || 0;
                const salesIncome = r.sm_totalsalesincome || 0;
                return (salesIncome - costoTotalProtocolo).toFixed(2);
            }),
        },
        {
            key: 'rendimiento_produccion_ha',
            descripcion: 'Rendimiento de Producción/Ha ($)',
            ...getCiclosValues(productionReports, (r, idx) => {
                const engordeData = getEngordeData([r], getCiclosValues, reportStatementFullData, indirectCosts);
                const costoTotalProtocolo = parseFloat(engordeData.find(item => item.key === 'costo_total_protocolo')?.[`ciclo${idx + 1}`]) || 0;
                const salesIncome = r.sm_totalsalesincome || 0;
                const rendimientoPiscina = salesIncome - costoTotalProtocolo;
                const areaTotal = (r.poolsize_prebreeding || 0) + (r.poolsize_prefattening || 0) + (r.poolsize_mwarehouse || 0);
                return areaTotal !== 0 ? (rendimientoPiscina / areaTotal).toFixed(2) : 0;
            }),
        },
        {
            key: 'rendimiento_produccion_ha_dia',
            descripcion: 'Rendimiento de Producción/Ha/Día ($)',
            ...getCiclosValues(productionReports, (r, idx) => {
                const engordeData = getEngordeData([r], getCiclosValues, reportStatementFullData, indirectCosts);
                const costoTotalProtocolo = parseFloat(engordeData.find(item => item.key === 'costo_total_protocolo')?.[`ciclo${idx + 1}`]) || 0;
                const salesIncome = r.sm_totalsalesincome || 0;
                const rendimientoPiscina = salesIncome - costoTotalProtocolo;
                const areaEngorde = r.poolsize_mwarehouse || 0;
                const diasCultivo = (r.e_production_json.fatten_weeks * 7) || 0;
                return areaEngorde !== 0 && diasCultivo !== 0
                    ? ((rendimientoPiscina / areaEngorde) / diasCultivo).toFixed(2)
                    : 0;
            }),
        },
    ];
};