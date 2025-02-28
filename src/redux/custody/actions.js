const actions = {
  CUSTODY_COORDINATION_BEGIN: 'CUSTODY_COORDINATION_BEGIN',
  CUSTODY_COORDINATION_SUCCESS: 'CUSTODY_COORDINATION_SUCCESS',
  CUSTODY_COORDINATION_ERR: 'CUSTODY_COORDINATION_ERR',

  CUSTODY_COORDINATION_LOAD_BEGIN: 'CUSTODY_COORDINATION_LOAD_BEGIN',
  CUSTODY_COORDINATION_LOAD: 'CUSTODY_COORDINATION_LOAD',
  CUSTODY_COORDINATION_SUBMIT: 'CUSTODY_COORDINATION_SUBMIT',
  CUSTODY_COORDINATION_CANCEL: 'CUSTODY_COORDINATION_CANCEL',

  CUSTODY_BINES_LOAD: 'CUSTODY_BINES_LOAD',
  CUSTODY_DRAWER_LOAD: 'CUSTODY_DRAWER_LOAD',
  CUSTODY_DRAWER_STAMP_LOAD: 'CUSTODY_DRAWER_STAMP_LOAD',

  FETCH_ORG_BINS_LOADING: 'FETCH_ORG_BINS_LOADING',
  FETCH_ORG_BINS_SUCCESS: 'FETCH_ORG_BINS_SUCCESS',
  FETCH_ORG_BINS_ERROR: 'FETCH_ORG_BINS_ERROR',

  custodyCoordBegin: () => ({
    type: actions.CUSTODY_COORDINATION_BEGIN,
  }),

  custodyCoordSuccess: (data) => ({
    type: actions.CUSTODY_COORDINATION_SUCCESS,
    data,
  }),

  custodyCoordErr: (err) => ({
    type: actions.CUSTODY_COORDINATION_ERR,
    err,
  }),

  custodyCoordLoad: (data) => ({
    type: actions.CUSTODY_COORDINATION_LOAD,
    data,
  }),

  custodyCoordLoadBegin: (data) => ({
    type: actions.CUSTODY_COORDINATION_LOAD_BEGIN,
    data,
  }),

  custodyCoordSubmit: (data) => ({
    type: actions.CUSTODY_COORDINATION_SUBMIT,
    data,
  }),

  custodyCoordCancel: (data) => ({
    type: actions.CUSTODY_COORDINATION_CANCEL,
    data,
  }),

  custodyBinesLoad: (data) => ({
    type: actions.CUSTODY_BINES_LOAD,
    data,
  }),

  custodyDrawerLoad: (data) => ({
    type: actions.CUSTODY_DRAWER_LOAD,
    data,
  }),

  custodyDrawerStampLoad: (data) => ({
    type: actions.CUSTODY_DRAWER_STAMP_LOAD,
    data,
  }),

  fetchOrgBinsLoading: (data) => ({
    type: actions.FETCH_ORG_BINS_LOADING,
    data
  }),

  fetchOrgBinsSuccess: (data) => ({
    type: actions.FETCH_ORG_BINS_SUCCESS,
    data,
  }),

  fetchOrgBinsError: (error) => ({
    type: actions.FETCH_ORG_BINS_ERROR,
    data: error,
  }),
};

export default actions;
