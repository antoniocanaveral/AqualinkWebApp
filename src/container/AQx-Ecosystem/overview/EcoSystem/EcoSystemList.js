
import React, { useCallback, useEffect } from 'react';
import { Row, Col, PageHeader } from 'antd';
import OverviewCard from '../../../../components/cards/OverviewCard'; // Cambiamos a OverviewCard
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectModule, loadUserAccess } from '../../../../redux/authentication/actionCreator';
import InfoCard from '../../../../components/cards/InfoCard';
import Heading from '../../../../components/heading/heading';

import {
  UilCloudDataConnection,
  UilBrain,
  UilDesktop,
} from '@iconscout/react-unicons';

const OverviewDataList = React.memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserAccess());
  }, [dispatch]);

  const withFarms = useSelector((state) => state.auth.withFarms);
  const farmsOrgs = useSelector((state) => state.auth.farmsOrgs);
  const withLabs = useSelector((state) => state.auth.withLabs);
  const labsOrgs = useSelector((state) => state.auth.labsOrgs);
  const withCustody = useSelector((state) => state.auth.withCustody);
  const custodyOrgs = useSelector((state) => state.auth.custodyOrgs);
  const withControl = useSelector((state) => state.auth.withControl);
  const controlsOrgs = useSelector((state) => state.auth.controlsOrgs);

  // Función para manejar la navegación cuando se hace clic en un módulo
  const gotModule = useCallback(
    (moduleKey, orgInfo, url) => {
      dispatch(
        selectModule(moduleKey, orgInfo, () => {
          navigate(url); // Redirigir a la URL proporcionada
        })
      );
    },
    [navigate, dispatch]
  );

  // Definir los datos para cada card de forma acorde a OverviewCard
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
      onPress: () => gotModule('LAB', { orgId: labsOrgs[0]?.orgId, orgName: labsOrgs[0]?.orgName, orgEmail: labsOrgs[0]?.orgEmail }, '/lab/panel'), // Lógica de navegación
    },
    {
      id: 'farms',
      img: 'Camaroneras.png',
      icon: 'biomasa.svg',
      label: 'AquaLink - Camaroneras',
      total: farmsOrgs.length,
      type: 'info',
      status: withFarms ? 'growth' : 'down',
      canAccess: withFarms,
      accessItems: farmsOrgs,
      onPress: () => gotModule('FARM', { orgId: farmsOrgs[0]?.orgId, orgName: farmsOrgs[0]?.orgName, orgEmail: farmsOrgs[0]?.orgEmail }, '/farm'),
    },
    {
      id: 'custody',
      img: 'Empacadoras.png',
      icon: 'biomasa.svg',
      label: 'AquaLink - Custodia',
      total: custodyOrgs.length,
      type: 'success',
      status: withCustody ? 'growth' : 'down',
      canAccess: withCustody,
      accessItems: custodyOrgs,
      onPress: () => gotModule('CUSTODY', { orgId: custodyOrgs[0]?.orgId, orgName: custodyOrgs[0]?.orgName, orgEmail: custodyOrgs[0]?.orgEmail }, '/custody'),
    },
  ];

  return (
    <Row gutter={24}>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
        <figure style={{ textAlign: 'center' }}>
          <Heading as="h2">Hi</Heading>
          <img src={require('../../../../static/img/AQx-IMG/avatar48b.png')} alt="" />
          <figcaption>
            <Heading as="h5">Esteban Gallegos</Heading>
          </figcaption>
          <p>Welcome to Aqualink</p>
        </figure>
      </div>



      <Col xl={24} xs={24}>
        <div className="flex_row">
          <UilCloudDataConnection />
          <PageHeader className="ninjadash-page-header-main" title="AquaLink EcoSystem" />
        </div>
      </Col>
      {overviewCardData.map((item) => (
        <Col xl={8} xs={24} key={item.id}>
          <OverviewCard
            data={item}
            bottomStatus
            contentFirst
            halfCircleIcon
            onClick={item.onPress} // Añadir onClick para cada card
          />
        </Col>
      ))}

      <Col xl={24} xs={24}>
        <PageHeader className="ninjadash-page-header-main" im title="Solutions" />
      </Col>
      <Col xs={8}>
        <InfoCard icon="UilAnalysis" img={"Analytics.png"} type={"solutions"} />
      </Col>
      <Col xs={8}>
        <InfoCard icon="UilMonitorHeartRate" img={"Control.png"} type={"solutions"} />
      </Col>

      <Col xs={8}>
        <InfoCard icon="UilAnalytics" img={"M&E.png"} type={"solutions"} />
      </Col>
      <Col xs={8}>
        <InfoCard icon="UilBriefcaseAlt" img={"B2b.png"} type={"solutions"} />
      </Col>

      <Col xs={8}>
        <InfoCard icon="UilWifiRouter" img={"Network.png"} type={"solutions"} />
      </Col>

      <Col xs={8}>
        <InfoCard icon="UilSetting" img={"ERP.png"} type={"solutions"} />
      </Col>

      <Col xl={24} >
        <PageHeader className="ninjadash-page-header-main" title="Knowledge Center" />
      </Col>
      <Col xs={8}>
        <InfoCard icon="UilBrain" img={"AquaDemia.png"} type={"solutions"} />
      </Col>

    </Row>
  );
});

export default OverviewDataList;
