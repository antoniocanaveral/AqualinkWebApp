import moment from 'moment';

export const getPreEngordeData = (productionReports, getCiclosValues, reportStatementFullData, indirectCosts) => {
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

        const prefatteningData = campaignRecord.cost_prefattening_json || [];

        const alimentoStmts = prefatteningData.filter(
            (item) => item.product_category_name?.toUpperCase() === 'ALIMENTO BALANCEADO'
        );
        const totalAlimentoCost = alimentoStmts.reduce((sum, item) => sum + (item.amtacctdr || 0), 0);
        const totalAlimentoQty = alimentoStmts.reduce((sum, item) => sum + (item.qty || 0), 0);
        const costoPonderadoAlimento = totalAlimentoQty !== 0
            ? totalAlimentoCost / totalAlimentoQty
            : 0;

        const alimentoTotal = parseFloat(report.pe_production_json.sm_accumulatedfoodreal) || 0;
        const costoTotalAlimento = costoPonderadoAlimento * alimentoTotal;

        const insumosStmts = prefatteningData.filter(
            (item) => item.product_category_name?.toUpperCase() !== 'ALIMENTO BALANCEADO'
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

        const diasPreEngorde = (report.pe_production_json.prefattening_weeks * 7) || 0;
        const areaPreEngorde = parseFloat(report.poolsize_prefattening) || 0;
        const costoOperacion = (weightedIndirectCost * diasPreEngorde * areaPreEngorde) +
            costoTotalAlimento + costoTotalInsumos;

        const costoTotalPreEngorde = costoOperacion;

        const densidadTransferencia = (report.SM_DensityPerHectarePreFatten * report.poolsize_prefattening) || 0;
        const pesoFinal = report?.SM_AnimalsPerGramFatten ? 1 / report.SM_AnimalsPerGramFatten : 0;
        const biomasaTotal = (densidadTransferencia * pesoFinal) / 1000;
        const costoPorKgStock = biomasaTotal !== 0
            ? costoTotalPreEngorde / biomasaTotal
            : 0;

        return {
            costo_ponderado_alimento: costoPonderadoAlimento.toFixed(2),
            costo_total_alimento: costoTotalAlimento.toFixed(2),
            costo_total_insumos: costoTotalInsumos.toFixed(2),
            costo_agregado_insumos: costoAgregadoInsumos.toFixed(2),
            costo_indirecto_ha_dia: weightedIndirectCost.toFixed(2),
            costo_operacion: costoOperacion.toFixed(2),
            costo_total_preengorde: costoTotalPreEngorde.toFixed(2),
            costo_por_kg_stock: costoPorKgStock.toFixed(2),
        };
    };

    return [
        {
            key: 'variables_produccion_preengorde',
            descripcion: 'VARIABLES DE PRODUCCIÓN FASE PRE ENGORDE',
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Piscina de Pre Engorde#',
            ...getCiclosValues(productionReports, (r) => r.pe_production_json.prefattening_pool_name),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Densidad de Transferencia',
            ...getCiclosValues(productionReports, (r) => r.SM_DensityPerHectarePreFatten),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Densidad por Ha (Pre Engorde)',
            ...getCiclosValues(productionReports, (r) => r.SM_DensityPerHectarePreFatten / r.poolsize_prefattening),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Densidad de Siembra en Pre Engorde por m²',
            ...getCiclosValues(productionReports, (r) => r.SM_DensityPerHectarePreFatten / 10000),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Sobrevivencia',
            ...getCiclosValues(productionReports, (r) => {
                const transferredKg = r.pe_production_json.sm_transferredkg || 0;
                const pxReal = r.pe_production_json.sm_pxreal || 0;
                return pxReal !== 0 ? ((transferredKg * 1000) / pxReal) : 0;
            }),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Peso Inicial de Transferencia',
            ...getCiclosValues(productionReports, (r) => 1 / r?.SM_AnimalsPerGramPreFatten || 'N/A'),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Peso Final a Transferencia',
            ...getCiclosValues(productionReports, (r) => 1 / r?.SM_AnimalsPerGramFatten || 'N/A'),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Días de Secado Pre Engorde',
            ...getCiclosValues(productionReports, (r) => 5),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Días de Pre Engorde',
            ...getCiclosValues(productionReports, (r) => r.pe_production_json.prefattening_weeks * 7),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Crecimiento Diario (Promedio)',
            ...getCiclosValues(productionReports, (r) => r.pe_production_json.m_lineargrowthreal),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Biomasa Total Pre Engorde (kgs) (A Transferencia)',
            ...getCiclosValues(productionReports, (r) => {
                const densidadTransferencia = (r.SM_DensityPerHectarePreFatten * r.poolsize_prefattening) || 0;
                const pesoFinal = r?.SM_AnimalsPerGramFatten ? 1 / r.SM_AnimalsPerGramFatten : 0;
                return (densidadTransferencia * pesoFinal) / 1000;
            }),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'Alimento Total Pre Engorde',
            ...getCiclosValues(productionReports, (r) => r.pe_production_json.sm_accumulatedfoodreal),
        },
        {
            key: 'poolsize_mwarehouse',
            descripcion: 'FCA',
            ...getCiclosValues(productionReports, (r) => r.pe_production_json.sm_fca),
        },
        {
            key: 'costos_produccion_precria',
            descripcion: 'COSTOS DE PRODUCCIÓN PRE ENGORDE',
        },
        {
            key: 'costo_ponderado_alimento',
            descripcion: 'Costo x Kg Alimento (Pre Engorde) ($/kg)',
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
            key: 'costo_operacion',
            descripcion: 'Costo de Operación Pre Engorde ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_operacion),
        },
        {
            key: 'costo_total_preengorde',
            descripcion: 'Costo Total de Pre Engorde ($)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_total_preengorde),
        },
        {
            key: 'costo_por_kg_stock',
            descripcion: 'Costo por Kg de Stock ($/kg)',
            ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_por_kg_stock),
        },
    ];
};