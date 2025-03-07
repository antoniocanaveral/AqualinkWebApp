import React, { Suspense } from 'react';
import { Row, Col, Typography, Card, Skeleton, Space } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import ClassificationDonutChart from './biomass/ClassificationDonutChart';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';

function ClassificationFarm() {
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
  };

  const handleSectorChange = (sectorId) => {
    setSelectedSector(sectorId);
    setSelectedPool(null);
  };

  const handlePoolChange = (poolId) => {
    setSelectedPool(poolId);
    Cookies.set('poolId', poolId);
  };

  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: farmsOrgsWithPools.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: 'Seleccione una Farm',
      value: selectedOrg || undefined,
    },
  ] : [];

  const sectorsOptions = selectedOrg
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .reduce((acc, pool) => {
        if (pool.salesRegion && !acc.find(sector => sector.value === pool.salesRegion.id)) {
          acc.push({
            value: pool.salesRegion.id,
            label: pool.salesRegion.name,
          });
        }
        return acc;
      }, [])
    : [];

  const sectorSelectOptions = selectedOrg ? [
    {
      options: sectorsOptions,
      onChange: handleSectorChange,
      placeholder: 'Seleccione un Sector',
      value: selectedSector || undefined,
    },
  ] : [];

  const poolsOptions = selectedSector
    ? farmsOrgsWithPools
      .find(org => org.orgId === selectedOrg)?.pools
      .filter(pool => pool.salesRegion && pool.salesRegion.id === selectedSector)
      .map(pool => ({
        value: pool.poolId,
        label: pool.poolName,
      }))
    : [];

  const poolsSelectOptions = selectedSector ? [
    {
      options: poolsOptions,
      onChange: handlePoolChange,
      placeholder: 'Seleccione una Pool',
      disabled: poolsOptions.length === 0,
      value: selectedPool || undefined,
    },
  ] : [];

  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];
  // Datos de ejemplo que incluyen el color de fondo para cada categoría
  const data = [
    { clasificacion: "150/200", color: "#ffe0b2", pesoEspecifico: 5, muestra: "", pesoTotal: "", porcentaje: "" },
    { clasificacion: "150/200", color: "#ffe0b2", pesoEspecifico: 6, muestra: "", pesoTotal: "", porcentaje: "" },
    { clasificacion: "120/150", color: "#c8e6c9", pesoEspecifico: 7, muestra: "", pesoTotal: "", porcentaje: "" },
    { clasificacion: "120/150", color: "#c8e6c9", pesoEspecifico: 8, muestra: "", pesoTotal: "", porcentaje: "" },
    { clasificacion: "100/120", color: "#f3e5f5", pesoEspecifico: 9, muestra: "", pesoTotal: "", porcentaje: "" },
    { clasificacion: "80/100", color: "#fff9c4", pesoEspecifico: 10, muestra: "", pesoTotal: "", porcentaje: "" },
    { clasificacion: "80/100", color: "#fff9c4", pesoEspecifico: 11, muestra: 2, pesoTotal: 24, porcentaje: "0.76%" },
    { clasificacion: "70/80", color: "#c5e1a5", pesoEspecifico: 13, muestra: 2, pesoTotal: 28, porcentaje: "0.89%" },
    { clasificacion: "70/80", color: "#c5e1a5", pesoEspecifico: 14, muestra: "", pesoTotal: "", porcentaje: "" },
    { clasificacion: "60/70", color: "#bbdefb", pesoEspecifico: 15, muestra: 4, pesoTotal: 60, porcentaje: "1.91%" },
    { clasificacion: "60/70", color: "#bbdefb", pesoEspecifico: 16, muestra: 5, pesoTotal: 80, porcentaje: "2.54%" },
    { clasificacion: "50/60", color: "#ffe0b2", pesoEspecifico: 17, muestra: 9, pesoTotal: 153, porcentaje: "4.86%" },
    { clasificacion: "50/60", color: "#ffe0b2", pesoEspecifico: 18, muestra: 21, pesoTotal: 378, porcentaje: "12.02%" },
    { clasificacion: "50/60", color: "#ffe0b2", pesoEspecifico: 19, muestra: 13, pesoTotal: 247, porcentaje: "7.85%" },
    { clasificacion: "50/60", color: "#ffe0b2", pesoEspecifico: 20, muestra: 28, pesoTotal: 560, porcentaje: "17.81%" },
    { clasificacion: "40/50", color: "#d1c4e9", pesoEspecifico: 21, muestra: 11, pesoTotal: 231, porcentaje: "7.34%" },
    { clasificacion: "40/50", color: "#d1c4e9", pesoEspecifico: 22, muestra: 30, pesoTotal: 660, porcentaje: "20.99%" },
    { clasificacion: "40/50", color: "#d1c4e9", pesoEspecifico: 23, muestra: 12, pesoTotal: 276, porcentaje: "8.78%" },
    { clasificacion: "40/50", color: "#d1c4e9", pesoEspecifico: 24, muestra: 6, pesoTotal: 144, porcentaje: "4.58%" },
    { clasificacion: "30/40", color: "#ffcdd2", pesoEspecifico: 25, muestra: 8, pesoTotal: 200, porcentaje: "6.36%" },
    { clasificacion: "30/40", color: "#ffcdd2", pesoEspecifico: 26, muestra: 4, pesoTotal: 104, porcentaje: "3.31%" },
  ];

  // Función para generar filas con rowspan y color de fondo personalizado
  const renderRows = () => {
    let previousClasification = null;
    let rowspan = 1;
    const rows = [];

    data.forEach((row, index) => {
      const isFirstRowOfGroup = row.clasificacion !== previousClasification;

      // Calcula el rowspan solo en la primera fila del grupo
      if (isFirstRowOfGroup) {
        rowspan = 1;
        for (let i = index + 1; i < data.length; i++) {
          if (data[i].clasificacion === row.clasificacion) rowspan++;
          else break;
        }

        // Calcula el porcentaje agregado para el grupo
        const porcentajeAgregado = data
          .filter(item => item.clasificacion === row.clasificacion)
          .reduce((total, item) => {
            const porcentaje = parseFloat(item.porcentaje) || 0;
            return total + porcentaje;
          }, 0)
          .toFixed(2) + '%'; // Formatea el resultado a 2 decimales y añade %

        row.porcentajeAgregado = porcentajeAgregado; // Asigna el valor calculado al campo
      }

      rows.push(
        <tr key={index}>
          {isFirstRowOfGroup && (
            <td rowSpan={rowspan} style={{ backgroundColor: row.color, padding: '8px' }}>
              {row.clasificacion}
            </td>
          )}
          <td style={{ borderBottom: '1px solid #ccc', padding: '8px', fontWeight: 'normal' }}>{row.pesoEspecifico}</td>
          <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>{row.muestra}</td>
          <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>{row.pesoTotal}</td>
          <td style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>{row.porcentaje}</td>
          {isFirstRowOfGroup && (
            <td rowSpan={rowspan} style={{ fontWeight: 'bold', textAlign: 'center', padding: '8px', borderBottom: '1px solid #ccc' }}>
              {row.porcentajeAgregado}
            </td>
          )}
        </tr>
      );

      previousClasification = row.clasificacion;
    });

    return rows;
  };


  return (
    <>
      <PageHeader

        highlightText="Aqualink Monitoreo"
        title="Clasificación"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>
        <Row gutter={[10, 0]} equal-heights>
          <Col xl={10} xs={24} style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <AqualinkMaps />
            </Suspense>

            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Clasificación" size="large" style={{ flex: 1, marginTop: 0 }}>
                <div style={{ width: "78%", margin: "0 auto" }}>
                  <ClassificationDonutChart data={data} />
                </div>
              </Cards>
            </Suspense>
          </Col>

          <Col xl={14} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <Cards title="Clasificación Pre Cocecha" size="large">
                <table className="full-width-table">
                  <thead>
                    <tr>
                      <th className="header-cell">Clasificación</th>
                      <th className="header-cell">Peso Específico</th>
                      <th className="header-cell">Muestra</th>
                      <th className="header-cell">Peso Total</th>
                      <th className="header-cell">%</th>
                      <th className="header-cell">% Agregado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderRows()}
                  </tbody>
                </table>


              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ClassificationFarm;
