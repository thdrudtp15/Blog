'use client';

import { useRouter } from 'next/navigation';
import { IoClose } from 'react-icons/io5';
import styles from './modal.module.scss';
import { useEffect } from 'react';

const Page = () => {
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
                    <div className={styles.overview_image}>이미지</div>
                    <p className={styles.overview_title}>미라클 플레이</p>
                    <p className={styles.overview_period}>
                        2025.01.01 - 2025.01.01
                    </p>
                </div>
                <div className={styles.detail}>
                    <button
                        className={styles.close}
                        onClick={() => router.back()}
                    >
                        <IoClose size={32} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
