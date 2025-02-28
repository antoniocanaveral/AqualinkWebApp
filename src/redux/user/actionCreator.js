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



export const createUserFarm = (values, selectedOrgId) => async (dispatch) => {
  try {
    dispatch(createUserLoading());

    // Obtén el clientId desde las cookies (o desde donde lo manejes)
    const clientId = Cookies.get('selectedClientId');
    if (!clientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }

    // 1. Crear el usuario en ad_user
    const userPayload = {
      AD_Client_ID: parseInt(clientId, 10),
      AD_Org_ID: selectedOrgId ? selectedOrgId: 0,
      Name: values.nombre,
      Password: values.claveAcceso,
      EMail: values.correo,
      Phone: values.telefono,
      TaxID: values.cc, // O el campo que corresponda (por ejemplo, cédula o tax_id)
    };

    const userResponse = await DataService.post('models/ad_user', userPayload);

    // Se asume que la respuesta incluye el id del usuario creado (por ejemplo, en userResponse.data.id)
    if (!userResponse.data || !userResponse.data.id) {
      throw new Error('Error al crear el usuario');
    }
    const adUserId = userResponse.data.id;

    // 2. Asignar el rol en ad_user_roles
    const rolePayload = {
      AD_Client_ID: parseInt(clientId, 10),
      AD_Org_ID: 0,
      AD_User_ID: adUserId,
      AD_Role_ID: values.rol,
    };

    await DataService.post('models/ad_user_roles', rolePayload);

    // 3. Si se seleccionaron piscinas (y el rol tiene warehouses) postea en sm_user_warehouses
    // values.pools es un array de IDs de piscinas
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


export const fetchUsersByClient = () => async (dispatch) => {
  try {
    dispatch(fetchUsersLoading());

    const selectedClientId = Cookies.get('selectedClientId');
    if (!selectedClientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }

    // Construcción de la URL con el Client ID
    const url = `models/sm_user_fullroles_v?$filter=AD_Client_ID eq ${selectedClientId}`;

    // Llamada a la API
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