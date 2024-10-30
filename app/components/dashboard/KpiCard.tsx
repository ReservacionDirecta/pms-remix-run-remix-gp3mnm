import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

const kpiVariants = cva(
  "rounded-xl p-6 bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow",
  {
    variants: {
      trend: {
        up: "hover:border-success-500/20",
        down: "hover:border-error-500/20",
        neutral: "hover:border-primary-500/20",
      },
    },
    defaultVariants: {
      trend: "neutral",
    },
  }
);

interface KpiCardProps {
  icon: string;
  value: number;
  label: string;
  bgColor: string;
}

export function KpiCard({ icon, value, label, bgColor }: KpiCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 ${bgColor} rounded-full`}>
          <span className="text-xl">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-gray-600 text-sm">{label}</p>
      </div>
    </div>
  );
} 