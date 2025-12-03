import styles from './MdxVideo.module.scss';

type MdxVideoProps = {
    /** YouTube 링크 (watch, share, 또는 embed 형식 모두 허용) */
    src: string;
    /** iframe title - 접근성용, 옵션이지만 넣어주는 것을 추천 */
    title?: string;
};

// YouTube URL을 embed용 URL로 변환 (watch / share 링크 지원)
const toEmbedUrl = (url: string) => {
    try {
        const u = new URL(url, 'https://www.youtube.com');

        // https://www.youtube.com/watch?v=ID
        if (u.hostname.includes('youtube.com') && u.pathname === '/watch') {
            const v = u.searchParams.get('v');
            if (v) return `https://www.youtube.com/embed/${v}`;
        }

        // https://youtu.be/ID
        if (u.hostname === 'youtu.be') {
            const id = u.pathname.replace('/', '');
            if (id) return `https://www.youtube.com/embed/${id}`;
        }

        // 이미 embed 형식이거나 기타: 그대로 사용
        return url;
    } catch {
        return url;
    }
};

const MdxVideo = ({ src, title }: MdxVideoProps) => {
    const embedSrc = toEmbedUrl(src);

    return (
        <div className={styles.videoWrapper}>
            <iframe
                className={styles.iframe}
                src={embedSrc}
                title={title ?? 'YouTube video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
};

export default MdxVideo;
