import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Select } from "~/components/ui/select";

export function SearchBox() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    checkIn: "",
    checkOut: "",
    estado: "",
    fechaCreacion: "",
    fechaCancelacion: "",
    tipoHabitacion: "",
    metodoPago: "",
  });

  const estadosReserva = [
    { value: "", label: "Todos los estados" },
    { value: "confirmada", label: "Confirmada" },
    { value: "pendiente", label: "Pendiente" },
    { value: "cancelada", label: "Cancelada" },
    { value: "completada", label: "Completada" },
  ];

  const tiposHabitacion = [
    { value: "", label: "Todos los tipos" },
    { value: "individual", label: "Individual" },
    { value: "doble", label: "Doble" },
    { value: "suite", label: "Suite" },
    { value: "familiar", label: "Familiar" },
  ];

  const metodosPago = [
    { value: "", label: "Todos los métodos" },
    { value: "efectivo", label: "Efectivo" },
    { value: "tarjeta", label: "Tarjeta" },
    { value: "transferencia", label: "Transferencia" },
    { value: "yape", label: "Yape" },
    { value: "plin", label: "Plin" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {/* Barra de búsqueda principal */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <Input
            type="text"
            placeholder="Buscar por nombre, email, teléfono o número de reserva..."
            value={filters.searchTerm}
            onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
            className="pl-10"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* Filtros avanzados */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Fechas de Check-in/Check-out */}
        <div className="space-y-4">
          <Input
            type="date"
            label="Check-in"
            value={filters.checkIn}
            onChange={(e) => setFilters({ ...filters, checkIn: e.target.value })}
          />
          <Input
            type="date"
            label="Check-out"
            value={filters.checkOut}
            onChange={(e) => setFilters({ ...filters, checkOut: e.target.value })}
          />
        </div>

        {/* Fechas administrativas */}
        <div className="space-y-4">
          <Input
            type="date"
            label="Fecha de creación"
            value={filters.fechaCreacion}
            onChange={(e) => setFilters({ ...filters, fechaCreacion: e.target.value })}
          />
          <Input
            type="date"
            label="Fecha de cancelación"
            value={filters.fechaCancelacion}
            onChange={(e) => setFilters({ ...filters, fechaCancelacion: e.target.value })}
          />
        </div>

        {/* Selectores */}
        <div className="space-y-4">
          <Select
            label="Estado de reserva"
            options={estadosReserva}
            value={filters.estado}
            onChange={(e) => setFilters({ ...filters, estado: e.target.value })}
          />
          <Select
            label="Tipo de habitación"
            options={tiposHabitacion}
            value={filters.tipoHabitacion}
            onChange={(e) => setFilters({ ...filters, tipoHabitacion: e.target.value })}
          />
          <Select
            label="Método de pago"
            options={metodosPago}
            value={filters.metodoPago}
            onChange={(e) => setFilters({ ...filters, metodoPago: e.target.value })}
          />
        </div>
      </div>

      {/* Botones de acción */}
      <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
        <button
          onClick={() => setFilters({
            searchTerm: "",
            checkIn: "",
            checkOut: "",
            estado: "",
            fechaCreacion: "",
            fechaCancelacion: "",
            tipoHabitacion: "",
            metodoPago: "",
          })}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
        >
          Limpiar filtros
        </button>
        <button
          onClick={() => {/* Implementar búsqueda */}}
          className="px-4 py-2 text-sm font-medium text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
        >
          Buscar
        </button>
      </div>
    </div>
  );
} 