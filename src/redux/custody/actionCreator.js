import Cookies from 'js-cookie';
import actions from './actions';
import { netWorkError } from '../authentication/actionCreator';
import { DataService } from '../../config/dataService/dataService';
import moment from 'moment';
import { message } from 'antd';

const { custodyCoordSuccess, custodyCoordLoadBegin, custodyCoordLoad, custodyCoordSubmit, custodyCoordCancel,
    custodyBinesLoad, custodyDrawerLoad, custodyDrawerStampLoad, fetchOrgBinsError, fetchOrgBinsLoading, fetchOrgBinsSuccess } = actions;

const loadCustodyCoordinations = () => {
    return async (dispatch) => {
        try {
            const orgEmail = Cookies.get("orgEmail");

            const bpartnerResponse = await DataService.get(`/models/sm_coordinations_view?$filter=sm_coordinationtype eq 'PESCA' AND bp_email eq '${orgEmail}' AND (is_selected eq true OR (sm_coordinationstatus eq 'EN_ESPERA' OR sm_coordinationstatus eq 'POR_COORDINAR'))`);
            console.log('bpartnerResponse.data.records.length ' + JSON.stringify(bpartnerResponse));
            if (bpartnerResponse.data && bpartnerResponse.data.records && bpartnerResponse.data.records.length > 0) {
                console.log('bpartnerResponse.data.records.length ' + bpartnerResponse.data.records.length);
                const result = [];
                for (let r of bpartnerResponse.data.records) {
                    r.statusWrapper = getCoordStatus(r);
                    result.push(r);
                }
                dispatch(custodyCoordSuccess({ records: result }));
            } else {
                dispatch(custodyCoordSuccess({ records: [] }));
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

    if (item.is_selected) {
        statusName = "Asignado";
        className = "asigned";

        if (item.SM_CoordinationStatus) {
            if (item.SM_CoordinationStatus.id === "PREPARANDO") {
                if (item.container_type === "BINES") {
                    showBinesForm = true;
                    statusName = "Espera Bines"; 
                    className = "waiting-bines";
                } else {
                    showDrawersForm = true;
                    statusName = "Espera Gavetas";
                    className = "waiting-drawers";
                }
            }

            if (item.SM_CoordinationStatus.id === "CONFIRMADO") {
                statusName = "Confirmado";
            }
        }
    } else {
        if (item.rejected) {
            statusName = "Rechazado";
            className = "rejected";
        } else {
            if (item.answered) {
                statusName = "Esperando Respuesta";
                className = "waiting";
            } else {
                statusName = "Por Revisar";
                className = "none";
                showEditFrom = true;
            }
        }
    }

    return { className, statusName, showEditFrom, showBinesForm, showDrawersForm };
};

const loadCustodyCoord = (id, callback) => {
    return async (dispatch) => {
        try {
            dispatch(custodyCoordLoadBegin());
            const bpartnerResponse = await DataService.get(`/models/sm_coordinations_view?$filter=ci_id eq ${id}`);
            if (bpartnerResponse && bpartnerResponse.data) {
                const record = bpartnerResponse.data.records[0];
                record.statusWrapper = getCoordStatus(record);
                dispatch(custodyCoordLoad({
                    coordination: record
                }));
                callback(true, record);
            } else {
                callback(false);
            }
        } catch (err) {
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
        } catch (err) {
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
        } catch (err) {
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
            const bBinesResponse = await DataService.get(`/models/sm_fishingbin_info_v?$filter=SM_Fishing_ID eq ${fishingId}`);

            if (bBinesResponse.data && bBinesResponse.data.records && bBinesResponse.data.records.length > 0) {
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


const submitBin = (fishingId, binsData, callback) => {
    return async (dispatch) => {
        try {
            const validBins = binsData.filter((bin) => bin.sm_securitykits_id !== "NA");

            if (validBins.length === 0) {
                return callback(false, "No hay bins válidos para registrar (ningún kit asignado).");
            }
            
            const selectedOrgId = Cookies.get('orgId');
            if (!selectedOrgId) {
                throw new Error('Org ID no encontrado en las cookies.');
            }

            // Validar que los bins y kits no estén en uso
            for (const bin of validBins) {
                // Validar en sm_fishingbin si el bin ya está asignado a alguna pesca
                let binValidationQuery = `sm_bin_id eq ${bin.key}`;
                const fishingBinResponse = await DataService.get(`/models/sm_fishingbin?$filter=${binValidationQuery}`);
                
                if (fishingBinResponse.data && fishingBinResponse.data.records && fishingBinResponse.data.records.length > 0) {
                    return callback(false, `El Bin ${bin.bin} ya está asignado a otra pesca`);
                }

                // Validar que el kit de seguridad no esté en uso
                if (bin.sm_securitykits_id) {
                    let kitValidationQuery = `sm_securitykits_id eq ${bin.sm_securitykits_id}`;
                    const kitResponse = await DataService.get(`/models/sm_fishingbin?$filter=${kitValidationQuery}`);
                    
                    if (kitResponse.data && kitResponse.data.records && kitResponse.data.records.length > 0) {
                        return callback(false, `El kit de seguridad ${bin.sm_kitcode} ya está en uso en otra pesca`);
                    }
                }
            }

            // Crear los registros de sm_fishingbin y actualizar el estado de los bins
            for (const bin of validBins) {
                console.log('Procesando bin:', bin);
                
                // Crear registro en sm_fishingbin
                const fishingBinPayload = {
                    SM_Fishing_ID: fishingId,
                    Name: bin.bin,
                    SM_SecurityKits_ID: bin.sm_securitykits_id,
                    sm_bin_ID: bin.key, // Relación con sm_bin
                    // Copiar los stamps del kit de seguridad
                    SM_Stamp1: bin.seal1,
                    SM_Stamp2: bin.seal2,
                    SM_Stamp3: bin.seal3,
                    SM_Stamp4: bin.seal4
                };
                
                await DataService.post(`/models/sm_fishingbin`, fishingBinPayload);

                // Actualizar el estado del bin a 'OCUPADO' en sm_bin
                const binStatusPayload = {
                    sm_status: 'OCUPADO'
                };
                
                await DataService.put(`/models/sm_bin/${bin.key}`, binStatusPayload);
            }

            callback(true);
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err?.error?.message || err?.message || 'Error al procesar los bins');
        }
    };
};

const deleteBin = (binId, callback) => {
    return async (dispatch) => {
        try {
            await DataService.delete(`/models/sm_fishingbin/${binId}`);
            callback(true);
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const sendBinInfo = (fishingId, treater, coordId, bineIce, bineMetabisulfito, callback) => {
    return async (dispatch) => {
        try {
            let binValidationQuery = `SM_Fishing_ID eq ${fishingId}`;

            const bBinesResponse = await DataService.get(`/models/sm_fishingbin?$filter=${binValidationQuery}`);
            if (bBinesResponse.data && bBinesResponse.data.records && bBinesResponse.data.records.length === 0) {
                callback(false, "No se han cargado cargado información de Bines para esta pesca");
            } else {
                await DataService.put(`/models/sm_coordination/${coordId}`, {
                    SM_CoordinationStatus: "CONFIRMADO",
                    SM_Ice: bineIce,
                    sm_metabisulfite: bineMetabisulfito,
                    AD_User_ID: treater
                });
                callback(true);
            }
        } catch (err) {
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

            if (bDrawerResponse.data && bDrawerResponse.data.records && bDrawerResponse.data.records.length > 0) {
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
            if (bDrawerStampResponse.data && bDrawerStampResponse.data.records && bDrawerStampResponse.data.records.length > 0) {
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
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};


const deleteDrawerStampByVehicle = (vehicleId, callback) => {
    return async (dispatch) => {
        try {

            const response = await DataService.get(`/models/sm_fishingdrawerstamp`);
            const existingRecords = response.data.records || []; // Extraer los registros correctamente


            const recordToDelete = existingRecords.find(record => record.SM_Vehicle_ID === vehicleId);

            if (!recordToDelete) {
                throw new Error("No se encontró un registro con este vehículo.");
            }


            await DataService.delete(`/models/sm_fishingdrawerstamp/${recordToDelete.id}`);

            callback(true);
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err.message);
        }
    };
};


const submitDrawerStamp = (fishingId, form, callback) => {
    return async (dispatch) => {
        try {

            console.log(`Sello:  ${JSON.stringify(form)}`);

            let binValidationQuery = `SM_Fishing_ID eq ${fishingId}`;
            if (form.sealId) {
                binValidationQuery += ` AND SM_FishingDrawerStamp_ID neq ${form.sealId} `;
            }
            binValidationQuery += ` AND ( SM_Stamp eq '${escape(form.seal)}' OR SM_Van eq '${escape(form.van)}' )`;

            const bBinesResponse = await DataService.get(`/models/sm_fishingdrawerstamp?$filter=${binValidationQuery}`);
            if (bBinesResponse.data && bBinesResponse.data.records && bBinesResponse.data.records.length > 0) {
                callback(false, "El Número de Sello o el Furgón ya están en uso en esta pesca");
            } else {
                const payload = {
                    "SM_Fishing_ID": fishingId,
                    "Name": form.seal,
                    "SM_Stamp": form.seal,
                    "SM_Van": form.van,
                    "SM_DrawersCount": parseInt(form.drawers)
                };
                if (form.sealId) {
                    await DataService.put(`/models/sm_fishingdrawerstamp/${form.sealId}`, payload);
                } else {
                    await DataService.post(`/models/sm_fishingdrawerstamp`, payload);
                }
                callback(true);
            }
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const submitDrawerStampV2 = (fishingId, form, callback) => {
    return async (dispatch) => {
        try {

            const response = await DataService.get(`/models/sm_fishingdrawerstamp`);
            const existingRecords = response.data.records || [];  // Extraer los registros correctamente


            console.log(existingRecords)
            const isDuplicateKit = existingRecords.some(record => record.SM_SecurityKits_ID?.id === form.kitId);
            const isDuplicateVehicle = existingRecords.some(record => record.SM_Vehicle_ID?.id === form.vehicleId);

            console.log(isDuplicateKit)
            console.log(isDuplicateVehicle)

            let errorMessage = "";
            if (isDuplicateKit) errorMessage += "El Kit de Seguridad ya está registrado.\n";
            if (isDuplicateVehicle) errorMessage += "El Vehículo ya está registrado.\n";


            if (errorMessage) {
                message.error(errorMessage);  // Muestra el mensaje en UI si se usa Ant Design
                throw new Error(errorMessage.trim());
            }


            const payload = {
                "SM_Fishing_ID": fishingId,
                "Name": form.seal,
                "SM_SecurityKits_ID": form.kitId,  // Corregido para coincidir con el JSON del GET
                "SM_Vehicle_ID": form.vehicleId,  // Corregido para coincidir con el JSON del GET
                "sm_kdrawerscount": parseInt(form.drawerCaladas),
                "sm_sdrawerscount": parseInt(form.drawerSolidas)
            };


            if (form.sealId) {
                await DataService.put(`/models/sm_fishingdrawerstamp/${form.sealId}`, payload);
            } else {
                await DataService.post(`/models/sm_fishingdrawerstamp`, payload);
            }

            callback(true);
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err.message);
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
                "SM_Metabisulfito": parseFloat(form.drawerMetabisulfito)
            };

            console.log(">>>> " + JSON.stringify(payload));

            if (form.drawerId) {
                console.log("updating >>>> ");
                await DataService.put(`/models/sm_fishingdrawer/${form.drawerId}`, payload);
            } else {
                console.log("creating >>>> ");
                await DataService.post(`/models/sm_fishingdrawer`, payload);
            }
            callback(true);
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};

const sendDrawerInfo = (fishingId, coordId, selectedTreaterId, drawerIce, drawerMetabisulfito, callback) => {

    return async (dispatch) => {
        try {

            const binValidationQuery = `SM_Fishing_ID eq ${fishingId}`;
            const bBinesResponse = await DataService.get(`/models/sm_fishingdrawer?$filter=${binValidationQuery}`);

            if (!bBinesResponse.data || !bBinesResponse.data.records || bBinesResponse.data.records.length === 0) {
                callback(false, "No se han cargado gavetas para esta pesca");
                return;
            }


            await DataService.put(`/models/sm_coordination/${coordId}`, {
                "AD_User_ID": selectedTreaterId, // ID del tratador seleccionado
                "SM_Ice": drawerIce, // Cantidad de hielo
                "sm_metabisulfite": drawerMetabisulfito,
                "SM_CoordinationStatus": "CONFIRMADO",

            });

            callback(true);
        } catch (err) {
            dispatch(netWorkError(err));
            callback(false, err.error.message);
        }
    };
};


export {
    loadCustodyCoordinations, loadCustodyCoord, submitCustodyCoord, cancelCustodyCoord, loadBinesByCoord,
    submitBin, deleteBin, sendBinInfo, loadDrawerByCoord, deleteDrawerStamp, loadDrawerStampByCoord,
    submitDrawerStamp, submitDrawer, sendDrawerInfo, submitDrawerStampV2, deleteDrawerStampByVehicle
};

