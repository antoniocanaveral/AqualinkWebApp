import {
  FETCH_SM_ALERT_HISTORY_ERROR,
  FETCH_SM_ALERT_HISTORY_LOADED,
  FETCH_SM_ALERT_HISTORY_LOADING,
  UPDATE_SM_ALERT_REVIEW_LOADING,
  UPDATE_SM_ALERT_REVIEW_SUCCESS,
  UPDATE_SM_ALERT_REVIEW_ERROR,
} from "./actions";

const initialState = {
  loading: false,
  alertHistory: [],
  error: null,
};

export const smAlertHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SM_ALERT_HISTORY_LOADING:
    case UPDATE_SM_ALERT_REVIEW_LOADING:
      return { ...state, loading: true, error: null };

    case FETCH_SM_ALERT_HISTORY_LOADED:
      return { ...state, loading: false, alertHistory: action.payload };

    case UPDATE_SM_ALERT_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        alertHistory: state.alertHistory.map((alert) =>
          alert.sm_process_alert_history_id === action.payload.sm_process_alert_history_id
            ? { ...alert, isreviewed: action.payload.isreviewed }
            : alert
        ),
      };

    case FETCH_SM_ALERT_HISTORY_ERROR:
    case UPDATE_SM_ALERT_REVIEW_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
