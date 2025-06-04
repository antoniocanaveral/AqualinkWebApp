export const REGISTER_SALES_INCOME_LOADING = 'REGISTER_SALES_INCOME_LOADING';
export const REGISTER_SALES_INCOME_SUCCESS = 'REGISTER_SALES_INCOME_SUCCESS';
export const REGISTER_SALES_INCOME_ERROR = 'REGISTER_SALES_INCOME_ERROR';


export const registerSalesIncomeLoading = () => ({
  type: REGISTER_SALES_INCOME_LOADING,
});

export const registerSalesIncomeSuccess = (data) => ({
  type: REGISTER_SALES_INCOME_SUCCESS,
  payload: data,
});

export const registerSalesIncomeError = (error) => ({
  type: REGISTER_SALES_INCOME_ERROR,
  payload: error,
});