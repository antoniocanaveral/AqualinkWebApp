// src/redux/actions/smAlertHistoryActions.js

export const FETCH_SM_ALERT_HISTORY_LOADING = 'FETCH_SM_ALERT_HISTORY_LOADING';
export const FETCH_SM_ALERT_HISTORY_LOADED = 'FETCH_SM_ALERT_HISTORY_LOADED';
export const FETCH_SM_ALERT_HISTORY_ERROR = 'FETCH_SM_ALERT_HISTORY_ERROR';


// Acción para la carga
export const fetchSmAlertHistoryLoading = () => ({
  type: FETCH_SM_ALERT_HISTORY_LOADING,
});

// Acción cuando los datos se cargan con éxito
export const fetchSmAlertHistoryLoaded = (alertHistory) => ({
  type: FETCH_SM_ALERT_HISTORY_LOADED,
  payload: alertHistory,
});

// Acción cuando hay un error en la carga
export const fetchSmAlertHistoryError = (error) => ({
  type: FETCH_SM_ALERT_HISTORY_ERROR,
  payload: { error },
});


export const UPDATE_SM_ALERT_REVIEW_LOADING = 'UPDATE_SM_ALERT_REVIEW_LOADING';
export const UPDATE_SM_ALERT_REVIEW_SUCCESS = 'UPDATE_SM_ALERT_REVIEW_SUCCESS';
export const UPDATE_SM_ALERT_REVIEW_ERROR = 'UPDATE_SM_ALERT_REVIEW_ERROR';

export const updateSmAlertReviewLoading = () => ({
  type: UPDATE_SM_ALERT_REVIEW_LOADING,
});

export const updateSmAlertReviewSuccess = (updatedAlert) => ({
  type: UPDATE_SM_ALERT_REVIEW_SUCCESS,
  payload: updatedAlert,
});

export const updateSmAlertReviewError = (error) => ({
  type: UPDATE_SM_ALERT_REVIEW_ERROR,
  payload: { error },
});
