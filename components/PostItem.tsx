import Link from 'next/link';
import React, { ReactNode } from 'react';
import Image from 'next/image';

import TagItem from '@/components/TagItem';

import { formatDate } from '@/utils/formatDate';

import styles from './PostItem.module.scss';

const PostItem = ({
    slug,
    children,
}: {
    slug: string;
    children: ReactNode;
}) => {
    return (
        <Link href={`/${slug}`}>
            <article className={styles.container}>{children}</article>
        </Link>
    );
};

export default PostItem;

const Title = ({ title }: { title: string }) => {
    return <h3 className={styles.title}>{title}</h3>;
};

const Date = ({ date }: { date: string }) => {
    return <p className={styles.date}>{formatDate(date)}</p>;
};

const Cover = ({ cover }: { cover: string }) => {
    const blurDataURL =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==';

    return (
        <div className={styles.cover}>
            <Image
                src={cover}
                alt="커버 이미지"
                fill
                placeholder="blur"
                blurDataURL={blurDataURL}
            />
        </div>
    );
};

const Description = ({ description }: { description: string }) => {
    return <p className={styles.description}>{description}</p>;
};

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <div className={styles.tags}>
            {tags.slice(0, 3).map((tag) => (
                <React.Fragment key={tag}>
                    <TagItem tag={tag} />
                </React.Fragment>
            ))}
        </div>
    );
};

PostItem.Date = Date;
PostItem.Cover = Cover;
PostItem.Title = Title;
PostItem.Description = Description;
PostItem.Tags = Tags;
