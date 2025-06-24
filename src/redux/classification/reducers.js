// smClassificationReducer.js
import { 
    FETCH_SM_CLASSIFICATION_LOADING, 
    FETCH_SM_CLASSIFICATION_SUCCESS, 
    FETCH_SM_CLASSIFICATION_ERROR 
  } from './actions';
  
  const initState = {
    smClassificationLoading: false,
    smClassificationData: [],
    smClassificationError: null,
  };
  
  const smClassificationReducer = (state = initState, action) => {
    const { type, data } = action;
  
    switch (type) {
      case FETCH_SM_CLASSIFICATION_LOADING:
        return {
          ...state,
          smClassificationLoading: true,
          smClassificationData: [],
          smClassificationError: null,
        };
  
      case FETCH_SM_CLASSIFICATION_SUCCESS:
        return {
          ...state,
          smClassificationLoading: false,
          smClassificationData: data || [],
          smClassificationError: null,
        };
  
      case FETCH_SM_CLASSIFICATION_ERROR:
        return {
          ...state,
          smClassificationLoading: false,
          smClassificationData: [],
          smClassificationError: data,
        };
  
      default:
        return state;
    }
  };
  
  export default smClassificationReducer;
  