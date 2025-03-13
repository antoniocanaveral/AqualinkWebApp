import moment from "moment";
import { formatNumber } from "../../../utility/utility";

export const getCoordData = (coordination) => [
  { key: '1', label: 'Camaronera:', value: coordination ? coordination.org_name : '-' },
  { key: '2', label: 'Piscina:', value: coordination ? coordination.pre_breeding_pool : '-' },
  { key: '3', label: 'Dirección:', value: coordination ? `${coordination.City} ${coordination.Address1}, ${coordination.Address2}` : '-' },
  { key: '4', label: 'Notificación:', value: coordination ? coordination.SM_FishingNotification : '-' },
  { key: '5', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY / HH:mm A') : '-' },
  { key: '6', label: 'PL Solicitado:', value: coordination ? formatNumber(coordination.requested_pl) : '-' },
  { key: '7', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '-' },
  { key: '8', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '-' },
  { key: '9', label: 'Días de Maduración del Agua:', value: coordination ? `${coordination.water_ripening_days} días` : '-' }
];

export const getCoordDataSummary = (coordination) => [
  { key: '1', label: 'Camaronera:', value: coordination ? coordination.org_name : '-' },
  { key: '2', label: 'Piscina:', value: coordination ? coordination.pre_breeding_pool : '-' },
  { key: '4', label: 'Notificación:', value: coordination ? coordination.SM_FishingNotification : '-' },
  { key: '5', label: 'Fecha de Siembra Solicitada:', value: coordination ? moment(coordination.planned_date).format('DD-MM-YYYY / HH:mm A') : '-' },
  { key: '7', label: 'Salinidad Solicitada:', value: coordination ? `${coordination.requested_salinity} ppm` : '-' },
  { key: '8', label: 'Cantidad Solicitada:', value: coordination ? `${formatNumber(coordination.requested_quantity)} larvas` : '-' }
];

export const getSendSummaryData = (state) => [
  { key: '1', label: 'Fecha - Hora:', value: state.form.answeredDate ? moment(state.form.answeredDate).format('DD-MM-YYYY / HH:mm A') : '-' },
  { key: '2', label: 'Módulo:', value: state.form.module || '-' },
  { key: '3', label: 'Tanque:', value: state.form.tank || '-' },
  { key: '4', label: 'Total Tanque:', value: state.form.tankTotal ? `${formatNumber(state.form.tankTotal)} larvas` : '-' },
  { key: '5', label: 'Total Confirmado:', value: state.form.confirmedTotal ? `${formatNumber(state.form.confirmedTotal)} larvas` : '-' },
  { key: '6', label: 'Conteo Preliminar Lab:', value: state.form.labCount ? `${formatNumber(state.form.labCount)} larvas/gramo` : '-' },
  { key: '7', label: 'PL:', value: state.form.pl || '-' },
  { key: '8', label: 'Salinidad:', value: state.form.salinity ? `${state.form.salinity} ppm` : '-' },
  { key: '9', label: 'Método de Envío:', value: state.form.methodName || '-' },
  { key: '10', label: 'Unidades por Empaque:', value: state.form.unitPerPack ? `${formatNumber(state.form.unitPerPack)} larvas` : '-' },
  { key: '11', label: 'Óxigeno en Camino:', value: state.form.oxygenOnTheGo ? 'Sí' : 'No' },
  { key: '12', label: 'Comida en Camino:', value: state.form.foodOnTheGo ? 'Sí' : 'No' }
];
