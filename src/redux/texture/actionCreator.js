
import { DataService } from "../../config/dataService/dataService";
import { handleApiError } from "../error/errorHandler";
import { registerLoteError } from "../lote/actions";
import Cookies from 'js-cookie';
import { fetchTextureError, fetchTextureLoading, fetchTextureSuccess } from "./actions";


export const fetchTextures = () => async (dispatch) => {
    dispatch(fetchTextureLoading());
  
    try {
      const poolId = Cookies.get('poolId');
  
      const response = await DataService.get(
        `/models/sm_texture?$filter=M_Warehouse_ID eq ${poolId}` +
        `&$expand=SM_CampaignItem_ID(` +
        `$select=SM_Index,C_Campaign_ID;` +
        `expand=C_Campaign_ID($select=SM_Batch)` +
        `)`
      );
  
      dispatch(fetchTextureSuccess(response.data.records));
    } catch (error) {
      dispatch(fetchTextureError(error.message));
      handleApiError(error, dispatch, fetchTextureError);
    }
  };
  