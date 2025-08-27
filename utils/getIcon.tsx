import { RiVercelFill } from 'react-icons/ri';
import { RiReactjsFill } from 'react-icons/ri';
import { RiJavascriptFill } from 'react-icons/ri';
import { RiTerminalLine } from 'react-icons/ri';
import { RiCss3Fill } from 'react-icons/ri';
import { RiHtml5Fill } from 'react-icons/ri';

import { JSX } from 'react';

import type { Category } from '@/types/post';

export const getIcon = (category: Category) => {
    const obj: Record<string, JSX.Element> = {
        'next.js': <RiVercelFill color="#0070F3" fontSize={'2rem'} />,
        react: <RiReactjsFill color="#61DBFB" fontSize={'2rem'} />,
        javascript: <RiJavascriptFill color="#F7DF1E" fontSize={'2rem'} />,
        css: <RiCss3Fill color="#663399" fontSize={'2rem'} />,
        html: <RiHtml5Fill color="##E34C26" fontSize={'2rem'} />,
    };

    return obj[category] ?? <RiTerminalLine />;
};
