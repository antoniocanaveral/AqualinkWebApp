import Cookies from 'js-cookie';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
//import { generateToken } from '../../firebase/firebaseConfig';

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
      Cookies.set('selectedClientId', client.id);

      const rolesResponse = await DataService.get(`/auth/roles?client=${client.id}`, true);
      const roles = rolesResponse.data.roles;

      Cookies.set('roles', JSON.stringify(roles));
      Cookies.set('logedIn', true);

      let selectedRoleId = null;
      let selectedRoleName = null;

      if (roles.length === 1) {
        const selectedRole = roles[0];
        selectedRoleId = selectedRole.id;
        selectedRoleName = selectedRole.name;

        Cookies.set('selectedRoleId', selectedRoleId);
        Cookies.set('selectedRoleName', selectedRoleName);


        let validOrgId = 0;

        try {
          const orgsResponse = await DataService.get(`/auth/organizations?client=${client.id}&role=${selectedRoleId}`, true);
          const orgs = orgsResponse.data.organizations;
          if (orgs.length > 0) {
            validOrgId = orgs[0].id;
          }
        } catch (orgErr) {
          console.warn("Fallo al obtener organizaciones, se usará organizationId: 0", orgErr);
        }


        const finalLoginResponse = await DataService.put('/auth/tokens', {
          clientId: client.id,
          roleId: selectedRoleId,
          organizationId: validOrgId,
          language: 'en'
        }, true);
        const userId = finalLoginResponse.data.userId;

       /* await registerFCMToken({
          userId,
          clientId: client.id,
        });
*/
        Cookies.set('access_token', finalLoginResponse.data.token);
        Cookies.set('refresh_token', finalLoginResponse.data.refresh_token);
        Cookies.set('selectedOrganizationId', validOrgId);
      }
     

      dispatch(loginSuccess({
        success: true,
        roles,
        selectedRoleId,
        selectedClientId: client.id,
        selectedRoleName,
      }));

      callback(selectedRoleId);
    } catch (err) {
      dispatch(loginErr(err));
      callback(false, err);
    }
  };
};


/*
export const registerFCMToken = async ({ userId, clientId }) => {
  try {
    const fcmToken = await generateToken();

    if (fcmToken && userId) {
      const deviceType = 'WEB';

      // Verificar si ya existe
      const existing = await DataService.get(
        `/models/SM_FCMUserToken?$filter=AD_Client_ID eq ${clientId} and AD_User_ID eq ${userId} and SM_DeviceType eq '${deviceType}'`,
      );
      console.log('existing', existing)
      if (existing?.data?.records.length > 0) {
        const tokenId = existing.data.records[0].id;

        await DataService.put(`/models/SM_FCMUserToken/${tokenId}`, {
          AD_User_ID: userId,
          sm_fcmtoken: fcmToken,
          sm_devicetype: deviceType,
          sm_deviceinfo: navigator.userAgent,
        });

        console.log('🔁 Token FCM actualizado');
      } else {
        await DataService.post('/models/SM_FCMUserToken', {
          AD_Client_ID: clientId,
          AD_Org_ID: 0,
          AD_User_ID: userId,
          sm_fcmtoken: fcmToken,
          sm_devicetype: deviceType,
          sm_deviceinfo: navigator.userAgent,
        });

        console.log('🆕 Token FCM registrado');
      }
    } else {
      console.warn('⚠️ No se pudo generar token FCM');
    }
  } catch (error) {
    console.error('❌ Error al registrar/actualizar token FCM:', error.message || error);
  }
};
*/

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

