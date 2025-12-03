import styles from './AboutMe.module.scss';

const Item = ({
    icon,
    title,
    description,
}: {
    icon: string;
    title: string;
    description: string;
}) => {
    return (
        <div className={styles.item}>
            <div className={styles.item_icon}>{icon}</div>
            <div className={styles.item_content}>
                <h3 className={styles.item_title}>{title}</h3>
                <p className={styles.item_description}>{description}</p>
            </div>
        </div>
    );
};

const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <h2 className={styles.title}>소개</h2>
            <div className={styles.content}>
                <Item
                    icon="💡"
                    title="문제 해결을 즐기는 개발자"
                    description="복잡한 문제를 분석하고, 효율적인 해결책을 찾아내는 것을 좋아합니다."
                />
                <Item
                    icon="🚀"
                    title="지속적인 학습과 성장"
                    description="새로운 기술과 트렌드를 배우고 적용하는 것을 좋아하고, 항상 더 나은 방법을 찾기 위해 노력합니다."
                />
                <Item
                    icon="🎨"
                    title="사용자 경험을 중시"
                    description="단순히 작동하는 코드가 아닌, 사용자가 즐겁고 편리하게 사용할 수 있는 인터페이스를 만드는 것을 목표로 합니다."
                />
                <Item
                    icon="⚡"
                    title="성능 최적화에 관심"
                    description="빠르고 효율적인 애플리케이션을 만들기 위해 성능 개선에 지속적인 관심을 갖고 있습니다."
                />

                {/* <div className={styles.item}>
                    <div className={styles.item_icon}>🤝</div>
                    <div className={styles.item_content}>
                        <h3 className={styles.item_title}>협업과 소통</h3>
                        <p className={styles.item_description}>
                            팀원들과의 원활한 소통을 통해 더 나은 결과물을
                            만들어내는 것을 중요하게 생각합니다.
                        </p>
                    </div>
                </div> */}

                {/* <div className={styles.item}>
                    <div className={styles.item_icon}>📚</div>
                    <div className={styles.item_content}>
                        <h3 className={styles.item_title}>기술 블로그 운영</h3>
                        <p className={styles.item_description}>
                            배운 내용을 정리하고 공유하는 것을 통해 지식을
                            나누고 함께 성장하는 것을 추구합니다.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};
export default AboutMe;
