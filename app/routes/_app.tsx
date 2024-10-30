// Layout principal que contiene el Sidebar
import { Outlet } from "@remix-run/react";
import { Sidebar } from "~/components/layout/Sidebar";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
} 