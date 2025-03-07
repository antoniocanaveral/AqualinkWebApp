import { message } from "antd";
import { DataService } from "../../config/dataService/dataService";
import Cookies from 'js-cookie';

import {
    registerLoteLoading,
    registerLoteSuccess,
    registerLoteError,
    fetchLotesLoading,
    fetchLotesSuccess,
    fetchLotesError
} from './actions';

export const registerLote = (loteData) => async (dispatch) => {
    dispatch(registerLoteLoading());

    try {
        const adClientId = Cookies.get('selectedClientId');
        const adOrgId = Cookies.get('orgId');

        if (!adClientId || !adOrgId) {
            throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
        }

        const existingRecord = await DataService.get(
            `/models/sm_lote?$filter=sm_coordination_id eq ${loteData.SM_Coordination_ID}`
        );

        let response;
        if (existingRecord.data && existingRecord.data.records.length > 0) {
            const existingId = existingRecord.data.records[0].id            ;
            response = await DataService.put(`/models/sm_lote/${existingId}`, {
                AD_Client_ID: Number(adClientId),
                AD_Org_ID: Number(adOrgId),
                ...loteData,
            });
        } else {
            response = await DataService.post(`/models/sm_lote`, {
                AD_Client_ID: Number(adClientId),
                AD_Org_ID: Number(adOrgId),
                ...loteData,
            });
        }

        dispatch(registerLoteSuccess(response.data));
        message.success('Lote de empacadora registrado/actualizado con éxito');

    } catch (error) {
        dispatch(registerLoteError(error.message));
        message.error(`Error al registrar el lote: ${error.message}`);
    }
};


export const fetchLotes = () => async (dispatch) => {
    dispatch(fetchLotesLoading());

    try {
        const adOrgId = Cookies.get('orgId');
        if (!adOrgId) {
            throw new Error('Organización no encontrada en las cookies.');
        }

        const response = await DataService.get(`/models/sm_lote?$filter=AD_Org_ID eq ${adOrgId}`);
        
        if (response.data && response.data.records) {
            dispatch(fetchLotesSuccess(response.data.records));
        } else {
            throw new Error('No se encontraron lotes.');
        }
    } catch (error) {
        dispatch(fetchLotesError(error.message));
        message.error(`Error al obtener lotes: ${error.message}`);
    }
};