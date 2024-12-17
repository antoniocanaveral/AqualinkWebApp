import { Typography } from "antd";

const TankCard = ({ data }) => (
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
                <span className="label">Volumen Programado de Cosecha:</span>
            </div>
            <div>
                <span>{data.volumenProgramado || 'NA'}</span>
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
        >
            Ver Piscina
        </button>
    </div>
);

export default TankCard;
