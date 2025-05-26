/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useMemo } from 'react';
import { Row, Col, Table, Card } from 'antd';
import { Main } from '../../styled';
import ComparativeDispatchPerformanceBarChart from './charts/ComparativeDispatchPerformanceBarChart';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLablotesInfo } from '../../../redux/lablote/actionCreator';
import Cookies from 'js-cookie';
import usePageHeaderSelectors from '../../../hooks/usePageHeaderSelectors';

function DispatchReportLab() {
  const dispatch = useDispatch();
  const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);

  // Use the custom hook for organization selector
  const { selectedOrg, combinedSelectOptions } = usePageHeaderSelectors({
    orgsSelector: () => useSelector((state) => state.auth.labsOrgs),
    poolsSelector: () => [], // No pools needed
    includeSector: false, // No sector selector
    includePool: false,  // No pool selector
    orgType: 'Laboratorio', // Custom placeholder for lab
  });

  const [chartDataVariations, setChartDataVariations] = useState([]);

  // Fetch lablotes when selectedOrg changes
  useEffect(() => {
    if (selectedOrg) {
      dispatch(fetchLablotesInfo());
    }
  }, [dispatch, selectedOrg]);

  const validLablotes = Array.isArray(lablotes) ? lablotes : [];

  // Calculate constants for variations
  function getCalculatedConstants(coord) {
    if (!coord) {
      return {
        cantidadProyectada: 0,
        cantidadCoordinada: 0,
        cantidadDespachada: 0,
        cantidadSembrado: 0,
      };
    }

    const cantidadProyectada = coord.sm_density || 0;
    const cantidadCoordinada = coord.sm_confirmedtotal || 0;
    const cantidadDespachada = (coord.sm_confirmedtotal * 1000) * coord.sm_preliminarylaboratorycount;
    const cantidadSembrado = Number(coord.sm_kilosperpool) * 1000 * (Number(coord.sm_preliminarylaboratorycount) || 0);
    return { cantidadProyectada, cantidadCoordinada, cantidadDespachada, cantidadSembrado };
  }

  // Calculate variations
  function getVariations(coord) {
    const { cantidadProyectada, cantidadCoordinada, cantidadDespachada, cantidadSembrado } = getCalculatedConstants(coord);
    const variacionLarvaCoordinada = cantidadProyectada ? cantidadCoordinada / cantidadProyectada : 0;
    const variacionSolicitadoDespachado = cantidadProyectada ? cantidadSembrado / cantidadProyectada : 0;
    const variacionDespachadoSembrado = cantidadDespachada ? cantidadSembrado / cantidadDespachada : 0;

    return {
      variacionLarvaCoordinada,
      variacionSolicitadoDespachado,
      variacionDespachadoSembrado,
    };
  }

  // Update chart data variations
  useEffect(() => {
    if (validLablotes.length > 0) {
      const firstLote = validLablotes.find((l) => Array.isArray(l.coordinations_json) && l.coordinations_json.length > 0);
      if (firstLote) {
        const coordinations = firstLote.coordinations_json.slice(0, 5);
        while (coordinations.length < 5) {
          coordinations.push(null);
        }
        const variationsArray = coordinations.map((coord) => getVariations(coord));
        setChartDataVariations(variationsArray);
      } else {
        setChartDataVariations([]);
      }
    }
  }, [validLablotes]);

  // Row definitions for table
  const rowDefinitions = [
    {
      key: 'fecha_despacho',
      descripcion: 'Fecha de Despacho',
      getValue: (coord) => (coord && coord.created ? new Date(coord.created).toLocaleDateString() : ''),
    },
    {
      key: 'lote_lab',
      descripcion: 'Lote Lab',
      getValue: (coord, lote) =>
        coord && coord.sm_confirmedtotal && coord.sm_estimatedlabcount
          ? lote.sm_lablote_ID && lote.sm_lablote_ID.identifier
            ? lote.sm_lablote_ID.identifier
            : lote.id
          : '',
    },
    {
      key: 'lote_camaronera',
      descripcion: 'Lote Camaronera',
      getValue: (coord) => coord?.coordination_value || '',
    },
    {
      key: 'notificacion_siembra',
      descripcion: 'Notificación de Siembra',
      getValue: (coord) => coord?.coordination_value || '',
    },
    {
      key: 'cantidad_larva_coordinada',
      descripcion: 'Cantidad de Larva Coordinada',
      getValue: (coord) => coord?.sm_confirmedtotal || '',
    },
    {
      key: 'volumen_estimado_coordinado',
      descripcion: 'Volumen Estimado Coordinado',
      getValue: (coord) =>
        coord && coord.sm_confirmedtotal && coord.sm_estimatedlabcount
          ? ((coord.sm_confirmedtotal / coord.sm_estimatedlabcount) / 1000).toFixed(2) + ' kgs'
          : '',
    },
    {
      key: 'volumen_larva_despachada',
      descripcion: 'Volumen de Larva Despachada',
      getValue: (coord) =>
        coord && coord.sm_confirmedtotal && coord.sm_preliminarylaboratorycount
          ? (
            coord.sm_confirmedtotal / coord.sm_preliminarylaboratorycount / 1000 +
            (coord.sm_confirmedtotal * 0.1) / coord.sm_preliminarylaboratorycount / 1000
          ).toFixed(2) + ' kgs'
          : '',
    },
    {
      key: 'volumen_larva_recibido_finca',
      descripcion: 'Volumen de Larva Recibido en Finca',
      getValue: (coord) => (coord && coord.sm_kilosperpool ? coord.sm_kilosperpool + ' kgs' : ''),
    },
    {
      key: 'variacion_larva_coordinada',
      descripcion: 'Variación de larva coordinada',
      getValue: (coord) => {
        const { variacionLarvaCoordinada } = getVariations(coord);
        return (variacionLarvaCoordinada * 100).toFixed(2) + '%';
      },
    },
    {
      key: 'variacion_solicitado_despachado',
      descripcion: 'Variación Solicitado / Despachado',
      getValue: (coord) => {
        const { variacionSolicitadoDespachado } = getVariations(coord);
        return (variacionSolicitadoDespachado * 100).toFixed(2) + '%';
      },
    },
    {
      key: 'variacion_despachado_sembrado',
      descripcion: 'Variación Despachado / Sembrado',
      getValue: (coord) => {
        const { variacionDespachadoSembrado } = getVariations(coord);
        return (variacionDespachadoSembrado * 100).toFixed(2) + '%';
      },
    },
  ];

  // Generate table data for each lablote
  const labloteTables = validLablotes
    .filter((lote) => Array.isArray(lote.coordinations_json) && lote.coordinations_json.length > 0)
    .map((lote) => {
      const coordinations = lote.coordinations_json.slice(0, 5);
      while (coordinations.length < 5) {
        coordinations.push(null);
      }
      const tableData = rowDefinitions.map((rowDef) => ({
        key: `${lote.id}-${rowDef.key}`,
        descripcion: rowDef.descripcion,
        siembra1: rowDef.getValue(coordinations[0], lote),
        siembra2: rowDef.getValue(coordinations[1], lote),
        siembra3: rowDef.getValue(coordinations[2], lote),
        siembra4: rowDef.getValue(coordinations[3], lote),
        siembra5: rowDef.getValue(coordinations[4], lote),
        type: 'data',
      }));
      return {
        labloteId: lote.id,
        warehouse: lote.warehouse_name,
        salesRegion: lote.sales_region_name,
        plantingDate: lote.SM_PlantingDate,
        tableData,
      };
    });

  const columns = [
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
      width: 250,
      fixed: 'left',
      render: (text) => <span style={{ fontWeight: 'bold' }}>{text}</span>,
    },
    {
      title: 'Siembra 1',
      dataIndex: 'siembra1',
      key: 'siembra1',
      width: 150,
    },
    {
      title: 'Siembra 2',
      dataIndex: 'siembra2',
      key: 'siembra2',
      width: 150,
    },
    {
      title: 'Siembra 3',
      dataIndex: 'siembra3',
      key: 'siembra3',
      width: 150,
    },
    {
      title: 'Siembra 4',
      dataIndex: 'siembra4',
      key: 'siembra4',
      width: 150,
    },
    {
      title: 'Siembra 5',
      dataIndex: 'siembra5',
      key: 'siembra5',
      width: 150,
    },
  ];

  return (
    <>
      <PageHeader
        title="Reporte de Despachos"
        highlightText="Aqualink Laboratorio"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
      />

      <Main>
        {labloteTables.length > 0 ? (
          labloteTables.map(loteInfo => (
            <Card
              key={loteInfo.labloteId}

              style={{ marginBottom: 20 }}
            >
              <Table
                columns={columns}
                dataSource={loteInfo.tableData}
                pagination={false}
                bordered
                rowKey="key"
                scroll={{ x: 1000 }}
              />
            </Card>
          ))
        ) : (
          <Row>
            <Col span={24}>
              <p>No hay lotes con coordinaciones disponibles.</p>
            </Col>
          </Row>
        )}

        <Row gutter={10} style={{ marginTop: '20px' }}>
          <Col span={24} style={{ display: 'flex' }}>
            <ComparativeDispatchPerformanceBarChart dataVariations={chartDataVariations} />
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default DispatchReportLab;
