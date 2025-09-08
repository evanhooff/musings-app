import Link from "next/link";
import React from "react";

import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Misses Monday -Blues Pop/Rock Band',
  description: 'Blues Pop/Rock Band from the Netherlands.',
  keywords: 'Misses Monday, blues pop/rock, Dutch band, rock music, blues, women in blues',
  authors: [{ name: 'Misses Monday' }],
  openGraph: {
    title: 'Misses Monday - Blues Pop/Rock Band',
    description: 'Blues Pop from the Netherlands.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
