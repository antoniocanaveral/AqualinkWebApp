import Cookies from 'js-cookie';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr, rolesBegin, rolesSuccess, rolesErr, moduleSelection, loadAccess } = actions;

const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      Cookies.remove('access_token');
      Cookies.remove('access_token_initial');

      const response = await DataService.post('/auth/tokens', values, {}, false, true);
      Cookies.set('access_token_initial', response.data.token);

      const client = response.data.clients[0];
      const rolesResponse = await DataService.get(`/auth/roles?client=${client.id}`, true);

      let selectedRoleId = null;
      if(rolesResponse.data.roles.length === 1) {
        selectedRoleId = rolesResponse.data.roles[0].id;
        Cookies.set('selectedRoleId', selectedRoleId);
      }
      
      Cookies.set('selectedClientId', client.id);
      Cookies.set('roles', JSON.stringify(rolesResponse.data.roles));
      Cookies.set('logedIn', true);
      
      if(selectedRoleId !== null) {
        await selectRoleUtil(selectedRoleId, client.id);
        callback(selectedRoleId);
      } else {
        callback(selectedRoleId !== null);
      }
      dispatch(loginSuccess({success: true, roles: rolesResponse.data.roles, selectedRoleId: selectedRoleId, selectedClientId: client.id}));
    } catch (err) {
      dispatch(loginErr(err));
      callback(false, err);
    }
  };
};

const findRoles = (callback) => {
  return async (dispatch) => {
    dispatch(rolesBegin());
    try {
      const clientsJSON = Cookies.get('clients');
      const clients = JSON.parse(clientsJSON);
      const response = await DataService.get(`/auth/roles?client=${clients[0].id}`, true);
      dispatch(rolesSuccess(true));
      callback(response.data);
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));
    }
  };
};

const selectRole = (roleId, clientId) => {
  return async (dispatch) => {
    dispatch(rolesBegin());
    try {
      await selectRoleUtil(roleId, clientId);
      dispatch(rolesSuccess({success: true, selectedRoleId: roleId}));
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));
    }
  };
};

const selectRoleUtil = async (roleId, clientId) => {
  try {
    const response = await DataService.put(`/auth/tokens`, {
      clientId: clientId,
      roleId: roleId,
      organizationId: 0,
      language: "en"
    }, true);
    Cookies.set('access_token', response.data.token);
    Cookies.set('refresh_token', response.data.refresh_token);
    Cookies.set('selectedRoleId', roleId);
  } catch (err) {
    throw err;
  }
}

const loadUserAccess = () => {
  return async (dispatch) => {
    try {

      const roleId = Cookies.get('selectedRoleId');
      const clientId = Cookies.get('selectedClientId');

      const orgResponse = await DataService.get(`/auth/organizations?client=${clientId}&role=${roleId}`, true);

      let withFarms = false;
      let withLabs = false;
      let withCustody = false;
      let withControl = false;
      let labsOrgs = [];
      let custodyOrgs = [];
      let farmsOrgs = [];
      let controlsOrgs = [];

      if(orgResponse && orgResponse.data && orgResponse.data.organizations) {
        let params = "";
        let i = 0;
        const orgMap = {};
        for(let org of orgResponse.data.organizations) {
          if(i ++ > 0) {
            params += " OR ";
          }
          params += `AD_Org_ID eq ${org.id}`;
          orgMap[org.id] = org;
        }
        const orgInfoResponse = await DataService.get(`/models/ad_orginfo?$filter=${params}`);

        if(orgInfoResponse && orgInfoResponse.data && orgInfoResponse.data.records) {
          for(let info of orgInfoResponse.data.records) {
            if(info.AD_OrgType_ID) {
              if(info.AD_OrgType_ID.identifier === "FARM") {
                withFarms = true;
                farmsOrgs.push({
                  orgId: info.id,
                  orgName: orgMap[info.id].name,
                  orgEmail: info.EMail
                });
              }
              if(info.AD_OrgType_ID.identifier === "LAB") {
                withLabs = true;
                labsOrgs.push({
                  orgId: info.id,
                  orgName: orgMap[info.id].name,
                  orgEmail: info.EMail
                });
              }
              if(info.AD_OrgType_ID.identifier === "CUSTODY") {
                withCustody = true;
                console.log( '>> ' +  JSON.stringify(info) );
                custodyOrgs.push({
                  orgId: info.id,
                  orgName: orgMap[info.id].name,
                  orgEmail: info.EMail
                });
              }
              if(info.AD_OrgType_ID.identifier === "CONTROL") {
                withControl = true;
                controlsOrgs.push({
                  orgId: info.id,
                  orgName: orgMap[info.id].name,
                  orgEmail: info.EMail
                });
              }
            }
          }
        }
      }
      dispatch(loadAccess({success: true, withFarms, withLabs, withCustody, withControl, labsOrgs, custodyOrgs, farmsOrgs, controlsOrgs}));
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));
    }
  };
};

const selectModule = (moduleId, orgInfo, callback) => {
  return async (dispatch) => {
    try {
      Cookies.set('selectedModule', moduleId);
      Cookies.set('orgId', orgInfo.orgId);
      Cookies.set('orgName', orgInfo.orgName);
      Cookies.set('orgEmail', orgInfo.orgEmail);
      dispatch(moduleSelection({success: true, selectedModule: moduleId}));
      callback(true);
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));
    }
  };
};

const findOrgs = (callback) => {
  return async (dispatch) => {
    dispatch(rolesBegin());
    try {
      const clientsJSON = Cookies.get('clients');
      const clients = JSON.parse(clientsJSON);
      const response = await DataService.get(`/auth/roles?client=${clients[0].id}`);
      dispatch(rolesSuccess(true));
      callback(response.data);
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));
    }
  };
};

const authOLogin = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    Cookies.set('access_token', values.accessToken);
    Cookies.set('logedIn', true);
    dispatch(loginSuccess(true));
    callback();
  };
};

const register = (values) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/register', values);
      if (response.data.errors) {
        dispatch(loginErr('Registration failed!'));
      } else {
        dispatch(loginSuccess(false));
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = (callback) => {
  return async (dispatch) => {
    dispatch(logoutBegin());
    try {
      Cookies.remove('logedIn');
      Cookies.remove('access_token');
      Cookies.remove('access_token_initial');
      Cookies.remove('selectedRoleId');
      Cookies.remove('selectedClientId');
      Cookies.remove('roles');
      Cookies.remove('selectedModule');
      dispatch(logoutSuccess(false));
      callback();
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

const netWorkError = (err) => {
  return async (dispatch) => {
    if(err.invalidTokenError) {
      dispatch(logOut(()=>{}));
    }
  };
}


export { login, authOLogin, logOut, register, findRoles, netWorkError, findOrgs, selectRole, selectModule, loadUserAccess };
