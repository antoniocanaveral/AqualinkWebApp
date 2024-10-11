import Cookies from 'js-cookie';
import actions from './actions';
import { netWorkError } from '../authentication/actionCreator';
import { DataService } from '../../config/dataService/dataService';
import moment from 'moment';

const { custodyCoordSuccess, custodyCoordLoadBegin, custodyCoordLoad, custodyCoordSubmit, custodyCoordCancel, 
    custodyBinesLoad, custodyDrawerLoad, custodyDrawerStampLoad } = actions;

const loadCustodyCoordinations = () => {
    return async (dispatch) => {
        try {
            const orgEmail = Cookies.get("orgEmail");

            const bpartnerResponse = await DataService.get(`/models/sm_coordinations_view?$filter=sm_coordinationtype eq 'PESCA' AND bp_email eq '${orgEmail}' AND (is_selected eq true OR (sm_coordinationstatus eq 'EN_ESPERA' OR sm_coordinationstatus eq 'POR_COORDINAR'))`);
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
    let showBinesForm = false;
    let showDrawersForm = false;
    if(item.is_selected) {
      statusName = "Asignado";
      className = "asigned";
      if(item.SM_CoordinationStatus && item.SM_CoordinationStatus.id === "PREPARANDO") {
        if(item.container_type === "BINES") {
            showBinesForm = true;
        } else {
            showDrawersForm = true;
        }
      }
      if(item.SM_CoordinationStatus && item.SM_CoordinationStatus.id === "CONFIRMADO") {
        statusName = "Confirmado";
      }
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
    return {className, statusName, showEditFrom, showBinesForm, showDrawersForm};
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
                callback(true, record);
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
            await DataService.put(`/models/sm_coordinationclient/${id}`, {
                "SM_Answered": true,
                "SM_FishingDate": moment(form.answeredDate).utc().format("YYYY-MM-DDTHH:mm:ss") + "Z"
            });
            dispatch(custodyCoordSubmit({}));
            callback(true);
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err);
        }
    };
};

const loadBinesByCoord = (id, callback) => {
    return async (dispatch) => {
        try {
            const bCoordClientResponse = await DataService.get(`/models/sm_coordinations_view?$filter=ci_id eq ${id}`);
            const fishingId = bCoordClientResponse.data.records[0].SM_Fishing_ID.id;
            const bBinesResponse = await DataService.get(`/models/sm_fishingbin?$filter=SM_Fishing_ID eq ${fishingId}&$orderby=Name`);

            if(bBinesResponse.data && bBinesResponse.data.records && bBinesResponse.data.records.length > 0) {
                dispatch(custodyBinesLoad({
                    fishingId: fishingId,
                    bines: bBinesResponse.data.records
                }));
                callback(true, bBinesResponse.data.records);
            } else {
                dispatch(custodyBinesLoad({
                    fishingId: fishingId,
                    bines: []
                }));
                callback(true);
            }
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err);
        }
    };
}

