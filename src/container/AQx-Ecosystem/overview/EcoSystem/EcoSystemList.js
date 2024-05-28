import React, { useCallback, useState } from 'react';
import { Row, Col } from 'antd';
import SystemCard from '../../../../components/cards/SystemCard';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { selectModule, logOut} from '../../../../redux/authentication/actionCreator';

const OverviewDataList = React.memo(() => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { withFarms, withLabs, withCustody, withControl } = useSelector((state) => {
    return {
      withFarms: state.auth.withFarms && state.auth.withFarms === 'true',
      withLabs: state.auth.withLabs && state.auth.withLabs === 'true',
      withCustody: state.auth.withCustody && state.auth.withCustody === 'true',
      withControl: state.auth.withControl && state.auth.withControl === 'true'
    };
  });

  const [labApp, setLabApp] = useState({
    id: 1,
    icon: "biomasa.svg",
    label: "AquaLink - Laboratorios",
    canAccess: withLabs
  });
  const [farmApp, setFarmApp] = useState({
    id: 2,
    icon: "biomasa.svg",
    label: "AquaLink - Camaroneras",
    canAccess: withFarms
  });
  const [custodyApp, setCustodyApp] = useState({
    id: 3,
    icon: "biomasa.svg",
    label: "AquaLink - Custodia",
    canAccess: withCustody
  });
  const [controlApp, setControlApp] = useState({
    id: 4,
    icon: "biomasa.svg",
    label: "AquaLink - Control",
    canAccess: withControl
  });

  console.log(withControl);
  console.log(controlApp);

  

  const handleSubmit = useCallback(
    (values) => {
      console.log(values);
      /* dispatch(logOut(values, () => {
        console.log( values );
      })); */
    },
    [navigate, dispatch],
  );

  const goToLab = useCallback(
    (values) => {
      dispatch(selectModule("LAB", () => {
        navigate('/lab');
      }));
    },
    [navigate, dispatch],
  );

  const goToFarms = useCallback(
    (values) => {
      dispatch(selectModule("FARM", () => {
        navigate('/farm');
      }));
    },
    [navigate, dispatch],
  );

  const goToCustody = useCallback(
    (values) => {
      dispatch(selectModule("CUSTODY", () => {
        navigate('/custody');
      }));
    },
    [navigate, dispatch],
  );

  const goToControl = useCallback(
    (values) => {
      dispatch(selectModule("CONTROL", () => {
        navigate('/control');
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
          <SystemCard data={labApp} onPress={goToLab}/>
        </Col>
        <Col xl={6} xs={24}>
          <SystemCard data={farmApp} onPress={goToFarms}/>
        </Col>
        <Col xl={6} xs={24}>
          <SystemCard data={custodyApp} onPress={goToCustody}/>
        </Col>
        <Col xl={6} xs={24}>
          <SystemCard data={controlApp} onPress={goToControl}/>
        </Col>
      
    </Row>
  );
});

export default OverviewDataList;
