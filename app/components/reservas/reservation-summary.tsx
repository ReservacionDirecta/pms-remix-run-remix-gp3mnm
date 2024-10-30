interface ReservationSummaryProps {
  reservationData: {
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
    room?: {
      type: string;
      price: number;
    };
    guest?: {
      name: string;
      email: string;
      phone: string;
    };
    extras?: Array<{
      name: string;
      price: number;
    }>;
    payment?: {
      method: string;
      total: number;
    };
  };
}

export function ReservationSummary({ reservationData }: ReservationSummaryProps) {
  const calculateNights = () => {
    if (!reservationData.checkIn || !reservationData.checkOut) return 0;
    const start = new Date(reservationData.checkIn);
    const end = new Date(reservationData.checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Resumen de la Reserva</h3>
      
      <div className="space-y-4">
        {/* Fechas */}
        {(reservationData.checkIn || reservationData.checkOut) && (
          <div className="border-b pb-4 dark:border-gray-700">
            <h4 className="text-sm font-medium mb-2">Fechas</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Check-in</span>
                <p>{reservationData.checkIn}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Check-out</span>
                <p>{reservationData.checkOut}</p>
              </div>
            </div>
            {nights > 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {nights} noche{nights !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        )}

        {/* Huéspedes */}
        {(reservationData.adults || reservationData.children) && (
          <div className="border-b pb-4 dark:border-gray-700">
            <h4 className="text-sm font-medium mb-2">Huéspedes</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Adultos</span>
                <p>{reservationData.adults}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Niños</span>
                <p>{reservationData.children}</p>
              </div>
            </div>
          </div>
        )}

        {/* Habitación */}
        {reservationData.room && (
          <div className="border-b pb-4 dark:border-gray-700">
            <h4 className="text-sm font-medium mb-2">Habitación</h4>
            <p>{reservationData.room.type}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              S/. {reservationData.room.price} / noche
            </p>
          </div>
        )}

        {/* Datos del huésped */}
        {reservationData.guest && (
          <div className="border-b pb-4 dark:border-gray-700">
            <h4 className="text-sm font-medium mb-2">Datos del huésped</h4>
            <p>{reservationData.guest.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{reservationData.guest.email}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{reservationData.guest.phone}</p>
          </div>
        )}

        {/* Extras */}
        {reservationData.extras && reservationData.extras.length > 0 && (
          <div className="border-b pb-4 dark:border-gray-700">
            <h4 className="text-sm font-medium mb-2">Servicios adicionales</h4>
            {reservationData.extras.map((extra, index) => (
              <div key={index} className="flex justify-between">
                <span>{extra.name}</span>
                <span>S/. {extra.price}</span>
              </div>
            ))}
          </div>
        )}

        {/* Total */}
        {reservationData.payment && (
          <div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>S/. {reservationData.payment.total}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Método de pago: {reservationData.payment.method}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 