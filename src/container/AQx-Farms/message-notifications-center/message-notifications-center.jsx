"use client"

import { useState, useEffect, Suspense } from "react"
import { Row, Col, Input, Select, Table, Modal, Skeleton, Button } from "antd"
import UilEye from "@iconscout/react-unicons/icons/uil-eye"
import { SearchOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { ticketReadData, ticketUpdateSearch } from "../../../redux/supportTickets/actionCreator"
import { PageHeader } from "../../../components/page-headers/page-headers"
import { Main, TableWrapper } from "../../styled"
import { TicketBox } from "../../supportTicket/Style"
import { Cards } from "../../../components/cards/frame/cards-frame"
import ListItemsMessageNotificationsCenter from "./list-items"
import Card from "antd/lib/card/Card"
import { fetchSmAlertHistory } from "../../../redux/message&notifications/actionCreator"
import styled from "styled-components"

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .ant-modal-header {
    border-radius: 8px 8px 0 0;
    background-color: #f0f5ff;
    border-bottom: 1px solid #d9e4ff;
    padding: 16px 24px;
  }
  
  .ant-modal-title {
    color: #0052cc;
    font-weight: 600;
    font-size: 16px;
  }
  
  .ant-modal-body {
    padding: 24px;
  }
  
  .ant-modal-footer {
    border-top: 1px solid #f0f0f0;
    padding: 12px 24px;
  }
  
  .close-button {
    background-color: #0052cc;
    color: white;
    border: none;
    &:hover {
      background-color: #003d99;
      color: white;
    }
  }
  
  .modal-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .info-card, .subject-card, .severity-card, .description-card, .campaign-card, .organization-card, .roles-card {
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    margin-bottom: 0;
    
    .ant-card-body {
      padding: 12px 16px;
    }
    
    p {
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    strong {
      color: #0052cc;
    }
  }
  
  .severity-card {
    .ant-card-body {
      p strong {
        margin-right: 8px;
      }
    }
  }
  
  ul {
    margin: 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 4px;
    }
  }
`

function MessageNotificationsCenter() {
  const dispatch = useDispatch()
  const { alertHistory, loading } = useSelector((state) => state.alertHistoryReducer)

  const [detailsModalVisible, setDetailsModalVisible] = useState(false)
  const [rolesModalVisible, setRolesModalVisible] = useState(false)
  const [modalData, setModalData] = useState(null)

  const dataSource = alertHistory.map((item) => ({
    key: item.id,
    id: item.id,
    Created: item.Created || "N/A",
    AD_User_ID: item.AD_User_ID?.identifier || item.AD_User_ID || "N/A",
    sm_namees: item.sm_namees || "N/A",
    severity: item.severity || "N/A",
    sm_rolename: item.sm_rolename || "",
    Description: item.Description || "Sin descripción",
    AD_Client_ID: item.AD_Client_ID?.identifier || item.AD_Client_ID || "N/A",
    AD_Org_ID: item.AD_Org_ID?.identifier || item.AD_Org_ID || "N/A",
    IsActive: item.IsActive !== undefined ? item.IsActive.toString() : "N/A",
    CreatedBy: item.CreatedBy?.identifier || item.CreatedBy || "N/A",
    Updated: item.Updated || "N/A",
    UpdatedBy: item.UpdatedBy?.identifier || item.UpdatedBy || "N/A",
    C_Campaign_ID: item.C_Campaign_ID?.identifier || item.C_Campaign_ID || "N/A",
    sm_processname: item.sm_processname || "N/A",
    sm_device: item.sm_device || "N/A",
    model_name: item["model-name"] || "N/A",
    action: item,
  }))

  useEffect(() => {
    if (dispatch) {
      dispatch(ticketReadData())
      dispatch(fetchSmAlertHistory())
    }
  }, [dispatch])

  const prefix = (
    <SearchOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  )

  const columns = [
    {
      title: "ID de Alerta",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Fecha de Creación",
      dataIndex: "Created",
      key: "Created",
    },
    {
      title: "Asignado a",
      dataIndex: "AD_User_ID",
      key: "AD_User_ID",
      render: (text, record) => (
        <Button onClick={() => showRolesModal(record)}>
          <UilEye />
        </Button>
      ),
    },
    {
      title: "Asunto",
      dataIndex: "sm_namees",
      key: "sm_namees",
    },
    {
      title: "Severidad",
      dataIndex: "severity",
      key: "severity",
      render: (severity) => (
        <span
          className={`ninjadash-support-status ninjadash-support-status-${severity === "CRÍTICO" ? "critical" : "danger"}`}
        >
          {severity}
        </span>
      ),
    },
    {
      title: "Acciones",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => showDetailsModal(record)}>
          <UilEye />
        </Button>
      ),
    },
  ]

  const showDetailsModal = (record) => {
    setModalData(record)
    setDetailsModalVisible(true)
  }

  const closeDetailsModal = () => {
    setDetailsModalVisible(false)
    setModalData(null)
  }

  const showRolesModal = (record) => {
    setModalData(record)
    setRolesModalVisible(true)
  }

  const closeRolesModal = () => {
    setRolesModalVisible(false)
    setModalData(null)
  }

  return (
    <>
      <PageHeader highlightText="Aqualink Administración" title="Centro de Mensajes y Notificaciones" />
      <Main>
        <TicketBox>
          <Row justify="center">
            <Col xs={24}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <ListItemsMessageNotificationsCenter />
              </Suspense>
            </Col>
          </Row>
          <Row gutter={25}>
            <Col sm={24} xs={24}>
              <Cards headless>
                <div className="ninjadash-support-content-filter">
                  <div className="ninjadash-support-content-filter__left">
                    <div className="ninjadash-support-content-filter__input">
                      <span className="label">ID:</span>
                      <Input
                        onChange={(e) => dispatch(ticketUpdateSearch(e.target.value, "id"))}
                        placeholder="Buscar por ID"
                      />
                    </div>
                    <div className="ninjadash-support-content-filter__input">
                      <span className="label">Estado:</span>
                      <Select
                        onChange={(value) => dispatch(ticketUpdateSearch(value, "status"))}
                        style={{ width: 200 }}
                        defaultValue=""
                      >
                        <Select.Option value="">Todos</Select.Option>
                        <Select.Option value="Open">Por Revisar</Select.Option>
                        <Select.Option value="Close">Finalizado</Select.Option>
                      </Select>
                    </div>
                  </div>
                  <div className="ninjadash-support-content-filter__right">
                    <Input
                      onChange={(e) => dispatch(ticketUpdateSearch(e.target.value, "subject"))}
                      size="default"
                      placeholder="Buscar"
                      prefix={prefix}
                    />
                  </div>
                </div>
                <div className="ninjadash-support-content-table">
                  <TableWrapper className="table-data-view table-responsive">
                    <Table
                      pagination={{ pageSize: 10, showSizeChanger: true }}
                      dataSource={dataSource}
                      columns={columns}
                    />
                  </TableWrapper>
                </div>
              </Cards>
            </Col>
          </Row>
        </TicketBox>
      </Main>

      {/* Modal de Roles Asignados */}
      <StyledModal
        visible={rolesModalVisible}
        title="Roles Asignados"
        onCancel={closeRolesModal}
        footer={
          <Button key="close" onClick={closeRolesModal} className="close-button">
            Cerrar
          </Button>
        }
        width={500}
        centered
      >
        {modalData && (
         
            <ul>
              {modalData.sm_rolename &&
                modalData.sm_rolename.split(",").map((role, index) => <li key={index}>{role.trim()}</li>)}
              {!modalData.sm_rolename && <p>No hay roles asignados.</p>}
            </ul>
          
        )}
      </StyledModal>

      {/* Modal de Detalles del Mensaje/Notificación */}
      <StyledModal
        visible={detailsModalVisible}
        title="Detalles del Mensaje/Notificación"
        onCancel={closeDetailsModal}
        footer={
          <Button key="close" onClick={closeDetailsModal} className="close-button">
            Cerrar
          </Button>
        }
        width={700}
        centered
      >
        {modalData && (
          <div className="modal-container">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card className="info-card">
                  <p>
                    <strong>ID:</strong> {modalData.id}
                  </p>
                </Card>
              </Col>
              <Col span={12}>
                <Card className="subject-card">
                  <p>
                    <strong>Asunto:</strong> {modalData.sm_namees}
                  </p>
                </Card>
              </Col>
             
             
              <Col span={24}>
                <Card className="description-card">
                  <p>
                    <strong>Descripción:</strong>
                  </p>
                  <p>{modalData.Description}</p>
                </Card>
              </Col>
              <Col span={12}>
                <Card className="campaign-card">
                  <p>
                    <strong>LoteID:</strong> {modalData.C_Campaign_ID}
                  </p>
                </Card>
              </Col>
              <Col span={12}>
                <Card className="organization-card">
                  <p>
                    <strong>Organización:</strong> {modalData.AD_Org_ID}
                  </p>
                </Card>
              </Col>
              <Col span={12}>
                <Card className="severity-card">
                  <p>
                    <strong>Severidad:</strong>
                    <span
                      className={`ninjadash-support-status ninjadash-support-status-${modalData.severity === "CRÍTICO" ? "critical" : "danger"}`}
                    >
                      {modalData.severity}
                    </span>
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </StyledModal>
    </>
  )
}

export default MessageNotificationsCenter
