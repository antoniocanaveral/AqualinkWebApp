import { FETCH_CARRIERS_ERROR, FETCH_CARRIERS_LOADING, FETCH_CARRIERS_SUCCESS, REGISTER_CARRIER_ERROR, REGISTER_CARRIER_LOADING, REGISTER_CARRIER_SUCCESS } from "./actions";

const initialState = {
  loading: false,
  carrier: null,
  error: null,

  carriers: [],
  loading: false,
  error: null,
};

export const carrierReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_CARRIER_LOADING:
      return { ...state, loading: true, error: null };
    case REGISTER_CARRIER_SUCCESS:
      return { ...state, loading: false, carrier: action.payload };
    case REGISTER_CARRIER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_CARRIERS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CARRIERS_SUCCESS:
      return {
        ...state,
        loading: false,
        carriers: action.payload,
      };
    case FETCH_CARRIERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
