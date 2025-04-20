
import { message } from 'antd';
import { DataService } from '../../config/dataService/dataService';
import {
  fetchDirectoriesLoading,
  fetchDirectoriesSuccess,
  fetchDirectoriesError,
} from './actions';
import { handleApiError } from '../error/errorHandler';

export const fetchDirectories = (orgType) => async (dispatch) => {
  dispatch(fetchDirectoriesLoading());

  try {
    const response = await DataService.get(
      `models/sm_directories?$filter=org_type eq '${orgType}'&$select=Name,Address,Phone,contact_name,org_type, sci_code`
    );
    if (response.data && response.data.records) {
      dispatch(fetchDirectoriesSuccess(response.data.records));
    } else {
      dispatch(fetchDirectoriesError('No se encontraron directorios.'));
    }
  } catch (error) {
    dispatch(fetchDirectoriesError(error.message || 'Error al cargar los directorios.'));
    handleApiError(error, dispatch, fetchDirectoriesError);

  }
}
