import Cookies from 'js-cookie';
import { message } from 'antd';
import { fetchTraceabilityReportByIdError, fetchTraceabilityReportByIdLoading, fetchTraceabilityReportByIdSuccess, fetchTraceabilityReportError, fetchTraceabilityReportLoading, fetchTraceabilityReportSuccess } from './actions';
import { DataService } from '../../config/dataService/dataService';



export const fetchTraceabilityReports = () => async (dispatch) => {
    dispatch(fetchTraceabilityReportLoading());
    try {
        const adOrgId = Cookies.get('orgId');
        const response = await DataService.get(`/models/sm_traceability_report_v?$filter=AD_Org_ID eq ${adOrgId}`);
        dispatch(fetchTraceabilityReportSuccess(response.data.records));
    } catch (error) {
        dispatch(fetchTraceabilityReportError(error.message));
        message.error(`Error al obtener reportes de trazabilidad: ${error.message}`);
    }
};

export const fetchTraceabilityReportById = (id) => async (dispatch) => {
    dispatch(fetchTraceabilityReportByIdLoading());
    try {
      const response = await DataService.get(`/models/sm_traceability_report_v?$filter=id eq ${id}`);
      // Asumimos que el API devuelve un arreglo y tomamos el primer elemento
      dispatch(fetchTraceabilityReportByIdSuccess(response.data.records[0]));
    } catch (error) {
      dispatch(fetchTraceabilityReportByIdError(error.message));
      message.error(`Error al obtener el reporte de trazabilidad: ${error.message}`);
    }
  };
