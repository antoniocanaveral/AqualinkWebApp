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
} from './actions';

const initialState = {
  loading: false,
  error: null,
  categories: {},
  categoriesCatalog: {},

  //to add
  addProductLoading: false,
  addProductError: null,
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
    default:
      return state;
  }
};
