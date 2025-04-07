import React, { useEffect, useState } from 'react';
import { Typography, Row, Col } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { DataService } from '../../../config/dataService/dataService';
import TextCard from '../../../components/cards/TextCard';

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
        Por razones de seguridad y privacidad, una vez que selecciones una organización no podrás cambiarla durante esta sesión.
        Si necesitas elegir otra, deberás cerrar sesión y volver a iniciar para acceder nuevamente al listado de organizaciones disponibles.
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
