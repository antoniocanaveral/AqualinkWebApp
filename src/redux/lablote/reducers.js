import { FETCH_LABLOTE_BY_TANK_ERROR, FETCH_LABLOTE_BY_TANK_LOADING, FETCH_LABLOTE_BY_TANK_SUCCESS } from "./actions";

const initialState = {
    loading: false,
    labloteData: null,
    error: null,
    lablotes: [],
    labLoteByTank: null,
};

export const labloteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_LABLOTE_LOADING':
            return { ...state, loading: true, error: null };
        case 'REGISTER_LABLOTE_SUCCESS':
            return { ...state, loading: false, labloteData: action.payload };
        case 'REGISTER_LABLOTE_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'FETCH_LABLOTE_LOADING':
            return { ...state, loading: true, error: null };
        case 'FETCH_LABLOTE_SUCCESS':
            return { ...state, loading: false, lablotes: action.payload };
        case 'FETCH_LABLOTE_ERROR':
            return { ...state, loading: false, error: action.payload };
        case FETCH_LABLOTE_BY_TANK_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_LABLOTE_BY_TANK_SUCCESS:
            return { ...state, loading: false, labLoteByTank: action.payload };
        case FETCH_LABLOTE_BY_TANK_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
