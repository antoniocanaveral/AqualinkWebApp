
import React, { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { Row, Col, Form, Skeleton, Avatar, Typography, Table } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { loadBinesByCoord, loadCustodyCoord, loadDrawerByCoord, loadDrawerStampByCoord } from '../../../../redux/custody/actionCreator';
import { Main, OrderSummary } from '../../../styled';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import DataTable from '../../../../components/table/DataTable';


const binesDataTableColumnMain = [
  {
    title: 'No. Bin',
    dataIndex: 'bin',
    key: 'bin',
  },
  {
    title: 'Sello 1',
    dataIndex: 'seal1',
    key: 'seal1',
  },
  {
    title: 'Sello 2',
    dataIndex: 'seal2',
    key: 'seal2',
  },
  {
    title: 'Sello 3',
    dataIndex: 'seal3',
    key: 'seal3',
  },
  {
    title: 'Sello 4',
    dataIndex: 'seal4',
    key: 'seal4',
  }
];

const drawerDataTableColumnMain = [
  {
    title: 'Furgón',
    dataIndex: 'van',
    key: 'van',
  },
  {
    title: 'Sello',
    dataIndex: 'stamp',
    key: 'stamp',
  },
  {
    title: '#Gavetas',
    dataIndex: 'drawers',
    key: 'drawers',
  }
];



function HarvestModalHarvest() {


  const dispatch = useDispatch();
  let { id } = useParams();

  const coordination = useSelector((state) => state.custody.coordination);
  const bines = useSelector((state) => state.custody.bines);
  const drawer = useSelector((state) => state.custody.drawer);
  const drawerStamps = useSelector((state) => state.custody.drawerStamps);



  useEffect(() => {
    dispatch(loadCustodyCoord(id, () => { }));
    dispatch(loadBinesByCoord(id, () => { }));
    dispatch(loadDrawerByCoord(id, () => { }));
    dispatch(loadDrawerStampByCoord(id, () => { }));
  }, [dispatch, id]);

  const binesTableDataScource = bines ? bines.map((item) => ({
    bin: <span>{item.Name}</span>,
    seal1: <span>{item.SM_Stamp1}</span>,
    seal2: <span>{item.SM_Stamp2}</span>,
    seal3: <span>{item.SM_Stamp3}</span>,
    seal4: <span>{item.SM_Stamp4}</span>
  })) : [];

  const drawerTableDataScource = drawerStamps ? drawerStamps.map((item) => ({
    van: <span>{item.SM_Van}</span>,
    stamp: <span>{item.SM_Stamp}</span>,
    drawers: <span>{item.SM_DrawersCount}</span>
  })) : [];


  const getDrawersCount = () => {
    return drawerStamps ? drawerStamps.reduce((acc, ds) => acc + ds.SM_DrawersCount, 0) : 0;
  };

  return (
    <>
      <Main>
        <Row gutter={25}>
          <Col xl={14} xs={24}>
            <Suspense
              fallback={
                <Cards headless>
                  <Skeleton active />
                </Cards>
              }
            >
              {/* Detalles del laboratorio */}
              <Row gutter={16} style={{ marginBottom: '16px' }}>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <OrderSummary>
                    <div className="invoice-summary-inner">
                      <ul className="summary-list">
                        <li>
                          <span className="summary-list-title">Fecha y Hora de Pesca Confirmada :</span>
                          <span className="summary-list-text">{coordination ? moment(coordination.answered_date).format("DD-MM-YYYY hh:mm A") : ""}</span>
                        </li>
                      </ul>
                    </div>
                  </OrderSummary>
                </Col>
              </Row>

              {coordination?.container_type === 'BINES' && (
                <div className="atbd-review-order__single">
                  <Cards headless>
                    <Heading as="h5">Información de Bines</Heading>
                    <OrderSummary>
                      <DataTable
                        tableData={binesTableDataScource}
                        columns={binesDataTableColumnMain}
                        key="bin"
                        rowSelection={false}
                      />
                    </OrderSummary>
                  </Cards>
                </div>
              )}

              {coordination?.container_type === 'GAVETAS' && (
                <div className="atbd-review-order__single">
                  <Cards headless>
                    <Heading as="h5">Información de Gavetas</Heading>
                    <OrderSummary>
                      <div className="invoice-summary-inner">
                        <ul className="summary-list">
                          <li>
                            <span className="summary-list-title">Cantidad de Gavetas :</span>
                            <span className="summary-list-text">{getDrawersCount()}</span>
                          </li>
                          <li>
                            <span className="summary-list-title">Hielo (#Sacos) :</span>
                            <span className="summary-list-text">{drawer?.SM_Ice ? `${drawer.SM_Ice} saco${drawer.SM_Ice > 1 ? 's' : ''}` : ""}</span>
                          </li>
                          <li>
                            <span className="summary-list-title">Metabisulfitos (kg) :</span>
                            <span className="summary-list-text">{drawer?.SM_Metabisulfito ? `${drawer.SM_Metabisulfito} kg` : ""}</span>
                          </li>
                        </ul>
                      </div>
                      <DataTable
                        tableData={drawerTableDataScource}
                        columns={drawerDataTableColumnMain}
                        key="bin"
                        rowSelection={false}
                      />
                    </OrderSummary>
                  </Cards>
                </div>
              )}
            </Suspense>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default HarvestModalHarvest;
