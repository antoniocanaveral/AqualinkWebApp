import React, { useState } from 'react';
import { Row, Col, Form, Select, Input, Button, Upload, Table, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { PageHeader } from '../../../components/page-headers/page-headers.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addSecurityKit } from '../../../redux/inventory/actionCreator.js';
import Cookies from 'js-cookie';
import * as Papa from 'papaparse';

function InventaryAddSupplyCustody() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);
  const [csvData, setCsvData] = useState([]);
  const [uploading, setUploading] = useState(false);

  const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
  };

  const handleSubmit = async (values) => {
    const kitData = {
      SM_KitCode: values.SM_KitCode,
      SM_Stamp1: values.SM_Stamp1,
      SM_Stamp2: values.SM_Stamp2,
      SM_Stamp3: values.SM_Stamp3,
      SM_Stamp4: values.SM_Stamp4,
      SM_Tag: values.SM_Tag,
      SM_KitType: values.SM_KitType,
    };

    const success = await dispatch(addSecurityKit(kitData));

    if (success) {
      form.resetFields();
    }
  };


  const handleFileUpload = (file) => {
    Papa.parse(file, {
      complete: (result) => {
        const records = result.data
          .map((row) => ({
            SM_KitCode: row[0],
            SM_Stamp1: row[1],
            SM_Stamp2: row[2],
            SM_Stamp3: row[3],
            SM_Stamp4: row[4],
            SM_Tag: row[5],
            SM_KitType: row[6],
          }))
          .filter((item) => item.SM_KitCode && item.SM_KitType);

        if (records.length === 0) {
          message.error('El archivo CSV no contiene datos válidos.');
          return;
        }

        setCsvData(records);
        message.success('Archivo CSV cargado correctamente.');
      },
      skipEmptyLines: true,
    });

    return false;
  };


  const handleMassUpload = async () => {
    if (csvData.length === 0) {
      message.error('No hay datos para subir.');
      return;
    }

    setUploading(true);
    let successCount = 0;
    let errorCount = 0;

    for (const kit of csvData) {
      const success = await dispatch(addSecurityKit(kit));
      if (success) successCount++;
      else errorCount++;
    }

    setUploading(false);
    setCsvData([]);

    message.success(`Carga completada: ${successCount} éxitos, ${errorCount} errores.`);
  };


  const columns = [
    { title: 'Código del Kit', dataIndex: 'SM_KitCode', key: 'SM_KitCode' },
    { title: 'Sello 1', dataIndex: 'SM_Stamp1', key: 'SM_Stamp1' },
    { title: 'Sello 2', dataIndex: 'SM_Stamp2', key: 'SM_Stamp2' },
    { title: 'Sello 3', dataIndex: 'SM_Stamp3', key: 'SM_Stamp3' },
    { title: 'Sello 4', dataIndex: 'SM_Stamp4', key: 'SM_Stamp4' },
    { title: 'Tag', dataIndex: 'SM_Tag', key: 'SM_Tag' },
    { title: 'Tipo de Kit', dataIndex: 'SM_KitType', key: 'SM_KitType' },
  ];

  return (
    <>
      <PageHeader
        title="Añadir Kit de Seguridad"
        selectOptions={[
          {
            options: custodyOrgs.map((org) => ({ value: org.orgId, label: org.orgName })),
            onChange: handleOrgChange,
            placeholder: 'Seleccione una Empacadora',
            value: selectedOrg || undefined,
          },
        ]}
        selectedOrg={selectedOrg}
      />

      <Main>
        <Row gutter={25}>
          <Col xl={24} xs={24}>
            <Cards title="Nuevo Kit de Seguridad" size="large">
              <Form form={form} layout="vertical" requiredMark={false} onFinish={handleSubmit}>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Código del Kit" name="SM_KitCode" rules={[{ required: true, message: 'Ingrese el código del kit' }]}>
                      <Input placeholder="KIT-SEC-XXX" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Tag" name="SM_Tag" rules={[{ required: true, message: 'Ingrese el tag' }]}>
                      <Input placeholder="TAG-XXX" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Sello 1" name="SM_Stamp1" rules={[{ required: true, message: 'Ingrese el primer stamp' }]}>
                      <Input placeholder="STAMP-XXX" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Sello 2" name="SM_Stamp2">
                      <Input placeholder="STAMP-XXX" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Sello 3" name="SM_Stamp3">
                      <Input placeholder="STAMP-XXX" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Sello 4" name="SM_Stamp4">
                      <Input placeholder="STAMP-XXX" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="Tipo de Kit" name="SM_KitType" rules={[{ required: true, message: 'Seleccione el tipo de kit' }]}>
                      <Select placeholder="Seleccione un tipo">
                        <Select.Option value="BIN">BIN</Select.Option>
                        <Select.Option value="VAN">FURGÓN</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Button type="primary" htmlType="submit">
                      Añadir Kit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Cards>
          </Col>
        </Row>

        {/* 🔹 Subida de CSV */}
        <Cards title="Carga Masiva de Kits">
          <Upload beforeUpload={handleFileUpload} accept=".csv">
            <Button icon={<UploadOutlined />}>Subir CSV</Button>
          </Upload>
          {csvData.length > 0 && (
            <>
              <Table columns={columns} dataSource={csvData} pagination={{ pageSize: 5 }} rowKey="SM_KitCode" />
              <Button type="primary" onClick={handleMassUpload} loading={uploading}>
                Cargar Kits
              </Button>
            </>
          )}
        </Cards>
      </Main>
    </>
  );
}

export default InventaryAddSupplyCustody;
