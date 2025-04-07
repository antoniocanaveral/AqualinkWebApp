import React from 'react';
import { Card, Typography, Space } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

const { Text } = Typography;

const StatusBox = ({ icon: Icon, label }) => {
    return (
        <Card
            bordered
            style={{
                borderRadius: 12,
                textAlign: 'center',
                padding: '10px 10px',
                minHeight: 50,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
        >
            <Space direction="horizontal" align="center">
                <div
                    style={{
                        backgroundColor: '#e6f7ff',
                        borderRadius: '50%',
                        width: 50,
                        height: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Icon size="24" color="#1890ff" />
                </div>
                <Text strong>{label}</Text>
                <CheckCircleTwoTone twoToneColor="#52c41a" style={{ fontSize: 18 }} />
            </Space>
        </Card>
    );
};

export default StatusBox;
