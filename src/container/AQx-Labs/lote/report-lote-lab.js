import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { fetchLablotesInfo } from '../../../redux/lablote/actionCreator';

const LoteCarousel = ({ data, extractCoordinationData }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '30px' }}>
      {/* Botón Izquierdo */}
      <button
        onClick={scrollLeft}
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#0372ce',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        {"<"}
      </button>

      {/* Contenedor del Carrusel */}
      <div
        ref={carouselRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '20px',
          padding: '20px 60px', // Espacio para los botones
          whiteSpace: 'nowrap',
        }}
      >
        {data.map((lote, index) => {
          const { despacho, cantidad } = extractCoordinationData(lote.coordinations_json);
          return (
            <div key={index} style={{ minWidth: '350px' }}>
              <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                <Cards title={`Lote ID: ${lote.value || ''}`} size="large">
                  <div className="lote-card">
                    <div className="lote-item">
                      <span className="label">Módulo:</span>
                      <span>{lote.sales_region_name || 'N/A'}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Tanque:</span>
                      <span>{lote.warehouse_name || 'N/A'}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Fecha de Siembra:</span>
                      <span>{lote.PlantingDate || '0'}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Fecha de Pesca:</span>
                      <span>{lote.SM_FishingDate || '0'}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Volumen Total:</span>
                      <span className="volume-value">{lote.sm_targetbiomass?.toLocaleString() || '0'}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Coordinación 1:</span>
                      <span>{despacho[0]}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Cantidad 1:</span>
                      <span>{cantidad[0]}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Coordinación 2:</span>
                      <span>{despacho[1]}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Cantidad 2:</span>
                      <span>{cantidad[1]}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Coordinación 3:</span>
                      <span>{despacho[2]}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label">Cantidad 3:</span>
                      <span>{cantidad[2]}</span>
                    </div>
                    <div className="lote-item">
                      <span className="label ttl">TTL Disponible:</span>
                      <span className="ttl-value">{lote.sm_reservedbiomass?.toLocaleString() || '0'}</span>
                    </div>
                  </div>
                </Cards>
              </Suspense>
            </div>
          );
        })}
      </div>

      {/* Botón Derecho */}
      <button
        onClick={scrollRight}
        style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#0372ce',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        {">"}
      </button>
    </div>
  );
};

function LoteViewLab() {
  const dispatch = useDispatch();
  const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName'));
  const organizations = useSelector((state) => state.auth.labsOrgs);
  const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);

  useEffect(() => {
    dispatch(fetchLablotesInfo());
  }, [dispatch, selectedOrg]);

  const handleOrgChange = (orgId) => {
    setSelectedOrg(orgId);
    const selectedOrg = organizations.find(org => org.orgId === orgId);
    const orgEmail = selectedOrg ? selectedOrg.orgEmail : '';
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
  };

  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: organizations.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: 'Seleccione una Empacadora',
      value: selectedOrg || undefined,
    },
  ] : [];

  const combinedSelectOptions = [...farmsSelectOptions];

  // Función para extraer valores de coordinaciones (máximo 3)
  const extractCoordinationData = (coordinations) => {
    const despacho = ['', '', ''];
    const cantidad = ['', '', ''];

    if (coordinations && Array.isArray(coordinations)) {
      for (let i = 0; i < Math.min(3, coordinations.length); i++) {
        despacho[i] = coordinations[i]?.coordination_value || '';
        cantidad[i] = coordinations[i]?.sm_confirmedtotal?.toLocaleString() || '';
      }
    }
    return { despacho, cantidad };
  };

  if (lablotesLoading) {
    return <p>Cargando datos...</p>;
  }

  if (lablotesError) {
    return <p>Ocurrió un error al cargar los lotes: {lablotesError}</p>;
  }

  return (
    <>
      <PageHeader
        highlightText="Aqualink Laboratorio"
        title="Añadir Lote Laboratorio"
        organizations={organizations}
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
      />

      {/* Carrusel con los mismos detalles que en la grilla */}
      <Main>
        <LoteCarousel data={lablotes} extractCoordinationData={extractCoordinationData} />
      </Main>

     

      {/* Estilos CSS */}
      <style jsx>{`
        .lote-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .lote-item {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .lote-item:last-child {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          color: #555;
        }
        .ttl {
          color: #4acb63;
          font-size: 14px;
        }
        .ttl-value {
          font-weight: bold;
          font-size: 14px;
          color: #4acb63;
        }
        .volume-value {
          font-weight: bold;
          font-size: 14px;
          color: rgb(7, 8, 7);
        }
      `}</style>
    </>
  );
}

export default LoteViewLab;
