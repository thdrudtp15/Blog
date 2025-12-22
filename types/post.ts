export type Post = {
    idx?: number;
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    cover: string;
    content: string;
    inProgress?: boolean;
};
