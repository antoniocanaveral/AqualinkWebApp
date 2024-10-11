import actions from './actions';

const { CUSTODY_COORDINATION_BEGIN, CUSTODY_COORDINATION_SUCCESS, CUSTODY_COORDINATION_ERR, CUSTODY_COORDINATION_LOAD_BEGIN, 
  CUSTODY_COORDINATION_LOAD, CUSTODY_COORDINATION_SUBMIT, CUSTODY_COORDINATION_CANCEL, CUSTODY_BINES_LOAD, 
  CUSTODY_DRAWER_LOAD, CUSTODY_DRAWER_STAMP_LOAD } = actions;

const initState = {
  loading: false,
  coordinations: [],
  coordination: {},
  bines: [],
  fishingId: null,
  error: null,
  drawer: {},
  drawerStamps: []
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
    default:
      return state;
  }
};
export default CustodyReducer;
