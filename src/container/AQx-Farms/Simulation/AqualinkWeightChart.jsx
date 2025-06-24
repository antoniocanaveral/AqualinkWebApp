/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Cards } from '../../../components/cards/frame/cards-frame';

const AqualinkWeightChart = ({ aqualinkScenario }) => {
  // Si no hay escenario Aqualink, no renderizar nada
  if (!aqualinkScenario || !aqualinkScenario.simulation_data) {
    return null;
  }

  const { simulation_data, inputs } = aqualinkScenario;
  const { actual_weights, adjusted_weights } = simulation_data;
  const { estimated_weight, days_to_harvest } = inputs;

  // Generar los datos para el eje X (días)
  const days = useMemo(() => {
    const maxDays = Math.max(
      actual_weights?.length || 0,
      adjusted_weights?.length || 0,
      days_to_harvest || 0
    );
    console.log('maxDays:', maxDays, 'days_to_harvest:', days_to_harvest); // Depuración
    return Array.from({ length: maxDays }, (_, i) => i + 1);
  }, [actual_weights, adjusted_weights, days_to_harvest]);

  // Preparar las series para el gráfico
  const series = useMemo(() => {
    const seriesData = [
      {
        name: 'Pesos Reales',
        type: 'line',
        data: actual_weights?.map((weight, index) => ({ x: index + 1, y: weight })) || [],
        color: '#4B0082',
      },
      {
        name: 'Peso Objetivo',
        type: 'line',
        data: days.map((day) => ({ x: day, y: estimated_weight || 0 })),
        color: '#FF4500',
        dashArray: 5,
      },
    ];

    // Agregar adjusted_weights si no es null
    if (adjusted_weights && adjusted_weights.length > 0) {
      seriesData.push({
        name: 'Pesos Ajustados',
        type: 'line',
        data: adjusted_weights.map((weight, index) => ({ x: index + 1, y: weight })),
        color: '#00BFFF',
      });
    }

    return seriesData;
  }, [actual_weights, adjusted_weights, estimated_weight, days]);

  // Calcular el máximo valor en Y para el eje
  const maxY = useMemo(() => {
    const allWeights = [
      ...(actual_weights || []),
      ...(adjusted_weights || []),
      estimated_weight || 0,
    ].filter(val => typeof val === 'number' && !isNaN(val));
    return allWeights.length > 0 ? Math.ceil(Math.max(...allWeights) * 1.1) : 20; // Margen del 10%
  }, [actual_weights, adjusted_weights, estimated_weight]);

  // Configuración del gráfico
  const chartOptions = {
    series,
    chart: {
      height: 350,
      type: 'line',
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: [2, 2, 2],
      curve: 'straight',
      dashArray: [0, 5, 0],
    },
    markers: {
      size: [4, 0, 4],
      colors: ['#4B0082', '#FF4500', '#00BFFF'],
      strokeWidth: 2,
      strokeColors: ['#fff'],
      hover: { size: 6 },
    },
    xaxis: {
      type: 'numeric',
      min: 1,
      max: days.length,
      title: { text: 'Días' },
      labels: {
        formatter: val => {
          const roundedVal = Math.round(val);
          return (roundedVal % 5 === 0 || roundedVal === days_to_harvest) ? roundedVal.toString() : '';
        }, // Mostrar múltiplos de 5 y el día de cosecha
      },
    },
    yaxis: {
      title: { text: 'Peso (g)', style: { color: '#4B0082' } },
      labels: {
        style: { color: '#4B0082' },
        formatter: val => Math.round(val).toString(), // Redondear a entero
      },
      axisBorder: { show: true, color: '#4B0082' },
      axisTicks: { show: true, color: '#4B0082' },
      min: 0,
      max: maxY,
      tickAmount: Math.floor(maxY / 4), // Aproximadamente un tick cada 4 unidades
    },
    annotations: {
      xaxis: [
        {
          // CORRECCIÓN: Usar el valor directamente, no el índice
          x: days_to_harvest,
          borderColor: '#67c800',
          label: {
            text: `Día de Cosecha (${days_to_harvest})`,
            style: { color: '#FFFFFF', background: '#67c800' },
            offsetY: -5,
          },
        },
      ],
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
    tooltip: {
      shared: true,
      y: {
        formatter: val => `${val.toFixed(2)} g`, // Mantener 2 decimales en el tooltip
      },
      x: {
        formatter: val => Math.round(val).toString(), // Mostrar días enteros en el tooltip
      },
    },
  };

  return (
    <Cards title="Punto Optimizado de Cosecha" size="large">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        height={450}
      />
    </Cards>
  );
};

export default AqualinkWeightChart;