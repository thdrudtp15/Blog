import styles from './TechStack.module.scss';

import { FRONTEND, LANGUAGE } from '@/constants/techStack';

const Stacks = ({
    category,
    technologies,
}: {
    category: string;
    technologies: { name: string; icon: React.ReactNode; category: string }[];
}) => {
    return (
        <div className={styles.category}>
            <div className={styles.category_header}>
                <h3 className={styles.category_title}>{category}</h3>
                <div className={styles.category_line}></div>
            </div>
            <div className={styles.grid}>
                {technologies
                    .filter((tech) => tech.category === category)
                    .map((tech) => (
                        <div key={tech.name} className={styles.tech_item}>
                            <div className={styles.tech_image_wrapper}>
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
    );
};

const TechStack = () => {
    return (
        <div className={styles.techStack}>
            <h2 className={styles.title}>기술 스택</h2>
            <div className={styles.categories}>
                <Stacks category="Frontend" technologies={FRONTEND} />
                <Stacks category="Language" technologies={LANGUAGE} />
            </div>
        </div>
    );
};
export default TechStack;
