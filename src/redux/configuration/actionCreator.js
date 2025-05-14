
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
  cSalesRegionCreated,
  cSalesRegionLoading,
} from './actions';
import { handleApiError } from '../error/errorHandler';
import { loadUserAccess } from '../authentication/actionCreator';

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
    handleApiError(err, dispatch, smBusinessGroupError);

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
    handleApiError(err, dispatch, adClientError);

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
    handleApiError(err, dispatch, cRegionError);

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
    handleApiError(err, dispatch, cCityError);

  }
};



export const createAdOrg = (orgData, org_type) => async (dispatch) => {
  const selectedClientId = Cookies.get('selectedClientId');
  try {
    dispatch(adOrgLoading());


    const payload = {
      AD_Client_ID: selectedClientId,
      Name: orgData.Name,
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
      SM_OrgType: orgData.SM_OrgType,
      SM_MinisterialAgreement: orgData.sm_ministerialagreement,
      SM_SafetyCertificate: orgData.sm_safetycertificate,
      SM_MainlandOrIsland: orgData.SM_MainlandOrIsland,
      taxid_rl: orgData.taxid,
      name_rl: orgData.name_rl,
      email_rl: orgData.email_rl,
      sm_installedcapacitylarva: orgData.sm_installedcapacitylarva,
      sm_productionprotocol: orgData.sm_productionprotocol,
      sm_labtype: orgData.sm_labtype,
      sm_protocolharvest: orgData.sm_protocolharvest,
      sm_processingcapacityweekly: orgData.sm_processingcapacityweekly,
      sm_processingcapacitydaily: orgData.sm_processingcapacitydaily
    };

    const response = await DataService.post('/models/ad_org', payload);

    if (response.data) {
      const warehouseGeneral = {
        AD_Client_ID: selectedClientId,
        AD_Org_ID: response.data.id,
        Name: `GENERAL ${response.data.Name}`,
        sm_pooltype: "GENERAL",
        SM_PoolSize: 0,
        SM_OppDepth: 0.3,
        SM_PlantingDepth: 0.2,
        sm_transferdepth: 0.2,
      };
      const warehouseResponse = await DataService.post('/models/m_warehouse', warehouseGeneral);

      if (warehouseResponse.data) {
        const LocatorGeneral = {
          AD_Client_ID: selectedClientId,
          AD_Org_ID: response.data.id,
          M_Warehouse_ID: warehouseResponse.data.id,
          X: "0",
          Y: "0",
          Z: "0"
        };
        await DataService.post('/models/m_locator', LocatorGeneral);
      }

      if (org_type !== "FARM" && org_type !== "LAB" && org_type !== "CUSTODY") {
        console.error(`Tipo de organización inválido: ${org_type}. No se creará el C_BPartner.`);
        return; // Salir si org_type no es válido
      }

      // Determinar el tipo de grupo según org_type (sin valor por defecto)
      const groupValue = org_type === "FARM" ? "FARM"
        : org_type === "LAB" ? "LAB"
          : "CUSTODY"; // Solo se asigna si org_type es válido

      // Buscar el C_BP_Group_ID correspondiente al value y AD_Client_ID
      let c_bp_group_id;
      try {
        const groupResponse = await DataService.get(`/models/c_bp_group?$filter=AD_Client_ID eq ${selectedClientId} and Value eq '${groupValue}'`);

        // Verificar si se encontró un registro
        if (groupResponse.data && groupResponse.data.records && groupResponse.data.records.length > 0) {
          c_bp_group_id = groupResponse.data.records[0].id; // Obtener el c_bp_group_id del primer registro
        } else {
          console.error(`No se encontró un C_BP_Group con value=${groupValue} y AD_Client_ID=${selectedClientId}. No se creará el C_BPartner.`);
          return; // Salir sin crear el C_BPartner
        }
      } catch (error) {
        console.error('Error al buscar C_BP_Group:', error);
        return; // Salir en caso de error
      }

      // Create C_BPartner record
      const bpartnerPayload = {
        AD_Client_ID: selectedClientId,
        AD_Org_ID: response.data.id,
        IsActive: 'Y',
        Value: orgData.email_rl, // Using email_rl as the value
        Name: orgData.Name, // Using organization name
        C_BP_Group_ID: c_bp_group_id, // Usar el ID dinámico obtenido
        IsCustomer: 'Y',
        IsVendor: 'N',
        IsEmployee: 'N',
        IsSalesRep: 'N',
        IsSummary: 'N',
        IsOneTime: 'N',
        IsProspect: 'N',
        IsTaxExempt: 'N',
        IsDiscountPrinted: 'Y',
        SendEMail: 'N',
        IsPOTaxExempt: 'N',
        IsManufacturer: 'N',
        Is1099Vendor: 'N',
        SO_CreditLimit: 0,
        SO_CreditUsed: 0,
        AcqusitionCost: 0,
      };

      const bpartnerResponse = await DataService.post('/models/c_bpartner', bpartnerPayload);
      console.log('C_BPartner created:', bpartnerResponse.data);


      dispatch(adOrgCreated(response.data));
      Cookies.set('CreatedOrg', JSON.stringify(response.data));
      Cookies.set('CreatedOrgState', 'pending');

      const payload2 = {
        AD_OrgType_ID: org_type === "FARM" ? 1000001
          : org_type === "LAB" ? 1000002
            : org_type === "CUSTODY" ? 1000003
              : 1000004,
        EMail: orgData.email_rl
      };

      const responseinfo = await DataService.put(`/models/ad_orginfo/${response.data.id}`, payload2);
      console.log(responseinfo.data);

      const sectors = [];

      if (org_type === "FARM" || org_type === "LAB") {
        dispatch(cSalesRegionLoading());

        for (let i = 1; i <= orgData.c_sales_region; i++) {
          const sectorPayload = {
            AD_Client_ID: selectedClientId,
            AD_Org_ID: response.data.id,
            Name: org_type === "FARM" ? `Sector ${i}` : `Módulo ${i}`,
          };

          const sectorResponse = await DataService.post('/models/c_salesregion', sectorPayload);
          if (sectorResponse.data) {
            sectors.push(sectorResponse.data);
          }
        }
        Cookies.set(org_type === "FARM" ? 'Sectors' : 'Modules', JSON.stringify(sectors));
        dispatch(cSalesRegionCreated(sectors));
      }

      return response;
    } else {
      const errorMsg = 'No se pudo crear la organización: respuesta no válida.';
      dispatch(adOrgError(errorMsg));
      throw new Error(errorMsg);
    }
  } catch (err) {
    dispatch(adOrgError(err.message || 'Error al crear la organización.'));
    handleApiError(err, dispatch, adOrgError);
    throw err;
  }
};

