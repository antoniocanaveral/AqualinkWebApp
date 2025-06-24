import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Spin, Button, Modal, Alert, Divider, Card, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReserveByIdAndToken,
  updateIsSelected,
} from '../../../redux/reserve/actionCreator';
import { aqualinkLogoBase64 } from '../../../static/img/logo-aqualink';

const { Title, Paragraph } = Typography;

const ReserveDetail = () => {
  const { sm_reserve_id, sm_reserve_uu } = useParams();
  const dispatch = useDispatch();
  const { reserveData, loading, error } = useSelector((state) => state.reserve);

  const [modalAction, setModalAction] = useState(null); // 'accept' | 'cancel'
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (sm_reserve_id && sm_reserve_uu) {
      dispatch(fetchReserveByIdAndToken(sm_reserve_id, sm_reserve_uu));
    }
  }, [dispatch, sm_reserve_id, sm_reserve_uu]);

  const handleConfirmAction = () => {
    if (modalAction === 'accept') {
      dispatch(updateIsSelected(sm_reserve_id, 'Y'));
    } else if (modalAction === 'cancel') {
      dispatch(updateIsSelected(sm_reserve_id, 'N'));
    }
    setModalVisible(false);
  };

  if (loading) {
    return <Spin tip="Cargando reserva..." style={{ display: 'flex', justifyContent: 'center', marginTop: 100 }} />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon style={{ margin: 20 }} />;
  }

  if (!reserveData) {
    return <Alert message="No se encontró la reserva." type="warning" style={{ margin: 20 }} />;
  }

  const {
    IsSelected,
    AD_Org_ID,
    sm_reservedvolume,
    sm_stocktype,
    SM_Classification,
    sm_plgr,
  } = reserveData;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 20px',
      minHeight: '80vh',
      background: '#f7f9fb'
    }}>
      <Card
        bordered={false}
        style={{
          maxWidth: 600,
          width: '100%',
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          padding: '30px 40px',
          backgroundColor: '#fff'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <img
            src={aqualinkLogoBase64}
            alt="Aqualink"
            style={{ height: 60, marginBottom: 20 }}
          />
          <Title level={3} style={{ margin: 0 }}>Invitación de Reserva</Title>
        </div>

        <Divider />

        <Paragraph><strong>Organización:</strong> {AD_Org_ID?.identifier}</Paragraph>
        <Paragraph><strong>Volumen solicitado:</strong> {sm_reservedvolume?.toLocaleString()} kg</Paragraph>
        <Paragraph><strong>Tipo de stock:</strong> {sm_stocktype}</Paragraph>

        {sm_stocktype === 'CAMARON' && (
          <Paragraph><strong>Clasificación:</strong> {SM_Classification}</Paragraph>
        )}
        {sm_stocktype === 'LARVA' && (
          <Paragraph><strong>PLGR:</strong> {sm_plgr}</Paragraph>
        )}

        <Divider />

        <div style={{ textAlign: 'center' }}>
          {IsSelected === true ? (
            <>
              <Alert
                message="Invitación ya aceptada"
                description="Esta invitación ya fue respondida anteriormente."
                type="info"
                showIcon
                style={{ marginBottom: 20 }}
              />
              <Button
                danger
                size="large"
                onClick={() => {
                  setModalAction('cancel');
                  setModalVisible(true);
                }}
              >
                Cancelar invitación
              </Button>
            </>
          ) : (
            <Button
              type="primary"
              size="large"
              onClick={() => {
                setModalAction('accept');
                setModalVisible(true);
              }}
            >
              Aceptar invitación
            </Button>
          )}
        </div>

        <Modal
          title="Confirmar acción"
          open={modalVisible}
          onOk={handleConfirmAction}
          onCancel={() => setModalVisible(false)}
          okText="Sí, confirmar"
          cancelText="Cancelar"
        >
          {modalAction === 'accept' ? (
            <p>¿Estás seguro de que deseas <strong>aceptar</strong> esta invitación?</p>
          ) : (
            <p>¿Estás seguro de que deseas <strong>cancelar</strong> esta invitación ya aceptada?</p>
          )}
        </Modal>
      </Card>
    </div>
  );
};

export default ReserveDetail;
