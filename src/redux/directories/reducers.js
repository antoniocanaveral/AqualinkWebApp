import { FETCH_DIRECTORIES_ERROR, FETCH_DIRECTORIES_LOADING, FETCH_DIRECTORIES_SUCCESS } from "./actions";

  const initialState = {
    directoriesLoading: false,
    directories: [],
    directoriesError: null,
  };
  
  export const directoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DIRECTORIES_LOADING:
        return {
          ...state,
          directoriesLoading: true,
          directoriesError: null,
        };
      case FETCH_DIRECTORIES_SUCCESS:
        return {
          ...state,
          directoriesLoading: false,
          directories: action.payload,
        };
      case FETCH_DIRECTORIES_ERROR:
        return {
          ...state,
          directoriesLoading: false,
          directoriesError: action.payload,
        };
      default:
        return state;
    }
  };
  