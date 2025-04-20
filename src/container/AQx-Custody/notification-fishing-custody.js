import React, { Suspense, useMemo } from 'react';
import { Row, Col, Skeleton, Tag } from 'antd';
import { Main, BorderLessHeading } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import DataTable from '../../components/table/DataTable';
import { Link } from 'react-router-dom';
import UilEye from '@iconscout/react-unicons/icons/uil-eye';
import UilEdit from '@iconscout/react-unicons/icons/uil-edit';
import UilListOlAlt from '@iconscout/react-unicons/icons/uil-list-ol-alt';
import moment from 'moment';

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

function NotificationFishingCustody() {
  const PageRoutes = [
    {
      path: '/lab',
      breadcrumbName: 'Coordinaciones',
    },
  ];


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


  const getCierreColor = (cierre) => {
    const days = parseInt(cierre.split('d')[0], 10);
    if (days < 1) {
      return '#ff4d4f'; // Rojo si es menos de un día
    } else if (days >= 1) {
      return '#01b81a'; // Verde si es un día o más
    } else {
      return '#FF8C00'; // Naranja para otros casos
    }
  };


  const tableDataScource = useMemo(() => {
    return coordinations.map((item) => {
      return {
        id: item.id,
        proveedor: item.proveedor,
        ubicacion: item.ubicacion,
        categoria: item.categoria,
        clasificacion: item.clasificacion,
        peso: item.peso,
        procesamiento: (
          <Tag color={item.procesamiento === 'DISPONIBLE' ? '#01b81a' : '#FF8C00'}>
            {item.procesamiento}
          </Tag>
        ),
        pesca: moment(item.pesca).format('DD MMMM / HH:mm'),
        cierre: (
          <Tag color={getCierreColor(item.cierre)}>
            {item.cierre}
          </Tag>
        ),
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
        
        highlightText="Aqualink"
        title="Notificaciones Pesca"
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
                <Cards icon={<UilFlaskPotion />}  title="Notificaciones de Pesca">
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

export default NotificationFishingCustody;
