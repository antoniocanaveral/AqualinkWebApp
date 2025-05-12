import React from 'react';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const FeedingRealTable = ({ feedingreport }) => {
  const poolSize = Number(feedingreport?.SM_PoolSize) || 1;
  const rawData = feedingreport?.feedingdata_realjson || [];

  // Map and format the raw data
  const formattedData = rawData.map((item) => {
    const sm_dailydosereal = Number(item.sm_dailydosereal || 0);
    const sm_accumulatedfoodreal =
      sm_dailydosereal === 0 ? '0.00' : Number(item.sm_accumulatedfoodreal || 0).toFixed(2);

    return {
      key: item.sm_index,
      fecha: dayjs(item.sm_planneddate).format('YYYY-MM-DD'),
      sm_index: item.sm_index,
      animalest: Math.round(item.animalest || 0),
      peso: '—',
      biomasa: Number(item.biomasa || 0).toFixed(2),
      sm_lineargrowthreal: Number(item.sm_lineargrowthreal || 0).toFixed(3),
      sm_weeklygrowthreal:
        item.sm_index % 7 === 0
          ? Number(item.sm_weeklygrowthreal || 0).toFixed(3)
          : '—',
      dieta: Number(item.sm_dailydoseadjustment || 0),
      sm_dailydosereal: sm_dailydosereal.toFixed(2),
      sm_dailydose_per_hectare:
        poolSize > 0 ? (sm_dailydosereal / poolSize).toFixed(2) : '0.00',
      sm_accumulatedfoodreal,
    };
  });

  // Sort by sm_index ascending
  const tableData = formattedData.sort((a, b) => a.sm_index - b.sm_index);

  const columns = [
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'DdC', dataIndex: 'sm_index', key: 'sm_index' },
    { title: 'Población', dataIndex: 'animalest', key: 'animalest' },
    { title: 'Peso', dataIndex: 'peso', key: 'peso' },
    { title: 'Biomasa', dataIndex: 'biomasa', key: 'biomasa' },
    { title: 'SGR', dataIndex: 'sm_lineargrowthreal', key: 'sm_lineargrowthreal' },
    { title: 'WGR', dataIndex: 'sm_weeklygrowthreal', key: 'sm_weeklygrowthreal' },
    { title: 'Dieta Aqualink', dataIndex: 'dieta', key: 'dieta' },
    { title: 'Kgs TTL día', dataIndex: 'sm_dailydosereal', key: 'sm_dailydosereal' },
    { title: 'Kgs TTL Ha', dataIndex: 'sm_dailydose_per_hectare', key: 'sm_dailydose_per_hectare' },
    { title: 'Alimento Acumulado', dataIndex: 'sm_accumulatedfoodreal', key: 'sm_accumulatedfoodreal' },
  ];

  return (
    <Cards title="Datos por Semana Reales" size="large">
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: 7 }}
        scroll={{ x: true }}
        bordered
      />
    </Cards>
  );
};

export default FeedingRealTable;
