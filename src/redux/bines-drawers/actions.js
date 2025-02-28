export const FETCH_ORG_BINS_LOADING = 'FETCH_ORG_BINS_LOADING';
export const FETCH_ORG_BINS_SUCCESS = 'FETCH_ORG_BINS_SUCCESS';
export const FETCH_ORG_BINS_ERROR = 'FETCH_ORG_BINS_ERROR';

export const fetchOrgBinsLoading = () => ({
  type: FETCH_ORG_BINS_LOADING,
});

export const fetchOrgBinsSuccess = (bins) => ({
  type: FETCH_ORG_BINS_SUCCESS,
  payload: bins,
});

export const fetchOrgBinsError = (error) => ({
  type: FETCH_ORG_BINS_ERROR,
  payload: error,
});


export const FETCH_ORG_SECURITY_KITS_LOADING = 'FETCH_ORG_SECURITY_KITS_LOADING';
export const FETCH_ORG_SECURITY_KITS_SUCCESS = 'FETCH_ORG_SECURITY_KITS_SUCCESS';
export const FETCH_ORG_SECURITY_KITS_ERROR = 'FETCH_ORG_SECURITY_KITS_ERROR';


export const fetchOrgSecurityKitsLoading = () => ({
  type: FETCH_ORG_SECURITY_KITS_LOADING,
});

export const fetchOrgSecurityKitsSuccess = (securityKits) => ({
  type: FETCH_ORG_SECURITY_KITS_SUCCESS,
  payload: securityKits,
});

export const fetchOrgSecurityKitsError = (error) => ({
  type: FETCH_ORG_SECURITY_KITS_ERROR,
  payload: error,
});


export const FETCH_ORG_FISHING_DRAWER_STAMP_LOADING = 'FETCH_ORG_FISHING_DRAWER_STAMP_LOADING';
export const FETCH_ORG_FISHING_DRAWER_STAMP_SUCCESS = 'FETCH_ORG_FISHING_DRAWER_STAMP_SUCCESS';
export const FETCH_ORG_FISHING_DRAWER_STAMP_ERROR = 'FETCH_ORG_FISHING_DRAWER_STAMP_ERROR';

export const fetchOrgFishingDrawerStampLoading = () => ({
  type: FETCH_ORG_FISHING_DRAWER_STAMP_LOADING,
});

export const fetchOrgFishingDrawerStampSuccess = (data) => ({
  type: FETCH_ORG_FISHING_DRAWER_STAMP_SUCCESS,
  payload: data,
});

export const fetchOrgFishingDrawerStampError = (error) => ({
  type: FETCH_ORG_FISHING_DRAWER_STAMP_ERROR,
  payload: error,
});

export const FETCH_FISHING_DRAWER_INFO_LOADING = 'FETCH_FISHING_DRAWER_INFO_LOADING';
export const FETCH_FISHING_DRAWER_INFO_SUCCESS = 'FETCH_FISHING_DRAWER_INFO_SUCCESS';
export const FETCH_FISHING_DRAWER_INFO_ERROR = 'FETCH_FISHING_DRAWER_INFO_ERROR';

export const fetchFishingDrawerInfoLoading = () => ({
  type: FETCH_FISHING_DRAWER_INFO_LOADING,
});

export const fetchFishingDrawerInfoSuccess = (data) => ({
  type: FETCH_FISHING_DRAWER_INFO_SUCCESS,
  payload: data,
});

export const fetchFishingDrawerInfoError = (error) => ({
  type: FETCH_FISHING_DRAWER_INFO_ERROR,
  payload: error,
});


export const FETCH_TREATERS_LOADING = 'FETCH_TREATERS_LOADING';
export const FETCH_TREATERS_SUCCESS = 'FETCH_TREATERS_SUCCESS';
export const FETCH_TREATERS_ERROR = 'FETCH_TREATERS_ERROR';

export const fetchTreatersLoading = () => ({
  type: FETCH_TREATERS_LOADING,
});

export const fetchTreatersSuccess = (treaters) => ({
  type: FETCH_TREATERS_SUCCESS,
  payload: treaters,
});

export const fetchTreatersError = (error) => ({
  type: FETCH_TREATERS_ERROR,
  payload: error,
});
