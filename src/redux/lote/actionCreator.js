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
import { handleApiError } from "../error/errorHandler";

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
        handleApiError(error, dispatch, registerLoteError);

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
        const lotes = response.data.records;
  
        // Obtener todas las coordinaciones únicas con ID válido
        const coordinationIds = [...new Set(
          lotes
            .map((l) => l.SM_Coordination_ID?.id)
            .filter((id) => !!id)
        )];
  
        // Fetch paralelo de coordinaciones
        const coordinationResponses = await Promise.all(
          coordinationIds.map((id) =>
            DataService.get(`/models/sm_coordination/${id}`).then(res => ({
              id,
              orgName: res.data?.AD_Org_ID?.identifier || 'Desconocido'
            })).catch(() => ({
              id,
              orgName: 'Desconocido'
            }))
          )
        );
  
        // Mapeo ID de coordinación → nombre de organización
        const coordinationOrgMap = coordinationResponses.reduce((acc, { id, orgName }) => {
          acc[id] = orgName;
          return acc;
        }, {});
  
        // Agregar `orgNameFromCoordination` al lote
        const enrichedLotes = lotes.map((lote) => ({
          ...lote,
          orgNameFromCoordination: coordinationOrgMap[lote.SM_Coordination_ID?.id] || null
        }));
  
        dispatch(fetchLotesSuccess(enrichedLotes));
      } else {
        throw new Error('No se encontraron lotes.');
      }
    } catch (error) {
      dispatch(fetchLotesError(error.message));
      handleApiError(error, dispatch, fetchLotesError);
    }
  };
  