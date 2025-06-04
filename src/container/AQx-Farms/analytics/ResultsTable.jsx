import React, { useState } from 'react';
import { Table, Input, Button, message } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { registerSalesIncome } from '../../../redux/salesincome/actionCreator';

function ResultsTable({ resultsTableData, productionReports }) {
  const dispatch = useDispatch();
  const [editState, setEditState] = useState({});
  const [editValues, setEditValues] = useState({});
  const [tableData, setTableData] = useState(resultsTableData);

  const handleEdit = (rowKey, cycle) => {
    setEditState({ ...editState, [`${rowKey}-${cycle}`]: true });
    setEditValues({
      ...editValues,
      [`${rowKey}-${cycle}`]: tableData.find(row => row.key === rowKey)[cycle] || '',
    });
  };

  const handleSave = async (rowKey, cycle, reportIndex) => {
    console.error('Saving sales income for cycle:', cycle, 'and rowKey:', rowKey);
    const newValue = parseFloat(editValues[`${rowKey}-${cycle}`]) || 0;
    // Get campaign ID from sm_production_report_view_id (or sm_campaign_view_id)
    const campaignId = productionReports[reportIndex]?.id ||
      productionReports[reportIndex]?.sm_campaign_view_id || null;

    if (!campaignId) {
      message.error('Campaign ID is missing for this cycle.');
      console.error('Campaign ID is missing for cycle:', cycle, 'Report:', productionReports[reportIndex]);
      return;
    }
    try {
      // Dispatch the registerSalesIncome action
      await dispatch(registerSalesIncome({
        C_Campaign_ID: campaignId,
        sm_totalsalesincome: newValue,
      }));

      // Update local table data to reflect the saved value
      const updatedData = tableData.map(row => {
        if (row.key === rowKey) {
          return { ...row, [cycle]: newValue.toFixed(2) };
        }
        return row;
      });
      setTableData(updatedData);

      // Exit edit mode
      setEditState({ ...editState, [`${rowKey}-${cycle}`]: false });
    } catch (error) {
      console.error('Failed to save sales income:', error);
    }
  };

  const handleInputChange = (e, rowKey, cycle) => {
    setEditValues({
      ...editValues,
      [`${rowKey}-${cycle}`]: e.target.value,
    });
  };

  const columns = [
    {
      title: '',
      dataIndex: 'descripcion',
      key: 'descripcion',
      fixed: 'left',
      width: 90,
    },
    ...['ciclo1', 'ciclo2', 'ciclo3', 'ciclo4', 'ciclo5'].map((cycle, index) => ({
      title: `Ciclo ${index + 1}`,
      dataIndex: cycle,
      key: cycle,
      width: 135,
      render: (value, record) => {
        if (record.key === 'ingreso_ventas_total' && editState[`${record.key}-${cycle}`]) {
          return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Input
                value={editValues[`${record.key}-${cycle}`]}
                onChange={(e) => handleInputChange(e, record.key, cycle)}
                style={{ width: 80, marginRight: 8 }}
              />
              <Button
                type="text"
                icon={<CheckOutlined />}
                onClick={() => handleSave(record.key, cycle, index)}
              />
            </div>
          );
        }
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{value}</span>
            {record.key === 'ingreso_ventas_total' && (
              <Button
                type="text"
                icon={<EditOutlined />}
                onClick={() => handleEdit(record.key, cycle)}
              />
            )}
          </div>
        );
      },
    })),
  ];

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={false}
      bordered
      rowKey="key"
      className="custom-table-padding table-responsive"
    />
  );
}

export default ResultsTable;