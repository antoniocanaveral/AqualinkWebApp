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

export const fetchTraceabilityReportsCustody = () => async (dispatch) => {
  dispatch(fetchTraceabilityReportLoading());
  try {
      const adOrgId = Cookies.get('orgId');
      const response = await DataService.get(`/models/sm_traceability_report_v?$filter=sm_plant_ad_org_id eq ${adOrgId}`);
      dispatch(fetchTraceabilityReportSuccess(response.data.records));
  } catch (error) {
      dispatch(fetchTraceabilityReportError(error.message));
      message.error(`Error al obtener reportes de trazabilidad: ${error.message}`);
  }
};

export const fetchTraceabilityReportById = (id) => async (dispatch) => {
    dispatch(fetchTraceabilityReportByIdLoading());
    try {
      const response = await DataService.get(`/models/sm_traceability_report_v?$filterv=sm_reportetrazabilidad_id eq ${id}`);

      dispatch(fetchTraceabilityReportByIdSuccess(response.data.records[0]));
    } catch (error) {
      dispatch(fetchTraceabilityReportByIdError(error.message));
      message.error(`Error al obtener el reporte de trazabilidad: ${error.message}`);
    }
  };
