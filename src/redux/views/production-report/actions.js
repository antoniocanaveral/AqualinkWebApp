export const FETCH_PRODUCTION_REPORT_LOADING = 'FETCH_PRODUCTION_REPORT_LOADING';
export const FETCH_PRODUCTION_REPORT_SUCCESS = 'FETCH_PRODUCTION_REPORT_SUCCESS';
export const FETCH_PRODUCTION_REPORT_ERROR = 'FETCH_PRODUCTION_REPORT_ERROR';


export const fetchProductionReportLoading = () => ({ type: FETCH_PRODUCTION_REPORT_LOADING });
export const fetchProductionReportSuccess = (data) => ({ type: FETCH_PRODUCTION_REPORT_SUCCESS, payload: data });
export const fetchProductionReportError = (error) => ({ type: FETCH_PRODUCTION_REPORT_ERROR, payload: error });
