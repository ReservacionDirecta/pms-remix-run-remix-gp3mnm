interface Habitacion {
  id: string;
  numero: string;
  tipo: string;
  estado: 'disponible' | 'ocupada' | 'mantenimiento';
  capacidad: number;
  tarifa: number;
}

export default function HabitacionesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gestión de Habitaciones</h1>
      {/* Grid de habitaciones */}
    </div>
  );
} 