import { ClientOnly } from "./ClientOnly";
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface RevenueChartProps {
  data: number[];
  labels: string[];
}

export function RevenueChart({ data, labels }: RevenueChartProps) {
  return (
    <ClientOnly>
      <ChartContent data={data} labels={labels} />
    </ClientOnly>
  );
}

function ChartContent({ data, labels }: RevenueChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Ingresos',
        data,
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
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
        ticks: {
          callback: (value: number) => `S/. ${value}`,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
} 