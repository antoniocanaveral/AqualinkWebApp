// Action Types
export const FETCH_FISHING_COORDINATIONS_LOADING = 'FETCH_FISHING_COORDINATIONS_LOADING';
export const FETCH_FISHING_COORDINATIONS_SUCCESS = 'FETCH_FISHING_COORDINATIONS_SUCCESS';
export const FETCH_FISHING_COORDINATIONS_ERROR = 'FETCH_FISHING_COORDINATIONS_ERROR';

// Action Creators
export const fetchFishingCoordinationsLoading = () => ({
  type: FETCH_FISHING_COORDINATIONS_LOADING,
});

export const fetchFishingCoordinationsSuccess = (data) => ({
  type: FETCH_FISHING_COORDINATIONS_SUCCESS,
  payload: data,
});

export const fetchFishingCoordinationsError = (error) => ({
  type: FETCH_FISHING_COORDINATIONS_ERROR,
  payload: error,
});
