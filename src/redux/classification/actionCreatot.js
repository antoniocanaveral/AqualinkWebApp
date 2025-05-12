// fetchSmClassification.js
import Cookies from 'js-cookie';
import { 
  fetchSmClassificationLoading, 
  fetchSmClassificationSuccess, 
  fetchSmClassificationError 
} from './actions';
import { DataService } from '../../config/dataService/dataService';
import { handleApiError } from '../error/errorHandler';

export const fetchSmClassifications = () => async (dispatch) => {
  dispatch(fetchSmClassificationLoading());
  try {
    const poolID = Cookies.get('poolId'); // Obtener el poolId desde las cookies
    const response = await DataService.get(`/models/sm_classification?$filter=M_Warehouse_ID eq ${poolID}`);

    // Modificar los datos para incluir SM_Batch como C_Campaign_ID.identifier
    const updatedRecords = response.data.records.map(record => ({
      ...record,
      SM_Batch: record.C_Campaign_ID ? record.C_Campaign_ID.identifier : null, // Añadir SM_Batch
    }));

    dispatch(fetchSmClassificationSuccess(updatedRecords));
  } catch (error) {
    dispatch(fetchSmClassificationError(error.message));
    handleApiError(error, dispatch, fetchSmClassificationError);
  }
};
