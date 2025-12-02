import Image from 'next/image';
import styles from './MdxImage.module.scss';

const MdxImage = ({
    src,
    width = '100%',
    height,
    alt,
}: {
    src: string;
    width: number | string;
    height: number;
    alt: string;
}) => {
    return (
        <div className={styles.mdxImage} style={{ width, height }}>
            <Image src={src} fill alt={alt} sizes="100vw" />
        </div>
    );
};

export default MdxImage;
