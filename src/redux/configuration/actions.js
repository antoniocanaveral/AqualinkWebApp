

export const SM_BUSINESSGROUP_LOADING = 'SM_BUSINESSGROUP_LOADING';
export const SM_BUSINESSGROUP_LOADED  = 'SM_BUSINESSGROUP_LOADED';
export const SM_BUSINESSGROUP_ERROR   = 'SM_BUSINESSGROUP_ERROR';

export const smBusinessGroupLoading = () => ({
  type: SM_BUSINESSGROUP_LOADING,
});

export const smBusinessGroupLoaded = (businessGroups) => ({
  type: SM_BUSINESSGROUP_LOADED,
  payload: businessGroups,
});

export const smBusinessGroupError = (error) => ({
  type: SM_BUSINESSGROUP_ERROR,
  payload: { error },
});


export const AD_CLIENT_LOADING = 'AD_CLIENT_LOADING';
export const AD_CLIENT_LOADED  = 'AD_CLIENT_LOADED';
export const AD_CLIENT_ERROR   = 'AD_CLIENT_ERROR';

export const adClientLoading = () => ({
  type: AD_CLIENT_LOADING,
});

export const adClientLoaded = (adClient) => ({
  type: AD_CLIENT_LOADED,
  payload: adClient,
});

export const adClientError = (error) => ({
  type: AD_CLIENT_ERROR,
  payload: { error },
});

export const C_REGION_LOADING = 'C_REGION_LOADING';
export const C_REGION_LOADED = 'C_REGION_LOADED';
export const C_REGION_ERROR = 'C_REGION_ERROR';

export const cRegionLoading = () => ({
  type: C_REGION_LOADING,
});

export const cRegionLoaded = (regions) => ({
  type: C_REGION_LOADED,
  payload: regions,
});

export const cRegionError = (error) => ({
  type: C_REGION_ERROR,
  payload: { error },
});


export const C_CITY_LOADING = 'C_CITY_LOADING';
export const C_CITY_LOADED = 'C_CITY_LOADED';
export const C_CITY_ERROR = 'C_CITY_ERROR';

export const cCityLoading = () => ({
  type: C_CITY_LOADING,
});

export const cCityLoaded = (cities) => ({
  type: C_CITY_LOADED,
  payload: cities,
});

export const cCityError = (error) => ({
  type: C_CITY_ERROR,
  payload: { error },
});


export const AD_ORG_LOADING = 'AD_ORG_LOADING';
export const AD_ORG_CREATED = 'AD_ORG_CREATED';
export const AD_ORG_ERROR = 'AD_ORG_ERROR';

export const adOrgLoading = () => ({
  type: AD_ORG_LOADING,
});

export const adOrgCreated = (org) => ({
  type: AD_ORG_CREATED,
  payload: org,
});

export const adOrgError = (error) => ({
  type: AD_ORG_ERROR,
  payload: { error },
});


export const POOLS_LOADING = 'POOLS_LOADING';
export const POOLS_CREATED = 'POOLS_CREATED';
export const POOLS_ERROR = 'POOLS_ERROR';

export const poolsLoading = () => ({ type: POOLS_LOADING });
export const poolsCreated = (pools) => ({ type: POOLS_CREATED, payload: pools });
export const poolsError = (error) => ({ type: POOLS_ERROR, payload: { error } });




export const SM_BRAND_FEEDERS_LOADING = 'SM_BRAND_FEEDERS_LOADING';
export const SM_BRAND_FEEDERS_LOADED = 'SM_BRAND_FEEDERS_LOADED';
export const SM_BRAND_FEEDERS_ERROR = 'SM_BRAND_FEEDERS_ERROR';

export const smBrandFeedersLoading = () => ({
  type: SM_BRAND_FEEDERS_LOADING,
});

export const smBrandFeedersLoaded = (brandFeeders) => ({
  type: SM_BRAND_FEEDERS_LOADED,
  payload: brandFeeders,
});

export const smBrandFeedersError = (error) => ({
  type: SM_BRAND_FEEDERS_ERROR,
  payload: { error },
});

export const C_SALES_REGION_LOADING = 'C_SALES_REGION_LOADING';
export const C_SALES_REGION_CREATED = 'C_SALES_REGION_CREATED';
export const C_SALES_REGION_ERROR = 'C_SALES_REGION_ERROR';

export const cSalesRegionLoading = () => ({
  type: C_SALES_REGION_LOADING,
});

export const cSalesRegionCreated = (salesRegions) => ({
  type: C_SALES_REGION_CREATED,
  payload: salesRegions,
});

export const cSalesRegionError = (error) => ({
  type: C_SALES_REGION_ERROR,
  payload: { error },
});