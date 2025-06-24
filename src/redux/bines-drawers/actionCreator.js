import { message } from 'antd';
import { DataService } from '../../config/dataService/dataService';
import Cookies from 'js-cookie';
import {
  fetchOrgBinsLoading,
  fetchOrgBinsSuccess,
  fetchOrgBinsError,
  fetchOrgSecurityKitsLoading,
  fetchOrgSecurityKitsSuccess,
  fetchOrgSecurityKitsError,
  fetchOrgFishingDrawerStampLoading,
  fetchOrgFishingDrawerStampSuccess,
  fetchOrgFishingDrawerStampError,
  fetchFishingDrawerInfoSuccess,
  fetchFishingDrawerInfoError,
  fetchFishingDrawerInfoLoading,
  fetchTreatersLoading,
  fetchTreatersSuccess,
  fetchTreatersError,
} from './actions';
import { handleApiError } from '../error/errorHandler';

export const fetchOrgBins = () => async (dispatch) => {
  dispatch(fetchOrgBinsLoading());

  try {
    const selectedOrgId = Cookies.get('orgId');
    if (!selectedOrgId) {
      throw new Error('Org ID no encontrado en las cookies.');
    }

    const response = await DataService.get(
      `/models/sm_fishingbin?$filter=AD_Org_ID eq ${selectedOrgId}`
    );

    if (response.data && response.data.records) {

      const sortedRecords = response.data.records.sort((a, b) => {
        return Number(a.Name) - Number(b.Name);
      });

      dispatch(fetchOrgBinsSuccess(sortedRecords));
    } else {
      dispatch(fetchOrgBinsError('No se encontraron bines para esta organización.'));
    }
  } catch (error) {
    dispatch(fetchOrgBinsError(error.message || 'Error al cargar los bines.'));
    message.error(`Error al cargar los bines: ${error.message}`);
  }
};





export const fetchOrgSecurityKits = (type) => async (dispatch) => {
  dispatch(fetchOrgSecurityKitsLoading());

  try {
    const selectedOrgId = Cookies.get('orgId');
    if (!selectedOrgId) {
      throw new Error('Org ID no encontrado en las cookies.');
    }

    const response = await DataService.get(
      `/models/SM_SecurityKits?$filter=AD_Org_ID eq ${selectedOrgId} AND sm_kittype eq '${type}' &$orderby=sm_kitcode`
    );

    if (response.data && response.data.records) {
      dispatch(fetchOrgSecurityKitsSuccess(response.data.records));
    } else {
      dispatch(fetchOrgSecurityKitsError('No se encontraron Security Kits para esta organización.'));
    }
  } catch (error) {
    handleApiError(error, dispatch, fetchOrgSecurityKitsError);      
  }
};

export const fetchOrgFishingDrawerStamp = () => async (dispatch) => {
  dispatch(fetchOrgFishingDrawerStampLoading());

  try {
    const selectedOrgId = Cookies.get('orgId');
    if (!selectedOrgId) {
      throw new Error('Org ID no encontrado en las cookies.');
    }

    const response = await DataService.get(
      `/models/sm_fishingdrawerstamp?$filter=AD_Org_ID eq ${selectedOrgId}`
    );

    if (response.data && response.data.records) {
      dispatch(fetchOrgFishingDrawerStampSuccess(response.data.records));
    } else {
      dispatch(fetchOrgFishingDrawerStampError('No se encontraron Fishing Drawer Stamps para esta organización.'));
    }
  } catch (error) {
    handleApiError(error, dispatch, fetchOrgSecurityKitsError);      

  }
};

export const fetchFishingDrawerInfo = (id) => async (dispatch) => {
  dispatch(fetchFishingDrawerInfoLoading());

  try {
    const bCoordClientResponse = await DataService.get(`/models/sm_coordinations_view?$filter=ci_id eq ${id}`);
    const fishingId = bCoordClientResponse.data.records[0].SM_Fishing_ID.id;
    const response = await DataService.get(
      `/models/sm_fishingdrawer_info_v?$filter=SM_Fishing_ID eq ${fishingId}`
    );

    if (response.data && response.data.records) {
      console.log(response.data.records)
      dispatch(fetchFishingDrawerInfoSuccess(response.data.records));
    } else {
      dispatch(fetchFishingDrawerInfoError('No se encontró información de Fishing Drawer.'));
    }
  } catch (error) {
    handleApiError(error, dispatch, fetchOrgSecurityKitsError);      

  }
};


export const fetchTreaters = () => async (dispatch) => {
  dispatch(fetchTreatersLoading());

  try {
    const selectedClientID = Cookies.get('selectedClientId');
    if (!selectedClientID) {
      throw new Error('Org ID no encontrado en las cookies.');
    }

    const response = await DataService.get(
      `/models/sm_treaters_info_v?$filter=AD_Client_ID eq ${selectedClientID}`
    );

    if (response.data && response.data.records) {
      const formattedData = response.data.records.map(treater => ({
        label: treater.user_name,
        value: treater.AD_User_ID.id
      }));

      dispatch(fetchTreatersSuccess(formattedData));
    } else {
      dispatch(fetchTreatersError('No se encontraron tratadores en esta organización.'));
    }
  } catch (error) {
    handleApiError(error, dispatch, fetchOrgSecurityKitsError);      

  }
};