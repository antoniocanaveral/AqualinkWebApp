import { FETCH_CUSTODY_CONTROL_ERROR, FETCH_CUSTODY_CONTROL_LOADING, FETCH_CUSTODY_CONTROL_SUCCESS } from "./actions";

const initialState = {
  loading: false,
  error: null,
  custodyControls: [],
};

export const custodyControlReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTODY_CONTROL_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_CUSTODY_CONTROL_SUCCESS:
      return { ...state, loading: false, custodyControls: action.payload };
    case FETCH_CUSTODY_CONTROL_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
