// src/container/AQx-Custody/cards/TankCardLab.js

import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const TankCardLab = ({ data }) => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                border: '2px solid #e3e3e3',
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                width: '100%', // Ajustado para ocupar el ancho del modal
                minWidth: '300px',
            }}
        >
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Módulo:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.modulo || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Tanque:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.tanque || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Lote ID:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.lote || 'NA'}</span>
                </div>
            </div>

            <div className='flex-row' style={{ marginBottom: '20px' }}>
                <div>
                    <Typography.Title level={4} style={{ color: '#0372ce', margin: 0 }}>
                        Avance Ciclo
                    </Typography.Title>
                </div>
                <Typography.Title level={4} style={{ margin: '0 0 0 10px' }}>
                    {data.avanceCiclo}%
                </Typography.Title>
            </div>

            <div className="harvest-report-divider-2" style={{ marginBottom: '20px', borderBottom: '1px solid #e3e3e3' }} />

            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Inicio de Corrida:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.inicioCorrida || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Fin de Corrida:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.finCorrida || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Biomasa:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.biomasa || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Supervivencia:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.supervivencia || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>FCA:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.FCA || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Clasificación:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.clasificacion || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '10px' }}>
                <div>
                    <span className="label"><strong>Población en Tanque:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.poblacionTanque || 'NA'}</span>
                </div>
            </div>
            <div className="flex-row" style={{ marginBottom: '20px' }}>
                <div>
                    <span className="label"><strong>Coordinación de Siembra:</strong></span>
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <span>{data.coordinacionSiembra || 'NA'}</span>
                </div>
            </div>

            <button
                onClick={() => navigate("/lab/seeding-coords")}
                style={{
                    backgroundColor: '#0372ce',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Ver Piscina
            </button>
        </div>
    );
};

export default TankCardLab;
