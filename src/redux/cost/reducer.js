import {
    REGISTER_INDIRECTCOST_LOADING,
    REGISTER_INDIRECTCOST_SUCCESS,
    REGISTER_INDIRECTCOST_ERROR,
    FETCH_INDIRECTCOST_LOADING,
    FETCH_INDIRECTCOST_SUCCESS,
    FETCH_INDIRECTCOST_ERROR,
    FETCH_COSTCENTER_LOADING,
    FETCH_COSTCENTER_SUCCESS,
    FETCH_COSTCENTER_ERROR,
    FETCH_REPORTSTATEMENT_LOADING,
    FETCH_REPORTSTATEMENT_SUCCESS,
    FETCH_REPORTSTATEMENT_ERROR,
    FETCH_REPORTSTATEMENTFULL_LOADING,
    FETCH_REPORTSTATEMENTFULL_SUCCESS,
    FETCH_REPORTSTATEMENTFULL_ERROR
} from "./actions";

const initialState = {
    loading: false,
    indirectCostData: null,
    error: null,

    indirectCosts: [],
    costCenterData: [],

    reportStatementData: [],
    reportStatementFullData: [],
};

export const costReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_INDIRECTCOST_LOADING:
            return { ...state, loading: true, error: null };
        case REGISTER_INDIRECTCOST_SUCCESS:
            return { ...state, loading: false, indirectCostData: action.payload };
        case REGISTER_INDIRECTCOST_ERROR:
            return { ...state, loading: false, error: action.payload };

        case FETCH_INDIRECTCOST_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_INDIRECTCOST_SUCCESS:
            return { ...state, loading: false, indirectCosts: action.payload };
        case FETCH_INDIRECTCOST_ERROR:
            return { ...state, loading: false, error: action.payload };

        case FETCH_COSTCENTER_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_COSTCENTER_SUCCESS:
            return { ...state, loading: false, costCenterData: action.payload };
        case FETCH_COSTCENTER_ERROR:
            return { ...state, loading: false, error: action.payload };

        case FETCH_REPORTSTATEMENT_LOADING:
            return { ...state, loading: true, error: null };

        case FETCH_REPORTSTATEMENT_SUCCESS:
            return { ...state, loading: false, reportStatementData: action.payload };

        case FETCH_REPORTSTATEMENT_ERROR:
            return { ...state, loading: false, error: action.payload };

        case FETCH_REPORTSTATEMENTFULL_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_REPORTSTATEMENTFULL_SUCCESS:
            return { ...state, loading: false, reportStatementFullData: action.payload };
        case FETCH_REPORTSTATEMENTFULL_ERROR:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};