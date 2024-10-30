import { Outlet } from "@remix-run/react";

export default function ConfiguracionLayout() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <nav className="col-span-3">
        {/* Menú lateral de configuración */}
      </nav>
      <div className="col-span-9">
        <Outlet />
      </div>
    </div>
  );
} 