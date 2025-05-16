import {
  FETCH_TRANSFER_COMBINED_VIEW_LOADING,
  FETCH_TRANSFER_COMBINED_VIEW_SUCCESS,
  FETCH_TRANSFER_COMBINED_VIEW_ERROR,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  transferCombinedView: [],
};

export const transferCombinedViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSFER_COMBINED_VIEW_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_TRANSFER_COMBINED_VIEW_SUCCESS:
      return { ...state, loading: false, transferCombinedView: action.payload };
    case FETCH_TRANSFER_COMBINED_VIEW_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};