import Cookies from 'js-cookie';
import actions from './actions';

const { LAB_COORDINATION_BEGIN, LAB_COORDINATION_SUCCESS, LAB_COORDINATION_ERR, LAB_COORDINATION_LOAD_BEGIN, LAB_COORDINATION_LOAD, LAB_COORDINATION_SUBMIT, LAB_COORDINATION_CANCEL } = actions;

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
const LabReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LAB_COORDINATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LAB_COORDINATION_SUCCESS:
      return {
        ...state,
        coordinations: data.records,
        loading: false
      };
    case LAB_COORDINATION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LAB_COORDINATION_LOAD:
        return {
          ...state,
          coordination: data.coordination,
          loading: false
        };
    case LAB_COORDINATION_LOAD_BEGIN:
      return {
        ...state,
        coordination: null,
        loading: true
      };
    case LAB_COORDINATION_SUBMIT:
          return {
            ...state
          };
    case LAB_COORDINATION_CANCEL:
        return {
          ...state
        };
    default:
      return state;
  }
};
export default LabReducer;
