import {
    REGISTER_RESERVE_LOADING,
    REGISTER_RESERVE_SUCCESS,
    REGISTER_RESERVE_ERROR,
    FETCH_RESERVE_LOADING,
    FETCH_RESERVE_SUCCESS,
    FETCH_RESERVE_ERROR,
    UPDATE_ISSELECTED_LOADING,
    UPDATE_ISSELECTED_SUCCESS,
    UPDATE_ISSELECTED_ERROR,
} from "./actions";

const initialState = {
    loading: false,
    reserveData: null,
    error: null,
};

export const reserveReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_RESERVE_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_RESERVE_LOADING:
            return { ...state, loading: true, error: null };
        case UPDATE_ISSELECTED_LOADING:
            return { ...state, loading: true, error: null };

        case REGISTER_RESERVE_SUCCESS:
            return { ...state, loading: false, reserveData: action.payload };
        case FETCH_RESERVE_SUCCESS:
            return { ...state, loading: false, reserveData: action.payload };
        case UPDATE_ISSELECTED_SUCCESS:
            return { ...state, loading: false, reserveData: action.payload };

        case REGISTER_RESERVE_ERROR:
            return { ...state, loading: false, error: action.payload };
        case FETCH_RESERVE_ERROR:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_ISSELECTED_ERROR:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
