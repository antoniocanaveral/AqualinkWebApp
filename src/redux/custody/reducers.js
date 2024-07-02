import actions from './actions';

const { CUSTODY_COORDINATION_BEGIN, CUSTODY_COORDINATION_SUCCESS, CUSTODY_COORDINATION_ERR, CUSTODY_COORDINATION_LOAD_BEGIN, CUSTODY_COORDINATION_LOAD, CUSTODY_COORDINATION_SUBMIT, CUSTODY_COORDINATION_CANCEL } = actions;

const initState = {
  loading: false,
  coordinations: [],
  coordination: {},
  error: null
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
    default:
      return state;
  }
};
export default CustodyReducer;
