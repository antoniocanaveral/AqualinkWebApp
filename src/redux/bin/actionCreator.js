import { message } from "antd";
import Cookies from 'js-cookie';
import { DataService } from "../../config/dataService/dataService";
import {
  registerBinLoading,
  registerBinSuccess,
  registerBinError,
  fetchBinsLoading,
  fetchBinsSuccess,
  fetchBinsError,
  updateBinLoading,
  updateBinSuccess,
  updateBinError
} from './actions';
import { handleApiError } from "../error/errorHandler";

const BATCH_SIZE = 100;

export const registerMultipleBins = (numberOfBins) => async (dispatch) => {
  dispatch(registerBinLoading());

  try {
    const adClientId = Cookies.get('selectedClientId');
    const adOrgId = Cookies.get('orgId');

    if (!adClientId || !adOrgId) {
      throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
    }

    // Obtener todos los bines existentes
    const existingBinsResponse = await DataService.get(`/models/sm_bin?$filter=AD_Org_ID eq ${adOrgId}`);
    const bins = existingBinsResponse.data?.records ?? [];

    const numericBins = bins
      .filter((b) => /^\d+$/.test(b.Name))
      .map((b) => parseInt(b.Name, 10));

    const lastBinNumber = numericBins.length > 0 ? Math.max(...numericBins) : 0;

    // Preparar todos los bines a registrar
    const allBinData = Array.from({ length: numberOfBins }, (_, i) => {
      const binNumber = lastBinNumber + i + 1;
      return {
        AD_Client_ID: Number(adClientId),
        AD_Org_ID: Number(adOrgId),
        name: binNumber.toString(),
        sm_status: 'ACTIVO',
        sm_description: `Bin número ${binNumber}`,
      };
    });

    // Dividir en batches
    const batches = [];
    for (let i = 0; i < allBinData.length; i += BATCH_SIZE) {
      batches.push(allBinData.slice(i, i + BATCH_SIZE));
    }

    let totalFailures = 0;

    for (const batch of batches) {
      const results = await Promise.allSettled(
        batch.map((bin) =>
          DataService.post(`/models/sm_bin`, bin)
        )
      );

      const failures = results.filter(r => r.status === 'rejected');
      totalFailures += failures.length;

      failures.forEach((fail, idx) => {
        console.error(`❌ Error registrando bin "${batch[idx].name}":`, fail.reason?.message || fail.reason);
      });
    }

    const successCount = numberOfBins - totalFailures;

    dispatch(registerBinSuccess({ count: successCount }));

    if (totalFailures > 0) {
      message.warning(`${successCount} bines creados con éxito. ${totalFailures} fallaron. Ver consola.`);
    } else {
      message.success(`${numberOfBins} bines creados exitosamente`);
    }

    dispatch(fetchBins());

  } catch (error) {
    dispatch(registerBinError(error.message));
    handleApiError(error, dispatch, registerBinError);
  }
};



// Registrar bin individual (para actualizaciones)
export const registerBin = (binData) => async (dispatch) => {
  dispatch(registerBinLoading());
  try {
    const adClientId = Cookies.get('selectedClientId');
    const adOrgId = Cookies.get('orgId');
    
    if (!adClientId || !adOrgId) {
      throw new Error('AD_Client_ID o AD_Org_ID no se encontraron en las cookies.');
    }

    const response = await DataService.post(`/models/sm_bin`, {
      AD_Client_ID: Number(adClientId),
      AD_Org_ID: Number(adOrgId),
      ...binData,
    });

    dispatch(registerBinSuccess(response.data));
    message.success('Bin registrado/actualizado con éxito');
    
  } catch (error) {
    dispatch(registerBinError(error.message));
    handleApiError(error, dispatch, registerBinError);
  }
};

// Actualizar bin existente
export const updateBin = (binId, updateData) => async (dispatch) => {
  dispatch(updateBinLoading());
  try {
    const response = await DataService.put(`/models/sm_bin/${binId}`, updateData);
    dispatch(updateBinSuccess(response.data));
    message.success('Bin actualizado con éxito');
    
    // Refrescar la lista de bines
    dispatch(fetchBins());
    
  } catch (error) {
    dispatch(updateBinError(error.message));
    handleApiError(error, dispatch, updateBinError);
  }
};

// Obtener bines
export const fetchBins = () => async (dispatch) => {
  dispatch(fetchBinsLoading());
  try {
    const adOrgId = Cookies.get('orgId');
    if (!adOrgId) throw new Error('Organización no encontrada en cookies.');

    const response = await DataService.get(`/models/sm_bin?$filter=AD_Org_ID eq ${adOrgId}&$orderby=name asc`);
    
    
    const orderResponse = []
    if (response.data?.records && response.data.records.length > 0) {
      // Ordenar los bines por nombre numérico
      orderResponse.push(...response.data.records.sort((a, b) => {
        const nameA = parseInt(a.Name, 10);
        const nameB = parseInt(b.Name, 10);
        return nameA - nameB;
      }));
    } 

    if (response.data?.records) {
        console.log('Bines obtenidos:', response.data.records);
      dispatch(fetchBinsSuccess(orderResponse));
    } else {
      dispatch(fetchBinsSuccess([]));
    }
    
  } catch (error) {
    dispatch(fetchBinsError(error.message));
    handleApiError(error, dispatch, fetchBinsError);
  }
};