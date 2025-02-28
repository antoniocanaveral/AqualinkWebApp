import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Row, Col, Table, Popconfirm, Skeleton } from 'antd';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import { Button } from '../../components/buttons/buttons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { TicketBox } from './Style';
import SupportCreate from './SupportCreate';
import SupportUpdate from './SupportUpdate';
import { Main, TableWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import Heading from '../../components/heading/heading';
import { ticketUpdateData } from '../../redux/supportTickets/actionCreator';
import { PageHeader } from '../../components/page-headers/page-headers';
import { fetchRequestsByClient } from '../../redux/support/actionCreator';
import SupportView from './SupportView';
import Cookies from 'js-cookie';
import { selectFarmsOrgsWithPools } from '../../redux/authentication/selectors';

const OverviewDataList = lazy(() => import('./overview/OverviewDataList'));

const getStatusLabel = (identifier) => {
  if (!identifier) return 'Pendiente';
  const parts = identifier.split('_');
  return parts[1] ? parts[1] : identifier;
};

function SupportTicket() {
  const { requests } = useSelector((state) => state.support);
  const dispatch = useDispatch();

  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleView, setVisibleView] = useState(false);
  const [editableData, setEditableData] = useState(null);
  const [viewData, setViewData] = useState(null);

  const organizations = useSelector((state) => state.auth.farmsOrgs);

  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    console.log(JSON.stringify(farmsOrgsWithPools));
  };



  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: farmsOrgsWithPools.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: 'Seleccione una Farm',
      value: selectedOrg || undefined,
    },
  ] : [];



  const combinedSelectOptions = [
    ...farmsSelectOptions,
  ];


  const overviewData = [
    {
      id: 1,
      type: "primary",
      icon: "ticket.svg",
      label: "Tickets Web App",
      total: requests.filter(
        (ticket) =>
          ticket.R_Category_ID?.identifier &&
          !ticket.R_Category_ID?.identifier.includes("App")
      ).length,
      suffix: "",
      prefix: ""
    },
    {
      id: 2,
      type: "secondary",
      icon: "ticket.svg",
      label: "Tickets App Campo",
      total: requests.filter(
        (ticket) =>
          ticket.R_Category_ID?.identifier &&
          ticket.R_Category_ID?.identifier.includes("App")
      ).length,
      suffix: "",
      prefix: ""
    },
    {
      id: 3,
      type: "warning",
      icon: "clock.svg",
      label: "Tickets en Proceso",
      total: requests.filter(
        (ticket) => ticket.R_Status_ID?.identifier === "2_In Progress"
      ).length,
      suffix: "",
      prefix: ""
    },
    {
      id: 4,
      type: "success",
      icon: "check-circle.svg",
      label: "Tickets Resueltos",
      total: requests.filter(
        (ticket) => ticket.R_Status_ID?.identifier === "3_Closed"
      ).length,
      suffix: "",
      prefix: ""
    }
  ];

  // Se hace la carga inicial una única vez
  useEffect(() => {
    dispatch(fetchRequestsByClient());
  }, [dispatch]);

  const confirmDelete = (id) => {
    const deleteData = requests.filter((ticket) => ticket.id !== id);
    dispatch(ticketUpdateData(deleteData));
  };

  const cancelDelete = () => { };

  const showModalUpdate = (ticket) => {
    setEditableData(ticket);
    setVisibleUpdate(true);
  };

  const showModalView = (ticket) => {
    setViewData(ticket);
    setVisibleView(true);
  };

  const dataSource = [];
  if (requests.length) {
    requests.forEach((item) => {
      const {
        id,
        AD_User_ID,
        R_Category_ID,
        Priority,
        R_Status_ID,
        Created,
      } = item;
      dataSource.push({
        key: `${id}`,
        id: `#${id}`,
        requestedBy: AD_User_ID?.identifier || 'Desconocido',
        subject: R_Category_ID?.identifier || 'Sin Asunto',
        priority: Priority?.identifier || 'N/A',
        status: (
          <span
            className={`ninjadash-support-status ninjadash-support-status-${getStatusLabel(
              R_Status_ID?.identifier === "1_Open"
                ? "open"
                : R_Status_ID?.identifier === "3_Closed"
                  ? "close"
                  : "pending"
            ).toLowerCase()}`}
          >
            {getStatusLabel(R_Status_ID?.identifier)}
          </span>
        ),
        createdDate: moment(Created).format('YYYY-MM-DD'),
        action: (
          <div className="table-actions">
            <Link onClick={() => showModalView(item)} className="view" to="#">
              <UilEye />
            </Link>
            <Link onClick={() => showModalUpdate(item)} className="edit" to="#">
              <UilEdit />
            </Link>
            <Popconfirm
              title="¿Estás seguro de eliminar este ticket?"
              onConfirm={() => confirmDelete(id)}
              onCancel={cancelDelete}
              okText="Sí"
              cancelText="No"
            >
              <Link className="delete" to="#">
                <UilTrashAlt />
              </Link>
            </Popconfirm>
          </div>
        ),
      });
    });
  }

  const showModalCreate = () => {
    setVisibleCreate(true);
  };

  // Ahora, estos métodos solo cierran el modal sin refrescar la data.
  const onCancelCreate = () => {
    setVisibleCreate(false);
  };

  const onCancelUpdate = () => {
    setVisibleUpdate(false);
  };

  const onCancelView = () => {
    setVisibleView(false);
  };

  // Estas funciones se ejecutarán al tener éxito en la operación de crear o actualizar
  const onCreateSuccess = () => {
    setVisibleCreate(false);
    dispatch(fetchRequestsByClient());
  };

  const onUpdateSuccess = () => {
    setVisibleUpdate(false);
    dispatch(fetchRequestsByClient());
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Requested By',
      dataIndex: 'requestedBy',
      key: 'requestedBy',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '120px',
    },
  ];

  return (
    <>
      <PageHeader
        title="Tickets de Soporte"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg} />
      <Main>
        <TicketBox>
          <Row justify="center">
            <Col xs={24}>
              <Suspense fallback={<Cards headless><Skeleton active /></Cards>}>
                <OverviewDataList overviewData={overviewData} />
              </Suspense>
            </Col>
          </Row>
          <Row gutter={25}>
            <Col sm={24} xs={24}>
              <Cards headless>
                <div className="ninjadash-support-content-top">
                  <Heading as="h4">Todos los Tickets</Heading>
                  <Button onClick={showModalCreate} size="default" type="primary">
                    <UilPlus /> Crear Ticket
                  </Button>
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
      {/* Se pasa onCreateSuccess y onUpdateSuccess para refrescar solo cuando se produzca el cambio */}
      <SupportCreate onCancel={onCancelCreate} onSuccess={onCreateSuccess} visible={visibleCreate} />
      <SupportUpdate onCancel={onCancelUpdate} onSuccess={onUpdateSuccess} editableData={editableData} visible={visibleUpdate} />
      <SupportView onCancel={onCancelView} ticket={viewData} visible={visibleView} />
    </>
  );
}

export default SupportTicket;
