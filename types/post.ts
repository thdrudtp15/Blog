import { StaticImageData } from 'next/image';

export type Post = {
    idx?: number;
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    cover: StaticImageData;
    content: string;
};
