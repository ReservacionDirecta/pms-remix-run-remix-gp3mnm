import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { motion, AnimatePresence } from "framer-motion";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-full">
      {/* Header */}
      <Header />

      {/* Overlay para móvil */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />

      {/* Contenido principal */}
      <div className={`
        min-h-full
        pt-16
        transition-all
        duration-300
        md:pl-64
      `}>
        <main className="p-4 md:p-6 pb-20 md:pb-6">
          {children}
        </main>
      </div>

      {/* Botón de menú móvil */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <motion.button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center px-4 py-3 rounded-full bg-primary-600 text-white shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
          <span className="ml-2 font-medium">Menú</span>
        </motion.button>
      </div>
    </div>
  );
} 