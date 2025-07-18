import React, { useEffect, useState } from 'react';
import { Row, Col, Avatar, Table, Input } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDirectories } from '../../../redux/directories/actionCreator';
import { useLocation } from 'react-router-dom';

function ViewFarm() {

  const location = useLocation();
  const currentPath = location.pathname;
  const isLabView = currentPath === '/lab/shrimp/view';
  const isFarmView = currentPath === '/farm/laboratory/view';

  const dispatch = useDispatch();

  const { directories, directoriesLoading, directoriesError } = useSelector(
    (state) => state.directories
  );


  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    var type = null
    isLabView ? type = "FARM" : isFarmView ? type = "LAB" : type = "CUSTODY"

    dispatch(fetchDirectories(type));
  }, [dispatch]);


  const filteredData = directories.filter((item) => {
    return item.Name?.toLowerCase().includes(searchText.toLowerCase());
  });


  const columns = [

    {
      title: 'Nombre',
      dataIndex: 'Name',
      key: 'Name',
      render: (text, record) => {
        const initials = record.Name
          ? record.Name.split(' ')
            .map((word) => word[0]) // Tomamos la primera letra de cada palabra
            .join('')
            .slice(0, 4) // Limita a 4 caracteres
            .toUpperCase()
          : 'N/A';

        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: "50px" }}>
              <Avatar
                size={40} // ancho/alto fijo
                style={{
                  backgroundColor: '#b5b5b5',
                  verticalAlign: 'middle',
                  marginRight: 10,
                  min_width: "80px"
                }}
              >
                {initials}
              </Avatar>
            </div>
            <span>{record.Name}</span>
          </div>
        );
      },
    },
    {
      title: 'Código SCI',
      dataIndex: 'sci_code',
      key: 'sci_code',
      width: '10%',
    },
    {
      title: 'Dirección',
      dataIndex: 'Address',
      key: 'Address',
      width: '25%',
    },
    {
      title: 'Teléfono',
      dataIndex: 'Phone',
      key: 'Phone',
      width: '10%',
    },
    {
      title: 'Contacto',
      dataIndex: 'contact_name',
      key: 'contact_name',
      width: '20%',
    },






  ];

  if (directoriesLoading) {
    return <p>Cargando datos...</p>;
  }

  if (directoriesError) {
    return <p>Ocurrió un error al cargar los directorios.</p>;
  }

  return (
    <>
      <PageHeader
        highlightText={isFarmView ? "AquaLink Laboratorio" : isLabView ? "Aqualink Camaronera" : "AquaLink Empacadora"}
        title="Directorios "
      />
      <Main>
        {/* Input para buscar por nombre */}
        <Row style={{ marginBottom: 16 }}>
          <Col>
            <Input
              placeholder="Buscar por nombre..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ width: 300 }}
            />
          </Col>
        </Row>

        <Row gutter={[25, 25]}>
          <Col span={24}>
            <Cards headless>
              <Heading as="h4">Listado de Camaroneras</Heading>
              <Table
                className='table-responsive'
                rowKey="id"
                columns={columns}
                dataSource={filteredData}
                pagination={{ pageSize: 5 }}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default ViewFarm;
