import Cookies from 'js-cookie';
import actions from './actions';
import { netWorkError } from '../authentication/actionCreator';
import { DataService } from '../../config/dataService/dataService';
import moment from 'moment';

const { labCoordBegin, labCoordSuccess, labCoordErr, labCoordLoadBegin, labCoordLoad, labCoordSubmit, labCoordCancel } = actions;

const loadLabCoordinations = () => {
    return async (dispatch) => {
        try {
            const orgEmail = Cookies.get("orgEmail");

            const bpartnerResponse = await DataService.get(`/models/sm_coordinations_view?$filter=sm_coordinationtype eq 'SIEMBRA' AND bp_email eq '${orgEmail}'`);
            if(bpartnerResponse.data && bpartnerResponse.data.records && bpartnerResponse.data.records.length > 0) {
                const result = [];
                for(let r of bpartnerResponse.data.records) {
                    r.statusWrapper = getCoordStatus(r);
                    result.push(r);
                }
                dispatch(labCoordSuccess({records: result}));
            } else {
                dispatch(labCoordSuccess({records: []}));
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

const loadLabCoord = (id, callback) => {
    return async (dispatch) => {
        try {
            dispatch(labCoordLoadBegin());
            const bpartnerResponse = await DataService.get(`/models/sm_coordinations_view?$filter=ci_id eq ${id}`);
            if(bpartnerResponse && bpartnerResponse.data) {
                const record = bpartnerResponse.data.records[0];
                record.statusWrapper = getCoordStatus(record);
                dispatch(labCoordLoad({
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

const cancelLabCoord = (id, callback) => {
    return async (dispatch) => {
        try {
            dispatch(labCoordLoadBegin());
            await DataService.put(`/models/sm_coordinationclient/${id}`, {
                "SM_Answered": true,
                "SM_Rejected": true
            });
            dispatch(labCoordCancel({}));
            callback(true);
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false);
        }
    };
}

const submitLabCoord = (id, form, callback) => {
    return async (dispatch) => {
        try {
            console.log("submitLabCoord>");
            console.log( JSON.stringify(form) );
            const coordClientResponse = await DataService.put(`/models/sm_coordinationclient/${id}`, {
                "SM_Answered": true,
                "SM_FishingDate": moment(form.answeredDate).format("YYYY-MM-DDTHH:mm:ss") + "Z",
                "SM_Module": form.module,
                "SM_Tank": form.tank,
                "SM_TankTotalPlanting": form.tankTotal,
                "SM_PreliminaryLaboratoryCount": form.labCount,
                "SM_AnsweredPL": form.pl,
                "SM_ConfirmedSalinity": form.salinity,
                "SM_ShippingMethod": form.methodName,
                "UnitsPerPack": form.unitPerPack,
                "SM_OxygenOnTheGo": form.oxygenOnTheGo,
                "SM_FoodOnTheGo": form.foodOnTheGo
            });
            console.log( coordClientResponse );
            dispatch(labCoordSubmit({}));
            callback(true);
        } catch(err) {
            console.error(err);
            dispatch(netWorkError(err));
            callback(false, err);
        }
    };
};

export { loadLabCoordinations, loadLabCoord, submitLabCoord, cancelLabCoord };
