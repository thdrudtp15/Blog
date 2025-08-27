import { ReactNode } from 'react';
import { notFound } from 'next/navigation';

import Header from '@/components/Header';

const Layout = ({ children }: { children: ReactNode }) => {
    if (process.env.NODE_ENV !== 'development') notFound();
    return <>{children}</>;
};

export default Layout;
