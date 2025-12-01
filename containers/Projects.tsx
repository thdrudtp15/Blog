import styles from './Projects.module.scss';
import ProjectItem from '@/components/ProjectItem';

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h2 className={styles.title}>이런 프로젝트를 진행했어요</h2>
            <div className={styles.grid}>
                <ProjectItem
                    id="project-1"
                    image="/images/projects/project1.jpg"
                    title="Project 1"
                    description="Project 1 description"
                    period="2024.01.01 - 2024.01.01"
                    techStack={['React', 'Next.js', 'TypeScript']}
                />
                <ProjectItem
                    id="project-2"
                    image="/images/projects/project1.jpg"
                    title="Project 2"
                    description="Project 2 description"
                    period="2024.01.01 - 2024.01.01"
                    techStack={['React', 'Next.js', 'TypeScript']}
                />
                <ProjectItem
                    id="project-3"
                    image="/images/projects/project1.jpg"
                    title="Project 3"
                    description="Project 3 description"
                    period="2024.01.01 - 2024.01.01"
                    techStack={['React', 'Next.js', 'TypeScript']}
                />
            </div>
        </div>
    );
};
export default Projects;
