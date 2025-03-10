// actionCreators.js
import { message } from 'antd';
import { fetchStatusLoading, fetchStatusSuccess, fetchStatusError, fetchCategoriesLoading, fetchCategoriesSuccess, fetchCategoriesError, fetchRequestsSuccess, fetchRequestsError, fetchRequestsLoading } from './actions';
import { DataService } from '../../config/dataService/dataService';
import Cookies from 'js-cookie';
import { handleApiError } from '../error/errorHandler';

export const fetchStatus = () => async (dispatch) => {
  dispatch(fetchStatusLoading());

  try {
    const response = await DataService.get('models/R_Status?$select=Name');
    if (response.data && response.data.records) {
      dispatch(fetchStatusSuccess(response.data.records));
    } else {
      dispatch(fetchStatusError('No se encontraron estados.'));
    }
  } catch (error) {
    dispatch(fetchStatusError(error.message || 'Error al cargar los estados.'));
    message.error(`Error al cargar los estados: ${error.message}`);
    handleApiError(error, dispatch, fetchStatusError);
  }
};



export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesLoading());

  try {
    const response = await DataService.get('models/r_Category?$select=Name');
    if (response.data && response.data.records) {
      dispatch(fetchCategoriesSuccess(response.data.records));
    } else {
      dispatch(fetchCategoriesError('No se encontraron categorías.'));
    }
  } catch (error) {
    dispatch(fetchCategoriesError(error.message || 'Error al cargar las categorías.'));
    handleApiError(error, dispatch, fetchStatusError);
  }
};


// actionCreators.js
export const createRequest = (requestData) => async (dispatch) => {
  const selectedClientId = Cookies.get('selectedClientId');
  if (!selectedClientId) {
    throw new Error('Client ID no encontrado en las cookies.');
  }

  const selectedOrgId = Cookies.get('orgId');
  if (!selectedOrgId) {
    throw new Error('ORG ID no encontrado en las cookies.');
  }

  try {
    const payload = {
      AD_Client_ID: selectedClientId,
      AD_Org_ID: selectedOrgId,
      R_RequestType_ID: 1000000,
      R_Category_ID: requestData.R_Category_ID,
      Priority: requestData.Priority,
      Summary: requestData.Summary,
      IsInvoiced: "N",
      R_Status_ID: 100
    };

    const response = await DataService.post('/models/r_request', payload);

    if (response.data) {
      console.log(response)
      const payload2 = {
        R_Request_ID: response.data.id
      }
      const responseEmail = await DataService.post(`/processes/send_ticket_creation_email_process`, payload2);
      console.log("ad_user_id:", responseEmail);

      message.success('Ticket creado exitosamente!');
      //sendEmail(R_Request_ID); // Enviar nombre de la categoría como subject
      return response.data;
    }
  } catch (error) {
    handleApiError(error, dispatch, fetchStatusError);
    throw error;
  }
};



export const updateRequestStatus = (requestData) => async (dispatch) => {
  const selectedClientId = Cookies.get('selectedClientId');
  if (!selectedClientId) {
    throw new Error('Client ID no encontrado en las cookies.');
  }

  try {
    // Se arma el payload base
    const payload = {
      R_Status_ID: requestData.R_Status_ID.id
    };
    // Se agrega response_text si se encuentra en el requestData
    if (requestData.response_text) {
      payload.response_text = requestData.response_text;
    }
    
    const response = await DataService.put(`/models/r_request/${requestData.id}`, payload);

    if (response.data) {
      console.log(response);
      message.success('Ticket actualizado exitosamente!');
      if (payload.R_Status_ID === 102)
        sendEmailChangeToCloseStatus(requestData.id); // Enviar nombre de la categoría como subject
      return response.data;
    }
  } catch (error) {
    handleApiError(error, dispatch, fetchStatusError);
    throw error;
  }
};



export const sendEmail = async (R_Request_ID) => {
  try {
    const payload = {
      R_Request_ID,
    };

    const response = await DataService.post('/processes/send_ticket_creation_email_process', payload);

    if (response.data) {
      const result = JSON.parse(response.data.summary); // Convertir la cadena JSON en un objeto
      if (result.isSent) {
        message.success(`Correo enviado exitosamente `);
      } else {
        message.error('Error al enviar el correo electrónico.');
      }
      return result.isSent;
    } else {
      throw new Error('No se recibió respuesta del servidor.');
    }
  } catch (error) {
    message.error(`Error al enviar el correo electrónico: ${error.message}`);
    return false;
  }
};


export const sendEmailChangeToCloseStatus = async (R_Request_ID) => {
  try {
    const payload = {
      R_Request_ID,
    };

    const response = await DataService.post('/processes/send_closed_ticket_email_process', payload);

    if (response.data) {
      const result = JSON.parse(response.data); // Convertir la cadena JSON en un objeto
      console.log(result)
      message.success(`Correo enviado exitosamente `);
    } else {
      throw new Error('No se recibió respuesta del servidor.');
    }
  } catch (error) {
    console.log("error al enviar correo")
    return false;
  }
};



// actionCreators.js
export const fetchRequestsByClientC = () => async (dispatch) => {

  const selectedClientId = Cookies.get('selectedClientId');
  if (!selectedClientId) {
    throw new Error('Client ID no encontrado en las cookies.');
  }


  dispatch(fetchStatusLoading()); // Usa un loading apropiado

  try {
    const response = await DataService.get(
      `/models/r_request?$filter=ad_client_id eq ${selectedClientId}`
    );

    if (response.data.records) {
      dispatch(fetchStatusSuccess(response.data.records));
    }
  } catch (error) {
    dispatch(fetchStatusError(error.message));
    message.error(`Error al cargar tickets: ${error.message}`);
  }
};


// actionCreators.js


export const fetchRequestsByClient = () => async (dispatch) => {
  try {
    dispatch(fetchRequestsLoading());

    const selectedClientId = Cookies.get('selectedClientId');
    if (!selectedClientId) {
      throw new Error('Client ID no encontrado en las cookies.');
    }

    const response = await DataService.get(`models/r_request?$filter=ad_client_id eq ${selectedClientId}`);

    if (response.data && response.data.records) {
      dispatch(fetchRequestsSuccess(response.data.records));
    } else {
      dispatch(fetchRequestsError('No se encontraron solicitudes para este cliente.'));
    }
  } catch (error) {
    dispatch(fetchRequestsError(error.message || 'Error al cargar las solicitudes.'));
    handleApiError(error, dispatch, fetchRequestsError);
  }
};
