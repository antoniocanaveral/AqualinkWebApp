// actions.js
export const FETCH_STATUS_LOADING = 'FETCH_STATUS_LOADING';
export const FETCH_STATUS_SUCCESS = 'FETCH_STATUS_SUCCESS';
export const FETCH_STATUS_ERROR = 'FETCH_STATUS_ERROR';

export const fetchStatusLoading = () => ({
  type: FETCH_STATUS_LOADING,
});

export const fetchStatusSuccess = (statuses) => ({
  type: FETCH_STATUS_SUCCESS,
  payload: statuses,
});

export const fetchStatusError = (error) => ({
  type: FETCH_STATUS_ERROR,
  payload: error,
});


// actions.js
export const FETCH_CATEGORIES_LOADING = 'FETCH_CATEGORIES_LOADING';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';

export const fetchCategoriesLoading = () => ({
  type: FETCH_CATEGORIES_LOADING,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesError = (error) => ({
  type: FETCH_CATEGORIES_ERROR,
  payload: error,
});


// actions.js

export const FETCH_REQUESTS_LOADING = 'FETCH_REQUESTS_LOADING';
export const FETCH_REQUESTS_SUCCESS = 'FETCH_REQUESTS_SUCCESS';
export const FETCH_REQUESTS_ERROR = 'FETCH_REQUESTS_ERROR';

export const fetchRequestsLoading = () => ({
  type: FETCH_REQUESTS_LOADING,
});

export const fetchRequestsSuccess = (requests) => ({
  type: FETCH_REQUESTS_SUCCESS,
  payload: requests,
});

export const fetchRequestsError = (error) => ({
  type: FETCH_REQUESTS_ERROR,
  payload: error,
});
