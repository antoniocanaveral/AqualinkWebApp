export const REGISTER_CARRIER_LOADING = 'REGISTER_CARRIER_LOADING';
export const REGISTER_CARRIER_SUCCESS = 'REGISTER_CARRIER_SUCCESS';
export const REGISTER_CARRIER_ERROR = 'REGISTER_CARRIER_ERROR';

export const registerCarrierLoading = () => ({
  type: REGISTER_CARRIER_LOADING,
});

export const registerCarrierSuccess = (carrier) => ({
  type: REGISTER_CARRIER_SUCCESS,
  payload: carrier,
});

export const registerCarrierError = (error) => ({
  type: REGISTER_CARRIER_ERROR,
  payload: error,
});


export const REGISTER_VEHICLE_LOADING = 'REGISTER_VEHICLE_LOADING';
export const REGISTER_VEHICLE_SUCCESS = 'REGISTER_VEHICLE_SUCCESS';
export const REGISTER_VEHICLE_ERROR = 'REGISTER_VEHICLE_ERROR';

export const registerVehicleLoading = () => ({
  type: REGISTER_VEHICLE_LOADING,
});

export const registerVehicleSuccess = (vehicle) => ({
  type: REGISTER_VEHICLE_SUCCESS,
  payload: vehicle,
});

export const registerVehicleError = (error) => ({
  type: REGISTER_VEHICLE_ERROR,
  payload: error,
});


export const FETCH_CARRIERS_LOADING = 'FETCH_CARRIERS_LOADING';
export const FETCH_CARRIERS_SUCCESS = 'FETCH_CARRIERS_SUCCESS';
export const FETCH_CARRIERS_ERROR = 'FETCH_CARRIERS_ERROR';


export const fetchCarriersLoading = () => ({
  type: FETCH_CARRIERS_LOADING,
});

export const fetchCarriersSuccess = (carriers) => ({
  type: FETCH_CARRIERS_SUCCESS,
  payload: carriers,
});

export const fetchCarriersError = (error) => ({
  type: FETCH_CARRIERS_ERROR,
  payload: error,
});