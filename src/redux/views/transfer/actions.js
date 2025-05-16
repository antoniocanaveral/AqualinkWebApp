export const FETCH_TRANSFER_COMBINED_VIEW_LOADING = 'FETCH_TRANSFER_COMBINED_VIEW_LOADING';
export const FETCH_TRANSFER_COMBINED_VIEW_SUCCESS = 'FETCH_TRANSFER_COMBINED_VIEW_SUCCESS';
export const FETCH_TRANSFER_COMBINED_VIEW_ERROR = 'FETCH_TRANSFER_COMBINED_VIEW_ERROR';

// Action Creators para sm_transfer_combined_view
export const fetchTransferCombinedViewLoading = () => ({
    type: FETCH_TRANSFER_COMBINED_VIEW_LOADING,
});

export const fetchTransferCombinedViewSuccess = (data) => ({
    type: FETCH_TRANSFER_COMBINED_VIEW_SUCCESS,
    payload: data,
});

export const fetchTransferCombinedViewError = (error) => ({
    type: FETCH_TRANSFER_COMBINED_VIEW_ERROR,
    payload: error,
});