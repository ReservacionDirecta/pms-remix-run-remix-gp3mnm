interface StatsCardProps {
  icon: string;
  value: number | string;
  label: string;
  sublabel?: string;
}

export function StatsCard({ icon, value, label, sublabel }: StatsCardProps) {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
      <div className="p-3 bg-gray-100 rounded-full">
        <span className="text-xl">{icon}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-2xl font-semibold">{value}</h3>
        <p className="text-gray-600">{label}</p>
        {sublabel && <p className="text-sm text-gray-500">{sublabel}</p>}
      </div>
    </div>
  );
} 