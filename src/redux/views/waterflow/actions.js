
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

// Acciones para sm_waterflow_params
export const FETCH_WATERFLOW_PARAMS_LOADING = 'FETCH_WATERFLOW_PARAMS_LOADING';
export const FETCH_WATERFLOW_PARAMS_SUCCESS = 'FETCH_WATERFLOW_PARAMS_SUCCESS';
export const FETCH_WATERFLOW_PARAMS_ERROR = 'FETCH_WATERFLOW_PARAMS_ERROR';

export const fetchWaterflowParamsLoading = () => ({
  type: FETCH_WATERFLOW_PARAMS_LOADING,
});

export const fetchWaterflowParamsSuccess = (data) => ({
  type: FETCH_WATERFLOW_PARAMS_SUCCESS,
  payload: data,
});

export const fetchWaterflowParamsError = (error) => ({
  type: FETCH_WATERFLOW_PARAMS_ERROR,
  payload: error,
});


// Acciones para sm_waterflow_params
export const FETCH_WATERREPLACEMENT_PARAMS_LOADING = 'FETCH_WATERREPLACEMENT_PARAMS_LOADING';
export const FETCH_WATERREPLACEMENT_PARAMS_SUCCESS = 'FETCH_WATERREPLACEMENT_PARAMS_SUCCESS';
export const FETCH_WATERREPLACEMENT_PARAMS_ERROR = 'FETCH_WATERREPLACEMENT_PARAMS_ERROR';

export const fetchWaterReplacementParamsLoading = () => ({
  type: FETCH_WATERREPLACEMENT_PARAMS_LOADING,
});

export const fetchWaterReplacementParamsSuccess = (data) => ({
  type: FETCH_WATERREPLACEMENT_PARAMS_SUCCESS,
  payload: data,
});

export const fetchWaterReplacementParamsError = (error) => ({
  type: FETCH_WATERREPLACEMENT_PARAMS_ERROR,
  payload: error,
});
