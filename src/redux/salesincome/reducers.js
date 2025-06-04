import {
  REGISTER_SALES_INCOME_LOADING,
  REGISTER_SALES_INCOME_SUCCESS,
  REGISTER_SALES_INCOME_ERROR,
} from './actions';

const initialState = {
  loading: false,
  error: null,
  salesIncome: null,
};

export const salesIncomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SALES_INCOME_LOADING:
      return { ...state, loading: true, error: null };
    case REGISTER_SALES_INCOME_SUCCESS:
      return { ...state, loading: false, salesIncome: action.payload };
    case REGISTER_SALES_INCOME_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};