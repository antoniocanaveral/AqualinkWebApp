import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const TankCard = ({ data }) => {
    console.log(data)
    const navigate = useNavigate();

    const handleViewLote = () => {
        // Redirige a la ruta deseada con el loteID
        navigate(`/custody/coords/${data.ci_id}/view`);
    };

    return (
        <div
            style={{
                border: '2px solid #e3e3e3',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                width: '300px',
                minWidth: '300px',
            }}
        >
            {/* Nombre de camaronera */}
            <div className="flex-row">
                <div>
                    <span className="label">Camaronera:</span>
                </div>
                <div>
                    <span>{data.nombreCamaronera || 'NA'}</span>
                </div>
            </div>

            {/* Código AQLK */}
            <div className="flex-row">
                <div>
                    <span className="label">Código AQLK:</span>
                </div>
                <div>
                    <span>{data.codigoAQLK || 'NA'}</span>
                </div>
            </div>

            {/* LOTE ID */}
            <div >
                <div>
                    <center>
                        <span className="label">Lote ID</span>
                    </center>
                </div>
                <div>
                    <center>
                        <span>{data.loteID || 'NA'}</span>
                    </center>
                </div>
            </div>
            <br />
            <div className="harvest-report-divider-2" />

            {/* Estado */}
            <div className='flex-row'>
                <div>
                    <Typography.Title level={4} style={{ color: '#0372ce', fontWeight: 'bold' }}>
                        Estado:
                    </Typography.Title>
                </div>

                <Typography.Title level={4}>
                    {data.estado}
                </Typography.Title>
            </div>

            <div className="harvest-report-divider-2" />
            <br />

            {/* Fecha de Pesca */}
            <div className="flex-row">
                <div>
                    <span className="label">Fecha de Pesca:</span>
                </div>
                <div>
                    <span>{data.fechaPesca || 'NA'}</span>
                </div>
            </div>

            {/* Piscina */}
            <div className="flex-row">
                <div>
                    <span className="label">Piscina:</span>
                </div>
                <div>
                    <span>{data.piscina || 'NA'}</span>
                </div>
            </div>

            {/* Volumen Programado de Cosecha */}
            <div className="flex-row">
                <div>
                    <span className="label">Volumen Programado:</span>
                </div>
                <div>
                    <span>{data.volumenProgramado || 'NA'}</span>
                </div>
            </div>

            {/* Volumen Programado de Cosecha */}
            <div className="flex-row">
                <div>
                    <span className="label">Tipo de Cosecha:</span>
                </div>
                <div>
                    <span>{data.tipoCosecha || 'Manual'}</span>
                </div>
            </div>

            {/* Clasificación Reportada */}
            <div className="flex-row">
                <div>
                    <span className="label">Clasificación Reportada:</span>
                </div>
                <div>
                    <span>{data.clasificacionReportada || 'NA'}</span>
                </div>
            </div>

            <button
                style={{
                    backgroundColor: '#0372ce',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    border: 'none',
                    marginTop: '10px',
                }}
                onClick={handleViewLote}
            >
                Ver Lote
            </button>
        </div>
    );
};

export default TankCard;
