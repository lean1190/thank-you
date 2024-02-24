import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thank you for trusting me!',
    description: 'All my gratitude to you 🙏',
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
