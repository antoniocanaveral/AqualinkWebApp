export const FETCH_FEEDINGREPORT_LOADING = 'FETCH_FEEDINGREPORT_LOADING';
export const FETCH_FEEDINGREPORT_SUCCESS = 'FETCH_FEEDINGREPORT_SUCCESS';
export const FETCH_FEEDINGREPORT_ERROR = 'FETCH_FEEDINGREPORT_ERROR';


export const fetchFeedingreportLoading = () => ({
    type: 'FETCH_FEEDINGREPORT_LOADING',
});
export const fetchFeedingreportSuccess = (data) => ({
    type: 'FETCH_FEEDINGREPORT_SUCCESS',
    payload: data,
});
export const fetchFeedingreportError = (error) => ({
    type: 'FETCH_FEEDINGREPORT_ERROR',
    payload: error,
});
