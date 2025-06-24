import Cookies from 'js-cookie';
import {
  registerSalesIncomeLoading,
  registerSalesIncomeSuccess,
  registerSalesIncomeError,
} from './actions';
import { message } from 'antd';
import { DataService } from '../../config/dataService/dataService';
import { handleApiError } from '../error/errorHandler';

export const registerSalesIncome = (salesIncomeData) => async (dispatch) => {
  dispatch(registerSalesIncomeLoading());

  try {
    const adClientId = Cookies.get('selectedClientId');
    const adOrgId = Cookies.get('orgId');

    if (!adClientId || !adOrgId) {
      throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
    }

    const response = await DataService.post(`/models/sm_salesincome`, {
      AD_Client_ID: Number(adClientId),
      AD_Org_ID: Number(adOrgId),
      ...salesIncomeData,
    });

    dispatch(registerSalesIncomeSuccess(response.data));
    message.success('Ingreso por ventas registrado con éxito');
  } catch (error) {
    dispatch(registerSalesIncomeError(error.message));
    handleApiError(error, dispatch, registerSalesIncomeError);
  }
};