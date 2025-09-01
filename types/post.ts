export type Category = 'javascript' | 'react' | 'next.js' | 'css' | 'html' | string | null;

export type Post = {
    idx?: number;
    slug: string;
    title: string;
    description: string;
    date: string;
    category: Category;
    tags: string[];
    cover: string;
    content: string;
};
