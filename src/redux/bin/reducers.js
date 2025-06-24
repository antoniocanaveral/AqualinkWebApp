import {
  REGISTER_BIN_LOADING,
  REGISTER_BIN_SUCCESS,
  REGISTER_BIN_ERROR,
  FETCH_BINS_LOADING,
  FETCH_BINS_SUCCESS,
  FETCH_BINS_ERROR
} from "./actions";

const initialState = {
  loading: false,
  binData: null,
  bins: [],
  error: null,
};

export const smBinReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_BIN_LOADING:
      return { ...state, loading: true, error: null };
    case REGISTER_BIN_SUCCESS:
      return { ...state, loading: false, binData: action.payload };
    case REGISTER_BIN_ERROR:
      return { ...state, loading: false, error: action.payload };

    case FETCH_BINS_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_BINS_SUCCESS:
      return { ...state, loading: false, bins: action.payload };
    case FETCH_BINS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
