export const FETCH_POOL_PREPARATION_LOADING = 'FETCH_POOL_PREPARATION_LOADING';
export const FETCH_POOL_PREPARATION_SUCCESS = 'FETCH_POOL_PREPARATION_SUCCESS';
export const FETCH_POOL_PREPARATION_ERROR = 'FETCH_POOL_PREPARATION_ERROR';

export const fetchPoolPreparationLoading = () => ({
    type: FETCH_POOL_PREPARATION_LOADING,
});

export const fetchPoolPreparationSuccess = (data) => ({
    type: FETCH_POOL_PREPARATION_SUCCESS,
    payload: data,
});

export const fetchPoolPreparationError = (error) => ({
    type: FETCH_POOL_PREPARATION_ERROR,
    payload: error,
});

export const FETCH_TREATMENT_LOADING = 'FETCH_TREATMENT_LOADING';
export const FETCH_TREATMENT_SUCCESS = 'FETCH_TREATMENT_SUCCESS';
export const FETCH_TREATMENT_ERROR = 'FETCH_TREATMENT_ERROR';

export const fetchTreatmentLoading = () => ({
  type: FETCH_TREATMENT_LOADING,
});

export const fetchTreatmentSuccess = (data) => ({
  type: FETCH_TREATMENT_SUCCESS,
  payload: data,
});

export const fetchTreatmentError = (error) => ({
  type: FETCH_TREATMENT_ERROR,
  payload: error,
});