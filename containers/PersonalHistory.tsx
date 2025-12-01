import styles from './PersonalHistory.module.scss';

const PersonalHistory = () => {
    return (
        <div className={styles.personalHistory}>
            <h2 className={styles.title}>경력</h2>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.company_info}>
                        <h3 className={styles.company_name}>엔아이소프트</h3>
                        <span className={styles.position}>프론트엔드 개발</span>
                    </div>
                    <span className={styles.period}>2023.10 - 2025.07</span>
                </div>
                <div className={styles.description}>
                    <p>
                        주요 업무 및 성과에 대한 설명을 작성합니다. 프로젝트
                        경험, 기술 스택, 성과 등을 간략하게 설명할 수 있습니다.
                    </p>
                </div>
                <div className={styles.work_list}>
                    <h4 className={styles.work_list_title}>주요 업무</h4>
                    <ul>
                        <li>주요 업무 1</li>
                        <li>주요 업무 2</li>
                        <li>주요 업무 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default PersonalHistory;
