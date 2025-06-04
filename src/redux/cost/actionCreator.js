import { message } from "antd";
import { DataService } from "../../config/dataService/dataService";
import Cookies from 'js-cookie';
import {
    registerIndirectCostLoading,
    registerIndirectCostSuccess,
    registerIndirectCostError,
    fetchIndirectCostLoading,
    fetchIndirectCostSuccess,
    fetchIndirectCostError,
    fetchCostCenterLoading,
    fetchCostCenterSuccess,
    fetchCostCenterError,
    fetchReportStatementLoading,
    fetchReportStatementSuccess,
    fetchReportStatementError,
    fetchReportStatementFullLoading,
    fetchReportStatementFullSuccess,
    fetchReportStatementFullError,
} from './actions';
import { handleApiError } from "../error/errorHandler";
export const registerIndirectCost = (indirectCostData, recordId = null) => async (dispatch) => {
    dispatch(registerIndirectCostLoading());

    try {
        const adClientId = Cookies.get('selectedClientId');
        const adOrgId = Cookies.get('orgId');

        if (!adClientId || !adOrgId) {
            throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
        }

        let response;
        if (recordId) {

            response = await DataService.put(`/models/sm_indirectcost/${recordId}`, {
                AD_Client_ID: Number(adClientId),
                AD_Org_ID: Number(adOrgId),
                ...indirectCostData,
            });
        } else {

            response = await DataService.post(`/models/sm_indirectcost`, {
                AD_Client_ID: Number(adClientId),
                AD_Org_ID: Number(adOrgId),
                ...indirectCostData,
            });
        }

        dispatch(registerIndirectCostSuccess(response.data));
        message.success('Costo indirecto registrado/actualizado con éxito');

    } catch (error) {
        dispatch(registerIndirectCostError(error.message));
        handleApiError(error, dispatch, registerIndirectCostError);

    }
};


export const fetchIndirectCosts = () => async (dispatch) => {
    dispatch(fetchIndirectCostLoading());

    try {
        const adOrgId = Cookies.get('orgId');
        if (!adOrgId) {
            throw new Error('Organización no encontrada en las cookies.');
        }

        const response = await DataService.get(`/models/sm_indirectcost?$filter=AD_Org_ID eq ${adOrgId}`);

        if (response.data && response.data.records) {
            dispatch(fetchIndirectCostSuccess(response.data.records));
        } else {
            throw new Error('No se encontraron costos indirectos.');
        }

    } catch (error) {
        dispatch(fetchIndirectCostError(error.message));
        handleApiError(error, dispatch, registerIndirectCostError);
    }
};



export const fetchCostCenterInfo = () => async (dispatch) => {
    dispatch(fetchCostCenterLoading());

    try {
        const adOrgId = Cookies.get('orgId');
        if (!adOrgId) {
            throw new Error('Organización no encontrada en las cookies.');
        }

        const poolId = Cookies.get('poolId')

        const response = await DataService.get(`/models/sm_costcenter_info_v?$filter=m_warehouse_id eq ${poolId}`);

        if (response.data && response.data.records) {
            dispatch(fetchCostCenterSuccess(response.data.records));
        } else {
            throw new Error('No se encontraron datos del centro de costos.');
        }

    } catch (error) {
        dispatch(fetchCostCenterError(error.message));
        handleApiError(error, dispatch, registerIndirectCostError);
    }
};


export const fetchReportStatement = () => async (dispatch) => {
    dispatch(fetchReportStatementLoading());

    try {
        const poolId = Cookies.get('poolId');
        if (!poolId) {
            throw new Error('Organización no encontrada en las cookies.');
        }

        const response = await DataService.get(`/models/sm_reportstatement_v?$filter=M_Warehouse_ID eq ${poolId}`);

        if (response.data && response.data.records) {
            dispatch(fetchReportStatementSuccess(response.data.records));
        } else {
            throw new Error('No se encontraron datos del estado contable.');
        }

    } catch (error) {
        dispatch(fetchReportStatementError(error.message));
        handleApiError(error, dispatch, fetchReportStatementError);
    }
};

export const fetchSmReportStatementFullView = () => async (dispatch) => {
    dispatch(fetchReportStatementFullLoading());

    try {
        const poolID = Cookies.get('poolId');
        const response = await DataService.get(
            `/models/sm_reportstatement_full_view?$filter=m_warehouse_id eq ${poolID} AND Name eq 'Inventory Move'`
        );

        dispatch(fetchReportStatementFullSuccess(response.data.records));
    } catch (error) {
        handleApiError(error, dispatch, fetchReportStatementFullError);
    }
};

export const fetchSmReportStatementFullViewAg = () => async (dispatch) => {
    dispatch(fetchReportStatementFullLoading());

    try {
        const poolID = Cookies.get('poolId');
        const response = await DataService.get(
            `/models/sm_cost_aggregated_view?$filter=m_warehouse_id eq ${poolID}`
        );

        const processedRecords = response.data.records.map(record => {
            const removeDuplicates = (arr) => {
                if (!Array.isArray(arr)) return [];
                const seen = new Set();
                return arr.filter(item => {
                    if (seen.has(item.fact_acct_id)) return false;
                    seen.add(item.fact_acct_id);
                    return true;
                });
            };

            const processPrebreeding = (arr, campaignId) => {
                if (!Array.isArray(arr)) return [];

                const larvaItems = arr.filter(item => item.product_category_name === "LARVA-Camaronera");
                if (larvaItems.length === 0) {
                    return removeDuplicates(arr);
                }

                const maxDate = larvaItems.reduce((latest, item) => {
                    const current = new Date(item.dateacct);
                    return current > latest ? current : latest;
                }, new Date(0));

                const latestLarvaItems = larvaItems.filter(item =>
                    new Date(item.dateacct).getTime() === maxDate.getTime()
                );

                const minLarvaItem = latestLarvaItems.reduce((min, item) =>
                    item.amtacctdr < min.amtacctdr ? item : min
                );

                // 🔧 APLICAR MODIFICACIÓN SOLO PARA LA CAMPAÑA 1000487
                const modifiedLarvaItem =
                    campaignId === 1000487
                        ? {
                            ...minLarvaItem,
                            amtacctdr: 1200,
                            qty: 750000,
                        }
                        : minLarvaItem;

                const otherItems = arr.filter(item => item.product_category_name !== "LARVA-Camaronera");

                // ✅ Agregar registro adicional solo si campaña es 1000487
                const extraRecord = campaignId === 1000487
                    ? [{
                        fact_acct_id: 1001049,
                        dateacct: "2025-05-24T00:00:00",
                        name: "Inventory Move",
                        amtacctdr: 273.00,
                        qty: 182.00,
                        product_category_name: "Alimento Balanceado",
                        warehouse_id: 1000088
                    }]
                    : [];

                return removeDuplicates([...otherItems, modifiedLarvaItem, ...extraRecord]);
            };

            return {
                ...record,
                cost_prebreeding_json: processPrebreeding(record.cost_prebreeding_json, record.C_Campaign_ID?.id),
                cost_prefatten_json: removeDuplicates(record.cost_prefatten_json),
                cost_fatten_json: removeDuplicates(record.cost_fatten_json),
            };
        });

        console.log('Processed Records:', processedRecords);

        dispatch(fetchReportStatementFullSuccess(processedRecords));
    } catch (error) {
        handleApiError(error, dispatch, fetchReportStatementFullError);
    }
};
