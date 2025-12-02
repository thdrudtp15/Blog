import styles from './Projects.module.scss';
import ProjectItem from '@/components/ProjectItem';
import { projects } from '@/utils/getProjects';
import React from 'react';

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h2 className={styles.title}>프로젝트</h2>
            <div className={styles.grid}>
                {projects.map((project, idx) => (
                    <React.Fragment key={idx}>
                        <ProjectItem
                            title={project.title}
                            thumbnail={project.thumbnail}
                            description={project.description}
                            period={project.period}
                            tech={project.tech}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
export default Projects;
