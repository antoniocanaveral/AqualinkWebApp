import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../../components/modals/antd-modals';
import { Descriptions } from 'antd';

function SupportView({ visible, onCancel, ticket }) {
  return (
    <Modal
      getContainer={false}
      title="Detalle del Ticket"
      visible={visible}
      footer={null}
      onCancel={onCancel}
    >
      {ticket ? (
        <Descriptions bordered column={1}>
          <Descriptions.Item label="ID">{ticket.id}</Descriptions.Item>
          <Descriptions.Item label="Solicitado por">
            {ticket.AD_User_ID?.identifier || 'Desconocido'}
          </Descriptions.Item>
          <Descriptions.Item label="Asunto">
            {ticket.R_Category_ID?.identifier || 'Sin Asunto'}
          </Descriptions.Item>
          <Descriptions.Item label="Creado">
            {ticket.Summary ? ticket.Summary : '-'}
          </Descriptions.Item>
          <Descriptions.Item label="Prioridad">
            {ticket.Priority?.identifier || 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item label="Estado">
            {ticket.R_Status_ID?.identifier || 'N/A'}
          </Descriptions.Item>
          <Descriptions.Item label="Creado">
            {ticket.Created ? ticket.Created : '-'}
          </Descriptions.Item>

        </Descriptions>
      ) : (
        'No hay datos para mostrar'
      )}
    </Modal>
  );
}

SupportView.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  ticket: PropTypes.object,
};

export default SupportView;
