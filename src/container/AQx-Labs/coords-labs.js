import React, { Suspense, useLayoutEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import { Main, BorderLessHeading } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { loadLabCoordinations } from '../../redux/lab/actionCreator';
import DataTable from '../../components/table/DataTable';
import { Link, useLocation } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilListOlAlt from '@iconscout/react-unicons/icons/uil-list-ol-alt';
import moment from 'moment';

import Cookies from 'js-cookie';

function CoordinationsLabs() {
  const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName')); // Organización seleccionada
  const selectedModule = useSelector((state) => state.auth.selectedModule); // Obtener el módulo seleccionado desde Redux

  const location = useLocation(); // Hook para obtener la ruta actual
  const currentPath = location.pathname; // Obtener la ruta como string

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
    dispatch(loadLabCoordinations(value, (isCompleted, error) => {
      console.log(`loadLabCoordinations ${isCompleted} for organization: ${value}`);
    })); // Recargar las coordinaciones para la nueva organización
  };

  // Función para determinar la clase de estado
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmado':
        return 'ninjadash-status-confirmed';
      case 'asignado':
        return 'ninjadash-status-asigned';
      case 'por revisar':
        return 'ninjadash-status-waiting';
      case 'ejecutado':
        return 'ninjadash-status-executed';
      case 'despachado':
        return 'ninjadash-status-despached';
      default:
        return 'ninjadash-status-undefined'; // Clase para estados indefinidos
    }
  };

  // Determinar si se debe usar "Lab Seleccionado" o "Finca Seleccionada"
  const labOrFarm = selectedModule !== 'FARM' ? 'Finca Seleccionada' : 'Lab Seleccionado';

  // Determinar si la ruta actual es '/farm/seeding-coords'
  const isFarmSeedingCoords = currentPath === '/farm/seeding-coords';

  // Generar los datos de la tabla de manera reactiva usando useMemo
  const tableDataScource = useMemo(() => {
    if (!coordinations || coordinations.length === 0) return [];

    return coordinations
      // Filtrar si es la ruta específica y excluir estados "Por Revisar"
      .filter(item => {
        if (isFarmSeedingCoords) {
          return item.statusWrapper.statusName.toLowerCase() !== 'por revisar';
        }
        return true;
      })
      .map((item) => {
        const itemStatus = item.statusWrapper;
        return {
          id: `${item.SM_FishingNotification || 'Sin Lote ID'}`, // LOTE id
          scheduledDate: moment(item.planned_date).format('YYYY-MM-DD HH:mm A') || 'Fecha no disponible', // FECHA PROGRAMADA DE SIEMBRA
          systemType: item.system_type || 'Sin Sistema', // SISTEMA DE CULTIVO
          preBreeding: item.pre_breeding_pool || 'No disponible', // PRE CRIA
          growOut: item.grow_out_pool || 'No disponible', // PISCINA ENGORDE
          cycleNumber: item.cycle_number || 'No disponible', // # CICLO
          seedingVolume: item.seeding_volume || 'No definido', // volumen de siembra
          pl: item.pl || 'No disponible', // PL
          lab: item.lab_name || `Sin ${labOrFarm}`, // Lab Seleccionado o Finca Seleccionada
          location: <span>{item.City || 'No Ciudad'}, {item.Address1 || 'No Dirección'}</span>, // UBICACIÓN
          status: (
            <span className={`ninjadash-status ${getStatusClass(itemStatus.statusName)}`}>
              {itemStatus.statusName || 'Estado no definido'}
            </span>
          ), // ESTADO
          action: (
            <div className="table-actions" style={{ minWidth: "50px", textAlign: "center" }}>
              {!itemStatus.showEditFrom && <Link className="view" to={`./${item.id}/view`}><UilEye /></Link>}
              {itemStatus.showEditFrom && <Link className="edit" to={`./${item.id}/param`}><UilEdit /></Link>}
              {itemStatus.showParamsFrom && <Link className="edit" to={`./${item.id}/params`}><UilListOlAlt /></Link>}
             
            </div>
          ),
        };
      });
  }, [coordinations, labOrFarm, isFarmSeedingCoords]); // Añadimos isFarmSeedingCoords a las dependencias

  // Definición de las columnas
  const dataTableColumn = [
    {
      title: 'Fecha de Siembra',
      dataIndex: 'scheduledDate',
      key: 'scheduledDate',
    },
    {
      title: 'Pre Cría',
      dataIndex: 'preBreeding',
      key: 'preBreeding',
    },
    {
      title: 'Piscina ',
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
      title: 'PL',
      dataIndex: 'pl',
      key: 'pl',
    },
    {
      title: labOrFarm, // Cambia dinámicamente entre "Lab Seleccionado" y "Finca Seleccionada"
      dataIndex: 'lab',
      key: 'lab',
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
        title="Coordinaciones Siembra"
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
                <Cards title="Coordinaciones de Siembra">
                  <DataTable
                    key={`${selectedOrg}-${isFarmSeedingCoords}`} // Forzar el re-renderizado cuando cambie la organización o la ruta
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
