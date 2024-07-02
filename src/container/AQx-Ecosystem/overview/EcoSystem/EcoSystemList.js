import React, { useCallback, useEffect } from 'react';
import { Row, Col } from 'antd';
import SystemCard from '../../../../components/cards/SystemCard';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { selectModule, loadUserAccess} from '../../../../redux/authentication/actionCreator';

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

  const gotModule = useCallback(
    (moduleKey, orgInfo, url) => {
     dispatch(selectModule(moduleKey, orgInfo, () => {
        navigate(url);
      }));
    },
    [navigate, dispatch],
  );

  return (
    <Row>
        <Col xl={24} xs={24}>
          <h1>AquaLink EcoSystem</h1>
        </Col>
        <Col xl={6} xs={24}>
          <SystemCard data={{id: 'labs', icon: "biomasa.svg", label: "AquaLink - Laboratorios", 
            canAccess: withLabs, accessItems: labsOrgs}} onPress={(orgId, orgName, orgEmail) => gotModule('LAB', { orgId, orgName, orgEmail }, '/lab')} />
        </Col>
        <Col xl={6} xs={24}>
          <SystemCard data={{id: 'farms', icon: "biomasa.svg", label: "AquaLink - Camaroneras", 
            canAccess: withFarms, accessItems: farmsOrgs}} onPress={(orgId, orgName, orgEmail) => gotModule('FARM', { orgId, orgName, orgEmail }, '/farm')} />
        </Col>
        <Col xl={6} xs={24}>
          <SystemCard data={{id: 'custody', icon: "biomasa.svg", label: "AquaLink - Custodia", 
            canAccess: withCustody, accessItems: custodyOrgs}} onPress={(orgId, orgName, orgEmail) => gotModule('CUSTODY', { orgId, orgName, orgEmail }, '/custody')} />
        </Col>
        <Col xl={6} xs={24}>
          <SystemCard data={{id: 'control', icon: "biomasa.svg", label: "AquaLink - Control", 
            canAccess: withControl, accessItems: controlsOrgs}} onPress={(orgId, orgName, orgEmail) => gotModule('CONTROL', { orgId, orgName, orgEmail }, '/control')} />
        </Col>
      
    </Row>
  );
});

export default OverviewDataList;
