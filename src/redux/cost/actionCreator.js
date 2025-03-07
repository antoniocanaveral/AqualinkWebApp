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
} from './actions';
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
            // Si existe recordId, actualiza (PUT)
            response = await DataService.put(`/models/sm_indirectcost/${recordId}`, {
                AD_Client_ID: Number(adClientId),
                AD_Org_ID: Number(adOrgId),
                ...indirectCostData,
            });
        } else {
            // Si no existe recordId, crea uno nuevo (POST)
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
        message.error(`Error al registrar costo indirecto: ${error.message}`);
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
        message.error(`Error al obtener costos indirectos: ${error.message}`);
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
        message.error(`Error al obtener datos del centro de costos: ${error.message}`);
    }
};
