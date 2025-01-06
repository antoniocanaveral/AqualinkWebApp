import { Typography } from "antd";
import { useNavigate } from "react-router-dom";


const TankCard = ({ data }) => {
    const navigate = useNavigate();
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
                    <span className="label">Laboratorio:</span>
                </div>
                <div>
                    <span>{data.nombreCamaronara || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Tanque:</span>
                </div>
                <div>
                    <span>{data.piscinaEngorde || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Lote ID:</span>
                </div>
                <div>
                    <span>{data.loteID || 'NA'}</span>
                </div>
            </div>

            <div className='flex-row'>
                <div>
                    <Typography.Title level={4} style={{ color: '#0372ce' }}>
                        Avance Ciclo
                    </Typography.Title>
                </div>

                <Typography.Title level={4}>
                    {data.porcentaje}%
                </Typography.Title>
            </div>




            <div className="harvest-report-divider-2" />

            <div className="flex-row">
                <div>
                    <span className="label">Inicio de Cultivo:</span>
                </div>
                <div>
                    <span>{data.inicioCultivo || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Fin de Cultivo:</span>
                </div>
                <div>
                    <span>{data.finCultivo || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Biomasa estimada:</span>
                </div>
                <div>
                    <span>{data.biomasaEstimada || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Supervivencia real:</span>
                </div>
                <div>
                    <span>{data.supervivenciaReal || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">FCA real:</span>
                </div>
                <div>
                    <span>{data.fcaReal || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Clasificación de Pesca:</span>
                </div>
                <div>
                    <span>{data.clasificacionPesca || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">kg x Tanque
                <div>
                    <span className="label">Lbs x Ha.:</span>
                </div>
                <div>
                    <span>{data.lbsPorHa || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row">
                <div>
                    <span className="label">Coordinación Pesca:</span>
                </div>
                <div>
                    <span>{data.coordinacionPesca || 'NA'}</span>
                </div>
            </div>




            <button
                onClick={() => navigate("/lab/seeding-coords")}
                style={{ backgroundColor: '#0372ce', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
                Ver Tanque
            </button>
        </div>
    )
}

export default TankCard;
