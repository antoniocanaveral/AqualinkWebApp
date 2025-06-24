import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Input, Button, Space, DatePicker, message } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { PageHeader } from '../../../components/page-headers/page-headers';
import { Main } from '../../styled';
import { Cards } from '../../../components/cards/frame/cards-frame';
import Speedometer from './charts/Speedometer';
import { AqualinkMaps } from '../../../components/maps/aqualink-map';
import { selectFarmsOrgsWithPools } from '../../../redux/authentication/selectors';
import { fetchIndirectCosts, registerIndirectCost } from '../../../redux/cost/actionCreator';

function CostAddFarm() {
  const dispatch = useDispatch();
  const indirectCosts = useSelector(state => state.cost.indirectCosts);

  const [inputValue, setInputValue] = useState('');
  const [currentWeekCost, setCurrentWeekCost] = useState(null);
  const [previousWeekCost, setPreviousWeekCost] = useState(null);
  const [projectedCost, setProjectedCost] = useState(null);
  const [projectedDate, setProjectedDate] = useState(null);
  const [currentWeekRecordId, setCurrentWeekRecordId] = useState(null);

  const currentWeekRange = [moment().startOf('isoWeek'), moment().endOf('isoWeek')];
  const previousWeekRange = [moment().subtract(1, 'weeks').startOf('isoWeek'), moment().subtract(1, 'weeks').endOf('isoWeek')];


  const organizations = useSelector((state) => state.auth.farmsOrgs);

  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools);

  const [selectedOrg, setSelectedOrg] = useState(Number(Cookies.get('orgId')) || null);

  const handleOrgChange = (orgId, orgEmail) => {
    setSelectedOrg(orgId);
    Cookies.set('orgId', orgId);
    Cookies.set('orgEmail', orgEmail || '');
    Cookies.remove('poolId');
    console.log(JSON.stringify(farmsOrgsWithPools));
  };



  const farmsSelectOptions = organizations.length > 0 ? [
    {
      options: farmsOrgsWithPools.map(org => ({
        value: org.orgId,
        label: org.orgName,
        email: org.orgEmail,
      })),
      onChange: handleOrgChange,
      placeholder: 'Seleccione una Farm',
      value: selectedOrg || undefined,
    },
  ] : [];



  const combinedSelectOptions = [
    ...farmsSelectOptions,
  ];


  useEffect(() => {
    setProjectedCost(null)
    setProjectedDate(null)
    setCurrentWeekCost(null);
    setPreviousWeekCost(null)
    setInputValue("")
    dispatch(fetchIndirectCosts());
  }, [dispatch, selectedOrg]);

  useEffect(() => {
    if (indirectCosts.length > 0) {
      const sortedCosts = [...indirectCosts].sort((a, b) => moment(a.Created).diff(moment(b.Created)));
      const projectedRecord = sortedCosts[0];
      const currentWeekRecord = indirectCosts.find(record => moment(record.Created).isBetween(currentWeekRange[0], currentWeekRange[1], 'day', '[]'));
      const previousWeekRecord = indirectCosts.find(record => moment(record.Created).isBetween(previousWeekRange[0], previousWeekRange[1], 'day', '[]'));

      setProjectedCost(projectedRecord?.sm_indirectcostvalue || null);
      setProjectedDate(projectedRecord?.Created ? moment(projectedRecord.Created) : null);
      setPreviousWeekCost(previousWeekRecord?.sm_indirectcostvalue || null);
      setCurrentWeekCost(currentWeekRecord?.sm_indirectcostvalue || null);
      setInputValue(currentWeekRecord?.sm_indirectcostvalue || '');
      setCurrentWeekRecordId(currentWeekRecord?.id || null);
    }
  }, [indirectCosts]);

  const handleSubmit = () => {
    if (!inputValue) {
      message.error('Ingresa un valor válido');
      return;
    }

    const payload = { sm_indirectcostvalue: Number(inputValue) };

    dispatch(registerIndirectCost(payload, currentWeekRecordId))
      .then(() => dispatch(fetchIndirectCosts()));
  };

  return (
    <>
      <PageHeader highlightText="Aqualink Costos" title="Costo Indirecto"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg} />
      <Main>
        <Row gutter={25}>
          <Col xl={9} xs={24}>
            <AqualinkMaps width="100%" />
          </Col>

          <Col xl={15} xs={24}>
            <Cards title={"Costo Indirecto Ha/Día"}>
              <div className='flex-row' style={{ gap: 10 }}>
                <div>
                  <Typography.Text>Costo Indirecto Ha/Día / Proyectado</Typography.Text>
                  <Input value={projectedCost ? `${projectedCost} USD` : 'No disponible'} disabled />
                </div>
                <div>
                  <Typography.Text>Fecha de Proyección</Typography.Text>
                  <DatePicker
                    value={projectedDate}
                    disabled
                    format="DD/MM/YYYY"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>

              <div className='flex-row' style={{ gap: 10 }}>
                <div>
                  <Typography.Text>Costo Indirecto Ha/Día / Semana Previa</Typography.Text>
                  <Input value={previousWeekCost ? `${previousWeekCost} USD` : 'No disponible'} disabled />
                </div>
                <div>
                  <Typography.Text>Rango Fecha Semana Previa</Typography.Text>
                  <DatePicker.RangePicker value={previousWeekRange} disabled format="DD/MM/YYYY" style={{ width: '100%' }} />
                </div>
              </div>

              <div className='flex-row' style={{ gap: 10 }}>
                <div>
                  <Typography.Text>Costo Indirecto Ha/Día / Semana Actual</Typography.Text>
                  <Input
                    type="number"
                    placeholder="Ingrese costo actual"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                  />
                </div>
                <div>
                  <Typography.Text>Rango de Fecha Semana Actual</Typography.Text>
                  <DatePicker.RangePicker value={currentWeekRange} disabled format="DD/MM/YYYY" style={{ width: '100%' }} />
                </div>
              </div>

              <Space style={{ marginTop: 10 }}>
                <Button type="primary" onClick={handleSubmit}>Enviar</Button>
              </Space>
            </Cards>
          </Col>
        </Row>

        <Row gutter={25}>
          <Col xl={12} xs={24}>
            <Cards title="Performance">
              <Speedometer value={projectedCost || 0} />
            </Cards>
          </Col>
          <Col xl={12} xs={24}>
            <Cards title="Semana Actual">
              <Speedometer value={currentWeekCost || 0} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
}

export default CostAddFarm;
