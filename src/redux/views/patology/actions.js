// Action Types
export const FETCH_TREATMENT_WITH_PATHOLOGIES_LOADING = 'FETCH_TREATMENT_WITH_PATHOLOGIES_LOADING';
export const FETCH_TREATMENT_WITH_PATHOLOGIES_SUCCESS = 'FETCH_TREATMENT_WITH_PATHOLOGIES_SUCCESS';
export const FETCH_TREATMENT_WITH_PATHOLOGIES_ERROR = 'FETCH_TREATMENT_WITH_PATHOLOGIES_ERROR';

// Action Creators
export const fetchTreatmentWithPathologiesLoading = () => ({
  type: FETCH_TREATMENT_WITH_PATHOLOGIES_LOADING,
});

export const fetchTreatmentWithPathologiesSuccess = (data) => ({
  type: FETCH_TREATMENT_WITH_PATHOLOGIES_SUCCESS,
  payload: data,
});

export const fetchTreatmentWithPathologiesError = (error) => ({
  type: FETCH_TREATMENT_WITH_PATHOLOGIES_ERROR,
  payload: error,
});