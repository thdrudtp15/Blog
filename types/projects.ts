export type ProjectItem = {
    title: string;
    thumbnail: string;
    description: string;
    period: { start: string; end: string };
    tech: string[];
    type: string;
    url: string;
    video?: string;
    github?: string;
    inProgress?: boolean;
};

export type ProjectDetail = ProjectItem & { content: string };
