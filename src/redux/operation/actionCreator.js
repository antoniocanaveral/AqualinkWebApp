// src/redux/operation/actionCreator.js

import { DataService } from '../../config/dataService/dataService';
import {
  opScreenTaskLoading,
  opScreenTaskLoaded,
  opScreenTaskError,
  opShrimpFarmingTransferLoading,
  opShrimpFarmingTransferLoaded,
  opShrimpFarmingTransferError,
  opPlannedFarmingLoaded,
  opPlannedHarvestingLoaded,
  opPlannedTransfersLoaded,
} from './actions';
import Cookies from 'js-cookie';

// Función existente para inicializar la pantalla de tareas
export const initTaskScreen = (selectedPoolId) => async (dispatch) => {
  try {
    dispatch(opScreenTaskLoading());

    let types = [];
    let screens = [];
    let lastItem = null;
    let campaign = null;
    let lunarCalendars = [];
    let lunarPerigee = [];
    let waterDays = [];

    if (selectedPoolId) {
      const campaignResponse = await DataService.get(
        `/models/c_campaign?$filter=M_Warehouse_ID eq ${selectedPoolId} AND IsActive eq true AND IsClosed eq false`
      );
      campaign = campaignResponse.data?.records?.[0] || null;

      if (campaign) {
        const typesResponse = await DataService.get(`/models/sm_operationtype`);
        types = typesResponse.data?.records || [];

        const screensResponse = await DataService.get(
          `/models/sm_campaignitem?$filter=C_Campaign_ID eq ${campaign.id} AND IsActive eq true&$orderby=SM_OperationType_ID`
        );
        screens = screensResponse.data?.records || [];

        let maxDate = null;
        for (let d of screens) {
          if (maxDate == null || d.SM_PlannedDate > maxDate) {
            maxDate = d.SM_PlannedDate;
            lastItem = d;
          }
        }

        const lunarCalendarsResponse = await DataService.get(
          `/models/sm_lunarcalendar?$orderby=StartDate asc`
        );
        lunarCalendars = lunarCalendarsResponse.data?.records || [];

        const lunarPerigeeResponse = await DataService.get(`/models/SM_LunarPerigee`);
        lunarPerigee = lunarPerigeeResponse.data?.records || [];

        const waterDaysResponse = await DataService.get(`/models/SM_WaterDays`);
        waterDays = waterDaysResponse.data?.records || [];
      }
    }

    dispatch(
      opScreenTaskLoaded({
        types,
        screens,
        lastItem,
        campaign,
        lunarCalendars,
        lunarPerigee,
        waterDays,
      })
    );
  } catch (err) {
    dispatch(opScreenTaskError(err.message || 'Error al cargar la pantalla de tareas'));
  }
};

// Nueva función para obtener datos de sm_shrimp_farming_transfer_v
export const getShrimpFarmingTransferScreen = () => async (dispatch) => {
  const selectedOrgId = Cookies.get('orgId');

  try {
    dispatch(opShrimpFarmingTransferLoading());

    // Asegúrate de que la API permite filtrar por organización.
    // Ajusta la URL según cómo tu API maneje los filtros.
    const response = await DataService.get(
      `/models/sm_shrimp_farming_transfer_v?$filter=AD_Org_ID eq ${selectedOrgId}`
    );

    const records = response.data?.records || [];

    // Procesar los datos en las tres listas
    const plannedFarming = records
      .filter(record => record.SM_CoordinationType.id === "SIEMBRA")
      .map(record => ({
        preebreedingpoolname: record.preebreedingpoolname,
        SM_TankTotalPlanting: record.SM_TankTotalPlanting,
        SM_PreBreedingPool: record.SM_PreBreedingPool,
        C_Campaign_ID: record.C_Campaign_ID,
        SM_FishingNotification: record.SM_FishingNotification,
        SM_PlannedDate: record.SM_PlannedDate,
      }));

    const plannedHarvesting = records
      .filter(record => record.SM_CoordinationType.id === "PESCA")
      .map(record => ({
        SM_FishingNotification: record.SM_FishingNotification,
        SM_FishingDate: record.SM_FishingDate,
        SM_Biomass: record.SM_Biomass,
        SM_RequestedPL: record.SM_RequestedPL,
        preebreedingpoolname: record.preebreedingpoolname,
        SM_FishingVolume: record.SM_FishingVolume,
        SM_Pool: record.M_Warehouse_ID.identifier,
        SM_TransferDate: record.SM_TransferDate,

      }));

    // Para plannedTransfers, se basa en plannedHarvesting
    const plannedTransfers = plannedHarvesting.map((harvest) => ({
      SM_Biomass: harvest.SM_Biomass, // Asumiendo que "SM_Biomass" se relaciona con "SM_RequestedPL"
      SM_Pool: harvest.SM_Pool, // Ajusta según tus datos reales
      preebreedingpoolname: harvest.preebreedingpoolname,
      SM_FishingNotification: harvest.SM_FishingNotification,
      SM_TransferDate: harvest.SM_TransferDate,


    }));

    // Despachar las acciones para las tres listas
    dispatch(opPlannedFarmingLoaded(plannedFarming));
    dispatch(opPlannedHarvestingLoaded(plannedHarvesting));
    dispatch(opPlannedTransfersLoaded(plannedTransfers));
    
    // Opcional: también puedes despachar la acción original si aún la necesitas
    dispatch(opShrimpFarmingTransferLoaded(records));
  } catch (error) {
    dispatch(
      opShrimpFarmingTransferError(
        error.message || 'Error al cargar las transferencias de cultivo de camarón'
      )
    );
  }
};
