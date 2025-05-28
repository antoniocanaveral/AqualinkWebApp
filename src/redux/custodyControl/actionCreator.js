import Cookies from 'js-cookie';
import { message } from 'antd';

import { DataService } from '../../config/dataService/dataService';
import { fetchCustodyControlError, fetchCustodyControlLoading, fetchCustodyControlSuccess } from './actions';

export const fetchCustodyControls = () => async (dispatch) => {
  dispatch(fetchCustodyControlLoading());
  try {
    const adOrgId = Cookies.get('orgId');
    const response = await DataService.get(`/models/sm_custodycontrol?$filter=AD_Org_ID eq ${adOrgId}`);
    dispatch(fetchCustodyControlSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchCustodyControlError(error.message));
    message.error(`Error al obtener controles de custodia: ${error.message}`);
  }
};
