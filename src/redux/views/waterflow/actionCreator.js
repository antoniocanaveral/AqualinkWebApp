import { message } from 'antd';
import Cookies from 'js-cookie';
import {
  fetchWaterflowReportError,
  fetchWaterflowReportLoading,
  fetchWaterflowReportSuccess,
} from './actions';
import { DataService } from '../../../config/dataService/dataService';

export const fetchWaterflowReports = () => async (dispatch) => {
  dispatch(fetchWaterflowReportLoading());
  try {
    const poolID = Cookies.get('poolId');
    const response = await DataService.get(
      `/models/sm_waterflow_report_view?$filter=sm_waterflow_report_view_id eq ${poolID}`
    );
    dispatch(fetchWaterflowReportSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchWaterflowReportError(error.message));
    message.error(`Error al obtener waterflow reports: ${error.message}`);
  }
};
