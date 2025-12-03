import styles from './Others.module.scss';

const Others = () => {
    return (
        <div className={styles.others}>
            <h2 className={styles.title}>기타</h2>
            <div className={styles.sections}>
                {/* 학력 */}
                <div className={styles.section}>
                    <h3 className={styles.section_title}>학력</h3>
                    <div className={styles.content}>
                        <div className={styles.item}>
                            <div className={styles.item_header}>
                                <div className={styles.item_info}>
                                    <h4 className={styles.item_name}>
                                        학점은행제
                                    </h4>
                                    <span className={styles.item_detail}>
                                        컴퓨터 공학
                                    </span>
                                </div>
                                <span className={styles.item_period}>
                                    2024.03 - 2025.08
                                </span>
                            </div>
                            <div className={styles.item_description}>
                                <p>졸업</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 자격증 */}
                {/* <div className={styles.section}>
                    <h3 className={styles.section_title}>자격증</h3>
                    <div className={styles.content}>
                        <div className={styles.item}>
                            <div className={styles.item_header}>
                                <div className={styles.item_info}>
                                    <h4 className={styles.item_name}>
                                        정보처리기사
                                    </h4>
                                    <span className={styles.item_detail}>
                                        한국산업인력공단
                                    </span>
                                </div>
                                <span className={styles.item_period}>
                                    2025.12
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* 국비지원 프로젝트 */}
                <div className={styles.section}>
                    <h3 className={styles.section_title}>교육 이수</h3>
                    <div className={styles.content}>
                        <div className={styles.item}>
                            <div className={styles.item_header}>
                                <div className={styles.item_info}>
                                    <h4 className={styles.item_name}>
                                        멀티캠퍼스
                                    </h4>
                                    <span className={styles.item_detail}>
                                        채용연계 풀스택 개발자
                                        부트캠프(스프링&리액트)
                                    </span>
                                </div>
                                <span className={styles.item_period}>
                                    2023.01 - 2023.06
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Others;
