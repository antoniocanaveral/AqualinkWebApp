const actions = {
    LAB_COORDINATION_BEGIN: 'LAB_COORDINATION_BEGIN',
    LAB_COORDINATION_SUCCESS: 'LAB_COORDINATION_SUCCESS',
    LAB_COORDINATION_ERR: 'LAB_COORDINATION_ERR',

    LAB_COORDINATION_LOAD_BEGIN: 'LAB_COORDINATION_LOAD_BEGIN',
    LAB_COORDINATION_LOAD: 'LAB_COORDINATION_LOAD',
    LAB_COORDINATION_SUBMIT: 'LAB_COORDINATION_SUBMIT',
    LAB_COORDINATION_CANCEL: 'LAB_COORDINATION_CANCEL',
  
    labCoordBegin: () => {
      return {
        type: actions.LAB_COORDINATION_BEGIN,
      };
    },
  
    labCoordSuccess: (data) => {
      return {
        type: actions.LAB_COORDINATION_SUCCESS,
        data,
      };
    },
  
    labCoordErr: (err) => {
      return {
        type: actions.LAB_COORDINATION_ERR,
        err,
      };
    },

    labCoordLoad: (data) => {
      return {
        type: actions.LAB_COORDINATION_LOAD,
        data,
      };
    },
    labCoordLoadBegin: (data) => {
      return {
        type: actions.LAB_COORDINATION_LOAD_BEGIN,
        data,
      };
    },
    labCoordSubmit: (data) => {
      return {
        type: actions.LAB_COORDINATION_SUBMIT,
        data,
      };
    },
    labCoordCancel: (data) => {
      return {
        type: actions.LAB_COORDINATION_CANCEL,
        data,
      };
    }
  };
  
  export default actions;
  