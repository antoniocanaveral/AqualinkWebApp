

import { message } from 'antd';
import { DataService } from '../../config/dataService/dataService';
import {
  opInventoryLoading,
  opInventoryLoaded,
  opInventoryError,
  opCatalogLoading,
  opCatalogLoaded,
  opCatalogError,
  opAddProductError,
  opAddProductLoaded,
  opAddProductLoading,
  fetchSecurityKitsLoading,
  fetchSecurityKitsSuccess,
  fetchSecurityKitsError,
  addSecurityKitSuccess,
  addSecurityKitError,
  addSecurityKitLoading,

} from './actions';

import Cookies from 'js-cookie';
import { handleApiError } from '../error/errorHandler';


export const fetchInventory = (org_type) => async (dispatch) => {
  try {
    dispatch(opInventoryLoading());
    const clientId = Cookies.get('selectedClientId');
    const adOrg = Cookies.get('orgId')

    if (!clientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }
    const response = await DataService.get(`/models/m_product_stock_extended_v1?$filter=AD_Client_ID eq  ${clientId} AND AD_Org_ID eq ${adOrg} AND org_type eq '${org_type}'`);

    if (response.data && response.data.records) {
      const records = response.data.records;

      const categories = records.reduce((acc, product) => {
        const category = product.M_Product_Category_ID?.identifier || 'Sin Categoría';

        if (!acc[category]) {
          acc[category] = [];
        }

        acc[category].push(product);
        return acc;
      }, {});

      dispatch(opInventoryLoaded(categories));
    } else {
      dispatch(opInventoryError('No se encontraron registros de inventario.'));
    }
  } catch (err) {
    dispatch(opInventoryError(err.message || 'Error al cargar el inventario.'));
    handleApiError(err, dispatch, opInventoryError);

  }
};


const fetchAllCatalogRecords = async (filterValue) => {
  const limit = 300;
  let allRecords = [];
  let lastId = 0;
  let hasMore = true;

  while (hasMore) {
    const response = await DataService.get(
      `/models/m_product_catalog?$filter=org_type eq '${filterValue}' and M_Product_ID gt ${lastId}&limit=${limit}&orderBy=M_Product_ID`
    );

    const records = response.data?.records || [];
    allRecords.push(...records);

    if (records.length < limit) {
      hasMore = false;
    } else {
      // 👇 Aquí accedemos al ID real dentro del objeto
      lastId = records[records.length - 1].M_Product_ID.id;
    }
  }

  return allRecords;
};



export const fetchProductCatalogFarm = () => async (dispatch) => {
  try {
    dispatch(opCatalogLoading());
    const records = await fetchAllCatalogRecords('FARM');
    console.log(records)
    const catalogsByCategory = reduceByCategory(records);
    dispatch(opCatalogLoaded(catalogsByCategory));
  } catch (err) {
    dispatch(opCatalogError(err.message || 'Error al cargar FARM.'));
    handleApiError(err, dispatch, opCatalogError);
  }
};

export const fetchProductCatalogLab = () => async (dispatch) => {
  try {
    dispatch(opCatalogLoading());
    const records = await fetchAllCatalogRecords('LAB');
    const catalogsByCategory = reduceByCategory(records);
    dispatch(opCatalogLoaded(catalogsByCategory));
  } catch (err) {
    dispatch(opCatalogError(err.message || 'Error al cargar LAB.'));
    handleApiError(err, dispatch, opCatalogError);
  }
};

export const fetchProductCatalogCustody = () => async (dispatch) => {
  try {
    dispatch(opCatalogLoading());
    const records = await fetchAllCatalogRecords('CUSTODY');
    const catalogsByCategory = reduceByCategory(records);
    dispatch(opCatalogLoaded(catalogsByCategory));
  } catch (err) {
    dispatch(opCatalogError(err.message || 'Error al cargar CUSTODY.'));
    handleApiError(err, dispatch, opCatalogError);
  }
};

const reduceByCategory = (records) =>
  records.reduce((acc, catalog) => {
    const category = catalog.M_Product_Category_ID?.identifier || 'Sin Categoría';
    if (!acc[category]) acc[category] = [];
    acc[category].push(catalog);
    return acc;
  }, {});




/**
 * RECEPCIÓN (M_InOut) + FACTURA (C_Invoice) enlazadas
 * ➜ iDempiere genera MatchInv + CostDetail con costo real.
 */
