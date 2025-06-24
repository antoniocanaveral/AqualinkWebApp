import React, { useState } from 'react';
import { Table, Input, Button, message } from 'antd';
import { EditOutlined, CheckOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { registerSalesIncome} from '../../../redux/salesincome/actionCreator';
import { fetchProductionReports } from '../../../redux/views/production-report/actionCreator';

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
    console.log('Saving sales income for cycle:', cycle, 'reportIndex:', reportIndex);
    console.log('productionReports:', productionReports);
    console.log('Report at index:', productionReports[reportIndex]);

    const newValue = parseFloat(editValues[`${rowKey}-${cycle}`]) || 0;

    // Determine type based on rowKey
    const sm_salestype = rowKey === 'ingreso_ventas_raleo' ? 'RALEO' : 'COSECHA';

    // Check if report exists
    if (!productionReports[reportIndex]) {
      message.error('No production report found for this cycle.');
      console.error('No production report at index:', reportIndex);
      return;
    }

    // Get campaign ID
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
        sm_salesincome: newValue,
        sm_salestype,
      }));

      // Update local table data
      const updatedData = tableData.map(row => {
        if (row.key === rowKey) {
          return { ...row, [cycle]: newValue.toFixed(2) };
        }
        // Recalculate ingreso_ventas_total
        if (row.key === 'ingreso_ventas_total') {
          const raleoIncome = parseFloat(tableData.find(r => r.key === 'ingreso_ventas_raleo')?.[cycle]) || 0;
          const cosechaIncome = parseFloat(tableData.find(r => r.key === 'ingreso_ventas_cosecha')?.[cycle]) || 0;
          const biomassRaleo = productionReports[reportIndex]?.e_production_json?.biomass_raleo || 0;
          const biomassPesca = productionReports[reportIndex]?.e_production_json?.biomass_pesca || 0;
          const totalIncome = (biomassRaleo * raleoIncome) + (biomassPesca * cosechaIncome);
          return { ...row, [cycle]: totalIncome.toFixed(2) };
        }
        return row;
      });
      dispatch(fetchProductionReports());
      setTableData(updatedData);
      // Exit edit mode
      setEditState({ ...editState, [`${rowKey}-${cycle}`]: false });
      message.success('Sales income saved successfully.');
    } catch (error) {
      message.error('Failed to save sales income. Please try again.');
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
      width: 150,
    },
    ...['ciclo1', 'ciclo2', 'ciclo3', 'ciclo4', 'ciclo5'].map((cycle, index) => ({
      title: `Ciclo ${index + 1}`,
      dataIndex: cycle,
      key: cycle,
      width: 135,
      render: (value, record) => {
        const isEditable = (record.key === 'ingreso_ventas_raleo' || record.key === 'ingreso_ventas_cosecha') && productionReports[index];
        if (isEditable && editState[`${record.key}-${cycle}`]) {
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
            {isEditable && (
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