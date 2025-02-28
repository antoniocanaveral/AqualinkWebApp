import actions from './actions';

const { CUSTODY_COORDINATION_BEGIN, CUSTODY_COORDINATION_SUCCESS, CUSTODY_COORDINATION_ERR, CUSTODY_COORDINATION_LOAD_BEGIN,
  CUSTODY_COORDINATION_LOAD, CUSTODY_COORDINATION_SUBMIT, CUSTODY_COORDINATION_CANCEL, CUSTODY_BINES_LOAD,
  CUSTODY_DRAWER_LOAD, CUSTODY_DRAWER_STAMP_LOAD, FETCH_ORG_BINS_ERROR, FETCH_ORG_BINS_LOADING, FETCH_ORG_BINS_SUCCESS } = actions;

const initState = {
  loading: false,
  coordinations: [],
  coordination: {},
  bines: [],
  fishingId: null,
  error: null,
  drawer: {},
  drawerStamps: [],

  orgBinsLoading: false,
  organizationBins: [],
  orgBinsError: null,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const CustodyReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CUSTODY_COORDINATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case CUSTODY_COORDINATION_SUCCESS:
      return {
        ...state,
        coordinations: data.records,
        loading: false
      };
    case CUSTODY_COORDINATION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case CUSTODY_COORDINATION_LOAD:
      return {
        ...state,
        coordination: data.coordination,
        loading: false
      };
    case CUSTODY_COORDINATION_LOAD_BEGIN:
      return {
        ...state,
        coordination: null,
        loading: true
      };
    case CUSTODY_COORDINATION_SUBMIT:
      return {
        ...state
      };
    case CUSTODY_COORDINATION_CANCEL:
      return {
        ...state
      };
    case CUSTODY_BINES_LOAD:
      return {
        ...state,
        bines: data.bines,
        fishingId: data.fishingId,
        loading: false
      };
    case CUSTODY_DRAWER_LOAD:
      return {
        ...state,
        fishingId: data.fishingId,
        drawer: data.drawer,
        loading: false
      };
    case CUSTODY_DRAWER_STAMP_LOAD:
      return {
        ...state,
        fishingId: data.fishingId,
        drawerStamps: data.stamps,
        loading: false
      };

    case FETCH_ORG_BINS_LOADING:
      return {
        ...state,
        orgBinsLoading: true,
        organizationBins: [],
        orgBinsError: null,
      };

      case actions.FETCH_ORG_BINS_SUCCESS:
        console.log("Datos de bines en el reducer:", action);
        return {
          ...state,
          orgBinsLoading: false,
          organizationBins: action.data || [],
          orgBinsError: null,
        };
  
      case actions.FETCH_ORG_BINS_ERROR:
        return {
          ...state,
          orgBinsLoading: false,
          organizationBins: [],
          orgBinsError: action.data,
        };
    default:
      return state;
  }
};
export default CustodyReducer;
