import styles from './TechStack.module.scss';

import {
    RiReactjsLine,
    RiNextjsFill,
    RiJavascriptLine,
    RiTailwindCssFill,
    RiHtml5Line,
    RiCss3Line,
} from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';

const TechStack = () => {
    const technologies = [
        {
            name: 'React',
            icon: <RiReactjsLine color="#61DAFB" size={64} />,
            category: 'Frontend',
        },
        {
            name: 'Next.js',
            icon: (
                <RiNextjsFill
                    style={{ color: 'var(--foreground)' }}
                    size={64}
                />
            ),
            category: 'Frontend',
        },
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
    ];

    const categories = [...new Set(technologies.map((tech) => tech.category))];

    return (
        <div className={styles.techStack}>
            <h2 className={styles.title}>기술 스택</h2>
            <div className={styles.categories}>
                {categories.map((category) => (
                    <div key={category} className={styles.category}>
                        <div className={styles.category_header}>
                            <h3 className={styles.category_title}>
                                {category}
                            </h3>
                            <div className={styles.category_line}></div>
                        </div>
                        <div className={styles.grid}>
                            {technologies
                                .filter((tech) => tech.category === category)
                                .map((tech) => (
                                    <div
                                        key={tech.name}
                                        className={styles.tech_item}
                                    >
                                        <div
                                            className={
                                                styles.tech_image_wrapper
                                            }
                                        >
                                            <div className={styles.tech_image}>
                                                {tech.icon}
                                            </div>
                                        </div>
                                        <span className={styles.tech_name}>
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TechStack;