export const addProductToInventory = (productData) => async (dispatch) => {
  try {
    dispatch(opAddProductLoading());

    /* ----------------------------------------------------------------
     * 0. Credenciales
     * ---------------------------------------------------------------- */
    const clientId = Cookies.get('selectedClientId');
    const orgId = Cookies.get('orgId');
    if (!clientId || !orgId) throw new Error('Faltan credenciales');

    /* ================================================================
     * 1. RECEPCIÓN (cabecera + línea)
     * ================================================================ */
    const inOutResp = await DataService.post('/models/M_InOut', {
      AD_Client_ID: +clientId,
      AD_Org_ID: +orgId,
      C_DocType_ID: 1000014,                // MMR
      MovementDate: new Date().toISOString().split('T')[0],
      C_BPartner_ID: productData.C_BPartner_ID,
      C_BPartner_Location_ID: productData.C_BPartner_Location_ID,
      Description: 'Recepción (ingreso inventario)',
      IsSOTrx: false,
      MovementType: 'V+',
      M_Warehouse_ID: productData.M_Warehouse_ID
    });
    const mInOutId = inOutResp.data.id;

    const inOutLineResp = await DataService.post('/models/M_InOutLine', {
      AD_Client_ID: +clientId,
      AD_Org_ID: +orgId,
      M_InOut_ID: mInOutId,
      Line: 10,
      M_Product_ID: productData.M_Product_ID,
      MovementQty: productData.quantity,
      QtyEntered: productData.quantity,
      C_UOM_ID: 1000000,
      M_Locator_ID: productData.M_Locator_ID,
      Description: 'Recepción de producto',
      IsActive: true
    });
    const mInOutLineId = inOutLineResp.data.id;

    /* ================================================================
     * 2. FACTURA (cabecera + línea enlazada)
     * ================================================================ */
    const invoiceResp = await DataService.post('/models/C_Invoice', {
      AD_Client_ID: +clientId,
      AD_Org_ID: +orgId,
      C_DocType_ID: 1000005,
      DateInvoiced: new Date().toISOString().split('T')[0],
      C_BPartner_ID: productData.C_BPartner_ID,
      C_BPartner_Location_ID: productData.C_BPartner_Location_ID,
      M_PriceList_ID: 1000000,
      Description: 'Factura de compra de inventario',
      IsSOTrx: false
    });
    const cInvoiceId = invoiceResp.data.id;

    await DataService.post('/models/C_InvoiceLine', {
      AD_Client_ID: +clientId,
      AD_Org_ID: +orgId,
      C_Invoice_ID: cInvoiceId,
      Line: 10,
      M_Product_ID: productData.M_Product_ID,
      PriceList: productData.priceList,
      PriceActual: productData.priceList,
      PriceEntered: productData.priceList,
      QtyInvoiced: productData.quantity,
      QtyEntered: productData.quantity,
      C_UOM_ID: 1000000,
      C_Tax_ID: 1000000,
      LineTotalAmt: productData.priceList * productData.quantity,
      M_InOutLine_ID: mInOutLineId          // 🔗 enlace para MatchInv
    });

    /* ================================================================
     * 3. Completar documentos
     * ================================================================ */
    await DataService.put(`/models/M_InOut/${mInOutId}`, { 'doc-action': 'CO' });
    await DataService.put(`/models/C_Invoice/${cInvoiceId}`, { 'doc-action': 'CO' });

    /* ================================================================
     * 4. Ejecutar Costing Run (CostCreate) para generar CostDetail
     * ================================================================ */
    await DataService.post('/processes/m_cost-create', {
      AD_Client_ID: +clientId,
      AD_Org_ID: 0,
      DateAcct: new Date().toISOString().split('T')[0],
      M_Product_ID: productData.M_Product_ID     // 👈 producto válido
    });


    /* ================================================================
     * 5. Verificar CostDetail
     * ================================================================ */
    const costResp = await DataService.get(
      `/models/M_CostDetail?filter=M_InOutLine_ID eq ${mInOutLineId}`
    );

    if (costResp.data.length === 0) {
      console.warn('⚠️  CostDetail aún no se creó; revisa configuración de costeo.');
    } else {
      console.log('✅ CostDetail generado:', costResp.data[0]);
    }

    dispatch(opAddProductLoaded());
    return true;
  } catch (error) {
    console.error('Error en el proceso:', error);
    let msg = error.message;
    if (error.response?.data?.summary) {
      try {
        msg = JSON.parse(error.response.data.summary).message || msg;
      } catch { /* ignore */ }
    }
    dispatch(opAddProductError(msg));
    handleApiError(error, dispatch, opAddProductError);
    return false;
  }
};



export const fetchSecurityKits = (kitType) => async (dispatch) => {
  try {
    dispatch(fetchSecurityKitsLoading());

    const selectedClientId = Cookies.get('selectedClientId');
    if (!selectedClientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }

    const filterType = kitType ? `AND sm_kittype eq '${kitType}'` : '';
    const response = await DataService.get(`/models/SM_SecurityKits?$filter=AD_Client_ID eq ${selectedClientId} ${filterType}&$select=SM_KitCode,SM_Stamp1,SM_Stamp2,SM_Stamp3,SM_Stamp4,SM_Tag,SM_KitType`);

    if (response.data && response.data.records) {
      dispatch(fetchSecurityKitsSuccess(response.data.records));
    } else {
      dispatch(fetchSecurityKitsError('No se encontraron kits de seguridad.'));
    }
  } catch (err) {
    dispatch(fetchSecurityKitsError(err.message || 'Error al cargar los kits de seguridad.'));
    handleApiError(err, dispatch, fetchSecurityKitsError);

  }
};




export const addSecurityKit = (kitData) => async (dispatch) => {
  try {
    dispatch(addSecurityKitLoading());

    const selectedClientId = Cookies.get('selectedClientId');
    const selectedOrgId = Cookies.get('orgId');

    if (!selectedClientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }

    if (!selectedOrgId) {
      throw new Error('Org ID no encontrado en las cookies.');
    }

    const payload = {
      AD_Client_ID: selectedClientId,
      AD_Org_ID: selectedOrgId,
      sm_kitcode: kitData.SM_KitCode,
      SM_Stamp1: kitData.SM_Stamp1,
      SM_Stamp2: kitData.SM_Stamp2,
      SM_Stamp3: kitData.SM_Stamp3,
      SM_Stamp4: kitData.SM_Stamp4,
      sm_tag: kitData.SM_Tag,
      sm_kittype: kitData.SM_KitType,
    };

    const response = await DataService.post('/models/SM_SecurityKits', payload);

    if (response.data) {
      dispatch(addSecurityKitSuccess(response.data));
      message.success('Kit de seguridad agregado exitosamente.');
      return true;
    } else {
      throw new Error('No se pudo agregar el kit de seguridad.');
    }
  } catch (error) {
    dispatch(addSecurityKitError(error.message || 'Error al agregar el kit de seguridad.'));
    message.error(`Error al agregar el kit de seguridad: ${error.message}`);
    handleApiError(error, dispatch, addSecurityKitError);
    return false;
  }
};