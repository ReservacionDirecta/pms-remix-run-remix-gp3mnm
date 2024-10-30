interface Room {
  id: string;
  nombre: string;
  tipo: string;
  capacidad: number;
  tarifa: number;
  disponible: boolean;
}

interface RoomSelectorProps {
  habitaciones: Room[];
  selectedId: string;
  onSelect: (habitacionId: string, tipo: string) => void;
}

export function RoomSelector({ habitaciones, selectedId, onSelect }: RoomSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {habitaciones.map((habitacion) => (
        <div
          key={habitacion.id}
          className={`p-4 rounded-lg border ${
            selectedId === habitacion.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200'
          } cursor-pointer`}
          onClick={() => onSelect(habitacion.id, habitacion.tipo)}
        >
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium">{habitacion.nombre}</h4>
              <p className="text-sm text-gray-600">{habitacion.tipo}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">S/. {habitacion.tarifa}</p>
              <p className="text-sm text-gray-600">por noche</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 