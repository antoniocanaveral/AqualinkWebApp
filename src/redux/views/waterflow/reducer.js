import {
  FETCH_CHEMICAL_WATER_PARAMS_ERROR,
  FETCH_CHEMICAL_WATER_PARAMS_LOADING,
  FETCH_CHEMICAL_WATER_PARAMS_SUCCESS,
  FETCH_PHYSICAL_WATER_PARAMS_ERROR,
  FETCH_PHYSICAL_WATER_PARAMS_LOADING,
  FETCH_PHYSICAL_WATER_PARAMS_SUCCESS,
  FETCH_WATERFLOW_PARAMS_ERROR,
  FETCH_WATERFLOW_PARAMS_LOADING,
  FETCH_WATERFLOW_PARAMS_SUCCESS,
  FETCH_WATERFLOW_REPORT_ERROR,
  FETCH_WATERFLOW_REPORT_LOADING,
  FETCH_WATERFLOW_REPORT_SUCCESS,
  FETCH_WATERREPLACEMENT_PARAMS_ERROR,
  FETCH_WATERREPLACEMENT_PARAMS_LOADING,
  FETCH_WATERREPLACEMENT_PARAMS_SUCCESS,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  waterflowReports: [],
  waterflowParams: [],
  waterflowReplacement: [],
  chemicalWaterParams: [],
  physicalWaterParams: [],
};

export const waterflowReportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WATERFLOW_REPORT_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_WATERFLOW_REPORT_SUCCESS:
      return { ...state, loading: false, waterflowReports: action.payload };
    case FETCH_WATERFLOW_REPORT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_WATERFLOW_PARAMS_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_WATERFLOW_PARAMS_SUCCESS:
      return { ...state, loading: false, waterflowParams: action.payload };
    case FETCH_WATERFLOW_PARAMS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_WATERREPLACEMENT_PARAMS_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_WATERREPLACEMENT_PARAMS_SUCCESS:
      return { ...state, loading: false, waterflowReplacement: action.payload };
    case FETCH_WATERREPLACEMENT_PARAMS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_CHEMICAL_WATER_PARAMS_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_CHEMICAL_WATER_PARAMS_SUCCESS:
      return { ...state, loading: false, chemicalWaterParams: action.payload };
    case FETCH_CHEMICAL_WATER_PARAMS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PHYSICAL_WATER_PARAMS_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_PHYSICAL_WATER_PARAMS_SUCCESS:
      return { ...state, loading: false, physicalWaterParams: action.payload };
    case FETCH_PHYSICAL_WATER_PARAMS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
