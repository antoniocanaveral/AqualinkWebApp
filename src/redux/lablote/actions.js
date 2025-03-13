export const REGISTER_LABLOTE_LOADING = 'REGISTER_LABLOTE_LOADING';
export const REGISTER_LABLOTE_SUCCESS = 'REGISTER_LABLOTE_SUCCESS';
export const REGISTER_LABLOTE_ERROR = 'REGISTER_LABLOTE_ERROR';

export const FETCH_LABLOTE_LOADING = 'FETCH_LABLOTE_LOADING';
export const FETCH_LABLOTE_SUCCESS = 'FETCH_LABLOTE_SUCCESS';
export const FETCH_LABLOTE_ERROR = 'FETCH_LABLOTE_ERROR';

export const FETCH_LABLOTE_BY_TANK_LOADING = 'FETCH_LABLOTE_BY_TANK_LOADING';
export const FETCH_LABLOTE_BY_TANK_SUCCESS = 'FETCH_LABLOTE_BY_TANK_SUCCESS';
export const FETCH_LABLOTE_BY_TANK_ERROR = 'FETCH_LABLOTE_BY_TANK_ERROR';


export const fetchLabloteLoading = () => ({
  type: FETCH_LABLOTE_LOADING,
});

export const fetchLabloteSuccess = (lablotes) => ({
  type: FETCH_LABLOTE_SUCCESS,
  payload: lablotes,
});

export const fetchLabloteError = (error) => ({
  type: FETCH_LABLOTE_ERROR,
  payload: error,
});
