import { FETCH_CAMPAIGN_ERROR, FETCH_CAMPAIGN_LOADING, FETCH_CAMPAIGN_SUCCESS } from "./actions";

const initialState = {
    loading: false,
    campaigns: [],
    error: null,
};

export const batchReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CAMPAIGN_LOADING:
            return { ...state, loading: true, error: null };
        case FETCH_CAMPAIGN_SUCCESS:
            return { ...state, loading: false, campaigns: action.payload };
        case FETCH_CAMPAIGN_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
