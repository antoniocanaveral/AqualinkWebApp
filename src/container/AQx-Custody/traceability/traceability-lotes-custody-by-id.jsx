import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTraceabilityReportById } from '../../../redux/traceability/actionCreator';
import LoteDetails from './LoteDetails';

const { Title } = Typography;

const ReporteLote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { report, loading, error } = useSelector((state) => state.traceabilityReport);

  useEffect(() => {
    dispatch(fetchTraceabilityReportById(1));
  }, [dispatch, id]);

  if (loading) return <Spin tip="Cargando reporte..." />;
  if (error) return <div>Error: {error}</div>;
  if (!report) return <div>No se encontró información para el lote {id}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Title level={3}>Reporte del Lote: {report.id}</Title>
      <div style={{
        border: '2px solid #e3e3e3',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginTop: '20px',
      }}>
        <LoteDetails selectedLote={report} />
        <div style={{ width: '100%' }}>
          <LoteDetails selectedLote={report} fromSection="SPECIES HEALTH & WELLFARE" />
        </div>
      </div>

    </div>
  );
};

export default ReporteLote;
