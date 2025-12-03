import {
    RiReactjsLine,
    RiNextjsFill,
    RiJavascriptLine,
    RiTailwindCssFill,
    RiHtml5Line,
    RiCss3Line,
} from 'react-icons/ri';
import { SiTypescript, SiRedux, SiReactquery } from 'react-icons/si';

export const FRONTEND = [
    {
        name: 'React',
        icon: <RiReactjsLine color="#61DAFB" size={64} />,
        category: 'Frontend',
    },
    {
        name: 'Next.js',
        icon: <RiNextjsFill style={{ color: 'var(--foreground)' }} size={64} />,
        category: 'Frontend',
    },
    {
        name: 'Tailwind CSS',
        icon: <RiTailwindCssFill color="#06B6D4" size={64} />,
        category: 'Frontend',
    },

    {
        name: 'HTML',
        icon: <RiHtml5Line color="#E34F26" size={64} />,
        category: 'Frontend',
    },
    {
        name: 'CSS',
        icon: <RiCss3Line color="#1572B6" size={64} />,
        category: 'Frontend',
    },
    {
        name: 'Redux Toolkit',
        icon: <SiRedux color="#764ABC" size={64} />,
        category: 'Frontend',
    },
    {
        name: 'React Query',
        icon: <SiReactquery color="#FF4154" size={64} />,
        category: 'Frontend',
    },
];
export const LANGUAGE = [
    {
        name: 'TypeScript',
        icon: <SiTypescript color="#3178C6" size={52} />,
        category: 'Language',
    },
    {
        name: 'JavaScript',
        icon: <RiJavascriptLine color="#F7DF1E" size={64} />,
        category: 'Language',
    },
];
