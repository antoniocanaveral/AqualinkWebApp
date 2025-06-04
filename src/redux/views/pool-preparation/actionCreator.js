import Cookies from 'js-cookie';
import { DataService } from '../../../config/dataService/dataService';
import { handleApiError } from '../../error/errorHandler';
import {
  fetchPoolPreparationLoading,
  fetchPoolPreparationSuccess,
  fetchPoolPreparationError,
  fetchTreatmentLoading,
  fetchTreatmentSuccess,
  fetchTreatmentError,
} from './actions';

export const fetchSmPoolPreparation = () => async (dispatch) => {
  dispatch(fetchPoolPreparationLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_pool_preparation_view?$filter=m_warehouse_id eq ${poolID}`
    );

    dispatch(fetchPoolPreparationSuccess(response.data.records));
  } catch (error) {
    handleApiError(error, dispatch, fetchPoolPreparationError);
  }
};


export const fetchSmTreatment = () => async (dispatch) => {
  dispatch(fetchTreatmentLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_treatment?$filter=m_warehouse_id eq ${poolID} AND SM_Treatment_Type eq 'PLAN_BIOREMEDIACION'`
    );

    dispatch(fetchTreatmentSuccess(response.data.records));
  } catch (error) {
    handleApiError(error, dispatch, fetchTreatmentError);
  }
};