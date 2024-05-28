import Cookies from 'js-cookie';
import actions from './actions';

const { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR, ROLES_SUCCESS, MODULE_SELECTION } = actions;

const initState = {
  login: Cookies.get('logedIn'),
  loading: false,
  selectedModule: Cookies.get('selectedModule'),
  selectedRoleId: Cookies.get('selectedRoleId'),
  selectedClientId: Cookies.get('selectedClientId'),
  roles: Cookies.get('roles'),
  withFarms: Cookies.get('withFarms'),
  withLabs: Cookies.get('withLabs'),
  withCustody: Cookies.get('withCustody'),
  withControl: Cookies.get('withControl'),
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
          selectedRoleId: data.selectedRoleId,
          withFarms: data.withFarms, 
          withControl: data.withControl,
          withLabs: data.withLabs,
          withCustody: data.withCustody
        };
    case LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
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
