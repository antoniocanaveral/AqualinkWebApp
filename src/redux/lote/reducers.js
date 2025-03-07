import {
    REGISTER_LOTE_LOADING,
    REGISTER_LOTE_SUCCESS,
    REGISTER_LOTE_ERROR,
    FETCH_LOTES_LOADING,
    FETCH_LOTES_SUCCESS,
    FETCH_LOTES_ERROR
} from "./actions";

const initialState = {
    loading: false,
    loteData: null,
    error: null,

    lotes: [],
};

export const loteReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_LOTE_LOADING:
            return { ...state, loading: true, error: null };
        case REGISTER_LOTE_SUCCESS:
            return { ...state, loading: false, loteData: action.payload };
        case REGISTER_LOTE_ERROR:
            return { ...state, loading: false, error: action.payload };

        case FETCH_LOTES_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_LOTES_SUCCESS:
            return { ...state, loading: false, lotes: action.payload };
        case FETCH_LOTES_ERROR:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
