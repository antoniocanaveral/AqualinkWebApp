import { message } from 'antd';
import Cookies from 'js-cookie';
import {
  fetchChemicalWaterParamsError,
  fetchChemicalWaterParamsLoading,
  fetchChemicalWaterParamsSuccess,
  fetchPhysicalWaterParamsError,
  fetchPhysicalWaterParamsLoading,
  fetchPhysicalWaterParamsSuccess,
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
import { handleApiError } from '../../error/errorHandler';

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
    
    handleApiError(error, dispatch, fetchWaterflowReportError);    
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
    handleApiError(error, dispatch, fetchWaterflowParamsError);    
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
    handleApiError(error, dispatch, fetchWaterReplacementParamsError);
  }
};

export const fetchChemicalWaterParams = () => async (dispatch) => {
  dispatch(fetchChemicalWaterParamsLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_chemical_water_params_view?$filter=M_Warehouse_ID eq ${poolID}`
    );
    dispatch(fetchChemicalWaterParamsSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchChemicalWaterParamsError(error.message));
    handleApiError(error, dispatch, fetchChemicalWaterParamsError);
  }
};

export const fetchPhysicalWaterParams = () => async (dispatch) => {
  dispatch(fetchPhysicalWaterParamsLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_water_physical_params_view?$filter=M_Warehouse_ID eq ${poolID}`
    );
    dispatch(fetchPhysicalWaterParamsSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchPhysicalWaterParamsError(error.message));
    handleApiError(error, dispatch, fetchPhysicalWaterParamsError);
  }
};