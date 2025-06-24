import moment from 'moment';
import { getPreCriaData } from './preCriaData';
import { getPreEngordeData } from './preEngordeData';

export const getEngordeData = (productionReports, getCiclosValues, reportStatementFullData, indirectCosts) => {
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

    const fatteningData = campaignRecord.cost_fattening_json || [];

    const alimentoStmts = fatteningData.filter(
      (item) => item.product_category_name?.toUpperCase() === 'ALIMENTO BALANCEADO'
    );
    const totalAlimentoCost = alimentoStmts.reduce((sum, item) => sum + (item.amtacctdr || 0), 0);
    const totalAlimentoQty = alimentoStmts.reduce((sum, item) => sum + (item.qty || 0), 0);
    const costoPonderadoAlimento = totalAlimentoQty !== 0
      ? totalAlimentoCost / totalAlimentoQty
      : 0;

    const alimentoTotal = parseFloat(report.e_production_json.sm_accumulatedfoodreal) || 0;
    const costoTotalAlimento = costoPonderadoAlimento * alimentoTotal;

    const insumosStmts = fatteningData.filter(
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

    const diasEngorde = ((report.e_production_json.fatten_weeks * 7) + 5) || 0;

    const totalArea = (report.poolsize_prebreeding || 0) + (report.poolsize_prefattening || 0) + (report.poolsize_mwarehouse || 0);
    const costoAlimentoHaDia = totalArea !== 0 && diasEngorde !== 0
      ? (costoTotalAlimento / (diasEngorde * totalArea))
      : 0;

    const areaEngorde = parseFloat(report.poolsize_mwarehouse) || 0;
    const costoIndirectoHaDiaTotal = weightedIndirectCost * areaEngorde * diasEngorde;

    const costoTotalProduccionEngorde = costoTotalAlimento + costoTotalInsumos + costoIndirectoHaDiaTotal;

    const costoTotalProduccionHa = areaEngorde !== 0
      ? costoTotalProduccionEngorde / areaEngorde
      : 0;

    const protocolo = report.Description?.toLowerCase();
    let costoTotalProtocolo = 0;
    const preCriaCosts = getPreCriaData([report], getCiclosValues, reportStatementFullData, indirectCosts);
    const costoTotalPreCria = parseFloat(preCriaCosts.find(item => item.key === 'costo_total_precria')?.[`ciclo${cycleIndex + 1}`]) || 0;
    if (protocolo?.includes('bifásico')) {
      costoTotalProtocolo = costoTotalPreCria + costoTotalProduccionEngorde;
    } else if (protocolo?.includes('trifásico')) {
      const preEngordeCosts = getPreEngordeData([report], getCiclosValues, reportStatementFullData, indirectCosts);
      const costoTotalPreEngorde = parseFloat(preEngordeCosts.find(item => item.key === 'costo_total_preengorde')?.[`ciclo${cycleIndex + 1}`]) || 0;
      costoTotalProtocolo = costoTotalPreCria + costoTotalPreEngorde + costoTotalProduccionEngorde;
    }

    const biomasaTotalCosechada = ((report.e_production_json.biomass_raleo || 0) + (report.e_production_json.biomass_pesca || 0)) || 0;
    const costoProduccionKgCamaron = biomasaTotalCosechada !== 0
      ? costoTotalProtocolo / biomasaTotalCosechada
      : 0;

    return {
      costo_ponderado_alimento: costoPonderadoAlimento.toFixed(2),
      costo_total_alimento: costoTotalAlimento.toFixed(2),
      costo_agregado_insumos: costoAgregadoInsumos.toFixed(2),
      costo_alimento_ha_dia: costoAlimentoHaDia.toFixed(2),
      costo_indirecto_ha_dia: weightedIndirectCost.toFixed(2),
      costo_indirecto_ha_dia_total: costoIndirectoHaDiaTotal.toFixed(2),
      costo_total_produccion_engorde: costoTotalProduccionEngorde.toFixed(2),
      costo_total_produccion_ha: costoTotalProduccionHa.toFixed(2),
      costo_total_protocolo: costoTotalProtocolo.toFixed(2),
      costo_produccion_kg_camaron: costoProduccionKgCamaron.toFixed(2),
    };
  };

  const getSurvivalData = (report) => {
    const preCriaSurvival = report.pc_production_json.sm_pxreal !== 0
      ? ((report.pc_production_json.sm_transferredkg || 0) * 1000) / (report.pc_production_json.sm_pxreal || 0)
      : 0;
    const preEngordeSurvival = report.pe_production_json.sm_pxreal !== 0
      ? ((report.pe_production_json.sm_transferredkg || 0) * 1000) / (report.pe_production_json.sm_pxreal || 0)
      : 0;
    const engordeBiomass = report.e_production_json.biomass_raleo ?? report.e_production_json.biomass_pesca ?? 0;
    const engordeSurvival = report.e_production_json.sm_pxreal !== 0
      ? (engordeBiomass * 1000) / (report.e_production_json.sm_pxreal || 0)
      : 0;
    const protocolo = report.Description?.toLowerCase();
    return protocolo?.includes('bifásico')
      ? preCriaSurvival * engordeSurvival
      : preCriaSurvival * preEngordeSurvival * engordeSurvival;
  };

  return [
    {
      key: 'variables_produccion_engorde',
      descripcion: 'VARIABLES DE PRODUCCIÓN ENGORDE',
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Piscina de Engorde#',
      ...getCiclosValues(productionReports, (r) => r.warehouse_name),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Densidad de Transferencia',
      ...getCiclosValues(productionReports, (r) => r.SM_DensityPerHectareFatten * r.poolsize_mwarehouse),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Densidad por Ha (Engorde)',
      ...getCiclosValues(productionReports, (r) => r.SM_DensityPerHectareFatten),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Densidad de Siembra Engorde por m²',
      ...getCiclosValues(productionReports, (r) => r.SM_DensityPerHectareFatten / 10000),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Días de Cultivo',
      ...getCiclosValues(productionReports, (r) => r.e_production_json.fatten_weeks * 7),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Días de Secado Pre Engorde',
      ...getCiclosValues(productionReports, (r) => 5),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Días de Engorde',
      ...getCiclosValues(productionReports, (r) => (r.e_production_json.fatten_weeks * 7) + 5),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Peso de Cosecha',
      ...getCiclosValues(productionReports, (r) => r.e_production_json.harvest_weight),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Crecimiento Semanal Promedio',
      ...getCiclosValues(productionReports, (r) => r.e_production_json.sm_weeklygrowthreal),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Crecimiento Diario Promedio',
      ...getCiclosValues(productionReports, (r) => r.e_production_json.sm_lineargrowthreal),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Biomasa Raleo',
      ...getCiclosValues(productionReports, (r) => r.e_production_json.biomass_raleo),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Biomasa Pesca',
      ...getCiclosValues(productionReports, (r) => r.e_production_json.biomass_pesca),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Biomasa Total Cosechada (Kgs)',
      ...getCiclosValues(productionReports, (r) => (r.e_production_json.biomass_raleo || 0) + (r.e_production_json.biomass_pesca || 0)),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Biomasa Total (Kgs/Ha)',
      ...getCiclosValues(productionReports, (r) => {
        const biomasaTotal = (r.e_production_json.biomass_raleo || 0) + (r.e_production_json.biomass_pesca || 0);
        return r.poolsize_mwarehouse ? biomasaTotal / r.poolsize_mwarehouse : 0;
      }),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Supervivencia Engorde',
      ...getCiclosValues(productionReports, (r) => {
        const biomass = r.e_production_json.biomass_raleo ?? r.e_production_json.biomass_pesca ?? 0;
        const pxReal = r.e_production_json.sm_pxreal || 0;
        return pxReal !== 0 ? ((biomass * 1000) / pxReal) : 0;
      }),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Supervivencia Total (Todas las Fases)',
      ...getCiclosValues(productionReports, (r) => getSurvivalData(r)),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'Alimento Total Engorde',
      ...getCiclosValues(productionReports, (r) => r.e_production_json.sm_accumulatedfoodreal),
    },
    {
      key: 'poolsize_mwarehouse',
      descripcion: 'FCA',
      ...getCiclosValues(productionReports, (r) => r.e_production_json.sm_fca),
    },
    {
      key: 'costos_produccion_precria',
      descripcion: 'COSTOS DE PRODUCCIÓN ENGORDE',
    },
    {
      key: 'costo_ponderado_alimento',
      descripcion: 'Costo Ponderado x Kg de Alimento ($/kg)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_ponderado_alimento),
    },
    {
      key: 'costo_total_alimento',
      descripcion: 'Costo Total del Alimento ($)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_total_alimento),
    },
    {
      key: 'costo_agregado_insumos',
      descripcion: 'Costo Agregado de Insumos x Kg de Alimento ($/kg)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_agregado_insumos),
    },
    {
      key: 'costo_alimento_ha_dia',
      descripcion: 'Costo Alimento/ha/día ($/ha/día)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_alimento_ha_dia),
    },
    {
      key: 'costo_indirecto_ha_dia',
      descripcion: 'Costo Indirecto Ha/día ($/ha/día)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_indirecto_ha_dia),
    },
    {
      key: 'costo_indirecto_ha_dia_total',
      descripcion: 'Costo Indirecto Ha/día Total ($)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_indirecto_ha_dia_total),
    },
    {
      key: 'costo_total_produccion_engorde',
      descripcion: 'Costo Total de Producción Fase Engorde ($)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_total_produccion_engorde),
    },
    {
      key: 'costo_total_produccion_ha',
      descripcion: 'Costo Total de Producción x Ha ($/ha)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_total_produccion_ha),
    },
    {
      key: 'costo_total_protocol',
      descripcion: 'Costo Total por Protocolo (Bi Fásico / Trifásico) ($)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_total_protocolo),
    },
    {
      key: 'costo_produccion_kg_camaron',
      descripcion: 'Costo Producción x kg de Camarón Cosechado($/kg)',
      ...getCiclosValues(productionReports, (r, idx) => getCostData(r, idx).costo_produccion_kg_camaron),
    },
  ];
};