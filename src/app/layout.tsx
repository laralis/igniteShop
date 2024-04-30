import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Shirts for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto bg-gray-900 text-gray-100 ">
          <Header />
        <div className='flex flex-col items-start justify-center min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  );
}
