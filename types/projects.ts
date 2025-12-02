export type ProjectItem = {
    title: string;
    thumbnail: string;
    description: string;
    period: { start: string; end: string };
    tech: string[];
};

export type ProjectDetail = ProjectItem & { content: string };
