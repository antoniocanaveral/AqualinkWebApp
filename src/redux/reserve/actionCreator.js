import { message } from "antd";
import { DataService } from "../../config/dataService/dataService";
import Cookies from 'js-cookie';
import {
    registerReserveLoading,
    registerReserveSuccess,
    registerReserveError,
    fetchReserveLoading,
    fetchReserveSuccess,
    fetchReserveError,
    updateIsSelectedLoading,
    updateIsSelectedSuccess,
    updateIsSelectedError,
} from './actions';

// Action para registrar o actualizar una reserva
export const registerReserve = (reserveData, recordId = null) => async (dispatch) => {
    dispatch(registerReserveLoading());

    try {
        const adClientId = Cookies.get('selectedClientId');
        const adOrgId = Cookies.get('orgId');

        if (!adClientId || !adOrgId) {
            throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
        }

        let response;
        if (recordId) {
            // Actualizar registro existente
            response = await DataService.put(`/models/sm_reserve/${recordId}`, {
                AD_Client_ID: Number(adClientId),
                AD_Org_ID: Number(adOrgId),
                ...reserveData,
            });
        } else {
            // Crear nuevo registro
            response = await DataService.post(`/models/sm_reserve`, {
                AD_Client_ID: Number(adClientId),
                AD_Org_ID: Number(adOrgId),
                ...reserveData,
            });
        }

        dispatch(registerReserveSuccess(response.data));
        message.success('Reserva registrada/actualizada con éxito');

    } catch (error) {
        dispatch(registerReserveError(error.message));
    }
};

// Traer una reserva por ID y UUID
export const fetchReserveByIdAndToken = (id, uuid) => async (dispatch) => {
    dispatch(fetchReserveLoading());

    try {
        const response = await DataService.get(`/models/sm_reserve?$filter=sm_reserve_id eq ${id} AND sm_reserve_uu eq '${uuid}'`);

        if (response.data.length === 0) {
            throw new Error('No se encontró la reserva.');
        }

        dispatch(fetchReserveSuccess(response.data.records[0]));
    } catch (error) {
        dispatch(fetchReserveError(error.message));
    }
};

// Solo actualizar el campo isselected a 'Y'
export const updateIsSelected = (id, value = 'Y') => async (dispatch) => {
  dispatch(updateIsSelectedLoading());

  try {
    const response = await DataService.put(`/models/sm_reserve/${id}`, {
      IsSelected: value
    });

    dispatch(updateIsSelectedSuccess(response.data));
    message.success(value === 'Y' ? 'Reserva marcada como seleccionada.' : 'Invitación cancelada.');
  } catch (error) {
    dispatch(updateIsSelectedError(error.message));
  }
};
