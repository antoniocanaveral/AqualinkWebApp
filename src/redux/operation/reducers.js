// src/redux/operation/reducer.js

import {
    OP_SCREEN_TASK_LOADING,
    OP_SCREEN_TASK_LOADED,
    OP_SCREEN_TASK_ERROR,
    OP_SHRIMP_FARMING_TRANSFER_LOADING,
    OP_SHRIMP_FARMING_TRANSFER_LOADED,
    OP_SHRIMP_FARMING_TRANSFER_ERROR,
    OP_PLANNED_FARMING_LOADED,
    OP_PLANNED_HARVESTING_LOADED,
    OP_PLANNED_TRANSFERS_LOADED,
  } from './actions';
  
  const initialState = {
    loading: false,
    error: null,
    types: [],
    screens: [],
    lastItem: null,
    campaign: null,
    lunarCalendars: [],
    lunarPerigee: [],
    waterDays: [],
    shrimpFarmingTransfer: [], // Estado para sm_shrimp_farming_transfer_v
    plannedFarming: [],        // Nueva lista para plannedFarming
    plannedHarvesting: [],     // Nueva lista para plannedHarvesting
    plannedTransfers: [],      // Nueva lista para plannedTransfers
    loaded: false,
  };
  
  export const operationReducer = (state = initialState, action) => {
    switch (action.type) {
      // Manejo de initTaskScreen
      case OP_SCREEN_TASK_LOADING:
        return {
          ...state,
          loading: true,
          loaded: false,
          types: [],
          screens: [],
          lastItem: null,
          campaign: null,
          lunarCalendars: [],
          lunarPerigee: [],
          waterDays: [],
          error: null,
        };
  
      case OP_SCREEN_TASK_LOADED:
        return {
          ...state,
          loading: false,
          loaded: true,
          types: action.payload.types,
          screens: action.payload.screens,
          lastItem: action.payload.lastItem,
          campaign: action.payload.campaign,
          lunarCalendars: action.payload.lunarCalendars,
          lunarPerigee: action.payload.lunarPerigee,
          waterDays: action.payload.waterDays,
          error: null,
        };
  
      case OP_SCREEN_TASK_ERROR:
        return {
          ...state,
          loading: false,
          loaded: false,
          error: action.payload.error,
        };
  
      // Manejo de sm_shrimp_farming_transfer_v
      case OP_SHRIMP_FARMING_TRANSFER_LOADING:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case OP_SHRIMP_FARMING_TRANSFER_LOADED:
        return {
          ...state,
          loading: false,
          shrimpFarmingTransfer: action.payload,
          error: null,
        };
  
      case OP_SHRIMP_FARMING_TRANSFER_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
        };
  
      // Manejo de las listas separadas
      case OP_PLANNED_FARMING_LOADED:
        return {
          ...state,
          plannedFarming: action.payload,
        };
  
      case OP_PLANNED_HARVESTING_LOADED:
        return {
          ...state,
          plannedHarvesting: action.payload,
        };
  
      case OP_PLANNED_TRANSFERS_LOADED:
        return {
          ...state,
          plannedTransfers: action.payload,
        };
  
      default:
        return state;
    }
  };