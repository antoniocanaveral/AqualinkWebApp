import {
    FETCH_POPULATION_COMBINED_LOADING,
    FETCH_POPULATION_COMBINED_SUCCESS,
    FETCH_POPULATION_COMBINED_ERROR,
  } from './actions';
  
  const initialState = {
    loading: false,
    error: null,
    populationCombined: [],
  };
  
  export const populationCombinedReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POPULATION_COMBINED_LOADING:
        return { ...state, loading: true, error: null };
      case FETCH_POPULATION_COMBINED_SUCCESS:
        return { ...state, loading: false, populationCombined: action.payload };
      case FETCH_POPULATION_COMBINED_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  