import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

interface Pago {
  id: string;
  reservaId: string;
  monto: number;
  fecha: string;
  estado: 'completado' | 'pendiente' | 'fallido';
  metodoPago: 'tarjeta' | 'efectivo' | 'transferencia';
  huesped: string;
}

export const loader: LoaderFunction = async () => {
  // Cargar pagos desde Supabase
  return { pagos: [] };
};

export default function PagosPage() {
  const { pagos } = useLoaderData<{ pagos: Pago[] }>();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gestión de Pagos</h1>
      
      {/* Resumen de Pagos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Pagos del Día</h3>
          <p className="text-2xl font-bold">S/. 0.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Pagos Pendientes</h3>
          <p className="text-2xl font-bold text-orange-500">S/. 0.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 mb-2">Total Mensual</h3>
          <p className="text-2xl font-bold text-green-500">S/. 0.00</p>
        </div>
      </div>

      {/* Tabla de Pagos */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reserva
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Huésped
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Método
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pagos.map((pago) => (
              <tr key={pago.id}>
                <td className="px-6 py-4 whitespace-nowrap">{pago.reservaId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pago.huesped}</td>
                <td className="px-6 py-4 whitespace-nowrap">S/. {pago.monto}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    pago.estado === 'completado' ? 'bg-green-100 text-green-800' :
                    pago.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {pago.estado}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{pago.metodoPago}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pago.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 