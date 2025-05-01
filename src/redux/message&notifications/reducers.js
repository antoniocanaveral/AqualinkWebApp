// src/redux/reducers/smAlertHistoryReducer.js

import { FETCH_SM_ALERT_HISTORY_ERROR, FETCH_SM_ALERT_HISTORY_LOADED, FETCH_SM_ALERT_HISTORY_LOADING } from "./actions";


  // Estado inicial
  const initialState = {
    loading: false,
    alertHistory: [], 
    error: null,
  };
  
  export const smAlertHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SM_ALERT_HISTORY_LOADING:
        return { ...state, loading: true, error: null };
      case FETCH_SM_ALERT_HISTORY_LOADED:
        return { ...state, loading: false, alertHistory: action.payload };
      case FETCH_SM_ALERT_HISTORY_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  