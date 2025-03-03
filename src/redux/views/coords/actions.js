const actions = {
    FETCH_COORD_INFO_LOADING: 'FETCH_COORD_INFO_LOADING',
    FETCH_COORD_INFO_SUCCESS: 'FETCH_COORD_INFO_SUCCESS',
    FETCH_COORD_INFO_ERROR: 'FETCH_COORD_INFO_ERROR',
  
    fetchCoordInfoLoading: () => ({
      type: actions.FETCH_COORD_INFO_LOADING,
    }),
  
    fetchCoordInfoSuccess: (data) => ({
      type: actions.FETCH_COORD_INFO_SUCCESS,
      data,
    }),
  
    fetchCoordInfoError: (error) => ({
      type: actions.FETCH_COORD_INFO_ERROR,
      data: error,
    }),
  };
  
  export default actions;
  