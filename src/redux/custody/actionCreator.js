import Cookies from 'js-cookie';
import actions from './actions';
import { netWorkError } from '../authentication/actionCreator';
import { DataService } from '../../config/dataService/dataService';
import moment from 'moment';

const { custodyCoordSuccess, custodyCoordLoadBegin, custodyCoordLoad, custodyCoordSubmit, custodyCoordCancel } = actions;

const loadCustodyCoordinations = () => {
    return async (dispatch) => {
        try {
            const orgEmail = Cookies.get("orgEmail");

            const bpartnerResponse = await DataService.get(`/models/sm_coordinations_view?$filter=sm_coordinationtype eq 'PESCA' AND bp_email eq '${orgEmail}'`);
            console.log('bpartnerResponse.data.records.length ' + JSON.stringify(bpartnerResponse) );
            if(bpartnerResponse.data && bpartnerResponse.data.records && bpartnerResponse.data.records.length > 0) {
                console.log('bpartnerResponse.data.records.length ' + bpartnerResponse.data.records.length);
                const result = [];
                for(let r of bpartnerResponse.data.records) {
                    r.statusWrapper = getCoordStatus(r);
                    result.push(r);
                }
                dispatch(custodyCoordSuccess({records: result}));
            } else {
                dispatch(custodyCoordSuccess({records: []}));
            }
        } catch (err) {
            dispatch(netWorkError(err));
        }
    };
}

const getCoordStatus = (item) => {
    let statusName = "-";
    let className = "";
    let showEditFrom = false;
    if(item.is_selected) {
      statusName = "Asignado";
      className = "asigned";
    } else {
      if(item.rejected) {
        statusName = "Rechazado";
        className = "rejected";
      } else {
        if(item.answered) {
          statusName = "Esperando Respuesta";
          className = "waiting";
        } else {
          statusName = "Por Revisar";
          className = "none";
          showEditFrom = true;
        }
      }
    }
    console.log(`className ${className}, statusName ${statusName}`);
    return {className, statusName, showEditFrom};
}

const loadCustodyCoord = (id, callback) => {
    return async (dispatch) => {
        try {
            dispatch(custodyCoordLoadBegin());
            const bpartnerResponse = await DataService.get(`/models/sm_coordinations_view?$filter=ci_id eq ${id}`);
            if(bpartnerResponse && bpartnerResponse.data) {
                const record = bpartnerResponse.data.records[0];
                record.statusWrapper = getCoordStatus(record);
                dispatch(custodyCoordLoad({
                    coordination: record
                }));
                callback(true);
            } else {
                callback(false);
            }
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err);
        }
    };
};

const cancelCustodyCoord = (id, callback) => {
    return async (dispatch) => {
        try {
            dispatch(custodyCoordLoadBegin());
            await DataService.put(`/models/sm_coordinationclient/${id}`, {
                "SM_Answered": true,
                "SM_Rejected": true
            });
            dispatch(custodyCoordCancel({}));
            callback(true);
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false);
        }
    };
}

const submitCustodyCoord = (id, form, callback) => {
    return async (dispatch) => {
        try {
            console.log("submitcustodyCoord>");
            console.log( JSON.stringify(form) );
            const coordClientResponse = await DataService.put(`/models/sm_coordinationclient/${id}`, {
                "SM_Answered": true,
                "SM_FishingDate": moment(form.answeredDate).format("YYYY-MM-DDTHH:mm:ss") + "Z"
            });
            console.log( coordClientResponse );
            dispatch(custodyCoordSubmit({}));
            callback(true);
        } catch(err) {
            console.error(err);
            dispatch(netWorkError(err));
            callback(false, err);
        }
    };
};

export { loadCustodyCoordinations, loadCustodyCoord, submitCustodyCoord, cancelCustodyCoord };
