// app/layout.tsx

import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gano Jewelers',
  description: 'Your description for Gano Jewelers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}