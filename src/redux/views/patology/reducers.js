import {
    FETCH_TREATMENT_WITH_PATHOLOGIES_LOADING,
    FETCH_TREATMENT_WITH_PATHOLOGIES_SUCCESS,
    FETCH_TREATMENT_WITH_PATHOLOGIES_ERROR,
  } from './actions';
  
  const initialState = {
    loading: false,
    error: null,
    treatmentWithPathologies: [],
  };
  
  export const treatmentWithPathologiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TREATMENT_WITH_PATHOLOGIES_LOADING:
        return { ...state, loading: true, error: null };
      case FETCH_TREATMENT_WITH_PATHOLOGIES_SUCCESS:
        return { ...state, loading: false, treatmentWithPathologies: action.payload };
      case FETCH_TREATMENT_WITH_PATHOLOGIES_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };