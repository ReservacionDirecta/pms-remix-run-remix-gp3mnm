import { Outlet } from "@remix-run/react";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 px-4 py-6 lg:px-8 lg:py-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
} 