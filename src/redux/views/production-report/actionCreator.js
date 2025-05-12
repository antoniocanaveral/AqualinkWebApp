
import { message } from 'antd';
import Cookies from 'js-cookie';
import { fetchProductionReportError, fetchProductionReportLoading, fetchProductionReportSuccess } from './actions';
import { DataService } from '../../../config/dataService/dataService';
import { handleApiError } from '../../error/errorHandler';
import { fetchPhysicalWaterParams } from '../waterflow/actionCreator';

export const fetchProductionReports = () => async (dispatch) => {
    dispatch(fetchProductionReportLoading());
    try {
        const poolID = Cookies.get('poolId');
        const response = await DataService.get(
            `/models/sm_production_report_view?$filter=` +
            `M_Warehouse_ID eq ${poolID}`
        );
        dispatch(fetchProductionReportSuccess(response.data.records));
    } catch (error) {
        dispatch(fetchProductionReportError(error.message));
        handleApiError(error, dispatch, fetchProductionReportError);
    }
};

export const fetchProductionReportsPC = () => async (dispatch) => {
    dispatch(fetchProductionReportLoading());
    try {
        const poolID = Cookies.get('poolId');
        const response = await DataService.get(
            `/models/sm_production_report_view?$filter=` +
            `SM_PreBreedingPool_ID eq ${poolID}`
        );
        dispatch(fetchPhysicalWaterParams())
        dispatch(fetchProductionReportSuccess(response.data.records));
    } catch (error) {
        dispatch(fetchProductionReportError(error.message));
        handleApiError(error, dispatch, fetchProductionReportError);
    }
};