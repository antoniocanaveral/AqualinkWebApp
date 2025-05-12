import Cookies from 'js-cookie';
import { DataService } from '../../../config/dataService/dataService';
import { handleApiError } from '../../error/errorHandler';
import {
  fetchPopulationCombinedLoading,
  fetchPopulationCombinedSuccess,
  fetchPopulationCombinedError,
} from './actions';

export const fetchSmPopulationCombined = () => async (dispatch) => {
  dispatch(fetchPopulationCombinedLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_population_combined_view?$filter=M_Warehouse_ID eq ${poolID}` +
      `&$expand=M_Warehouse_ID(` +
      `$select=SM_PoolSize,Name` +
      `)`
    );

    dispatch(fetchPopulationCombinedSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchPopulationCombinedError(error.message));
    handleApiError(error, dispatch, fetchPopulationCombinedError);
  }
};
