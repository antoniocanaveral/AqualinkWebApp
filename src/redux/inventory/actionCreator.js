

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
  const parallelRequests = 5; // Ajusta según la carga que soporte el backend
  const allRecords = [];
  const seenIds = new Set();

  // Paso 1: Obtener el ID máximo con ese tipo
  const maxIdResponse = await DataService.get(
    `/models/m_product_catalog?$filter=org_type eq '${filterValue}'&limit=1&orderBy=id desc`
  );
  const maxId = maxIdResponse.data?.records?.[0]?.id || 0;
  if (maxId === 0) return [];

  // Paso 2: Crear bloques de rangos artificiales para paralelizar bien
  const generateTasks = () => {
    const tasks = [];
    for (let i = 1; i <= maxId; i += limit) {
      tasks.push({ from: i, to: i + limit - 1 });
    }
    return tasks;
  };

  const taskQueue = generateTasks();

  // Paso 3: Ejecutar solicitudes por bloques, controladas en paralelo
  const fetchBlock = async ({ from, to }) => {
    const records = [];

    let lastId = from - 1;

    while (lastId < to) {
      const response = await DataService.get(
        `/models/m_product_catalog?$filter=org_type eq '${filterValue}' and M_Product_Catalog_ID gt ${lastId} and M_Product_Catalog_ID le ${to}&limit=${limit}&orderBy=M_Product_Catalog_ID`
      );
      const batch = response.data?.records || [];

      for (const record of batch) {
        if (!seenIds.has(record.id)) {
          seenIds.add(record.id);
          records.push(record);
        }
      }

      if (batch.length < limit) break;

      lastId = batch[batch.length - 1].id;
    }

    return records;
  };

  const worker = async () => {
    const result = [];

    while (taskQueue.length > 0) {
      const task = taskQueue.shift();
      const data = await fetchBlock(task);
      result.push(...data);
    }

    return result;
  };

  // Paso 4: Ejecutar múltiples workers en paralelo
  const workers = Array.from({ length: parallelRequests }, () => worker());
  const results = await Promise.all(workers);

  return results.flat().sort((a, b) => a.id - b.id);
};


