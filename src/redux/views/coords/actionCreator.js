import Cookies from 'js-cookie';
import actions from './actions';
import { message } from 'antd';
import { DataService } from '../../../config/dataService/dataService';

const { fetchCoordInfoLoading, fetchCoordInfoSuccess, fetchCoordInfoError } = actions;

const fetchCoordinationInfo = () => {
  return async (dispatch) => {
    try {
      console.log("Ejecutando fetchCoordinationInfo...");

      dispatch(fetchCoordInfoLoading());

      const selectedClientID = Cookies.get('selectedClientId');
      console.log("Org ID obtenido de cookies:", selectedClientID);

      if (!selectedClientID) {
        throw new Error('Org ID no encontrado en las cookies.');
      }

      const selectedOrgID = Cookies.get('orgId');
      console.log("Org ID obtenido de cookies:", selectedOrgID);

      if (!selectedOrgID) {
        throw new Error('Org ID no encontrado en las cookies.');
      }

      console.log(`Consultando coordinación info para la organización con ID: ${selectedOrgID}`);
      const response = await DataService.get(`/models/sm_coordination_info_v?$filter=AD_Client_ID eq ${selectedClientID} AND bp_ad_org_id eq ${selectedOrgID}  AND sm_coordinationtype eq 'PESCA' &$orderby=Name`);
      console.log("Respuesta de la API para fetchCoordinationInfo:", response);

      if (response.data && response.data.records && response.data.records.length > 0) {
        console.log("Coordinaciones encontradas:", response.data.records);
        dispatch(fetchCoordInfoSuccess(response.data.records ));
      } else {
        console.log("No se encontraron coordinaciones para esta organización.");
        dispatch(fetchCoordInfoSuccess( [] ));
      }
    } catch (error) {
      console.error("Error en fetchCoordinationInfo:", error);
      dispatch(fetchCoordInfoError({ error: error.message || 'Error al cargar la información de coordinación.' }));
      message.error(`Error al cargar la información de coordinación: ${error.message}`);
    }
  };
};

export { fetchCoordinationInfo };
