import { FETCH_LABANALYSIS_ERROR, FETCH_LABANALYSIS_LOADING, FETCH_LABANALYSIS_SUCCESS, FETCH_PARAMETERS_ERROR, FETCH_PARAMETERS_LOADING, FETCH_PARAMETERS_SUCCESS, REGISTER_LABANALYSIS_ERROR, REGISTER_LABANALYSIS_LOADING, REGISTER_LABANALYSIS_SUCCESS } from "./actions";

const initialState = {
    loading: false,
    parameters: [],
    error: null,

    loading: false,
    labanalysis: [],
    error: null,

    loading: false,
    labanalysisList: [],
    error: null,
};

export const labanalysisReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PARAMETERS_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_PARAMETERS_SUCCESS:
            return { ...state, loading: false, parameters: action.payload };
        case FETCH_PARAMETERS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case REGISTER_LABANALYSIS_LOADING:
            return { ...state, loading: true, error: null };
        case REGISTER_LABANALYSIS_SUCCESS:
            return { ...state, loading: false, labanalysis: [...state.labanalysis, ...action.payload] };
        case REGISTER_LABANALYSIS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case FETCH_LABANALYSIS_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_LABANALYSIS_SUCCESS:
            return { ...state, loading: false, labanalysisList: action.payload };
        case FETCH_LABANALYSIS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
