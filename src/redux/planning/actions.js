export const FETCH_PLANNING_LOADING = 'FETCH_PLANNING_LOADING';
export const FETCH_PLANNING_SUCCESS = 'FETCH_PLANNING_SUCCESS';
export const FETCH_PLANNING_ERROR = 'FETCH_PLANNING_ERROR';

export const CREATE_PLANNING_LOADING = 'CREATE_PLANNING_LOADING';
export const CREATE_PLANNING_SUCCESS = 'CREATE_PLANNING_SUCCESS';
export const CREATE_PLANNING_ERROR = 'CREATE_PLANNING_ERROR';

export const fetchPlanningLoading = () => ({
  type: FETCH_PLANNING_LOADING,
});

export const fetchPlanningSuccess = (data) => ({
  type: FETCH_PLANNING_SUCCESS,
  payload: data,
});

export const fetchPlanningError = (error) => ({
  type: FETCH_PLANNING_ERROR,
  payload: error,
});

export const createPlanningLoading = () => ({
  type: CREATE_PLANNING_LOADING,
});

export const createPlanningSuccess = (newPlanning) => ({
  type: CREATE_PLANNING_SUCCESS,
  payload: newPlanning,
});

export const createPlanningError = (error) => ({
  type: CREATE_PLANNING_ERROR,
  payload: error,
});
