// Action Types
export const FETCH_POPULATION_COMBINED_LOADING = 'FETCH_POPULATION_COMBINED_LOADING';
export const FETCH_POPULATION_COMBINED_SUCCESS = 'FETCH_POPULATION_COMBINED_SUCCESS';
export const FETCH_POPULATION_COMBINED_ERROR = 'FETCH_POPULATION_COMBINED_ERROR';

// Action Creators
export const fetchPopulationCombinedLoading = () => ({
  type: FETCH_POPULATION_COMBINED_LOADING,
});

export const fetchPopulationCombinedSuccess = (data) => ({
  type: FETCH_POPULATION_COMBINED_SUCCESS,
  payload: data,
});

export const fetchPopulationCombinedError = (error) => ({
  type: FETCH_POPULATION_COMBINED_ERROR,
  payload: error,
});
