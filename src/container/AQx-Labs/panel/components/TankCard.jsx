import { Typography } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const TankCard = ({ data, request = false }) => {
    const navigate = useNavigate();

    const plantingDate = moment(data.SM_PlantingDate);
    const fishingDate = moment(data.SM_FishingDate);
    const today = moment();

    let avance = 0;
    if (plantingDate.isValid() && fishingDate.isValid() && today.isValid()) {
        const totalDays = fishingDate.diff(plantingDate, 'days');
        const elapsedDays = today.diff(plantingDate, 'days');
        avance = totalDays > 0 ? Math.min((elapsedDays / totalDays) * 100, 100).toFixed(2) : 0;
    }

    const formattedFishingDate = moment(data.SM_FishingDate).isValid()
        ? moment(data.SM_FishingDate).format("YYYY-MM-DD")
        : 'NA';
    const usado = (data.sm_targetbiomass || 0) - (data.sm_reservedbiomass || 0);
    return (
        <div headless
            style={{
                border: '2px solid #e3e3e3',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                width: '300px',
                minWidth: '300px',
            }}>
            <div className="flex-row">
                <div>
                    <span className="label">Módulo:</span>
                </div>
                <div>
                    <span>{data.sales_region_name || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Tanque:</span>
                </div>
                <div>
                    <span>{data.warehouse_name || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Lote ID:</span>
                </div>
                <div>
                    <span>{data.Value || 'NA'}</span>
                </div>
            </div>

            <div className='flex-row'>
                <div>
                    <Typography.Title level={4} style={{ color: '#0372ce' }}>
                        Avance Ciclo
                    </Typography.Title>
                </div>

                <Typography.Title level={4}>
                    {avance}%
                </Typography.Title>
            </div>




            <div className="harvest-report-divider-2" />

            <div className="flex-row">
                <div>
                    <span className="label">Inicio de Cultivo:</span>
                </div>
                <div>
                    <span>{data.SM_PlantingDate || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Fin de Cultivo:</span>
                </div>
                <div>
                    <span>{formattedFishingDate || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Poblacion total de tanque:</span>
                </div>
                <div>
                    <span>{data.sm_targetbiomass || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Supervivencia objetivo:</span>
                </div>
                <div>
                    <span>{`${data.sm_estimatedmortality}%` || 0}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">pl/gr objetivo para entrega:</span>
                </div>
                <div>
                    <span>{data.sm_targetpl || 0}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Reservado por coordinacion:</span>
                </div>
                <div>
                    <span>{usado || 0}</span>
                </div>
            </div>

            <div className="flex-row">
                <div>
                    <span className="label">Disponible:</span>
                </div>
                <div>
                    <span>{data.sm_reservedbiomass || 'NA'}</span>
                </div>
            </div>
            {!request && (
                <button
                    onClick={() => navigate("/lab/seeding-coords")}
                    style={{ backgroundColor: '#0372ce', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                    Ver Tanque
                </button>
            )}

        </div>
    )
}

export default TankCard;
