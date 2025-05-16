import { message } from 'antd';
import Cookies from 'js-cookie';
import { DataService } from '../../../config/dataService/dataService';
import { handleApiError } from '../../error/errorHandler';
import {
  fetchTransferCombinedViewLoading,
  fetchTransferCombinedViewSuccess,
  fetchTransferCombinedViewError,
} from './actions';

// Thunk para obtener datos de sm_transfer_combined_view filtrados por sm_pef_id
export const fetchTransferCombinedView = () => async (dispatch) => {
  dispatch(fetchTransferCombinedViewLoading());
  try {
    const poolID = Cookies.get('poolId');
    if (!poolID) {
      throw new Error('No se encontró poolId en las cookies');
    }
    const response = await DataService.get(
      `/models/sm_transfer_combined_view?$filter=sm_pef_id eq ${poolID}`
    );
    dispatch(fetchTransferCombinedViewSuccess(response.data.records));
  } catch (error) {
    const errorMessage = error.message || 'Error al obtener los datos de sm_transfer_combined_view';
    dispatch(fetchTransferCombinedViewError(errorMessage));
    handleApiError(error, dispatch, fetchTransferCombinedViewError);
    message.error(errorMessage);
  }
};