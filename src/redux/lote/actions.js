export const REGISTER_LOTE_LOADING = 'REGISTER_LOTE_LOADING';
export const REGISTER_LOTE_SUCCESS = 'REGISTER_LOTE_SUCCESS';
export const REGISTER_LOTE_ERROR = 'REGISTER_LOTE_ERROR';

export const registerLoteLoading = () => ({ type: REGISTER_LOTE_LOADING });
export const registerLoteSuccess = (data) => ({ type: REGISTER_LOTE_SUCCESS, payload: data });
export const registerLoteError = (error) => ({ type: REGISTER_LOTE_ERROR, payload: error });


export const FETCH_LOTES_LOADING = 'FETCH_LOTES_LOADING';
export const FETCH_LOTES_SUCCESS = 'FETCH_LOTES_SUCCESS';
export const FETCH_LOTES_ERROR = 'FETCH_LOTES_ERROR';

export const fetchLotesLoading = () => ({ type: FETCH_LOTES_LOADING });
export const fetchLotesSuccess = (data) => ({ type: FETCH_LOTES_SUCCESS, payload: data });
export const fetchLotesError = (error) => ({ type: FETCH_LOTES_ERROR, payload: error });
