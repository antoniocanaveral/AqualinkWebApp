import {
    FETCH_ROLES_LOADING,
    FETCH_ROLES_SUCCESS,
    FETCH_ROLES_ERROR,
    CREATE_USER_LOADING,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    FETCH_USERS_LOADING,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
} from './actions';

const initialState = {
    rolesLoading: false,
    roles: [],
    rolesError: null,
    userLoading: false,
    userId: null,
    userError: null,

    usersLoading: false,
    users: [],
    usersError: null,
};

export const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROLES_LOADING:
            return {
                ...state,
                rolesLoading: true,
                roles: [],
                rolesError: null,
            };

        case FETCH_ROLES_SUCCESS:
            return {
                ...state,
                rolesLoading: false,
                roles: action.payload,
                rolesError: null,
            };

        case FETCH_ROLES_ERROR:
            return {
                ...state,
                rolesLoading: false,
                roles: [],
                rolesError: action.payload.error,
            };
        case CREATE_USER_LOADING:
            return {
                ...state,
                userLoading: true,
                userError: null,
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                userId: action.payload,
            };
        case CREATE_USER_ERROR:
            return {
                ...state,
                userLoading: false,
                userError: action.payload,
            };

        case FETCH_USERS_LOADING:
            return {
                ...state,
                usersLoading: true,
                users: [],
                usersError: null,
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                usersLoading: false,
                users: action.payload,
                usersError: null,
            };
        case FETCH_USERS_ERROR :
            return {
                ...state,
                usersLoading: false,
                users: [],
                usersError: action.payload,
            };
        default:
            return state;
    }
};
