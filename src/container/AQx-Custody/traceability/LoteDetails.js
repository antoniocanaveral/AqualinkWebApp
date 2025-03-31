import React from 'react';
import { Row, Col, Typography } from 'antd';
import moment from 'moment';

const { Title, Text } = Typography;

const LoteDetails = ({ selectedLote , fromSection = null }) => {
  console.log(selectedLote)
  const fullSections = [
    {
      title: 'HATCHERY',
      fields: [
        { label: 'Hatchery', value: selectedLote.bp_org_name },
        { label: 'Hatchery HT Code', value: selectedLote.bp_org_value },
        { label: 'Broodstock', value: selectedLote.lote_org_name },
        { label: 'Broodstock HT Code', value: selectedLote.lote_org_value },
        { label: 'Nauplii Code', value: selectedLote.sm_naupliuscode },
        { label: 'Planting Date', value: selectedLote.lote_plantingdate ? moment(selectedLote.lote_plantingdate).format('YYYY-MM-DD') : 'N/A' },
        { label: 'Harvest Date', value: selectedLote.SM_FishingDate ? moment(selectedLote.SM_FishingDate).format('YYYY-MM-DD') : 'N/A' },
        { label: 'Module #', value: selectedLote.module_name },
        { label: 'Tank#', value: selectedLote.tank_name },
        { label: 'Density (u/m3)', value: selectedLote.sm_programmeddensity }
      ]
    },
    {
      title: 'FARMING METHOD',
      fields: [
        { label: 'FARM Name', value: selectedLote.organization_name },
        { label: 'Farm Code', value: selectedLote.farm_code },
        { label: 'Growing Protocol', value: selectedLote.sm_protocolharvest },
        { label: 'Production Protocol', value: selectedLote.sm_productionprotocol },
        { label: 'Water Managing System', value: selectedLote.water_system },
        { label: 'Nursering Pond #', value: selectedLote.sm_prebreedingpool_name },
        { label: 'Planting Date', value: selectedLote.campaign_plantingdate ? moment(selectedLote.campaign_plantingdate).format('YYYY-MM-DD') : 'N/A' },
        { label: 'Initial Nursering Density (u/m2)', value: selectedLote.sm_densityperhectare },
        { label: 'Pre Growing Pond #', value: selectedLote.sm_prefatteningpond_name },
        { label: 'Transfer Date', value: selectedLote.sm_plannedtransferdate1 ? moment(selectedLote.sm_plannedtransferdate1).format('YYYY-MM-DD') : 'N/A' },
        { label: 'Initial Pre Growing Density (u/m2)', value: selectedLote.initialPreGrowingDensity },
        { label: 'Growing Pond #', value: selectedLote.sm_transfer2_warehouse_name },
        { label: 'Transfer Date', value: selectedLote.sm_plannedtransferdate2 ? moment(selectedLote.sm_plannedtransferdate2).format('YYYY-MM-DD') : 'N/A' },
        { label: 'Initial Growing Density (u/m2)', value: selectedLote.sm_densityperhectarefatten }
      ]
    },
    {
      title: 'SPECIES HEALTH & WELLFARE',
      fields: [
        { label: 'Source of Protein(1)', value: selectedLote.feeding_product_rsu_code },
        { label: 'Source of Protein(2)', value: selectedLote.feeding_product_rsu_code },
        { label: 'Source of Protein(3)', value: selectedLote.feeding_product_rsu_code },

        { label: 'Antibiotic Treatment', value: selectedLote.antibiotic_rsu_code },
        { label: 'Initial Date', value: selectedLote.antibiotic_treatment_date ? moment(selectedLote.antibiotic_treatment_date).format('YYYY-MM-DD') : 'N/A' },
        { label: 'Ending Date', value: selectedLote.antibiotic_treatment_date && selectedLote.antibiotic_treatment_days ? calculateEndingDate(selectedLote.antibiotic_treatment_date, selectedLote.antibiotic_treatment_days) : 'N/A' },


        { label: 'Salinity (ppm)', value: selectedLote.salinity_ppm },
        { label: 'Type of Water Source', value: selectedLote.water_source_type },
        { label: 'Cycle Water Use (m3/Ha)', value: selectedLote.cycle_water_use },
        { label: 'CO2 Footprint (KgCo2/Shrimp Kg)', value: selectedLote.co2_footprint }
      ],
      columns: 3,
    },
    {
      title: 'FARM HARVEST',
      fields: [
        { label: 'Harvest Type', value: selectedLote.harvest_type },
        { label: 'Harvest Date', value: selectedLote.harvest_date ? moment(selectedLote.harvest_date).format('YYYY-MM-DD') : 'N/A' },
        { label: 'Harvest Density (u/m2)', value: selectedLote.harvest_density },
        { label: 'Harvest Time Lapse', value: selectedLote.harvest_time_lapse },
        { label: 'Harvest Process Temperature (ºC)', value: selectedLote.harvest_temperature }
      ],
      columns: 3,
    },
    {
      title: 'PROCESSOR',
      fields: [
        { label: 'Processing Plant Name', value: selectedLote.custody_transport_time },
        { label: 'Processing Plant Code', value: selectedLote.custody_transport_time },
        { label: 'Custody Transport Time Lapse', value: selectedLote.custody_transport_time },
        { label: 'Custody Transport Temperature (ºC)', value: selectedLote.custody_transport_temperature },
        { label: 'Plant Registry Temperature (ºC)', value: selectedLote.plant_registry_temperature }
      ],
      columns: 3,
    },
    {
      title: 'QUALITY & WELLFARE',
      fields: [
        { label: 'Cooking Test', value: selectedLote.quality_test },
        { label: 'Organoleptic Test', value: selectedLote.organoleptic_test },
        { label: 'Sulphites Test', value: selectedLote.sulphites_test },
        { label: 'Microbiological Test', value: selectedLote.microbiological_test },
        { label: 'Chemical Test', value: selectedLote.chemical_test }
      ],
      columns: 3,
    }
  ];

  const filteredSections = fromSection
  ? fullSections.slice(fullSections.findIndex(s => s.title === fromSection))
  : fullSections.filter(s => s.title !== 'SPECIES HEALTH & WELLFARE' && s.title !== 'FARM HARVEST' && s.title !== 'PROCESSOR' && s.title !== 'QUALITY & WELLFARE');


  const renderFields = (fields, cols) => {
    const span = Math.floor(24 / cols);
    return fields.map((field, index) => (
      <Col span={span} key={index}>
        <Text>
          <strong>{field.label}:</strong> {field.value || 'N/A'}
        </Text>
      </Col>
    ));
  };

  return (
    <div>
      {filteredSections.map((section, index) => {
        const columns = section.columns || 2;
        return (
          <div key={index}>
            <br />
            <Title level={4}>{section.title}</Title>
            <Row gutter={16}>
              {renderFields(section.fields, columns)}
            </Row>
          </div>
        );
      })}
    </div>
  );
};

const calculateEndingDate = (startDate, days) => {
  return moment(startDate).add(days, 'days').format('YYYY-MM-DD');
};

export default LoteDetails;
