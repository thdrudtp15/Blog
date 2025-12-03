import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
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

// 메타데이터 설정
export const metadata: Metadata = {
    title: 'De95he Dev blog',
    description: '프론트엔드 공부 일지🐜',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.className}`}>
                <ThemeProviders>
                    <Header />
                    <main className="content">{children}</main>
                    <Footer />
                </ThemeProviders>
            </body>
        </html>
    );
}
