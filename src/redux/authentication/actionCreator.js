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
      console.log(rolesResponse)
      let selectedRoleId = null;
      if (rolesResponse.data.roles.length === 1) {
        selectedRoleId = rolesResponse.data.roles[0].id;
        Cookies.set('selectedRoleId', selectedRoleId);
      }

      Cookies.set('selectedClientId', client.id);
      Cookies.set('roles', JSON.stringify(rolesResponse.data.roles));
      Cookies.set('logedIn', true);

      if (selectedRoleId !== null) {
        await selectRoleUtil(selectedRoleId, client.id);
        callback(selectedRoleId);
      } else {
        callback(selectedRoleId !== null);
      }
      dispatch(loginSuccess({ success: true, roles: rolesResponse.data.roles, selectedRoleId: selectedRoleId, selectedClientId: client.id }));
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
      console.log(response.data)
      dispatch(rolesSuccess(true));
      callback(response.data);
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));
    }
  };
};

const selectRole = (roles, roleId, clientId) => {
  return async (dispatch) => {
    dispatch(rolesBegin());
    try {
      await selectRoleUtil(roleId, clientId);
      Cookies.set('MasterAdmin', roles.find(rol => rol.id === roleId).name)
      dispatch(rolesSuccess({ success: true, selectedRoleId: roleId }));
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
    console.log(response.data)
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

      if (orgResponse && orgResponse.data && orgResponse.data.organizations) {
        let params = "";
        let i = 0;
        const orgMap = {};

        for (let org of orgResponse.data.organizations) {
          if (i++ > 0) {
            params += " OR ";
          }
          params += `AD_Org_ID eq ${org.id}`;
          orgMap[org.id] = org;
        }

        const orgInfoResponse = await DataService.get(`/models/ad_orginfo?$filter=${params}`);

        if (orgInfoResponse && orgInfoResponse.data && orgInfoResponse.data.records) {
          const orgIds = orgInfoResponse.data.records.map(info => info.id);
          const adOrgFilter = orgIds.map(id => `AD_Org_ID eq ${id}`).join(" or ");
          const orgLocationResponse = await DataService.get(`/models/ad_org?$filter=${adOrgFilter}`);

          const locationMap = {};
          if (orgLocationResponse && orgLocationResponse.data && orgLocationResponse.data.records) {
            console.log('Organizations Location:', JSON.stringify(orgLocationResponse.data.records));
            for (let org of orgLocationResponse.data.records) {
              locationMap[org.id] = {
                latitude: org.SM_Latitude || null,
                longitude: org.SM_Longitude || null
              };
            }
          }

          for (let info of orgInfoResponse.data.records) {
            const location = locationMap[info.id] || { latitude: null, longitude: null };

            if (info.AD_OrgType_ID) {
              switch (info.AD_OrgType_ID.identifier) {
                case "FARM":
                  withFarms = true;
                  farmsOrgs.push({
                    orgId: info.id,
                    orgName: orgMap[info.id].name,
                    orgEmail: info.EMail,
                    latitude: location.latitude,
                    longitude: location.longitude
                  });
                  break;
                case "LAB":
                  withLabs = true;
                  labsOrgs.push({
                    orgId: info.id,
                    orgName: orgMap[info.id].name,
                    orgEmail: info.EMail,
                    latitude: location.latitude,
                    longitude: location.longitude
                  });
                  break;
                case "CUSTODY":
                  withCustody = true;
                  custodyOrgs.push({
                    orgId: info.id,
                    orgName: orgMap[info.id].name,
                    orgEmail: info.EMail,
                    latitude: location.latitude,
                    longitude: location.longitude
                  });
                  break;
                case "CONTROL":
                  withControl = true;
                  controlsOrgs.push({
                    orgId: info.id,
                    orgName: orgMap[info.id].name,
                    orgEmail: info.EMail,
                    latitude: location.latitude,
                    longitude: location.longitude
                  });
                  break;
                default:
                  break;
              }
            }
          }

        }
      }


      const farmsPoolsPromises = farmsOrgs.map(async (farm) => {
        try {
          const response = await DataService.get(`/models/m_warehouse?$filter=AD_Org_ID eq ${farm.orgId} AND IsActive eq true `);
          if (response.data && response.data.records) {
            const pools = response.data.records.map((record) => ({
              poolId: record.id,
              poolName: record.Name,
              location: {
                id: record.C_Location_ID?.id || null,
                address: record.C_Location_ID?.identifier || '',
                city: record.C_Location_ID?.C_City_ID?.identifier || '',
                country: record.C_Location_ID?.C_Country_ID?.identifier || '',
                region: record.C_Location_ID?.RegionName || '',
              },
              organization: {
                id: record.AD_Org_ID?.id || null,
                name: record.AD_Org_ID?.identifier || '',
              },
              tenant: {
                id: record.AD_Client_ID?.id || null,
                name: record.AD_Client_ID?.identifier || '',
              },
              dimensions: {
                length: record.SM_Lenght || 0,
                width: record.SM_Width || 0,
                depth: record.SM_Depth || 0,
                diameter: record.SM_Diameter || 0,
              },
              waterFlow: record.SM_OperatingWaterFlow || 0,
              waterVolume: record.SM_OperatingWaterVolume || 0,
              poolSize: record.SM_PoolSize || 0,
              entranceGateVolume: record.SM_EntranceGateVolume || 0,
              exitGateVolume: record.SM_ExitGateVolume || 0,
              plantingDepth: record.SM_PlantingDepth || 0,
              batchSequence: record.SM_BatchSequence || 0,
              poolType: {
                id: record.SM_PoolType?.id || '',
                identifier: record.SM_PoolType?.identifier || '',
              },
              salesRegion: {
                id: record.C_SalesRegion_ID?.id || null,
                name: record.C_SalesRegion_ID?.identifier || '',
              },
              geoLocation: record.SM_Geolocation ? JSON.parse(record.SM_Geolocation) : [],
              createdBy: {
                id: record.CreatedBy?.id || null,
                name: record.CreatedBy?.identifier || '',
              },
              updatedBy: {
                id: record.UpdatedBy?.id || null,
                name: record.UpdatedBy?.identifier || '',
              },
              isActive: record.IsActive || false,
              isInTransit: record.IsInTransit || false,
              value: record.Value || '',
            }));

            return {
              ...farm,
              pools
            };
          } else {
            return {
              ...farm,
              pools: []
            };
          }
        } catch (err) {
          console.error(`Error fetching pools for Farm ID ${farm.orgId}:`, err);
          return {
            ...farm,
            pools: [],
            error: err.message || 'Error al cargar piscinas'
          };
        }
      });

      const farmsOrgsWithPools = await Promise.all(farmsPoolsPromises);

      dispatch(loadAccess({
        success: true,
        withFarms,
        withLabs,
        withCustody,
        withControl,
        labsOrgs,
        custodyOrgs,
        farmsOrgs: farmsOrgsWithPools,
        controlsOrgs
      }));
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
      dispatch(moduleSelection({ success: true, selectedModule: moduleId }));
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
    if (err.invalidTokenError) {
      dispatch(logOut(() => { }));
    }
  };
}


export { login, authOLogin, logOut, register, findRoles, netWorkError, findOrgs, selectRole, selectModule, loadUserAccess };