interface Extra {
  id: string;
  name: string;
  description: string;
  price: number;
  priceType: 'per_night' | 'one_time';
  icon: string;
}

interface ExtrasSelectionProps {
  selectedExtras: string[];
  onToggleExtra: (extraId: string) => void;
  nights: number;
}

export function ExtrasSelection({ selectedExtras, onToggleExtra, nights }: ExtrasSelectionProps) {
  const extras: Extra[] = [
    {
      id: "breakfast",
      name: "Desayuno buffet",
      description: "Desayuno completo con variedad de opciones frescas y saludables",
      price: 25,
      priceType: "per_night",
      icon: "🍳"
    },
    {
      id: "parking",
      name: "Estacionamiento",
      description: "Estacionamiento privado y seguro",
      price: 15,
      priceType: "per_night",
      icon: "🚗"
    },
    {
      id: "spa",
      name: "Acceso al spa",
      description: "Acceso completo a nuestras instalaciones de spa y bienestar",
      price: 45,
      priceType: "per_night",
      icon: "💆‍♂️"
    },
    {
      id: "airport",
      name: "Traslado al aeropuerto",
      description: "Servicio de transporte privado hacia/desde el aeropuerto",
      price: 50,
      priceType: "one_time",
      icon: "✈️"
    },
    {
      id: "late_checkout",
      name: "Late check-out",
      description: "Salida tardía hasta las 16:00 (sujeto a disponibilidad)",
      price: 30,
      priceType: "one_time",
      icon: "⏰"
    }
  ];

  const calculateExtraPrice = (extra: Extra) => {
    return extra.priceType === 'per_night' ? extra.price * nights : extra.price;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {extras.map((extra) => (
          <div
            key={extra.id}
            className={`
              relative 
              rounded-lg 
              border-2
              p-6 
              cursor-pointer 
              transition-all
              ${
                selectedExtras.includes(extra.id)
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-200'
              }
            `}
            onClick={() => onToggleExtra(extra.id)}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{extra.icon}</span>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{extra.name}</h3>
                  <div className="text-right">
                    <p className="font-bold">S/. {calculateExtraPrice(extra)}</p>
                    <p className="text-xs text-gray-500">
                      {extra.priceType === 'per_night' ? 'por noche' : 'único pago'}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {extra.description}
                </p>
              </div>
            </div>

            {/* Indicador de selección */}
            {selectedExtras.includes(extra.id) && (
              <div className="absolute top-4 right-4">
                <span className="text-primary-600">✓</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 