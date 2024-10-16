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
  
    custodyCoordBegin: () => {
      return {
        type: actions.CUSTODY_COORDINATION_BEGIN,
      };
    },
  
    custodyCoordSuccess: (data) => {
      return {
        type: actions.CUSTODY_COORDINATION_SUCCESS,
        data,
      };
    },
  
    custodyCoordErr: (err) => {
      return {
        type: actions.CUSTODY_COORDINATION_ERR,
        err,
      };
    },

    custodyCoordLoad: (data) => {
      return {
        type: actions.CUSTODY_COORDINATION_LOAD,
        data,
      };
    },
    custodyCoordLoadBegin: (data) => {
      return {
        type: actions.CUSTODY_COORDINATION_LOAD_BEGIN,
        data,
      };
    },
    custodyCoordSubmit: (data) => {
      return {
        type: actions.CUSTODY_COORDINATION_SUBMIT,
        data,
      };
    },
    custodyCoordCancel: (data) => {
      return {
        type: actions.CUSTODY_COORDINATION_CANCEL,
        data,
      };
    },
    custodyBinesLoad: (data) => {
      return {
        type: actions.CUSTODY_BINES_LOAD,
        data,
      };
    },
    custodyDrawerLoad: (data) => {
      return {
        type: actions.CUSTODY_DRAWER_LOAD,
        data,
      };
    },
    custodyDrawerStampLoad: (data) => {
      return {
        type: actions.CUSTODY_DRAWER_STAMP_LOAD,
        data,
      };
    }
  };
  
  export default actions;
  