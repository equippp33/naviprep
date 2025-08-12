'use client';

import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type Props = {
  data: number[]; // 7 values
};

const labels = [
  "Professionalism",
  "Attitude",
  "Creativity",
  "Communication",
  "Leadership",
  "Teamwork",
  "Sociability",
];

export function RadarChart({ data }: Props) {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'AI Video Score',
        data,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, min: 0, max: 5, stepSize: 1 },
    },
    responsive: true,
    plugins: { legend: { display: false } },
  };

  return <Radar data={chartData} options={options} />;
}

export default RadarChart;