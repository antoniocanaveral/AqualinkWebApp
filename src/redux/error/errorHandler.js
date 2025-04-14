import { message } from 'antd';
import { logOut, netWorkError } from '../authentication/actionCreator';

export const handleApiError = (error, dispatch, errorAction) => {
  console.error("Error en la solicitud API:", error);

  if (typeof errorAction !== "function") {
    console.error("errorAction no es una función:", errorAction);
    return;
  }

  dispatch(errorAction({ error: error.message || 'Error en la solicitud API.' }));

  message.error(`${error.message || 'Sesión terminada. Por su seguridad inicie sesión nuevamente.'}`);

  if (error?.response?.status === 401 || error.invalidTokenError) {
    console.warn("Token inválido o expirado. Cerrando sesión...");
    dispatch(logOut(() => {}));
  } else {
    dispatch(netWorkError(error));
  }
};
