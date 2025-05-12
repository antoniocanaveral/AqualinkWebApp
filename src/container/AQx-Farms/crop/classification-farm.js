import React, { Suspense, useEffect } from 'react';
import { Row, Col, Typography, Card, Skeleton, Space, Select } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';

import { useState } from 'react';
import Cookies from 'js-cookie';
import { fetchSmClassifications } from '../../../redux/classification/actionCreatot';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import ClassificationDonutChart from './biomass/ClassificationDonutChart';

const processClassificationData = (smClassificationData, selectedBatch) => {
  // Definir los rangos de clasificación con colores
  const ranges = [
    { clasificacion: '150/200', values: [5, 6], color: '#ffe0b2' },
    { clasificacion: '120/150', values: [7, 8], color: '#c8e6c9' },
    { clasificacion: '100/120', values: [9], color: '#f3e5f5' },
    { clasificacion: '80/100', values: [10, 11, 12], color: '#fff9c4' },
    { clasificacion: '70/80', values: [13, 14], color: '#c5e1a5' },
    { clasificacion: '60/70', values: [15, 16], color: '#bbdefb' },
    { clasificacion: '50/60', values: [17, 18, 19], color: '#ffe0b2' },
    { clasificacion: '40/50', values: [20, 21, 22, 23, 24], color: '#d1c4e9' },
    { clasificacion: '30/40', values: [25, 26, 27, 28, 29, 30, 31, 32], color: '#ffcdd2' },
  ];

  // Filtrar por selectedBatch si está definido
  const filteredData = selectedBatch
    ? smClassificationData.filter(item => item.SM_Batch === selectedBatch)
    : smClassificationData;

  // Calcular el peso total global
  const totalWeightGlobal = filteredData.reduce(
    (sum, item) => sum + item.SM_GRxUnit * item.TotalQty,
    0
  );

  // Procesar los datos
  const processedData = [];

  // Agrupar datos por clasificación
  const classificationMap = {};

  filteredData.forEach((item) => {
    const grxUnit = item.SM_GRxUnit;
    const totalQty = item.TotalQty;

    // Encontrar el rango correspondiente
    const range = ranges.find((r) => r.values.includes(grxUnit));

    if (!range) return; // Ignorar si no cae en ningún rango

    // Calcular métricas
    const pesoTotal = grxUnit * totalQty;
    const porcentaje = totalWeightGlobal > 0 ? ((pesoTotal / totalWeightGlobal) * 100).toFixed(2) + '%' : '0.00%';

    if (!classificationMap[range.clasificacion]) {
      classificationMap[range.clasificacion] = [];
    }

    classificationMap[range.clasificacion].push({
      clasificacion: range.clasificacion,
      color: range.color,
      pesoEspecifico: grxUnit,
      muestra: totalQty,
      pesoTotal: pesoTotal,
      porcentaje: porcentaje,
    });
  });

  // Asegurarse de incluir todas las clasificaciones
  ranges.forEach((range) => {
    if (classificationMap[range.clasificacion]) {
      // Si hay datos para la clasificación, usarlos
      processedData.push(...classificationMap[range.clasificacion]);
    } else {
      // Si no hay datos, agregar una entrada con valores por defecto
      processedData.push({
        clasificacion: range.clasificacion,
        color: range.color,
        pesoEspecifico: range.min, // Usar el valor mínimo del rango como pesoEspecifico por defecto
        muestra: 0,
        pesoTotal: 0,
        porcentaje: '0.00%',
      });
    }
  });

  // Ordenar por clasificación y pesoEspecifico
  processedData.sort((a, b) => {
    if (a.clasificacion === b.clasificacion) {
      return a.pesoEspecifico - b.pesoEspecifico;
    }
    return ranges.findIndex((r) => r.clasificacion === a.clasificacion) -
      ranges.findIndex((r) => r.clasificacion === b.clasificacion);
  });

  return processedData;
};

function ClassificationFarm() {
  const dispatch = useDispatch();
  const { smClassificationData, loading } = useSelector(state => state.smClassification);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);
  const [selectedBatch, setSelectedBatch] = useState(null);

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

  const batchOptions = [...new Set((smClassificationData || []).map(r => r.SM_Batch))].map(batch => ({
    label: batch,
    value: batch,
  }));

  useEffect(() => {
    if (selectedPool)
      dispatch((fetchSmClassifications()));
  }, [dispatch, selectedPool]);

  // Procesar los datos de clasificación
  const data = processClassificationData(smClassificationData || [], selectedBatch);

  const renderRows = () => {
    let previousClasification = null;
    let rowspan = 1;
    const rows = [];

    data.forEach((row, index) => {
      const isFirstRowOfGroup = row.clasificacion !== previousClasification;

      if (isFirstRowOfGroup) {
        rowspan = 1;
        for (let i = index + 1; i < data.length; i++) {
          if (data[i].clasificacion === row.clasificacion) rowspan++;
          else break;
        }

        const porcentajeAgregado = data
          .filter(item => item.clasificacion === row.clasificacion)
          .reduce((total, item) => {
            const porcentaje = parseFloat(item.porcentaje) || 0;
            return total + porcentaje;
          }, 0)
          .toFixed(2) + '%';

        row.porcentajeAgregado = porcentajeAgregado;
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
        <Select
          style={{ width: '100%' }}
          placeholder="Seleccione un LoteID"
          options={batchOptions}
          value={selectedBatch}
          onChange={value => setSelectedBatch(value)}
          allowClear
          loading={loading}
        />
        <br />
        <br />
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
              <Cards title="" size="large">
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