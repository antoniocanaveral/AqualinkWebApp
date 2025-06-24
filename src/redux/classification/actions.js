// actions.js
export const FETCH_SM_CLASSIFICATION_LOADING = 'FETCH_SM_CLASSIFICATION_LOADING';
export const FETCH_SM_CLASSIFICATION_SUCCESS = 'FETCH_SM_CLASSIFICATION_SUCCESS';
export const FETCH_SM_CLASSIFICATION_ERROR = 'FETCH_SM_CLASSIFICATION_ERROR';

export const fetchSmClassificationLoading = () => ({
  type: FETCH_SM_CLASSIFICATION_LOADING,
});

export const fetchSmClassificationSuccess = (data) => ({
  type: FETCH_SM_CLASSIFICATION_SUCCESS,
  data,
});

export const fetchSmClassificationError = (error) => ({
  type: FETCH_SM_CLASSIFICATION_ERROR,
  data: error,
});
