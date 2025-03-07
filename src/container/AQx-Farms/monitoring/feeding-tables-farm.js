import React, { lazy, Suspense } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table, Button } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { Badge } from '../../pages/style';


import { useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';


function FeedingTableFarms() {
// Selección de org, sector y pool
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedPool, setSelectedPool] = useState(Number(Cookies.get('poolId')) || null);


  // Datos de organizaciones
  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  // Manejo de selección de org
  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    setSelectedPool(null);
    setSelectedSector(null);
  };

  // Manejo de selección de sector
  const handleSectorChange = (sectorId) => {
    setSelectedSector(sectorId);
    setSelectedPool(null);
  };

  // Manejo de selección de pool
  const handlePoolChange = (poolId) => {
    setSelectedPool(poolId);
    Cookies.set('poolId', poolId);
  };

  // Opciones para Farms
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

  // Opciones para sectores
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

  // Opciones para pools
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

  // Combinación de selects en el PageHeader
  const combinedSelectOptions = [
    ...farmsSelectOptions,
    ...sectorSelectOptions,
    ...poolsSelectOptions,
  ];


  const removableColumnKeys = [
    'supervivenciaReal',
    'poblacionReal',
    'pesoPromPxRealDiario',
    'pesoPromPxReal',
    'incrPxRealSemanal',
    'biomasaReal',
    'tasaAlimReal',
    'dietaRealTotalDia', // parte de 'Dieta REAL'
    'dietaRealHaDia',    // parte de 'Dieta REAL'
    'alimentoAcumCicloReal',
    'fcaReal',
    'dietaDiariaSugerida',
    'odAm',
    'tempAm',
    'muestroPlatos',
    'calidadAgua',
    'patologia',
    'supEstimadaDiaria',
    'pobEstimadaDiaria',
    'pesoPromPxEst',
    'pesoPromXSemanaEst',
    'incrPesoPromDiaEst',
    'incrPesoPromSemEst',
    'biomasaEstimada',
    'tasaAlimBioEst',
    'dietaProgTotalDia', // parte de 'dieta programada'
    'dietaProgHaDia',    // parte de 'dieta programada'
    'alimentoAcumuladoEst',
    'proteina',
    'numDosis',
    'metodoAlimentacion'
  ];

  const createTitle = (title, key, hideColumn) => {
    // Si la columna se puede ocultar, agregamos el botón "X"
    if (removableColumnKeys.includes(key)) {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{title}</span>
          <Button type="text" size="small" onClick={(e) => { e.stopPropagation(); hideColumn(key); }}>
            x
          </Button>
        </div>
      );
    }
    return title;
  };

  const [hiddenColumns, setHiddenColumns] = useState([]);

  const hideColumn = (colKey) => {
    setHiddenColumns(prev => [...prev, colKey]);
  };

  // Función recursiva para filtrar columnas
  const filterColumns = (cols) => {
    return cols
      .map(col => {
        // Si esta columna tiene hijos, filtramos sus hijos
        if (col.children) {
          const newChildren = filterColumns(col.children);
          // Si tras filtrar los hijos, no queda ninguno, esta columna podría quedar vacía.
          return newChildren.length > 0 ? { ...col, children: newChildren } : null;
        } else {
          // Si es columna simple, revisamos si está oculta
          if (hiddenColumns.includes(col.key)) {
            return null;
          }
          return col;
        }
      })
      .filter(Boolean);
  };

  const columns = [
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'fecha',
      width: 100,
      fixed: 'left',
      align: 'center',
    },
    {
      title: 'Semana',
      dataIndex: 'semana',
      key: 'semana',
      width: 80,
      align: 'center',
      fixed: 'left',
      onCell: (record) => {
        const rowSpan = record._rowSpanSemana;
        return { rowSpan };
      }
    },
    {
      title: (
        <span>
          Días <br /> PRE CRIA
        </span>
      ),
      dataIndex: 'diasPreCria',
      key: 'diasPreCria',
      width: 100,
      fixed: 'left',
      align: 'center',
    },
    {
      title: (
        <span>
          Días <br /> ENGORDE
        </span>
      ),
      dataIndex: 'diasEngorde',
      key: 'diasEngorde',
      width: 100,
      fixed: 'left',
      align: 'center',
    },
    {
      title: (
        'DATOS DE PRODUCCION (REALES)'
      ),
      className: 'custom-header-data-production',
      children: [
        {
          title: (
            <span>
              Supervivencia <br />REAL
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-production',
          children: [
            {
              title: createTitle('%', 'supervivenciaReal', hideColumn),
              dataIndex: 'supervivenciaReal',
              key: 'supervivenciaReal',
              width: 120,
              align: 'center'
            }
          ]
        },
        {
          title: (
            <span>
              Población <br /> REAL <br /> densidad x Ha
            </span>
          ),
          className: 'custom-header-data-production',
          align: 'center',
          children: [
            {
              title: createTitle('unidades', 'poblacionReal', hideColumn),
              dataIndex: 'poblacionReal',
              key: 'poblacionReal',
              align: 'center',
              width: 120
            }
          ]
        },
        {
          title: (
            <span>
              Px Diario <br /> REAL
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-production',
          children: [
            {
              title: createTitle('grs', 'pesoPromPxRealDiario', hideColumn),
              dataIndex: 'pesoPromPxRealDiario',
              key: 'pesoPromPxRealDiario',
              align: 'center',
              width: 150
            }
          ]
        },
        {
          title: (
            <span>
              Incremento <br /> de Peso Lineal
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-production',
          children: [
            {
              title: createTitle('grs', 'pesoPromPxReal', hideColumn),
              dataIndex: 'pesoPromPxReal',
              key: 'pesoPromPxReal',
              align: 'center',
              width: 150
            }
          ]
        },
        {
          title: (
            <span>
              Incremento Px<br /> por Semana
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-production',
          children: [
            {
              title: createTitle('grs', 'incrPxRealSemanal', hideColumn),
              dataIndex: 'incrPxRealSemanal',
              key: 'incrPxRealSemanal',
              align: 'center',
              width: 150
            }
          ]
        },
        {
          title: (
            <span>
              Biomasa <br /> REAL
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-production',
          children: [
            {
              title: createTitle('kg / dia', 'biomasaReal', hideColumn),
              dataIndex: 'biomasaReal',
              key: 'biomasaReal',
              align: 'center',
              width: 120
            }
          ]
        },
        {
          title: (
            <span>
              Tasa Alim <br /> REAL
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-production',
          children: [
            {
              title: createTitle('%', 'tasaAlimReal', hideColumn),
              dataIndex: 'tasaAlimReal',
              key: 'tasaAlimReal',
              width: 120,
              align: 'center'
            }
          ]
        },
        {
          title: 'Dieta REAL',
          className: 'custom-header-data-production',
          children: [
            {
              title: createTitle('kg/total/día', 'dietaRealTotalDia', hideColumn),
              dataIndex: 'dietaRealTotalDia',
              key: 'dietaRealTotalDia',
              width: 120,
              align: 'center'
            },
            {
              title: createTitle('kg/Ha/día', 'dietaRealHaDia', hideColumn),
              dataIndex: 'dietaRealHaDia',
              key: 'dietaRealHaDia',
              width: 120,
              align: 'center'
            }
          ]
        },
        {
          title: (
            <span>
              Alimento <br /> acumulado <br /> CICLO
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-production',
          children: [
            {
              title: createTitle('kgs', 'alimentoAcumCicloReal', hideColumn),
              dataIndex: 'alimentoAcumCicloReal',
              key: 'alimentoAcumCicloReal',
              width: 150,
              align: 'center'
            }
          ]
        },
        {
          title: 'FCA',
          className: 'custom-header-data-production',
          align: 'center',
          children: [
            {
              title: createTitle('FCA', 'fcaReal', hideColumn),
              dataIndex: 'fcaReal',
              key: 'fcaReal',
              width: 100,
              align: 'center'
            }
          ]
        }
      ]
    },

    {
      title: (
        'VARIABLES DE AJUSTE DE DIETA REAL'
      ),
      className: 'custom-header-data-variables-diet',
      children: [
        {
          title: (
            <span>
              Dieta Diaria <br /> Sugerida <br /> después de <br /> ajuste
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-variables-diet-focus',
          children: [
            {
              title: createTitle('kgs/Ha/dia', 'dietaDiariaSugerida', hideColumn),
              dataIndex: 'dietaDiariaSugerida',
              key: 'dietaDiariaSugerida',
              width: 180,
              align: 'center',
              onCell: () => ({
                style: {
                  backgroundColor: '#bcf0cb',
                  textAlign: 'center',
                  border: '1px solid #fff',
                },
              })
            }
          ]
        },
        {
          title: 'OD (am)',
          align: 'center',
          className: 'custom-header-data-variables-diet',
          children: [
            {
              title: createTitle('%', 'odAm', hideColumn),
              dataIndex: 'odAm',
              key: 'odAm',
              width: 100,
              align: 'center'
            }
          ]
        },
        {
          title: 'TEMP (am)',
          align: 'center',
          className: 'custom-header-data-variables-diet',
          children: [
            {
              title: createTitle('%', 'tempAm', hideColumn),
              dataIndex: 'tempAm',
              key: 'tempAm',
              align: 'center',
              width: 100
            }
          ]
        },
        {
          title: (
            <span>
              Muestro de<br /> Consumo
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-variables-diet',
          children: [
            {
              title: createTitle('%', 'muestroPlatos', hideColumn),
              dataIndex: 'muestroPlatos',
              key: 'muestroPlatos',
              align: 'center',
              width: 120
            }
          ]
        },
        {
          title: (
            <span>
              Producción<br /> Primaria ZooP <br /> & FitoP
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-variables-diet',
          children: [
            {
              title: createTitle('%', 'calidadAgua', hideColumn),
              dataIndex: 'calidadAgua',
              key: 'calidadAgua',
              align: 'center',
              width: 120
            }
          ]
        },
        {
          title: 'Patologia',
          align: 'center',
          className: 'custom-header-data-variables-diet',
          children: [
            {
              title: createTitle('%', 'patologia', hideColumn),
              dataIndex: 'patologia',
              key: 'patologia',
              align: 'center',
              width: 100
            }
          ]
        }
      ]
    },
    {
      title: (
        'DATOS ESTIMADOS DE PRODUCCIÓN'
      ),
      className: 'custom-header-data-projection',
      children: [
        {
          title: (
            <span>
              Supervivencia <br /> estimada <br /> diaria
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('%', 'supEstimadaDiaria', hideColumn),
              dataIndex: 'supEstimadaDiaria',
              key: 'supEstimadaDiaria',
              width: 180,
              align: 'center'
            }
          ]
        },
        {
          title: (
            <span>
              Población estimada<br /> diaria <br /> densidad x Ha
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('unidades', 'pobEstimadaDiaria', hideColumn),
              dataIndex: 'pobEstimadaDiaria',
              key: 'pobEstimadaDiaria',
              align: 'center',
              width: 180
            }
          ]
        },
        {
          title: (
            <span>
              Peso promedio <br /> estimado(Px)
            </span>
          ),
          className: 'custom-header-data-projection',
          align: 'center',
          children: [
            {
              title: createTitle('grs', 'pesoPromPxEst', hideColumn),
              dataIndex: 'pesoPromPxEst',
              key: 'pesoPromPxEst',
              align: 'center',
              width: 150
            }
          ]
        },
        {
          title: (
            <span>
              Peso promedio <br /> estimado por <br /> Semana
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('grs', 'pesoPromXSemanaEst', hideColumn),
              dataIndex: 'pesoPromXSemanaEst',
              key: 'pesoPromXSemanaEst',
              align: 'center',
              width: 180
            }
          ]
        },
        {
          title: (
            <span>
              Incremento de <br /> Peso Promedio <br /> Estimado Diario
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('grs', 'incrPesoPromDiaEst', hideColumn),
              dataIndex: 'incrPesoPromDiaEst',
              key: 'incrPesoPromDiaEst',
              width: 220,
              align: 'center'
            }
          ]
        },
        {
          title: (
            <span>
              Incremento de <br /> Peso Px <br /> estimado <br /> Semanal
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('grs', 'incrPesoPromSemEst', hideColumn),
              dataIndex: 'incrPesoPromSemEst',
              key: 'incrPesoPromSemEst',
              align: 'center',
              width: 220
            }
          ]
        },
        {
          title: (
            <span>
              Biomasa <br /> Estimada
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('kg / dia', 'biomasaEstimada', hideColumn),
              dataIndex: 'biomasaEstimada',
              key: 'biomasaEstimada',
              align: 'center',
              width: 150
            }
          ]
        },
        {
          title: (
            <span>
              Tasa <br /> Alimentación <br /> estimada
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('%', 'tasaAlimBioEst', hideColumn),
              dataIndex: 'tasaAlimBioEst',
              key: 'tasaAlimBioEst',
              align: 'center',
              width: 180
            }
          ]
        },
        {
          title: 'Dieta programada',
          className: 'custom-header-data-projection',
          align: 'center',
          children: [
            {
              title: createTitle('kg / total / día', 'dietaProgTotalDia', hideColumn),
              dataIndex: 'dietaProgTotalDia',
              key: 'dietaProgTotalDia',
              width: 150,
              align: 'center'
            },
            {
              title: createTitle('kg / ha /día', 'dietaProgHaDia', hideColumn),
              dataIndex: 'dietaProgHaDia',
              key: 'dietaProgHaDia',
              width: 150,
              align: 'center'
            }
          ]
        },
        {
          title: (
            <span>
              FCA <br /> estimado
            </span>
          ),
          className: 'custom-header-data-projection',
          align: 'center',
          children: [
            {
              title: createTitle('%', 'fcaEstimado', hideColumn),
              dataIndex: 'fcaEstimado',
              key: 'fcaEstimado',
              align: 'center',
              width: 150
            }
          ]
        },
        {
          title: (
            <span>
              Tipo de <br /> Alimento
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('% proteina', 'proteina', hideColumn),
              dataIndex: 'proteina',
              key: 'proteina',
              align: 'center',
              width: 150
            }
          ]
        },
        {
          title: (
            <span>
              Número de <br /> Dosis 
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('D / R / F', 'numDosis', hideColumn),
              dataIndex: 'numDosis',
              key: 'numDosis',
              align: 'center',
              width: 150
            }
          ]
        },
        {
          title: (
            <span>
              Método de <br /> Alimentación
            </span>
          ),
          align: 'center',
          className: 'custom-header-data-projection',
          children: [
            {
              title: createTitle('Boleo/Platos/Alim Aut', 'metodoAlimentacion', hideColumn),
              dataIndex: 'metodoAlimentacion',
              key: 'metodoAlimentacion',
              align: 'center',
              width: 180
            }
          ]
        }
      ]
    }
  ];

  // Datos de ejemplo (se utilizan los mismos del ejemplo anterior, con días y semanas)
  const data = [];
  for (let i = 1; i <= 14; i++) {
    data.push({
      key: i,
      fecha: `2024-12-${(i < 10 ? '0' : '') + i}`,
      semana: i <= 7 ? 1 : 2,
      diasPreCria: i,
      diasEngorde: i + 5,
      supervivenciaReal: 85,
      poblacionReal: 100000 + i,
      pesoPromPxRealDiario: 1.2 + i * 0.01,
      pesoPromPxReal: 1.0 + i * 0.01,
      incrPxRealSemanal: 0.2,
      biomasaReal: 200 + i,
      tasaAlimReal: 2.5,
      dietaRealTotalDia: 50 + i,
      dietaRealHaDia: 5 + i * 0.1,
      alimentoAcumCicloReal: 500 + i * 10,
      fcaReal: 1.5,
      aqualink: 'AQLData',
      dietaDiariaSugerida: 6,
      odAm: 8,
      tempAm: 26,
      muestroPlatos: 75,
      calidadAgua: 95,
      patologia: 0,
      supEstimadaDiaria: 90,
      pobEstimadaDiaria: 95000 + i,
      pesoPromPxEst: 1.1,
      pesoPromXSemanaEst: 1.3,
      incrPesoPromDiaEst: 0.05,
      incrPesoPromSemEst: 0.35,
      biomasaEstimada: 210 + i * 0.5,
      tasaAlimBioEst: 2.6,
      dietaProgTotalDia: 52 + i,
      dietaProgHaDia: 5.2 + i * 0.1,
      alimentoAcumuladoEst: 520 + i * 2,
      proteina: 30,
      numDosis: 'D',
      metodoAlimentacion: 'Boleo'
    });
  }

  // Función para agrupar la semana (igual que en ejemplo anterior)
  const mergeSemana = (data) => {
    const rowSpanInfo = [];
    let startIndex = 0;
    for (let i = 0; i < data.length; i++) {
      if (i === data.length - 1 || data[i].semana !== data[i + 1]?.semana) {
        const groupSize = i - startIndex + 1;
        rowSpanInfo[startIndex] = groupSize;
        for (let j = startIndex + 1; j <= i; j++) {
          rowSpanInfo[j] = 0;
        }
        startIndex = i + 1;
      }
    }
    return rowSpanInfo;
  };

  const rowSpanInfo = mergeSemana(data);
  data.forEach((item, index) => {
    item._rowSpanSemana = rowSpanInfo[index];
  });

  const filteredColumns = filterColumns(columns);


  const dataObject = {
    preCria: {
      section: "Pre Cría",
      id: "Ppc7",
      loteID: "AQLK",
      ciclo: 2,
      areaPiscinaEngorde: 1.5,
      fechaInicio: "10/nov/2024",
      fechaSiembra: "1/dic/2024",
      fechaEstFin: "28/feb/2025",
    },
    piscina: {
      section: "Piscina",
      id: "Pef4",
      loteID: "AQLK",
      ciclo: 2,
      areaPiscinaEngorde: 5,
      fechaInicio: "10/nov/2024",
      fechaTransferencia: "1/dic/2024",
      fechaEstFin: "28/feb/2025",
    },
    datosGenerales: {
      densidadInicialTotal: 450000,
      densidadPorHa: 90000,
      fcaEstimado: 1.1,
      pesoInicialEngorde: 0.6,
      protocoloAlimentacion: "man / auto",
      supervivenciaEstimada: "78%",
      pesoEstimadoCosecha: 32,
    },
  };


  return (
    <>
      <PageHeader 
        highlightText="Aqualink Monitoreo"
        title="Tablas de Alimentación"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
      />
      <Main>

       


        <Row gutter={15}>
          {/* Card para Datos Generales */}
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Datos Generales" size="large">
                <div style={{ fontSize: "12px" }}>
                  {/* Detalles Datos Generales */}
                  <div className="flex-row">
                    <div>
                      <span className="label">Densidad Inicial Total:</span>
                    </div>
                    <div>
                      <span>{dataObject.datosGenerales.densidadInicialTotal}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Densidad por Ha:</span>
                    </div>
                    <div>
                      <span>{dataObject.datosGenerales.densidadPorHa}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">FCA Estimado:</span>
                    </div>
                    <div>
                      <span>{dataObject.datosGenerales.fcaEstimado}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Peso Inicial Engorde (px):</span>
                    </div>
                    <div>
                      <span>{dataObject.datosGenerales.pesoInicialEngorde}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Protocolo Alimentación:</span>
                    </div>
                    <div>
                      <span>{dataObject.datosGenerales.protocoloAlimentacion}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Supervivencia Estimada:</span>
                    </div>
                    <div>
                      <span>{dataObject.datosGenerales.supervivenciaEstimada}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Peso Estimado a Cosecha (px):</span>
                    </div>
                    <div>
                      <span>{dataObject.datosGenerales.pesoEstimadoCosecha}</span>
                    </div>
                  </div>
                </div>
              </Cards>
            </Suspense>
          </Col>

          {/* Card para Pre Cría */}
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Pre Cría" size="large">
                {/* Detalles Pre Cría */}
                <div style={{ fontSize: "12px" }}>
                  <div className="flex-row">
                    <div>
                      <span className="label">Sección:</span>
                    </div>
                    <div>
                      <span>{dataObject.preCria.section}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">ID:</span>
                    </div>
                    <div>
                      <span>{dataObject.preCria.id}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Lote ID:</span>
                    </div>
                    <div>
                      <span>{dataObject.preCria.loteID}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Ciclo:</span>
                    </div>
                    <div>
                      <span>{dataObject.preCria.ciclo}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Área Piscina Pre Cría</span>
                    </div>
                    <div>
                      <span>{dataObject.preCria.areaPiscinaEngorde} ha</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Fecha Inicio:</span>
                    </div>
                    <div>
                      <span>{dataObject.preCria.fechaInicio}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Fecha Siembra:</span>
                    </div>
                    <div>
                      <span>{dataObject.preCria.fechaSiembra}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Fecha Estimada Fin:</span>
                    </div>
                    <div>
                      <span>{dataObject.preCria.fechaEstFin}</span>
                    </div>
                  </div>
                </div>
              </Cards>
            </Suspense>
          </Col>

          {/* Card para Piscina */}
          <Col xl={8} xs={24} style={{ display: "flex" }}>
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Piscina" size="large">
                <div style={{ fontSize: "12px" }}>
                  {/* Detalles Piscina */}
                  <div className="flex-row">
                    <div>
                      <span className="label">Sección:</span>
                    </div>
                    <div>
                      <span>{dataObject.piscina.section}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">ID:</span>
                    </div>
                    <div>
                      <span>{dataObject.piscina.id}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Lote ID:</span>
                    </div>
                    <div>
                      <span>{dataObject.piscina.loteID}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Ciclo:</span>
                    </div>
                    <div>
                      <span>{dataObject.piscina.ciclo}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Área Piscina Engorde:</span>
                    </div>
                    <div>
                      <span>{dataObject.piscina.areaPiscinaEngorde} ha</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Fecha Inicio:</span>
                    </div>
                    <div>
                      <span>{dataObject.piscina.fechaInicio}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Fecha Transferencia:</span>
                    </div>
                    <div>
                      <span>{dataObject.piscina.fechaTransferencia}</span>
                    </div>
                  </div>
                  <div className="harvest-report-divider-2" />

                  <div className="flex-row">
                    <div>
                      <span className="label">Fecha Estimada Fin:</span>
                    </div>
                    <div>
                      <span>{dataObject.piscina.fechaEstFin}</span>
                    </div>
                  </div>
                </div>
              </Cards>
            </Suspense>
          </Col>


        </Row>


        <Row gutter={25} equal-heights>
          <Col xl={24} xs={24} style={{ display: 'flex' }}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* Tabla de Alimentación/Muestreo de Platos */}
              <Cards title="Alimentación/Muestreo de Platos" size="large">
                <Table
                  columns={filteredColumns}
                  dataSource={data}
                  pagination={false}
                  scroll={{ x: 'max-content' }}
                  bordered
                />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default FeedingTableFarms;
