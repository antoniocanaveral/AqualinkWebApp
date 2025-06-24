

export const OP_INVENTORY_LOADING = 'OP_INVENTORY_LOADING';
export const OP_INVENTORY_LOADED = 'OP_INVENTORY_LOADED';
export const OP_INVENTORY_ERROR = 'OP_INVENTORY_ERROR';

export const OP_ADD_PRODUCT_LOADING = 'OP_ADD_PRODUCT_LOADING';
export const OP_ADD_PRODUCT_LOADED = 'OP_ADD_PRODUCT_LOADED';
export const OP_ADD_PRODUCT_ERROR = 'OP_ADD_PRODUCT_ERROR';



export const opInventoryLoading = () => ({
  type: OP_INVENTORY_LOADING,
});

export const opInventoryLoaded = (categories) => ({
  type: OP_INVENTORY_LOADED,
  payload: {
    categories, 
  },
});

export const opInventoryError = (error) => ({
  type: OP_INVENTORY_ERROR,
  payload: { error },
});


export const OP_CATALOG_LOADING = 'OP_CATALOG_LOADING';
export const OP_CATALOG_LOADED = 'OP_CATALOG_LOADED';
export const OP_CATALOG_ERROR = 'OP_CATALOG_ERROR';

export const opCatalogLoading = () => ({
  type: OP_CATALOG_LOADING,
});

export const opCatalogLoaded = (categoriesCatalog) => ({
  type: OP_CATALOG_LOADED,
  payload: {
    categoriesCatalog,
  },
});

export const opCatalogError = (error) => ({
  type: OP_CATALOG_ERROR,
  payload: { error },
});



export const opAddProductLoading = () => ({
  type: OP_ADD_PRODUCT_LOADING,
});

export const opAddProductLoaded = () => ({
  type: OP_ADD_PRODUCT_LOADED,
});

export const opAddProductError = (error) => ({
  type: OP_ADD_PRODUCT_ERROR,
  payload: { error },
});


export const FETCH_SECURITY_KITS_LOADING = 'FETCH_SECURITY_KITS_LOADING';
export const FETCH_SECURITY_KITS_SUCCESS = 'FETCH_SECURITY_KITS_SUCCESS';
export const FETCH_SECURITY_KITS_ERROR = 'FETCH_SECURITY_KITS_ERROR';

export const fetchSecurityKitsLoading = () => ({
  type: FETCH_SECURITY_KITS_LOADING,
});

export const fetchSecurityKitsSuccess = (kits) => ({
  type: FETCH_SECURITY_KITS_SUCCESS,
  payload: kits,
});

export const fetchSecurityKitsError = (error) => ({
  type: FETCH_SECURITY_KITS_ERROR,
  payload: { error },
});


export const ADD_SECURITY_KIT_LOADING = 'ADD_SECURITY_KIT_LOADING';
export const ADD_SECURITY_KIT_SUCCESS = 'ADD_SECURITY_KIT_SUCCESS';
export const ADD_SECURITY_KIT_ERROR = 'ADD_SECURITY_KIT_ERROR';

export const addSecurityKitLoading = () => ({ type: ADD_SECURITY_KIT_LOADING });

export const addSecurityKitSuccess = (kit) => ({
  type: ADD_SECURITY_KIT_SUCCESS,
  payload: kit,
});

export const addSecurityKitError = (error) => ({
  type: ADD_SECURITY_KIT_ERROR,
  payload: { error },
});
