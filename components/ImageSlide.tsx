'use client';
import { useState } from 'react';
import styles from './ImageSlide.module.scss';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import Image from 'next/image';

const ImageSlide = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={styles.image_slide}>
            <div className={styles.image_slide_content}>
                {images.map((image, index) => (
                    <div
                        className={styles.image_slide_item}
                        key={index}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        <Image src={image} alt={image} fill />
                    </div>
                ))}
            </div>
            <div>
                <button
                    onClick={() => setCurrentIndex(currentIndex - 1)}
                    disabled={currentIndex === 0}
                    className={styles.image_slide_nav + ' ' + styles.left}
                >
                    <RiArrowLeftLine />
                </button>
                <button
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                    disabled={currentIndex === images.length - 1}
                    className={styles.image_slide_nav + ' ' + styles.right}
                >
                    <RiArrowRightLine />
                </button>
            </div>
        </div>
    );
};

export default ImageSlide;
