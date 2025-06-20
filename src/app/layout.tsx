import "@/styles/global.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdegaTech - PDV Completo para seu Negócio",
  description: "Transforme seu celular em um PDV completo. Controle vendas, estoque e finanças do seu estabelecimento de forma simples e eficiente.",
  keywords: ["PDV", "ponto de venda", "adega", "comércio", "vendas", "estoque", "finanças"],
  authors: [{ name: "AdegaTech" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
