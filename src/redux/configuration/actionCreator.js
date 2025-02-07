// src/redux/operation/actionCreator.js
import Cookies from 'js-cookie';

import { DataService } from '../../config/dataService/dataService';
import {
  smBusinessGroupLoading,
  smBusinessGroupLoaded,
  smBusinessGroupError,
  adClientLoading,
  adClientLoaded,
  adClientError,
  cRegionLoading,
  cRegionLoaded,
  cRegionError,
  cCityLoading,
  cCityLoaded,
  cCityError,
  adOrgLoading,
  adOrgCreated,
  adOrgError,
  poolsLoading,
  poolsCreated,
  poolsError,
  smBrandFeedersLoading,
  smBrandFeedersLoaded,
  smBrandFeedersError,
} from './actions';

export const fetchBusinessGroups = () => async (dispatch) => {
  try {
    dispatch(smBusinessGroupLoading());

    const response = await DataService.get('/models/sm_businessgroup');

    if (response.data && response.data.records) {
      dispatch(smBusinessGroupLoaded(response.data.records));
    } else {
      dispatch(smBusinessGroupError('No se encontraron registros de grupos de negocio.'));
    }
  } catch (err) {
    dispatch(smBusinessGroupError(err.message || 'Error al cargar los grupos de negocio.'));
  }
};


export const fetchAdClient = () => async (dispatch) => {
  try {
    dispatch(adClientLoading());
    const selectedClientId = Cookies.get('selectedClientId');
    if (!selectedClientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }

    const response = await DataService.get(`/models/ad_client?$filter=ad_client_id eq ${selectedClientId}`);

    if (response.data && response.data.records) {
      dispatch(adClientLoaded(response.data.records[0]));
    } else {
      dispatch(adClientError('No se encontró el registro para el ad_client.'));
    }
  } catch (err) {
    dispatch(adClientError(err.message || 'Error al cargar el ad_client.'));
  }
};


export const fetchRegions = () => async (dispatch) => {
  try {
    dispatch(cRegionLoading());
    const cCountryId = 171;
    if (!cCountryId) {
      throw new Error('Country ID no encontrado en las cookies.');
    }

    const response = await DataService.get(`/models/c_region?$filter=c_country_id eq ${cCountryId}`);

    if (response.data && response.data.records) {
      dispatch(cRegionLoaded(response.data.records));
    } else {
      dispatch(cRegionError('No se encontraron registros de regiones.'));
    }
  } catch (err) {
    dispatch(cRegionError(err.message || 'Error al cargar las regiones.'));
  }
};


export const fetchCity = (regionId) => async (dispatch) => {
  try {
    dispatch(cCityLoading());

    const response = await DataService.get(`models/c_city?$filter=C_Region_ID eq ${regionId}`);

    if (response.data && response.data.records) {
      dispatch(cCityLoaded(response.data.records));
    } else {
      dispatch(cCityError('No se encontraron registros de ciudades.'));
    }
  } catch (err) {
    dispatch(cCityError(err.message || 'Error al cargar las ciudades.'));
  }
};


// src/redux/operation/actionCreator.js

