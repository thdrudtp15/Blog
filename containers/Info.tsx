import styles from './Info.module.scss';
import Image from 'next/image';
import profile from '@/public/profile/profile.webp';

const Info = () => {
    return (
        <div className={styles.info}>
            <h1 className={styles.title}>
                안녕하세요 2년차 프론트엔드 개발자 송경세입니다.
            </h1>
            <div className={styles.profile}>
                <div className={styles.profile_image}>
                    <Image
                        src={profile}
                        alt="profile"
                        width={200}
                        height={200}
                        placeholder="blur"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.profile_text}>
                    <div className={styles.profile_text_item}>
                        <h2 className={styles.profile_text_item_name}>
                            ✉️ E-Mail
                        </h2>
                        <a
                            href="mailto:thdrudtp15@naver.com"
                            className={styles.profile_text_item_content}
                        >
                            thdrudtp15@naver.com
                        </a>
                    </div>
                    <div className={styles.profile_text_item}>
                        <h2 className={styles.profile_text_item_name}>
                            ☎️ Contact
                        </h2>
                        <a
                            href="tel:010-7219-7930"
                            className={styles.profile_text_item_content}
                        >
                            010-7219-7930
                        </a>
                    </div>
                    <div className={styles.profile_text_item}>
                        <h2 className={styles.profile_text_item_name}>
                            💻 Github
                        </h2>
                        <a
                            href="https://github.com/thdrudtp15"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.profile_text_item_content}
                        >
                            https://github.com/thdrudtp15
                        </a>
                    </div>
                    <div className={styles.profile_text_item}>
                        <h2 className={styles.profile_text_item_name}>
                            🌐 Blog
                        </h2>
                        <a
                            href="https://blog-eight-rho-53.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.profile_text_item_content}
                        >
                            https://blog-eight-rho-53.vercel.app/
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Info;
