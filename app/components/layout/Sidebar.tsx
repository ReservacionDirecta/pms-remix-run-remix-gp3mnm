import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import { ThemeSwitch } from "~/components/ui/theme-switch";
import { MenuToggle } from "~/components/ui/menu-toggle";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();
  const [isConfigExpanded, setIsConfigExpanded] = useState(false);

  const mainNavigation = [
    { name: "Principal", href: "/", icon: "📊" },
    { name: "Reservar", href: "/reservar", icon: "➕" },
    { name: "Reservas", href: "/reservas", icon: "📝" },
    { name: "Calendario", href: "/calendario", icon: "📅" },
    { name: "Tarifas", href: "/tarifas", icon: "💰" },
    { name: "Habitaciones", href: "/habitaciones", icon: "🛏️" },
    { name: "Pagos", href: "/pagos", icon: "💳" },
    { name: "Estadísticas", href: "/estadisticas", icon: "📈" },
  ];

  const configNavigation = [
    { name: "Alojamiento", href: "/config/alojamiento", icon: "🏨" },
    { name: "Extras", href: "/config/extras", icon: "✨" },
    { name: "Precios", href: "/config/precios", icon: "💲" },
    { name: "Disponibilidad", href: "/config/disponibilidad", icon: "📊" },
    { name: "Motores de reservas", href: "/config/motores", icon: "⚙️" },
    { name: "Portal del huésped", href: "/config/portal", icon: "🔑" },
    { name: "Canales", href: "/config/canales", icon: "🔄" },
    { name: "Finanzas", href: "/config/finanzas", icon: "📊" },
    { name: "Comunicación", href: "/config/comunicacion", icon: "✉️" },
    { name: "Limpieza", href: "/config/limpieza", icon: "🧹" },
    { name: "Usuarios", href: "/config/usuarios", icon: "👥" },
  ];

  const accountNavigation = [
    { name: "Cuenta Sirvoy", href: "/cuenta", icon: "👤" },
    { name: "ReservacionDirecta", href: "/reservacion-directa", icon: "🎯" },
    { name: "Perfil de usuario", href: "/perfil", icon: "⚙️" },
    { name: "Soporte", href: "/soporte", icon: "❓" },
    { name: "Terminar sesión", href: "/logout", icon: "🚪" },
  ];

  return (
    <aside className={`
      fixed 
      inset-y-0 
      left-0 
      z-50 
      w-64 
      transform 
      bg-white 
      dark:bg-gray-800 
      transition-transform 
      duration-300 
      ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      md:translate-x-0
      border-r
      border-gray-200
      dark:border-gray-700
      overflow-y-auto
      flex
      flex-col
    `}>
      {/* Encabezado del sidebar */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/sirvoy-logo.png" 
              alt="Sirvoy" 
              className="h-8 w-auto"
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold truncate">
                Hotel Peña Linda Bungalows
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                ID 28190
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido scrolleable */}
      <div className="flex-1 overflow-y-auto">
        {/* Navegación principal */}
        <nav className="p-4 space-y-1">
          {mainNavigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex 
                  items-center 
                  px-4 
                  py-2 
                  text-sm 
                  font-medium 
                  rounded-lg 
                  transition-colors
                  ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-100'
                      : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                  }
                `}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Sección de Configuración Contraíble */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setIsConfigExpanded(!isConfigExpanded)}
            className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            <div className="flex items-center">
              <span className="mr-3">⚙️</span>
              <span>Configuración</span>
            </div>
            <motion.span
              animate={{ rotate: isConfigExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {isConfigExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <nav className="mt-2 space-y-1 pl-4">
                  {configNavigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`
                          flex 
                          items-center 
                          px-4 
                          py-2 
                          text-sm 
                          font-medium 
                          rounded-lg 
                          transition-colors
                          ${
                            isActive
                              ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-100'
                              : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                          }
                        `}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cuenta y configuración personal */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <nav className="space-y-1">
            {accountNavigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex 
                    items-center 
                    px-4 
                    py-2 
                    text-sm 
                    font-medium 
                    rounded-lg 
                    transition-colors
                    ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-100'
                        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50'
                    }
                    ${item.name === 'Terminar sesión' ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20' : ''}
                  `}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer fijo */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Tema
          </span>
          <ThemeSwitch />
        </div>
      </div>
    </aside>
  );
} 