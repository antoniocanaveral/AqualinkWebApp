import Cookies from 'js-cookie';
import { DataService } from '../../config/dataService/dataService';
import {
  fetchRolesLoading,
  fetchRolesSuccess,
  fetchRolesError,
  createUserLoading,
  createUserSuccess,
  createUserError,
  fetchUsersLoading,
  fetchUsersSuccess,
  fetchUsersError,
  sendAuditorEmailLoading,
  sendAuditorEmailSuccess,
  sendAuditorEmailError,
} from './actions';
import { message } from 'antd';

export const fetchRolesByClient = () => async (dispatch) => {
  try {
    dispatch(fetchRolesLoading());

    const selectedClientId = Cookies.get('selectedClientId');
    if (!selectedClientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }

    const response = await DataService.get(`models/ad_role?$filter=AD_Client_ID eq ${selectedClientId}&$select=AD_Role_ID,Description, has_warehouses`);

    if (response.data && response.data.records) {
      const filteredRoles = response.data.records.filter(role => role.Description !== null);

      if (filteredRoles.length > 0) {
        dispatch(fetchRolesSuccess(filteredRoles));
      } else {
        dispatch(fetchRolesError('No se encontraron roles con descripción válida.'));
      }
    } else {
      dispatch(fetchRolesError('No se encontraron roles para este cliente.'));
    }
  } catch (err) {
    dispatch(fetchRolesError(err.message || 'Error al cargar los roles.'));
  }
};



export const createUserFarm = (values, selectedOrgId, fcmToken) => async (dispatch) => {
  try {
    console.log("values", values)
    console.log("selectedOrgId", selectedOrgId)
    console.log("fcmToken", fcmToken)
    dispatch(createUserLoading());


    const clientId = Cookies.get('selectedClientId');
    if (!clientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }


    const userPayload = {
      AD_Client_ID: parseInt(clientId, 10),
      AD_Org_ID: selectedOrgId ? selectedOrgId : 0,
      Name: values.nombre,
      Password: values.claveAcceso,
      EMail: values.correo,
      Phone: values.telefono,
      TaxID: values.cc,
      SM_FCMToken: fcmToken,
    };

    const userResponse = await DataService.post('models/ad_user', userPayload);


    if (!userResponse.data || !userResponse.data.id) {
      throw new Error('Error al crear el usuario');
    }
    const adUserId = userResponse.data.id;


    const rolePayload = {
      AD_Client_ID: parseInt(clientId, 10),
      AD_Org_ID: 0,
      AD_User_ID: adUserId,
      AD_Role_ID: values.rol,
    };

    await DataService.post('models/ad_user_roles', rolePayload);



    if (values.pools && Array.isArray(values.pools) && values.pools.length > 0) {
      for (const poolId of values.pools) {
        const warehousePayload = {
          AD_Client_ID: parseInt(clientId, 10),
          AD_Org_ID: 0,
          AD_User_ID: adUserId,
          M_Warehouse_ID: poolId,
        };
        await DataService.post('models/sm_user_warehouses', warehousePayload);
      }
    }

    dispatch(createUserSuccess(adUserId));
    message.success('Usuario creado exitosamente');
  } catch (error) {
    dispatch(createUserError(error.message));
    message.error(`Error al crear usuario: ${error.message}`);
  }
};

export const sendAuditorEmailProcess = (values) => async (dispatch) => {
  try {
    dispatch(sendAuditorEmailLoading());

    const payload = {
      Role_Type: 'Auditor Externo', // Valor fijo
      Email: values.correo,
      Certificate_Org: values.asc,
      Organizations: values.orgsConcatenated,
      Name: values.nombre,
      Dni: values.cc,
      Phone: `${values.codigoPais} ${values.telefono}`,
    };

    const response = await DataService.post('/processes/send_auditor_email_process', payload);

    dispatch(sendAuditorEmailSuccess(response.data));
    message.success('Proceso de auditor enviado exitosamente');
  } catch (error) {
    dispatch(sendAuditorEmailError(error.message));
    message.error(`Error al enviar el proceso de auditor: ${error.message}`);
  }
};

export const fetchUsersByClient = () => async (dispatch) => {
  try {
    dispatch(fetchUsersLoading());

    const selectedClientId = Cookies.get('selectedClientId');
    if (!selectedClientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }


    const url = `models/sm_user_fullroles_v?$filter=AD_Client_ID eq ${selectedClientId}`;


    const response = await DataService.get(url);

    if (response.data && response.data.records) {
      dispatch(fetchUsersSuccess(response.data.records));
    } else {
      dispatch(fetchUsersError('No se encontraron usuarios para este cliente.'));
    }
  } catch (error) {
    dispatch(fetchUsersError(error.message || 'Error al cargar los usuarios.'));
  }
};