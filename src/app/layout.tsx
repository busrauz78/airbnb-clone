import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import React from 'react';
import { Navbar, RegisterModal } from '@/components';
import { ToasterProvider } from '@/providers';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