export const fetchProductCatalogFarm = () => async (dispatch) => {
  try {
    dispatch(opCatalogLoading());
    const records = await fetchAllCatalogRecords('FARM');
    console.log(records)
    const catalogsByCategory = reduceByCategory(records);
    dispatch(opCatalogLoaded(catalogsByCategory));
    return catalogsByCategory;
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
    const category = catalog.category_name || 'Sin Categoría';
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

    /* ----------------------------------------------------------------
      * 1. COMPROBAR CATEGORIA Y EXISTENCIA DE PRODUCTO
      * ---------------------------------------------------------------- */
    const categoryName = productData.category_name;
    const productName = productData.Name;

    const categoryResponse = await DataService.get(
      `/models/M_Product_Category?$filter=Value eq '${categoryName}' AND AD_Client_ID eq ${clientId}`
    );
    let categoryId = categoryResponse.data?.records?.[0]?.id || null;
    if (!categoryId) {
      await addProductCategory({ value: categoryName, name: categoryName });
      const newCategoryResponse = await DataService.get(
        `/models/M_Product_Category?$filter=Value eq '${categoryName}' AND AD_Client_ID eq ${clientId}`
      );
      categoryId = newCategoryResponse.data?.records?.[0]?.id;
    }

    const productResponse = await DataService.get(
      `/models/M_Product?$filter=Name eq '${productName}' AND AD_Client_ID eq ${clientId}`
    );
    let productId = productResponse.data?.records?.[0]?.id || null;

    //obtener UOM
    const uomResponse = await DataService.get(
      `/models/C_UOM?$filter=Name eq '${productData.sm_uom_name}' AND AD_Client_ID eq ${clientId}`
    );
    const uomId = uomResponse.data?.records?.[0]?.id || null;

    //obtener M_PriceList
    const priceListResponse = await DataService.get(
      `/models/M_PriceList?$filter=AD_Client_ID eq ${clientId}`
    );
    const priceListId = priceListResponse.data?.records?.[0]?.id || null;

    //obtener C_Tax
    const taxResponse = await DataService.get(
      `/models/C_Tax?$filter=AD_Client_ID eq ${clientId}`
    );
    const taxId = taxResponse.data?.records?.[0]?.id || null;


    //obtener C_DocType
    const docTypeResponse = await DataService.get(
      `/models/C_DocType?$filter=AD_Client_ID eq ${clientId} AND Name eq 'MM Receipt'`
    );

    //obtener C_DocType AP Invoice
    const docTypeResponse2 = await DataService.get(
      `/models/C_DocType?$filter=AD_Client_ID eq ${clientId} AND Name eq 'AP Invoice'`
    );
    const docTypeId2 = docTypeResponse2.data?.records?.[0]?.id || null;

    //obtener C_BPartner
    const bPartnerResponse = await DataService.get(
      `/models/C_BPartner?$filter=AD_Client_ID eq ${clientId}`
    );
    const bPartnerId = bPartnerResponse.data?.records?.[0]?.id || null;

    //obtener C_BPartner_Location
    const bPartnerLocationResponse = await DataService.get(
      `/models/C_BPartner_Location?$filter=AD_Client_ID eq ${clientId}`
    );
    const bPartnerLocationId = bPartnerLocationResponse.data?.records?.[0]?.id || null;

    //obtener C_TaxCategory
    const taxCategoryResponse = await DataService.get(
      `/models/C_TaxCategory?$filter=AD_Client_ID eq ${clientId}`
    );
    const taxCategoryId = taxCategoryResponse.data?.records?.[0]?.id || null;

    //obtener los 50 primeros productos
    const productResponse2 = await DataService.get(
      `/models/M_Product?$filter=AD_Client_ID eq ${clientId}&limit=50`
    );
    const productId2 = productResponse2.data?.records?.[0]?.id || null;
    console.log('productId2', productId2)
    const docTypeId = docTypeResponse.data?.records?.[0]?.id || null;
    console.log(productData)
    if (!productId) {
      await DataService.post('/models/M_Product', {
        AD_Client_ID: +clientId,
        AD_Org_ID: 0,
        Value: productData.Value,
        Name: productData.Name,
        rsu_code: productData.rsu_code,
        M_Product_Category_ID: categoryId,
        C_UOM_ID: uomId,
        C_TaxCategory_ID: taxCategoryId,
        IsActive: true,
        Description: productData.Description,
      });
      const newProductResponse = await DataService.get(
        `/models/M_Product?$filter=Name eq '${productName}' AND AD_Client_ID eq ${clientId}`
      );
      productId = newProductResponse.data?.records?.[0]?.id;
    }




    /* ================================================================
     * 1. RECEPCIÓN (cabecera + línea)
     * ================================================================ */
    const inOutResp = await DataService.post('/models/M_InOut', {
      AD_Client_ID: +clientId,
      AD_Org_ID: +orgId,
      C_DocType_ID: docTypeId,
      MovementDate: new Date().toISOString().split('T')[0],
      C_BPartner_ID: bPartnerId,
      C_BPartner_Location_ID: bPartnerLocationId,
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
      Line: null,
      M_Product_ID: productId,
      MovementQty: productData.quantity,
      QtyEntered: productData.quantity,
      C_UOM_ID: uomId,
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
      C_DocType_ID: docTypeId2,
      DateInvoiced: new Date().toISOString().split('T')[0],
      C_BPartner_ID: bPartnerId,
      C_BPartner_Location_ID: bPartnerLocationId,
      M_PriceList_ID: priceListId,
      Description: 'Factura de compra de inventario',
      IsSOTrx: false
    });
    const cInvoiceId = invoiceResp.data.id;

    await DataService.post('/models/C_InvoiceLine', {
      AD_Client_ID: +clientId,
      AD_Org_ID: +orgId,
      C_Invoice_ID: cInvoiceId,
      Line: null,
      M_Product_ID: productId,
      PriceList: productData.priceList,
      PriceActual: productData.priceList,
      PriceEntered: productData.priceList,
      QtyInvoiced: productData.quantity,
      QtyEntered: productData.quantity,
      C_UOM_ID: uomId,
      C_Tax_ID: taxId,
      LineTotalAmt: productData.priceList * productData.quantity,
      M_InOutLine_ID: mInOutLineId          // 🔗 enlace para MatchInv
    });

    /* ================================================================
     * 3. Completar documentos
     * ================================================================ */
    await DataService.put(`/models/C_Invoice/${cInvoiceId}`, { 'doc-action': 'CO' });
    await DataService.put(`/models/M_InOut/${mInOutId}`, { 'doc-action': 'CO' });


    /* ================================================================
     * 4. Ejecutar Costing Run (CostCreate) para generar CostDetail
     * ================================================================ */
    await DataService.post('/processes/m_cost-create', {
      AD_Client_ID: +clientId,
      AD_Org_ID: +orgId,
      DateAcct: new Date().toISOString().split('T')[0],
      M_Product_ID: productId,
      C_AcctSchema_ID: 1000027, // Obligatorio
      M_CostElement_ID: 1000037,
      M_InOutLine_ID: mInOutLineId
    });
    


    /* ================================================================
     * 7. Verificar resultados (esperar 3 segundos para procesamiento)
     * ================================================================ */
    await new Promise(resolve => setTimeout(resolve, 3000));

    const costDetailResp = await DataService.get(
      `/models/M_CostDetail?filter=M_InOutLine_ID eq ${mInOutLineId}`
    );

    if (costDetailResp.data.length === 0) {
      console.error('❌ CostDetail no generado. Verifica:');
      console.log('- Configuración de Cost Element y Acct Schema');
      console.log('- M_MatchInv procesado correctamente');
    } else {
      console.log('✅ CostDetail generado:', costDetailResp.data[0]);

      // Verificar M_Cost
      const costResp = await DataService.get(
        `/models/M_Cost?filter=M_Product_ID eq ${productId} and C_AcctSchema_ID eq 1000027`
      );

      if (costResp.data.length === 0) {
        console.error('⚠️ M_Cost no generado. Ejecuta m_cost-create nuevamente.');
      } else {
        console.log('✅ M_Cost actualizado:', costResp.data[0]);
      }
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

export const addProductCategory = async (categoryData) => {
  try {
    const clientId = Cookies.get('selectedClientId');


    // Preparar el payload para la categoría
    const payload = {
      AD_Client_ID: +clientId,
      AD_Org_ID: 0,
      Value: categoryData.value, // Obligatorio
      Name: categoryData.name, // Obligatorio

    };



    // Realizar la solicitud POST para agregar la categoría de producto
    const response = await DataService.post('/models/M_Product_Category', payload);

    if (response.data) {
      message.success('Categoría de producto agregada exitosamente.');
      return true;
    } else {
      throw new Error('No se pudo agregar la categoría de producto.');
    }
  } catch (error) {
    console.error('Error en el proceso:', error);
    let msg = error.message;
    if (error.response?.data?.summary) {
      try {
        msg = JSON.parse(error.response.data.summary).message || msg;
      } catch { /* ignore */ }
    }
    message.error(`Error al agregar la categoría de producto: ${msg}`);
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