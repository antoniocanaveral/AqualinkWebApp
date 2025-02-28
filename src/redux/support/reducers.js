import { FETCH_CATEGORIES_ERROR, FETCH_CATEGORIES_LOADING, FETCH_CATEGORIES_SUCCESS, FETCH_REQUESTS_ERROR, FETCH_REQUESTS_LOADING, FETCH_REQUESTS_SUCCESS, FETCH_STATUS_ERROR, FETCH_STATUS_LOADING, FETCH_STATUS_SUCCESS } from "./actions";


const initialState = {
  statusLoading: false,
  statusData: [],
  statusError: null,

  categoriesLoading: false,
  categories: [],
  categoriesError: null,

  requestsLoading: false,
  requests: [],
  requestsError: null,
};

export const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS_LOADING:
      return {
        ...state,
        statusLoading: true,
        statusError: null,
      };
    case FETCH_STATUS_SUCCESS:
      return {
        ...state,
        statusLoading: false,
        statusData: action.payload,
      };
    case FETCH_STATUS_ERROR:
      return {
        ...state,
        statusLoading: false,
        statusError: action.payload,
      };

    case FETCH_CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: true,
        categories: [],
        categoriesError: null,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesLoading: false,
        categories: action.payload,
        categoriesError: null,
      };
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        categoriesLoading: false,
        categories: [],
        categoriesError: action.payload,
      };


      case FETCH_REQUESTS_LOADING:
      return {
        ...state,
        requestsLoading: true,
        requests: [],
        requestsError: null,
      };

    case FETCH_REQUESTS_SUCCESS:
      return {
        ...state,
        requestsLoading: false,
        requests: action.payload,
        requestsError: null,
      };

    case FETCH_REQUESTS_ERROR:
      return {
        ...state,
        requestsLoading: false,
        requests: [],
        requestsError: action.payload,
      };

    default:
      return state;
  }
};
