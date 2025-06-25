import { Row, Col, Typography, Card, Space } from "antd"
import moment from "moment"

const { Title, Text } = Typography

const LoteDetails = ({ selectedLote, fromSection = null }) => {
  function checkRange(value, range) {
    if (range === null || range === undefined) {
      return true; // Si no hay rango definido, no hay error
    }

    const [minRange, maxRange] = range.split(" - ").map(Number);

    if (minRange !== undefined && maxRange !== undefined) {
      return value >= minRange && value <= maxRange;
    }

    if (range.startsWith("<")) {
      return value < Number(range.slice(1).trim());
    }

    if (range.startsWith(">")) {
      return value > Number(range.slice(1).trim());
    }

    return true; // En caso de que no sea un rango numérico
  }

  function getDotColor(group) {
    if (!Array.isArray(group)) {
      return <span style={{ color: 'orange', fontSize: '20px' }}>●</span>; 
    }

    for (const test of group) {
      const value = Number(test.value); 
      const range = test.range;

      if (!checkRange(value, range)) {
        return <span style={{ color: 'orange', fontSize: '17px' }}>●Evaluated</span>;  
      }
    }

    return <span style={{ color: 'green', fontSize: '15px' }}>●Passed</span>
  }

  // Función para calcular promedios del farm sampling
  const calculateFarmSamplingAverages = () => {
    if (!selectedLote.sm_farmsampling?.farmSampling || !Array.isArray(selectedLote.sm_farmsampling.farmSampling)) {
      return { averageMetabisulfite: "N/A", averageTemperature: "N/A" };
    }

    const farmSampling = selectedLote.sm_farmsampling.farmSampling;
    
    // Filtrar valores válidos (no nulos, no undefined, y que sean números)
    const validMetabisulfite = farmSampling
      .map(sample => sample.mmbs)
      .filter(value => value !== null && value !== undefined && !isNaN(value));
    
    const validTemperature = farmSampling
      .map(sample => sample.temp)
      .filter(value => value !== null && value !== undefined && !isNaN(value));

    // Calcular promedios
    const averageMetabisulfite = validMetabisulfite.length > 0 
      ? (validMetabisulfite.reduce((sum, value) => sum + Number(value), 0) / validMetabisulfite.length).toFixed(2)
      : "N/A";

    const averageTemperature = validTemperature.length > 0 
      ? (validTemperature.reduce((sum, value) => sum + Number(value), 0) / validTemperature.length).toFixed(2)
      : "N/A";

    return { averageMetabisulfite, averageTemperature };
  };

  const { averageMetabisulfite, averageTemperature } = calculateFarmSamplingAverages();

  const fullSections = [
    {
      title: "HATCHERY",
      fields: [
        { label: "Hatchery", value: selectedLote.sm_bpartnerorgname },
        { label: "Hatchery HT Code", value: selectedLote.sm_bpartnerorgcode },
        { label: "Species", value: "litopenaeus vannamei" },
        { label: "Broodstock", value: selectedLote.sm_selectedLoteorgname },
        { label: "Broodstock HT Code", value: selectedLote.sm_selectedLoteorgcode },
        { label: "Nauplii Code", value: selectedLote.sm_naupliuscode },
        {
          label: "Planting Date",
          value: selectedLote.sm_selectedLoteplantingdate
            ? moment(selectedLote.sm_selectedLoteplantingdate).format("YYYY-MM-DD")
            : "N/A",
        },
        {
          label: "Harvest Date",
          value: selectedLote.sm_selectedLotefishingdate
            ? moment(selectedLote.sm_selectedLotefishingdate).format("YYYY-MM-DD")
            : "N/A",
        },
        { label: "Module #", value: selectedLote.sm_modulename },
        { label: "Tank#", value: selectedLote.sm_tankname },
        { label: "Density (u/m3)", value: selectedLote.sm_programmeddensity },
        { label: "Larva Weight", value: selectedLote.sm_targetbiomass },
      ],
    },
    {
      title: "FARMING METHOD",
      fields: [
        { label: "FARM Name", value: selectedLote.sm_farmname },
        { label: "Farm Code", value: selectedLote.sm_farmcode },
        { label: "Species", value: "litopenaeus vannamei" },
        { label: "Growing Protocol", value: selectedLote.sm_productionprotocol },
        { label: "Production Protocol", value: selectedLote.sm_productionprotocol },
        { label: "Water Managing System", value: selectedLote.sm_watersystem },
        { label: "Nursering Pond #", value: selectedLote.sm_prebreedingpoolname },
        {
          label: "Planting Date",
          value: selectedLote.sm_campaignplantingdate
            ? moment(selectedLote.sm_campaignplantingdate).format("YYYY-MM-DD")
            : "N/A",
        },
        { label: "Initial Nursering Density (u/m2)", value: selectedLote.SM_DensityPerHectare },
        { label: "Pre Growing Pond #", value: selectedLote.sm_prefatteningpond_name || "N/A" },
        {
          label: "Transfer Date",
          value: selectedLote.sm_plannedtransferdate1
            ? moment(selectedLote.sm_plannedtransferdate1).format("YYYY-MM-DD")
            : "N/A",
        },
        { label: "Initial Pre Growing Density (u/m2)", value: selectedLote.initialPreGrowingDensity || "N/A" },
        { label: "Growing Pond #", value: selectedLote.sm_transfer2warehousename },
        {
          label: "Transfer Date",
          value: selectedLote.sm_plannedtransferdate2
            ? moment(selectedLote.sm_plannedtransferdate2).format("YYYY-MM-DD")
            : "N/A",
        },
        { label: "Initial Growing Density (u/m2)", value: selectedLote.SM_DensityPerHectareFatten },
      ],
    },
    {
      title: "SPECIES HEALTH & WELLFARE",
      fields: [
        { label: "Source of Protein(1)", value: selectedLote.sm_feedingproductrsucode },
        { label: "Source of Protein(2)", value: selectedLote.feeding_product_rsu_code },
        { label: "Source of Protein(3)", value: selectedLote.feeding_product_rsu_code },
        { label: "Antibiotic Treatment", value: selectedLote.antibiotic_rsu_code },
        {
          label: "Initial Date",
          value: selectedLote.antibiotic_treatment_date
            ? moment(selectedLote.antibiotic_treatment_date).format("YYYY-MM-DD")
            : "N/A",
        },
        {
          label: "Ending Date",
          value:
            selectedLote.antibiotic_treatment_date && selectedLote.antibiotic_treatment_days
              ? calculateEndingDate(selectedLote.antibiotic_treatment_date, selectedLote.antibiotic_treatment_days)
              : "N/A",
        },
        { label: "Salinity (ppm)", value: selectedLote.salinity_ppm },
        { label: "Type of Water Source", value: selectedLote.water_source_type },
        { label: "Cycle Water Use (m3/Ha)", value: selectedLote.cycle_water_use },
        { label: "CO2 Footprint (KgCo2/Shrimp Kg)", value: selectedLote.co2_footprint },
      ],
      columns: 3,
    },
    {
      title: "FARM HARVEST",
      fields: [
        { label: "Harvest Weight", value: selectedLote.sm_confirmedbiomass },
        { label: "Harvest Type", value: selectedLote.sm_confirmedbiomass },
        {
          label: "Harvest Date",
          value: selectedLote.sm_confirmedfishingdate
            ? moment(selectedLote.sm_confirmedfishingdate).format("YYYY-MM-DD")
            : "N/A",
        },
        // Usar el promedio calculado de metabisulfito
        { 
          label: "Harvest Metabisulfite (avg)", 
          value: averageMetabisulfite !== "N/A" ? `${averageMetabisulfite} ppm` : "N/A"
        },
        { label: "Harvest Density (u/m2)", value: selectedLote.harvest_density },
        { label: "Harvest Time Lapse", value: selectedLote.harvest_time_lapse },
        // Usar el promedio calculado de temperatura
        { 
          label: "Harvest Process Temperature (avg ºC)", 
          value: averageTemperature !== "N/A" ? `${averageTemperature}°C` : "N/A"
        },
      ],
      columns: 3,
    },
    {
      title: "PROCESSOR",
      fields: [
        { label: "Processing Plant Name", value: selectedLote.sm_plantname },
        { label: "Processing Plant Code", value: selectedLote.sm_plantcode },
        { label: "Custody Transport Time Lapse", value: selectedLote.custody_transport_time },
        { label: "Custody Transport Temperature (ºC)", value: selectedLote.custody_transport_temperature },
        { label: "Origin-Product Form", value:"Farm Raised" },
        
        { label: "Plant Registry Temperature (ºC)", value: selectedLote.plant_registry_temperature },
      ],
      columns: 3,
    },
    {
      title: "QUALITY & WELLFARE",
      fields: [
        { label: "Cooking Test", value: getDotColor(selectedLote.test_coccion) },
        { label: "Organoleptic Test", value: getDotColor(selectedLote.organoleptico) },
        { label: "Sulphites Test", value: getDotColor(selectedLote.sulfitos) },
        { label: "Microbiological Test", value: getDotColor(selectedLote.microbiologicos) },
        { label: "Chemical Test", value: getDotColor(selectedLote.quimicos) },
      ],
      columns: 3,
    },
  ]

  const filteredSections = fromSection
    ? fullSections.slice(fullSections.findIndex((s) => s.title === fromSection))
    : fullSections.filter(
      (s) =>
        s.title !== "SPECIES HEALTH & WELLFARE" &&
        s.title !== "FARM HARVEST" &&
        s.title !== "PROCESSOR" &&
        s.title !== "QUALITY & WELLFARE",
    )

  const renderFields = (fields, cols) => {
    const span = Math.floor(24 / cols)
    return fields.map((field, index) => (
      <Col span={span} key={index} >
        <div className="field-container" style={{ display: "flex", justifyContent: "space-between" }}>
          <Text strong style={{ textAlign: "left", fontSize: "12px" }}>
            {field.label}:
          </Text>
          <Text style={{ textAlign: "right", marginLeft: 8, fontSize: "12px" }}>
            {field.value || "N/A"}
          </Text>
        </div>
      </Col>
    ))
  }

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}></div>

      {/* Regular sections */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "16px" }}>

        {filteredSections
          .filter(
            (section) =>
              section.title !== "FARM HARVEST" && section.title !== "PROCESSOR" && section.title !== "QUALITY & WELLFARE",
          )
          .map((section, index) => {
            const columns = section.columns || 2
            return (
              <Card
                key={index}
                title={
                  <Title level={5} style={{ margin: 0, color: "#1890ff" }}>
                    {section.title}
                  </Title>
                }
                bordered={true}
                style={{
                  borderRadius: 8,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
                }}
              >
                <Row gutter={[24, 0]} style={{ padding: "10px" }}>
                  {renderFields(section.fields, columns)}
                </Row>
              </Card>
            )
          })}
      </div>


      {/* Special sections in a single row */}
      {filteredSections.some(
        (section) =>
          section.title === "FARM HARVEST" || section.title === "PROCESSOR" || section.title === "QUALITY & WELLFARE",
      ) && (
          <Row gutter={16}>
            {["FARM HARVEST", "PROCESSOR", "QUALITY & WELLFARE"].map((sectionTitle) => {
              const section = filteredSections.find((s) => s.title === sectionTitle)
              if (!section) return null

              return (
                <Col span={8} key={sectionTitle}>
                  <Card
                    title={
                      <Title level={5} style={{ margin: 0, color: "#1890ff", fontSize: "14px" }}>
                        {section.title}
                      </Title>
                    }
                    bordered={true}
                    style={{
                      borderRadius: 8,
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
                      height: "100%",
                    }}
                  >
                    <Row gutter={[24, 0]} style={{ padding: "10px" }}>
                      {renderFields(section.fields, 1, true)}
                    </Row>
                  </Card>
                </Col>
              )
            })}
          </Row>
        )}
    </Space>
  )
}

const calculateEndingDate = (startDate, days) => {
  return moment(startDate).add(days, "days").format("YYYY-MM-DD")
}

export default LoteDetails