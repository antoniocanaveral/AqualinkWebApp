


export const OP_SCREEN_TASK_LOADING = 'OP_SCREEN_TASK_LOADING';
export const OP_SCREEN_TASK_LOADED = 'OP_SCREEN_TASK_LOADED';
export const OP_SCREEN_TASK_ERROR = 'OP_SCREEN_TASK_ERROR';


export const OP_SHRIMP_FARMING_TRANSFER_LOADING = 'OP_SHRIMP_FARMING_TRANSFER_LOADING';
export const OP_SHRIMP_FARMING_TRANSFER_LOADED = 'OP_SHRIMP_FARMING_TRANSFER_LOADED';
export const OP_SHRIMP_FARMING_TRANSFER_ERROR = 'OP_SHRIMP_FARMING_TRANSFER_ERROR';


export const OP_PLANNED_FARMING_LOADED = 'OP_PLANNED_FARMING_LOADED';
export const OP_PLANNED_HARVESTING_LOADED = 'OP_PLANNED_HARVESTING_LOADED';
export const OP_PLANNED_TRANSFERS_LOADED = 'OP_PLANNED_TRANSFERS_LOADED';


export const opScreenTaskLoading = () => ({
  type: OP_SCREEN_TASK_LOADING,
});

export const opScreenTaskLoaded = (data) => ({
  type: OP_SCREEN_TASK_LOADED,
  payload: {
    types: data.types || [],
    screens: data.screens || [],
    lastItem: data.lastItem || null,
    campaign: data.campaign || null,
    lunarCalendars: data.lunarCalendars || [],
    lunarPerigee: data.lunarPerigee || [],
    waterDays: data.waterDays || [],
  },
});

export const opScreenTaskError = (error) => ({
  type: OP_SCREEN_TASK_ERROR,
  payload: { error },
});

export const opShrimpFarmingTransferLoading = () => ({
  type: OP_SHRIMP_FARMING_TRANSFER_LOADING,
});

export const opShrimpFarmingTransferLoaded = (data) => ({
  type: OP_SHRIMP_FARMING_TRANSFER_LOADED,
  payload: data,
});

export const opShrimpFarmingTransferError = (error) => ({
  type: OP_SHRIMP_FARMING_TRANSFER_ERROR,
  payload: { error },
});

export const opPlannedFarmingLoaded = (data) => ({
  type: OP_PLANNED_FARMING_LOADED,
  payload: data,
});

export const opPlannedHarvestingLoaded = (data) => ({
  type: OP_PLANNED_HARVESTING_LOADED,
  payload: data,
});

export const opPlannedTransfersLoaded = (data) => ({
  type: OP_PLANNED_TRANSFERS_LOADED,
  payload: data,
});