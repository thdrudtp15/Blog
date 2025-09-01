import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import ThemeProviders from '@/providers/ThemeProviders';
import Header from '@/components/Header';

import './globals.scss';
import 'highlight.js/styles/felipec.css'; // 원하는 테마

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '0x534B53',
    description: '배운걸 적어요',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <ThemeProviders>
                    <Header />
                    <main className="content">{children}</main>
                    <Footer />
                </ThemeProviders>
            </body>
        </html>
    );
}
