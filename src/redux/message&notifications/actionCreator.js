import { message } from "antd";
import { DataService } from "../../config/dataService/dataService";
import { fetchSmAlertHistoryError, fetchSmAlertHistoryLoaded, fetchSmAlertHistoryLoading } from "./actions";
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
      // En caso de error, dispatch de error
      dispatch(fetchSmAlertHistoryError(error.message));
      message.error(`Error al obtener alertas: ${error.message}`);
    }
  };