export const createPools = (pools) => async (dispatch) => {
  const selectedClientId = Cookies.get('selectedClientId');
  const CreatedOrg = JSON.parse(Cookies.get('CreatedOrg'));
  const currentUserId = selectedClientId;

  try {
    dispatch(poolsLoading());
    console.log(pools)
    const transformedPools = pools.map(pool => ({
      AD_Client_ID: selectedClientId,
      AD_Org_ID: CreatedOrg.id,
      Name: pool.identificador,
      sm_pooltype: pool.type,
      SM_PoolSize: pool.sm_poolsize,
      SM_OppDepth: pool.sm_oppdepth,
      sm_profundidadmesa: pool.sm_profundidadmesa,
      sm_profundidadprestamo: pool.sm_profundidadprestamo,
      sm_mechanicalaeration: pool.sm_mechanicalaeration,
      feeding_method: pool.feeding_method ? "AUTOMATIC" : "MANUAL",
      food_quantity: pool.food_quantity,
      growth_days: pool.growth_days,
      C_SalesRegion_ID: pool.c_salesregion_id,
      SM_Geolocation: pool.perimeter ? JSON.stringify(pool.perimeter) : null
    }));

    console.log(transformedPools);

    const poolResponses = await Promise.all(
      transformedPools.map(pool =>
        DataService.post('/models/m_warehouse', pool)
      )
    );
    const createdPools = poolResponses.map(res => res.data);


    const locatorResponses = await Promise.all(
      createdPools.map(pool => {
        const locatorPayload = {
          AD_Client_ID: selectedClientId,
          AD_Org_ID: CreatedOrg.id,
          M_Warehouse_ID: pool.id,
          X: "0",
          Y: "0",
          Z: "0"
        };
        return DataService.post('/models/m_locator', locatorPayload);
      })
    );


    console.log("Locators creados:", locatorResponses.map(res => res.data));


    const createdFeeders = await Promise.all(
      pools.map(async (pool, index) => {
        const poolId = createdPools[index].id;
        const feeders = pool.feeders || [];
        console.log("feeders", feeders);
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

    await dispatch(loadUserAccess())
    return { pools: createdPools, feeders: createdFeeders };

  } catch (err) {
    dispatch(poolsError(err.message || 'Error al crear piscinas y/o alimentadores'));
    handleApiError(err, dispatch, poolsError);
    throw err;
  }
};


export const fetchBrandFeeders = () => async (dispatch) => {
  try {
    dispatch(smBrandFeedersLoading());

    const response = await DataService.get('/models/SM_Brand_Feeders');

    if (response.data && response.data.records) {
      dispatch(smBrandFeedersLoaded(response.data.records));
    } else {
      dispatch(smBrandFeedersError('No se encontraron registros de marcas de alimentadores.'));
    }
  } catch (err) {
    dispatch(smBrandFeedersError(err.message || 'Error al cargar las marcas de alimentadores.'));
    handleApiError(err, dispatch, smBrandFeedersError);

  }
};