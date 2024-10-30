import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

interface Reserva {
  id: string;
  huesped: string;
  checkIn: string;
  checkOut: string;
  estado: string;
  habitacion: string;
  monto: number;
}

export const loader: LoaderFunction = async () => {
  // Cargar reservas desde Supabase
  return { reservas: [] };
};

export default function ReservasPage() {
  const { reservas } = useLoaderData<{ reservas: Reserva[] }>();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Reservas</h1>
      {/* Tabla de reservas */}
    </div>
  );
} 