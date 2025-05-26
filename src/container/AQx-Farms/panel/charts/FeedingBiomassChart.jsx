import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import FeedingBiomassTable from './FeedingBiomassTable';

const FeedingBiomassChart = ({ selectedBatch, feedingreports }) => {
  const [data, setData] = useState({
    weeks: Array.from({ length: 16 }, (_, i) => `SEM ${i + 1}`),
    alimentacionProyectada: Array(16).fill(0),
    alimentacionReal: Array(16).fill(0),
    tendenciaAlimentacion: Array(16).fill(0),
    biomasaProyectada: Array(16).fill(0),
    biomasaReal: Array(16).fill(0),
    tendenciaBiomasa: Array(16).fill(0),
    fcaProyectadoTable: Array(16).fill(0),
    fcaRealTable: Array(16).fill(0),
  });
  const [lastRecordedWeek, setLastRecordedWeek] = useState('SEM 12');

  const calculateLinearRegression = (xData, yData) => {
    if (xData.length < 2) return { m: 0, b: 0, trend: Array(xData.length).fill(0) };
    const n = xData.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    for (let i = 0; i < n; i++) {
      sumX += xData[i];
      sumY += yData[i];
      sumXY += xData[i] * yData[i];
      sumXX += xData[i] * xData[i];
    }
    const denom = n * sumXX - sumX * sumX;
    if (denom === 0) {
      const avg = sumY / n;
      return { m: 0, b: avg, trend: Array(n).fill(avg) };
    }
    const m = (n * sumXY - sumX * sumY) / denom;
    const b = (sumY - m * sumX) / n;
    return { m, b, trend: xData.map(x => m * x + b) };
  };

  useEffect(() => {
    if (!selectedBatch || !feedingreports?.length) {
      setLastRecordedWeek('SEM 12');
      return setData(d => ({ ...d }));
    }
    const report = feedingreports.find(r => r.SM_Batch === selectedBatch);
    if (!report) return setLastRecordedWeek('SEM 12');

    const proj = report.feedingdata_projectedjson || [];
    const real = report.feedingdata_realjson || [];

    const nd = {
      weeks: Array.from({ length: 16 }, (_, i) => `SEM ${i + 1}`),
      alimentacionProyectada: Array(16).fill(0),
      alimentacionReal: Array(16).fill(0),
      tendenciaAlimentacion: Array(16).fill(0),
      biomasaProyectada: Array(16).fill(0),
      biomasaReal: Array(16).fill(0),
      tendenciaBiomasa: Array(16).fill(0),
      fcaProyectadoTable: Array(16).fill(0),
      fcaRealTable: Array(16).fill(0),
    };

    const foodData = [], biomassData = [], weeksForLR = [];

    for (let wi = 0; wi < 16; wi++) {
      const target = (wi + 1) * 7;
      const minDay = Math.max(1, target - 2);

      const p = proj
        .filter(i => i.sm_index >= minDay && i.sm_index <= target)
        .sort((a, b) => b.sm_index - a.sm_index)[0];
      if (p) {
        nd.alimentacionProyectada[wi] = Number(p.sm_accumulatedfood || 0).toFixed(2);
        nd.biomasaProyectada[wi]      = Number(p.sm_biomasskgs || 0).toFixed(2);
        nd.fcaProyectadoTable[wi]    = Number(p.sm_fca || 0).toFixed(2);
      }

      const r = real
        .filter(i => i.sm_index >= minDay && i.sm_index <= target)
        .sort((a, b) => b.sm_index - a.sm_index)[0];
      if (r) {
        const rf = Number(r.sm_accumulatedfoodreal || 0);
        const rb = Number(r.biomasa || 0);
        nd.alimentacionReal[wi] = rf.toFixed(2);
        nd.biomasaReal[wi]      = rb.toFixed(2);
        nd.fcaRealTable[wi]     = Number(r.sm_fcareal || 0).toFixed(2);
        if (rf > 0 || rb > 0) {
          foodData.push(rf);
          biomassData.push(rb);
          weeksForLR.push(wi + 1);
        }
      }
    }

    const { trend: ft } = calculateLinearRegression(weeksForLR, foodData);
    const { trend: bt } = calculateLinearRegression(weeksForLR, biomassData);

    for (let i = 0; i < 16; i++) {
      const idx = weeksForLR.indexOf(i + 1);
      if (idx !== -1) {
        nd.tendenciaAlimentacion[i] = ft[idx].toFixed(2);
        nd.tendenciaBiomasa[i]     = bt[idx].toFixed(2);
      } else {
        const { m: mf, b: bf } = calculateLinearRegression(weeksForLR, foodData);
        const { m: mb, b: bb } = calculateLinearRegression(weeksForLR, biomassData);
        nd.tendenciaAlimentacion[i] = Math.max(0, mf * (i + 1) + bf).toFixed(2);
        nd.tendenciaBiomasa[i]     = Math.max(0, mb * (i + 1) + bb).toFixed(2);
      }
    }

    const all = [...proj, ...real];
    const latest = all.length ? Math.max(...all.map(i => i.sm_index || 0)) : 0;
    const lw = Math.min(15, Math.floor(latest / 7));
    setLastRecordedWeek(`SEM ${lw + 1}`);
    setData(nd);
  }, [selectedBatch, feedingreports]);

  const maxAl = Math.max(
    ...data.alimentacionProyectada.map(Number),
    ...data.alimentacionReal.map(Number)
  );

  const maxAlRounded = Math.ceil(maxAl / 100) * 100;

  const chartOptions = {
    series: [
      {
        name: 'Alimentación Proyectada',
        type: 'column',
        data: data.alimentacionProyectada.map(Number),
        color: '#0372ce'
      },
      {
        name: 'Alimentación Real',
        type: 'line',
        data: data.alimentacionReal.map(Number),
        color: '#4B0082'
      },
      {
        name: 'Tendencia Alimentación',
        type: 'line',
        data: data.tendenciaAlimentacion.map(Number),
        dashArray: 5,
        color: '#00BFFF'
      },
      {
        name: 'Biomasa Proyectada',
        type: 'line',
        data: data.biomasaProyectada.map(Number),
        color: '#FF4500'
      },
      {
        name: 'Biomasa Real',
        type: 'line',
        data: data.biomasaReal.map(Number),
        color: '#67c800'
      },
      {
        name: 'Tendencia Biomasa',
        type: 'line',
        data: data.tendenciaBiomasa.map(Number),
        dashArray: 5,
        color: '#00b8b8'
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      width: [1, 2, 2, 2, 2, 2],
      curve: ['straight', 'straight', 'smooth', 'straight', 'straight', 'smooth'],
      dashArray: [0, 0, 5, 0, 0, 5]
    },
    markers: {
      size: [0, 4, 0, 4, 4, 0],
      colors: [undefined, '#4B0082', undefined, '#FF4500', '#67c800', undefined],
      strokeWidth: 2,
      strokeColors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
      hover: {
        size: 6
      }
    },
    xaxis: {
      categories: data.weeks,
      title: { text: 'Semanas' }
    },
    yaxis: [
      {
        seriesName: [
          'Alimentación Proyectada',
          'Alimentación Real',
          'Tendencia Alimentación'
        ],
        title: { text: 'Alimento Acumulado (Kg)', style: { color: '#1E90FF' } },
        labels: { style: { color: '#1E90FF' } },
        axisBorder: { show: true, color: '#1E90FF' },
        axisTicks: { show: true, color: '#1E90FF' },
        min: 0,
        max: maxAlRounded === 0 ? 100 : maxAlRounded,
        tickAmount: maxAlRounded === 0 ? 1 : maxAlRounded / 100
      },
      {
        seriesName: [
          'Biomasa Proyectada',
          'Biomasa Real',
          'Tendencia Biomasa'
        ],
        opposite: true,
        title: { text: 'Biomasa Acumulada (Kg)', style: { color: '#FF8C00' } },
        labels: { style: { color: '#FF8C00' } },
        axisBorder: { show: true, color: '#FF8C00' },
        axisTicks: { show: true, color: '#FF8C00' },
        min: 0,
        max: maxAlRounded === 0 ? 100 : maxAlRounded,
        tickAmount: maxAlRounded === 0 ? 1 : maxAlRounded / 100
      }
    ],
    annotations: {
      xaxis: [
        {
          x: lastRecordedWeek,
          borderColor: '#FF69B4',
          label: {
            text: 'Último Registro',
            style: { color: '#FFFFFF', background: '#FF69B4' }
          }
        }
      ]
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40
    },
    tooltip: { shared: true }
  };

  return (
    <Cards title="Alimentación y Biomasa" size="large">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={450}
      />
      <FeedingBiomassTable
        weeks={data.weeks}
        fcaRealTable={data.fcaRealTable}
        fcaProyectadoTable={data.fcaProyectadoTable}
      />
    </Cards>
  );
};

export default FeedingBiomassChart;