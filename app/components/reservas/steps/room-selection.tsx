interface Room {
  id: string;
  type: string;
  description: string;
  capacity: {
    adults: number;
    children: number;
  };
  amenities: string[];
  price: number;
  images: string[];
  available: number;
}

interface RoomSelectionProps {
  selectedRoom?: string;
  onSelect: (roomId: string) => void;
  guests: {
    adults: number;
    children: number;
  };
}

export function RoomSelection({ selectedRoom, onSelect, guests }: RoomSelectionProps) {
  // Simulación de datos de habitaciones
  const rooms: Room[] = [
    {
      id: "single",
      type: "Habitación Individual",
      description: "Perfecta para viajeros solitarios, con todas las comodidades necesarias.",
      capacity: { adults: 1, children: 0 },
      amenities: ["TV LCD", "WiFi", "Baño privado", "Aire acondicionado"],
      price: 150,
      images: ["/images/rooms/single.jpg"],
      available: 5
    },
    {
      id: "double",
      type: "Habitación Doble",
      description: "Espaciosa habitación con cama matrimonial o dos camas individuales.",
      capacity: { adults: 2, children: 1 },
      amenities: ["TV LCD", "WiFi", "Baño privado", "Aire acondicionado", "Minibar"],
      price: 250,
      images: ["/images/rooms/double.jpg"],
      available: 3
    },
    {
      id: "suite",
      type: "Suite Familiar",
      description: "Amplia suite con sala de estar y perfecta para familias.",
      capacity: { adults: 2, children: 2 },
      amenities: ["TV LCD", "WiFi", "Baño privado", "Aire acondicionado", "Minibar", "Sala de estar", "Vista al mar"],
      price: 350,
      images: ["/images/rooms/suite.jpg"],
      available: 2
    },
  ];

  // Filtrar habitaciones según capacidad
  const availableRooms = rooms.filter(room => 
    room.capacity.adults >= guests.adults && 
    room.capacity.children >= guests.children &&
    room.available > 0
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {availableRooms.map((room) => (
          <div
            key={room.id}
            className={`
              relative 
              rounded-lg 
              border-2 
              p-6 
              cursor-pointer 
              transition-all
              ${
                selectedRoom === room.id
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-200'
              }
            `}
            onClick={() => onSelect(room.id)}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Imagen de la habitación */}
              <div className="w-full md:w-1/3">
                <div className="aspect-video rounded-lg bg-gray-200 dark:bg-gray-700">
                  {/* Aquí iría la imagen */}
                </div>
              </div>

              {/* Información de la habitación */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{room.type}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {room.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">S/. {room.price}</p>
                    <p className="text-sm text-gray-500">por noche</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Servicios incluidos</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capacidad y disponibilidad */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <span className="text-sm">👤 {room.capacity.adults}</span>
                      {room.capacity.children > 0 && (
                        <span className="text-sm ml-2">👶 {room.capacity.children}</span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">
                      {room.available} disponibles
                    </span>
                  </div>
                  
                  {selectedRoom === room.id && (
                    <span className="text-primary-600 text-sm font-medium">
                      ✓ Seleccionada
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {availableRooms.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            No hay habitaciones disponibles para el número de huéspedes seleccionado.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            Por favor, modifica el número de huéspedes o las fechas de tu estancia.
          </p>
        </div>
      )}
    </div>
  );
} 