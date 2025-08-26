export type Post = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    cover: string;
    readingMinutes: number;
    content: string;
};
