import React, { useCallback, useEffect, useState } from 'react';
import { Row, Col, PageHeader, Avatar } from 'antd';
import OverviewCard from '../../../../components/cards/OverviewCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectModule, loadUserAccess } from '../../../../redux/authentication/actionCreator';
import InfoCard from '../../../../components/cards/InfoCard';
import Heading from '../../../../components/heading/heading';
import Cookies from 'js-cookie';

import {
  UilCloudDataConnection,
  UilBooks,
  UilSlack,
} from '@iconscout/react-unicons';

const OverviewDataList = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserAccess())
      .then(() => {
        setLoading(false);
        Cookies.set('farmsExist', farmsOrgs.length > 0 ? 'true' : 'false');
        Cookies.set('labsExist', labsOrgs.length > 0 ? 'true' : 'false');
        Cookies.set('custodyExist', custodyOrgs.length > 0 ? 'true' : 'false');
      })
      .catch(() => setLoading(false));
  }, [dispatch]);


  const withFarms = useSelector((state) => state.auth.withFarms);
  const farmsOrgs = useSelector((state) => state.auth.farmsOrgs);
  const withLabs = useSelector((state) => state.auth.withLabs);
  const labsOrgs = useSelector((state) => state.auth.labsOrgs);
  const withCustody = useSelector((state) => state.auth.withCustody);
  const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);

  const userRoles = JSON.parse(decodeURIComponent(Cookies.get('roles') || '[]'));
  const hasExternalAuditorRole = userRoles.some(role => role.name === 'Cumplimiento - Auditor Externo');

  const gotModule = useCallback(
    (moduleKey, orgInfo, url) => {
      dispatch(
        selectModule(moduleKey, orgInfo, () => {
          navigate(url);
        })
      );
    },
    [navigate, dispatch]
  );

  const overviewCardData = [
    {
      id: 'labs',
      img: 'Laboratorios.png',
      icon: 'biomasa.svg',
      label: 'AquaLink - Laboratorios',
      total: labsOrgs.length,
      type: 'secondary',
      status: withLabs ? 'growth' : 'down',
      canAccess: withLabs,
      accessItems: labsOrgs,
      onPress: () => {

        gotModule('LAB', { orgId: labsOrgs[0]?.orgId, orgName: labsOrgs[0]?.orgName, orgEmail: labsOrgs[0]?.orgEmail }, '/lab/panel');

      },
    },
    {
      id: 'farms',
      img: 'Camaroneras.png',
      icon: 'biomasa.svg',
      label: 'AquaLink - Camaroneras',
      total: farmsOrgs.length,
      type: 'success',
      status: withFarms ? 'growth' : 'down',
      canAccess: withFarms,
      accessItems: farmsOrgs,
      onPress: () => {

        gotModule('FARM', { orgId: farmsOrgs[0]?.orgId, orgName: farmsOrgs[0]?.orgName, orgEmail: farmsOrgs[0]?.orgEmail }, '/farm');

      },
    },
    {
      id: 'custody',
      img: 'Empacadoras.png',
      icon: 'biomasa.svg',
      label: 'AquaLink - Custodia',
      total: custodyOrgs.length,
      type: 'info',
      status: withCustody ? 'growth' : 'down',
      canAccess: withCustody,
      accessItems: custodyOrgs,
      onPress: () => {
        gotModule('CUSTODY', { orgId: custodyOrgs[0]?.orgId, orgName: custodyOrgs[0]?.orgName, orgEmail: custodyOrgs[0]?.orgEmail }, '/custody');
      },
    },
  ];

  return (
    <Row gutter={24}>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', zIndex: 2 }}>
        <figure style={{ textAlign: 'center' }}>
          <Heading as="h2">Hola!</Heading>
          <Avatar size={70}>EG</Avatar>
          <figcaption>
            <Heading as="h5">Esteban Gallegos</Heading>
          </figcaption>
          <p>Bienvenido a Aqualink</p>
        </figure>
      </div>

      <div className="background">
        {[...Array(12)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <Col xl={24} xs={24}>
        <div className="flex_row">
          <UilCloudDataConnection />
          <PageHeader title="Smart Apps & WebApps" />
        </div>
      </Col>

      {overviewCardData.map((item) => (
        <Col xl={8} md={8} xs={24} key={item.id}>
          <div
            style={{
              pointerEvents: loading ? 'none' : 'auto',  // Inactiva la tarjeta hasta que termine la carga
              opacity: loading ? 0.5 : 1,  // Baja la opacidad mientras se carga
              cursor: loading ? 'not-allowed' : 'pointer',  // No se permite interacción mientras se carga
            }}
          >
            <OverviewCard
              data={item}
              bottomStatus
              contentFirst
              halfCircleIcon
              onClick={loading ? null : item.onPress}  // No permite hacer clic mientras se está cargando
            />
          </div>
        </Col>
      ))}

      <Col xl={24} xs={24}>
        <div className="flex_row">
          <UilSlack />
          <PageHeader title="Solutions" />
        </div>
      </Col>

      <Col xs={24} xl={8} md={8}>
        <div
          onClick={() => gotModule('MONITORING', { orgId: null, orgName: null, orgEmail: null }, '/monitoring')}
          style={{
            cursor: hasExternalAuditorRole ? 'pointer' : 'not-allowed',
            opacity: hasExternalAuditorRole ? 1 : 0.5,
            pointerEvents: hasExternalAuditorRole ? 'auto' : 'none'
          }}
        >
          <InfoCard icon="UilAnalytics" img="M&E.png" type="solutions" />
        </div>
      </Col>

      <Col xs={24} xl={8} md={8}>
        <div
          onClick={() => gotModule('NETWORK', { orgId: null, orgName: null, orgEmail: null }, '/network')}
        >
          <InfoCard icon="SiCoinmarketcap" iconLib="si" img="Network.png" type="solutions" />
        </div>
      </Col>

      <Col xs={24} xl={8} md={8}>
        <div
          onClick={hasExternalAuditorRole
            ? () => gotModule('CONTROL', { orgId: null, orgName: null, orgEmail: null }, '/control')
            : null}
          style={{
            cursor: hasExternalAuditorRole ? 'pointer' : 'not-allowed',
            opacity: hasExternalAuditorRole ? 1 : 0.5,
            pointerEvents: hasExternalAuditorRole ? 'auto' : 'none'
          }}
        >
          <InfoCard icon="UilMonitorHeartRate" img="Control.png" type="solutions" />
        </div>
      </Col>

      <Col xs={24} xl={8} md={8}>
        <InfoCard icon="UilAnalysis" img="Analytics.png" type="solutions" />
      </Col>

      <Col xs={24} xl={8} md={8}>
        <InfoCard icon="UilSetting" img="ERP.png" type="solutions" />
      </Col>

      <Col xs={24} xl={8} md={8}>
        <InfoCard icon="UilBriefcaseAlt" img="B2b.png" type="solutions" />
      </Col>

      <Col xs={8}>
        <div className="flex_row">
          <UilBooks />
          <PageHeader title="Knowledge Center" />
        </div>
        <InfoCard icon="UilBrain" img="AquaDemia.png" type="solutions" />
      </Col>
    </Row>
  );
});

export default OverviewDataList;
