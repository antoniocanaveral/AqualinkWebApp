// smBin actions
export const REGISTER_BIN_LOADING = 'REGISTER_BIN_LOADING';
export const REGISTER_BIN_SUCCESS = 'REGISTER_BIN_SUCCESS';
export const REGISTER_BIN_ERROR = 'REGISTER_BIN_ERROR';

export const registerBinLoading = () => ({ type: REGISTER_BIN_LOADING });
export const registerBinSuccess = (data) => ({ type: REGISTER_BIN_SUCCESS, payload: data });
export const registerBinError = (error) => ({ type: REGISTER_BIN_ERROR, payload: error });

export const FETCH_BINS_LOADING = 'FETCH_BINS_LOADING';
export const FETCH_BINS_SUCCESS = 'FETCH_BINS_SUCCESS';
export const FETCH_BINS_ERROR = 'FETCH_BINS_ERROR';

export const fetchBinsLoading = () => ({ type: FETCH_BINS_LOADING });
export const fetchBinsSuccess = (data) => ({ type: FETCH_BINS_SUCCESS, payload: data });
export const fetchBinsError = (error) => ({ type: FETCH_BINS_ERROR, payload: error });

export const UPDATE_BIN_LOADING = 'UPDATE_BIN_LOADING';
export const UPDATE_BIN_SUCCESS = 'UPDATE_BIN_SUCCESS';
export const UPDATE_BIN_ERROR = 'UPDATE_BIN_ERROR';

export const updateBinLoading = () => ({ type: UPDATE_BIN_LOADING });
export const updateBinSuccess = (data) => ({ type: UPDATE_BIN_SUCCESS, payload: data });
export const updateBinError = (error) => ({ type: UPDATE_BIN_ERROR, payload: error });