import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Button } from "~/components/ui/button";

export function SearchReservations() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Búsqueda Principal */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar reservas..."
          className="w-full pl-12 pr-4 h-12 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
        
        <Button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-neutral-100 rounded-md"
        >
          {isFiltersOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Filter className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Filtros */}
      {isFiltersOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-neutral-50 rounded-lg">
          {/* Check-in */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Check-in
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-neutral-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Check-out */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Check-out
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-neutral-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Estado del pago */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Estado del pago
            </label>
            <select
              className="w-full rounded-lg border border-neutral-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="todos">Todos</option>
              <option value="pendiente">Pendiente</option>
              <option value="pagado">Pagado</option>
              <option value="parcial">Pago parcial</option>
            </select>
          </div>

          {/* Tipo de habitación */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Tipo de habitación
            </label>
            <select
              className="w-full rounded-lg border border-neutral-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="todos">Todos</option>
              <option value="individual">Individual</option>
              <option value="doble">Doble</option>
              <option value="suite">Suite</option>
            </select>
          </div>

          {/* Origen */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Origen
            </label>
            <select
              className="w-full rounded-lg border border-neutral-200 p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="todos">Todos</option>
              <option value="directo">Directo</option>
              <option value="booking">Booking</option>
              <option value="expedia">Expedia</option>
            </select>
          </div>
        </div>
      )}

      {/* Botón de búsqueda */}
      {isFiltersOpen && (
        <div className="flex justify-end">
          <Button
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            onClick={() => {/* Implementar búsqueda */}}
          >
            Buscar
          </Button>
        </div>
      )}
    </div>
  );
} 