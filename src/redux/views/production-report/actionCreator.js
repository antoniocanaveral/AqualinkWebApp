// 4. ActionCreators
import { message } from 'antd';
import Cookies from 'js-cookie';
import { fetchProductionReportError, fetchProductionReportLoading, fetchProductionReportSuccess } from './actions';
import { DataService } from '../../../config/dataService/dataService';

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
        message.error(`Error al obtener production reports: ${error.message}`);
    }
};