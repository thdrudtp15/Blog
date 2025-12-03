'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { HiExternalLink } from 'react-icons/hi';
import { FaYoutube } from 'react-icons/fa';
import styles from './ProjectDetailModal.module.scss';
import { useEffect } from 'react';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Mdx from './Mdx';
import TechStackItem from './TechStackItem';

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
    const { title, thumbnail, period, description, tech, url, video } = project;
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
                <div className={styles.detail}>
                    <button
                        className={styles.close}
                        onClick={() => router.back()}
                    >
                        <IoClose size={32} />
                    </button>
                    <div className={styles.overview_banner}>
                        <Image src={thumbnail} alt={title} fill />
                    </div>
                    <div className={styles.overview_content}>
                        <div className={styles.overview_title}>{title}</div>
                        <p className={styles.overview_description}>
                            {description}
                        </p>
                        <div className={styles.overview_period}>
                            개발 기간: {period.start} - {period.end}
                        </div>
                        <div className={styles.overview_tech}>
                            {tech.map((techItem) => (
                                <TechStackItem key={techItem} tech={techItem} />
                            ))}
                        </div>
                        {url && (
                            <Link
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.overview_link}
                            >
                                <HiExternalLink size={18} />
                                <span>프로젝트 링크</span>
                            </Link>
                        )}
                        {video && (
                            <Link
                                href={video}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    styles.overview_link + ' ' + styles.video
                                }
                            >
                                <FaYoutube size={18} />
                                <span>구동 영상</span>
                            </Link>
                        )}
                    </div>
                    <Mdx source={content} />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;
