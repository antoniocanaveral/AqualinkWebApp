import Cookies from 'js-cookie';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr, rolesBegin, rolesSuccess, rolesErr, moduleSelection } = actions;

const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/auth/tokens', values);
      Cookies.set('access_token', response.data.token);
      const client = response.data.clients[0];
      const rolesResponse = await DataService.get(`/auth/roles?client=${client.id}`);
      let selectedRoleId = null;
      if(rolesResponse.data.roles.length === 1) {
        selectedRoleId = rolesResponse.data.roles[0].id;
        Cookies.set('selectedRoleId', selectedRoleId);
      }
      
      Cookies.set('selectedClientId', client.id);
      Cookies.set('roles', JSON.stringify(rolesResponse.data.roles));
      Cookies.set('logedIn', true);

      dispatch(loginSuccess({success: true, roles: rolesResponse.data.roles, selectedRoleId: selectedRoleId, selectedClientId: client.id}));
      if(selectedRoleId !== null) {
        dispatch(selectRole(selectedRoleId, client.id, () => {
          callback(selectedRoleId);
        }));
      } else {
        callback(selectedRoleId !== null);
      }
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
      console.log("---->>>>>>>>>>>");
      const clientsJSON = Cookies.get('clients');
      const clients = JSON.parse(clientsJSON);
      const response = await DataService.get(`/auth/roles?client=${clients[0].id}`);
      console.log( JSON.stringify(response.data) );
      dispatch(rolesSuccess(true));
      callback(response.data);
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));
    }
  };
};

const selectRole = (roleId, clientId, callback) => {
  return async (dispatch) => {
    dispatch(rolesBegin());
    try {
      const response = await DataService.put(`/auth/tokens`, {
        clientId: clientId,
        roleId: roleId,
        organizationId: 0,
        language: "en"
      });
      Cookies.set('access_token', response.data.token);
      const orgResponse = await DataService.get(`/auth/organizations?client=${clientId}&role=${roleId}`);
      console.log( JSON.stringify(orgResponse) );

      let withFarms = false;
      let withLabs = false;
      let withCustody = false;
      let withControl = false;

      if(orgResponse && orgResponse.data && orgResponse.data.organizations) {
        let params = "";
        let i = 0;
        for(let org of orgResponse.data.organizations) {
          if(i ++ > 0) {
            params += " OR ";
          }
          params += `AD_Org_ID eq ${org.id}`;
        }
        const orgInfoResponse = await DataService.get(`/models/ad_orginfo?$filter=${params}`);
        if(orgInfoResponse && orgInfoResponse.data && orgInfoResponse.data.records) {
          for(let info of orgInfoResponse.data.records) {
            if(info.AD_OrgType_ID) {
              if(info.AD_OrgType_ID.identifier === "FARM") {
                withFarms = true;
              }
              if(info.AD_OrgType_ID.identifier === "LAB") {
                withLabs = true;
              }
              if(info.AD_OrgType_ID.identifier === "CUSTODY") {
                withCustody = true;
              }
              if(info.AD_OrgType_ID.identifier === "CONTROL") {
                withControl = true;
              }
            }
          }
        }
      }
      Cookies.set('selectedRoleId', roleId);
      Cookies.set('withFarms', withFarms);
      Cookies.set('withLabs', withLabs);
      Cookies.set('withCustody', withCustody);
      Cookies.set('withControl', withControl);

      dispatch(rolesSuccess({success: true, selectedRoleId: roleId, withFarms, withLabs, withCustody, withControl}));
      callback(true);
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));
    }
  };
};

const selectModule = (moduleId, callback) => {
  return async (dispatch) => {
    try {
      Cookies.set('selectedModule', moduleId);
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
      console.log("---->>>>>>>>>>>");
      const clientsJSON = Cookies.get('clients');
      const clients = JSON.parse(clientsJSON);
      const response = await DataService.get(`/auth/roles?client=${clients[0].id}`);
      console.log( JSON.stringify(response.data) );
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
      Cookies.remove('selectedRoleId');
      Cookies.remove('selectedClientId');
      Cookies.remove('roles');
      Cookies.remove('withFarms');
      Cookies.remove('withLabs');
      Cookies.remove('withCustody');
      Cookies.remove('withControl');
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


export { login, authOLogin, logOut, register, findRoles, netWorkError, findOrgs, selectRole, selectModule };
