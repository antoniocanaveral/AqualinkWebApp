import Cookies from 'js-cookie';
import { DataService } from '../../../config/dataService/dataService';
import { handleApiError } from '../../error/errorHandler';
import {
  fetchChemicalSoilParamsLoading,
  fetchChemicalSoilParamsSuccess,
  fetchChemicalSoilParamsError,
} from './actions';

export const fetchChemicalSoilParams = () => async (dispatch) => {
  dispatch(fetchChemicalSoilParamsLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_chemical_soil_params_view?$filter=M_Warehouse_ID eq ${poolID}`
    );
    dispatch(fetchChemicalSoilParamsSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchChemicalSoilParamsError(error.message));
    handleApiError(error, dispatch, fetchChemicalSoilParamsError);
  }
};
