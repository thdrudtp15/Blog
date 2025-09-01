export type Category = 'javascript' | 'react' | 'next.js' | 'css' | 'html' | string | null;

export type Post = {
    id?: number;
    slug: string;
    title: string;
    description: string;
    date: string;
    category: Category;
    tags: string[];
    cover: string;
    // readingMinutes: number;
    content: string;
};
