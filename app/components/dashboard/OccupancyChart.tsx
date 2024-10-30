import { ClientOnly } from "./ClientOnly";
import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface OccupancyChartProps {
  data: number[];
  labels: string[];
}

export function OccupancyChart({ data, labels }: OccupancyChartProps) {
  return (
    <ClientOnly>
      <ChartContent data={data} labels={labels} />
    </ClientOnly>
  );
}

function ChartContent({ data, labels }: OccupancyChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Ocupación',
        data,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value: number) => `${value}%`,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
} 