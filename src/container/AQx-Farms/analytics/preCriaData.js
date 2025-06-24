import moment from 'moment';

export const getPreCriaData = (productionReports, getCiclosValues, reportStatementFullData, indirectCosts) => {
    const getCostData = (report, cycleIndex) => {
        if (!report || !reportStatementFullData?.length) return {};

        const campaignId = report.C_Campaign_ID?.id;
        const startDate = moment(report.StartDate);
        const endDate = moment(report.EndDate);

        const campaignRecord = reportStatementFullData.find(
            (stmt) =>
                (!campaignId || stmt.C_Campaign_ID?.id === campaignId) &&
                moment(stmt.StartDate).isSameOrBefore(endDate, 'day') &&
                moment(stmt.EndDate).isSameOrAfter(startDate, 'day')
        );

        if (!campaignRecord) return {};

        const prebreedingData = campaignRecord.cost_prebreeding_json || [];

        const larvaStmt = prebreedingData.find(
            (item) => item.product_category_name?.toUpperCase() === 'LARVA-CAMARONERA'
        );

        const costoLarvaMillar = larvaStmt && larvaStmt.qty !== 0
            ? (larvaStmt.amtacctdr / larvaStmt.qty) * 1000
            : 0;

        const alimentoStmts = prebreedingData.filter(
            (item) => item.product_category_name?.toUpperCase() === 'ALIMENTO BALANCEADO'
        );
        const totalAlimentoCost = alimentoStmts.reduce((sum, item) => sum + (item.amtacctdr || 0), 0);
        const totalAlimentoQty = alimentoStmts.reduce((sum, item) => sum + (item.qty || 0), 0);
        const costoPonderadoAlimento = totalAlimentoQty !== 0
            ? totalAlimentoCost / totalAlimentoQty
            : 0;

        const alimentoTotal = parseFloat(report.pc_production_json.sm_accumulatedfoodreal) || 0;
        const costoTotalAlimento = costoPonderadoAlimento * alimentoTotal;

        const insumosStmts = prebreedingData.filter(
            (item) =>
                item.product_category_name?.toUpperCase() !== 'ALIMENTO BALANCEADO' &&
                item.product_category_name?.toUpperCase() !== 'LARVA-CAMARONERA'
        );
        const costoTotalInsumos = costoTotalAlimento * 0.25;

        const costoAgregadoInsumos = alimentoTotal !== 0
            ? costoTotalInsumos / alimentoTotal
            : 0;

        const indirectCostRecords = indirectCosts?.filter((cost) =>
            moment(cost.Created).isBetween(startDate, endDate, 'day', '[]')
        ) || [];
        const weightedIndirectCost = indirectCostRecords.length
            ? indirectCostRecords.reduce((sum, cost) => sum + (cost.sm_indirectcostvalue || 0), 0) / indirectCostRecords.length
            : 0;

        const densidadSiembra = parseFloat(report.pc_production_json.stocking_population) || 0;
        const costoLarva = (costoLarvaMillar * densidadSiembra) / 1000;

        const diasPreCria = (report.pc_production_json.prebreeding_weeks * 7) || 0;
        const areaPreCria = parseFloat(report.poolsize_prebreeding) || 0;
        const costoOperacion = (weightedIndirectCost * diasPreCria * areaPreCria) +
            costoTotalAlimento + costoTotalInsumos;

        const costoTotalPreCria = costoLarva + costoOperacion;

        const costoPorMillar = densidadSiembra !== 0
            ? costoTotalPreCria / (densidadSiembra / 1000)
            : 0;

        return {
            costo_larva_millar: costoLarvaMillar.toFixed(2),
            costo_ponderado_alimento: costoPonderadoAlimento.toFixed(2),
            costo_agregado_insumos: costoAgregadoInsumos.toFixed(2),
            costo_total_alimento: costoTotalAlimento.toFixed(2),
            costo_total_insumos: costoTotalInsumos.toFixed(2),
            costo_indirecto_ha_dia: weightedIndirectCost.toFixed(2),
            costo_larva: costoLarva.toFixed(2),
            costo_operacion: costoOperacion.toFixed(2),
            costo_total_precria: costoTotalPreCria.toFixed(2),
            costo_por_millar: costoPorMillar.toFixed(2),
        };
    };

    return [
        {
            key: 'variables_produccion_precria',
            descripcion: 'VARIABLES DE PRODUCCIÓN PRECRÍA',
        },
        {
            key: 'precria_pool_name',
            descripcion: 'Piscina de Pre Cría#',
            ...getCiclosValues(productionReports, (r) => r.pc_production_json.prebreeding_pool_name),
        },
        {
            key: 'precria_stocking_population',
            descripcion: 'Densidad de Siembra',
            ...getCiclosValues(productionReports, (r) => r.pc_production_json.stocking_population),
        },
        {
            key: 'precria_density_per_ha',
            descripcion: 'Densidad por Ha (Pre Cría)',
            ...getCiclosValues(productionReports, (r) =>
                (r.pc_production_json.stocking_population || 0) / (r.poolsize_prebreeding || 0)
            ),
        },
        {
            key: 'precria_density_per_m2',
            descripcion: 'Densidad de Siembra en Pre Cría por m²',
            ...getCiclosValues(productionReports, (r) =>
                (r.pc_production_json.stocking_population || 0) / ((r.poolsize_prebreeding || 0) * 10000)
            ),
        },
        {
            key: 'precria_supervivencia',
            descripcion: 'Sobrevivencia',
            ...getCiclosValues(productionReports, (r) => {
                const transferredKg = r.pc_production_json.sm_transferredkg || 0;
                const pxReal = r.pc_production_json.sm_pxreal || 0;
                return pxReal !== 0 ? ((transferredKg * 1000) / pxReal) : 0;
            }),
        },
        {
            key: 'precria_initial_weight',
            descripcion: 'Peso Inicial de Siembra',
            ...getCiclosValues(productionReports, (r) => 1 / (r.pc_production_json.animals_per_gram || 0)),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Peso final a Transferencia',
            ...getCiclosValues(productionReports, (r) =>
                1 / r?.SM_AnimalsPerGramPreFatten || 1 / r?.SM_AnimalsPerGramFatten || 'N/A'
            ),
        },
        {
            key: 'precria_dias_secado',
            descripcion: 'Días de Secado Pre Cría',
            ...getCiclosValues(productionReports, (r) => 0),
        },
        {
            key: 'precria_dias',
            descripcion: 'Días de Pre Cría',
            ...getCiclosValues(productionReports, (r) => r.pc_production_json.prebreeding_weeks * 7),
        },
        {
            key: 'precria_daily_growth',
            descripcion: 'Crecimiento Diario (Promedio)',
            ...getCiclosValues(productionReports, (r) => r.pc_production_json.m_lineargrowthreal),
        },
        {
            key: 'precria_total_biomass',
            descripcion: 'Biomasa Total PreCría (kgs) (A Transferencia)',
            ...getCiclosValues(productionReports, (r) => r.biomass),
        },
        {
            key: 'precria_total_food',
            descripcion: 'Alimento Total Pre Cría (kg)',
            ...getCiclosValues(productionReports, (r) => r.pc_production_json.sm_accumulatedfoodreal),
        },
        {
            key: 'precria_fca',
            descripcion: 'FCA',
            ...getCiclosValues(productionReports, (r) => r.pc_production_json.sm_fca),
        },
        {
            key: 'costos_produccion_precria',
            descripcion: 'COSTOS DE PRODUCCIÓN PRECRÍA',
        },
        {
            key: 'costo_larva_millar',
            descripcion: 'Costo Larva x Millar ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_larva_millar),
        },
        {
            key: 'costo_ponderado_alimento',
            descripcion: 'Costo Ponderado x Kg Alimento ($/kg)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_ponderado_alimento),
        },
        {
            key: 'costo_agregado_insumos',
            descripcion: 'Costo Agregado de Insumos x Kg de Alimento ($/kg)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_agregado_insumos),
        },
        {
            key: 'costo_total_alimento',
            descripcion: 'Costo Total Alimento ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_total_alimento),
        },
        {
            key: 'costo_total_insumos',
            descripcion: 'Costo Total Insumos ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_total_insumos),
        },
        {
            key: 'costo_indirecto_ha_dia',
            descripcion: 'Costo Indirecto Ha/día ($/ha/día)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_indirecto_ha_dia),
        },
        {
            key: 'costo_larva',
            descripcion: 'Costo de la Larva ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_larva),
        },
        {
            key: 'costo_operacion',
            descripcion: 'Costo de Operación Pre Cría ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_operacion),
        },
        {
            key: 'costo_total_precria',
            descripcion: 'Costo Total de Pre Cría ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_total_precria),
        },
        {
            key: 'costo_por_millar',
            descripcion: 'Costo por Millar ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_por_millar),
        },
    ];
};