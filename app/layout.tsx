import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '@/containers/Footer';
import ThemeProviders from '@/providers/ThemeProviders';
import Header from '@/containers/Header';

import './globals.scss';

// 게시글 디테일 코드 하이라이팅 테마 css
import 'highlight.js/styles/felipec.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

// 메타데이터 설정
export const metadata: Metadata = {
    title: '송경세의 개발 블로그',
    description: '송경세의 개발 블로그입니다.',
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
