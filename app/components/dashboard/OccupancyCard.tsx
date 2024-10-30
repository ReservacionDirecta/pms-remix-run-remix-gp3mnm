import { LineChart } from "~/components/charts";

interface OccupancyCardProps {
  percentage: number;
  trend: number[];
  labels: string[];
}

export function OccupancyCard({ percentage, trend, labels }: OccupancyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Ocupación</h3>
        <span className="text-2xl font-bold text-blue-600">{percentage}%</span>
      </div>
      <div className="h-64">
        <LineChart data={trend} labels={labels} />
      </div>
    </div>
  );
} 