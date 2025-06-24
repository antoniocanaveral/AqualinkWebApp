import Cookies from 'js-cookie';
import { message } from 'antd';
import { DataService } from '../../config/dataService/dataService';
import { FETCH_LABLOTE_BY_TANK_ERROR, FETCH_LABLOTE_BY_TANK_LOADING, FETCH_LABLOTE_BY_TANK_SUCCESS, fetchLabloteError, fetchLabloteLoading, fetchLabloteSuccess } from './actions';
import { handleApiError } from '../error/errorHandler';

export const registerLablote = (labloteData) => async (dispatch) => {
    dispatch({ type: 'REGISTER_LABLOTE_LOADING' });

    try {
        const adClientId = Number(Cookies.get('selectedClientId'));
        const adOrgId = Number(Cookies.get('orgId'));
        const poolId = Number(Cookies.get("poolId"));

       /* const existingResponse = await DataService.get(
            `/models/sm_lablote?$filter=AD_Client_ID eq ${adClientId} AND AD_Org_ID eq ${adOrgId} AND M_Warehouse_ID eq ${poolId}`);

        const existingLablote = existingResponse.data?.records[0];
        console.log(existingLablote
        )/*
        if (existingLablote) {
            const updatedData = {
                sm_reservedbiomass: labloteData.sm_targetbiomass, 
                SM_FishingDate: labloteData.SM_FishingDate,
                SM_PlantingDate: labloteData.SM_PlantingDate,
                sm_campaigndays: labloteData.sm_campaigndays,
                sm_directories_ID: labloteData.sm_directories_ID,
                sm_estimatedmortality: labloteData.sm_estimatedmortality,
                sm_naupliuscode: labloteData.sm_naupliuscode,
                sm_programmeddensity: labloteData.sm_programmeddensity,
                sm_targetbiomass: labloteData.sm_targetbiomass,
                sm_targetpl: labloteData.sm_targetpl
            };
            

            const updateResponse = await DataService.put(`/models/sm_lablote/${existingLablote.id}`, updatedData);

            dispatch({ type: 'REGISTER_LABLOTE_SUCCESS', payload: updateResponse.data });
            message.success('Lote de laboratorio actualizado con éxito');
        } else {
         
*/
labloteData.sm_reservedbiomass = Number(labloteData.sm_targetbiomass);
        labloteData.sm_targetbiomass = Number(labloteData.sm_targetbiomass);
            const newResponse = await DataService.post(`/models/sm_lablote`, {
                AD_Client_ID: adClientId,
                AD_Org_ID: adOrgId,
                M_Warehouse_ID: poolId,
                sm_reservedbiomass: Number(labloteData.sm_targetbiomass),
                ...labloteData,
            });

            dispatch({ type: 'REGISTER_LABLOTE_SUCCESS', payload: newResponse.data });
            message.success('Lote de laboratorio registrado con éxito');
       // }
    } catch (error) {
        dispatch({ type: 'REGISTER_LABLOTE_ERROR', payload: error.message });
        message.error(`Error al registrar o actualizar el lote: ${error.message}`);
    }
};


export const fetchLablotes = () => async (dispatch) => {
    dispatch({ type: 'FETCH_LABLOTE_LOADING' });

    try {
        const adOrgId = Cookies.get('orgId');
        const response = await DataService.get(`/models/sm_lablote?$filter=AD_Org_ID eq ${adOrgId}`);

        dispatch({ type: 'FETCH_LABLOTE_SUCCESS', payload: response.data.records });
    } catch (error) {
        dispatch({ type: 'FETCH_LABLOTE_ERROR', payload: error.message });
        message.error(`Error al obtener los lotes: ${error.message}`);
    }
};



export const fetchLabLoteByTank = () => async (dispatch) => {
    dispatch({ type: FETCH_LABLOTE_BY_TANK_LOADING });

    try {
        const adOrgId = Cookies.get('orgId');
        const poolId = Cookies.get('poolId');

        if (!poolId) {
            dispatch({ type: FETCH_LABLOTE_BY_TANK_SUCCESS, payload: null });
            return;
        }

        const response = await DataService.get(
            `/models/sm_lablote?$filter=AD_Org_ID eq ${adOrgId} and M_Warehouse_ID eq ${poolId}`
        );


        const labLote = response.data.records.length > 0 ? response.data.records[0] : null;

        dispatch({ type: FETCH_LABLOTE_BY_TANK_SUCCESS, payload: labLote });
    } catch (error) {
        dispatch({ type: FETCH_LABLOTE_BY_TANK_ERROR, payload: error.message });
        message.error(`Error al obtener el lote: ${error.message}`);
    }
};

export const fetchLablotesInfo = () => async (dispatch) => {
    dispatch(fetchLabloteLoading());
    const adOrgId = Cookies.get('orgId');
  
    try {
      const response = await DataService.get(`models/sm_lablote_info_v?$filter=AD_Org_ID eq ${adOrgId}`);
      
      if (response.data && response.data.records) {
        dispatch(fetchLabloteSuccess(response.data.records));
      } else {
        dispatch(fetchLabloteError('No se encontraron lotes de laboratorio.'));
      }
    } catch (error) {
      dispatch(fetchLabloteError(error.message || 'Error al cargar los lotes.'));
      handleApiError(error, dispatch, fetchLabloteError);
    }
  };

  
export const fetchLablotesInfoIND = () => async (dispatch) => {
    dispatch(fetchLabloteLoading());
  
    try {
      const response = await DataService.get(`models/sm_lablote_info_v?$filter=SM_OrgType eq 'IND'`);
      
      if (response.data && response.data.records) {
        dispatch(fetchLabloteSuccess(response.data.records));
      } else {
        dispatch(fetchLabloteError('No se encontraron lotes de laboratorio.'));
      }
    } catch (error) {
      dispatch(fetchLabloteError(error.message || 'Error al cargar los lotes.'));
      handleApiError(error, dispatch, fetchLabloteError);
    }
  };