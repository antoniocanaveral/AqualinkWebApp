export const FETCH_DIRECTORIES_LOADING = 'FETCH_DIRECTORIES_LOADING';
export const FETCH_DIRECTORIES_SUCCESS = 'FETCH_DIRECTORIES_SUCCESS';
export const FETCH_DIRECTORIES_ERROR = 'FETCH_DIRECTORIES_ERROR';

export const fetchDirectoriesLoading = () => ({
    type: FETCH_DIRECTORIES_LOADING,
  });
  
  export const fetchDirectoriesSuccess = (directories) => ({
    type: FETCH_DIRECTORIES_SUCCESS,
    payload: directories,
  });
  
  export const fetchDirectoriesError = (error) => ({
    type: FETCH_DIRECTORIES_ERROR,
    payload: error,
  });