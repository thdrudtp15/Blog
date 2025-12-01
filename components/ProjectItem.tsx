import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectItem.module.scss';
import React from 'react';

import TechStackItem from '@/components/TechStackItem';
import type { ProjectItemProps } from '@/types/projects';

const ProjectItem = ({
    id,
    image,
    title,
    description,
    period,
    techStack,
    link,
}: ProjectItemProps) => {
    const blurDataURL =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==';

    const content = (
        <div className={styles.projectItem}>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.period}>{period}</span>
                </div>
                <p className={styles.description}>{description}</p>
                <div className={styles.techStack}>
                    {techStack.map((tech, index) => (
                        <React.Fragment key={index}>
                            <TechStackItem tech={tech} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );

    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                {content}
            </a>
        );
    }

    if (id) {
        return (
            <Link href={`/about/${id}`} className={styles.link} scroll={false}>
                {content}
            </Link>
        );
    }

    return content;
};

export default ProjectItem;
