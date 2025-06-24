import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Avatar } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { DataService } from '../../../config/dataService/dataService';
import TextCard from '../../../components/cards/TextCard';
import Heading from '../../../components/heading/heading';

const SelectOrganization = () => {
  const navigate = useNavigate();
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      const clientId = Cookies.get('selectedClientId');
      const roleId = Cookies.get('selectedRoleId');

      if (clientId && roleId) {
        const res = await DataService.get(`/auth/organizations?client=${clientId}&role=${roleId}`, true);
        setOrgs(res.data.organizations);
        console.log(res.data.organizations);
      }
    };

    fetchOrgs();
  }, []);

  const handleSelectOrg = (orgId) => {
    Cookies.set('orgId', orgId);
    window.location.href = '/aqualinkdemo/monitoring';
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <figure style={{ textAlign: 'center' }}>
          <Heading as="h2">Hola!</Heading>
          <Avatar size={70}>EG</Avatar>
          <figcaption>
            <Heading as="h5">Esteban Gallegos</Heading>
          </figcaption>
          <p>Bienvenido a Aqualink</p>
        </figure>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
        Seleccione una organización
      </Typography.Title>
      <Typography.Paragraph
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '600px',
          marginInline: 'auto',
          fontSize: '16px',
          color: '#595959',
        }}
      >
        Por razones de seguridad y privacidad de la información de nuestro cliente en común, una vez que seleccione una organización (laboratorio, Finca o empacadora), no podrá cambiarla durante el resto de la sesión.
        Si necesita acceder a una organización distinta, deberá cerrar sesión e iniciar una nueva. Esto le permitirá volver a visualizar las opciones disponibles y seleccionar una nueva organización
      </Typography.Paragraph>


      <Row gutter={[24, 24]} justify="center">
        {orgs.map((org) => (
          <Col xs={24} sm={12} md={8} xl={6} key={org.id} onClick={() => handleSelectOrg(org.id)}>
            <TextCard icon="UilBuilding" text={org.name} type="primary" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SelectOrganization;
