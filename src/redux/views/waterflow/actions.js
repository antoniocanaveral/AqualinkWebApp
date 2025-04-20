
export const FETCH_WATERFLOW_REPORT_LOADING = 'FETCH_WATERFLOW_REPORT_LOADING';
export const FETCH_WATERFLOW_REPORT_SUCCESS = 'FETCH_WATERFLOW_REPORT_SUCCESS';
export const FETCH_WATERFLOW_REPORT_ERROR = 'FETCH_WATERFLOW_REPORT_ERROR';


export const fetchWaterflowReportLoading = () => ({
  type: FETCH_WATERFLOW_REPORT_LOADING,
});

export const fetchWaterflowReportSuccess = (data) => ({
  type: FETCH_WATERFLOW_REPORT_SUCCESS,
  payload: data,
});

export const fetchWaterflowReportError = (error) => ({
  type: FETCH_WATERFLOW_REPORT_ERROR,
  payload: error,
});
