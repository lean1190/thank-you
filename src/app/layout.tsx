import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
    title: 'Thank you for trusting me!',
    description: 'All my gratitude to you 🙏',
    icons: {
        icon: '/favicon.ico'
    }
};

const font = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap'
});

export default function RootLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
