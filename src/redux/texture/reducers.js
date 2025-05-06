
const initialState = {
    loading: false,
    textures: [],
    error: null,
  };
  
  const textureReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TEXTURE_LOADING':
        return { ...state, loading: true, error: null };
      case 'FETCH_TEXTURE_SUCCESS':
        return { ...state, loading: false, textures: action.payload };
      case 'FETCH_TEXTURE_ERROR':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default textureReducer;
  