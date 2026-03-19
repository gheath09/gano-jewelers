import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GANO — Private Jeweler',
  description: 'Galina is a private jeweler specializing in custom engagement rings, diamond sourcing, and Rolex sourcing. Personal appointments available.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
