import React, { ReactNode } from 'react';
import styles from './Banner.module.scss';
import TagItem from '@/compositions/TagItem';

const Banner = ({ children }: { children: ReactNode }) => {
    return <div className={styles.banner}>{children}</div>;
};

export default Banner;

const Title = ({ title }: { title: string }) => {
    return <h1 className={styles.title}>{title}</h1>;
};

const Description = ({ description }: { description: string }) => {
    return <p className={styles.description}>{description}</p>;
};

const Date = ({ date }: { date: string }) => {
    return <time className={styles.date}>{date}</time>;
};

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <div className={styles.tags}>
            {tags.map((tag) => (
                <React.Fragment key={tag}>
                    <TagItem tag={tag} />
                </React.Fragment>
            ))}
        </div>
    );
};

Banner.Description = Description;
Banner.Title = Title;
Banner.Date = Date;
Banner.Tags = Tags;
