import React from 'react';
import { Table } from 'antd';

function ScrollableTable({ mainTableData, showDetails }) {
  const columns = [
    {
      title: '',
      dataIndex: 'descripcion',
      key: 'descripcion',
      fixed: 'left',
      width: 203,
      render: (text, record) => {
        if (['marca_alimento', 'variables_produccion_precria', 'costos_produccion_precria', 'variables_produccion_engorde', 'costos_produccion', 'rendimiento_produccion'].includes(record.key)) {
          return <strong>{text}</strong>;
        } else if (record.key === 'fca') {
          return <span>{text}</span>;
        }
        return text;
      },
    },
    {
      title: 'Ciclo 1',
      dataIndex: 'ciclo1',
      key: 'ciclo1',
      width: 100,
      render: (text, record) => (record.key === 'marca_alimento' ? <a href="#cycle1" style={{ textAlign: 'initial' }} onClick={() => showDetails('ciclo1')}>{text}</a> : text),
    },
    {
      title: 'Ciclo 2',
      dataIndex: 'ciclo2',
      key: 'ciclo2',
      width: 102,
      render: (text, record) => (record.key === 'marca_alimento' ? <a href="#cycle2" style={{ textAlign: 'initial' }} onClick={() => showDetails('ciclo2')}>{text}</a> : text),
    },
    {
      title: 'Ciclo 3',
      dataIndex: 'ciclo3',
      key: 'ciclo3',
      width: 102,
      render: (text, record) => (record.key === 'marca_alimento' ? <a href="#cycle3" style={{ textAlign: 'initial' }} onClick={() => showDetails('ciclo3')}>{text}</a> : text),
    },
    {
      title: 'Ciclo 4',
      dataIndex: 'ciclo4',
      key: 'ciclo4',
      width: 100,
      render: (text, record) => (record.key === 'marca_alimento' ? <a href="#cycle4" style={{ textAlign: 'initial' }} onClick={() => showDetails('ciclo4')}>{text}</a> : text),
    },
    {
      title: 'Ciclo 5',
      dataIndex: 'ciclo5',
      key: 'ciclo5',
      width: 92,
      render: (text, record) => (record.key === 'marca_alimento' ? <a href="#cycle5" style={{ textAlign: 'initial' }} onClick={() => showDetails('ciclo5')}>{text}</a> : text),
    },
  ];

  return (
    <div style={{ height: '210px', overflowY: 'auto', overflowX: 'hidden' }}>
      <Table
        columns={columns}
        dataSource={mainTableData}
        pagination={false}
        bordered
        showHeader={false}
        rowKey="key"
        className="custom-table-padding-table-1 table-responsive"
        tableLayout="fixed"
        rowClassName={(record) =>
          ['variables_produccion_precria', 'costos_produccion_precria', 'variables_produccion_engorde', 'costos_produccion', 'rendimiento_produccion'].includes(record.key)
            ? 'custom-black-row'
            : ''
        }
      />
    </div>
  );
}

export default ScrollableTable;