
import { message } from 'antd';
import Cookies from 'js-cookie';
import { FETCH_CAMPAIGN_ERROR, FETCH_CAMPAIGN_LOADING, FETCH_CAMPAIGN_SUCCESS } from './actions';
import { DataService } from '../../../config/dataService/dataService';
import { handleApiError } from '../../error/errorHandler';

export const fetchOperationReport = () => async (dispatch) => {
    dispatch({ type: FETCH_CAMPAIGN_LOADING});
    try {
        const adOrgId = Cookies.get('orgId');
        const response = await DataService.get(`/models/sm_operationreport_view?$filter=AD_Org_ID eq ${adOrgId}`);
        dispatch({ type: FETCH_CAMPAIGN_SUCCESS, payload: response.data.records });
    } catch (error) {
        dispatch({ type: FETCH_CAMPAIGN_ERROR, payload: error.message });
        handleApiError(error, dispatch, error);
    }
};

export const fetchOperationReportIND = () => async (dispatch) => {
    dispatch({ type: FETCH_CAMPAIGN_LOADING});
    try {
        const response = await DataService.get(`/models/sm_operationreport_view?$filter=SM_OrgType eq 'IND'`);
        dispatch({ type: FETCH_CAMPAIGN_SUCCESS, payload: response.data.records });
    } catch (error) {
        dispatch({ type: FETCH_CAMPAIGN_ERROR, payload: error.message });
        handleApiError(error, dispatch, error);
    }
};
