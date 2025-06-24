import {
  FETCH_FISHING_COORDINATIONS_LOADING,
  FETCH_FISHING_COORDINATIONS_SUCCESS,
  FETCH_FISHING_COORDINATIONS_ERROR,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  fishingCoordinations: [],
};

export const fishingCoordinationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FISHING_COORDINATIONS_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_FISHING_COORDINATIONS_SUCCESS:
      return { ...state, loading: false, fishingCoordinations: action.payload };
    case FETCH_FISHING_COORDINATIONS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