const selectRole = (roles, roleId, clientId, callback) => {
  return async (dispatch) => {
    dispatch(rolesBegin());
    try {
      await selectRoleUtil(roleId, clientId);
      Cookies.set('MasterAdmin', roles.find(rol => rol.id === roleId).name);
      dispatch(rolesSuccess({ success: true, selectedRoleId: roleId }));
      if (callback) callback(true);
    } catch (err) {
      dispatch(rolesErr(err));
      dispatch(netWorkError(err));

      if (callback) callback(false);
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

    const userId = response.data.userId;
    //await registerFCMToken({ userId, clientId: clientId });
  } catch (err) {
    throw err;
  }
}

const mapPoolRecord = (record) => ({
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
  SM_OppDepth: record.SM_OppDepth || 0,
  sm_transferdepth: record.sm_transferdepth || 0,
  feeding_method: record.feeding_method || 0,
  sm_mechanicalaeration: record.sm_mechanicalaeration || 0,
  water_system: record.water_system || 0,
  batchSequence: record.SM_BatchSequence || 0,
  poolType: {
    id: record.sm_pooltype || '',
    identifier: record.sm_pooltype || '',
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
  locators: record.M_Locator ? record.M_Locator.map((locator) => locator.id) : [],
  salesRegion: {
    id: record.C_SalesRegion_ID?.id || null,
    name: record.C_SalesRegion_ID?.identifier || '',
  },
});

const mapOrgRecord = (info, baseOrg, orgDetails, location, mappedPools) => {

  const countWarehouses = mappedPools.length;


  const uniqueSalesRegions = new Set(mappedPools.map(pool => pool.salesRegion.id).filter(id => id !== null));
  const countSalesRegion = uniqueSalesRegions.size;

  return {
    orgId: info.id,
    orgName: baseOrg.name,
    orgEmail: info.EMail,
    latitude: location.latitude,
    longitude: location.longitude,
    businessname: info.businessname,
    AD_Client_ID: orgDetails.AD_Client_ID?.id,
    AD_Client_Identifier: orgDetails.AD_Client_ID?.identifier,
    C_City_ID: orgDetails.C_City_ID?.id,
    City_Identifier: orgDetails.C_City_ID?.identifier,
    C_Region_ID: orgDetails.C_Region_ID?.id,
    Region_Identifier: orgDetails.C_Region_ID?.identifier,
    Created: orgDetails.Created,
    CreatedBy_ID: orgDetails.CreatedBy?.id,
    CreatedBy_Identifier: orgDetails.CreatedBy?.identifier,
    IsActive: orgDetails.IsActive,
    IsSummary: orgDetails.IsSummary,
    Name: orgDetails.Name,
    Phone: orgDetails.Phone,
    Phone2: orgDetails.Phone2,
    SM_CodigoVAP: orgDetails.SM_CodigoVAP,
    SM_Latitude: orgDetails.SM_Latitude,
    SM_LocationName: orgDetails.SM_LocationName,
    SM_Longitude: orgDetails.SM_Longitude,
    SM_MainlandOrIsland_ID: orgDetails.SM_MainlandOrIsland?.id,
    SM_MainlandOrIsland_Identifier: orgDetails.SM_MainlandOrIsland?.identifier,
    SM_MinisterialAgreement: orgDetails.SM_MinisterialAgreement,
    SM_ProductionType_ID: orgDetails.SM_ProductionType?.id,
    SM_ProductionType_Identifier: orgDetails.SM_ProductionType?.identifier,
    SM_SafetyCertificate: orgDetails.SM_SafetyCertificate,
    SM_NurseryArea: orgDetails.SM_NurseryArea,
    TaxID: orgDetails.TaxID,
    Updated: orgDetails.Updated,
    UpdatedBy_ID: orgDetails.UpdatedBy?.id,
    UpdatedBy_Identifier: orgDetails.UpdatedBy?.identifier,
    Value: orgDetails.Value,
    business_group_id: orgDetails.business_group_id,
    email_rl: orgDetails.email_rl,
    legalentitytype: orgDetails.legalentitytype,
    name_rl: orgDetails.name_rl,
    taxid_rl: orgDetails.taxid_rl,
    uid: orgDetails.uid,
    water_system: orgDetails.water_system,
    AD_OrgType_ID: info.AD_OrgType_ID,
    countSalesRegion,  // Agregado: cantidad de sales regions únicas
    countWarehouses,   // Agregado: cantidad de warehouses
  };
};


const loadUserAccess = () => {
  return async (dispatch) => {
    try {
      const roleId = Cookies.get("selectedRoleId");
      const roleName = Cookies.get("selectedRoleName");
      const clientId = Cookies.get("selectedClientId");
      const orgIdFromCookie = Cookies.get("orgId");

      const orgResponse = await DataService.get(
        `/auth/organizations?client=${clientId}&role=${roleId}&$expand=AD_OrgType_ID`,
        true
      );


      let withFarms = false;
      let withLabs = false;
      let withCustody = false;
      let withControl = false;

      let labsOrgs = [];
      let custodyOrgs = [];
      let farmsOrgs = [];
      let controlsOrgs = [];
      let orgToAudit = null;

      if (orgResponse?.data?.organizations) {
        let params = "";
        const orgMap = {};

        orgResponse.data.organizations.forEach((org, index) => {
          params += (index > 0 ? " OR " : "") + `AD_Org_ID eq ${org.id}`;
          orgMap[org.id] = org;
        });

        const orgInfoResponse = await DataService.get(`/models/ad_orginfo?$filter=${params}`);

        if (orgInfoResponse?.data?.records) {
          const orgIds = orgInfoResponse.data.records.map((info) => info.id);
          const adOrgFilter = orgIds.map((id) => `AD_Org_ID eq ${id}`).join(" or ");
          const orgLocationResponse = await DataService.get(
            `/models/ad_org?$filter=${encodeURIComponent(adOrgFilter)}&$expand=m_warehouse($expand=M_Locator)`
          );

          const locationMap = {};
          const orgDetailsMap = {};

          if (orgLocationResponse?.data?.records) {
            orgLocationResponse.data.records.forEach((org) => {
              locationMap[org.id] = {
                latitude: org.SM_Latitude || null,
                longitude: org.SM_Longitude || null,
                pools: org.m_warehouse || []
              };
              orgDetailsMap[org.id] = org;
            });
          }

          for (let info of orgInfoResponse.data.records) {
            const location = locationMap[info.id] || { latitude: null, longitude: null, pools: [] };
            const orgDetails = orgDetailsMap[info.id] || {};
            const mappedPools = location.pools.map(mapPoolRecord);
            const baseOrgData = mapOrgRecord(info, orgMap[info.id], orgDetails, location, mappedPools);
            const orgType = info.AD_OrgType_ID?.identifier;

            switch (orgType) {
              case "FARM":
                withFarms = true;
                farmsOrgs.push({ ...baseOrgData, pools: mappedPools });
                break;
              case "LAB":
                withLabs = true;
                labsOrgs.push({ ...baseOrgData, pools: mappedPools });
                break;
              case "CUSTODY":
                withCustody = true;
                custodyOrgs.push({ ...baseOrgData, pools: mappedPools });
                break;
              case "CONTROL":
                withControl = true;
                controlsOrgs.push({ ...baseOrgData, pools: mappedPools });
                break;
              default:
                break;
            }


            if (
              roleName === "Cumplimiento - Auditor Externo" &&
              info.id.toString() === orgIdFromCookie
            ) {
              orgToAudit = { ...baseOrgData, pools: mappedPools };
              console.log("orgToAudit", orgToAudit)
              if (orgType) {
                Cookies.set('orgAuditType', orgType); // Guardar tipo en cookie
              }
            }
          }
        }
      }

      dispatch(
        loadAccess({
          success: true,
          withFarms,
          withLabs,
          withCustody,
          withControl,
          labsOrgs,
          custodyOrgs,
          farmsOrgs,
          controlsOrgs,
          orgToAudit
        })
      );
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
      Cookies.remove('selectedRoleName');
      Cookies.remove('selectedClientId');
      Cookies.remove('roles');
      Cookies.remove('selectedModule');
      Cookies.remove('orgId');
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