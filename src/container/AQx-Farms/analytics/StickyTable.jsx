import React from 'react';
import { Table } from 'antd';

function StickyTable({ stickyRows }) {
  const columns = [
    {
      title: '',
      dataIndex: 'descripcion',
      key: 'descripcion',
      fixed: 'left',
      width: 200,
    },
    { title: 'Ciclo 1', dataIndex: 'ciclo1', key: 'ciclo1', width: 100 },
    { title: 'Ciclo 2', dataIndex: 'ciclo2', key: 'ciclo2', width: 100 },
    { title: 'Ciclo 3', dataIndex: 'ciclo3', key: 'ciclo3', width: 100 },
    { title: 'Ciclo 4', dataIndex: 'ciclo4', key: 'ciclo4', width: 100 },
    { title: 'Ciclo 5', dataIndex: 'ciclo5', key: 'ciclo5', width: 100 },
  ];

  return (
    <Table
      columns={columns}
      dataSource={stickyRows}
      pagination={false}
      bordered
      showHeader={true}
      rowKey="key"
      className="custom-table-padding-table-1 table-responsive"
      tableLayout="fixed"
    />
  );
}

export default StickyTable;