import Cookies from 'js-cookie';
import actions from './actions';

const { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR, ROLES_SUCCESS, MODULE_SELECTION, LOAD_ACCESS } = actions;

const initState = {
  login: Cookies.get('logedIn'),
  loading: false,
  selectedModule: Cookies.get('selectedModule'),
  selectedRoleId: Cookies.get('selectedRoleId'),
  selectedClientId: Cookies.get('selectedClientId'),
  roles: Cookies.get('roles'),
  accessDataLoadded: false,
  withFarms: false,
  withLabs: false,
  withCustody: false,
  withControl: false,
  labsOrgs: [],
  custodyOrgs: [],
  farmsOrgs: [],
  controlsOrgs: [],
  orgId: Cookies.get('orgId'),
  error: null,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const AuthReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: data.success,
        roles: data.roles,
        selectedClientId: data.selectedClientId,
        selectedRoleId: data.selectedRoleId,
        loading: false
      };
    case ROLES_SUCCESS:
        return {
          ...state,
          selectedRoleId: data.selectedRoleId
        };
    case LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LOAD_ACCESS:
        return {
          ...state,
          withFarms: data.withFarms, 
          withControl: data.withControl,
          withLabs: data.withLabs,
          withCustody: data.withCustody,
          labsOrgs: data.labsOrgs,
          custodyOrgs: data.custodyOrgs,
          farmsOrgs: data.farmsOrgs,
          controlsOrgs: data.controlsOrgs,
          accessDataLoadded: true
        };
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: data,
        loading: false,
        selectedModule: null,
        selectedRoleId: null,
        selectedClientId: null,
        roles: null,
      };
    case MODULE_SELECTION:
      return {
        ...state,
        selectedModule: data.selectedModule,
        orgId: data.orgId
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;
