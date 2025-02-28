export const FETCH_ROLES_LOADING = 'FETCH_ROLES_LOADING';
export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS';
export const FETCH_ROLES_ERROR = 'FETCH_ROLES_ERROR';

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


export const CREATE_USER_LOADING = 'CREATE_USER_LOADING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

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


export const FETCH_USERS_LOADING = 'FETCH_USERS_LOADING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

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

