import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facultad de Ciencias de la Administración - UNER",
  description:
    "Universidad Nacional de Entre Ríos - Facultad de Ciencias de la Administración",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <script
          src="https://cdn.botpress.cloud/desk/webchat/v4.0/inject.js"
          defer
        ></script>
        <script
          src="https://files.bpcontent.cloud/2025/10/19/19/20251019193303-NCT0Q9Q9.js"
          defer
        ></script>
      </body>
    </html>
  );
}
