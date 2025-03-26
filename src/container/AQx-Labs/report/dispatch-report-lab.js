import React, { useEffect, useState, useMemo } from 'react';
import { Row, Col, Table, Card } from 'antd';
import { Main } from '../../styled';
import ComparativeDispatchPerformanceBarChart from './charts/ComparativeDispatchPerformanceBarChart';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLablotesInfo } from '../../../redux/lablote/actionCreator';
import Cookies from 'js-cookie';

function DispatchReportLab() {
  const dispatch = useDispatch();
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const { lablotes, lablotesLoading, lablotesError } = useSelector((state) => state.lablote);
  const labOrgs = useSelector((state) => state.auth.labsOrgs);
  // Estado para la data que enviaremos al gráfico
  const [chartDataVariations, setChartDataVariations] = useState([]);

  useEffect(() => {
    dispatch(fetchLablotesInfo());
  }, [dispatch, selectedOrg]);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
  };

  const farmsSelectOptions = labOrgs.length > 0 ? [
    {
      options: labOrgs.map(org => ({
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

  const validLablotes = Array.isArray(lablotes) ? lablotes : [];


  // Función para calcular las constantes a partir del objeto de coordinación
  function getCalculatedConstants(coord) {
    if (!coord) {
      return {
        cantidadProyectada: 0,
        cantidadCoordinada: 0,
        cantidadDespachada: 0,
        cantidadSembrado: 0,
      };
    }
    // Se convierten los valores a Number para asegurar los cálculos
    const cantidadProyectada = coord.sm_density || 0;
    const cantidadCoordinada = coord.sm_confirmedtotal || 0;
    const cantidadDespachada = (coord.sm_confirmedtotal * 1000) * coord.sm_preliminarylaboratorycount
    const cantidadSembrado = (Number(coord.sm_kilosperpool) * 1000) * (Number(coord.sm_preliminarylaboratorycount) || 0);
    return { cantidadProyectada, cantidadCoordinada, cantidadDespachada, cantidadSembrado };
  }

  // Función para calcular las variaciones en porcentaje
  function getVariations(coord) {
    console.log(coord)
    const { cantidadProyectada, cantidadCoordinada, cantidadDespachada, cantidadSembrado } = getCalculatedConstants(coord);
    console.log(cantidadProyectada, cantidadCoordinada, cantidadDespachada, cantidadSembrado)
    const variacionLarvaCoordinada = cantidadProyectada ? (cantidadCoordinada / cantidadProyectada) : 0;
    const variacionSolicitadoDespachado = cantidadProyectada ? (cantidadSembrado / cantidadProyectada) : 0;
    const variacionDespachadoSembrado = cantidadDespachada ? (cantidadSembrado / cantidadDespachada) : 0;
    console.log("variacionDespachadoSembrado", cantidadSembrado, cantidadDespachada)

    return {
      variacionLarvaCoordinada,
      variacionSolicitadoDespachado,
      variacionDespachadoSembrado
    };
  }

  useEffect(() => {
    if (validLablotes.length > 0) {
      // Tomamos el primer lote que tenga coordinations_json
      const firstLote = validLablotes.find(l => Array.isArray(l.coordinations_json) && l.coordinations_json.length > 0);
      if (firstLote) {
        // Tomar las primeras 5 coordinaciones
        const coordinations = firstLote.coordinations_json.slice(0, 5);
        // Asegurarnos de que tenga 5 posiciones (rellenamos con null si faltan)
        while (coordinations.length < 5) {
          coordinations.push(null);
        }
        // Para cada coordinación calculamos las variaciones
        const variationsArray = coordinations.map(coord => getVariations(coord));
        // Guardamos ese array en el estado
        setChartDataVariations(variationsArray);
      } else {
        // Si no hay ningún lote con coordinaciones, dejamos el array vacío
        setChartDataVariations([]);
      }
    }
  }, [validLablotes]);

  const rowDefinitions = [
    {
      key: 'fecha_despacho',
      descripcion: 'Fecha de Despacho',
      getValue: (coord, lote) =>
        coord && coord.created ? new Date(coord.created).toLocaleDateString() : ''
    },
    {
      key: 'lote_lab',
      descripcion: 'Lote Lab',
      getValue: (coord, lote) => {
        if (coord && coord.sm_confirmedtotal && coord.sm_estimatedlabcount) {
          return lote.sm_lablote_ID && lote.sm_lablote_ID.identifier
            ? lote.sm_lablote_ID.identifier
            : lote.id;
        } else {
          return "";
        }
      }
    },
    {
      key: 'lote_camaronera',
      descripcion: 'Lote Camaronera',
      getValue: (coord) => coord?.coordination_value || ''
    },
    {
      key: 'notificacion_siembra',
      descripcion: 'Notificación de Siembra',
      getValue: (coord) => coord?.coordination_value || ''
    },
    {
      key: 'cantidad_larva_coordinada',
      descripcion: 'Cantidad de Larva Coordinada',
      getValue: (coord) => coord?.sm_confirmedtotal || ''
    },
    {
      key: 'volumen_estimado_coordinado',
      descripcion: 'Volumen Estimado Coordinado',
      getValue: (coord) => {
        if (coord && coord.sm_confirmedtotal && coord.sm_estimatedlabcount) {
          return ((coord.sm_confirmedtotal / coord.sm_estimatedlabcount) / 1000).toFixed(2) + ' kgs';
        }
        return '';
      }
    },
    {
      key: 'volumen_larva_despachada',
      descripcion: 'Volumen de Larva Despachada',
      getValue: (coord) => {
        if (coord && coord.sm_confirmedtotal && coord.sm_preliminarylaboratorycount) {
          return (((coord.sm_confirmedtotal / coord.sm_preliminarylaboratorycount / 1000)) + (coord.sm_confirmedtotal * 0.10) / coord.sm_preliminarylaboratorycount / 1000).toFixed(2) + ' kgs';
        }
        return '';
      }
    },
    {
      key: 'volumen_larva_recibido_finca',
      descripcion: 'Volumen de Larva Recibido en Finca',
      getValue: (coord) => {
        if (coord && coord.sm_kilosperpool) {
          return coord.sm_kilosperpool + " kgs";
        }
        return '';
      }
    },
    // Usando las nuevas funciones para calcular las variaciones
    {
      key: 'variacion_larva_coordinada',
      descripcion: 'Variación de larva coordinada',
      getValue: (coord) => {
        const { variacionLarvaCoordinada } = getVariations(coord);
        return (variacionLarvaCoordinada * 100).toFixed(2) + '%';
      }
    },
    {
      key: 'variacion_solicitado_despachado',
      descripcion: 'Variación Solicitado / Despachado',
      getValue: (coord) => {
        const { variacionSolicitadoDespachado } = getVariations(coord);
        return (variacionSolicitadoDespachado * 100).toFixed(2) + '%';
      }
    },
    {
      key: 'variacion_despachado_sembrado',
      descripcion: 'Variación Despachado / Sembrado',
      getValue: (coord) => {
        const { variacionDespachadoSembrado } = getVariations(coord);
        return (variacionDespachadoSembrado * 100).toFixed(2) + '%';
      }
    }
  ];

  const labloteTables = validLablotes
    .filter(lote => Array.isArray(lote.coordinations_json) && lote.coordinations_json.length > 0)
    .map(lote => {
      const coordinations = lote.coordinations_json.slice(0, 5);
      while (coordinations.length < 5) {
        coordinations.push(null);
      }
      const tableData = rowDefinitions.map(rowDef => {
        return {
          key: `${lote.id}-${rowDef.key}`,
          descripcion: rowDef.descripcion,
          siembra1: rowDef.getValue(coordinations[0], lote),
          siembra2: rowDef.getValue(coordinations[1], lote),
          siembra3: rowDef.getValue(coordinations[2], lote),
          siembra4: rowDef.getValue(coordinations[3], lote),
          siembra5: rowDef.getValue(coordinations[4], lote),
          type: 'data'
        };
      });
      return {
        labloteId: lote.id,
        warehouse: lote.warehouse_name,
        salesRegion: lote.sales_region_name,
        plantingDate: lote.SM_PlantingDate,
        tableData
      };
    });

  const columns = [
    {
      title: 'Descripción',
      dataIndex: 'descripcion',
      key: 'descripcion',
      width: 250,
      fixed: 'left',
      render: (text) => <span style={{ fontWeight: 'bold' }}>{text}</span>
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
