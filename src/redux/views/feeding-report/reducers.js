const initialState = {
    loading: false,
    error: null,
    feedingreports: [],
};

export const feedingreportReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_FEEDINGREPORT_LOADING':
            return { ...state, loading: true, error: null };
        case 'REGISTER_FEEDINGREPORT_SUCCESS':
            return { ...state, loading: false, feedingreportData: action.payload };
        case 'REGISTER_FEEDINGREPORT_ERROR':
            return { ...state, loading: false, error: action.payload };
        case 'FETCH_FEEDINGREPORT_LOADING':
            return { ...state, loading: true, error: null };
        case 'FETCH_FEEDINGREPORT_SUCCESS':
            return { ...state, loading: false, feedingreports: action.payload };
        case 'FETCH_FEEDINGREPORT_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
