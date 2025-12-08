import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectItem.module.scss';
import React from 'react';

import TechStackItem from '@/components/TechStackItem';
import type { ProjectItem } from '@/types/projects';

const ProjectItem = ({ project }: { project: ProjectItem }) => {
    const { title, thumbnail, description, period, tech, type } = project;

    const blurDataURL =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==';

    const content = (
        <Link href={`/about/${title}`} scroll={false} prefetch={true}>
            <div className={styles.projectItem}>
                <div className={styles.imageContainer}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className={styles.image}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        sizes="(max-width: 768px) 100vw, (max-width: 995px) 50vw, 33.33vw"
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.title_container}>
                            <h3 className={styles.title}>{title}</h3>
                            <span
                                className={`${styles.type} ${
                                    type === '개인 프로젝트'
                                        ? styles.type_personal
                                        : type === '팀 프로젝트'
                                        ? styles.type_team
                                        : styles.type_company
                                }`}
                            >
                                {type}
                            </span>
                        </div>
                        <span className={styles.period}>
                            {period.start} - {period.end}
                        </span>
                    </div>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.techStack}>
                        {tech.map((techItem, index) => (
                            <React.Fragment key={index}>
                                <TechStackItem tech={techItem} />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );

    return content;
};

export default ProjectItem;
