import { Link } from "@remix-run/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-30">
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <img 
                src="/images/sirvoy-logo.png" 
                alt="Sirvoy" 
                className="h-6 w-auto"
              />
            </div>
            <span className="text-lg font-semibold hidden md:block">
              Hotel Peña Linda
            </span>
          </Link>
        </div>

        {/* Perfil y menú */}
        <div className="relative">
          <button
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden md:block">
              Admin User
            </span>
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden">
              <img
                src="/images/profile-placeholder.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </button>

          {/* Menú desplegable del perfil */}
          <AnimatePresence>
            {isProfileMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-1"
                >
                  <Link
                    to="/perfil"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Mi Perfil
                  </Link>
                  <Link
                    to="/configuracion"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Configuración
                  </Link>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                  <button
                    onClick={() => {/* Implementar logout */}}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    Cerrar Sesión
                  </button>
                </motion.div>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsProfileMenuOpen(false)}
                ></div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
} 