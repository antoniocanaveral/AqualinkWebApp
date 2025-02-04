// src/redux/operation/actionCreator.js

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

} from './actions';

import Cookies from 'js-cookie';


export const fetchInventory = () => async (dispatch) => {
  try {
    dispatch(opInventoryLoading());
    const clientId = Cookies.get('selectedClientId');
    const adOrg = Cookies.get('orgId')

    if (!clientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }
    const response = await DataService.get(`/models/m_product_stock_extended_v1?$filter=AD_Client_ID eq  ${clientId} AND AD_Org_ID eq ${adOrg} AND warehouse eq 'GENERAL'` );

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
  }
};

export const fetchProductCatalogFarm = () => async (dispatch) => {
  try {
    dispatch(opCatalogLoading());
    const clientId = Cookies.get('selectedClientId');

    if (!clientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }

    const response = await DataService.get(`/models/m_product_catalog?$filter=org_type eq 'FARM'`);

    if (response.data && response.data.records) {
      const farmCatalogs = response.data.records;

      const catalogsByCategory = farmCatalogs.reduce((acc, catalog) => {
        const category = catalog.M_Product_Category_ID?.identifier || 'Sin Categoría';

        if (!acc[category]) {
          acc[category] = [];
        }

        acc[category].push(catalog);
        return acc;
      }, {});

      dispatch(opCatalogLoaded(catalogsByCategory));
    } else {
      dispatch(opCatalogError('No se encontraron catálogos con org_type "FARM".'));
    }
  } catch (err) {
    dispatch(opCatalogError(err.message || 'Error al cargar el catálogo de productos.'));
  }
};

export const addProductToInventory = (productData) => async (dispatch) => {
  console.log('Datos recibidos para añadir producto:', productData);
  
  try {
    dispatch(opAddProductLoading());
    const clientId = Cookies.get('selectedClientId');
    const orgId = Cookies.get('orgId');

    if (!clientId || !orgId) {
      throw new Error('Faltan credenciales en las cookies');
    }

    const invoicePayload = {
      AD_Client_ID: Number(clientId),
      AD_Org_ID: Number(orgId),
      C_DocType_ID: 1000005,
      DateInvoiced: new Date().toISOString().split('T')[0],
      C_BPartner_ID: productData.C_BPartner_ID,
      C_BPartner_Location_ID: productData.C_BPartner_Location_ID,
      M_PriceList_ID: 1000000,
      Description: "Factura de compra de inventario",
      IsSOTrx: false
    };

    console.log('Paso 1/6 - Enviando payload para crear factura:', invoicePayload);
    const invoiceResponse = await DataService.post('/models/c_invoice', invoicePayload);
    console.log('Respuesta creación factura:', invoiceResponse.data);
    
    const cInvoiceId = invoiceResponse.data?.id;
    if (!cInvoiceId) throw new Error('Error al crear la factura');

    const invoiceLinePayload = {
      AD_Client_ID: Number(clientId),
      AD_Org_ID: Number(orgId),
      C_Invoice_ID: cInvoiceId,
      Line: 10,
      M_Product_ID: productData.M_Product_ID,
      PriceList: productData.priceList,
      PriceActual: productData.priceList,
      QtyInvoiced: productData.quantity,
      QtyEntered: productData.quantity,
      C_UOM_ID: 1000000,
      C_Tax_ID: 1000000,
      LineTotalAmt: productData.priceList * productData.quantity
    };

    console.log('Paso 2/6 - Enviando payload para línea de factura:');
    await DataService.post('/models/c_invoiceline', invoiceLinePayload);

    console.log(`Paso 3/6 - Completando factura ID: ${cInvoiceId}`);
    await DataService.put(`/models/C_Invoice/${cInvoiceId}`, { "doc-action": "CO" });

    const inOutPayload = {
      AD_Client_ID: Number(clientId),
      AD_Org_ID: Number(orgId),
      C_DocType_ID: 1000014,
      MovementDate: new Date().toISOString().split('T')[0],
      C_BPartner_ID: productData.C_BPartner_ID,
      C_BPartner_Location_ID: productData.C_BPartner_Location_ID,
      Description: "Recepción",
      IsSOTrx: false,
      MovementType: "V+",
      M_Warehouse_ID: 1000014
    };

    console.log('Paso 4/6 - Enviando payload para entrada de inventario:', inOutPayload);
    const inOutResponse = await DataService.post('/models/M_InOut', inOutPayload);
    
    const mInOutId = inOutResponse.data?.id;
    if (!mInOutId) throw new Error('Error al crear el registro M_InOut');

    const linePayload = {
      AD_Client_ID: Number(clientId),
      AD_Org_ID: Number(orgId),
      M_InOut_ID: mInOutId,
      Line: 10,
      M_Product_ID: productData.M_Product_ID,
      MovementQty: productData.quantity,
      QtyEntered: productData.quantity,
      C_UOM_ID: 1000000,
      M_Locator_ID: 1000006,
      Description: "Recepción de producto",
      IsActive: true
    };

    console.log('Paso 5/6 - Enviando payload para línea de inventario:', linePayload);
    await DataService.post('/models/M_InOutLine', linePayload);

    const completePayload = {
      M_InOut_ID: mInOutId,
      Lines: [{
        AD_Org_ID: Number(orgId),
        M_InOut_ID: mInOutId,
        Line: 10,
        M_Product_ID: productData.M_Product_ID,
        MovementQty: productData.quantity,
        C_UOM_ID: 1000000,
        M_Locator_ID: 1000006,
        Description: "Recepción de producto",
        IsActive: true
      }]
    };

    console.log('Paso 6/6 - Enviando payload para completar proceso:', completePayload);
    const completeResponse = await DataService.post('/processes/complete_minout_processs', completePayload);

    const summary = JSON.parse(completeResponse.data.summary);
    if (summary.error) throw new Error(summary.message);

    console.log('Proceso completado exitosamente!');
    dispatch(opAddProductLoaded());
    return true;

  } catch (error) {
    console.error('Error en el proceso:', error);
    let errorMessage = error.message;
    
    if (error.response) {
      console.error('Error response data:', error.response.data);
      if (error.response.data?.summary) {
        try {
          const summary = JSON.parse(error.response.data.summary);
          errorMessage = summary.message || errorMessage;
        } catch (e) {
          console.error('Error parsing summary:', e);
        }
      }
    }
    
    dispatch(opAddProductError(errorMessage));
    return false;
  }
};