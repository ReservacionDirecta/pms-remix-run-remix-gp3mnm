import type { MetaFunction } from "@remix-run/node";
import { Sidebar } from "~/components/layout/Sidebar";
import { StatsCard } from "~/components/dashboard/StatsCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard - Hotel Peña Linda" },
    { name: "description", content: "Panel de control del hotel" },
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-8">Principal</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon="📝"
            value={1}
            label="Nuevas"
            sublabel="reservas"
          />
          <StatsCard
            icon="❌"
            value={0}
            label="Nuevas"
            sublabel="cancelaciones"
          />
          <StatsCard
            icon="🔔"
            value={0}
            label="Recordatorios"
          />
          <StatsCard
            icon="✓"
            value={0}
            label="Check-ins"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            icon="🚪"
            value={2}
            label="Check-outs"
          />
          <StatsCard
            icon="📊"
            value="31%"
            label="Ocupación"
          />
          <StatsCard
            icon="🏠"
            value={18}
            label="Habitaciones"
            sublabel="incluidas"
          />
        </div>
      </main>
    </div>
  );
}
