import {
    FETCH_POOL_PREPARATION_LOADING,
    FETCH_POOL_PREPARATION_SUCCESS,
    FETCH_POOL_PREPARATION_ERROR,
    FETCH_TREATMENT_LOADING,
    FETCH_TREATMENT_SUCCESS,
    FETCH_TREATMENT_ERROR,
} from './actions';

const initialState = {
    loading: false,
    error: null,
    poolPreparation: [],
    treatment: [],
};

export const poolPreparationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POOL_PREPARATION_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_POOL_PREPARATION_SUCCESS:
            return { ...state, loading: false, poolPreparation: action.payload };
        case FETCH_POOL_PREPARATION_ERROR:
            return { ...state, loading: false, error: action.payload };
        case FETCH_TREATMENT_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_TREATMENT_SUCCESS:
            return { ...state, loading: false, treatment: action.payload };
        case FETCH_TREATMENT_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};