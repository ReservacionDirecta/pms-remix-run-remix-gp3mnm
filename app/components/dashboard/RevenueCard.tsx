import { BarChart } from "~/components/charts";

interface RevenueCardProps {
  total: number;
  monthlyData: number[];
  labels: string[];
}

export function RevenueCard({ total, monthlyData, labels }: RevenueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Ingresos</h3>
        <span className="text-2xl font-bold text-green-600">
          S/. {total.toLocaleString()}
        </span>
      </div>
      <div className="h-64">
        <BarChart data={monthlyData} labels={labels} />
      </div>
    </div>
  );
} 