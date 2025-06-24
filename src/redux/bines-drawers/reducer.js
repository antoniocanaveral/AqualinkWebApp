import {
  FETCH_ORG_BINS_LOADING,
  FETCH_ORG_BINS_SUCCESS,
  FETCH_ORG_BINS_ERROR,
  FETCH_ORG_SECURITY_KITS_LOADING,
  FETCH_ORG_SECURITY_KITS_SUCCESS,
  FETCH_ORG_SECURITY_KITS_ERROR,
  FETCH_ORG_FISHING_DRAWER_STAMP_ERROR,
  FETCH_ORG_FISHING_DRAWER_STAMP_SUCCESS,
  FETCH_ORG_FISHING_DRAWER_STAMP_LOADING,
  FETCH_FISHING_DRAWER_INFO_ERROR,
  FETCH_FISHING_DRAWER_INFO_SUCCESS,
  FETCH_FISHING_DRAWER_INFO_LOADING,
  FETCH_TREATERS_LOADING,
  FETCH_TREATERS_SUCCESS,
  FETCH_TREATERS_ERROR,
} from './actions';

const initialState = {
  orgBinsLoading: false,
  organizationBins: [],
  orgBinsError: null,

  orgSecurityKitsLoading: false,
  organizationSecurityKits: [],
  orgSecurityKitsError: null,

  orgFishingDrawerStampLoading: false,
  organizationFishingDrawerStamp: [],
  orgFishingDrawerStampError: null,

  fishingDrawerInfoLoading: false,
  fishingDrawerInfo: [],
  fishingDrawerInfoError: null,

  treatersLoading: false,
  treaters: [],
  treatersError: null,

};

export const orgBinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORG_BINS_LOADING:
      return {
        ...state,
        orgBinsLoading: true,
        orgBinsError: null,
      };
    case FETCH_ORG_BINS_SUCCESS:
      return {
        ...state,
        orgBinsLoading: false,
        organizationBins: action.payload,
      };
    case FETCH_ORG_BINS_ERROR:
      return {
        ...state,
        orgBinsLoading: false,
        orgBinsError: action.payload,
      };
    case FETCH_ORG_SECURITY_KITS_LOADING:
      return {
        ...state,
        orgSecurityKitsLoading: true,
        orgSecurityKitsError: null,
      };
    case FETCH_ORG_SECURITY_KITS_SUCCESS:
      return {
        ...state,
        orgSecurityKitsLoading: false,
        organizationSecurityKits: action.payload,
      };
    case FETCH_ORG_SECURITY_KITS_ERROR:
      return {
        ...state,
        orgSecurityKitsLoading: false,
        orgSecurityKitsError: action.payload,
      };
    case FETCH_ORG_FISHING_DRAWER_STAMP_LOADING:
      return {
        ...state,
        orgFishingDrawerStampLoading: true,
        orgFishingDrawerStampError: null,
      };
    case FETCH_ORG_FISHING_DRAWER_STAMP_SUCCESS:
      return {
        ...state,
        orgFishingDrawerStampLoading: false,
        organizationFishingDrawerStamp: action.payload,
      };
    case FETCH_ORG_FISHING_DRAWER_STAMP_ERROR:
      return {
        ...state,
        orgFishingDrawerStampLoading: false,
        orgFishingDrawerStampError: action.payload,
      };

    case FETCH_FISHING_DRAWER_INFO_LOADING:
      return {
        ...state,
        fishingDrawerInfoLoading: true,
        fishingDrawerInfoError: null,
      };
    case FETCH_FISHING_DRAWER_INFO_SUCCESS:
      return {
        ...state,
        fishingDrawerInfoLoading: false,
        fishingDrawerInfo: action.payload,
      };
    case FETCH_FISHING_DRAWER_INFO_ERROR:
      return {
        ...state,
        fishingDrawerInfoLoading: false,
        fishingDrawerInfoError: action.payload,
      };

    case FETCH_TREATERS_LOADING:
      return {
        ...state,
        treatersLoading: true,
        treatersError: null,
      };
    case FETCH_TREATERS_SUCCESS:
      return {
        ...state,
        treatersLoading: false,
        treaters: action.payload,
      };
    case FETCH_TREATERS_ERROR:
      return {
        ...state,
        treatersLoading: false,
        treatersError: action.payload,
      };
    default:
      return state;
  }
};
