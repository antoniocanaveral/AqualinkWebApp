export const FETCH_TEXTURE_LOADING = 'FETCH_TEXTURE_LOADING';
export const FETCH_TEXTURE_SUCCESS = 'FETCH_TEXTURE_SUCCESS';
export const FETCH_TEXTURE_ERROR = 'FETCH_TEXTURE_ERROR';

export const fetchTextureLoading = () => ({ type: 'FETCH_TEXTURE_LOADING' });
export const fetchTextureSuccess = (data) => ({ type: 'FETCH_TEXTURE_SUCCESS', payload: data });
export const fetchTextureError = (error) => ({ type: 'FETCH_TEXTURE_ERROR', payload: error });

