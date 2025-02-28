import { message } from "antd";
import { DataService } from "../../config/dataService/dataService";
import Cookies from 'js-cookie';

import {
    fetchParametersLoading,
    fetchParametersSuccess,
    fetchParametersError,
    registerLabanalysisSuccess,
    registerLabanalysisError,
    registerLabanalysisLoading,
    fetchLabanalysisLoading,
    fetchLabanalysisSuccess,
    fetchLabanalysisError
  
  } from './actions';
export const fetchParameters = () => async (dispatch) => {
    dispatch(fetchParametersLoading());
    try {
        const response = await DataService.get(`/models/sm_parameters`);
        if (response.data && response.data.records) {
            dispatch(fetchParametersSuccess(response.data.records));
        } else {
            throw new Error("No se encontraron parámetros.");
        }
    } catch (error) {
        dispatch(fetchParametersError(error.message));
        message.error(`Error al obtener parámetros: ${error.message}`);
    }
};



export const registerLabanalysis = (labanalysisData) => async (dispatch) => {
    dispatch(registerLabanalysisLoading());

    try {
        const adClientId = Cookies.get('selectedClientId');
        const adOrgId = Cookies.get('orgId');

        if (!adClientId || !adOrgId) {
            throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
        }

        // **Iterar cada parámetro y verificar si existe**
        const requests = labanalysisData.map(async (data) => {
            const existingRecord = await DataService.get(
                `/models/sm_labanalysis?$filter=SM_Coordination_ID eq ${data.SM_Coordination_ID} and sm_parameter_id eq ${data.sm_parameter_id}`
            );

            if (existingRecord.data && existingRecord.data.records.length > 0) {
                // **Si el registro ya existe, hacer un PUT**
                const existingId = existingRecord.data.records[0].id;
                return DataService.put(`/models/sm_labanalysis/${existingId}`, {
                    AD_Client_ID: Number(adClientId),
                    AD_Org_ID: Number(adOrgId),
                    ...data,
                });
            } else {
                // **Si no existe, hacer un POST**
                return DataService.post(`/models/sm_labanalysis`, {
                    AD_Client_ID: Number(adClientId),
                    AD_Org_ID: Number(adOrgId),
                    ...data,
                });
            }
        });

        // **Ejecutar todas las peticiones simultáneamente**
        await Promise.all(requests);

        dispatch(registerLabanalysisSuccess(labanalysisData));
        message.success('Análisis de laboratorio registrado/actualizado con éxito');

    } catch (error) {
        dispatch(registerLabanalysisError(error.message));
        message.error(`Error al registrar el análisis: ${error.message}`);
    }
};


export const fetchLabanalysis = () => async (dispatch) => {
    const adOrgId = Cookies.get('orgId');
    
    dispatch(fetchLabanalysisLoading());
    try {
        const response = await DataService.get(`/models/sm_labanalysis_view?$filter=AD_Org_ID eq ${adOrgId}`);
        if (response.data && response.data.records) {
            dispatch(fetchLabanalysisSuccess(response.data.records));
        } else {
            throw new Error('No se encontraron registros.');
        }
    } catch (error) {
        dispatch(fetchLabanalysisError(error.message));
    }
};