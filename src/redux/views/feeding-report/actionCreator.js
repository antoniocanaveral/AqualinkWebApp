import Cookies from 'js-cookie';
import { message } from 'antd';
import { DataService } from '../../../config/dataService/dataService';
import { fetchFeedingreportError, fetchFeedingreportLoading, fetchFeedingreportSuccess } from './actions';




export const fetchFeedingreports = () => async (dispatch) => {
    dispatch(fetchFeedingreportLoading());
    try {
        const warehouse_id = Cookies.get('poolId');
        const response = await DataService.get(`/models/sm_feedingreport_view?$filter=M_Warehouse_ID eq ${warehouse_id}`);
        dispatch(fetchFeedingreportSuccess(response.data.records));
    } catch (error) {
        dispatch(fetchFeedingreportError(error.message));
        message.error(`Error al obtener feedingreport: ${error.message}`);
    }
};
