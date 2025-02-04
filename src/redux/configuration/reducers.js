// src/redux/operation/reducer.js

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
} from './actions';

const initialState = {
  loading: false,
  error: null,
  //sm_businessgroup
  businessGroupsLoading: false,
  businessGroups: [],
  businessGroupsError: null,

  //Clients
  adClientLoading: false,
  adClient: null,
  adClientError: null,

  //Region
  cRegionLoading: false,
  cRegions: [],
  cRegionError: null,
  cities: [],

  //City
  cCityLoading: false,
  cCities: [],
  cCityError: null,

  // Nueva parte para ad_org
  adOrgLoading: false,
  adOrg: null,
  adOrgError: null,

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
    default:
      return state;
  }
};
