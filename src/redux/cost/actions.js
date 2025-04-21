export const REGISTER_INDIRECTCOST_LOADING = 'REGISTER_INDIRECTCOST_LOADING';
export const REGISTER_INDIRECTCOST_SUCCESS = 'REGISTER_INDIRECTCOST_SUCCESS';
export const REGISTER_INDIRECTCOST_ERROR = 'REGISTER_INDIRECTCOST_ERROR';

export const FETCH_INDIRECTCOST_LOADING = 'FETCH_INDIRECTCOST_LOADING';
export const FETCH_INDIRECTCOST_SUCCESS = 'FETCH_INDIRECTCOST_SUCCESS';
export const FETCH_INDIRECTCOST_ERROR = 'FETCH_INDIRECTCOST_ERROR';

export const registerIndirectCostLoading = () => ({ type: REGISTER_INDIRECTCOST_LOADING });
export const registerIndirectCostSuccess = (data) => ({ type: REGISTER_INDIRECTCOST_SUCCESS, payload: data });
export const registerIndirectCostError = (error) => ({ type: REGISTER_INDIRECTCOST_ERROR, payload: error });

export const fetchIndirectCostLoading = () => ({ type: FETCH_INDIRECTCOST_LOADING });
export const fetchIndirectCostSuccess = (data) => ({ type: FETCH_INDIRECTCOST_SUCCESS, payload: data });
export const fetchIndirectCostError = (error) => ({ type: FETCH_INDIRECTCOST_ERROR, payload: error });


export const FETCH_COSTCENTER_LOADING = 'FETCH_COSTCENTER_LOADING';
export const FETCH_COSTCENTER_SUCCESS = 'FETCH_COSTCENTER_SUCCESS';
export const FETCH_COSTCENTER_ERROR = 'FETCH_COSTCENTER_ERROR';

export const fetchCostCenterLoading = () => ({ type: FETCH_COSTCENTER_LOADING });
export const fetchCostCenterSuccess = (data) => ({ type: FETCH_COSTCENTER_SUCCESS, payload: data });
export const fetchCostCenterError = (error) => ({ type: FETCH_COSTCENTER_ERROR, payload: error });


// --- Report Statement ---
export const FETCH_REPORTSTATEMENT_LOADING = 'FETCH_REPORTSTATEMENT_LOADING';
export const FETCH_REPORTSTATEMENT_SUCCESS = 'FETCH_REPORTSTATEMENT_SUCCESS';
export const FETCH_REPORTSTATEMENT_ERROR = 'FETCH_REPORTSTATEMENT_ERROR';

export const fetchReportStatementLoading = () => ({ type: FETCH_REPORTSTATEMENT_LOADING });
export const fetchReportStatementSuccess = (data) => ({ type: FETCH_REPORTSTATEMENT_SUCCESS, payload: data });
export const fetchReportStatementError = (error) => ({ type: FETCH_REPORTSTATEMENT_ERROR, payload: error });
