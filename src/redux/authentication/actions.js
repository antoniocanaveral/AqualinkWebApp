const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',

  ROLES_BEGIN: 'ROLES_BEGIN',
  ROLES_SUCCESS: 'ROLES_SUCCESS',
  ROLES_ERR: 'ROLES_ERR',

  LOAD_ACCESS: 'LOAD_ACCESS',

  MODULE_SELECTION: 'MODULE_SELECTION',

  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERR: 'LOGOUT_ERR',

  loginBegin: () => {
    return {
      type: actions.LOGIN_BEGIN,
    };
  },

  loginSuccess: (data) => {
    return {
      type: actions.LOGIN_SUCCESS,
      data,
    };
  },

  loginErr: (err) => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },


  rolesBegin: () => {
    return {
      type: actions.ROLES_BEGIN,
    };
  },

  rolesSuccess: (data) => {
    return {
      type: actions.ROLES_SUCCESS,
      data,
    };
  },

  moduleSelection: (data) => {
    return {
      type: actions.MODULE_SELECTION,
      data,
    };
  },

  rolesErr: (err) => {
    return {
      type: actions.ROLES_ERR,
      err,
    };
  },

  logoutBegin: () => {
    return {
      type: actions.LOGOUT_BEGIN,
    };
  },

  logoutSuccess: (data) => {
    return {
      type: actions.LOGOUT_SUCCESS,
      data,
    };
  },

  logoutErr: (err) => {
    return {
      type: actions.LOGOUT_ERR,
      err,
    };
  },
  loadAccess: (data) => {
    return {
      type: actions.LOAD_ACCESS,
      data,
    };
  }
};

export default actions;