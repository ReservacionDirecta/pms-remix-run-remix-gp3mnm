import { useState } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Input } from "~/components/ui/input";
import { Select } from "~/components/ui/select";
import { Button } from "~/components/ui/button";

interface Room {
  id: string;
  nombre: string;
  tipo: string;
  capacidad: number;
  tarifa: number;
  disponible: boolean;
}

interface LoaderData {
  habitaciones: Room[];
  tarifas: {
    [key: string]: number;
  };
}

export const loader: LoaderFunction = async () => {
  // Simular datos de la base de datos
  return {
    habitaciones: [
      {
        id: "1",
        nombre: "101",
        tipo: "Matrimonial",
        capacidad: 2,
        tarifa: 150,
        disponible: true,
      },
      {
        id: "2",
        nombre: "102",
        tipo: "Doble",
        capacidad: 2,
        tarifa: 120,
        disponible: true,
      },
      // ... más habitaciones
    ],
    tarifas: {
      "Matrimonial": 150,
      "Doble": 120,
      "Triple": 180,
    }
  };
};

export default function Reservar() {
  const { habitaciones, tarifas } = useLoaderData<LoaderData>();
  const [reservaData, setReservaData] = useState({
    checkIn: "",
    checkOut: "",
    adultos: 1,
    ninos: 0,
    habitacionId: "",
    tipoHabitacion: "",
    nombreHuesped: "",
    email: "",
    telefono: "",
    observaciones: "",
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Nueva Reserva</h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
        {/* Fechas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="date"
            label="Check-in"
            value={reservaData.checkIn}
            onChange={(e) => setReservaData({ ...reservaData, checkIn: e.target.value })}
          />
          <Input
            type="date"
            label="Check-out"
            value={reservaData.checkOut}
            onChange={(e) => setReservaData({ ...reservaData, checkOut: e.target.value })}
          />
        </div>

        {/* Huéspedes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Adultos"
            options={[1,2,3,4].map(n => ({ value: n.toString(), label: n.toString() }))}
            value={reservaData.adultos.toString()}
            onChange={(e) => setReservaData({ ...reservaData, adultos: Number(e.target.value) })}
          />
          <Select
            label="Niños"
            options={[0,1,2,3].map(n => ({ value: n.toString(), label: n.toString() }))}
            value={reservaData.ninos.toString()}
            onChange={(e) => setReservaData({ ...reservaData, ninos: Number(e.target.value) })}
          />
        </div>

        {/* Datos del huésped */}
        <div className="space-y-4">
          <Input
            label="Nombre completo"
            value={reservaData.nombreHuesped}
            onChange={(e) => setReservaData({ ...reservaData, nombreHuesped: e.target.value })}
          />
          <Input
            type="email"
            label="Email"
            value={reservaData.email}
            onChange={(e) => setReservaData({ ...reservaData, email: e.target.value })}
          />
          <Input
            type="tel"
            label="Teléfono"
            value={reservaData.telefono}
            onChange={(e) => setReservaData({ ...reservaData, telefono: e.target.value })}
          />
        </div>

        {/* Botones */}
        <div className="flex justify-end space-x-4">
          <Button variant="outline">
            Cancelar
          </Button>
          <Button>
            Crear Reserva
          </Button>
        </div>
      </div>
    </div>
  );
} 