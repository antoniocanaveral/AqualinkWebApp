export const FETCH_TRACEABILITY_REPORT_LOADING = 'FETCH_TRACEABILITY_REPORT_LOADING';
export const FETCH_TRACEABILITY_REPORT_SUCCESS = 'FETCH_TRACEABILITY_REPORT_SUCCESS';
export const FETCH_TRACEABILITY_REPORT_ERROR = 'FETCH_TRACEABILITY_REPORT_ERROR';

export const fetchTraceabilityReportLoading = () => ({
    type: FETCH_TRACEABILITY_REPORT_LOADING,
});

export const fetchTraceabilityReportSuccess = (data) => ({
    type: FETCH_TRACEABILITY_REPORT_SUCCESS,
    payload: data,
});

export const fetchTraceabilityReportError = (error) => ({
    type: FETCH_TRACEABILITY_REPORT_ERROR,
    payload: error,
});


export const FETCH_TRACEABILITY_REPORT_BY_ID_LOADING = 'FETCH_TRACEABILITY_REPORT_BY_ID_LOADING';
export const FETCH_TRACEABILITY_REPORT_BY_ID_SUCCESS = 'FETCH_TRACEABILITY_REPORT_BY_ID_SUCCESS';
export const FETCH_TRACEABILITY_REPORT_BY_ID_ERROR = 'FETCH_TRACEABILITY_REPORT_BY_ID_ERROR';

export const fetchTraceabilityReportByIdLoading = () => ({
  type: FETCH_TRACEABILITY_REPORT_BY_ID_LOADING,
});

export const fetchTraceabilityReportByIdSuccess = (report) => ({
  type: FETCH_TRACEABILITY_REPORT_BY_ID_SUCCESS,
  payload: report,
});

export const fetchTraceabilityReportByIdError = (error) => ({
  type: FETCH_TRACEABILITY_REPORT_BY_ID_ERROR,
  payload: error,
});
