import { useState } from "react";
import { ProgressBar } from "~/components/reservas/progress-bar";
import { ReservationSummary } from "~/components/reservas/reservation-summary";
import { RoomSelection } from "~/components/reservas/steps/room-selection";
import { ExtrasSelection } from "~/components/reservas/steps/extras-selection";
import { motion, AnimatePresence } from "framer-motion";

interface ReservationData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  room?: {
    id: string;
    type: string;
    price: number;
  };
  extras: string[];
  guest?: {
    name: string;
    email: string;
    phone: string;
    document: string;
    nationality: string;
    specialRequests?: string;
  };
  payment?: {
    method: string;
    total: number;
  };
}

const STEPS = [
  {
    title: "Fechas",
    description: "Selección de fechas y huéspedes",
  },
  {
    title: "Habitación",
    description: "Selección de habitación",
  },
  {
    title: "Extras",
    description: "Servicios adicionales",
  },
  {
    title: "Huésped",
    description: "Datos del huésped",
  },
  {
    title: "Pago",
    description: "Método de pago",
  },
  {
    title: "Confirmación",
    description: "Resumen y confirmación",
  },
];

export default function ReservarPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [reservationData, setReservationData] = useState<ReservationData>({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    extras: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Calcular el número de noches
  const calculateNights = () => {
    if (!reservationData.checkIn || !reservationData.checkOut) return 0;
    const start = new Date(reservationData.checkIn);
    const end = new Date(reservationData.checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  // Validar fechas
  const validateDates = () => {
    const newErrors: Record<string, string> = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (!reservationData.checkIn) {
      newErrors.checkIn = "La fecha de entrada es requerida";
    } else {
      const checkIn = new Date(reservationData.checkIn);
      if (checkIn < today) {
        newErrors.checkIn = "La fecha de entrada no puede ser anterior a hoy";
      }
    }

    if (!reservationData.checkOut) {
      newErrors.checkOut = "La fecha de salida es requerida";
    } else if (reservationData.checkIn) {
      const checkIn = new Date(reservationData.checkIn);
      const checkOut = new Date(reservationData.checkOut);
      if (checkOut <= checkIn) {
        newErrors.checkOut = "La fecha de salida debe ser posterior a la fecha de entrada";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambio de paso
  const handleStepChange = async (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      // Validaciones específicas por paso
      switch (currentStep) {
        case 0:
          if (!validateDates()) return;
          break;
        case 1:
          if (!reservationData.room) {
            setErrors({ room: "Debes seleccionar una habitación" });
            return;
          }
          break;
        // Agregar más validaciones para otros pasos
      }
    }

    const newStep = direction === 'next' ? currentStep + 1 : currentStep - 1;
    setCurrentStep(newStep);
    setErrors({});
  };

  // Renderizar el contenido del paso actual
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Fecha de entrada
                </label>
                <input
                  type="date"
                  value={reservationData.checkIn}
                  onChange={(e) =>
                    setReservationData({ ...reservationData, checkIn: e.target.value })
                  }
                  min={new Date().toISOString().split('T')[0]}
                  className={`
                    w-full 
                    rounded-lg 
                    border 
                    p-2.5 
                    dark:bg-gray-700 
                    ${errors.checkIn ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                  `}
                />
                {errors.checkIn && (
                  <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Fecha de salida
                </label>
                <input
                  type="date"
                  value={reservationData.checkOut}
                  onChange={(e) =>
                    setReservationData({ ...reservationData, checkOut: e.target.value })
                  }
                  min={reservationData.checkIn || new Date().toISOString().split('T')[0]}
                  className={`
                    w-full 
                    rounded-lg 
                    border 
                    p-2.5 
                    dark:bg-gray-700 
                    ${errors.checkOut ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                  `}
                />
                {errors.checkOut && (
                  <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Adultos
                </label>
                <select
                  value={reservationData.adults}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      adults: parseInt(e.target.value),
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'adulto' : 'adultos'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Niños
                </label>
                <select
                  value={reservationData.children}
                  onChange={(e) =>
                    setReservationData({
                      ...reservationData,
                      children: parseInt(e.target.value),
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600"
                >
                  {[0, 1, 2, 3].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'niño' : 'niños'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <RoomSelection
            selectedRoom={reservationData.room?.id}
            onSelect={(roomId) => {
              // Aquí deberías obtener los detalles de la habitación seleccionada
              const roomDetails = {
                id: roomId,
                type: "Habitación Estándar", // Ejemplo
                price: 200, // Ejemplo
              };
              setReservationData({
                ...reservationData,
                room: roomDetails,
              });
            }}
            guests={{
              adults: reservationData.adults,
              children: reservationData.children,
            }}
          />
        );

      case 2:
        return (
          <ExtrasSelection
            selectedExtras={reservationData.extras}
            onToggleExtra={(extraId) => {
              const newExtras = reservationData.extras.includes(extraId)
                ? reservationData.extras.filter(id => id !== extraId)
                : [...reservationData.extras, extraId];
              setReservationData({
                ...reservationData,
                extras: newExtras,
              });
            }}
            nights={calculateNights()}
          />
        );

      // Agregar más casos para otros pasos
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Nueva Reserva</h1>

      <ProgressBar
        currentStep={currentStep}
        totalSteps={STEPS.length}
        steps={STEPS}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              {renderStepContent()}

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => handleStepChange('prev')}
                  disabled={currentStep === 0 || isLoading}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
                >
                  Anterior
                </button>
                <button
                  onClick={() => handleStepChange('next')}
                  disabled={isLoading}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50"
                >
                  {currentStep === STEPS.length - 1 ? "Confirmar reserva" : "Siguiente"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-1">
          <ReservationSummary reservationData={reservationData} />
        </div>
      </div>
    </div>
  );
} 