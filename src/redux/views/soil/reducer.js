import {
    FETCH_CHEMICAL_SOIL_PARAMS_LOADING,
    FETCH_CHEMICAL_SOIL_PARAMS_SUCCESS,
    FETCH_CHEMICAL_SOIL_PARAMS_ERROR,
  } from './actions';
  
  const initialState = {
    loading: false,
    error: null,
    chemicalSoilParams: [],
  };
  
  export const chemicalSoilReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CHEMICAL_SOIL_PARAMS_LOADING:
        return { ...state, loading: true, error: null };
      case FETCH_CHEMICAL_SOIL_PARAMS_SUCCESS:
        return { ...state, loading: false, chemicalSoilParams: action.payload };
      case FETCH_CHEMICAL_SOIL_PARAMS_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  