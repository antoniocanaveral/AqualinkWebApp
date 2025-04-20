export const FETCH_PARAMETERS_LOADING = 'FETCH_PARAMETERS_LOADING';
export const FETCH_PARAMETERS_SUCCESS = 'FETCH_PARAMETERS_SUCCESS';
export const FETCH_PARAMETERS_ERROR = 'FETCH_PARAMETERS_ERROR';

export const fetchParametersLoading = () => ({
  type: FETCH_PARAMETERS_LOADING
});
export const fetchParametersSuccess = (data) => ({
  type: FETCH_PARAMETERS_SUCCESS, payload: data
});
export const fetchParametersError = (error) => ({
  type: FETCH_PARAMETERS_ERROR, payload: error
});



export const REGISTER_LABANALYSIS_LOADING = 'REGISTER_LABANALYSIS_LOADING';
export const REGISTER_LABANALYSIS_SUCCESS = 'REGISTER_LABANALYSIS_SUCCESS';
export const REGISTER_LABANALYSIS_ERROR = 'REGISTER_LABANALYSIS_ERROR';


export const registerLabanalysisLoading = () => ({ type: REGISTER_LABANALYSIS_LOADING });
export const registerLabanalysisSuccess = (data) => ({ type: REGISTER_LABANALYSIS_SUCCESS, payload: data });
export const registerLabanalysisError = (error) => ({ type: REGISTER_LABANALYSIS_ERROR, payload: error });


export const FETCH_LABANALYSIS_LOADING = 'FETCH_LABANALYSIS_LOADING';
export const FETCH_LABANALYSIS_SUCCESS = 'FETCH_LABANALYSIS_SUCCESS';
export const FETCH_LABANALYSIS_ERROR = 'FETCH_LABANALYSIS_ERROR';


export const fetchLabanalysisLoading = () => ({ type: FETCH_LABANALYSIS_LOADING });
export const fetchLabanalysisSuccess = (data) => ({ type: FETCH_LABANALYSIS_SUCCESS, payload: data });
export const fetchLabanalysisError = (error) => ({ type: FETCH_LABANALYSIS_ERROR, payload: error });
