import Cookies from 'js-cookie';
import { DataService } from '../../../config/dataService/dataService';
import { handleApiError } from '../../error/errorHandler';
import {
  fetchTreatmentWithPathologiesLoading,
  fetchTreatmentWithPathologiesSuccess,
  fetchTreatmentWithPathologiesError,
} from './actions';

export const fetchSmTreatmentWithPathologies = () => async (dispatch) => {
  dispatch(fetchTreatmentWithPathologiesLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_treatment_with_pathologies_view?$filter=m_warehouse_id eq ${poolID}`
    );

    dispatch(fetchTreatmentWithPathologiesSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchTreatmentWithPathologiesError(error.message));
    handleApiError(error, dispatch, fetchTreatmentWithPathologiesError);
  }
};