import React, { Suspense, useMemo } from 'react';
import { Row, Col, Skeleton } from 'antd';
import { Main, BorderLessHeading } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import DataTable from '../../components/table/DataTable';
import { Link } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilListOlAlt from '@iconscout/react-unicons/icons/uil-list-ol-alt';
import moment from 'moment';

function NotificationSeedingLabs() {
  const PageRoutes = [
    {
      path: '/lab',
      breadcrumbName: 'Coordinaciones',
    },
  ];

  // Datos quemados
  const coordinations = [
    {
      proveedor: 'EcSSA Manabí',
      ubicacion: 'Chamanga',
      categoria: 'Camaronera',
      clasificacion: '30/40',
      peso: '21,500',
      procesamiento: '+18,000',
      pesca: '23 febrero / 08:00',
      cierre: '00d -02:52:13',
      showEditFrom: false,
      showParamsFrom: true,
      id: 1,
    },
    {
      proveedor: 'EcSSA Manabí',
      ubicacion: 'Jama',
      categoria: 'Camaronera',
      clasificacion: '31/35',
      peso: '5,100',
      procesamiento: '+1,600',
      pesca: '23 febrero / 09:00',
      cierre: '00d -03:52:13',
      showEditFrom: false,
      showParamsFrom: true,
      id: 2,
    },
    {
      proveedor: 'EcSSA Manabí',
      ubicacion: 'Cojimíes',
      categoria: 'Camaronera',
      clasificacion: '40/50',
      peso: '25,600',
      procesamiento: '+22,100',
      pesca: '23 febrero / 10:00',
      cierre: '00d -06:52:13',
      showEditFrom: false,
      showParamsFrom: true,
      id: 3,
    },
    {
      proveedor: 'EcSSA Manabí',
      ubicacion: 'Chamanga',
      categoria: 'Camaronera',
      clasificacion: '31/35',
      peso: '24,900',
      procesamiento: 'DISPONIBLE',
      pesca: '24 febrero / 08:00',
      cierre: '01d -02:52:00',
      showEditFrom: false,
      showParamsFrom: true,
      id: 4,
    },
    {
      proveedor: 'EcSSA Manabí',
      ubicacion: 'Cojimíes',
      categoria: 'Camaronera',
      clasificacion: '31/35',
      peso: '20,500',
      procesamiento: 'DISPONIBLE',
      pesca: '24 febrero / 10:00',
      cierre: '01d -04:52:00',
      showEditFrom: false,
      showParamsFrom: true,
      id: 5,
    },
    {
      proveedor: 'EcSSA Manabí',
      ubicacion: 'Pedernales',
      categoria: 'Comercial',
      clasificacion: '50/60',
      peso: '8,300',
      procesamiento: 'DISPONIBLE',
      pesca: '25 febrero / 12:00',
      cierre: '02d -06:52:00',
      showEditFrom: false,
      showParamsFrom: true,
      id: 6,
    },
  ];

  // Generar los datos de la tabla de manera reactiva usando useMemo
  const tableDataScource = useMemo(() => {
    return coordinations.map((item) => {
      return {
        id: item.id,
        proveedor: item.proveedor,
        ubicacion: item.ubicacion,
        categoria: item.categoria,
        clasificacion: item.clasificacion,
        peso: item.peso,
        procesamiento: item.procesamiento,
        pesca: moment(item.pesca).format('DD MMMM / HH:mm'),
        cierre: item.cierre,
        action: (
          <div className="table-actions" style={{ minWidth: '50px !important', textAlign: 'center' }}>
            {!item.showEditFrom && <Link className="view" to={`./${item.id}/view`}><UilEye /></Link>}
            {item.showEditFrom && <Link className="edit" to={`./${item.id}/edit`}><UilEdit /></Link>}
            {item.showParamsFrom && <Link className="edit" to={`./${item.id}/params`}><UilListOlAlt /></Link>}
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
      title: 'Proveedor',
      dataIndex: 'proveedor',
      key: 'proveedor',
    },
    {
      title: 'Ubicación',
      dataIndex: 'ubicacion',
      key: 'ubicacion',
    },
    {
      title: 'Categoría',
      dataIndex: 'categoria',
      key: 'categoria',
    },
    {
      title: 'Clasificación',
      dataIndex: 'clasificacion',
      key: 'clasificacion',
    },
    {
      title: 'Peso',
      dataIndex: 'peso',
      key: 'peso',
    },
    {
      title: 'Procesamiento',
      dataIndex: 'procesamiento',
      key: 'procesamiento',
    },
    {
      title: 'Pesca',
      dataIndex: 'pesca',
      key: 'pesca',
    },
    {
      title: 'Cierre',
      dataIndex: 'cierre',
      key: 'cierre',
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
        title="Coordinaciones"
        routes={PageRoutes}
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
                <Cards title="Notificaciones de Siembra">
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

export default NotificationSeedingLabs;
