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
import UilBell from '@iconscout/react-unicons/icons/uil-bell'; // Para notificaciones
import UilUpload from '@iconscout/react-unicons/icons/uil-upload'; // Para cargar información
import moment from 'moment';
import Cookies from 'js-cookie';

function CoordinationsCustody() {
  const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName')); // Organización seleccionada
  const selectedModule = useSelector((state) => state.auth.selectedModule); // Acceder al módulo seleccionado desde Redux

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

  // Determinar si se debe usar "Finca Seleccionada" o "Empacadora Seleccionada"
  const packerOrFarm = selectedModule !== 'FARM' ? 'Finca Seleccionada' : 'Empacadora Seleccionada';

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

  // Función para determinar la clase de estado
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmado':
        return 'ninjadash-status-confirmed';
      case 'en proceso':
        return 'ninjadash-status-in-process';
      case 'en espera':
        return 'ninjadash-status-waiting';
      case 'ejecutado':
        return 'ninjadash-status-executed';
      default:
        return 'ninjadash-status-undefined'; // Clase para estados indefinidos
    }
  };

  // Generar los datos de la tabla de manera reactiva usando useMemo
  const tableDataScource = useMemo(() => {
    if (!coordinations || coordinations.length === 0) return [];

    return coordinations.map((item) => {
      const itemStatus = item.statusWrapper;
      
      return {
        id: `${item.SM_FishingNotification || 'Sin Lote ID'}`, // LOTE id
        harvestDate: moment(item.planned_harvest_date).format('YYYY-MM-DD') || 'No disponible', // FECHA PROGRAMADA DE COSECHA / RALEO
        harvestType: item.harvest_type || 'Sin Tipo', // TIPO DE COSECHA
        growOut: item.grow_out_pool || 'No disponible', // PISCINA ENGORDE
        cycleNumber: item.cycle_number || 'No disponible', // # CICLO
        seedingVolume: item.seeding_volume || 'No definido', // VOLUMEN DE PESCA
        classificationP: item.classification_p || 'No clasificado', // CLASIF P
        classificationS: item.classification_s || 'No clasificado', // CLASIF S
        classificationT: item.classification_t || 'No clasificado', // CLASIF T
        packer: item.packer_name || `Sin ${packerOrFarm}`, // Empacadora Seleccionada o Finca Seleccionada
        location: <span>{item.City || 'No Ciudad'}, {item.Address1 || 'No Dirección'}</span>, // UBICACIÓN
        status: (
          <span className={`ninjadash-status ${getStatusClass(itemStatus.statusName)}`}>
            {itemStatus.statusName || 'Estado no definido'}
          </span>
        ), // ESTADO
        action: (
          <div className="table-actions" style={{ minWidth: "50px !important", textAlign: "center" }}>
            {!itemStatus.showEditFrom && <Link className="view" title='Ver información' to={`./${item.id}/view`}><UilEye /></Link>}
            {itemStatus.showEditFrom && <Link className="edit" title='Enviar Propuesta' to={`./${item.id}/edit`}><UilEdit /></Link>}
            <Link className="notification" title="Ver Notificación" to={`./notification/${item.id}/view`}>
              <UilBell />
            </Link>
            {itemStatus.showBinesForm && <Link className="edit" title='Cargar información de Bines' to={`./${item.id}/bines`}>
              <UilUpload />
            </Link>}
            {itemStatus.showDrawersForm && <Link className="edit" title='Cargar información de Gavetas' to={`./${item.id}/drawers`}>
              <UilUpload />
            </Link>}
          </div>
        ),
      };
    });
  }, [coordinations, selectedModule]); // Añadir selectedModule a las dependencias

  // Definición de las columnas
  const dataTableColumn = [
    {
      title: 'Fecha de Pesca',
      dataIndex: 'harvestDate',
      key: 'harvestDate',
    },
    {
      title: 'Piscina',
      dataIndex: 'growOut',
      key: 'growOut',
    },
    {
      title: 'Lote ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Volumen',
      dataIndex: 'seedingVolume',
      key: 'seedingVolume',
    },
    {
      title: 'Clasificación P',
      dataIndex: 'classificationP',
      key: 'classificationP',
    },
    {
      title: 'Clasificación S',
      dataIndex: 'classificationS',
      key: 'classificationS',
    },
    {
      title: 'Clasificación T',
      dataIndex: 'classificationT',
      key: 'classificationT',
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
      width: '150px',
    },
  ];

  return (
    <>
      <PageHeader
        
        highlightText="Aqualink"
        title="Coordinaciones Pesca"
        routes={PageRoutes}
        organizations={organizations} // Lista de organizaciones
        selectedOrg={selectedOrg} // Organización seleccionada
        handleOrgChange={handleOrgChange} // Función para manejar el cambio
      />
      <Main>
        <Row gutter={25}>
          <Col xxl={24} xs={24}>
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
