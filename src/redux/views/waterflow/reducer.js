import {
    FETCH_WATERFLOW_REPORT_ERROR,
    FETCH_WATERFLOW_REPORT_LOADING,
    FETCH_WATERFLOW_REPORT_SUCCESS,
  } from './actions';
  
  const initialState = {
    loading: false,
    error: null,
    waterflowReports: [],
  };
  
  export const waterflowReportReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WATERFLOW_REPORT_LOADING:
        return { ...state, loading: true, error: null };
      case FETCH_WATERFLOW_REPORT_SUCCESS:
        return { ...state, loading: false, waterflowReports: action.payload };
      case FETCH_WATERFLOW_REPORT_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  