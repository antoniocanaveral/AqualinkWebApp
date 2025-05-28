import {
  FETCH_PLANNING_LOADING,
  FETCH_PLANNING_SUCCESS,
  FETCH_PLANNING_ERROR,
  CREATE_PLANNING_LOADING,
  CREATE_PLANNING_SUCCESS,
  CREATE_PLANNING_ERROR,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  plannings: [],
  createdPlanning: null,
};

export const smPlanningReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANNING_LOADING:
    case CREATE_PLANNING_LOADING:
      return { ...state, loading: true, error: null };

    case FETCH_PLANNING_SUCCESS:
      return { ...state, loading: false, plannings: action.payload };

    case CREATE_PLANNING_SUCCESS:
      return { ...state, loading: false, createdPlanning: action.payload };

    case FETCH_PLANNING_ERROR:
    case CREATE_PLANNING_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
