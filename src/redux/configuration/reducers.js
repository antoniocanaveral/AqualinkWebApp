

import {

  SM_BUSINESSGROUP_LOADING,
  SM_BUSINESSGROUP_LOADED,
  SM_BUSINESSGROUP_ERROR,
  AD_CLIENT_LOADING,
  AD_CLIENT_LOADED,
  AD_CLIENT_ERROR,
  C_REGION_LOADING,
  C_REGION_LOADED,
  C_REGION_ERROR,
  C_CITY_LOADING,
  C_CITY_LOADED,
  C_CITY_ERROR,
  AD_ORG_ERROR,
  AD_ORG_CREATED,
  AD_ORG_LOADING,
  POOLS_LOADING,
  POOLS_CREATED,
  POOLS_ERROR,
  SM_BRAND_FEEDERS_ERROR,
  SM_BRAND_FEEDERS_LOADED,
  SM_BRAND_FEEDERS_LOADING,
  C_SALES_REGION_LOADING,
  C_SALES_REGION_CREATED,
  C_SALES_REGION_ERROR,
} from './actions';

const initialState = {
  loading: false,
  error: null,

  businessGroupsLoading: false,
  businessGroups: [],
  businessGroupsError: null,


  adClientLoading: false,
  adClient: null,
  adClientError: null,


  cRegionLoading: false,
  cRegions: [],
  cRegionError: null,
  cities: [],


  cCityLoading: false,
  cCities: [],
  cCityError: null,


  adOrgLoading: false,
  adOrg: null,
  adOrgError: null,


  poolsLoading: false,
  createdPools: [],
  poolsError: null,


  brandFeedersLoading: false,
  brandFeeders: [],
  brandFeedersError: null,


  cSalesRegionsLoading: false,
  createdSalesRegions: [],
  cSalesRegionsError: null,
};

export const configurationReducer = (state = initialState, action) => {
  switch (action.type) {

    case SM_BUSINESSGROUP_LOADING:
      return {
        ...state,
        businessGroupsLoading: true,
        businessGroups: [],
        businessGroupsError: null,
      };

    case SM_BUSINESSGROUP_LOADED:
      return {
        ...state,
        businessGroupsLoading: false,
        businessGroups: action.payload,
        businessGroupsError: null,
      };

    case SM_BUSINESSGROUP_ERROR:
      return {
        ...state,
        businessGroupsLoading: false,
        businessGroups: [],
        businessGroupsError: action.payload.error,
      };

    case AD_CLIENT_LOADING:
      return {
        ...state,
        adClientLoading: true,
        adClient: null,
        adClientError: null,
      };

    case AD_CLIENT_LOADED:
      return {
        ...state,
        adClientLoading: false,
        adClient: action.payload,
        adClientError: null,
      };

    case AD_CLIENT_ERROR:
      return {
        ...state,
        adClientLoading: false,
        adClient: null,
        adClientError: action.payload.error,
      };

    case C_REGION_LOADING:
      return {
        ...state,
        cRegionLoading: true,
        cRegions: [],
        cRegionError: null,
      };

    case C_REGION_LOADED:
      return {
        ...state,
        cRegionLoading: false,
        cRegions: action.payload,
        cRegionError: null,
      };

    case C_REGION_ERROR:
      return {
        ...state,
        cRegionLoading: false,
        cRegions: [],
        cRegionError: action.payload.error,
      };

    case C_CITY_LOADING:
      return {
        ...state,
        cCityLoading: true,
        cCityError: null,
      };

    case C_CITY_LOADED:
      return {
        ...state,
        cCityLoading: false,
        cCities: action.payload,
        cCityError: null,
      };

    case C_CITY_ERROR:
      return {
        ...state,
        cCityLoading: false,
        cCities: [],
        cCityError: action.payload.error,
      };

    case AD_ORG_LOADING:
      return {
        ...state,
        adOrgLoading: true,
        adOrg: null,
        adOrgError: null,
      };

    case AD_ORG_CREATED:
      return {
        ...state,
        adOrgLoading: false,
        adOrg: action.payload,
        adOrgError: null,
      };

    case AD_ORG_ERROR:
      return {
        ...state,
        adOrgLoading: false,
        adOrg: null,
        adOrgError: action.payload.error,
      };
    case POOLS_LOADING:
      return {
        ...state,
        poolsLoading: true,
        createdPools: [],
        poolsError: null
      };

    case POOLS_CREATED:
      return {
        ...state,
        poolsLoading: false,
        createdPools: action.payload,
        poolsError: null
      };

    case POOLS_ERROR:
      return {
        ...state,
        poolsLoading: false,
        createdPools: [],
        poolsError: action.payload.error
      };

    case SM_BRAND_FEEDERS_LOADING:
      return {
        ...state,
        brandFeedersLoading: true,
        brandFeeders: [],
        brandFeedersError: null,
      };

    case SM_BRAND_FEEDERS_LOADED:
      return {
        ...state,
        brandFeedersLoading: false,
        brandFeeders: action.payload,
        brandFeedersError: null,
      };

    case SM_BRAND_FEEDERS_ERROR:
      return {
        ...state,
        brandFeedersLoading: false,
        brandFeeders: [],
        brandFeedersError: action.payload.error,
      };

      case C_SALES_REGION_LOADING:
      return {
        ...state,
        cSalesRegionsLoading: true,
        createdSalesRegions: [],
        cSalesRegionsError: null,
      };

    case C_SALES_REGION_CREATED:
      return {
        ...state,
        cSalesRegionsLoading: false,
        createdSalesRegions: action.payload,
        cSalesRegionsError: null,
      };

    case C_SALES_REGION_ERROR:
      return {
        ...state,
        cSalesRegionsLoading: false,
        createdSalesRegions: [],
        cSalesRegionsError: action.payload.error,
      };

    default:
      return state;
  }
};
