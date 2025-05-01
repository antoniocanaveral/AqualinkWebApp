import { message } from 'antd';
import Cookies from 'js-cookie';
import {
  fetchWaterflowParamsError,
  fetchWaterflowParamsLoading,
  fetchWaterflowParamsSuccess,
  fetchWaterflowReportError,
  fetchWaterflowReportLoading,
  fetchWaterflowReportSuccess,
  fetchWaterReplacementParamsError,
  fetchWaterReplacementParamsLoading,
  fetchWaterReplacementParamsSuccess,
} from './actions';
import { DataService } from '../../../config/dataService/dataService';

export const fetchWaterflowReports = () => async (dispatch) => {
  dispatch(fetchWaterflowReportLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_waterflow_report_view?$filter=sm_waterflow_report_view_id eq ${poolID}`
    );
    dispatch(fetchWaterflowReportSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchWaterflowReportError(error.message));
    message.error(`Error al obtener waterflow reports: ${error.message}`);
  }
};


export const fetchWaterflowParams = () => async (dispatch) => {
  dispatch(fetchWaterflowParamsLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(`/models/sm_waterflow_params_view?$filter=M_Warehouse_ID eq ${poolID}`);
    dispatch(fetchWaterflowParamsSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchWaterflowParamsError(error.message));
    message.error(`Error al obtener waterflow params: ${error.message}`);
  }
};


export const fetchWaterReplacementParams = () => async (dispatch) => {
  dispatch(fetchWaterReplacementParamsLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(`/models/sm_bottom_replacement_params_view?$filter=M_Warehouse_ID eq ${poolID}`);
    dispatch(fetchWaterReplacementParamsSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchWaterReplacementParamsError(error.message));
    message.error(`Error al obtener waterflow params: ${error.message}`);
  }
};