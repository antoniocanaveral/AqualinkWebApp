import React, { Suspense, useLayoutEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import { Main, BorderLessHeading } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { loadLabCoordinations } from '../../redux/lab/actionCreator';
import DataTable from '../../components/table/DataTable';
import { Link } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilListOlAlt from '@iconscout/react-unicons/icons/uil-list-ol-alt';
import moment from 'moment';
import Cookies from 'js-cookie';

import {
  UilArrowsResize,
  UilWater, // Para Tanques (flujo de agua o agua en general)
  UilFlaskPotion,    // Para Cultivo (representa investigación y cultivo)
  UilPlug,           // Para IoT (tecnología de conexión)
  UilMapMarkerAlt,   // Para Coordinación
  UilArchive,        // Para Inventario
  UilBug,            // Para Nauplieras (representa organismos pequeños)
  UilTrophy,         // Para Cosechas (reservas y pedidos)
  UilUserCircle,     // Para Usuarios
  UilKeySkeleton,    // Para Permisos
  UilHeadphonesAlt,  // Para Atención al Cliente
  UilSync
} from '@iconscout/react-unicons';

function CoordinationsLabs() {
  const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName')); // Organización seleccionada

  const PageRoutes = [
    {
      path: '/lab',
      breadcrumbName: selectedOrg,
    },
    {
      path: 'first',
      breadcrumbName: 'Coordinaciones',
    },
  ];

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.lab.loading);
  const coordinations = useSelector((state) => state.lab.coordinations);
  const organizations = useSelector((state) => state.auth.labsOrgs); // Lista de organizaciones

  useLayoutEffect(() => {
    dispatch(loadLabCoordinations(selectedOrg, (isCompleted, error) => {
      console.log(`loadLabCoordinations ${isCompleted} for organization: ${selectedOrg}`);
    }));
  }, [dispatch, selectedOrg]); // Carga coordinaciones cada vez que cambia la organización seleccionada

  const handleOrgChange = (value, orgEmail) => {
    setSelectedOrg(value); // Cambiar la organización seleccionada visualmente
    Cookies.set('orgName', value); // Actualizar en cookies el nombre de la organización
    Cookies.set('orgEmail', orgEmail); // Asegúrate de actualizar también el email de la organización en la cookie
    dispatch(loadLabCoordinations()); // Recargar las coordinaciones para la nueva organización
  };
  

  // Generar los datos de la tabla de manera reactiva usando useMemo
  const tableDataScource = useMemo(() => {
    if (!coordinations || coordinations.length === 0) return [];

    return coordinations.map((item) => {
      const itemStatus = item.statusWrapper;
      return {
        id: `${item.SM_FishingNotification}`,
        proveedor: <span>{item.org_name} - {item.pre_breeding_pool}</span>,
        location: <span>{item.City}, {item.Address1}, {item.Address2}</span>,
        planting: <span>{moment(item.planned_date).format('YYYY-MM-DD HH:mm A')}</span>,
        status: <span className={`ninjadash-status ninjadash-status-asigned`}>{itemStatus.statusName}</span>,
        action: (
          <div className="table-actions" style={{ minWidth: "50px !important", textAlign: "center" }}>
            {!itemStatus.showEditFrom && <Link className="view" to={`./${item.id}/view`}><UilEye /></Link>}
            {itemStatus.showEditFrom && <Link className="edit" to={`./${item.id}/edit`}><UilEdit /></Link>}
            {itemStatus.showParamsFrom && <Link className="edit" to={`./${item.id}/params`}><UilListOlAlt /></Link>}
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
      title: 'Fecha Solicitada',
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
      highlightText="Aqualink"
        className="ninjadash-page-header-main"
        title="Coordinaciones"
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
                <Cards icon={<UilFlaskPotion />}  
                title="Coordinaciones de Siembra">
                  <DataTable
                    key={selectedOrg} // Forzar el re-renderizado cuando cambie la organización seleccionada
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

export default CoordinationsLabs;
