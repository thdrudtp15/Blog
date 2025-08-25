'use client';
import { ThemeProvider } from 'next-theme';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const ThemeProviders = ({ children }: Props) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviders;
