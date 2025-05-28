export const FETCH_CUSTODY_CONTROL_LOADING = 'FETCH_CUSTODY_CONTROL_LOADING';
export const FETCH_CUSTODY_CONTROL_SUCCESS = 'FETCH_CUSTODY_CONTROL_SUCCESS';
export const FETCH_CUSTODY_CONTROL_ERROR = 'FETCH_CUSTODY_CONTROL_ERROR';

export const fetchCustodyControlLoading = () => ({
  type: FETCH_CUSTODY_CONTROL_LOADING,
});

export const fetchCustodyControlSuccess = (data) => ({
  type: FETCH_CUSTODY_CONTROL_SUCCESS,
  payload: data,
});

export const fetchCustodyControlError = (error) => ({
  type: FETCH_CUSTODY_CONTROL_ERROR,
  payload: error,
});
