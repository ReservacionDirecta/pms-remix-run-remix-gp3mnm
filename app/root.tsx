import { useEffect } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { RootLayout } from "~/components/layout/root-layout";

import "./tailwind.css";

export const meta = () => {
  return [
    { title: "PMS - Sistema de Gestión Hotelera" },
    { name: "description", content: "Sistema de gestión hotelera" },
  ];
};

export const links = () => {
  return [
    { rel: "icon", href: "/favicon.ico" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    },
  ];
};

export default function App() {
  useEffect(() => {
    // Inicialización del tema
    if (typeof window !== 'undefined') {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <html lang="es" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>PMS</title>
      </head>
      <body className="h-full bg-gray-50 dark:bg-gray-900">
        <RootLayout>
          <Outlet />
        </RootLayout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
