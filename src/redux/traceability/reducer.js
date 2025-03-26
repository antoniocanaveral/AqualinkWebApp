import {
    FETCH_TRACEABILITY_REPORT_LOADING,
    FETCH_TRACEABILITY_REPORT_SUCCESS,
    FETCH_TRACEABILITY_REPORT_ERROR,
    FETCH_TRACEABILITY_REPORT_BY_ID_LOADING,
    FETCH_TRACEABILITY_REPORT_BY_ID_SUCCESS,
    FETCH_TRACEABILITY_REPORT_BY_ID_ERROR
} from './actions';

const initialState = {
    loading: false,
    error: null,
    traceabilityReports: [],
    report: null,
};

export const traceabilityReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACEABILITY_REPORT_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_TRACEABILITY_REPORT_SUCCESS:
            return { ...state, loading: false, traceabilityReports: action.payload };
        case FETCH_TRACEABILITY_REPORT_ERROR:
            return { ...state, loading: false, error: action.payload };
        case FETCH_TRACEABILITY_REPORT_BY_ID_LOADING:
            return { ...state, loading: true, error: null, report: null };
        case FETCH_TRACEABILITY_REPORT_BY_ID_SUCCESS:
            return { ...state, loading: false, report: action.payload };
        case FETCH_TRACEABILITY_REPORT_BY_ID_ERROR:
            return { ...state, loading: false, error: action.payload, report: null };
        default:
            return state;
    }
};
