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