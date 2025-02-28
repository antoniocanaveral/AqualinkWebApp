import React from 'react';
import { Table } from 'antd';

const CustomTable = ({ data, pairsPerRow = 3 }) => {
    // Transformar los datos en grupos de pares
    const groupedData = data.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / pairsPerRow);

        if (!acc[groupIndex]) {
            acc[groupIndex] = { key: groupIndex.toString() };
        }

        acc[groupIndex][`label${index % pairsPerRow}`] = item.label;
        acc[groupIndex][`value${index % pairsPerRow}`] = item.value;

        return acc;
    }, []);

    // Generar columnas dinámicamente
    const dynamicColumns = Array.from({ length: pairsPerRow * 2 }).map((_, colIndex) => ({
        title: '',
        key: `col${colIndex}`,
        width: `${100 / (pairsPerRow * 2)}%`,
        render: (_, record) => {
            const pairIndex = Math.floor(colIndex / 2);
            const isLabel = colIndex % 2 === 0;

            return (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px',
                    }}
                >
                    {isLabel ? (
                        <>
                            <span
                                style={{
                                    height: '5px',
                                    width: '5px',
                                    backgroundColor: '#191830',
                                    borderRadius: '50%',
                                    marginRight: '8px',
                                }}
                            />
                            <span>{record[`label${pairIndex}`] || ''}</span>
                        </>
                    ) : (
                        <span>{record[`value${pairIndex}`] || ''}</span>
                    )}
                </div>
            );
        },
    }));

    return (
        <Table
          className="custom-table_lab"
          dataSource={groupedData}
          columns={dynamicColumns}
          pagination={false}
          showHeader={false}
          bordered
          rowClassName={() => 'custom-table-row'}
          components={{
            body: {
              row: (props) => <tr {...props} className="custom-table-row" />,
            },
          }}
        />
      );
};

export default CustomTable;
