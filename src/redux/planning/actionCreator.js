import Cookies from 'js-cookie';
import { message } from 'antd';
import {
  fetchPlanningLoading,
  fetchPlanningSuccess,
  fetchPlanningError,
  createPlanningLoading,
  createPlanningSuccess,
  createPlanningError,
} from './actions';

import { DataService } from '../../config/dataService/dataService';

export const fetchPlannings = () => async (dispatch) => {
  dispatch(fetchPlanningLoading());
  try {
    const response = await DataService.get(`/models/sm_planning_view`);
    dispatch(fetchPlanningSuccess(response.data.records));
  } catch (error) {
    dispatch(fetchPlanningError(error.message));
    message.error(`Error al obtener planes: ${error.message}`);
  }
};

export const createPlanning = (planningData) => async (dispatch) => {
  dispatch(createPlanningLoading());
  try {
    const response = await DataService.post('/models/sm_planning', planningData);
    dispatch(createPlanningSuccess(response.data));
    message.success('Planificación creada exitosamente');
  } catch (error) {
    dispatch(createPlanningError(error.message));
    message.error(`Error al crear planificación: ${error.message}`);
  }
};
