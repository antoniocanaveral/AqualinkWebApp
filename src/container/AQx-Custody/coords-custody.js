import React, { Suspense, useLayoutEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import { Main, BorderLessHeading } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { loadCustodyCoordinations } from '../../redux/custody/actionCreator';
import DataTable from '../../components/table/DataTable';
import { Link } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import moment from 'moment';
import Cookies from 'js-cookie';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';

function CoordinationsCustody() {
  // Estado para la organización seleccionada
  const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName')); // Organización seleccionada

  // Breadcrumbs con la organización seleccionada
  const PageRoutes = [
    {
      path: '/custody',
      breadcrumbName: selectedOrg,
    },
    {
      path: 'first',
      breadcrumbName: 'Coordinaciones',
    },
  ];

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.custody.loading);
  const coordinations = useSelector((state) => state.custody.coordinations);
  const organizations = useSelector((state) => state.auth.custodyOrgs); // Lista de organizaciones

  // Cargar coordinaciones según la organización seleccionada
  useLayoutEffect(() => {
    dispatch(loadCustodyCoordinations(selectedOrg, (isCompleted, error) => {
      console.log(`loadCustodyCoordinations ${isCompleted} for organization: ${selectedOrg}`);
    }));
  }, [dispatch, selectedOrg]);

  // Manejar el cambio de organización
  const handleOrgChange = (value, orgEmail) => {
    setSelectedOrg(value); // Cambiar la organización seleccionada
    Cookies.set('orgName', value); // Actualizar la cookie de organización
    Cookies.set('orgEmail', orgEmail); // Actualizar el email de la organización en cookies
    dispatch(loadCustodyCoordinations()); // Recargar las coordinaciones para la nueva organización
  };

  // Generar los datos de la tabla de manera reactiva usando useMemo
  const tableDataScource = useMemo(() => {
    if (!coordinations || coordinations.length === 0) return [];

    return coordinations.map((item) => {
      const itemStatus = item.statusWrapper;
      return {
        id: `${item.SM_FishingNotification}`,
        proveedor: <span>{item.org_name} - {item.warehouse_name}</span>,
        location: <span>{item.City}, {item.Address1}, {item.Address2}</span>,
        planting: <span>{moment(item.planned_date).format('YYYY-MM-DD hh:mm A')}</span>,
        status: <span className={`ninjadash-status ninjadash-status-${itemStatus.className}`}>{itemStatus.statusName}</span>,
        action: (
          <div className="table-actions" style={{ minWidth: "50px !important", textAlign: "center" }}>
            {!itemStatus.showEditFrom && <Link className="view" title='Ver información' to={`./${item.id}/view`}>
              {<UilEye />}
            </Link>}
            {itemStatus.showEditFrom && <Link className="edit" title='Enviar Propuesta' to={`./${item.id}/edit`}>
              <UilEdit />
            </Link>}
            {
              itemStatus.showBinesForm && <Link className="edit" title='Cargar información de Bines' to={`./${item.id}/bines`}>
                <UilUpload />
              </Link>
            }
            {
              itemStatus.showDrawersForm && <Link className="edit" title='Cargar información de Gavetas' to={`./${item.id}/drawers`}>
                <UilUpload />
              </Link>
            }
          </div>
        ),
      };
    });
  }, [coordinations]);

  const dataTableColumn = [
    {
      title: 'No.',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Cliente',
      dataIndex: 'proveedor',
      key: 'proveedor',
    },
    {
      title: 'Ubicación',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Fecha Plan.',
      dataIndex: 'planting',
      key: 'planting',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Acciones',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ];

  return (
    <>
      <PageHeader
        className="ninjadash-page-header-main"
        highlightText="Aqualink"
        title="Coordinaciones Pesca"
        routes={PageRoutes}
        organizations={organizations} // Lista de organizaciones
        selectedOrg={selectedOrg} // Organización seleccionada
        handleOrgChange={handleOrgChange} // Función para manejar el cambio
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={12} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              <BorderLessHeading>
                <Cards title="Coordinaciones de Pesca">
                  <DataTable
                    tableData={tableDataScource}
                    columns={dataTableColumn}
                    rowSelection={false}
                  />
                </Cards>
              </BorderLessHeading>
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CoordinationsCustody;
