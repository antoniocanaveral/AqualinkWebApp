import { message } from "antd";
import { DataService } from "../../config/dataService/dataService";
import { fetchSmAlertHistoryError, fetchSmAlertHistoryLoaded, fetchSmAlertHistoryLoading, updateSmAlertReviewError, updateSmAlertReviewLoading, updateSmAlertReviewSuccess } from "./actions";
import Cookies from 'js-cookie';

export const fetchSmAlertHistory = () => async (dispatch) => {
  dispatch(fetchSmAlertHistoryLoading());
  const selectedRole = Cookies.get('selectedRoleId');
  try {
    // Realizamos la petición a la vista de alertas con usuarios
    const response = await DataService.get(`/models/sm_alert_history_with_users_view?$filter=AD_User_ID eq ${selectedRole}`);

    // Dispatch del éxito con los datos obtenidos
    dispatch(fetchSmAlertHistoryLoaded(response.data.records));
  } catch (error) {
    dispatch(fetchSmAlertHistoryError(error.message));
  }
};



export const updateSmAlertReviewedStatus = (recordId, isReviewed = 'Y') => async (dispatch) => {
  dispatch(updateSmAlertReviewLoading());

  try {
    const adClientId = Cookies.get('selectedClientId');
    const adOrgId = Cookies.get('orgId');

    if (!adClientId || !adOrgId) {
      throw new Error('AD_Client_ID o AD_Org_ID no encontrados en las cookies.');
    }

    // Forzamos lookup por PK enviando SM_Process_Alert_History_ID
    const payload = {
      isreviewed: isReviewed,
    };

    const response = await DataService.put(
      `/models/sm_process_alert_history/${recordId}`,
      payload
    );

    dispatch(updateSmAlertReviewSuccess(response.data));
    message.success('Estado de revisión actualizado con éxito.');
  } catch (error) {
    dispatch(updateSmAlertReviewError(error.message));
  }
};
