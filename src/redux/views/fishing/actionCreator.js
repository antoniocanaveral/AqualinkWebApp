import Cookies from 'js-cookie';
import { DataService } from '../../../config/dataService/dataService';
import { handleApiError } from '../../error/errorHandler';
import {
  fetchFishingCoordinationsLoading,
  fetchFishingCoordinationsSuccess,
  fetchFishingCoordinationsError,
} from './actions';

export const fetchFishingCoordinations = () => async (dispatch) => {
  dispatch(fetchFishingCoordinationsLoading());

  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_fishing_coordinations_view?$filter=M_Warehouse_ID eq ${poolID} AND is_selected eq true`
    );

    dispatch(fetchFishingCoordinationsSuccess(response.data.records));
  } catch (error) {
    handleApiError(error, dispatch, fetchFishingCoordinationsError);
  }
};
