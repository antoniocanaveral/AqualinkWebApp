/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { Chart } from 'react-google-charts';

function GoogleBasicBarChart(props) {
  const { width, height, data, title, chartArea } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        hAxis: {
          title: 'Total',
          minValue: 0,
        },
        vAxis: {
          title: 'City',
        },
      }}

      rootProps={{ 'data-testid': '1' }}
    />
  );
}

GoogleBasicBarChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
};

function GoogleMaterialBarChart(props) {
  const { width, height, data, title, subtitle } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="Bar"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        chart: {
          title,
          subtitle,
        },
      }}

      rootProps={{ 'data-testid': '2' }}
    />
  );
}

GoogleMaterialBarChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

function GoogleStackedChart(props) {
  const { width, height, data, title, chartArea } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        isStacked: true,
        hAxis: {
          title: 'Total',
          minValue: 0,
        },
        vAxis: {
          title: 'City',
        },
      }}

      rootProps={{ 'data-testid': '3' }}
    />
  );
}

GoogleStackedChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
};

function GoogleCustomColorChart(props) {
  const { width, height, data, title, chartArea, colors } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        colors,
        hAxis: {
          title: 'Total',
          minValue: 0,
        },
        vAxis: {
          title: 'City',
        },
      }}

      rootProps={{ 'data-testid': '4' }}
    />
  );
}

GoogleCustomColorChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
};

function GoogleComboChart(props) {
  const { width, height, data, title, chartArea, colors } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="ComboChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        colors,
        seriesType: 'bars',
        series: { 5: { type: 'line' } },
      }}

      rootProps={{ 'data-testid': '5' }}
    />
  );
}

GoogleComboChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
};

function GoogleLineChart(props) {
  const { width, height, data } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Popularity',
        },
      }}

      rootProps={{ 'data-testid': '6' }}
    />
  );
}

GoogleLineChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

function GoogleMultiLineChart(props) {
  const { width, height, data } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          title: 'Popularity',
        },
        series: {
          0: { curveType: 'function' },
          1: { curveType: 'function' },
        },
      }}

      rootProps={{ 'data-testid': '7' }}
    />
  );
}

GoogleMultiLineChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

function GoogleOrgChart(props) {
  const { width, height, data, chartArea } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="OrgChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        chartArea: { width: chartArea },
        allowHtml: true,
      }}

      rootProps={{ 'data-testid': '8' }}
    />
  );
}

GoogleOrgChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  chartArea: PropTypes.string.isRequired,
};

function GoogleBasicPieChart(props) {
  const { width, height, data, chartArea, title } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
      }}

      rootProps={{ 'data-testid': '9' }}
    />
  );
}

GoogleBasicPieChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
};

function Google3dPieChart(props) {
  const { width, height, data, chartArea, title } = props;
  return (
    <Chart
      width={width}
      height={height}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        chartArea: { width: chartArea },
        is3D: true,
      }}

      rootProps={{ 'data-testid': '9' }}
    />
  );
}

Google3dPieChart.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  chartArea: PropTypes.string.isRequired,
};

export {
  Google3dPieChart,
  GoogleBasicPieChart,
  GoogleOrgChart,
  GoogleMultiLineChart,
  GoogleLineChart,
  GoogleComboChart,
  GoogleCustomColorChart,
  GoogleStackedChart,
  GoogleMaterialBarChart,
  GoogleBasicBarChart,
};
