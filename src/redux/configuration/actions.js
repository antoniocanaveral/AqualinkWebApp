// src/redux/operation/actions.js

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
