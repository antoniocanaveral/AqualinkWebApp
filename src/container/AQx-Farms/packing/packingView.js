import React, { useEffect, useState } from 'react';
import { Row, Col, Avatar, Table, Input } from 'antd';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Heading from '../../../components/heading/heading';
import { GoogleMaps } from '../../../components/maps/google-maps';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDirectories } from '../../../redux/directories/actionCreator';

function PackingViewFarm() {
  const dispatch = useDispatch();

  const { directories, directoriesLoading, directoriesError } = useSelector(
    (state) => state.directories
  );

  // Estado para el texto de búsqueda
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(fetchDirectories('CUSTODY'));
  }, [dispatch]);

  // Filtramos la data según el texto de búsqueda en "Name"
  const filteredData = directories.filter((item) => {
    return item.Name?.toLowerCase().includes(searchText.toLowerCase());
  });

  // Definimos las columnas de la tabla
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
            <div style={{width: "50px"}}>
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
    // Si quisieras mostrar el tipo (org_type):
    // {
    //   title: 'Tipo',
    //   dataIndex: 'org_type',
    //   key: 'org_type',
    // },
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
        highlightText="AquaLink Camaronera"
        title="Directorio de Empacadoras"
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
              <Heading as="h4">Listado de Empacadoras</Heading>
              <Table
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

export default PackingViewFarm;