const submitBin = (fishingId, form, callback) => {
    return async (dispatch) => {
        try {
            let binValidationQuery = `SM_Fishing_ID eq ${fishingId}`;
            if(form.binId) {
                binValidationQuery += ` AND SM_FishingBin_ID neq ${form.binId} `;
            }
            binValidationQuery += ` AND ( Name eq '${escape(form.binNumber)}' `;
            if(form.seal1) {
                binValidationQuery += ` OR ( SM_Stamp1 eq '${escape(form.seal1)}' OR SM_Stamp2 eq '${escape(form.seal1)}' OR SM_Stamp3 eq '${escape(form.seal1)}' OR SM_Stamp4 eq '${escape(form.seal1)}' ) `;
            }
            if(form.seal2) {
                binValidationQuery += ` OR ( SM_Stamp1 eq '${escape(form.seal2)}' OR SM_Stamp2 eq '${escape(form.seal2)}' OR SM_Stamp3 eq '${escape(form.seal2)}' OR SM_Stamp4 eq '${escape(form.seal2)}' ) `;
            }
            if(form.seal3) {
                binValidationQuery += ` OR ( SM_Stamp1 eq '${escape(form.seal3)}' OR SM_Stamp2 eq '${escape(form.seal3)}' OR SM_Stamp3 eq '${escape(form.seal3)}' OR SM_Stamp4 eq '${escape(form.seal3)}' ) `;
            }
            if(form.seal4) {
                binValidationQuery += ` OR ( SM_Stamp1 eq '${escape(form.seal4)}' OR SM_Stamp2 eq '${escape(form.seal4)}' OR SM_Stamp3 eq '${escape(form.seal4)}' OR SM_Stamp4 eq '${escape(form.seal4)}' ) `;
            }
            binValidationQuery += ` ) `;

            const bBinesResponse = await DataService.get(`/models/sm_fishingbin?$filter=${binValidationQuery}`);
            if(bBinesResponse.data && bBinesResponse.data.records && bBinesResponse.data.records.length > 0) {
                console.log( JSON.stringify(bBinesResponse.data.records) );
                callback(false, "El Número de Bin o alguno de los Sellos ya están en uso en esta pesca");
            } else {
                const payload = {
                    "SM_Fishing_ID": fishingId,
                    "Name": form.binNumber,
                    "SM_Stamp1": form.seal1,
                    "SM_Stamp2": form.seal2,
                    "SM_Stamp3": form.seal3,
                    "SM_Stamp4": form.seal4
                };
                if(form.binId) {
                    await DataService.put(`/models/sm_fishingbin/${form.binId}`, payload);
                } else {
                    await DataService.post(`/models/sm_fishingbin`, payload);
                }
                callback(true);
            }
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const deleteBin = (binId, callback) => {
    return async (dispatch) => {
        try {
            await DataService.delete(`/models/sm_fishingbin/${binId}`);
            callback(true);
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const sendBinInfo = (fishingId, coordId, callback) => {
    return async (dispatch) => {
        try {
            let binValidationQuery = `SM_Fishing_ID eq ${fishingId}`;

            const bBinesResponse = await DataService.get(`/models/sm_fishingbin?$filter=${binValidationQuery}`);
            if(bBinesResponse.data && bBinesResponse.data.records && bBinesResponse.data.records.length === 0) {
                callback(false, "No se han cargado cargado información de Bines para esta pesca");
            } else {
                await DataService.put(`/models/sm_coordination/${coordId}`, {
                    "SM_CoordinationStatus": "CONFIRMADO"
                });
                callback(true);
            }
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const loadDrawerByCoord = (id, callback) => {
    return async (dispatch) => {
        try {
            const bCoordClientResponse = await DataService.get(`/models/sm_coordinations_view?$filter=ci_id eq ${id}`);
            const fishingId = bCoordClientResponse.data.records[0].SM_Fishing_ID.id;
            const bDrawerResponse = await DataService.get(`/models/sm_fishingdrawer?$filter=SM_Fishing_ID eq ${fishingId}&$orderby=Name`);
            const actionData = {
                fishingId: fishingId
            };

            if(bDrawerResponse.data && bDrawerResponse.data.records && bDrawerResponse.data.records.length > 0) {
                actionData.drawer = bDrawerResponse.data.records[0];
            } else {
                actionData.drawer = {};
            }

            dispatch(custodyDrawerLoad(actionData));
            callback(true, actionData.drawer);
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err);
        }
    };
}

const loadDrawerStampByCoord = (id, callback) => {
    return async (dispatch) => {
        try {
            const bCoordClientResponse = await DataService.get(`/models/sm_coordinations_view?$filter=ci_id eq ${id}`);
            const fishingId = bCoordClientResponse.data.records[0].SM_Fishing_ID.id;
            const bDrawerStampResponse = await DataService.get(`/models/sm_fishingdrawerstamp?$filter=SM_Fishing_ID eq ${fishingId}&$orderby=Name`);

            const actionData = {
                fishingId: fishingId
            };
            if(bDrawerStampResponse.data && bDrawerStampResponse.data.records && bDrawerStampResponse.data.records.length > 0) {
                actionData.stamps = bDrawerStampResponse.data.records;
            } else {
                actionData.stamps = [];
            }

            dispatch(custodyDrawerStampLoad(actionData));
            callback(true, actionData.stamps);
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err);
        }
    };
}

const deleteDrawerStamp = (stampId, callback) => {
    return async (dispatch) => {
        try {
            await DataService.delete(`/models/sm_fishingdrawerstamp/${stampId}`);
            callback(true);
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const submitDrawerStamp = (fishingId, form, callback) => {
    return async (dispatch) => {
        try {

            console.log( `Sello:  ${JSON.stringify(form)}` );

            let binValidationQuery = `SM_Fishing_ID eq ${fishingId}`;
            if(form.sealId) {
                binValidationQuery += ` AND SM_FishingDrawerStamp_ID neq ${form.sealId} `;
            }
            binValidationQuery += ` AND ( SM_Stamp eq '${escape(form.seal)}' OR SM_Van eq '${escape(form.van)}' )`;

            const bBinesResponse = await DataService.get(`/models/sm_fishingdrawerstamp?$filter=${binValidationQuery}`);
            if(bBinesResponse.data && bBinesResponse.data.records && bBinesResponse.data.records.length > 0) {
                callback(false, "El Número de Sello o el Furgón ya están en uso en esta pesca");
            } else {
                const payload = {
                    "SM_Fishing_ID": fishingId,
                    "Name": form.seal,
                    "SM_Stamp": form.seal,
                    "SM_Van": form.van,
                    "SM_DrawersCount": parseInt(form.drawers)
                };
                if(form.sealId) {
                    await DataService.put(`/models/sm_fishingdrawerstamp/${form.sealId}`, payload);
                } else {
                    await DataService.post(`/models/sm_fishingdrawerstamp`, payload);
                }
                callback(true);
            }
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const submitDrawer = (fishingId, form, callback) => {
    return async (dispatch) => {
        try {
            const payload = {
                "SM_Fishing_ID": fishingId,
                "Name": "Gavetas_" + fishingId,
                "SM_Ice": parseInt(form.drawerIce),
                "SM_Metabisulfito":  parseFloat(form.drawerMetabisulfito)
            };

            console.log(">>>> " + JSON.stringify(payload) );

            if(form.drawerId) {
                console.log("updating >>>> ");
                await DataService.put(`/models/sm_fishingdrawer/${form.drawerId}`, payload);
            } else {
                console.log("creating >>>> ");
                await DataService.post(`/models/sm_fishingdrawer`, payload);
            }
            callback(true);
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const sendDrawerInfo = (fishingId, coordId, callback) => {
    return async (dispatch) => {
        try {
            let binValidationQuery = `SM_Fishing_ID eq ${fishingId}`;

            const bBinesResponse = await DataService.get(`/models/sm_fishingdrawer?$filter=${binValidationQuery}`);
            if(bBinesResponse.data && bBinesResponse.data.records && bBinesResponse.data.records.length === 0) {
                callback(false, "No se han cargado cargado información de Gavetas para esta pesca");
            } else {
                await DataService.put(`/models/sm_coordination/${coordId}`, {
                    "SM_CoordinationStatus": "CONFIRMADO"
                });
                callback(true);
            }
        } catch(err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

export { loadCustodyCoordinations, loadCustodyCoord, submitCustodyCoord, cancelCustodyCoord, loadBinesByCoord, 
    submitBin, deleteBin, sendBinInfo, loadDrawerByCoord, deleteDrawerStamp, loadDrawerStampByCoord, 
    submitDrawerStamp, submitDrawer, sendDrawerInfo };