export const createAdOrg = (orgData) => async (dispatch) => {
  const selectedClientId = Cookies.get('selectedClientId');
  try {
    dispatch(adOrgLoading());

    const payload = {
      AD_Client_ID: selectedClientId, 
      Name: orgData.Name,
      business_group_id: orgData.business_group_id,
      legalentitytype: orgData.legalentitytype, 
      businessname: orgData.businessname,
      TaxID: orgData.taxid,
      SM_LocationName: orgData.sm_locationname,
      Phone: orgData.phone,
      Phone2: orgData.phone2,
      SM_Latitude: orgData.sm_latitude,
      SM_Longitude: orgData.sm_longitude,
      C_Region_ID: orgData.c_region_id,
      C_City_ID: orgData.c_city_id,
      water_system: orgData.water_system,
      SM_ProductionType: orgData.sm_productiontype,
      SM_CodigoVAP: orgData.sm_codigovap,
      SM_MinisterialAgreement: orgData.sm_ministerialagreement,
      SM_SafetyCertificate: orgData.sm_safetycertificate,
      SM_MainlandOrIsland: orgData.SM_MainlandOrIsland,
      taxid_rl: orgData.taxid_rl,
      name_rl: orgData.name_rl,
      email_rl: orgData.email_rl,

    };

    const response = await DataService.post('/models/ad_org', payload);

    if (response.data) {
      console.log(response)
      dispatch(adOrgCreated(response.data));
      Cookies.set('CreatedOrg', JSON.stringify(response.data));
      Cookies.set('CreatedOrgState', 'pending');
      const payload2={
        AD_OrgType_ID: 1000001
      }

      const responseinfo = await DataService.put(`/models/ad_orginfo/${response.data.id}`, payload2);
      console.log(responseinfo.data)

      return response;
    } else {
      const errorMsg = 'No se pudo crear la organización: respuesta no válida.';
      dispatch(adOrgError(errorMsg));
      throw new Error(errorMsg);
    }
  } catch (err) {
    dispatch(adOrgError(err.message || 'Error al crear la organización.'));
    throw err;
  }
};


// src/redux/operation/actionCreator.js

export const createPools = (pools) => async (dispatch) => {
  const selectedClientId = Cookies.get('selectedClientId');
  const CreatedOrg = JSON.parse(Cookies.get('CreatedOrg'));
  const currentUserId = selectedClientId;

  try {
    dispatch(poolsLoading());
    
    const transformedPools = pools.map(pool => ({
      AD_Client_ID: selectedClientId,
      AD_Org_ID: CreatedOrg.id,
      Name: pool.identificador,
      sm_pooltype: pool.type,
      SM_PoolSize: pool.sm_poolsize,
      SM_OppDepth: pool.sm_oppdepth,
      SM_PlantingDepth: pool.sm_plantingdepth,
      sm_transferdepth: pool.sm_transferdepth,
      sm_mechanicalaeration: pool.sm_mechanicalaeration,
      feeding_method: pool.feeding_method ? "AUTOMATIC" : "MANUAL", 
      food_quantity: pool.food_quantity,
      growth_days: pool.growth_days,
      SM_Geolocation: pool.nodes ? JSON.stringify(pool.nodes) : null
    }));

    const poolResponses = await Promise.all(
      transformedPools.map(pool => 
        DataService.post('/models/m_warehouse', pool)
      )
    );
    const createdPools = poolResponses.map(res => res.data);

    const createdFeeders = await Promise.all(
      pools.map(async (pool, index) => {
        const poolId = createdPools[index].id; 
        const feeders = pool.feeders || [];
        console.log("feeders", feeders)
        return Promise.all(
          feeders.map(feeder => 
            DataService.post('/models/SM_Feeders', {
              AD_Client_ID: selectedClientId,
              AD_Org_ID: CreatedOrg?.id,
              sm_brand_feeders_id: feeder?.marca,
              integration: !!feeder?.integration,
              code: feeder?.numero,
              M_Warehouse_ID: poolId,
              createdBy: currentUserId,
              updatedBy: currentUserId
            })
          )
        );
      })
    ).then(results => results.flat()); 

    dispatch(poolsCreated({ 
      pools: createdPools,
      feeders: createdFeeders.map(res => res.data) 
    }));
    
    return { pools: createdPools, feeders: createdFeeders };

  } catch (err) {
    dispatch(poolsError(err.message || 'Error al crear piscinas y/o alimentadores'));
    throw err;
  }
};


export const fetchBrandFeeders = () => async (dispatch) => {
  try {
    dispatch(smBrandFeedersLoading());

    // Hacer la solicitud a la API
    const response = await DataService.get('/models/SM_Brand_Feeders');

    if (response.data && response.data.records) {
      dispatch(smBrandFeedersLoaded(response.data.records));
    } else {
      dispatch(smBrandFeedersError('No se encontraron registros de marcas de alimentadores.'));
    }
  } catch (err) {
    dispatch(smBrandFeedersError(err.message || 'Error al cargar las marcas de alimentadores.'));
  }
};