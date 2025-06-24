// Action Types
export const FETCH_CHEMICAL_SOIL_PARAMS_LOADING = 'FETCH_CHEMICAL_SOIL_PARAMS_LOADING';
export const FETCH_CHEMICAL_SOIL_PARAMS_SUCCESS = 'FETCH_CHEMICAL_SOIL_PARAMS_SUCCESS';
export const FETCH_CHEMICAL_SOIL_PARAMS_ERROR = 'FETCH_CHEMICAL_SOIL_PARAMS_ERROR';

// Action Creators
export const fetchChemicalSoilParamsLoading = () => ({
  type: FETCH_CHEMICAL_SOIL_PARAMS_LOADING,
});

export const fetchChemicalSoilParamsSuccess = (data) => ({
  type: FETCH_CHEMICAL_SOIL_PARAMS_SUCCESS,
  payload: data,
});

export const fetchChemicalSoilParamsError = (error) => ({
  type: FETCH_CHEMICAL_SOIL_PARAMS_ERROR,
  payload: error,
});
