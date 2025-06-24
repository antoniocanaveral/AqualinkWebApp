"use client"

import { Suspense, useEffect, useMemo, useState } from "react"
import axios from "axios"
import { Row, Col, Skeleton, Form } from "antd"
import { motion, AnimatePresence } from "framer-motion"
import { PageHeader } from "../../components/page-headers/page-headers"
import { Main } from "../styled"
import { AqualinkMaps } from "../../components/maps/aqualink-map"
import { useDispatch, useSelector } from "react-redux"
import { selectFarmsOrgsWithPools, selectFarmsOrgs } from "../../redux/authentication/selectors"
import usePageHeaderSelectors from "../../hooks/usePageHeaderSelectors"
import SimulationForm from "./Simulation/SimulationForm"
import ScenarioCard from "./Simulation/ScenarioCard"
import ChartsContainer from "./Simulation/ChartsContainer"
import AqualinkWeightChart from "./Simulation/AqualinkWeightChart"
import { Cards } from "../../components/cards/frame/cards-frame"
import { fetchIndirectCosts } from "../../redux/cost/actionCreator"
import { fetchOperationReport, fetchOperationReportPool } from "../../redux/views/batch-report/actionCreator"
import dayjs from "dayjs"

function PlanningStudioFarms() {
  const [form] = Form.useForm()
  const dispatch = useDispatch();
  const { campaigns, loading } = useSelector(state => state.batchReport);
  const [scenarios, setScenarios] = useState([])
  const [selectedScenario, setSelectedScenario] = useState(null)
  const indirectCosts = useSelector(state => state.cost.indirectCosts);
  const [simulationType, setSimulationType] = useState("fijo")
  const [fixedOption, setFixedOption] = useState(null)
  const [cultivationSystem, setCultivationSystem] = useState("Bifasico")
  const [fixedFieldNeedsValue, setFixedFieldNeedsValue] = useState(false)
  const [fixedFieldDisabled, setFixedFieldDisabled] = useState(false)

  const farmsOrgsWithPools = useSelector(selectFarmsOrgsWithPools)
  const farmsOrgs = useSelector(selectFarmsOrgs)

  const { selectedOrg, selectedSector, selectedPoolSize, selectedPool, combinedSelectOptions } = usePageHeaderSelectors({
    orgsSelector: () => farmsOrgs,
    poolsSelector: () => farmsOrgsWithPools,
    includeSector: true,
    includePool: true,
    orgType: "Camaronera",
  })

  const fixedOptionFieldNames = {
    densidad: "density",
    ciclo: "days_to_harvest",
    peso: "estimated_weight",
    fca: "stimated_fca",
  }

  const getLatestIndirectCost = () => {
    if (!indirectCosts || indirectCosts.length === 0) return 0;
    const sortedCosts = [...indirectCosts].sort((a, b) =>
      new Date(b.Created) - new Date(a.Created)
    );
    return sortedCosts[0]?.sm_indirectcostvalue || 0;
  };

  const handleFixedOptionChange = (value) => {
    setFixedOption(value)
    const fieldName = fixedOptionFieldNames[value]
    if (fieldName) {
      form.resetFields([fieldName])
    }
  }

  const fixedFieldName = fixedOption ? fixedOptionFieldNames[fixedOption] : ""
  const fixedFieldValue = Form.useWatch(fixedFieldName, form)

  useEffect(() => {
    if (simulationType === "fijo" && fixedOption) {
      if (!fixedFieldValue) {
        setFixedFieldNeedsValue(true)
        setFixedFieldDisabled(false)
      } else {
        setFixedFieldNeedsValue(false)
        setFixedFieldDisabled(true)
      }
    } else {
      setFixedFieldNeedsValue(false)
      setFixedFieldDisabled(false)
    }
  }, [simulationType, fixedOption, fixedFieldValue])

  useEffect(() => {
    if (selectedPool) {
      dispatch(fetchIndirectCosts());
      dispatch(fetchOperationReportPool());
    }
  }, [dispatch, selectedPool]);

  useEffect(() => {
    if (selectedPoolSize) {
      form.setFieldsValue({
        shrimp_pool_hec: selectedPoolSize
      });
    }
  }, [selectedPoolSize, form]);

  useEffect(() => {
    const latestCost = getLatestIndirectCost();
    if (latestCost > 0) {
      form.setFieldsValue({
        dayly_inditect_cost: latestCost
      });
    }
  }, [indirectCosts, form]);

  useEffect(() => {
    if (cultivationSystem === "Trifasico") {
      form.setFieldsValue({
        pre_breeding_weeks: 28
      });
    }
  }, [cultivationSystem, form]);

  const inputLabels = {
    shrimp_pool_hec: "Área de piscina (ha)",
    start_date: "Fecha de inicio",
    days_to_harvest: "Días de Engorde",
    density: "Densidad Estimada",
    stimated_weight: "Peso Estimado a Cosecha",
    stimated_survival: "Supervivencia estimada",
    stimated_fca: "FCA estimado",
    stimated_performance: "Ren. est en Empacadora",
    pre_breeding_weeks: "Días de pre-cría",
    food_price: "Costo x kg de AB",
    breeding_cost: "Costo Insumos x kg de AB ",
    dayly_inditect_cost: "Costo indirecto Ha/día",
    selling_price: "Precio est de venta",
  }

  const latestPlannedFinishDate = useMemo(() => {
    if (!campaigns || campaigns.length === 0) return null;
    const dates = campaigns
      .map(c => c.SM_PlannedFinishDate)
      .filter(Boolean)
      .map(dateStr => new Date(dateStr));
    console.log("Fechas de campañas:", dates)
    const maxDate = new Date(Math.max(...dates));
    console.log("Fecha máxima:", maxDate)
    return dayjs(maxDate).add(7, 'day'); 
  }, [campaigns]);

  const onAddScenario = async () => {
    if (scenarios.length >= 3) {
      alert("No puedes añadir más de 3 escenarios")
      return
    }
    try {
      const values = await form.validateFields()
      const dataToSend = {
        shrimp_pool_hec: Number.parseFloat(values.shrimp_pool_hec),
        start_date: values.start_date ? values.start_date.format("YYYY-MM-DD") : null,
        days_to_harvest: Number.parseInt(values.days_to_harvest, 10),
        density: Number.parseFloat(values.density),
        estimated_weight: Number.parseFloat(values.stimated_weight),
        estimated_survival: Number.parseFloat(values.stimated_survival) / 100,
        estimated_fca: Number.parseFloat(values.stimated_fca),
        estimated_performance: Number.parseFloat((values.stimated_performance)/100),
        pre_breeding_days: Number.parseInt(values.pre_breeding_weeks, 10),
        food_price: Number.parseFloat(values.food_price),
        breeding_cost: Number.parseFloat(values.breeding_cost),
        dayly_inditect_cost: Number.parseFloat(values.dayly_inditect_cost),
        selling_price: Number.parseFloat(values.selling_price),
        SGR: Number.parseFloat(values.SGR),
      }
      const response = await axios.post("https://aqualink-simulation.onrender.com/planning_scenarios", dataToSend)
      console.log("Escenario añadido:", response.data)
      const updatedScenarios = [...scenarios, response.data]
      setScenarios(updatedScenarios)
    } catch (error) {
      console.error("Error al añadir el escenario:", error)
    }
  }

  const handleDeleteScenario = (index) => {
    if (index === 3) {
      setScenarios([])
      setSelectedScenario(null)
      return
    }
    const updatedScenarios = scenarios.filter((_, i) => i !== index)
    setScenarios(updatedScenarios)
    if (selectedScenario === index) {
      setSelectedScenario(null)
    }
  }

  const handleApplyScenario = async (index) => {
    if (scenarios.length >= 4) {
      alert("No puedes añadir más de 4 escenarios");
      return;
    }

    const selectedScenarioData = scenarios[index];

    try {
      const response = await axios.post(
        "https://aqualink-simulation.onrender.com/aqualink_scenarios",
        selectedScenarioData
      );

      if (response.data) {
        const aqualinkScenario = {
          inputs: {
            ...response.data.input_data.inputs,
            estimated_weight: Number(response.data.final_weight).toFixed(2),
            entry_weight: Number(response.data.input_weight).toFixed(2),
            weekly_growth: Number(response.data.weekly_growth).toFixed(2),
            harvest_date: response.data.harvest_date,
            feeding_protocol: response.data.protocol
          },
          estimated_production_kg: response.data.input_data.estimated_production_kg,
          total_income: response.data.input_data.total_income,
          total_cost: response.data.input_data.total_cost,
          profit_hectare_day: response.data.input_data.profit_hectare_day,
          simulation_data: response.data.simulation_data,
          feasable: response.data.feasable,
        };

        const updatedScenarios = [...scenarios, aqualinkScenario];
        setScenarios(updatedScenarios);
      } else {
        alert("Error: La respuesta del servidor no contiene datos válidos");
      }
    } catch (error) {
      console.error("Error al aplicar el escenario Aqualink:", error);
      alert("Ocurrió un error al generar el escenario Aqualink. Por favor, intenta de nuevo.");
    }
  };

  const handleSelectScenario = (index) => {
    setSelectedScenario(selectedScenario === index ? null : index)
  }

  const regularScenarios = scenarios.filter((_, index) => index !== 3)
  const aqualinkScenario = scenarios.find((_, index) => index === 3)
  const aqualinkIndex = scenarios.findIndex((_, index) => index === 3)

  return (
    <>
      <PageHeader
        highlightText={"AquaLink Camaronera"}
        title="Planning Studio®"
        selectOptions={combinedSelectOptions}
        selectedOrg={selectedOrg}
        selectedPool={selectedPool}
        onBack={() => window.history.back()}
      />
      <Main>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Row gutter={25} className="equal-height-row" style={{ minHeight: '305px' }}>
            <Col xl={7} xs={24} className="equal-height-col" style={{ display: 'flex' }}>
              <AqualinkMaps
                width="100%"
                height={window.innerWidth >= 2000 ? '600px' : '340px'}
                descriptionColumn={2}
                selectedOrg={selectedOrg}
                selectedSector={selectedSector}
                selectedPool={selectedPool}
                farmsOrgsWithPools={farmsOrgsWithPools}
              />
            </Col>
            <Col xl={17} xs={24} className="equal-height-col" style={{ display: 'flex' }}>
              <Suspense
                fallback={
                  <Cards headless>
                    <Skeleton active />
                  </Cards>
                }
              >
                <Cards title="Planificación: Ingreso de Datos para Escenarios" size="large">
                  <SimulationForm
                    form={form}
                    minStartDate={latestPlannedFinishDate}
                    simulationType={simulationType}
                    fixedOption={fixedOption}
                    cultivationSystem={cultivationSystem}
                    onFixedOptionChange={handleFixedOptionChange}
                    onAddScenario={onAddScenario}
                    inputLabels={inputLabels}
                    fixedFieldNeedsValue={fixedFieldNeedsValue}
                    fixedFieldDisabled={fixedFieldDisabled}
                    selectedPoolSize={selectedPoolSize}
                    indirectCosts={indirectCosts}
                    setCultivationSystem={setCultivationSystem}
                  />
                </Cards>
              </Suspense>
            </Col>
          </Row>
        </motion.div>

        <AnimatePresence>
          {regularScenarios.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              style={{ marginTop: "25px" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  textAlign: "center",
                  margin: "20px 0 30px 0",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    color: "#2c3e50",
                    marginBottom: "8px",
                  }}
                >
                  Escenarios de Producción
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#7f8c8d",
                    margin: "0 auto",
                    maxWidth: "500px",
                  }}
                >
                  Análisis comparativo para optimización de cultivo de camarón
                </p>
              </motion.div>

              <Row gutter={[25, 25]} justify="center">
                {regularScenarios.map((scenario, arrayIndex) => {
                  const originalIndex = scenarios.findIndex((s) => s === scenario)
                  return (
                    <Col xl={8} lg={8} md={12} xs={24} key={originalIndex}>
                      <ScenarioCard
                        scenario={scenario}
                        index={originalIndex}
                        onDelete={handleDeleteScenario}
                        onApply={handleApplyScenario}
                        scenariosLength={scenarios.length}
                        selectedScenario={selectedScenario}
                        onSelect={handleSelectScenario}
                      />
                    </Col>
                  )
                })}
              </Row>
            </motion.div>
          )}
        </AnimatePresence>

        <Row gutter={[25, 25]} justify="center">
          <AnimatePresence>
            <Col xl={8} lg={24} md={24} xs={24} style={{ display: "flex" }}>
              {aqualinkScenario && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ marginTop: "40px", display: "flex", width: "100%" }}
                >
                  <Row gutter={[25, 25]} justify="center">
                    <ScenarioCard
                      scenario={aqualinkScenario}
                      index={aqualinkIndex}
                      onDelete={handleDeleteScenario}
                      onApply={handleApplyScenario}
                      scenariosLength={scenarios.length}
                      selectedScenario={selectedScenario}
                      onSelect={handleSelectScenario}
                    />
                  </Row>
                </motion.div>
              )}
            </Col>
            <Col xl={16} lg={24} md={24} xs={24} style={{ display: "flex" }}>
              <AnimatePresence>
                {scenarios.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ marginTop: "40px", display: "flex", width: "100%" }}
                  >
                    <ChartsContainer scenarios={scenarios} />
                    
                  </motion.div>
                )}
              </AnimatePresence>
            </Col>
          </AnimatePresence>
        </Row>
        <Row gutter={[25, 25]} justify="center" style={{ marginTop: "40px" }}>
          <Col xl={24} lg={24} md={24} xs={24}>
           {aqualinkScenario && (
                      <AqualinkWeightChart aqualinkScenario={aqualinkScenario} />
                    )}
          </Col>
        </Row>
      </Main>
    </>
  )
}

export default PlanningStudioFarms