// src/redux/operation/reducer.js
import {
  OP_INVENTORY_LOADING,
  OP_INVENTORY_LOADED,
  OP_INVENTORY_ERROR,

  OP_CATALOG_LOADING,
  OP_CATALOG_LOADED,
  OP_CATALOG_ERROR,
  OP_ADD_PRODUCT_ERROR,
  OP_ADD_PRODUCT_LOADED,
  OP_ADD_PRODUCT_LOADING,
  FETCH_SECURITY_KITS_ERROR,
  FETCH_SECURITY_KITS_SUCCESS,
  FETCH_SECURITY_KITS_LOADING,
  ADD_SECURITY_KIT_LOADING,
  ADD_SECURITY_KIT_SUCCESS,
  ADD_SECURITY_KIT_ERROR,


} from './actions';

const initialState = {
  loading: false,
  error: null,
  categories: {},
  categoriesCatalog: {},

  //to add
  addProductLoading: false,
  addProductError: null,

  securityKitsLoading: false,
  securityKits: [],
  securityKitsError: null,
};

export const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case OP_INVENTORY_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        categories: {},
      };

    case OP_INVENTORY_LOADED:
      return {
        ...state,
        loading: false,
        error: null,
        categories: action.payload.categories,
      };

    case OP_INVENTORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        categories: {},
      };

    case OP_CATALOG_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        categoriesCatalog: {},
      };

    case OP_CATALOG_LOADED:
      return {
        ...state,
        loading: false,
        error: null,
        categoriesCatalog: action.payload.categoriesCatalog,
      };

    case OP_CATALOG_ERROR:
      return {
        ...state.productCatalog,
        loading: false,
        error: action.payload.error,
        categoriesCatalog: {},
      };

    case OP_ADD_PRODUCT_LOADING:
      return {
        ...state,
        addProductLoading: true,
        addProductError: null,
      };

    case OP_ADD_PRODUCT_LOADED:
      return {
        ...state,
        addProductLoading: false,
        addProductError: null,
      };

    case OP_ADD_PRODUCT_ERROR:
      return {
        ...state,
        addProductLoading: false,
        addProductError: action.payload.error,
      };

    case FETCH_SECURITY_KITS_LOADING:
      return {
        ...state,
        securityKitsLoading: true,
        securityKits: [],
        securityKitsError: null,
      };

    case FETCH_SECURITY_KITS_SUCCESS:
      return {
        ...state,
        securityKitsLoading: false,
        securityKits: action.payload,
        securityKitsError: null,
      };

    case FETCH_SECURITY_KITS_ERROR:
      return {
        ...state,
        securityKitsLoading: false,
        securityKits: [],
        securityKitsError: action.payload.error,
      };
      case ADD_SECURITY_KIT_LOADING:
        return {
          ...state,
          securityKitsLoading: true,
          securityKitsError: null,
        };
  
      case ADD_SECURITY_KIT_SUCCESS:
        return {
          ...state,
          securityKitsLoading: false,
          securityKits: [...state.securityKits, action.payload],
          securityKitsError: null,
        };
  
      case ADD_SECURITY_KIT_ERROR:
        return {
          ...state,
          securityKitsLoading: false,
          securityKitsError: action.payload.error,
        };
    default:
      return state;
  }
};