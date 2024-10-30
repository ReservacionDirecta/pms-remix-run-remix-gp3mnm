import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { KpiCard } from "~/components/dashboard/KpiCard";
import { SearchBox } from "~/components/dashboard/SearchBox";
import { OccupancyChart } from "~/components/dashboard/OccupancyChart";
import { RevenueChart } from "~/components/dashboard/RevenueChart";

export const loader: LoaderFunction = async () => {
  return {
    kpis: {
      nuevasReservas: 1,
      cancelaciones: 0,
      recordatorios: 0,
      checkIns: 0,
    },
    ocupacion: {
      data: [65, 70, 68, 72, 75, 71],
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    },
    ingresos: {
      data: [12000, 15000, 13000, 16000, 14000, 17000],
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    }
  };
};

export default function Dashboard() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Principal</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <KpiCard
          icon="📝"
          value={data.kpis.nuevasReservas}
          label="Nuevas reservas"
          bgColor="bg-blue-100"
        />
        <KpiCard
          icon="❌"
          value={data.kpis.cancelaciones}
          label="Cancelaciones"
          bgColor="bg-red-100"
        />
        <KpiCard
          icon="🔔"
          value={data.kpis.recordatorios}
          label="Recordatorios"
          bgColor="bg-yellow-100"
        />
        <KpiCard
          icon="✓"
          value={data.kpis.checkIns}
          label="Check-ins hoy"
          bgColor="bg-green-100"
        />
      </div>

      {/* Buscador */}
      <SearchBox />

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Ocupación</h3>
          <div className="h-[300px]">
            <OccupancyChart 
              data={data.ocupacion.data} 
              labels={data.ocupacion.labels}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Ingresos</h3>
          <div className="h-[300px]">
            <RevenueChart 
              data={data.ingresos.data} 
              labels={data.ingresos.labels}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 