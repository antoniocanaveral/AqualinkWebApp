import React from 'react';
import { Table } from 'antd';
import dayjs from 'dayjs';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const FeedingProjectedTable = ({ feedingreport }) => {
  const poolSize = Number(feedingreport?.SM_PoolSize) || 1;
  const rawData = feedingreport?.feedingdata_projectedjson || [];

  // Map and format the raw data
  const formattedData = rawData.map((item) => ({
    key: item.sm_index,
    fecha: dayjs(item.sm_planneddate).format('YYYY-MM-DD'),
    sm_index: item.sm_index,
    sm_population: Math.round(item.sm_population || 0),
    sm_px: Number(item.sm_px || 0).toFixed(3),
    sm_biomasskgs: Number(item.sm_biomasskgs || 0).toFixed(2),
    sm_lineargrowth: Number(item.sm_lineargrowth || 0).toFixed(3),
    sm_weeklygrowth: item.sm_index % 7 === 0
      ? Number(item.sm_weeklygrowth || 0).toFixed(3)
      : '—',
    sm_feedingrate: Number(item.sm_feedingrate || 0).toFixed(3),
    sm_dailydose: Number(item.sm_dailydose || 0).toFixed(2),
    sm_dailydose_per_hectare:
      poolSize > 0 ? (item.sm_dailydose / poolSize).toFixed(2) : '0.00',
    sm_accumulatedfood: Number(item.sm_accumulatedfood || 0).toFixed(2),
  }));

  // Sort the data by sm_index
  const tableData = formattedData.sort((a, b) => a.sm_index - b.sm_index);

  const columns = [
    { title: 'Fecha', dataIndex: 'fecha', key: 'fecha' },
    { title: 'DdC', dataIndex: 'sm_index', key: 'sm_index' },
    { title: 'Población', dataIndex: 'sm_population', key: 'sm_population' },
    { title: 'Peso Px', dataIndex: 'sm_px', key: 'sm_px' },
    { title: 'Biomasa', dataIndex: 'sm_biomasskgs', key: 'sm_biomasskgs' },
    { title: 'SGR', dataIndex: 'sm_lineargrowth', key: 'sm_lineargrowth' },
    { title: 'WGR', dataIndex: 'sm_weeklygrowth', key: 'sm_weeklygrowth' },
    { title: 'Tasa %', dataIndex: 'sm_feedingrate', key: 'sm_feedingrate' },
    { title: 'Kgs TTL día', dataIndex: 'sm_dailydose', key: 'sm_dailydose' },
    { title: 'Kgs TTL Ha', dataIndex: 'sm_dailydose_per_hectare', key: 'sm_dailydose_per_hectare' },
    { title: 'Alimento', dataIndex: 'sm_accumulatedfood', key: 'sm_accumulatedfood' },
  ];

  return (
    <Cards title="Estrategia de Alimentación Proyectada" size="large">
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

export default FeedingProjectedTable;
