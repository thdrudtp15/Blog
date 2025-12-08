import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import type { ProjectDetail } from '@/types/projects';

const loadProjects = (): ProjectDetail[] => {
    const projectsDirectory = path.join(process.cwd(), 'projects');
    const filenames = fs.readdirSync(projectsDirectory);

    const projects = filenames.map((filename) => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const { content, data } = matter(fileContents);

        return {
            title: data.title,
            thumbnail: data.thumbnail,
            description: data.description,
            period: data.period,
            tech: data.tech,
            type: data.type,
            content: content,
            url: data.url,
            video: data.video,
            github: data.github,
        };
    });

    console.log(12);

    return projects;
};

export const projects = loadProjects();

export const getProjects = ({ title }: { title: string }) => {
    const project = projects.find(
        (project) => project.title === decodeURIComponent(title)
    );
    return project;
};
