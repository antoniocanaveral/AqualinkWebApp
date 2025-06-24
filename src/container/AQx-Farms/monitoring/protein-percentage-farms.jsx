import React, { lazy, Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Row, Col, Skeleton, Typography, Space, Table } from 'antd';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers';
import ProteinGrowthEvolutionChart from './feeding/ProteinGrowthEvolutionChart';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchFeedingreports, fetchFeedingreportsOrg } from '../../../redux/views/feeding-report/actionCreator';

function ProteinPercentageFarm() {
  const dispatch = useDispatch();
  const { feedingreports, loading } = useSelector(state => state.feedingreport);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

  const organizations = useSelector((state) => state.auth.farmsOrgs);
  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
  };

  const feedingColumns = [
    {
      title: 'Lote ID',
      dataIndex: 'loteId',
      key: 'loteId'
    },
    {
      title: <span>% Proteína<br />Pc</span>,
      align: "center",
      dataIndex: 'pPreCria',
      key: 'pPreCria'
    },
    {
      title: <span>% Proteína<br />Ppe</span>,
      dataIndex: 'pPreEngorde',
      align: "center",
      key: 'pPreEngorde'
    },
    {
      title: <span>% Proteína<br />Pe</span>,
      align: "center",
      dataIndex: 'pEngorde',
      key: 'pEngorde'
    },
    {
      title: 'Protocolo de Cultivo',
      dataIndex: 'sistema',
      key: 'sistema'
    },
    {
      title: 'Alimento',
      dataIndex: 'alimento',
      key: 'alimento'
    },
    {
      title: '# Días',
      dataIndex: 'dias',
      key: 'dias'
    },
    {
      title: <span>Crecimiento <br /> Semanal</span>,
      align: "center",
      dataIndex: 'crecimientoSemanal',
      key: 'crecimientoSemanal'
    },
    {
      title: <span>Supervivencia <br /> Semanal</span>,
      align: "center",
      dataIndex: 'supervivenciaSemanal',
      key: 'supervivenciaSemanal'
    },
  ];

  const generateFeedingData = (feedingreports) => {
    return feedingreports.map(report => {
      const preCriaProteins = report.pc_production_json?.map(product => `${product.foodproteinbase}%`).join('-') || '';
      const preEngordeProteins = report.pe_production_json?.map(product => `${product.foodproteinbase}%`).join('-') || '';
      const engordeProteins = report.e_production_json?.map(product => `${product.foodproteinbase}%`).join('-') || '';

      const alimentos = [...(report.pc_production_json || []), ...(report.pe_production_json || [])]
        .map(product => {
          const format = product.sm_productformat || '';
          if (format.includes('MICROEXTRUIDO')) return 'ME';
          if (format.includes('EXTRUIDO')) return 'E';
          if (format.includes('GRANULADO')) return 'G';
          if (format.includes('PELETIZADO')) return 'P';
          if (format.includes('LIQUIDO')) return 'L';
          return format;
        }).join('-') || '';

      const totalDias = ((report.SM_PreBreedingWeeks || 0) + (report.SM_FattenWeeks || 0) + (report.SM_PreFatteningWeeks || 0)) * 7;

      const realData = report.feedingdata_realjson;
      let maxSmIndexObject = null;
      let supervivenciaSemanal = 0;

      if (Array.isArray(realData) && realData.length > 0) {
        maxSmIndexObject = realData.reduce((max, current) => {
          return (current.sm_index > max.sm_index) ? current : max;
        }, realData[0]);

        // Calculate supervivenciaSemanal: (biomass_pesca + biomass_raleo) / sm_pxreal
        const biomassPesca = Number(maxSmIndexObject.biomass_pesca) || 0;
        const biomassRaleo = Number(maxSmIndexObject.biomass_raleo) || 0; // Note: biomass_raleo may not exist yet
        const pxReal = Number(maxSmIndexObject.sm_pxreal) || 0;

        if (pxReal !== 0) {
          supervivenciaSemanal = (biomassPesca + biomassRaleo) / pxReal;
          // Round to 2 decimal places for display
          supervivenciaSemanal = Number(supervivenciaSemanal.toFixed(2));
        } else {
          supervivenciaSemanal = 0; // Avoid division by zero
        }
      } else {
        console.error("El array 'feedingdata_realjson' no está definido o está vacío para el lote:", report.SM_Batch);
      }

      return {
        loteId: report.SM_Batch,
        pPreCria: preCriaProteins,
        pPreEngorde: preEngordeProteins,
        pEngorde: engordeProteins,
        sistema: report.sm_template_description,
        alimento: alimentos,
        dias: totalDias,
        crecimientoSemanal: maxSmIndexObject?.sm_weeklygrowthreal || 0,
        supervivenciaSemanal: supervivenciaSemanal,
      };
    });
  };

  const feedingData = generateFeedingData(feedingreports);

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

  const combinedSelectOptions = [
    ...farmsSelectOptions,
  ];

  useEffect(() => {
    dispatch(fetchFeedingreportsOrg());
  }, [dispatch, selectedOrg]);

  return (
    <>
      <PageHeader
        highlightText="Aqualink Monitoreo"
        title="Porcentaje de Proteína"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
      />
      <Main>
        <Row gutter={25}>
          <Col xl={24} xs={24} >
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Alimentación por tipo de Proteína" size="large">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: "20px" }}>
                  <div>
                    ME: Microextruido<br />
                  </div>
                  <div>
                    E: Extruido<br />
                  </div>
                  <div>
                    G: Granulado<br />
                  </div>
                  <div>
                    P: Peletizado<br />
                  </div>
                  <div>
                    L: Líquido<br />
                  </div>
                </div>
                <Table
                  className='table-responsive'
                  dataSource={feedingData}
                  columns={feedingColumns}
                  pagination={{ pageSize: 5 }}
                  onRow={(record) => ({
                    onClick: () => setSelectedBatch(record.loteId)
                  })}
                />
              </Cards>
            </Suspense>
          </Col>
          <Col xl={24} xs={24} >
            <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
              <Cards title="Evolución de Crecimiento por tipo de Proteína" size="large">
                <ProteinGrowthEvolutionChart
                  selectedBatch={selectedBatch}
                  feedingreports={feedingreports} />
              </Cards>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ProteinPercentageFarm;