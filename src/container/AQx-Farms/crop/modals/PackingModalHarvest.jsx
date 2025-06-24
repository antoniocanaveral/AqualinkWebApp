import React, { useEffect, useState } from 'react';
import { Row, Col, Typography, Divider, Descriptions, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLotes, fetchLotesBySM_Coordination_ID } from '../../../../redux/lote/actionCreator';

const { Title, Text } = Typography;

function PackingModalHarvest({ lote, coordId }) {
  console.log('PackingModalHarvest - Received lote:', lote);
  const dispatch = useDispatch();
  const { lotes, loading, error } = useSelector((state) => state.lote);
  const [selectedLote, setSelectedLote] = useState(null);
  const [totalEntero, setTotalEntero] = useState(0);
  const [totalCola, setTotalCola] = useState(0);

  // Fetch lotes when the component mounts or lote changes
  useEffect(() => {
    if (lote) {
      console.log('Dispatching fetchLotes for lote:', lote);
      dispatch(fetchLotesBySM_Coordination_ID(coordId)).then(() => {
        console.log('fetchLotes dispatched successfully');
      }).catch((err) => {
        console.error('Error dispatching fetchLotes:', err);
      });
    } else {
      console.log('No lote provided, skipping fetchLotes');
    }
  }, [dispatch, lote]);

  // Filter lotes to find the one matching the provided SM_Batch
  useEffect(() => {
    console.log('Checking lotes:', lotes, 'for lote:', lote);
    if (lotes && lote && !loading) {
      const matchingLote = lotes.find(
        (record) => {
          const identifier = record.SM_Coordination_ID?.identifier;
          console.log('Comparing:', identifier, 'with', lote);
          return identifier === lote;
        }
      );
      if (matchingLote) {
        console.log('Found matching lote:', matchingLote);
        setSelectedLote(matchingLote);

        // Calculate total Entero
        const enteroSum = [
          '30_40',
          '40_50',
          '50_60',
          '60_70',
          '70_80',
          '80_100',
          '100_120',
          '120_150',
        ].reduce(
          (acc, category) => acc + (matchingLote[`sm_hocategory${category}`] || 0),
          0
        );
        setTotalEntero(enteroSum);

        // Calculate total Cola
        const colaSum = [
          '21_25',
          '26_30',
          '31_35',
          '36_40',
          '41_50',
          '51_60',
          '61_70',
          '71_90',
          '100_120',
          '120_150',
        ].reduce(
          (acc, category) => acc + (matchingLote[`sm_hl${category}`] || 0),
          0
        );
        setTotalCola(colaSum);
      } else {
        console.log('No matching lote found for:', lote);
        setSelectedLote(null);
      }
    } else {
      console.log('Lotes not ready or loading:', { lotes, loading, lote });
    }
  }, [lotes, lote, loading]);

  // Format date and time
  const formatDateTime = (dateString) => {
    return dateString ? new Date(dateString).toLocaleString() : 'N/A';
  };

  return (
    <div style={{ padding: '20px' }}>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <Text type="danger">Error al cargar los datos: {error}</Text>
      ) : selectedLote ? (
        <>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Title style={{ color: '#0372ce' }} level={4}>
                Información General
              </Title>
            </Col>
            <Col xs={24} sm={12}>
              <Text>
                <strong>Camaronera:</strong>{' '}
                {selectedLote.orgNameFromCoordination || 'N/A'}
              </Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>
                <strong>Fecha de Llegada:</strong>{' '}
                {formatDateTime(selectedLote.sm_arrivaltime)}
              </Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>
                <strong>Hora de Inicio:</strong>{' '}
                {formatDateTime(selectedLote.sm_processstarttime)}
              </Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>
                <strong>Volumen a Proceso:</strong>{' '}
                {selectedLote.sm_processvolume || 'N/A'}
              </Text>
            </Col>
            <Col xs={24} sm={12}>
              <Text>
                <strong>Basura:</strong> {selectedLote.sm_waste || '0'} kg
              </Text>
            </Col>
          </Row>

          <Divider />

          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Title level={4} style={{ color: '#0372ce' }}>
                Detalles de Entero
              </Title>
              <Col xs={24} sm={24}>
                <strong>Volumen Total de Entero: </strong>
                <Text>{totalEntero} lbs</Text>
              </Col>
              <br />
              <Descriptions bordered size="small" column={2}>
                {[
                  '30_40',
                  '40_50',
                  '50_60',
                  '60_70',
                  '70_80',
                  '80_100',
                  '100_120',
                  '120_150',
                ].map((category) => (
                  <Descriptions.Item
                    key={category}
                    label={`${category.replace('_', '/')}`}
                  >
                    {selectedLote[`sm_hocategory${category}`] || 0} lbs
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </Col>

            <Col xs={24} md={12}>
              <Title level={4} style={{ color: '#0372ce' }}>
                Detalles de Cola
              </Title>
              <Col xs={24} sm={24}>
                <strong>Volumen Total de Cola: </strong>
                <Text>{totalCola} lbs</Text>
              </Col>
              <br />
              <Descriptions bordered size="small" column={2}>
                {[
                  '21_25',
                  '26_30',
                  '31_35',
                  '36_40',
                  '41_50',
                  '51_60',
                  '61_70',
                  '71_90',
                  '100_120',
                  '120_150',
                ].map((category) => (
                  <Descriptions.Item
                    key={category}
                    label={`${category.replace('_', '/')}`}
                  >
                    {selectedLote[`sm_hl${category}`] || 0} lbs
                  </Descriptions.Item>
                ))}
              </Descriptions>
            </Col>
          </Row>
        </>
      ) : (
        <Text>No se encontraron datos para el lote {lote}</Text>
      )}
    </div>
  );
}

export default PackingModalHarvest;