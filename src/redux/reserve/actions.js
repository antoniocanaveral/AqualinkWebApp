// Action Types
export const REGISTER_RESERVE_LOADING = 'REGISTER_RESERVE_LOADING';
export const REGISTER_RESERVE_SUCCESS = 'REGISTER_RESERVE_SUCCESS';
export const REGISTER_RESERVE_ERROR = 'REGISTER_RESERVE_ERROR';

// Action Creators
export const registerReserveLoading = () => ({ type: REGISTER_RESERVE_LOADING });
export const registerReserveSuccess = (data) => ({ type: REGISTER_RESERVE_SUCCESS, payload: data });
export const registerReserveError = (error) => ({ type: REGISTER_RESERVE_ERROR, payload: error });

export const FETCH_RESERVE_LOADING = 'FETCH_RESERVE_LOADING';
export const FETCH_RESERVE_SUCCESS = 'FETCH_RESERVE_SUCCESS';
export const FETCH_RESERVE_ERROR = 'FETCH_RESERVE_ERROR';

export const UPDATE_ISSELECTED_LOADING = 'UPDATE_ISSELECTED_LOADING';
export const UPDATE_ISSELECTED_SUCCESS = 'UPDATE_ISSELECTED_SUCCESS';
export const UPDATE_ISSELECTED_ERROR = 'UPDATE_ISSELECTED_ERROR';

export const fetchReserveLoading = () => ({ type: FETCH_RESERVE_LOADING });
export const fetchReserveSuccess = (data) => ({ type: FETCH_RESERVE_SUCCESS, payload: data });
export const fetchReserveError = (error) => ({ type: FETCH_RESERVE_ERROR, payload: error });

export const updateIsSelectedLoading = () => ({ type: UPDATE_ISSELECTED_LOADING });
export const updateIsSelectedSuccess = (data) => ({ type: UPDATE_ISSELECTED_SUCCESS, payload: data });
export const updateIsSelectedError = (error) => ({ type: UPDATE_ISSELECTED_ERROR, payload: error });
