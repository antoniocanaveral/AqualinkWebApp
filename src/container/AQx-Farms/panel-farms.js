import React, { lazy, Suspense, useRef } from 'react';
import { Row, Col, Skeleton, Typography, Badge, Space, Table } from 'antd';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import ProjectionKgPanel from './panel/charts/projections-kg-panel';
import CostProjectionWrapLab from './panel/charts/CostProjectionWrapLab';
import { AqualinkMaps } from '../../components/maps/aqualink-map';
import { useNavigate } from 'react-router-dom';

function PanelFarms() {


  const navigate = useNavigate();

  // Datos de la tabla
  const productData = [
    {
      key: '1',
      producto: 'Ziegler',
      ci: '45%',
      hoy: '2.50 kg',
      disp: '50 kg',
    },
    {
      key: '2',
      producto: 'Artemia',
      ci: 'A',
      hoy: '4.00 kg',
      disp: '15 kg',
    },
    {
      key: '3',
      producto: 'Algas',
      ci: 'A',
      hoy: '0.7 kg',
      disp: '12 kg',
    },
    {
      key: '4',
      producto: 'Flake',
      ci: 'B',
      hoy: '0.90 kg',
      disp: '1.80 kg',
    },
    {
      key: '5',
      producto: 'Vitamina C',
      ci: 'MF35',
      hoy: '0.12 kg',
      disp: '10.00 kg',
    },
  ];

  // Definición de columnas
  const columns = [
    {
      title: 'Producto',
      dataIndex: 'producto',
      key: 'producto',
    },
    {
      title: 'CI',
      dataIndex: 'ci',
      key: 'ci',
    },
    {
      title: 'Hoy',
      dataIndex: 'hoy',
      key: 'hoy',
    },
    {
      title: 'Disp.',
      dataIndex: 'disp',
      key: 'disp',
    },
  ];

  // Datos de la tabla de Coordinación de Cosechas
  const harvestData = [
    { key: '1', cliente: 'EcSSA Manabí', tipo: 'Reserva', larva: 'PL10', cantidad: '1.5 M', fecha: '04 Diciembre 2023', asignacion: 'Tanque 1' },
    { key: '2', cliente: 'Camarones Premium SA', tipo: 'Reserva', larva: 'PL10', cantidad: '500,000', fecha: '04 Diciembre 2023', asignacion: 'Tanque 9' },
    { key: '3', cliente: 'Palo Alto Cia Ltda', tipo: 'Pedido', larva: 'PL10', cantidad: '800,000', fecha: '05 Diciembre 2023', asignacion: 'Tanque 6' },
    { key: '4', cliente: 'Aquamar', tipo: 'Reserva', larva: 'PL12', cantidad: '900,000', fecha: '05 Diciembre 2023', asignacion: 'Tanque 4' },
    { key: '5', cliente: 'Pacifiqa del Sur', tipo: 'Reserva', larva: 'PL10', cantidad: '1 M', fecha: '05 Diciembre 2023', asignacion: 'Tanque 2' },
    { key: '6', cliente: 'EcSSA Manabí', tipo: 'Reserva', larva: 'PL12', cantidad: '500,000', fecha: '06 Diciembre 2023', asignacion: 'Tanque 8' },
    { key: '7', cliente: 'Unirsa', tipo: 'Reserva', larva: 'PL12', cantidad: '500,000', fecha: '06 Diciembre 2023', asignacion: 'Tanque 7' },
    { key: '8', cliente: 'Acuirsa', tipo: 'Reserva', larva: 'PL10', cantidad: '1.5 M', fecha: '07 Diciembre 2023', asignacion: 'Tanque 6' },
    { key: '9', cliente: 'Grupo Acuícola', tipo: 'Reserva', larva: 'PL12', cantidad: '800,000', fecha: '08 Diciembre 2023', asignacion: 'Tanque 5' },
    { key: '10', cliente: 'Shrimp Global', tipo: 'Reserva', larva: 'PL10', cantidad: '1 M', fecha: '08 Diciembre 2023', asignacion: 'Tanque 1' },
  ];


  // Definición de columnas para la tabla de Coordinación de Cosechas
  const harvestColumns = [
    { title: 'Cliente', dataIndex: 'cliente', key: 'cliente' },
    { title: 'Tipo', dataIndex: 'tipo', key: 'tipo' },
    { title: 'Larva', dataIndex: 'larva', key: 'larva' },
    { title: 'Cantidad', dataIndex: 'cantidad', key: 'cantidad' },
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'Asignación', dataIndex: 'asignacion', key: 'asignacion' },
  ];


  const tankData = [
    {
      id: 1,
      modulo: 'Módulo 1',
      tanque: 'Tanque 1',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
    {
      id: 2,
      modulo: 'Módulo 1',
      tanque: 'Tanque 2',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
    {
      id: 3,
      modulo: 'Módulo 1',
      tanque: 'Tanque 2',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
    {
      id: 4,
      modulo: 'Módulo 1',
      tanque: 'Tanque 2',
      porcentaje: 60,
      inicioCultivo: '05 Noviembre',
      finCultivo: '05 Diciembre',
      poblacionFinal: '3 MILLONES',
      supervivencia: '90%',
      estadoEntrega: 'PL12',
      animalesPorGramo: 280,
      reservado: '60% - 1.8 MILLONES',
      disponible: '40% - 1.2 MILLONES',
    },
  ];



  const TankCard = ({ data }) => (
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
          <span className="label">Camaronera:</span>
        </div>
        <div>
          <span>{data.nombreCamaronara || 'NA'}</span>
        </div>
      </div>
      <div className="flex-row">
        <div>
          <span className="label">Piscina Engorde:</span>
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
      <div className="flex-row">
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
        onClick={() => navigate("/farm/seeding-coords")}
        style={{ backgroundColor: '#0372ce', color: 'white', padding: '5px 10px', borderRadius: '5px', border: 'none' }}>
        Ver Piscina
      </button>
    </div>
  );


  const TankCarousel = ({ tankData }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
      <div style={{ position: "relative", width: "100%" }}>
        {/* Botón Izquierdo */}
        <button
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#0372ce",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {"<"}
        </button>

        {/* Contenedor del Carrusel */}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "20px",
            padding: "20px",
            whiteSpace: "nowrap",
          }}
        >
          {tankData.map((tank, index) => (
            <TankCard data={tank} key={index} />
          ))}
        </div>

        {/* Botón Derecho */}
        <button
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "#0372ce",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <>
      <PageHeader
        title="Control Panel"
        highlightText="Aqualink Camaronera"
        selectOptions={[
          ["Todas las camaroneras", "Camaronera 2", "Camaronera 3"],
          ["Todos los Sectores", "Sector 1", "Sector 2", "Sector 3"],
          ["Todas las Piscinas", "Piscina 1", "Piscina 2", "Piscina 3"]
        ]}

      />

      <Main>
      

        <Row gutter={25}>
          <Col xl={12} xs={24} xxl={10} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps width={'100%'} height={
                window.innerWidth >= 2000 ? '600px' :
                  '305px'
              } />
            </Suspense>
          </Col>
          <Col xl={12} xs={24} xxl={14} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <ProjectionKgPanel />
            </Suspense>
          </Col>
        </Row>


        <Row gutter={25} equal-heights>
          <Col xl={15} xs={24} xxl={16} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* Tabla de Coordinación de Cosechas */}
              <Cards title="Coordinación de Cosechas" size="large">
                <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="table-responsive">
                    <Table dataSource={harvestData} columns={harvestColumns} pagination={{ pageSize: 5 }} />
                  </div>

                  {/**Titulo */}
                  <div className="harvest-report-divider" />
                  <center>
                    <Typography.Title level={4} >
                      Piscinas con ciclos Activos
                    </Typography.Title>
                  </center>

                  <TankCarousel tankData={tankData} />

                </div>
              </Cards>
            </Suspense>
          </Col>

          <Col xl={9} xs={24} xxl={8} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Gráfico de Proyección de Costos */}
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Proyección de Costos" size="large" style={{ flex: 1 }}>
                <CostProjectionWrapLab />
              </Cards>
            </Suspense>

            {/* Tabla de Inventario de Productos */}
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Inventario de Productos" size="large" style={{ flex: 1 }}>
                  <Table  dataSource={productData} columns={columns} pagination={{pageSize:5}} />
              </Cards>

            </Suspense>
          </Col>
        </Row>

      </Main>
    </>
  );
}

export default PanelFarms;
