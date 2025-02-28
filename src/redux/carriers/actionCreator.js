import { message } from "antd";
import { DataService } from "../../config/dataService/dataService";
import { fetchCarriersError, fetchCarriersLoading, fetchCarriersSuccess, registerCarrierError, registerCarrierLoading, registerCarrierSuccess, registerVehicleError, registerVehicleLoading, registerVehicleSuccess } from "./actions";
import Cookies from 'js-cookie';

export const registerCarrier = (carrierData) => async (dispatch) => {
    dispatch(registerCarrierLoading());
    try {
      const adClientId = Cookies.get('selectedClientId');
      const adOrgId = Cookies.get('orgId');
      if (!adClientId || !adOrgId) {
        throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
      }
      const payload = {
        AD_Client_ID: Number(adClientId),
        AD_Org_ID: 0,
        ...carrierData,
      };
      const response = await DataService.post(`/models/SM_Carrier`, payload);
      dispatch(registerCarrierSuccess(response.data));
      message.success('Transportista registrado con éxito');
      return response.data
    } catch (error) {
      dispatch(registerCarrierError(error.message));
      message.error(`Error al registrar el transportista: ${error.message}`);
    }
  };

  export const registerVehicle = (carrierId, vehicleData) => async (dispatch) => {
    dispatch(registerVehicleLoading());
    try {
      const adClientId = Cookies.get('selectedClientId');
      const adOrgId = Cookies.get('orgId');
      if (!adClientId || !adOrgId) {
        throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
      }
      const payload = {
        AD_Client_ID: Number(adClientId),
        AD_Org_ID: 0,
        SM_Carrier_ID: carrierId,
        ...vehicleData,
      };
      const response = await DataService.post(`/models/SM_Vehicle`, payload);
      dispatch(registerVehicleSuccess(response.data));
      return response.data;
    } catch (error) {
      dispatch(registerVehicleError(error.message));
      throw new Error(error.message);
    }
  };


  export const fetchCarriers = () => async (dispatch) => {
    dispatch(fetchCarriersLoading()); // Indica que la solicitud ha comenzado
    try {
      const selectedClientId = Cookies.get('selectedClientId');
      if (!selectedClientId) {
        throw new Error('Org ID no encontrado en las cookies.');
      }
  
      const response = await DataService.get(
        `/models/sm_carrier?$filter=AD_Client_ID eq ${selectedClientId}&$expand=sm_vehicle`
      );
  
      if (response.data && response.data.records) {
        dispatch(fetchCarriersSuccess(response.data.records)); // Envía los datos al reducer
      } else {
        dispatch(fetchCarriersError('No se encontraron transportistas para esta organización.'));
      }
    } catch (error) {
      message.error(`Error al cargar los transportistas: ${error.message}`);
      dispatch(fetchCarriersError(error.message || 'Error al cargar los transportistas.'));
    }
  };