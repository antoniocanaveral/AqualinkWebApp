import actions from './actions';

const {
  FETCH_COORD_INFO_LOADING,
  FETCH_COORD_INFO_SUCCESS,
  FETCH_COORD_INFO_ERROR,
} = actions;

const initState = {
  coordInfoLoading: false,
  coordinationInfo: [],
  coordInfoError: null,
};

const CoordsViewReducer = (state = initState, action) => {
  const { type, data } = action;

  switch (type) {
    case FETCH_COORD_INFO_LOADING:
      return {
        ...state,
        coordInfoLoading: true,
        coordinationInfo: [],
        coordInfoError: null,
      };

    case FETCH_COORD_INFO_SUCCESS:
      return {
        ...state,
        coordInfoLoading: false,
        coordinationInfo: data || [],
        coordInfoError: null,
      };

    case FETCH_COORD_INFO_ERROR:
      return {
        ...state,
        coordInfoLoading: false,
        coordinationInfo: [],
        coordInfoError: data,
      };

    default:
      return state;
  }
};

export default CoordsViewReducer;
