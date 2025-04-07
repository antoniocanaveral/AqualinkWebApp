// actions.js

export const FETCH_ROLES_LOADING = 'FETCH_ROLES_LOADING';
export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS';
export const FETCH_ROLES_ERROR = 'FETCH_ROLES_ERROR';

export const CREATE_USER_LOADING = 'CREATE_USER_LOADING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

// Nuevos tipos para el proceso de auditor externo
export const SEND_AUDITOR_EMAIL_LOADING = 'SEND_AUDITOR_EMAIL_LOADING';
export const SEND_AUDITOR_EMAIL_SUCCESS = 'SEND_AUDITOR_EMAIL_SUCCESS';
export const SEND_AUDITOR_EMAIL_ERROR = 'SEND_AUDITOR_EMAIL_ERROR';

// Acciones para roles
export const fetchRolesLoading = () => ({
  type: FETCH_ROLES_LOADING,
});

export const fetchRolesSuccess = (roles) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: roles,
});

export const fetchRolesError = (error) => ({
  type: FETCH_ROLES_ERROR,
  payload: { error },
});

// Acciones para crear usuario
export const createUserLoading = () => ({
  type: CREATE_USER_LOADING,
});

export const createUserSuccess = (userId) => ({
  type: CREATE_USER_SUCCESS,
  payload: userId,
});

export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

// Acciones para usuarios
export const fetchUsersLoading = () => ({
  type: FETCH_USERS_LOADING,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersError = (error) => ({
  type: FETCH_USERS_ERROR,
  payload: error,
});

// Nuevas acciones para el proceso de auditor externo
export const sendAuditorEmailLoading = () => ({
  type: SEND_AUDITOR_EMAIL_LOADING,
});

export const sendAuditorEmailSuccess = (data) => ({
  type: SEND_AUDITOR_EMAIL_SUCCESS,
  payload: data,
});

export const sendAuditorEmailError = (error) => ({
  type: SEND_AUDITOR_EMAIL_ERROR,
  payload: error,
});
