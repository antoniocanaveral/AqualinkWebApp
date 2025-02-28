import React, { Suspense, useLayoutEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Skeleton } from 'antd';
import { Main, BorderLessHeading } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { loadCustodyCoordinations } from '../../redux/custody/actionCreator';
import DataTable from '../../components/table/DataTable';
import { Link, useLocation } from 'react-router-dom';  // <-- Importar useLocation
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilUpload from '@iconscout/react-unicons/icons/uil-upload';
import moment from 'moment';
import Cookies from 'js-cookie';

function CoordinationsCustody() {
  const [selectedOrg, setSelectedOrg] = useState(Cookies.get('orgName')); 
  const selectedModule = useSelector((state) => state.auth.selectedModule);
  
  // <-- Para saber en qué ruta estamos
  const location = useLocation();
  const currentPath = location.pathname; 
  // <-- Verificamos si la ruta es '/farm/fishing-coords'
  const isFarmFishingCoords = currentPath === '/farm/fishing-coords'; 

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
  const organizations = useSelector((state) => state.auth.custodyOrgs);

  // Determinar si se debe usar "Finca Seleccionada" o "Empacadora Seleccionada"
  const packerOrFarm = selectedModule !== 'FARM' ? 'Finca Seleccionada' : 'Empacadora Seleccionada';

  useLayoutEffect(() => {
    dispatch(
      loadCustodyCoordinations(selectedOrg, (isCompleted, error) => {
        console.log(`loadCustodyCoordinations ${isCompleted} for organization: ${selectedOrg}`);
      })
    );
  }, [dispatch, selectedOrg]);

  const handleOrgChange = (value, orgEmail) => {
    setSelectedOrg(value);
    Cookies.set('orgId', value);

    Cookies.set('orgEmail', orgEmail);
    dispatch(loadCustodyCoordinations(value, (isCompleted, error) => {
      console.log(`loadCustodyCoordinations ${isCompleted} for organization: ${value}`);
    }));
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
      case 'espera bines':
        return 'ninjadash-status-waiting-bines'; // Nuevo estado
      case 'espera gavetas':
        return 'ninjadash-status-waiting-drawers'; // Nuevo estado
      default:
        return 'ninjadash-status-undefined';
    }
  };
  

  // Generar los datos de la tabla con useMemo
  const tableDataScource = useMemo(() => {
    if (!coordinations || coordinations.length === 0) return [];

    return coordinations
      .filter((item) => {
        // <-- Si la ruta es '/farm/fishing-coords', excluimos los que tengan estado "por revisar"
        if (isFarmFishingCoords) {
          return item.statusWrapper.statusName.toLowerCase() !== 'por revisar';
        }
        return true;
      })
      .map((item) => {
        const itemStatus = item.statusWrapper;
        return {
          // LOTE id
          id: `${item.SM_FishingNotification || 'Sin Lote ID'}`,
          // FECHA PROGRAMADA DE COSECHA / RALEO
          harvestDate: moment(item.planned_harvest_date).format('YYYY-MM-DD') || 'No disponible',
          // TIPO DE COSECHA
          harvestType: item.harvest_type || 'Sin Tipo',
          // PISCINA ENGORDE
          growOut: item.grow_out_pool || 'No disponible',
          // # CICLO
          cycleNumber: item.cycle_number || 'No disponible',
          // VOLUMEN DE PESCA
          seedingVolume: item.seeding_volume || 'No definido',
          // CLASIF P
          classificationP: item.classification_p || 'No clasificado',
          // CLASIF S
          classificationS: item.classification_s || 'No clasificado',
          // CLASIF T
          classificationT: item.classification_t || 'No clasificado',
          // Empacadora o Finca Seleccionada
          packer: item.packer_name || `Sin ${packerOrFarm}`,
          // UBICACIÓN
          location: (
            <span>
              {item.City || 'No Ciudad'}, {item.Address1 || 'No Dirección'}
            </span>
          ),
          // ESTADO
          status: (
            <span className={`ninjadash-status ${getStatusClass(itemStatus.statusName)}`}>
              {itemStatus.statusName || 'Estado no definido'}
            </span>
          ),
          // ACCIONES
          action: (
            <div className="table-actions" style={{ minWidth: '50px !important', textAlign: 'center' }}>
              {!itemStatus.showEditFrom && (
                <Link className="view" title="Ver información" to={`./${item.id}/view`}>
                  <UilEye />
                </Link>
              )}
              {itemStatus.showEditFrom && (
                <Link className="edit" title="Enviar Propuesta" to={`./${item.id}/edit`}>
                  <UilEdit />
                </Link>
              )}
             
             
              {itemStatus.showBinesForm && (
                <Link className="edit" title="Cargar información de Bines" to={`./${item.id}/bines`}>
                  <UilUpload />
                </Link>
              )}
              {itemStatus.showDrawersForm && (
                <Link className="edit" title="Cargar información de Gavetas" to={`./${item.id}/drawers`}>
                  <UilUpload />
                </Link>
              )}
            </div>
          ),
        };
      });
  }, [coordinations, isFarmFishingCoords, packerOrFarm]);

  // Definición de columnas
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
        organizations={organizations}
        selectedOrg={selectedOrg}
        handleOrgChange={handleOrgChange}
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
