'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import styles from './ProjectDetailModal.module.scss';
import { useEffect } from 'react';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Mdx from './Mdx';

import type { ProjectDetail } from '@/types/projects';

const ProjectDetailModal = ({
    project,
    content,
}: {
    project: ProjectDetail;
    content: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, unknown>
    >;
}) => {
    const { title, thumbnail, period } = project;
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const backgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        router.back();
    };

    const contentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.modal} onClick={backgroundClick}>
            <div className={styles.content_box} onClick={contentClick}>
                <div className={styles.overview}>
                    <div className={styles.overview_image}>
                        <Image
                            src={thumbnail}
                            alt={title}
                            fill
                            className={styles.image}
                        />
                    </div>
                    <p className={styles.overview_title}> {title} </p>
                    <p className={styles.overview_period}>
                        {period.start} - {period.end}
                    </p>
                </div>
                <div className={styles.detail}>
                    <button
                        className={styles.close}
                        onClick={() => router.back()}
                    >
                        <IoClose size={32} />
                    </button>
                    <Mdx source={content} />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;
