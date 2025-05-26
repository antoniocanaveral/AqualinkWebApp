import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const TankCardLogistic = ({ data }) => {
    const navigate = useNavigate();

    const handleViewLote = () => {

        navigate(`/lab/seeding-coords`);
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
            {/* Camaronera */}
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

            {/* Lote ID */}
            <div className="flex-row">
                <div>
                    <span className="label">Lote ID:</span>
                </div>
                <div>
                    <span>{data.loteID || 'NA'}</span>
                </div>
            </div>
            <br />
            <div className="harvest-report-divider-2" />

            {/* Estado */}
            <div className='flex-row'>
                <div>
                    <Typography.Title level={5} style={{ color: '#0372ce', fontWeight: 'bold' }}>
                        Estado:
                    </Typography.Title>
                </div>

                <Typography.Title level={5}>
                    {data.estado}
                </Typography.Title>
            </div>

            <div className="harvest-report-divider-2" />
            <br />

            {/* Fecha de Siembra */}
            <div className="flex-row">
                <div>
                    <span className="label">Fecha de Despacho:</span>
                </div>
                <div>
                    <span>{data.fechaSiembra || 'NA'}</span>
                </div>
            </div>

            {/* Pre Cría destino (a sembrar) */}
            <div className="flex-row">
                <div>
                    <span className="label">Pre Cría destino (a sembrar):</span>
                </div>
                <div>
                    <span>{data.preCriaDestino || 'NA'}</span>
                </div>
            </div>

            {/* Piscina Engorde destino */}
            <div className="flex-row">
                <div>
                    <span className="label">Piscina Engorde destino:</span>
                </div>
                <div>
                    <span>{data.piscinaEngordeDestino || 'NA'}</span>
                </div>
            </div>

            {/* Estadio requerido */}
            <div className="flex-row">
                <div>
                    <span className="label">Estadio requerido:</span>
                </div>
                <div>
                    <span>
                        {data.estadioRequerido && data.estadioRequerido.length > 0
                            ? data.estadioRequerido.join(', ')
                            : 'NA'}
                    </span>
                </div>
            </div>

            {/* PL / Gramo */}
            <div className="flex-row">
                <div>
                    <span className="label">PL / Gramo:</span>
                </div>
                <div>
                    <span>
                        {data.plGramo && data.plGramo.length > 0
                            ? data.plGramo.join(', ')
                            : 'NA'}
                    </span>
                </div>
            </div>

            {/* Salinidad */}
            <div className="flex-row">
                <div>
                    <span className="label">Salinidad:</span>
                </div>
                <div>
                    <span>{data.salinidad || 'NA'}</span>
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
                    cursor: 'pointer',
                }}
                onClick={handleViewLote}
            >
                Ver Tanque
            </button>
        </div>
    );
};

export default TankCardLogistic;
