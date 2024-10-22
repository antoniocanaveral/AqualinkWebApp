import React from 'react';
import { Link } from 'react-router-dom';
import UilPrint from '@iconscout/react-unicons/icons/uil-print';
import UilBookOpen from '@iconscout/react-unicons/icons/uil-book-open';
import UilFileAlt from '@iconscout/react-unicons/icons/uil-file-alt';
import UilFile from '@iconscout/react-unicons/icons/uil-file';
import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import Chart from 'react-apexcharts';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { PerfomanceOverviewStyle } from './Style';
import { BorderLessHeading } from '../../../styled';

// Data based on provided percentages
const labels = ['Balanceado', 'Artemia', 'Algas', 'Ácidos Orgánicos', 'Bacterias', 'Vitaminas'];
const dataSets = {
  series: [58, 17, 11, 4, 7, 3],
  options: {
    chart: {
      width: '100%',
      height: '100%',
      type: 'radialBar',
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#0372CE', '#00AAFF', '#FA8B0C', '#00C49A', '#FF4560', '#775DD0'],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '28%',
        },
        track: {
          show: true,
          margin: 11,
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: 20,
          },
          value: {
            fontSize: '24px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 600,
            offsetY: -21,
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '16px',
            fontFamily: '"Jost", sans-serif',
            fontWeight: 400,
            color: '#404040',
            formatter() {
              return '100%';
            },
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    labels,
  },
};

const CostProjectionChartLab = React.memo(() => {
  const moreContent = (
    <>
      <Link to="#">
        <UilPrint />
        <span>Printer</span>
      </Link>
      <Link to="#">
        <UilBookOpen />
        <span>PDF</span>
      </Link>
      <Link to="#">
        <UilFileAlt />
        <span>Google Sheets</span>
      </Link>
      <Link to="#">
        <UilTimes />
        <span>Excel (XLSX)</span>
      </Link>
      <Link to="#">
        <UilFile />
        <span>CSV</span>
      </Link>
    </>
  );

  return (
    <BorderLessHeading>
      <Cards more={moreContent} title="Distribución de Insumos" size="large">
        <PerfomanceOverviewStyle className="ninjadash-chartpoint-vertical">
          <Chart options={dataSets.options} series={dataSets.series} type="radialBar" width={320} />
          <div className="ninjadash-chartpoint">
            {dataSets.series.map((value, index) => (
              <div className="ninjadash-chartpoint__item" key={index}>
                <span
                  className="ninjadash-chartpoint__tika"
                  style={{
                    backgroundColor: dataSets.options.colors[index],
                  }}
                />
                <span className="ninjadash-chartpoint__label">{labels[index]}</span>
              </div>
            ))}
          </div>
        </PerfomanceOverviewStyle>
      </Cards>
    </BorderLessHeading>
  );
});

export default CostProjectionChartLab;
