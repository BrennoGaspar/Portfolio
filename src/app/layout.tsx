import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Brenno Gaspar | Full Stack Developer",
  description: "Portfólio de Brenno Gaspar, desenvolvedor focado em aplicações web e mobile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
