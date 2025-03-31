import { FETCH_PRODUCTION_REPORT_ERROR, FETCH_PRODUCTION_REPORT_LOADING, FETCH_PRODUCTION_REPORT_SUCCESS } from "./actions";

const initialState = {
    loading: false,
    error: null,
    productionReports: [],
};

export const productionReportReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PRODUCTION_REPORT_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCTION_REPORT_SUCCESS:
            return { ...state, loading: false, productionReports: action.payload };
        case FETCH_PRODUCTION_REPORT_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
