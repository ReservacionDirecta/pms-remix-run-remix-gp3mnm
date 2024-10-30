import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { LineChart, BarChart } from "~/components/charts";

interface EstadisticasData {
  ocupacion: {
    porcentaje: number;
    tendencia: number[];
  };
  ingresos: {
    total: number;
    porMes: number[];
  };
  reservas: {
    total: number;
    canceladas: number;
    confirmadas: number;
  };
  habitaciones: {
    disponibles: number;
    ocupadas: number;
    mantenimiento: number;
  };
}

export const loader: LoaderFunction = async () => {
  // Simular datos para desarrollo
  return { 
    estadisticas: {
      ocupacion: { 
        porcentaje: 65, 
        tendencia: [60, 65, 70, 65, 60, 65] 
      },
      ingresos: { 
        total: 15000, 
        porMes: [12000, 13000, 15000, 14000, 15000, 15000] 
      },
      reservas: { 
        total: 150, 
        canceladas: 10, 
        confirmadas: 140 
      },
      habitaciones: { 
        disponibles: 10, 
        ocupadas: 8, 
        mantenimiento: 2 
      }
    } 
  };
};

export default function EstadisticasPage() {
  const { estadisticas } = useLoaderData<{ estadisticas: EstadisticasData }>();
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Estadísticas</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Ocupación</h3>
          <p className="text-2xl font-bold">{estadisticas.ocupacion.porcentaje}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Ingresos Totales</h3>
          <p className="text-2xl font-bold">
            S/. {estadisticas.ingresos.total.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Reservas Totales</h3>
          <p className="text-2xl font-bold">{estadisticas.reservas.total}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Habitaciones Disponibles</h3>
          <p className="text-2xl font-bold">{estadisticas.habitaciones.disponibles}</p>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Tendencia de Ocupación</h3>
          <LineChart 
            data={estadisticas.ocupacion.tendencia}
            labels={meses}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Ingresos Mensuales</h3>
          <BarChart 
            data={estadisticas.ingresos.porMes}
            labels={meses}
          />
        </div>
      </div>

      {/* Métricas Adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Estado de Reservas</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Confirmadas</span>
              <span className="font-semibold text-green-500">
                {estadisticas.reservas.confirmadas}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Canceladas</span>
              <span className="font-semibold text-red-500">
                {estadisticas.reservas.canceladas}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Estado de Habitaciones</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Ocupadas</span>
              <span className="font-semibold">
                {estadisticas.habitaciones.ocupadas}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>En Mantenimiento</span>
              <span className="font-semibold text-orange-500">
                {estadisticas.habitaciones.mantenimiento}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 