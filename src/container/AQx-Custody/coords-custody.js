import React, { Suspense, useLayoutEffect } from 'react';
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
  const PageRoutes = [
    {
      path: '/custody',
      breadcrumbName: Cookies.get('orgName'),
    },
    {
      path: 'first',
      breadcrumbName: 'Coordinaciones',
    },
  ];

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.custody.loading);
  const coordinations = useSelector((state) => state.custody.coordinations);
  const error = useSelector((state) => state.custody.error);

  useLayoutEffect(() => {
    dispatch(loadCustodyCoordinations((isCompleted, error) => {
      console.log(`loadCustodyCoordinations ${isCompleted}`);
    }));
    return () => {
    }
  }, [dispatch]);

  const { TableData } = useSelector((states) => {
    return {
      TableData: states.dataTable.tableData,
    };
  });

  const tableDataScource = [];

  if (coordinations && coordinations.length > 0) {
    console.log( JSON.stringify(coordinations) );
    coordinations.map((item, index) => {//YYYY-MM-DDTHH:mm:ss
      const itemStatus = item.statusWrapper;
      return tableDataScource.push({
        id: `${item.SM_FishingNotification}`,
        proveedor: <span>{item.org_name} - {item.warehouse_name}</span>,
        location: <span>{item.City}, {item.Address1}, {item.Address2}</span>,
        planting: <span>{moment(item.planned_date).format('YYYY-MM-DD hh:mm A')}</span>,
        status: <span className={`ninjadash-status ninjadash-status-${itemStatus.className}`}>{itemStatus.statusName}</span>,
        action: (
          <div className="table-actions" style={{minWidth:"50px !important", textAlign: "center"}}>
            { !itemStatus.showEditFrom && <Link className="view" title='Ver información' to={`./${item.id}/view`}>
              { <UilEye /> }
            </Link> }
            { itemStatus.showEditFrom && <Link className="edit" title='Enviar Propuesta' to={`./${item.id}/edit`}>
               <UilEdit /> 
            </Link> }
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
      });
    });
  }

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
      <PageHeader className="ninjadash-page-header-main" title="Coordinaciones" routes={PageRoutes} />

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
                      key="id"
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
